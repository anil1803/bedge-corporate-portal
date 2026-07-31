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
  ShieldCheck
} from "lucide-react";

export const company = {
  name: "B-EDGE BUSINESS CONSULTANTS",
  logoText: "B-EDGE",
  tagline: "One Stop Solution For All Business Needs",
  successLine: "Your Success is our Business.",
  consultationLine: "Reach out to us today for a free consultation!",
  email: "bedgebusinessconsultants@gmail.com",
  phones: ["+91 99936 96836", "+91 99812 12097"],
  address: "Flat No. 101, Plot No. 141, Zone-II MP Nagar, Bhopal, Madhya Pradesh - 462011"
} as const;

export const aboutParagraphs = [
  "At B Edge Business Consultants LLP, we are your one-stop solution for all business needs, Associated with experienced Chartered Accountants across Madhya Pradesh and backed by renowned law firm with 35 years of expertise. We offer comprehensive services, including business and government registrations, GST compliance, Income tax management, and more.",
  "Our mission is to provide innovative, value-driven solutions with integrity and expertise, helping businesses achieve compliance and unlock growth potential."
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
    title: "One-stop solution",
    text: "Comprehensive services for business and government registrations, GST compliance, Income tax management, and more.",
    icon: LifeBuoy
  },
  {
    title: "Experienced association",
    text: "Associated with experienced Chartered Accountants across Madhya Pradesh.",
    icon: BadgeCheck
  },
  {
    title: "Legal expertise",
    text: "Backed by renowned law firm with 35 years of expertise.",
    icon: Landmark
  },
  {
    title: "Integrity and expertise",
    text: "Innovative, value-driven solutions with integrity and expertise.",
    icon: ShieldCheck
  }
] as const;

export const contactItems = [
  { label: "Address", value: company.address, icon: MapPin },
  { label: "Phone Number", value: company.phones.join(" / "), icon: Phone },
  { label: "Email", value: company.email, icon: Mail }
] as const;
