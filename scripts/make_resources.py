#!/usr/bin/env python3
"""Generate branded HRPPI resource PDFs."""
import os
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.utils import ImageReader

BRAND = colors.HexColor("#144355")
ACCENT = colors.HexColor("#1b6b86")
GREY = colors.HexColor("#475569")
ASSETS = os.path.join(os.path.dirname(__file__), "..", "static", "assets")
LOGO = os.path.join(ASSETS, "1175_imgLanding_1_compamy-logo-ts1645560781.png")
OUT = os.path.join(ASSETS, "resources")
os.makedirs(OUT, exist_ok=True)

styles = getSampleStyleSheet()
H1 = ParagraphStyle("H1", parent=styles["Title"], textColor=BRAND, fontName="Helvetica-Bold", fontSize=24, leading=28, spaceAfter=4)
EYEBROW = ParagraphStyle("Eyebrow", parent=styles["Normal"], textColor=ACCENT, fontName="Helvetica-Bold", fontSize=10, leading=12, spaceAfter=2)
H2 = ParagraphStyle("H2", parent=styles["Heading2"], textColor=BRAND, fontName="Helvetica-Bold", fontSize=14, leading=18, spaceBefore=14, spaceAfter=6)
BODY = ParagraphStyle("Body", parent=styles["Normal"], textColor=GREY, fontName="Helvetica", fontSize=10.5, leading=16, spaceAfter=6)
ITEM = ParagraphStyle("Item", parent=BODY, leftIndent=0, spaceAfter=4)
FOOT = ParagraphStyle("Foot", parent=styles["Normal"], textColor=colors.HexColor("#94a3b8"), fontName="Helvetica", fontSize=8.5, leading=12)


def header(title, eyebrow):
    # small logo + brand line side by side
    logo = ImageReader(LOGO)
    brand_line = Paragraph(
        "<b>HRPPI</b> &nbsp;·&nbsp; Human Resource Productivity Partners, International",
        EYEBROW,
    )
    from reportlab.platypus import Image as RLImage
    head_tbl = Table(
        [[RLImage(LOGO, width=34, height=34), brand_line]],
        colWidths=[44, None],
    )
    head_tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
    ]))
    return [
        head_tbl,
        Spacer(1, 14),
        Paragraph(eyebrow.upper(), EYEBROW),
        Paragraph(title, H1),
        HRFlowable(width="100%", thickness=2, color=BRAND, spaceBefore=8, spaceAfter=14),
    ]


def page_decorations(canvas, doc):
    # faint centered logo watermark
    canvas.saveState()
    try:
        img = ImageReader(LOGO)
        w, h = LETTER
        size = 4.2 * inch
        canvas.setFillAlpha(0.05)
        canvas.drawImage(
            img, (w - size) / 2, (h - size) / 2,
            width=size, height=size, mask="auto", preserveAspectRatio=True,
        )
    except Exception:
        pass
    canvas.restoreState()
    # footer
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#94a3b8"))
    canvas.drawString(0.9 * inch, 0.6 * inch,
                      "© Human Resource Productivity Partners, International  ·  hrproductivitypartners.com  ·  Kingston, Jamaica")
    canvas.restoreState()


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, ITEM), bulletColor=ACCENT, value="•") for t in items],
        bulletType="bullet", leftIndent=14, bulletFontSize=10,
    )


def checklist(items):
    return ListFlowable(
        [ListItem(Paragraph(t, ITEM), bulletColor=ACCENT, value="☐") for t in items],
        bulletType="bullet", leftIndent=14, bulletFontSize=11,
    )


def build(filename, title, eyebrow, blocks):
    doc = SimpleDocTemplate(os.path.join(OUT, filename), pagesize=LETTER,
                            topMargin=0.9 * inch, bottomMargin=0.9 * inch,
                            leftMargin=0.9 * inch, rightMargin=0.9 * inch,
                            title=title, author="HRPPI")
    story = header(title, eyebrow) + blocks
    doc.build(story, onFirstPage=page_decorations, onLaterPages=page_decorations)
    print("wrote", filename)


# 1. HR Health Check
build("hr-health-check.pdf", "HR Health Check", "Free assessment", [
    Paragraph("Use this quick self-assessment to spot where your people practices are strong and where gaps may be costing you time, money, or talent. Score each statement 1 (not at all) to 5 (fully in place).", BODY),
    Paragraph("Foundations", H2),
    checklist([
        "We have clear, written job descriptions for every role.",
        "Every employee has a documented contract and up-to-date records.",
        "Our HR policies are written down and easy for staff to find.",
        "We comply with current local employment regulations.",
    ]),
    Paragraph("Hiring & Onboarding", H2),
    checklist([
        "We follow a consistent, structured hiring process.",
        "New hires complete a planned onboarding in their first 30 days.",
        "We measure time-to-hire and quality of hire.",
    ]),
    Paragraph("Performance & Growth", H2),
    checklist([
        "Every employee has clear goals tied to business outcomes.",
        "Managers hold regular feedback and review conversations.",
        "We offer training and clear paths for people to grow.",
    ]),
    Paragraph("Culture & Retention", H2),
    checklist([
        "We measure employee engagement at least once a year.",
        "We have a fair, clear process for handling conflict.",
        "Our values are visible in day-to-day behaviour.",
    ]),
    Paragraph("How to score", H2),
    Paragraph("Add up your scores (1–5) across all 13 statements for a total out of 65.", BODY),
    Table(
        [
            ["Score", "What it means", "Where to focus"],
            ["Under 40", "Significant gaps", "Fix foundations first — policies, records, compliance."],
            ["40–55", "Solid base", "Sharpen hiring, performance and engagement."],
            ["Over 55", "Strong", "Optimise and scale what already works."],
        ],
        colWidths=[70, 110, 250],
        style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), BRAND),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (-1, -1), 9),
            ("TEXTCOLOR", (0, 1), (-1, -1), GREY),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f1f5f9")]),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("TOPPADDING", (0, 0), (-1, -1), 7),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
            ("LINEBELOW", (0, 0), (-1, -2), 0.5, colors.HexColor("#e2e8f0")),
        ]),
    ),
    Paragraph("Your 3 priority actions", H2),
    Paragraph("Based on your lowest-scoring areas, write the three things you'll tackle first.", BODY),
    Paragraph("1. ____________________________________________________________", BODY),
    Paragraph("2. ____________________________________________________________", BODY),
    Paragraph("3. ____________________________________________________________", BODY),
    Spacer(1, 6),
    Paragraph("<b>Want a second opinion on your score?</b> Book a free 30-minute intro call and we'll talk through your results — hrproductivitypartners.com.", BODY),
])

# 2. Onboarding checklist
build("onboarding-checklist.pdf", "New-Hire Onboarding Checklist", "Checklist", [
    Paragraph("A great first 30 days makes new people productive faster and far more likely to stay. Work through this checklist for every new hire.", BODY),
    Paragraph("Before Day 1", H2),
    checklist([
        "Offer letter signed and contract filed.",
        "Workspace, equipment, and system logins ready.",
        "Welcome email with first-day details sent.",
        "Buddy or mentor assigned.",
    ]),
    Paragraph("Day 1", H2),
    checklist([
        "Warm welcome and team introductions.",
        "Office / systems tour and key tools set up.",
        "Review role, expectations, and first-week plan.",
        "Cover essential policies and where to find them.",
    ]),
    Paragraph("First Week", H2),
    checklist([
        "Manager sets clear 30/60/90-day goals.",
        "Role-specific training scheduled.",
        "Introductions to key people across the business.",
        "First check-in to answer questions.",
    ]),
    Paragraph("First 30 Days", H2),
    checklist([
        "Weekly manager check-ins held.",
        "Early feedback gathered from the new hire.",
        "Progress against 30-day goals reviewed.",
        "Confirm they have what they need to succeed.",
    ]),
])

# 3. Tough conversations guide
build("tough-conversations-guide.pdf", "Manager's Guide to Tough Conversations", "Guide", [
    Paragraph("Difficult conversations are part of leading people. This simple framework helps your managers handle feedback, conflict and performance chats with confidence and fairness.", BODY),
    Paragraph("Before the conversation", H2),
    bullets([
        "Be clear on the single outcome you want.",
        "Stick to specific facts and examples, not labels.",
        "Choose a private setting and enough time.",
        "Assume good intent — go in curious, not accusing.",
    ]),
    Paragraph("A simple structure (the 4 A's)", H2),
    bullets([
        "<b>Ask</b> — open with a question and listen first.",
        "<b>Acknowledge</b> — reflect what you heard.",
        "<b>Align</b> — agree on the issue and the goal.",
        "<b>Act</b> — set clear next steps and a follow-up date.",
    ]),
    Paragraph("Phrases that help", H2),
    bullets([
        "“I've noticed… and I wanted to understand what's going on.”",
        "“Help me see it from your side.”",
        "“Here's the impact it's having…”",
        "“What support would help you get there?”",
    ]),
    Paragraph("After the conversation", H2),
    bullets([
        "Summarise agreements in writing.",
        "Follow up when you said you would.",
        "Recognise improvement early and specifically.",
    ]),
    Paragraph("Ready-to-use scripts", H2),
    Paragraph("Adapt these openers to your own words and situation.", BODY),
    Paragraph("<b>1. Underperformance</b><br/>“I want us to succeed, so I need to be straight with you. The last three reports came in late and that held up the team. Help me understand what's getting in the way — and let's agree how to fix it together.”", BODY),
    Paragraph("<b>2. Repeated lateness</b><br/>“I've noticed you've come in late most days this week. I'm not here to judge — I want to understand if something's going on and how we make the start time work.”", BODY),
    Paragraph("<b>3. Attitude / tone with the team</b><br/>“In yesterday's meeting, the way that came across landed badly with a couple of people. That's not the impact I think you intended — can we talk about it?”", BODY),
    Paragraph("<b>4. Conflict between two staff</b><br/>“I want to hear both sides separately, then together. My goal isn't to assign blame — it's to get us back to working well. Walk me through what happened from your view.”", BODY),
    Paragraph("<b>5. Declining a request (e.g. raise/promotion)</b><br/>“I really value what you bring. Right now I can't approve this, and I want to be honest about why — and exactly what would need to be true for it to happen.”", BODY),
    Paragraph("<b>6. Letting someone go</b><br/>“This is a difficult conversation. We've decided to end your employment, effective [date]. I'll walk you through the details and the support available. I want to handle this with respect.”", BODY),
    Paragraph("Follow-up note template", H2),
    Paragraph("“Hi [name], thanks for talking today. To recap what we agreed: [points]. Next steps: [actions, owners, dates]. I'll check in on [date]. I'm here if you need anything before then.”", BODY),
])

# 4. Performance review template
build("performance-review-template.pdf", "Performance Review Toolkit", "Template", [
    Paragraph("A clean, fair review that ties individual goals to business outcomes — with no jargon. Copy these sections into your own review form.", BODY),
    Paragraph("Employee & period", H2),
    Paragraph("Name &nbsp;______________________ &nbsp; Role &nbsp;______________________ &nbsp; Review period &nbsp;____________", BODY),
    Paragraph("Rating rubric", H2),
    Paragraph("Use the same scale for every review so it's fair and consistent.", BODY),
    Table(
        [
            ["Rating", "What it looks like"],
            ["5 — Exceptional", "Consistently exceeds expectations; raises the bar for others."],
            ["4 — Strong", "Regularly meets and often beats expectations."],
            ["3 — Solid", "Meets expectations reliably."],
            ["2 — Developing", "Meets some expectations; clear gaps to close."],
            ["1 — Below", "Not yet meeting expectations; needs a plan."],
        ],
        colWidths=[110, 320],
        style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), BRAND),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (-1, -1), 9),
            ("TEXTCOLOR", (0, 1), (-1, -1), GREY),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f1f5f9")]),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("TOPPADDING", (0, 0), (-1, -1), 6),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ]),
    ),
    Paragraph("1. Goals from last period", H2),
    Paragraph("List each goal and rate it 1–5 using the rubric above, with a short note on impact.", BODY),
    Paragraph("2. Strengths", H2),
    Paragraph("What did this person do well? Give specific examples and the value it created.", BODY),
    Paragraph("3. Areas to develop", H2),
    Paragraph("Where is there room to grow? Focus on behaviours and outcomes, not personality.", BODY),
    Paragraph("4. Goals for next period", H2),
    bullets([
        "Goal 1 — how it links to the business: __________",
        "Goal 2 — how it links to the business: __________",
        "Goal 3 — how it links to the business: __________",
    ]),
    Paragraph("5. Support & development", H2),
    Paragraph("What training, resources or coaching will help them succeed?", BODY),
    Paragraph("6. Sign-off", H2),
    Paragraph("Employee comments &nbsp;________________  Manager comments &nbsp;________________  Date &nbsp;__________", BODY),
])

# 5. Engagement starter kit
build("engagement-starter-kit.pdf", "Employee Engagement Starter Kit", "Checklist", [
    Paragraph("Simple, low-cost ways to lift morale and keep your best people — most you can start this week.", BODY),
    Paragraph("Listen", H2),
    bullets([
        "Run a short, anonymous pulse survey each quarter.",
        "Hold regular 1:1s focused on the person, not just tasks.",
        "Create an easy channel for ideas and concerns.",
    ]),
    Paragraph("Recognise", H2),
    bullets([
        "Make specific, timely thank-yous a habit.",
        "Celebrate wins and milestones publicly.",
        "Spotlight behaviours that reflect your values.",
    ]),
    Paragraph("Grow", H2),
    bullets([
        "Give people a clear path to develop.",
        "Offer stretch projects and learning time.",
        "Connect daily work to the bigger purpose.",
    ]),
    Paragraph("Connect", H2),
    bullets([
        "Protect time for low-key team moments.",
        "Onboard new hires into the culture, not just the job.",
        "Act visibly on the feedback you collect.",
    ]),
])

# 6. Company values worksheet
build("company-values-worksheet.pdf", "Define Your Company Values", "Worksheet", [
    Paragraph("Turn vague ideals into clear values your team can actually live by. Work through this with your leadership team.", BODY),
    Paragraph("Step 1 — Reflect", H2),
    bullets([
        "When are we at our best as a team?",
        "Who are the people we'd happily clone, and why?",
        "What behaviour do we never want to tolerate?",
    ]),
    Paragraph("Step 2 — Draft 3–5 values", H2),
    Paragraph("For each value, write a short, plain-language definition.", BODY),
    Paragraph("Value 1 &nbsp;________________  means  ________________________________", BODY),
    Paragraph("Value 2 &nbsp;________________  means  ________________________________", BODY),
    Paragraph("Value 3 &nbsp;________________  means  ________________________________", BODY),
    Paragraph("Step 3 — Make them real", H2),
    bullets([
        "For each value, name one behaviour we'd see if it were true.",
        "Name one behaviour that would break it.",
        "Decide how each value shows up in hiring, reviews and recognition.",
    ]),
    Paragraph("Step 4 — Keep them alive", H2),
    bullets([
        "Reference values in decisions, not just posters.",
        "Recognise people who live them.",
        "Revisit once a year as you grow.",
    ]),
])

print("done")
