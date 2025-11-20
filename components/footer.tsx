export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Naprapat Hanna Magnusson</h3>
            <p className="text-sm text-muted-foreground">
              Professionell naprapatservice dedikerad till din hälsa och smärtlindring.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition">
                  Tjänster
                </a>
              </li>
              <li>
                <a href="#consultation" className="text-muted-foreground hover:text-foreground transition">
                  Boka Konsultation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <p className="text-sm text-muted-foreground">Stockholm, Sverige</p>
            <p className="text-sm text-muted-foreground">+46 (0)8 XXX XX XX</p>
            <p className="text-sm text-muted-foreground">hanna@naprapath.se</p>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Naprapat Hanna Magnusson. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  )
}
