import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Clock, Languages, MapPin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SymptomCTAButtons from "@/components/symptom-cta-buttons";

const PAGE_URL = "https://naprapat-hanna.se/naprapat-odenplan";

export const metadata: Metadata = {
  title: "Naprapat Odenplan & Vasastan | Hanna Magnusson",
  description:
    "Jag heter Hanna Magnusson och är legitimerad naprapat på Västmannagatan 40 i Vasastan, cirka fem minuter från Odenplan. Boka tid direkt.",
  alternates: { canonical: "/naprapat-odenplan" },
  openGraph: {
    title: "Naprapat nära Odenplan | Hanna Magnusson",
    description:
      "Jag erbjuder personlig naprapatbehandling på Rehabkliniken i Vasastan, cirka fem minuter från Odenplan.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: "/Profile-image.jpg",
        width: 1573,
        height: 2360,
        alt: "Hanna Magnusson, legitimerad naprapat nära Odenplan",
      },
    ],
  },
};

const questions = [
  {
    question: "Var ligger mottagningen?",
    answer:
      "Jag tar emot på Rehabkliniken, Västmannagatan 40 i Vasastan. Mottagningen ligger cirka fem minuters promenad från Odenplan och S:t Eriksplan.",
  },
  {
    question: "Behöver jag en remiss för att boka naprapat?",
    answer:
      "Nej, du kan boka en tid direkt. Vid besöket går jag igenom dina besvär och gör en individuell bedömning innan behandlingen påbörjas.",
  },
  {
    question: "Vilka besvär arbetar du med?",
    answer:
      "Jag arbetar bland annat med rygg- och nackbesvär, huvudvärk, käkledsbesvär, muskelspänningar, idrottsskador och rehabilitering.",
  },
  {
    question: "Kan jag få behandling på engelska?",
    answer: "Ja, jag tar emot patienter på både svenska och engelska.",
  },
  {
    question: "Hur bokar jag tid?",
    answer:
      "Använd bokningsknappen för att se aktuella tider i ClinicBuddy. Du kan också ringa mig om du är osäker på om jag kan hjälpa dig.",
  },
];

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Naprapat Odenplan & Vasastan | Hanna Magnusson",
      description:
        "Information om min naprapatbehandling och bokning nära Odenplan i Stockholm.",
      inLanguage: "sv-SE",
      about: [
        { "@id": "https://naprapat-hanna.se/#hanna-magnusson" },
        { "@id": "https://naprapat-hanna.se/#business" },
      ],
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
          name: "Naprapat Odenplan",
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

export default function NaprapatOdenplanPage() {
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
            Naprapat Odenplan
          </li>
        </ol>
      </nav>

      <section className="overflow-hidden bg-linear-to-b from-secondary to-background px-6 py-20 md:py-28 xl:pb-14 xl:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,1.05fr)_minmax(240px,0.62fr)_minmax(330px,0.88fr)] xl:gap-8">
          <div className="xl:pr-4">
            <p className="mb-4 font-medium text-primary">
              Västmannagatan 40 · Vasastan
            </p>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl xl:text-[3.5rem] xl:leading-[1.05]">
              Legitimerad naprapat nära Odenplan
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Jag hjälper dig med bland annat rygg- och nackbesvär, huvudvärk,
              käkledsbesvär och idrottsskador. Du hittar mig på Rehabkliniken i
              Vasastan, cirka fem minuters promenad från Odenplan.
            </p>
            <SymptomCTAButtons source="naprapat_odenplan_hero" />
          </div>

          <div className="relative hidden min-h-[420px] overflow-hidden rounded-2xl border border-border shadow-sm xl:block">
            <Image
              src="/Profile-image.jpg"
              alt="Hanna Magnusson, legitimerad naprapat"
              fill
              sizes="(min-width: 1280px) 280px, 0px"
              className="object-cover object-[center_18%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-6 pb-6 pt-20 text-white">
              <p className="text-sm font-medium">Personlig behandling i Vasastan</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm xl:p-9">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Hanna Magnusson
            </h2>
            <ul className="space-y-5 text-muted-foreground">
              <li className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Legitimerad naprapat, verksam sedan 2018</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Rehabkliniken, Västmannagatan 40, 113 25 Stockholm</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Måndag–fredag, 08.00–18.00</span>
              </li>
              <li className="flex items-start gap-3">
                <Languages className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Behandling på svenska och engelska</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-20 xl:pb-24 xl:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl xl:grid xl:max-w-none xl:grid-cols-[0.8fr_1.2fr] xl:items-end xl:gap-16">
            <h2 className="mb-4 text-3xl font-bold text-foreground xl:mb-0 xl:text-4xl">
              Personlig behandling i Vasastan
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Jag börjar varje besök med att lyssna på din beskrivning och
              undersöka hur besvären påverkar din rörelse och vardag. Jag
              anpassar behandlingen efter bedömningen och kan kombinera den med
              råd om träning, ergonomi och återhämtning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 xl:gap-8">
            <article className="flex flex-col rounded-xl border border-border bg-card p-6 xl:min-h-[260px] xl:p-8">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Rygg och nacke
              </h3>
              <p className="mb-6 text-muted-foreground">
                Individuell bedömning och behandling vid smärta, stelhet och
                begränsad rörlighet i rygg, nacke och skuldror.
              </p>
              <div className="mt-auto flex flex-wrap gap-3 text-sm">
                <Link href="/ryggsmarta" className="font-medium text-primary hover:underline">
                  Ryggsmärta
                </Link>
                <Link href="/nacksmarta" className="font-medium text-primary hover:underline">
                  Nacksmärta
                </Link>
              </div>
            </article>

            <article className="flex flex-col rounded-xl border border-border bg-card p-6 xl:min-h-[260px] xl:p-8">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Huvud och käke
              </h3>
              <p className="mb-6 text-muted-foreground">
                Jag arbetar med huvudvärk samt spänningar och besvär som kan vara
                relaterade till nacke eller käkled.
              </p>
              <Link href="/huvudvark" className="mt-auto text-sm font-medium text-primary hover:underline">
                Läs om huvudvärk
              </Link>
            </article>

            <article className="flex flex-col rounded-xl border border-border bg-card p-6 xl:min-h-[260px] xl:p-8">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Träning och rehab
              </h3>
              <p className="mb-6 text-muted-foreground">
                Stöd vid idrottsskador, överbelastning och återgång till träning
                med en plan anpassad efter dina förutsättningar.
              </p>
              <Link href="/idrottsskador" className="mt-auto text-sm font-medium text-primary hover:underline">
                Läs om idrottsskador
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 px-6 py-16 md:py-20 xl:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 xl:grid-cols-[0.85fr_1.15fr] xl:gap-20">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-foreground xl:text-4xl">
              Hitta till mottagningen
            </h2>
            <address className="mb-5 not-italic leading-relaxed text-muted-foreground">
              Rehabkliniken
              <br />
              Västmannagatan 40
              <br />
              113 25 Stockholm
            </address>
            <p className="mb-5 leading-relaxed text-muted-foreground">
              Kliniken ligger i Vasastan, cirka fem minuters promenad från
              Odenplan eller S:t Eriksplan. Tunnelbana, pendeltåg och flera
              busslinjer finns i närheten.
            </p>
            <a
              href="https://naprapater.com/terapeuter/hanna-magnusson"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Se min profil hos Rehabkliniken
            </a>
          </div>

          <div>
            <h2 className="mb-5 text-3xl font-bold text-foreground xl:text-4xl">
              Så går ett besök till
            </h2>
            <ol className="space-y-5 text-muted-foreground">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Samtal och undersökning</h3>
                  <p>Du beskriver dina besvär, mål och hur vardagen påverkas.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Individuell bedömning</h3>
                  <p>Jag förklarar min bedömning och föreslår ett upplägg.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Behandling och råd</h3>
                  <p>Behandlingen anpassas och kompletteras vid behov med råd eller övningar.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
            Vanliga frågor om naprapat vid Odenplan
          </h2>
          <div className="space-y-4">
            {questions.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-border bg-card p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  <span>{question}</span>
                  <span
                    aria-hidden="true"
                    className="text-xl font-normal transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Naprapatbehandling ersätter inte akut medicinsk vård. Vid allvarliga
            eller plötsliga symtom, kontakta 1177 för rådgivning eller 112 vid
            akut fara.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-16 text-center xl:py-20 xl:text-left">
        <div className="mx-auto max-w-7xl xl:flex xl:items-center xl:justify-between xl:gap-16">
          <div className="mx-auto max-w-3xl xl:mx-0 xl:max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-foreground xl:text-4xl">
              Boka naprapat nära Odenplan
            </h2>
            <p className="mb-8 text-lg text-muted-foreground xl:mb-0">
              Se aktuella tider och boka direkt, eller ring mig om du är osäker
              på om jag kan hjälpa dig.
            </p>
          </div>
          <div className="xl:shrink-0">
            <SymptomCTAButtons source="naprapat_odenplan_cta" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
