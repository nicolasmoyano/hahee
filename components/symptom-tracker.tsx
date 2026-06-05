"use client";

import { useEffect } from "react";
import { trackSymptomView } from "@/lib/analytics";

export default function SymptomTracker({ symptom }: { symptom: string }) {
  useEffect(() => {
    trackSymptomView(symptom);
  }, [symptom]);
  return null;
}
