"use client";

import { useAirtableImages, getBestImageUrl } from "@/lib/airtable-images";
import Image from "next/image";

export default function Hero() {
  // Fetch specific hero image by Airtable recordId
  const { images, loading, error } = useAirtableImages({
    recordId: "rec9R08imqJdTuY9g",
  });

  // Get the first image or fallback
  const heroImage = images[0];
  const fallbackImageSrc =
    "/naprapat-therapist-performing-wellness-treatment.jpg";

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
                href="#consultation"
                className="px-6 pt-3.5 pb-3.5 max-[500px]:pb-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition text-center"
              >
                Boka Konsultation
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-lg font-medium border-2 border-primary text-green-900 hover:bg-secondary transition text-center"
              >
                Läs Mer
              </a>
            </div>
          </div>
          <div className="relative block" suppressHydrationWarning>
            {loading ? (
              <div className="rounded-lg bg-secondary animate-pulse h-[400px] w-full shadow-lg flex items-center justify-center">
                <p className="text-muted-foreground">Loading image...</p>
              </div>
            ) : error ? (
              <div className="rounded-lg bg-destructive/10 border border-destructive/20 h-[400px] w-full shadow-lg flex items-center justify-center">
                <p className="text-destructive text-sm text-center px-4">
                  Failed to load image from Airtable.
                  <br />
                  Using fallback image.
                </p>
              </div>
            ) : heroImage ? (
              <Image
                src={getBestImageUrl(heroImage, "full")}
                alt={heroImage.altText || "Professionell naprapatbehandling"}
                width={1200}
                height={800}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                priority
                sizes="(max-width: 500px) 100vw, (max-width: 768px) 0px, (max-width: 1200px) 50vw, 600px"
              />
            ) : (
              <Image
                src={fallbackImageSrc}
                alt="Professionell naprapatbehandling"
                width={1200}
                height={800}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
