import {
  BadgeCheck,
  Banknote,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Gavel,
  Landmark,
  LifeBuoy,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Eye,
  Award,
  Lock,
  Clock,
  Lightbulb,
  Users
} from "lucide-react";

export const company = {
  name: "B-EDGE BUSINESS CONSULTANTS",
  logoText: "B-EDGE",
  tagline: "Your Trusted Partner for Business, Financial & Legal Compliance",
  headline: "From business registration to accounting, taxation, regulatory compliance, and advisory services—we help entrepreneurs and businesses stay compliant, organized, and focused on growth.",
  successLine: "Your Success is our Business.",
  consultationLine: "Reach out to us today for a free consultation!",
  email: "bedgebusinessconsultants@gmail.com",
  phones: ["+91 99936 96836", "+91 99812 12097"],
  address: "Flat No. 101, Plot No. 141, Zone-II MP Nagar, Bhopal, Madhya Pradesh - 462011"
} as const;

export const aboutParagraphs = [
  "B Edge Business Consultants LLP is a professional consulting firm dedicated to delivering comprehensive business, financial, taxation, and regulatory compliance solutions under one roof.",
  "We work with startups, entrepreneurs, MSMEs, private limited companies, LLPs, partnership firms, and established businesses by simplifying complex legal and financial processes. Our objective is to help businesses remain compliant while enabling them to focus on growth and profitability.",
  "With a client-centric approach, transparent communication, and timely execution, we strive to become a trusted long-term business partner for every client we serve."
] as const;

export const missionStatement = "To simplify business compliance by delivering reliable, timely, and technology-driven financial, taxation, accounting, and legal solutions that empower businesses to grow with confidence.";

export const visionStatement = "To become one of India's most trusted business consulting firms by setting new standards of professionalism, integrity, innovation, and client satisfaction while supporting businesses at every stage of their journey.";

export const coreValues = [
  { icon: ShieldCheck, title: "Integrity", description: "Honest and transparent advice." },
  { icon: Award, title: "Professionalism", description: "High-quality services delivered on time." },
  { icon: Target, title: "Accuracy", description: "Precision in every compliance and financial transaction." },
  { icon: Lock, title: "Confidentiality", description: "Complete protection of client information." },
  { icon: Clock, title: "Commitment", description: "Dedicated support for long-term business success." },
  { icon: Lightbulb, title: "Innovation", description: "Leveraging technology to simplify business processes." }
] as const;

export const serviceCategories = [
  {
    title: "Registration Services",
    brochureTitle: "REGISTRATIONS",
    icon: ClipboardCheck,
    items: [
      "GST",
      "EPF & ESIC",
      "StartUp India",
      "Trademark",
      "PAN/TAN",
      "FSSAI Registration",
      "FSSAI Licence (State/Central)",
      "MSME",
      "Gumasta",
      "Digital Signature Certificate",
      "ISO Certification",
      "Import Export Code (IEC)",
      "RCMC",
      "EPCG",
      "Professional Tax",
      "Legal Entity Identifier (LEI)",
      "DARPAN ID",
      "12AA & 80G Registration",
      "ICEGATE",
      "ZED Registration",
      "GeM Registration",
      "Other Registration",
      "Private Limited Company",
      "Public Limited Company Incorporation",
      "LLP",
      "Partnership Firm",
      "Proprietorship Firm",
      "Society & NGO Registrations",
      "HUF"
    ]
  },
  {
    title: "MCA Compliances",
    icon: Building2,
    items: [
      "Annual Filings (Pvt. Ltd, LLP, Section 8 Company & Others)",
      "Director KYC",
      "Authorised & Paid Up Capital Increase",
      "Charge Creation, Modification & Satisfaction",
      "Removal & Addition of Director",
      "Name Change - Company",
      "Registered Office Change",
      "MoA Amendment",
      "AoA Amendment",
      "Share Certificate Creation & Share Transfer",
      "Winding Up - LLP or Company",
      "Company Takeover Process",
      "Company Merger",
      "Auditor Appointment",
      "ROC Change",
      "ROC Search Report",
      "Other MCA Tasks"
    ]
  },
  {
    title: "Legal Services",
    icon: Gavel,
    items: [
      "Rent Agreement Drafting",
      "Partnership Deed Drafting",
      "Amendment Deed Drafting",
      "Valuation Report",
      "Search Report",
      "Registry",
      "Affidavit",
      "Cheque Bounce Cases",
      "Other Legal Matters"
    ]
  },
  {
    title: "Finance",
    icon: Banknote,
    items: [
      "Business Loan",
      "MSME Loans",
      "Mudra Loan",
      "Home Loan",
      "Personal Loan",
      "Mortgage Loan",
      "Education Loan",
      "Vehicle Loan"
    ]
  },
  {
    title: "Insurance",
    icon: ShieldCheck,
    items: [
      "Business Insurance",
      "Property Insurance",
      "Life Insurance",
      "Health Insurance",
      "Vehicles Insurance",
      "Liability Insurance",
      "Agriculture Insurance",
      "Travel Insurance"
    ]
  },
  {
    title: "Other Services",
    icon: FileCheck2,
    items: [
      "Accounting & Book Keeping",
      "Project Report",
      "CMA",
      "GST Filings",
      "GST Refund",
      "GST Notice",
      "ITR Filing",
      "IncomeTax Notice",
      "EPF & ESIC Notice",
      "Registrar of Firms & Society Compliance",
      "Audit Preparation"
    ]
  }
] as const;

export const whyChooseUs = [
  {
    title: "One Stop Business Solution",
    text: "Comprehensive services for all your business needs under one roof.",
    icon: LifeBuoy
  },
  {
    title: "Experienced Professionals",
    text: "Associated with experienced Chartered Accountants and legal experts.",
    icon: BadgeCheck
  },
  {
    title: "Timely Compliance",
    text: "We ensure all your compliance requirements are met on time, every time.",
    icon: ClipboardCheck
  },
  {
    title: "Dedicated Client Support",
    text: "Personalized support and guidance for long-term business success.",
    icon: ShieldCheck
  },
  {
    title: "Technology Driven Services",
    text: "Leveraging technology to simplify business processes and improve efficiency.",
    icon: Landmark
  },
  {
    title: "Customized Business Solutions",
    text: "Tailored solutions to meet your specific business requirements.",
    icon: Building2
  },
  {
    title: "PAN India Services",
    text: "Serving businesses across India with comprehensive compliance solutions.",
    icon: MapPin
  }
] as const;

export const contactItems = [
  { label: "Address", value: company.address, icon: MapPin },
  { label: "Phone Number", value: company.phones.join(" / "), icon: Phone },
  { label: "Email", value: company.email, icon: Mail }
] as const;
