import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SymptomCTAButtons from "@/components/symptom-cta-buttons";

const PAGE_URL = "https://naprapat-hanna.se/priser";

export const metadata: Metadata = {
  title: "Priser naprapat Stockholm | Hanna Magnusson",
  description:
    "Tydliga priser för naprapatbehandling, käkledsbehandling och dry needling hos Hanna Magnusson i Vasastan, nära Odenplan. 15% rabatt för studenter och pensionärer.",
  alternates: { canonical: "/priser" },
  openGraph: {
    title: "Priser naprapat Stockholm | Hanna Magnusson",
    description:
      "Tydliga priser för naprapatbehandling, käkledsbehandling och dry needling. 15% rabatt för studenter och pensionärer.",
    url: PAGE_URL,
    type: "website",
  },
};

const prices = [
  {
    name: "Naprapatbehandling",
    description: "30–40 min, manuell behandling och rehab",
    price: "880",
  },
  {
    name: "Käkledsbehandling",
    description: "Specifik behandling av käke och käkmuskulatur",
    price: "880",
  },
  {
    name: "Dry needling",
    description: "Nålbehandling för djupliggande muskelspänningar",
    price: "850",
  },
];

const questions = [
  {
    question: "Vad kostar en naprapatbehandling hos dig?",
    answer:
      "En naprapatbehandling kostar 880 kr. Käkledsbehandling kostar också 880 kr och dry needling 850 kr. Studenter och pensionärer får 15 % rabatt på alla behandlingar.",
  },
  {
    question: "Kan jag använda friskvårdsbidrag?",
    answer:
      "Kontakta din arbetsgivare för att höra vad som gäller för just ditt friskvårdsbidrag. Jag skickar gärna kvitto som du kan använda vid ansökan.",
  },
  {
    question: "Ersätter försäkringsbolag behandlingen?",
    answer:
      "Många sjukvårdsförsäkringar ersätter naprapatbehandling. Kontakta ditt försäkringsbolag för att höra vad som gäller, så hjälper jag till med underlag vid behov.",
  },
  {
    question: "Hur betalar jag?",
    answer: "Du kan betala med Swish, kort eller faktura direkt efter besöket.",
  },
  {
    question: "Vad händer om jag behöver avboka?",
    answer:
      "Avboka senast 24 timmar innan din tid för att undvika avbokningsavgift.",
  },
];

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Priser naprapat Stockholm | Hanna Magnusson",
      description:
        "Priser för naprapatbehandling, käkledsbehandling och dry needling hos Hanna Magnusson.",
      inLanguage: "sv-SE",
      about: [{ "@id": "https://naprapat-hanna.se/#business" }],
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Priser",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: questions.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function PriserPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
      />

      <nav
        aria-label="Brödsmulor"
        className="border-b border-border bg-background px-6 py-4"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground">
              Start
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            Priser
          </li>
        </ol>
      </nav>

      <section className="bg-linear-to-b from-secondary to-background px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Tydliga priser, inga överraskningar
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Priser för privatbetalare. Många sjukvårdsförsäkringar ersätter
            behandlingen — jag hjälper dig gärna med underlag.
          </p>
          <SymptomCTAButtons source="priser_hero" />
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {prices.map((item) => (
              <div
                key={item.name}
                className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm"
              >
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  {item.name}
                </h2>
                <p className="mb-6 text-muted-foreground">{item.description}</p>
                <p className="mt-auto text-4xl font-bold text-foreground">
                  {item.price}
                  <span className="ml-1 text-lg font-medium text-muted-foreground">
                    kr
                  </span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground">
            15 % rabatt för studenter och pensionärer på alla behandlingar.
            Betalning med Swish, kort eller faktura. Avbokning senast 24 timmar
            innan för att undvika avbokningsavgift.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <ShieldCheck className="mb-4 h-8 w-8 text-primary" />
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Sjukvårdsförsäkring
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Många sjukvårdsförsäkringar ersätter naprapatbehandling. Kontakta
              ditt försäkringsbolag för att höra vad som gäller för dig, så
              hjälper jag till med det underlag som behövs.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Friskvårdsbidrag
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Kontakta din arbetsgivare för att höra vad som gäller för just
              ditt friskvårdsbidrag. Jag skickar gärna kvitto som du kan
              använda vid ansökan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 flex items-center justify-center gap-3">
            <CreditCard className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Vanliga frågor om priser
            </h2>
          </div>
          <div className="space-y-4">
            {questions.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-xl border border-border bg-card p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  <span>{question}</span>
                  <span
                    aria-hidden="true"
                    className="text-xl font-normal transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Boka din tid
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Se aktuella tider och boka direkt, eller ring mig om du har frågor
            om priser eller försäkring.
          </p>
          <SymptomCTAButtons source="priser_cta" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
