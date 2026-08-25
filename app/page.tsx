import type { Metadata } from "next";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import SymptomsPreview from "@/components/symptoms-preview";
import AboutContact from "@/components/about-contact";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Naprapat Hanna Magnusson i Stockholm | Smärtlindring & Behandling",
    description:
      "Jag är legitimerad naprapat sedan 2018 och hjälper dig med smärtlindring, behandling och rehab på Västmannagatan 40 i Stockholm.",
    url: "https://naprapat-hanna.se",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Services />
      <SymptomsPreview />
      <AboutContact />
      <Footer />
    </main>
  );
}
