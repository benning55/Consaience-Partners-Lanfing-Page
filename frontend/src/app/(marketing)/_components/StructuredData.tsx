export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Consaience Partners",
    "description": "Plug-and-play adtech that helps sales teams target the right customer groups.",
    "url": "https://consaience.com",
    "logo": "https://consaience.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "sales",
      "email": "sales@consaience.com"
    },
    "sameAs": [
      "https://linkedin.com/company/consaience-partners",
      "https://twitter.com/consaience"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Consaience Partners",
    "url": "https://consaience.com",
    "description": "Target the right accounts. Win the right deals. Consaience Partners snaps into your stack to help sales teams focus on customer groups most likely to convert—privacy-first and enterprise-ready.",
    "publisher": {
      "@type": "Organization",
      "name": "Consaience Partners"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}