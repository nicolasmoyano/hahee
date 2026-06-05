"use client";

import { ArrowRight } from "lucide-react";
import { trackBookingClick, trackConsultationView } from "@/lib/analytics";

export default function SymptomCTAButtons({ source }: { source: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://ww1.clinicbuddy.com/onlinebooking/-3366"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackBookingClick(source)}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
      >
        Boka nu
        <ArrowRight className="h-5 w-5" />
      </a>
      <a
        href="#consultation"
        onClick={() => trackConsultationView(source)}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-foreground font-medium hover:bg-secondary transition"
      >
        Konsultation
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}
