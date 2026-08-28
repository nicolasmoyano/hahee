"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { trackBookingClick } from "@/lib/analytics";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSymptomOpen, setMobileSymptomOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <Link
              href="/"
              className="font-bold text-2xl text-foreground hover:opacity-80 transition"
            >
              Hanna Magnusson
            </Link>
            <p>Leg. Naprapat</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#services"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Tjänster
          </Link>

          {/* Symptomer Dropdown */}
          <div className="relative group">
            <Link
              href="/symptomer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition"
            >
              Symptomer
              <ChevronDown className="h-4 w-4" />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/ryggsmarta"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              >
                Ryggsmärta
              </Link>
              <Link
                href="/nacksmarta"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              >
                Nacksmärta
              </Link>
              <Link
                href="/ischias"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              >
                Ischias
              </Link>
              <Link
                href="/huvudvark"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              >
                Huvudvärk
              </Link>
              <Link
                href="/idrottsskador"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              >
                Idrottsskador
              </Link>
            </div>
          </div>

          <Link
            href="/naprapat-odenplan"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Odenplan
          </Link>

          <Link
            href="/priser"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Priser
          </Link>

          <Link
            href="/#about"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Om mig
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Kontakt
          </Link>
          <Link
            href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingClick("header_desktop")}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
          >
            Boka nu
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
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
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-border bg-background"
        >
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/#services"
              className="text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tjänster
            </Link>

            {/* Mobile Symptomer Dropdown */}
            <Link
              href="/symptomer"
              className="text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Symptomer
            </Link>
            <div>
              <button
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition w-full ml-4"
                onClick={() => setMobileSymptomOpen(!mobileSymptomOpen)}
                aria-expanded={mobileSymptomOpen}
                aria-controls="mobile-symptom-links"
              >
                Alla symptomer
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileSymptomOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSymptomOpen && (
                <div
                  id="mobile-symptom-links"
                  className="ml-4 mt-2 flex flex-col gap-2"
                >
                  <Link
                    href="/ryggsmarta"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ryggsmärta
                  </Link>
                  <Link
                    href="/nacksmarta"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Nacksmärta
                  </Link>
                  <Link
                    href="/ischias"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ischias
                  </Link>
                  <Link
                    href="/huvudvark"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Huvudvärk
                  </Link>
                  <Link
                    href="/idrottsskador"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Idrottsskador
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/naprapat-odenplan"
              className="text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Naprapat Odenplan
            </Link>

            <Link
              href="/priser"
              className="text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Priser
            </Link>

            <Link
              href="/#about"
              className="text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Om mig
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            <Link
              href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition text-center"
              onClick={() => {
                trackBookingClick("header_mobile");
                setMobileMenuOpen(false);
              }}
            >
              Boka nu
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
