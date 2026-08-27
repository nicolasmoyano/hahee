import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SymptomBreadcrumbs from "@/components/symptom-breadcrumbs";
import RelatedSymptoms from "@/components/related-symptoms";
import SymptomTracker from "@/components/symptom-tracker";
import SymptomCTAButtons from "@/components/symptom-cta-buttons";
import SymptomPageStructuredData from "@/components/symptom-page-structured-data";
import MedicalSafetyNote from "@/components/medical-safety-note";

export const metadata: Metadata = {
  title: "Spänningshuvudvärk | Naprapat i Vasastan",
  description:
    "Jag undersöker spänningsrelaterad huvudvärk och besvär från nacke, axlar och käke. Boka naprapat i Vasastan nära Odenplan.",
  alternates: { canonical: "/huvudvark" },
  openGraph: {
    title: "Spänningshuvudvärk | Naprapat i Vasastan",
    description:
      "Individuell bedömning vid spänningsrelaterad huvudvärk och besvär från nacke, axlar och käke i Vasastan.",
    url: "https://naprapat-hanna.se/huvudvark",
    type: "website",
  },
};

export default function HuvudvarkPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SymptomPageStructuredData
        path="/huvudvark"
        name="Spänningshuvudvärk"
        description="Individuell bedömning vid spänningsrelaterad huvudvärk och besvär från nacke, axlar och käke i Vasastan."
      />
      <SymptomTracker symptom="Huvudvärk" />
      <SymptomBreadcrumbs currentPage="Huvudvärk" />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-linear-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Behandling av huvudvärk & spänningar
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Individuell bedömning vid spänningsrelaterad huvudvärk och besvär
            från nacke, axlar eller käke.
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
              kan upplevas tillsammans med spänningar i nacke, axlar eller käke.
              Huvudvärk kan samtidigt ha många olika orsaker och behöver bedömas
              utifrån symtom och sjukdomshistoria.
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
              Vid spänningsrelaterade besvär undersöker jag bland annat nacke,
              skuldror, käke och relevanta rörelser. Beroende på bedömningen kan
              behandlingen innehålla:
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
                <span>Individuellt anpassade rörelseövningar</span>
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
              Upplägget anpassas efter dina symtom. Ny, plötslig eller ovanligt
              svår huvudvärk ska bedömas av sjukvården.
            </p>
          </div>

          <RelatedSymptoms currentSymptom="huvudvark" />

          <MedicalSafetyNote />

          {/* CTA */}
          <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Boka en bedömning av huvudvärken
            </h3>
            <p className="text-muted-foreground mb-6">
              Boka ett besök för en individuell bedömning och ett upplägg som
              anpassas efter dina symtom.
            </p>
            <SymptomCTAButtons source="symptom_huvudvark_cta" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
