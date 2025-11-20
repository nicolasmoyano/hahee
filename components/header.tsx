"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [showSymptomMenu, setShowSymptomMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <a
              href="/"
              className="font-bold text-2xl text-foreground hover:opacity-80 transition"
            >
              Naprapat Hanna
            </a>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#services"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Tjänster
          </a>

          {/* Symptomer Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition">
              Symptomer
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <a
                href="/ryggsmarta"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              >
                Ryggsmärta
              </a>
              <a
                href="/nacksmarta"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              >
                Nacksmärta
              </a>
              <a
                href="/ischias"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              >
                Ischias
              </a>
              <a
                href="/huvudvark"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              >
                Huvudvärk
              </a>
              <a
                href="/idrottsskador"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              >
                Idrottsskador
              </a>
            </div>
          </div>

          <a
            href="/#about"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Om Mig & Kontakt
          </a>
          <a
            href="/#consultation"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
          >
            Boka Nu
          </a>
        </nav>
      </div>
    </header>
  );
}
