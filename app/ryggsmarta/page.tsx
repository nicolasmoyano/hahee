"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation-form";
import {
  trackBookingClick,
  trackConsultationView,
  trackSymptomView,
} from "@/lib/analytics";
import { ArrowRight } from "lucide-react";

export default function RyggsmartaPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      {/* Breadcrumbs for SEO */}
      <div className="bg-secondary/30 px-6 py-3">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition">
              Hem
            </a>
            <span>/</span>
            <a href="/#services" className="hover:text-foreground transition">
              Symptomer
            </a>
            <span>/</span>
            <span className="text-foreground">Ryggsmärta</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-linear-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Behandling av ryggsmärta
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Naprapatbehandling för att lindra och förebygga ryggsmärta. Få
            tillbaka din rörlighet och minska smärtan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick("symptom_ryggsmarta_hero")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
            >
              Boka nu
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#consultation"
              onClick={() => trackConsultationView("symptom_ryggsmarta_hero")}
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
              Vanliga orsaker till ryggsmärta inkluderar spända muskler,
              felställda ryggkotor, diskbråck, stress och ensidig belastning
              från arbete eller träning.
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
              Som naprapat arbetar jag med att hitta grundorsaken till din
              ryggsmärta. Genom manuella behandlingstekniker som manipulation,
              mobilisering och mjukdelsbehandling kan jag:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Minska smärta och inflammation</span>
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
                <span>Ge dig verktyg för att förebygga återfall</span>
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
              Relaterade Besvär
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
                  Nack- och ryggsmärta hänger ofta ihop. Behandla båda för bäst
                  resultat.
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
                  Ryggspänningar kan orsaka huvudvärk och migrän.
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

          {/* CTA */}
          <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Redo att bli av med ryggsmärtan?
            </h3>
            <p className="text-muted-foreground mb-6">
              Boka en konsultation idag och ta första steget mot en smärtfri
              vardag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick("symptom_ryggsmarta_cta")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
              >
                Boka nu
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#consultation"
                onClick={() => trackConsultationView("symptom_ryggsmarta_cta")}
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
