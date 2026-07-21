export default function LocalBusinessJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",

    "@id": "https://poteauvalleyrepair.com/#business",

    name: "Poteau Valley Repair",

    url: "https://poteauvalleyrepair.com",

    logo: "https://poteauvalleyrepair.com/images/poteau-valley-repair-logo.png",

    image:
      "https://poteauvalleyrepair.com/images/poteau-valley-repair-logo.png",

    telephone: "+1-918-962-0233",

    email: "poteauvalleyrepair@gmail.com",

    description:
      "Veteran-owned automotive repair, vehicle diagnostics, mobile service, roadside assistance, lawn mower repair, small-engine repair, and basic detailing serving LeFlore County and surrounding counties.",

    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "LeFlore County, Oklahoma",
      },
      {
        "@type": "AdministrativeArea",
        name: "Surrounding counties in Oklahoma",
      },
    ],

    priceRange: "$$",

    paymentAccepted: [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Cash App",
      "Square Afterpay",
      "Approved Business Check",
    ],

    currenciesAccepted: "USD",

    sameAs: [
      "https://share.google/tT3Z3VIMLM7V576j6",
    ],

    founder: {
      "@type": "Person",
      name: "Jesse Hudson",
    },

    foundingDate: "2026-06",

    knowsAbout: [
      "Automotive repair",
      "Vehicle diagnostics",
      "Electrical diagnostics",
      "Mobile automotive repair",
      "Roadside assistance",
      "Lawn mower repair",
      "Small engine repair",
      "Vehicle detailing",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}