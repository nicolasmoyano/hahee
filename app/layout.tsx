import type { Metadata } from "next";
import { DM_Serif_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSerifText = DM_Serif_Text({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://naprapat-hanna.se/#website",
      url: "https://naprapat-hanna.se",
      name: "Naprapat Hanna Magnusson",
      inLanguage: "sv-SE",
      publisher: { "@id": "https://naprapat-hanna.se/#business" },
    },
    {
      "@type": "Person",
      "@id": "https://naprapat-hanna.se/#hanna-magnusson",
      name: "Hanna Magnusson",
      jobTitle: "Legitimerad naprapat",
      image: "https://naprapat-hanna.se/Profile-image.jpg",
      url: "https://naprapat-hanna.se/#about",
      email: "hannahahee@gmail.com",
      telephone: "+46737853876",
      knowsLanguage: ["sv", "en"],
      knowsAbout: [
        "Naprapati",
        "Rygg- och nackbesvär",
        "Huvudvärk",
        "Käkledsbesvär",
        "Idrottsskador",
        "Rehabilitering",
      ],
      worksFor: {
        "@type": "MedicalBusiness",
        name: "Rehabkliniken",
        url: "https://naprapater.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Västmannagatan 40",
          addressLocality: "Stockholm",
          postalCode: "113 25",
          addressCountry: "SE",
        },
      },
      sameAs: ["https://naprapater.com/terapeuter/hanna-magnusson"],
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://naprapat-hanna.se/#business",
      name: "Naprapat Hanna Magnusson",
      description:
        "Legitimerad naprapat i Vasastan nära Odenplan. Behandling av bland annat rygg- och nackbesvär, huvudvärk, käkledsbesvär och idrottsskador.",
      url: "https://naprapat-hanna.se",
      image: "https://naprapat-hanna.se/Profile-image.jpg",
      telephone: "+46737853876",
      email: "hannahahee@gmail.com",
      employee: { "@id": "https://naprapat-hanna.se/#hanna-magnusson" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Västmannagatan 40",
        addressLocality: "Stockholm",
        addressRegion: "Stockholms län",
        postalCode: "113 25",
        addressCountry: "SE",
      },
      areaServed: [
        { "@type": "City", name: "Stockholm" },
        { "@type": "Place", name: "Vasastan" },
        { "@type": "Place", name: "Odenplan" },
      ],
      availableService: [
        { "@type": "Service", name: "Naprapatbehandling" },
        { "@type": "Service", name: "Käkledsbehandling" },
        { "@type": "Service", name: "Dry needling" },
        { "@type": "Service", name: "Skaderehabilitering" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://naprapat-hanna.se"),
  title:
    "Naprapat Hanna Magnusson i Stockholm | Smärtlindring & Behandling",
  description:
    "Naprapat Hanna Magnusson i Stockholm. Legitimerad naprapat sedan 2018. Boka tid för smärtlindring, behandling och rehab. Västmannagatan 40.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJ96PQBF');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased ${dmSerifText.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJ96PQBF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
