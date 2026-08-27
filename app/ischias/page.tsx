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
  title: "Ischias | Naprapatbehandling i Vasastan",
  description:
    "Jag undersöker ischiasliknande besvär och strålande smärta i benet och anpassar behandling och råd. Boka naprapat i Vasastan nära Odenplan.",
  alternates: { canonical: "/ischias" },
  openGraph: {
    title: "Ischias | Naprapatbehandling i Vasastan",
    description:
      "Individuell bedömning vid ischiasliknande besvär och strålande smärta i benet i Vasastan nära Odenplan.",
    url: "https://naprapat-hanna.se/ischias",
    type: "website",
  },
};

export default function IschiasPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SymptomPageStructuredData
        path="/ischias"
        name="Ischias"
        description="Individuell bedömning vid ischiasliknande besvär och strålande smärta i benet i Vasastan nära Odenplan."
      />
      <SymptomTracker symptom="Ischias" />
      <SymptomBreadcrumbs currentPage="Ischias" />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-linear-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Behandling av Ischias
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Individuell bedömning och behandling vid ischiasliknande besvär och
            strålande smärta i benet.
          </p>
          <SymptomCTAButtons source="symptom_ischias_hero" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What is it */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vad är Ischias?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ischias beskriver smärta och ibland domningar eller stickningar som
              strålar från ländrygg eller säte ner i benet. Liknande symtom kan
              ha olika orsaker, så en individuell bedömning är viktig innan ett
              behandlingsupplägg föreslås.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Besvären kan bland annat vara kopplade till nervirritation i
              ländryggen eller påverkan från strukturer i rygg, höft och säte.
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
                <span>Skarp, stickande smärta från ländryggen ner i benet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Domningar eller stickningar i ben och fot</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Muskelsvaghet i benet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Smärta som förvärras vid sitting eller stående</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Svårighet att gå eller stå upp</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Brännande känsla längs nerven</span>
              </li>
            </ul>
          </div>

          {/* Treatment */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Hur kan naprapati hjälpa?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jag undersöker rörelse, styrka och känsel och anpassar upplägget
              efter bedömningen. Behandling och råd kan ha som mål att:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Anpassa rörelser och belastning efter symtomen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Behandla spända muskler som påverkar nerven</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Förbättra rörlighet i rygg och bäcken</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Minska rörelser som provocerar smärtan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Ge dig övningar och råd för fortsatt egenvård</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Upplägget anpassas efter dina symtom och din tolerans. Vid tecken
              på att besvären behöver medicinsk utredning hänvisar jag vidare.
            </p>
          </div>

          <RelatedSymptoms currentSymptom="ischias" />

          <MedicalSafetyNote />

          {/* CTA */}
          <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Boka en bedömning av dina besvär
            </h3>
            <p className="text-muted-foreground mb-6">
              Boka ett besök idag och få en behandlingsplan som passar just dina
              behov.
            </p>
            <SymptomCTAButtons source="symptom_ischias_cta" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
