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
    Paragraph("Scoring", H2),
    Paragraph("<b>Under 40:</b> Significant gaps — quick wins available. &nbsp; <b>40–55:</b> Solid base, room to sharpen. &nbsp; <b>Over 55:</b> Strong — focus on optimisation.", BODY),
    Paragraph("Want a hand interpreting your score? Book a free intro call at hrproductivitypartners.com.", BODY),
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
])

# 4. Performance review template
build("performance-review-template.pdf", "Performance Review Template", "Template", [
    Paragraph("A clean, fair review that ties individual goals to business outcomes — with no jargon. Copy these sections into your own review form.", BODY),
    Paragraph("Employee & period", H2),
    Paragraph("Name &nbsp;______________________ &nbsp; Role &nbsp;______________________ &nbsp; Review period &nbsp;____________", BODY),
    Paragraph("1. Goals from last period", H2),
    Paragraph("List each goal and rate: Exceeded / Met / Partially met / Not met — with a short note on impact.", BODY),
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
