"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useAirtableImages, getBestImageUrl } from "@/lib/airtable-images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutContact() {
  // Fetch profile image from Airtable using specific record ID
  const { images, loading } = useAirtableImages({
    recordId: "rec6YTEsJtXpjeLcT",
  });

  const profileImage = images[0];

  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      });
    }, observerOptions);

    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setContactVisible(true);
        }
      });
    }, observerOptions);

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }

    return () => {
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current);
      }
      if (contactRef.current) {
        contactObserver.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* About Section */}
      <section id="about" className="pt-14 md:pt-24 pb-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div
            ref={aboutRef}
            className={`grid md:grid-cols-2 gap-12 items-right transition-all duration-1000 ${
              aboutVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            {/* Profile Image - Left */}
            <div className="relative w-4/5 aspect-square overflow-hidden rounded-lg shadow-lg mx-auto md:mx-0">
              {profileImage && !loading && (
                <Image
                  src={getBestImageUrl(profileImage, "full")}
                  alt={profileImage.altText || "Naprapatstudent"}
                  width={1200}
                  height={1200}
                  className="object-cover object-top w-full h-full"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              )}
            </div>

            {/* About Info - Right */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Hanna Magnusson
              </h2>
              <h3>Leg. Naprapat</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Jag är legitimerad naprapat sedan 2018 och arbetar för att
                  hjälpa dig till en mer rörlig, stark och smärtfri vardag. Min
                  bakgrund inom dans, yoga och styrketräning har gett mig en
                  djup förståelse för hur kroppen rör sig och vad som händer när
                  något inte fungerar som det ska.
                </p>
                <p>
                  I mitt arbete fokuserar jag på att hitta den verkliga orsaken
                  bakom dina besvär. Jag kombinerar manuell behandling med
                  individanpassade råd kring träning, hållning och återhämtning
                  för att ge dig långsiktiga resultat, inte bara tillfällig
                  lindring.
                </p>
                <p>
                  Oavsett om du kommer med akuta problem, långvarig smärta eller
                  vill förebygga framtida besvär möter jag dig alltid där du är.
                  Mitt mål är att hjälpa dig bygga en kropp som håller, på
                  jobbet, i träningen och i vardagen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hitta Mig Section */}
      <section id="contact" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div
            ref={contactRef}
            className={`transition-all duration-1000 ${
              contactVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Kontakt
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Besöksadress
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Exempelgatan 123
                    <br />
                    123 45 Stockholm
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Telefon
                  </h3>
                  <a
                    href="tel:+46701234567"
                    className="text-muted-foreground text-sm hover:text-primary transition"
                  >
                    070-123 45 67
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">E-post</h3>
                  <a
                    href="mailto:info@naprapathanna.se"
                    className="text-muted-foreground text-sm hover:text-primary transition"
                  >
                    info@naprapathanna.se
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Öppettider
                  </h3>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Mån-Fre: 08:00-18:00</p>
                    <p>Lör: 09:00-14:00</p>
                    <p>Sön: Stängt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
