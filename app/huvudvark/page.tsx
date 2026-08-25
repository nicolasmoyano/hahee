import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SymptomBreadcrumbs from "@/components/symptom-breadcrumbs";
import RelatedSymptoms from "@/components/related-symptoms";
import SymptomTracker from "@/components/symptom-tracker";
import SymptomCTAButtons from "@/components/symptom-cta-buttons";

export const metadata: Metadata = {
  title: "Huvudvärk & Spänningar – Behandling i Stockholm | Naprapat Hanna",
  description:
    "Naprapatbehandling för spänningshuvudvärk och migrän i Stockholm. Behandla grundorsaken i nacke och axlar. Boka tid hos legitimerad naprapat.",
  alternates: { canonical: "/huvudvark" },
  openGraph: {
    title: "Huvudvärk & Spänningar – Behandling i Stockholm | Naprapat Hanna",
    description:
      "Naprapatbehandling för spänningshuvudvärk och migrän i Stockholm. Behandla grundorsaken i nacke och axlar.",
    url: "https://naprapat-hanna.se/huvudvark",
    type: "website",
  },
};

export default function HuvudvarkPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SymptomTracker symptom="Huvudvärk" />
      <SymptomBreadcrumbs currentPage="Huvudvärk" />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-linear-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Behandling av huvudvärk & spänningar
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Effektiv naprapatbehandling för huvudvärk, migrän och
            spänningshuvudvärk. Få lindring och förebygg återkommande besvär.
          </p>
          <SymptomCTAButtons source="symptom_huvudvark_hero" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What is it */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vad är huvudvärk & spänningar?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Huvudvärk är ett mycket vanligt besvär som kan ha många olika
              orsaker. Den vanligaste typen är spänningshuvudvärk, som ofta
              orsakas av muskelspänningar i nacke, axlar och käkar. Många
              upplever också migrän eller huvudvärk som utlöses av stress, dålig
              hållning eller felställda nackkotor.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vanliga orsaker inkluderar muskelspänningar i nacke och skuldror,
              stress, käkproblem (TMJ), dålig arbetshållning, sömnbrist och
              hormonella förändringar.
            </p>
          </div>

          {/* Symptoms */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Vanliga symptom
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Dov, tryckande smärta runt huvudet (spänningshuvudvärk)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Pulserande, intensiv smärta på ena sidan (migrän)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Huvudvärk som börjar i nacken</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Stelhet och spänningar i nacke och axlar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Ljus- och ljudkänslighet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Illamående vid svår huvudvärk</span>
              </li>
            </ul>
          </div>

          {/* Treatment */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Hur kan naprapati hjälpa?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Naprapatbehandling kan vara mycket effektiv för många typer av
              huvudvärk, särskilt spänningshuvudvärk och huvudvärk som utgår
              från nacken. Jag arbetar med att behandla de bakomliggande
              orsakerna:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Mjukdelsbehandling av spända nackmuskler</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Behandling av käkmuskulaturen (TMJ)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Mobilisering av nackkotor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Förbättra blodcirkulationen till huvudet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Avslappningstekniker och stresshantering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Ergonomisk rådgivning</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Behandlingen är skonsam och många patienter upplever att både
              frekvensen och intensiteten av huvudvärken minskar efter
              regelbunden behandling.
            </p>
          </div>

          <RelatedSymptoms currentSymptom="huvudvark" />

          {/* CTA */}
          <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Slipp huvudvärken
            </h3>
            <p className="text-muted-foreground mb-6">
              Boka ett besök och få hjälp att hitta orsaken till din huvudvärk
              och en behandling som fungerar för dig.
            </p>
            <SymptomCTAButtons source="symptom_huvudvark_cta" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
