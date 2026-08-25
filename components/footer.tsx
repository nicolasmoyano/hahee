import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">
              Naprapat Hanna Magnusson
            </h3>
            <p className="text-sm text-muted-foreground">
              Legitimerad naprapat som hjälper dig minska smärta, förbättra
              funktion och hitta långsiktiga lösningar
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#services"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Tjänster
                </Link>
              </li>
              <li>
                <Link
                  href="/symptomer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Symptomer
                </Link>
              </li>
              <li>
                <Link
                  href="/naprapat-odenplan"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Naprapat Odenplan
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Om Mig
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/#consultation"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Boka Konsultation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Behandlingar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ryggsmarta"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Ryggsmärta
                </Link>
              </li>
              <li>
                <Link
                  href="/nacksmarta"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Nacksmärta
                </Link>
              </li>
              <li>
                <Link
                  href="/ischias"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Ischias
                </Link>
              </li>
              <li>
                <Link
                  href="/huvudvark"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Huvudvärk
                </Link>
              </li>
              <li>
                <Link
                  href="/idrottsskador"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Idrottsskador
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <p className="text-sm text-muted-foreground">Stockholm, Sverige</p>
            <Link
              href="tel:+46737853876"
              className="text-sm text-muted-foreground hover:text-foreground transition block"
            >
              +46 73-785 38 76
            </Link>
            <Link
              href="mailto:hannahahee@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition block"
            >
              hannahahee@gmail.com
            </Link>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Naprapat Hanna Magnusson. Alla rättigheter
            förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
