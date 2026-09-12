export type TermsBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; intro?: string[]; items: string[]; outro?: string };

export type TermsSection = {
  title: string;
  blocks: TermsBlock[];
};

export const TERMS_TITLE = "AAK Annual Convention 2026 & Nairobi Biennale of Architecture 2026";

export const TERMS_INTRO =
  "These Terms and Conditions govern participation in the AAK Annual Convention 2026 and the Nairobi Biennale of Architecture 2026 organized by the Architectural Association of Kenya (AAK). By registering, attending, exhibiting, sponsoring, speaking, or participating in any official event activity, participants agree to be bound by these Terms and Conditions.";

export const TERMS_CLOSING =
  "By registering for, sponsoring, exhibiting at, speaking at, or attending the AAK Annual Convention 2026 and/or the Nairobi Biennale of Architecture 2026, participants acknowledge that they have read, understood, and agreed to these Terms and Conditions.";

export const TERMS_SECTIONS: TermsSection[] = [
  {
    title: "Registration",
    blocks: [
      {
        type: "list",
        items: [
          "Registration is mandatory for all delegates attending the Events.",
          "Registration is confirmed only upon successful submission of the registration and receipt of the applicable registration fee where required.",
          "AAK reserves the right to decline, suspend, or cancel any registration where information provided is inaccurate, incomplete, fraudulent, or where payment has not been received.",
        ],
      },
    ],
  },
  {
    title: "Registration Fees",
    blocks: [
      {
        type: "list",
        items: [
          "Applicable registration fees are published on the official registration platform and event website.",
          "Fees vary depending on the registration category and applicable deadlines.",
          "All published fees are exclusive of any applicable taxes unless otherwise stated.",
          "Registration fees cover participation in the conference only and do not include travel, accommodation, visas, transport, or other personal expenses unless expressly stated.",
        ],
      },
    ],
  },
  {
    title: "Payment",
    blocks: [
      {
        type: "list",
        items: [
          "Payment shall be made using the official payment channels communicated by AAK.",
          "Registration is only confirmed after full payment has been received.",
          "Participants are responsible for any bank charges, transfer fees, foreign exchange charges, or payment processing fees incurred during payment.",
          "Invoices shall be issued where applicable.",
        ],
      },
    ],
  },
  {
    title: "Cancellation & Refund Policy",
    blocks: [
      {
        type: "list",
        items: [
          "All registration fees are non-refundable, regardless of the reason for cancellation or non-attendance, including cancellations made in advance of the event.",
          "AAK reserves the right to approve delegate substitutions upon written request submitted before the registration closing date. Substitutions are the only alternative to a refund.",
        ],
      },
    ],
  },
  {
    title: "Programme Changes",
    blocks: [
      {
        type: "list",
        intro: ["AAK reserves the right to amend the following, without prior notice where necessary:"],
        items: [
          "Programme schedules",
          "Speakers",
          "Session topics",
          "Venues",
          "Activities",
          "Event timings",
        ],
        outro: "Such changes shall not constitute grounds for refunds.",
      },
    ],
  },
  {
    title: "Admission",
    blocks: [
      {
        type: "list",
        items: [
          "Delegates must present proof of registration and a valid government-issued identification document for accreditation.",
          "AAK reserves the right to refuse entry or remove any participant whose conduct may compromise the safety, security, or integrity of the Events.",
          "Event badges remain the property of AAK and are non-transferable.",
        ],
      },
    ],
  },
  {
    title: "Code of Conduct",
    blocks: [
      {
        type: "list",
        intro: [
          "All participants are expected to conduct themselves professionally and respectfully throughout the Events.",
          "Participants shall not engage in:",
        ],
        items: [
          "Harassment",
          "Discrimination",
          "Intimidation",
          "Abusive behaviour",
          "Disruptive conduct",
          "Damage to property",
        ],
        outro: "AAK reserves the right to remove any participant whose conduct is deemed inappropriate without refund.",
      },
    ],
  },
  {
    title: "Photography, Videography & Media",
    blocks: [
      {
        type: "list",
        items: [
          "Official photographers and videographers will document the Events.",
          "By attending, participants grant AAK permission to capture, use, reproduce, publish, and distribute photographs, audio recordings, and video footage for promotional, educational, archival, and reporting purposes without further consent or compensation.",
          "Participants who do not wish to appear in official media should notify the Secretariat in person before the commencement of the Events.",
        ],
      },
    ],
  },
  {
    title: "Intellectual Property",
    blocks: [
      {
        type: "list",
        items: [
          "All event branding, publications, presentations, logos, graphics, recordings, and related materials remain the intellectual property of AAK or their respective owners.",
          "No participant may reproduce, distribute, or commercially use official event materials without prior written approval.",
        ],
      },
    ],
  },
  {
    title: "Speakers",
    blocks: [
      {
        type: "list",
        items: [
          "Views expressed by speakers are their own and do not necessarily represent those of AAK.",
          "Presentation materials remain the intellectual property of the respective presenters unless otherwise agreed.",
        ],
      },
    ],
  },
  {
    title: "Sponsors & Exhibitors",
    blocks: [
      {
        type: "list",
        items: [
          "Sponsors and exhibitors shall comply with the exhibition guidelines issued by AAK.",
          "Booth allocation shall be determined by AAK.",
          "No sponsor or exhibitor may sublet, assign, or transfer exhibition space without written approval.",
          "AAK reserves the right to relocate exhibition spaces where operationally necessary.",
        ],
      },
    ],
  },
  {
    title: "Health & Safety",
    blocks: [
      {
        type: "list",
        items: [
          "Participants shall comply with all venue health, safety, and security requirements.",
          "AAK reserves the right to implement additional safety measures where required.",
        ],
      },
    ],
  },
  {
    title: "Liability",
    blocks: [
      {
        type: "list",
        intro: [
          "Participants attend the Events at their own risk. AAK shall not be liable for the following, except where liability cannot legally be excluded:",
        ],
        items: [
          "Loss or theft of personal property",
          "Personal injury",
          "Travel disruptions",
          "Accommodation costs",
          "Visa costs",
          "Indirect or consequential losses",
        ],
      },
    ],
  },
  {
    title: "Force Majeure",
    blocks: [
      {
        type: "paragraph",
        text: "AAK shall not be liable for failure or delay in delivering the Events arising from circumstances beyond its reasonable control, including but not limited to natural disasters, public health emergencies, civil unrest, strikes, government directives, or other force majeure events.",
      },
    ],
  },
  {
    title: "Data Protection",
    blocks: [
      {
        type: "paragraph",
        text: "Personal information collected during registration shall be processed in accordance with the Data Protection Act, 2019 (Kenya).",
      },
      {
        type: "paragraph",
        text: "Participant information shall be used solely for event administration, communication, accreditation, reporting, and related Association activities.",
      },
      {
        type: "paragraph",
        text: "AAK shall not sell participant personal information to third parties.",
      },
    ],
  },
  {
    title: "Event Communication",
    blocks: [
      {
        type: "paragraph",
        text: "Participants agree to receive official communications relating to the Events, including programme updates, logistical information, registration confirmations, and post-event communications.",
      },
    ],
  },
  {
    title: "Governing Law",
    blocks: [
      {
        type: "paragraph",
        text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising shall be subject to the jurisdiction of the Kenyan courts.",
      },
    ],
  },
];
