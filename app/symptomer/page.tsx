import Header from "@/components/header";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation-form";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Symptom & Behandlingar | Naprapat Hanna Stockholm",
  description:
    "Naprapatbehandling för ryggsmärta, nacksmärta, ischias, huvudvärk och idrottsskador i Stockholm. Upptäck hur naprapati kan hjälpa dig med dina besvär.",
  keywords:
    "naprapati, naprapat stockholm, ryggsmärta, nacksmärta, ischias, huvudvärk, idrottsskador, behandling",
  openGraph: {
    title: "Symptom & Behandlingar | Naprapat Hanna",
    description:
      "Professionell naprapatbehandling för olika symptom och besvär i Stockholm.",
    type: "website",
  },
};

const symptoms = [
  {
    title: "Ryggsmärta",
    slug: "ryggsmarta",
    description:
      "Behandling av ländryggssmärta, diskbråck och muskulära spänningar i ryggen. Naprapatbehandling kan effektivt lindra akut och kronisk ryggsmärta.",
    keywords: ["Ländryggssmärta", "Diskbråck", "Muskelspänningar", "Stelhet"],
  },
  {
    title: "Nacksmärta",
    slug: "nacksmarta",
    description:
      "Lindring av nackspänningar, whiplash och stelhet i nacke och skuldror. Effektiv behandling för både akuta och kroniska nackbesvär.",
    keywords: [
      "Nackspänningar",
      "Whiplash",
      "Stelhet",
      "Huvudvärk från nacken",
    ],
  },
  {
    title: "Ischias",
    slug: "ischias",
    description:
      "Behandling av ischiassmärta som strålar från ryggen ner i benet. Naprapati kan hjälpa till att lindra nervsmärta och förbättra rörligheten.",
    keywords: ["Ischiassmärta", "Nervsmärta", "Diskbråck", "Smärta i benet"],
  },
  {
    title: "Huvudvärk & spänningar",
    slug: "huvudvark",
    description:
      "Behandling av spänningshuvudvärk, migrän och huvudvärk orsakad av nackspänningar. Manuell behandling kan ge långvarig lindring.",
    keywords: ["Spänningshuvudvärk", "Migrän", "TMJ", "Käkledsbesvär"],
  },
  {
    title: "Idrottsskador",
    slug: "idrottsskador",
    description:
      "Rehab och behandling av träningsskador, muskelskador och överbelastning. Få hjälp att återhämta dig och förebygga framtida skador.",
    keywords: ["Träningsskador", "Muskelskador", "Löparknä", "Tennisarmbåge"],
  },
];

export default function SymptomerPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-secondary/30 py-3 px-4">
        <div className="container mx-auto">
          <nav className="text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Hem
            </Link>
            <span className="mx-2 text-muted-foreground/50">/</span>
            <span className="text-foreground">Symptomer</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-secondary/50 to-background pt-20 pb-10 sm:pb-5 md:pb-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Symptom & besvär vi behandlar
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Som naprapat behandlar jag ett brett spektrum av muskuloskeletala
              besvär. Här hittar du information om vanliga symptom och hur
              naprapatbehandling kan hjälpa dig att må bättre.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {symptoms.map((symptom) => (
                <Link
                  key={symptom.slug}
                  href={`/${symptom.slug}`}
                  className="group bg-secondary/30 rounded-lg p-8 hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {symptom.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {symptom.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                      Vanliga symptom:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {symptom.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="text-xs bg-primary/10 text-foreground px-3 py-1 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Läs mer om {symptom.title.toLowerCase()}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Naprapathy Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Hur kan naprapati hjälpa?
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Naprapati är en manuell behandlingsmetod som fokuserar på att
                behandla smärta och funktionsnedsättningar i rörelseapparaten.
                Genom att kombinera olika tekniker kan jag hjälpa dig att:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Lindra smärta</strong> - Både akut och kronisk
                    smärta i muskler och leder
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Förbättra rörlighet</strong> - Öka flexibiliteten
                    och funktionen i leder och muskler
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Förebygga skador</strong> - Identifiera och åtgärda
                    riskfaktorer innan de blir problem
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Accelerera återhämtning</strong> - Efter skada eller
                    operation
                  </span>
                </li>
              </ul>
              <p>
                Varje behandling anpassas efter dina individuella behov och mål.
                Under första besöket gör jag en noggrann undersökning för att
                hitta grundorsaken till dina besvär och skapa en behandlingsplan
                som passar just dig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/50 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Redo att Må Bättre?
              </h2>
              <p className="text-muted-foreground mb-8">
                Boka din första konsultation idag. Vi skapar en behandlingsplan
                som är anpassad efter dina behov.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Boka nu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#consultation"
                  className="inline-flex items-center border-2 border-primary text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Konsultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation">
        <ConsultationForm />
      </section>

      <Footer />
    </main>
  );
}
