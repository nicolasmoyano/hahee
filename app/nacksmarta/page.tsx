"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation-form";
import SymptomBreadcrumbs from "@/components/symptom-breadcrumbs";
import { trackBookingClick, trackConsultationView } from "@/lib/analytics";
import RelatedSymptoms from "@/components/related-symptoms";
import { ArrowRight } from "lucide-react";

export default function NacksmartaPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SymptomBreadcrumbs currentPage="Nacksmärta" />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-linear-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Behandling av nacksmärta
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Effektiv naprapatbehandling för nacksmärta, stelhet och spänningar.
            Få hjälp med både akuta och kroniska nackbesvär.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick("symptom_nacksmarta_hero")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
            >
              Boka nu
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#consultation"
              onClick={() => trackConsultationView("symptom_nacksmarta_hero")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-foreground font-medium hover:bg-secondary transition"
            >
              Konsultation
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What is it */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vad är nacksmärta?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nacksmärta är ett vanligt problem som kan påverka din vardag på
              många sätt. Det kan vara allt från en lätt stelhet på morgonen
              till konstant smärta som strålar upp mot huvudet eller ner i
              axlarna. Nacken är särskilt utsatt eftersom den bär huvudets vikt
              och är i ständig rörelse.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vanliga orsaker är dålig arbetshållning (särskilt vid
              datorarbete), stress, whiplash-skador, felaktig sömn eller
              muskulär obalans.
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
                <span>Stelhet och begränsad rörlighet i nacken</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Smärta som strålar till axlar och armar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Huvudvärk som utgår från nacken</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Muskelspänningar och ömhet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Svårighet att vrida eller böja huvudet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Domningar eller stickningar i armar och händer</span>
              </li>
            </ul>
          </div>

          {/* Treatment */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Hur kan naprapati hjälpa?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Naprapatbehandling är mycket effektiv för nacksmärta. Jag arbetar
              med hela axel-nack-regionen för att hitta och behandla
              grundorsaken till dina besvär. Min behandling inkluderar:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Mjukdelsbehandling för att släppa spända muskler</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Ledmobilisering och manipulation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Träningsprogram för att stärka nacken</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Ergonomisk rådgivning för arbete och vardag</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Stresshantering och avslappningstekniker</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Behandlingen är skonsam och anpassas efter dina individuella behov
              och smärtnivå.
            </p>
          </div>

          <RelatedSymptoms currentSymptom="nacksmarta" />

          {/* CTA */}
          <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Få lindring från nacksmärtan
            </h3>
            <p className="text-muted-foreground mb-6">
              Boka en konsultation och få en individuellt anpassad behandling
              för dina nackbesvär.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick("symptom_nacksmarta_cta")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
              >
                Boka nu
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#consultation"
                onClick={() => trackConsultationView("symptom_nacksmarta_cta")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-foreground font-medium hover:bg-secondary transition"
              >
                Konsultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ConsultationForm />
      <Footer />
    </main>
  );
}
