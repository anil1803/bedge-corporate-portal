import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { LoadingScreen } from "@/components/loading-screen";
import { company } from "@/lib/brochure-data";

export const metadata: Metadata = {
  title: {
    default: `${company.logoText} | ${company.name}`,
    template: `%s | ${company.logoText}`
  },
  description: company.tagline,
  keywords: [
    "business consultants",
    "company registration",
    "GST registration",
    "income tax filing",
    "MCA compliance",
    "business registration",
    "LLP registration",
    "Pvt Ltd company",
    "FSSAI registration",
    "trademark registration",
    "MSME registration",
    "business consulting services",
    "tax compliance",
    "legal services",
    "Bhopal business consultants",
    "Madhya Pradesh business services"
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  metadataBase: new URL("https://bedgebusinessconsultants.com"),
  openGraph: {
    title: company.name,
    description: company.tagline,
    type: "website",
    locale: "en_US",
    url: "https://bedgebusinessconsultants.com",
    siteName: company.logoText,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${company.name} - Business Consulting Services`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.tagline,
    images: ["/twitter-image.jpg"],
    creator: "@bedgeconsultants"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://bedgebusinessconsultants.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: company.name,
              alternateName: company.logoText,
              url: "https://bedgebusinessconsultants.com",
              logo: "https://bedgebusinessconsultants.com/logo.png",
              description: company.tagline,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Flat No. 101, Plot No. 141, Zone-II MP Nagar",
                addressLocality: "Bhopal",
                addressRegion: "Madhya Pradesh",
                postalCode: "462011",
                addressCountry: "IN"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: company.phones[0],
                contactType: "customer service",
                email: company.email,
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"]
              },
              sameAs: [
                "https://www.linkedin.com/company/bedge-business-consultants",
                "https://twitter.com/bedgeconsultants",
                "https://www.facebook.com/bedgebusinessconsultants"
              ],
              openingHours: "Mo-Sa 09:00-19:00"
            })
          }}
        />
      </head>
      <body>
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
