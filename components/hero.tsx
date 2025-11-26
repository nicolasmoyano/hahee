"use client";

import { trackBookingClick, trackConsultationView } from "@/lib/analytics";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full py-24 md:py-40 px-6 bg-linear-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Naprapati för mindre smärta, bättre rörelse och starkare vardag
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Jag hjälper dig som upplever smärta, stelhet eller begränsad
                rörlighet – oavsett om det handlar om vardagsbesvär,
                stressrelaterade problem, arbetsrelaterad belastning eller
                träningsskador. Mitt fokus är att förbättra din funktion och ge
                dig en kropp som håller, länge.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick("hero_home")}
                className="px-6 pt-3.5 pb-3.5 max-[500px]:pb-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition text-center"
              >
                Boka nu
              </a>
              <a
                href="#consultation"
                onClick={() => trackConsultationView("hero_home")}
                className="px-6 py-3 rounded-lg font-medium border-2 border-primary text-green-900 hover:bg-secondary transition text-center"
              >
                Konsultation
              </a>
            </div>
          </div>
          <div className="relative block">
            <Image
              src="/hero-image.png"
              alt="Professionell naprapatbehandling"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
