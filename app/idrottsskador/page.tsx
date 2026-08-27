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
  title: "Idrottsskador & rehab | Naprapat i Vasastan",
  description:
    "Jag undersöker idrottsskador och överbelastningsbesvär och anpassar behandling, rehab och återgång till träning. Boka i Vasastan nära Odenplan.",
  alternates: { canonical: "/idrottsskador" },
  openGraph: {
    title: "Idrottsskador & rehab | Naprapat i Vasastan",
    description:
      "Individuell bedömning, behandling och rehab vid idrottsskador och överbelastningsbesvär i Vasastan nära Odenplan.",
    url: "https://naprapat-hanna.se/idrottsskador",
    type: "website",
  },
};

export default function IdrottsskadorPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SymptomPageStructuredData
        path="/idrottsskador"
        name="Idrottsskador och rehab"
        description="Individuell bedömning, behandling och rehab vid idrottsskador och överbelastningsbesvär i Vasastan nära Odenplan."
      />
      <SymptomTracker symptom="Idrottsskador" />
      <SymptomBreadcrumbs currentPage="Idrottsskador" />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-linear-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Behandling av idrottsskador
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Individuell bedömning, behandling och rehab vid idrottsskador och
            överbelastningsbesvär.
          </p>
          <SymptomCTAButtons source="symptom_idrottsskador_hero" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What is it */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vad är idrottsskador?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Idrottsskador är skador som uppstår i samband med träning eller
              fysisk aktivitet. De kan vara allt från akuta skador (som
              stukning, sträckning eller vridvåld) till överbelastningsskador
              som utvecklas gradvis över tid. Oavsett om du är elit-idrottare
              eller motionär kan rätt behandling och rehab vara avgörande för
              din återhämtning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vanliga idrottsskador inkluderar muskelstukningar,
              seninflamationer (tendiniter), ligamentskador, löparknä,
              hälsenebesvär, tennisarmbåge och överbelastningsskador.
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
                <span>Akut smärta eller gradvis ökande besvär</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Svullnad och inflammation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Nedsatt rörlighet och funktion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Muskelsvaghet eller instabilitet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Smärta vid specifika rörelser eller belastning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Stelhet och ömhet</span>
              </li>
            </ul>
          </div>

          {/* Treatment */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Hur kan naprapati hjälpa?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jag undersöker skadan, din belastning och vad du vill kunna göra
              igen. Upplägget anpassas efter bedömningen och kan innehålla:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Individuell undersökning och bedömning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Råd om belastning i den tidiga fasen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Mjukdels- och ledbehandling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Individuellt rehabprogram</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Styrke- och stabilitetsträning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Förebyggande åtgärder och teknikrådgivning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Progressiv återgång till träning</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Målet är en stegvis och trygg återgång till den aktivitet som är
              viktig för dig.
            </p>
          </div>

          <RelatedSymptoms currentSymptom="idrottsskador" />

          <MedicalSafetyNote />

          {/* CTA */}
          <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Kom tillbaka starkare
            </h3>
            <p className="text-muted-foreground mb-6">
              Boka ett besök och få en professionell behandlings- och rehabplan
              för din idrottsskada.
            </p>
            <SymptomCTAButtons source="symptom_idrottsskador_cta" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
