export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="font-bold text-2xl text-foreground">
              Naprapat Hanna
            </h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Tjänster
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Kontakt
          </a>
          <a
            href="#consultation"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
          >
            Boka Nu
          </a>
        </nav>
      </div>
    </header>
  );
}
