export const ASSETS = "/assets";

export type Article = {
  slug: string;
  title: string;
  date: string;
  /** ISO date for <time> and structured data */
  iso: string;
  readingTime: string;
  standfirst: string;
  image: string;
  imageAlt: string;
  /** Section heading + paragraphs. Lists render as bullets. */
  body: Array<{ heading?: string; paras?: string[]; list?: string[] }>;
  sources?: Array<{ label: string; url: string }>;
};

export const articles: Article[] = [
  {
    slug: "future-of-work-caribbean",
    title: "The Future of Work in the Caribbean",
    date: "Aug 28, 2026",
    iso: "2026-08-28",
    readingTime: "6 min read",
    standfirst:
      "Jamaica's outsourcing sector shed roughly 12,000 jobs in two years, and the industry's own leadership points at productivity rather than automation. That diagnosis should change how Caribbean employers plan their workforce.",
    image: `${ASSETS}/084932ea58bb34c01f9084a3e2a27d08.jpg`,
    imageAlt: "Palm trees against a Caribbean sky at dusk",
    body: [
      {
        paras: [
          "For two decades the Caribbean's answer to job creation was volume. Build capacity, train quickly, fill seats. It worked while the work itself was straightforward and the cost advantage was wide enough to absorb inefficiency.",
          "That period has closed. Jamaica's global services workforce fell from roughly 62,000 to under 50,000 in the two years to March 2026, and sector revenue dropped from about US$1 billion to US$780 million. The number of operating firms fell from more than 90 to around 70.",
        ],
      },
      {
        heading: "The diagnosis matters more than the numbers",
        paras: [
          "It would be easy to file this under artificial intelligence and move on. The industry's own leadership does not. Speaking as president of the Global Services Association of Jamaica, Yoni Epstein has been explicit that AI was not the main cause. The drivers he names are reshoring by US clients, low productivity, disruption from Hurricane Melissa, a tight labour market and the local cost of doing business.",
          "That is a different problem with a different solution. Automation is something you adapt to. Productivity is something you manage. One is weather; the other is a choice.",
        ],
      },
      {
        heading: "What 'low productivity' actually means on the ground",
        paras: [
          "Productivity in a service business is rarely about people working less hard. It is usually structural, and it shows up in places most organizations do not measure:",
        ],
        list: [
          "Time-to-competence. How long before a new hire produces at the standard of an experienced one? Most employers cannot answer this, which means they cannot improve it.",
          "Rework. Work that has to be done twice because it was unclear the first time. It rarely appears in any report.",
          "Supervisory load. How much of a team leader's week goes to chasing rather than developing.",
          "Unplanned absence and churn. Both are lagging indicators of something upstream.",
        ],
      },
      {
        heading: "The screening problem nobody wants to name",
        paras: [
          "There is a striking figure behind the sector's hiring difficulty: roughly one in twenty-five interviewees is judged suitable for employment. That is not a talent shortage in the ordinary sense. It is a gap between what the education system produces and what employers have defined as ready.",
          "HEART/NSTA Trust and GSAJ have signed a memorandum to roughly double the number of trained and certified workers through six-week job-readiness programmes delivered across the island. That is the right instinct. But certification only closes the gap if employers have been specific about what 'ready' means for their own operation — and most job descriptions are not written that precisely.",
        ],
      },
      {
        heading: "The pivot that is already policy",
        paras: [
          "Government is targeting a shift from an 80:20 split of basic outsourcing to higher-value knowledge work, toward 60:40, and it intends to get there through reskilling. For employers, that is a workforce transformation with a deadline attached.",
          "Moving a voice agent into an analyst role is not a training course. It is a change of job architecture: new competencies, new performance measures, new management behaviour, and a career path that makes the move worth taking. Organizations that treat it as a curriculum problem will spend the money and keep the same outcomes.",
        ],
      },
      {
        heading: "Melissa changed what employees expect",
        paras: [
          "The hurricane put HR at the centre of the recovery. As HRMAJ president Dr. Cassida Jones Johnson put it, HR is often the bridge between uncertainty and stability. Organizations discovered quickly whether they had continuity plans, whether they could reach their people, and whether their managers could lead through a crisis rather than administer one.",
          "Those capabilities do not switch off when the emergency ends. Employees who watched their employer handle a disaster badly are still making decisions about their future based on what they saw.",
        ],
      },
      {
        heading: "What to do about it",
        list: [
          "Measure output per employee before you try to improve it. You cannot manage a number you have never calculated.",
          "Define 'ready' for each role in observable terms, then hand that definition to your training partners rather than accepting a generic curriculum.",
          "Treat the move to higher-value work as job redesign, not as a course catalogue.",
          "Build the continuity and communication capability while nothing is going wrong. That is the only time it can be built.",
        ],
      },
      {
        paras: [
          "The Caribbean's cost advantage will keep narrowing. What replaces it has to be the quality and productivity of the workforce itself — which is a people problem, and therefore a solvable one.",
        ],
      },
    ],
    sources: [
      {
        label: "Jamaica's BPO sector sheds 12,000 jobs — Outsource Accelerator",
        url: "https://news.outsourceaccelerator.com/jamaica-bpo-sheds-jobs/",
      },
      {
        label: "Jamaica BPO loses US$220M — Rio Times",
        url: "https://www.riotimesonline.com/jamaica-bpo-loses-220-million-5000-jobs/",
      },
      {
        label: "HEART/NSTA and GSAJ to double BPO training — Outsource Accelerator",
        url: "https://news.outsourceaccelerator.com/heart-nsta-gsaj-bpo-training/",
      },
      {
        label: "After Hurricane Melissa, HR leaders take centrestage — Jamaica Observer",
        url: "https://www.jamaicaobserver.com/2026/02/03/hurricane-melissa-hr-leaders-take-centrestage-recovery-push/",
      },
    ],
  },
  {
    slug: "boost-employee-engagement",
    title: "5 Ways to Boost Employee Engagement",
    date: "Aug 16, 2026",
    iso: "2026-08-16",
    readingTime: "5 min read",
    standfirst:
      "Engagement is not a survey score or a staff party. It is the everyday experience of being well managed. Here are five changes that move it, none of which need a budget.",
    image: `${ASSETS}/intro-meeting.png`,
    imageAlt: "Colleagues collaborating around a laptop in a bright office",
    body: [
      {
        paras: [
          "Most engagement programmes fail for the same reason: they treat engagement as a thing you add, rather than a by-product of how the organization already runs. You can hold the event, print the values and still lose your best people, because none of it touches the daily experience of working there.",
          "The five changes below are the ones that consistently move the needle, in roughly the order of effort required.",
        ],
      },
      {
        heading: "1. Fix the first thirty days",
        paras: [
          "Onboarding is the highest-leverage moment you will ever have with an employee, and it is almost always the most neglected. A new hire forms a durable judgment about whether joining was a good decision within weeks.",
          "A strong first month is unglamorous: equipment ready on day one, a named person responsible for them, clear expectations for the first ninety days, and scheduled check-ins that actually happen. Nothing about that costs money. All of it signals whether the organization is competent and whether the new person matters.",
        ],
      },
      {
        heading: "2. Make managers the intervention",
        paras: [
          "People do not disengage from companies. They disengage from the eight to twelve hours a week they spend in the orbit of one manager.",
          "Most supervisors in growing organizations were promoted for technical strength and given no preparation for the actual job, which is largely conversational: setting expectations, giving feedback, handling conflict, noticing when someone is struggling. Training that one layer changes more than any programme aimed at everyone.",
        ],
      },
      {
        heading: "3. Tell people how they are doing, more than once a year",
        paras: [
          "The annual review is a poor feedback mechanism and an excellent anxiety generator. By the time an issue is raised formally, it has usually been true for months and the employee has drawn their own conclusions.",
          "A fifteen-minute monthly conversation with three questions — what went well, what got in your way, what do you need from me — outperforms almost any formal appraisal system. It also surfaces problems while they are still cheap to fix.",
        ],
      },
      {
        heading: "4. Close the loop on everything you ask",
        paras: [
          "Running a staff survey and not reporting back is worse than never running one. You have asked people to be candid, then confirmed that candour changes nothing.",
          "The discipline is simple: publish what you heard, name the two or three things you will act on, say plainly what you will not act on and why, and report progress on a date you committed to. Employees forgive an organization that cannot do everything. They do not forgive being ignored.",
        ],
      },
      {
        heading: "5. Give people a visible way up",
        paras: [
          "The most common reason a strong performer leaves a Caribbean employer is not pay. It is the reasonable conclusion that there is nowhere else to go.",
          "Career paths do not require a large organization. They require clarity: what the next role is, what it takes to be ready for it, and who decides. Written down, that turns an invisible ceiling into a route — and it turns your training spend into something employees actively want.",
        ],
      },
      {
        heading: "How to know if it is working",
        list: [
          "Voluntary turnover among people you would rehire — the only turnover number that matters.",
          "Time-to-competence for new hires, tracked before and after you change onboarding.",
          "Internal fill rate: what share of vacancies go to people already employed.",
          "Whether managers can name, without notes, what each of their reports is working toward.",
        ],
      },
      {
        paras: [
          "None of this is complicated. It is just consistent, which is harder — and it is why engagement work belongs in how the organization is managed rather than in an annual initiative.",
        ],
      },
    ],
  },
  {
    slug: "hr-automation-guide-smbs",
    title: "HR Automation: A Practical Guide for SMBs",
    date: "Aug 02, 2026",
    iso: "2026-08-02",
    readingTime: "7 min read",
    standfirst:
      "Most small and mid-sized employers run HR on spreadsheets, a shared inbox and one person's memory. Here is how to move off that without buying something you will not use.",
    image: `${ASSETS}/1af8af7a40d7bb692ce8c1235b93a211.jpg`,
    imageAlt: "A tidy desk with a laptop, notebook and plants",
    body: [
      {
        paras: [
          "There is a particular stage every growing business reaches. Employee records live in one spreadsheet, leave requests in another, contracts in a folder someone set up years ago, and the only complete picture exists in the head of whoever has been there longest.",
          "It works until it doesn't — usually at an audit, a resignation, or the week that person goes on leave.",
        ],
      },
      {
        heading: "Automate the process, not the mess",
        paras: [
          "The most common and most expensive mistake is buying software first. Software does not fix an unclear process; it encodes it, and then the confusion is harder to change because it is now configured.",
          "Before evaluating any system, write down how three things actually happen today: how someone is hired, how leave is requested and approved, and how someone leaves. Not how they are supposed to happen. Nearly everyone finds at least one step that exists only because a former employee once preferred it that way.",
        ],
      },
      {
        heading: "Start where the admin actually is",
        paras: [
          "In most SMBs the time drain is concentrated in four places, and in this order:",
        ],
        list: [
          "Leave tracking and approvals — usually the single biggest source of email and error.",
          "Employee records and documents, particularly anything needed for compliance or an audit.",
          "Onboarding paperwork, which is the same set of tasks every single time and therefore ideal to systematise.",
          "Performance and goal tracking, which is the one people reach for first and should generally come last.",
        ],
      },
      {
        heading: "Choosing a system without regretting it",
        paras: [
          "The market rewards feature lists; you should ignore them. Four questions predict whether a tool will still be in use a year from now:",
        ],
        list: [
          "Can a non-technical manager complete the task they need without being trained twice?",
          "Does it work properly on a phone, given how much of your workforce may not sit at a desk?",
          "Can you export your own data, in full, without asking the vendor? If not, you are renting your records.",
          "Does the price make sense at double your current headcount, not just today's?",
        ],
      },
      {
        heading: "Migration is where projects die",
        paras: [
          "Do not migrate everything. Move current employees and live records; archive the rest where you can still reach it. Teams routinely lose months trying to clean a decade of inconsistent history before going live, and the cleaning is never finished.",
          "Run the old and new systems together for one full cycle — one payroll, one leave month. It feels wasteful and it is the cheapest insurance you will buy.",
        ],
      },
      {
        heading: "What automation will not do",
        paras: [
          "It will not make a decision for you, and it should not. A system can route an approval; it cannot tell you whether the request is reasonable. It can flag that someone's probation ends on Friday; it cannot have the conversation.",
          "The value is in giving managers their time back and making the organization legible — who works here, in what role, on what terms, since when. That is the foundation everything else in HR is built on, and most SMBs do not have it.",
        ],
      },
      {
        heading: "A realistic sequence",
        list: [
          "Month one: document the three processes above as they truly run.",
          "Month two: fix the process itself, on paper, before any tool is chosen.",
          "Month three: pick a system against the four questions and migrate current records only.",
          "Month four: run parallel for one full cycle, then switch off the spreadsheet for good.",
        ],
      },
      {
        paras: [
          "Done in that order it is a four-month project with a permanent payoff. Done in the other order — tool first — it is usually an eighteen-month project that ends with a second spreadsheet.",
        ],
      },
    ],
  },
];

export const getArticle = (slug?: string) =>
  articles.find((a) => a.slug === slug);
