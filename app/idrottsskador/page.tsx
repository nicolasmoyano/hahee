import Header from "@/components/header";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation-form";
import SymptomBreadcrumbs from "@/components/symptom-breadcrumbs";
import RelatedSymptoms from "@/components/related-symptoms";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Behandling av Idrottsskador i Stockholm | Naprapat Hanna",
  description:
    "Professionell naprapatbehandling och rehab för idrottsskador i Stockholm. Behandling av träningsskador, muskelskador, stukning och överbelastning. Kom tillbaka starkare.",
  keywords:
    "idrottsskador, träningsskador, muskelskador, rehab, löparknä, tennisarmbåge, naprapat stockholm",
  openGraph: {
    title: "Behandling av Idrottsskador | Naprapat Hanna",
    description:
      "Professionell naprapatbehandling för idrottsskador. Boka din tid idag.",
    type: "website",
  },
};

export default function IdrottsskadorPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SymptomBreadcrumbs currentPage="Idrottsskador" />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-linear-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Behandling av idrottsskador
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professionell naprapatbehandling och rehab för idrottsskador. Få
            rätt behandling för snabbare återhämtning och förebygg nya skador.
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
          >
            Boka konsultation
            <ArrowRight className="h-5 w-5" />
          </a>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vanliga symtom
            </h2>
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
              Som naprapat specialiserar jag mig på att behandla och
              rehabilitera idrottsskador. Min behandling är målinriktad och
              anpassad för att få dig tillbaka till din sport så snabbt och
              säkert som möjligt:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Noggrann bedömning och diagnostik</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Akutbehandling för att minska inflammation</span>
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
                <span>Styrke- och stabilitetsträ ning</span>
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
              Målet är inte bara att behandla skadan, utan också att göra dig
              starkare och mer motståndskraftig för att undvika framtida skador.
            </p>
          </div>

          <RelatedSymptoms currentSymptom="idrottsskador" />

          {/* CTA */}
          <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Kom tillbaka starkare
            </h3>
            <p className="text-muted-foreground mb-6">
              Boka en konsultation och få en professionell behandlings- och
              rehabplan för din idrottsskada.
            </p>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
            >
              Boka nu
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <ConsultationForm />
      <Footer />
    </main>
  );
}
