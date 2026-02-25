"use client";

import { useLeadForm } from "./LeadFormProvider";

type LeadFormTriggerProps = {
  label: string;
  source?: string;
  className?: string;
};

export default function LeadFormTrigger({
  label,
  source,
  className
}: LeadFormTriggerProps) {
  const { openLeadForm } = useLeadForm();

  return (
    <button
      type="button"
      className={className}
      onClick={() => openLeadForm(source || label)}
    >
      {label}
    </button>
  );
}
