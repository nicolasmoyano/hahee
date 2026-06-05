import Link from "next/link";
import { ArrowRight } from "lucide-react";

const symptoms = [
  {
    title: "Ryggsmärta",
    href: "/ryggsmarta",
    description:
      "Behandling av ländryggssmärta, diskbråck och muskulära spänningar. Både akut och kronisk ryggsmärta.",
  },
  {
    title: "Nacksmärta",
    href: "/nacksmarta",
    description:
      "Lindring av nackspänningar, whiplash och stelhet i nacke och skuldror.",
  },
  {
    title: "Ischias",
    href: "/ischias",
    description:
      "Behandling av ischiassmärta som strålar från ryggen ner i benet.",
  },
  {
    title: "Huvudvärk & spänningar",
    href: "/huvudvark",
    description:
      "Behandling av spänningshuvudvärk och migrän orsakad av nackspänningar.",
  },
  {
    title: "Idrottsskador",
    href: "/idrottsskador",
    description:
      "Rehab och behandling av träningsskador, muskelskador och överbelastning.",
  },
];

export default function SymptomsPreview() {
  return (
    <section className="w-full py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vanliga besvär vi behandlar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Naprapati hjälper vid ett brett spektrum av muskuloskeletala besvär.
            Klicka på ett område för att läsa mer om behandlingen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {symptoms.map((symptom) => (
            <Link
              key={symptom.href}
              href={symptom.href}
              className="group flex items-start justify-between gap-4 p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-sm transition-all duration-200"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {symptom.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {symptom.description}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/symptomer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Se alla symptom och behandlingar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
