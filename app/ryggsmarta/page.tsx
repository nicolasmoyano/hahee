import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SymptomBreadcrumbs from "@/components/symptom-breadcrumbs";
import SymptomTracker from "@/components/symptom-tracker";
import SymptomCTAButtons from "@/components/symptom-cta-buttons";
import SymptomPageStructuredData from "@/components/symptom-page-structured-data";
import MedicalSafetyNote from "@/components/medical-safety-note";

export const metadata: Metadata = {
  title: "Ryggsmärta & ryggskott | Naprapat i Vasastan",
  description:
    "Jag undersöker ryggsmärta, ryggskott och stelhet och anpassar behandling och råd efter din bedömning. Boka naprapat i Vasastan nära Odenplan.",
  alternates: { canonical: "/ryggsmarta" },
  openGraph: {
    title: "Ryggsmärta & ryggskott | Naprapat i Vasastan",
    description:
      "Individuell bedömning och naprapatbehandling vid ryggsmärta, ryggskott och stelhet i Vasastan nära Odenplan.",
    url: "https://naprapat-hanna.se/ryggsmarta",
    type: "website",
  },
};

export default function RyggsmartaPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SymptomPageStructuredData
        path="/ryggsmarta"
        name="Ryggsmärta och ryggskott"
        description="Individuell bedömning och naprapatbehandling vid ryggsmärta, ryggskott och stelhet i Vasastan nära Odenplan."
      />
      <SymptomTracker symptom="Ryggsmärta" />
      <SymptomBreadcrumbs currentPage="Ryggsmärta" />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-linear-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Behandling av ryggsmärta
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Jag undersöker hur ryggbesvären påverkar dig och anpassar behandling,
            råd och övningar efter bedömningen.
          </p>
          <SymptomCTAButtons source="symptom_ryggsmarta_hero" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What is it */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vad är ryggsmärta?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ryggsmärta är ett av de vanligaste besvären som påverkar människor
              i alla åldrar. Det kan vara allt från en dov värk till skarp,
              intensiv smärta som begränsar din vardag. Ryggsmärta kan uppstå
              plötsligt efter en skada eller utvecklas gradvis över tid på grund
              av dålig hållning, överbelastning eller muskulär obalans.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ryggsmärta kan ha flera orsaker och påverkas bland annat av
              belastning, aktivitet, återhämtning och tidigare besvär. Därför
              börjar jag med frågor och en individuell undersökning.
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
                <span>Dov eller skarp smärta i nedre eller övre ryggen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Stelhet och begränsad rörlighet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Smärta som strålar ner i benen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Svårighet att sitta, stå eller böja sig</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Muskelspänningar och ömhet</span>
              </li>
            </ul>
          </div>

          {/* Treatment */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Hur kan naprapati hjälpa?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jag bedömer hur dina besvär påverkar rörelse och vardag. Beroende
              på bedömningen kan jag använda mobilisering, mjukdelsbehandling,
              råd och övningar med målet att:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Minska smärta som begränsar vardagen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Förbättra rörlighet och flexibilitet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Återställa muskelbalans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Ge dig övningar och råd för fortsatt egenvård</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Behandlingen är individuellt anpassad efter dina behov och
              inkluderar även rådgivning om ergonomi, träning och hållning.
            </p>
          </div>

          {/* Related Symptoms - Internal Linking for SEO */}
          <div className="border-t pt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Relaterade besvär
            </h3>
            <p className="text-muted-foreground mb-6">
              Ryggsmärta kan ofta relatera till andra besvär. Läs mer om hur vi
              behandlar:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="/ischias"
                className="p-4 border border-border rounded-lg hover:border-primary hover:bg-secondary/50 transition"
              >
                <h4 className="font-semibold text-foreground mb-2">Ischias</h4>
                <p className="text-sm text-muted-foreground">
                  Smärta som strålar från ryggen ner i benen kan vara ischias.
                </p>
              </a>
              <a
                href="/nacksmarta"
                className="p-4 border border-border rounded-lg hover:border-primary hover:bg-secondary/50 transition"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  Nacksmärta
                </h4>
                <p className="text-sm text-muted-foreground">
                  Besvär i nacke, rygg och skuldror kan förekomma samtidigt.
                </p>
              </a>
              <a
                href="/huvudvark"
                className="p-4 border border-border rounded-lg hover:border-primary hover:bg-secondary/50 transition"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  Huvudvärk
                </h4>
                <p className="text-sm text-muted-foreground">
                  Besvär i rygg, nacke och skuldror kan förekomma samtidigt.
                </p>
              </a>
              <a
                href="/idrottsskador"
                className="p-4 border border-border rounded-lg hover:border-primary hover:bg-secondary/50 transition"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  Idrottsskador
                </h4>
                <p className="text-sm text-muted-foreground">
                  Ryggskador från träning behöver professionell behandling.
                </p>
              </a>
            </div>
          </div>

          <MedicalSafetyNote />

          {/* CTA */}
          <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Boka en bedömning av ryggbesvären
            </h3>
            <p className="text-muted-foreground mb-6">
              Boka ett besök idag och ta första steget mot en vardag med mindre
              smärta.
            </p>
            <SymptomCTAButtons source="symptom_ryggsmarta_cta" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
