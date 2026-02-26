"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import LeadFormModal from "./LeadFormModal";

type LeadFormContextValue = {
  isOpen: boolean;
  source?: string;
  openLeadForm: (source?: string) => void;
  closeLeadForm: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function useLeadForm() {
  const context = useContext(LeadFormContext);
  if (!context) {
    throw new Error("useLeadForm must be used within LeadFormProvider");
  }
  return context;
}

export default function LeadFormProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>(undefined);
  const [hasCtaInteraction, setHasCtaInteraction] = useState(false);
  const [autoPromptDone, setAutoPromptDone] = useState(false);

  const openLeadForm = (nextSource?: string) => {
    setHasCtaInteraction(true);
    setSource(nextSource);
    setIsOpen(true);
  };

  const closeLeadForm = () => setIsOpen(false);

  useEffect(() => {
    if (hasCtaInteraction || autoPromptDone) return;

    const timer = window.setTimeout(() => {
      setSource("Auto Prompt");
      setIsOpen(true);
      setAutoPromptDone(true);
    }, 15000);

    return () => window.clearTimeout(timer);
  }, [hasCtaInteraction, autoPromptDone]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({ isOpen, source, openLeadForm, closeLeadForm }),
    [isOpen, source]
  );

  return (
    <LeadFormContext.Provider value={value}>
      {children}
      <LeadFormModal />
    </LeadFormContext.Provider>
  );
}
