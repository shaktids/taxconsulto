import type { Metadata } from "next";
import { siteConfig } from "./site";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+91-${siteConfig.phone}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: siteConfig.address
    },
    areaServed: "India",
    priceRange: "₹₹",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.linkedin.com/",
      "https://www.instagram.com/"
    ],
    serviceType: [
      "GST Filing",
      "Income Tax Filing",
      "Company Registration",
      "LLP Registration",
      "Trademark Registration",
      "Accounting Services"
    ]
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
