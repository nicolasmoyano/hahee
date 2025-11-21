interface RelatedSymptom {
  title: string;
  url: string;
  description: string;
}

interface RelatedSymptomsProps {
  currentSymptom: string;
}

const allSymptoms: { [key: string]: RelatedSymptom } = {
  ryggsmarta: {
    title: "Ryggsmärta",
    url: "/ryggsmarta",
    description: "Behandling för rygg- och ländryggssmärta.",
  },
  nacksmarta: {
    title: "Nacksmärta",
    url: "/nacksmarta",
    description:
      "Nack- och ryggsmärta hänger ofta ihop. Behandla båda för bäst resultat.",
  },
  ischias: {
    title: "Ischias",
    url: "/ischias",
    description: "Smärta som strålar från ryggen ner i benen kan vara ischias.",
  },
  huvudvark: {
    title: "Huvudvärk",
    url: "/huvudvark",
    description: "Rygg- och nackspänningar kan orsaka huvudvärk och migrän.",
  },
  idrottsskador: {
    title: "Idrottsskador",
    url: "/idrottsskador",
    description:
      "Skador från träning och idrott behöver professionell behandling.",
  },
};

export default function RelatedSymptoms({
  currentSymptom,
}: RelatedSymptomsProps) {
  const relatedSymptoms = Object.entries(allSymptoms)
    .filter(([key]) => key !== currentSymptom)
    .map(([, symptom]) => symptom)
    .slice(0, 4);

  return (
    <div className="border-t pt-12">
      <h3 className="text-2xl font-bold text-foreground mb-6">
        Relaterade besvär
      </h3>
      <p className="text-muted-foreground mb-6">
        Många besvär hänger ihop. Läs mer om hur vi behandlar andra symptom:
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedSymptoms.map((symptom) => (
          <a
            key={symptom.url}
            href={symptom.url}
            className="p-4 border border-border rounded-lg hover:border-primary hover:bg-secondary/50 transition"
          >
            <h4 className="font-semibold text-foreground mb-2">
              {symptom.title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {symptom.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
