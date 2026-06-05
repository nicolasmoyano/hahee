import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation-form";
import SymptomBreadcrumbs from "@/components/symptom-breadcrumbs";
import RelatedSymptoms from "@/components/related-symptoms";
import SymptomTracker from "@/components/symptom-tracker";
import SymptomCTAButtons from "@/components/symptom-cta-buttons";

export const metadata: Metadata = {
  title: "Ischias – Behandling av Nervsmärta i Stockholm | Naprapat Hanna",
  description:
    "Naprapatbehandling för ischias och strålande nervsmärta i benet. Hitta grundorsaken och få lindring i Stockholm. Boka tid hos legitimerad naprapat.",
  alternates: { canonical: "/ischias" },
  openGraph: {
    title: "Ischias – Behandling av Nervsmärta i Stockholm | Naprapat Hanna",
    description:
      "Naprapatbehandling för ischias och strålande nervsmärta i benet. Hitta grundorsaken och få lindring.",
    url: "https://naprapat-hanna.se/ischias",
    type: "website",
  },
};

export default function IschiasPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SymptomTracker symptom="Ischias" />
      <SymptomBreadcrumbs currentPage="Ischias" />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-linear-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Behandling av Ischias
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Effektiv naprapatbehandling för ischias och strålande smärta i ben.
            Få lindring och återfå din rörlighet.
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
              Ischias är ett tillstånd där ischiasnerven, kroppens längsta nerv,
              blir irriterad eller klämd. Nerven går från nedre ryggen genom
              sätet och ner i benet. När den blir påverkad kan du känna smärta,
              domningar eller stickningar som strålar från ländryggen ner genom
              benet, ofta hela vägen till foten.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vanliga orsaker är diskbråck, förträngning av ryggmärgskanalen,
              muskelspänningar (särskilt piriformis-muskeln), inflammation eller
              felställda ryggkotor.
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
              Naprapatbehandling kan vara mycket effektiv för ischias. Jag
              arbetar med att identifiera och behandla grundorsaken till
              nervpåverkan. Min behandling fokuserar på:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Minska tryck på ischiasnerven</span>
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
                <span>Minska inflammation och smärta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Ge dig övningar för att förebygga återfall</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Behandlingen är skonsam och progressiv, anpassad efter dina symtom
              och smärtnivå. Många patienter upplever lindring redan efter
              första behandlingen.
            </p>
          </div>

          <RelatedSymptoms currentSymptom="ischias" />

          {/* CTA */}
          <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Slipp Ischiassmärtan
            </h3>
            <p className="text-muted-foreground mb-6">
              Boka en konsultation idag och få en behandlingsplan som passar
              just dina behov.
            </p>
            <SymptomCTAButtons source="symptom_ischias_cta" />
          </div>
        </div>
      </section>

      <ConsultationForm />
      <Footer />
    </main>
  );
}
