import { faqs } from "@/lib/faqs";
import { getSiteUrl, siteDescription, siteName } from "@/lib/site";

export function getOrganizationSchema() {
  const siteUrl = getSiteUrl().toString();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/sticky-logo.png`,
    description: siteDescription,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "fer@quentli.com",
      availableLanguage: ["Spanish"],
    },
  };
}

export function getWebsiteSchema() {
  const siteUrl = getSiteUrl().toString();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "es-MX",
  };
}

export function getSoftwareApplicationSchema() {
  const siteUrl = getSiteUrl().toString();

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "WhatsApp",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MXN",
    },
    description: siteDescription,
    url: siteUrl,
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getHomeStructuredData() {
  return [getOrganizationSchema(), getWebsiteSchema(), getSoftwareApplicationSchema(), getFaqSchema()];
}
