type SymptomPageStructuredDataProps = {
  path: string;
  name: string;
  description: string;
};

export default function SymptomPageStructuredData({
  path,
  name,
  description,
}: SymptomPageStructuredDataProps) {
  const url = `https://naprapat-hanna.se${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "sv-SE",
        isPartOf: { "@id": "https://naprapat-hanna.se/#website" },
        about: [
          { "@id": "https://naprapat-hanna.se/#hanna-magnusson" },
          { "@id": "https://naprapat-hanna.se/#business" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Start",
            item: "https://naprapat-hanna.se/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Symptom och besvär",
            item: "https://naprapat-hanna.se/symptomer",
          },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
