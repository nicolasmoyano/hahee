"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [showSymptomMenu, setShowSymptomMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSymptomOpen, setMobileSymptomOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <a
              href="/"
              className="font-bold text-2xl text-foreground hover:opacity-80 transition"
            >
              Hanna Magnusson
            </a>
            <p>Leg. Naprapat</p>
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
            <a
              href="/symptomer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition"
            >
              Symptomer
              <ChevronDown className="h-4 w-4" />
            </a>
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
            Om mig
          </a>
          <a
            href="/#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Kontakt
          </a>
          <a
            href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
          >
            Boka nu
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <a
              href="/#services"
              className="text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tjänster
            </a>

            {/* Mobile Symptomer Dropdown */}
            <a
              href="/symptomer"
              className="text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Symptomer
            </a>
            <div>
              <button
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition w-full ml-4"
                onClick={() => setMobileSymptomOpen(!mobileSymptomOpen)}
              >
                Alla symptomer
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileSymptomOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSymptomOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <a
                    href="/ryggsmarta"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ryggsmärta
                  </a>
                  <a
                    href="/nacksmarta"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Nacksmärta
                  </a>
                  <a
                    href="/ischias"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ischias
                  </a>
                  <a
                    href="/huvudvark"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Huvudvärk
                  </a>
                  <a
                    href="/idrottsskador"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Idrottsskador
                  </a>
                </div>
              )}
            </div>

            <a
              href="/#about"
              className="text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Om mig
            </a>
            <a
              href="/#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </a>
            <a
              href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Boka nu
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
