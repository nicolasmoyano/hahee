export default function Services() {
  const services = [
    {
      title: "Smärtlindring & behandling",
      description:
        "Jag behandlar både akuta och långvariga smärttillstånd som påverkar din vardag. Mitt mål är att minska smärta, förbättra rörlighet och ge dig bättre funktion i muskler, leder och nervsystem.",
      icon: "🎯",
    },
    {
      title: "Hållning & Justering",
      description:
        "Jag analyserar din hållning och rörelsemönster för att hitta orsakerna bakom stelhet, belastning eller återkommande smärta. Tillsammans jobbar vi för att skapa balans i kroppen – oavsett din ålder eller aktivitetsnivå.",
      icon: "⚖️",
    },
    {
      title: "Skaderehabilitering",
      description:
        "Jag erbjuder individanpassad rehab för allt från vardagsskador och överbelastningar till idrottsrelaterade problem. Du får en tydlig plan med övningar och behandlingar som hjälper dig tillbaka till ett fungerande liv.",
      icon: "⚡",
    },
    {
      title: "Förebyggande Vård",
      description:
        "Du kan också komma för att arbeta förebyggande. Jag hjälper dig att bygga en starkare och mer hållbar kropp, oavsett mål – från promenader med mindre besvär till trygg träning.",
      icon: "🛡️",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-20 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mina Tjänster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Naprapatbehandling för dig som vill må bättre i kroppen, få mindre
            smärta och förbättra din rörelseförmåga – oavsett om du är yngre,
            äldre, aktiv eller bara vill få vardagen att fungera bättre.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-sm transition"
            >
              {/* <div className="text-3xl mb-3">{service.icon}</div> */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
