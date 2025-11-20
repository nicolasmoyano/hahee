import Header from "@/components/header";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation-form";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Behandling av Huvudvärk & Spänningar | Naprapat Hanna",
  description:
    "Professionell naprapatbehandling för huvudvärk, migrän och spänningshuvudvärk. Få lindring från kronisk huvudvärk. Boka din behandling idag.",
};

export default function HuvudvarkPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

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
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vanliga symtom
            </h2>
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

          {/* CTA */}
          <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Slipp huvudvärken
            </h3>
            <p className="text-muted-foreground mb-6">
              Boka en konsultation och få hjälp att hitta orsaken till din
              huvudvärk och en behandling som fungerar för dig.
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
