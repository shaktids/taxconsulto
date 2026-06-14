export const siteConfig = {
  name: "TaxConsulto.com",
  tagline: "Your Trusted Tax & Compliance Partner",
  url: "https://taxconsulto.com",
  email: "hello@taxconsulto.com",
  phone: "7790005009",
  whatsapp: "917790005009",
  address: "India",
  description:
    "Expert GST, income tax, business registration, accounting, and compliance services for Indian businesses, startups, and professionals."
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "GST Registration",
    description: "Quick GST registration support with eligibility checks, document review, and application filing.",
    category: "GST"
  },
  {
    title: "GST Return Filing",
    description: "Monthly, quarterly, and annual GST return filing with reconciliation and due-date reminders.",
    category: "GST"
  },
  {
    title: "Income Tax Filing",
    description: "Accurate ITR filing for salaried individuals, freelancers, businesses, and professionals.",
    category: "Income Tax"
  },
  {
    title: "TDS Filing",
    description: "TDS return preparation, challan support, correction filing, and compliance tracking.",
    category: "Compliance"
  },
  {
    title: "Company Incorporation",
    description: "Private limited company registration with name approval, DIN, DSC, PAN, TAN, and MCA filing.",
    category: "Business Registration"
  },
  {
    title: "LLP Registration",
    description: "End-to-end LLP incorporation support for founders, partners, and professional firms.",
    category: "Business Registration"
  },
  {
    title: "Startup Registration",
    description: "DPIIT startup recognition guidance, entity setup support, and founder compliance advisory.",
    category: "Startup Guides"
  },
  {
    title: "MSME Registration",
    description: "Udyam registration assistance to help eligible businesses access MSME benefits.",
    category: "Business Registration"
  },
  {
    title: "Trademark Registration",
    description: "Trademark search, class selection, filing support, and application status guidance.",
    category: "Business Registration"
  },
  {
    title: "Accounting Services",
    description: "Bookkeeping, financial statements, ledgers, MIS reports, and monthly accounting support.",
    category: "Compliance"
  }
];

export const homeServices = [
  "GST Filing Services",
  "Income Tax Return Filing",
  "Company Registration",
  "LLP Registration",
  "Trademark Registration",
  "Accounting & Bookkeeping",
  "ROC Compliance",
  "Business Consulting"
].map((title, index) => ({
  title,
  description: services[index]?.description ?? "Professional advisory and filing support for growing businesses."
}));

export const pricingPlans = [
  {
    name: "Starter Compliance",
    price: "₹1,499",
    period: "onwards",
    description: "Best for individuals, freelancers, and small businesses starting compliance.",
    features: ["ITR or GST consultation", "Document checklist", "Expert review", "Email support"]
  },
  {
    name: "Business Essentials",
    price: "₹4,999",
    period: "onwards",
    description: "A practical package for active businesses needing filing and advisory support.",
    features: ["GST return filing", "Accounting review", "TDS guidance", "Monthly compliance calendar"],
    featured: true
  },
  {
    name: "Premium Growth",
    price: "₹9,999",
    period: "onwards",
    description: "For founders and companies that want deeper compliance and growth advisory.",
    features: ["Company or LLP support", "ROC compliance", "Dedicated consultant", "Priority WhatsApp support"]
  }
];

export const testimonials = [
  {
    quote:
      "TaxConsulto helped us clean up GST filings and set a predictable compliance calendar. The team is responsive and clear.",
    name: "Rohit Sharma",
    role: "Founder, RetailTech Startup"
  },
  {
    quote:
      "Our company incorporation and trademark process was handled professionally from documents to filing updates.",
    name: "Priya Mehta",
    role: "Director, Design Studio"
  },
  {
    quote:
      "They made income tax filing simple and explained every deduction in plain language. Very dependable service.",
    name: "Amit Jain",
    role: "Independent Consultant"
  }
];

export const faqs = [
  {
    question: "Can TaxConsulto handle GST filing for small businesses?",
    answer:
      "Yes. We support GST registration, monthly and quarterly GST returns, reconciliation, annual returns, and compliance reminders."
  },
  {
    question: "Do you provide company registration and LLP registration?",
    answer:
      "Yes. We assist with private limited company incorporation, LLP registration, name approval, DSC, DIN, PAN, TAN, and post-registration compliance."
  },
  {
    question: "How can I book a free consultation?",
    answer:
      "Use the consultation form or WhatsApp button on the website. Our team will review your requirement and guide you on the next steps."
  },
  {
    question: "Is the pricing fixed for every service?",
    answer:
      "Prices start from the listed amounts. Final pricing depends on business type, transaction volume, filings required, and compliance complexity."
  }
];

export const blogPosts = [
  {
    title: "GST Return Filing Checklist for Small Businesses",
    category: "GST",
    excerpt:
      "A practical checklist to keep invoices, input tax credit, sales data, and return deadlines organized.",
    slug: "gst-return-filing-checklist"
  },
  {
    title: "Income Tax Filing Tips for Professionals",
    category: "Income Tax",
    excerpt:
      "Understand deductions, advance tax, Form 26AS, AIS, and common mistakes to avoid while filing ITR.",
    slug: "income-tax-filing-tips"
  },
  {
    title: "Private Limited Company vs LLP: What Should You Choose?",
    category: "Business Registration",
    excerpt:
      "Compare liability, compliance, taxation, ownership structure, and investor readiness before choosing.",
    slug: "company-vs-llp"
  },
  {
    title: "ROC Compliance Calendar for Growing Companies",
    category: "Compliance",
    excerpt:
      "Key annual filings and governance items every private limited company should track.",
    slug: "roc-compliance-calendar"
  },
  {
    title: "Startup Registration Guide for Indian Founders",
    category: "Startup Guides",
    excerpt:
      "A founder-friendly overview of entity setup, DPIIT recognition, tax basics, and early compliance.",
    slug: "startup-registration-guide"
  }
];
