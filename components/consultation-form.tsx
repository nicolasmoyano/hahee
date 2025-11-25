"use client";

import { useState } from "react";
import { trackConsultationSubmit } from "@/lib/analytics";

const PROBLEM_AREAS = [
  { value: "neck", label: "Nacke- och Skuldervärk" },
  { value: "back", label: "Ländryggssmärta" },
  { value: "upper_back", label: "Övre Ryggsmärta" },
  { value: "knee", label: "Knäsmärta" },
  { value: "hip", label: "Höftsmärta" },
  { value: "headache", label: "Huvudvärk & Migrän" },
  { value: "wrist", label: "Handled & Handsmärta" },
  { value: "sports_injury", label: "Sportskador" },
  { value: "general_wellness", label: "Allmän Hälsa & Förebyggande" },
  { value: "other", label: "Övriga Problem" },
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    problemAreas: [] as string[],
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "problemAreas") {
      setFormData((prev) => ({
        ...prev,
        problemAreas: prev.problemAreas.includes(value)
          ? prev.problemAreas.filter((area) => area !== value)
          : [...prev.problemAreas, value],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Misslyckades att skicka formulär");
      }

      // Track successful form submission
      trackConsultationSubmit(formData.problemAreas);

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        problemAreas: [],
        message: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Något gick fel");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation" className="w-full py-20 px-6 bg-secondary/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Boka konsultation
          </h2>
          <p className="text-lg text-muted-foreground">
            Här kan du boka en konsultation där jag gör en noggrann bedömning
            och tar fram en plan som passar just dina behov – oavsett om målet
            är att minska smärta, öka rörlighet eller stärka kroppen inför
            vardag eller träning.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-8 rounded-lg border border-border"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Förnamn *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Ditt förnamn"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Efternamn *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Ditt efternamn"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                E-postadress *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="din@email.se"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Telefonnummer *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+46 (0)XX XXX XX XX"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-4">
              Vilka områden orsakar dig smärta eller obehag? *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PROBLEM_AREAS.map((area) => (
                <label
                  key={area.value}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="problemAreas"
                    value={area.value}
                    checked={formData.problemAreas.includes(area.value)}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
                  />
                  <span className="text-sm text-foreground">{area.label}</span>
                </label>
              ))}
            </div>
            {formData.problemAreas.length === 0 && (
              <p className="text-xs text-destructive mt-2">
                Vänligen välj minst ett område
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Ytterligare Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Berätta mer om din skada, tidigare omständigheter eller dina mål..."
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {success && (
            <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
              <p className="font-medium">
                Tack! Vi kontaktar dig snart för att boka din konsultation.
              </p>
            </div>
          )}

          {error && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
              <p className="font-medium">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || formData.problemAreas.length === 0}
            className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "Skickar..." : "Boka Konsultation"}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            * Obligatoriska fält. Vi respekterar din integritet och delar aldrig
            din information.
          </p>
        </form>
      </div>
    </section>
  );
}
