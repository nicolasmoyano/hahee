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
                  href="/priser"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Priser
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
              className="block py-1 text-sm text-muted-foreground transition hover:text-foreground"
            >
              +46 73-785 38 76
            </Link>
            <Link
              href="mailto:hannahahee@gmail.com"
              className="block py-1 text-sm text-muted-foreground transition hover:text-foreground"
            >
              hannahahee@gmail.com
            </Link>
            <div className="mt-5 border-t border-border pt-5">
              <p className="mb-3 text-sm text-muted-foreground">
                Vill du lättare hitta mina råd i Google?
              </p>
              <a
                href="https://www.google.com/preferences/source?q=naprapat-hanna.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-foreground px-4 py-2 text-center text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Välj som källa i Google
              </a>
            </div>
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
