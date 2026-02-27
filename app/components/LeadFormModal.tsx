"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useLeadForm } from "./LeadFormProvider";
import SuccessPopup from "./SuccessPopup";
import {
  hasValidationErrors,
  sanitizeLeadInput,
  validateLeadInput,
  type LeadFieldErrors
} from "@/app/lib/leadValidation";

type LeadFormValues = {
  name: string;
  email: string;
  phone: string;
  city: string;
  desiredCourse: string;
  preferredCountry: string;
  intake: string;
};

type SubmitState = "idle" | "sending" | "success" | "error";

const desiredCourseOptions = [
  "MBA",
  "MS",
  "MTech",
  "MSc",
  "Other"
];

const preferredCountryOptions = [
  "United Kingdom",
  "Canada",
  "Ireland",
  "Australia",
  "USA",
  "Germany",
  "New Zealand",
  "Other"
];

const intakeOptions = [
  "Jan 2026",
  "May 2026",
  "Sep 2026",
  "Other"
];

const initialValues: LeadFormValues = {
  name: "",
  email: "",
  phone: "",
  city: "",
  desiredCourse: "",
  preferredCountry: "",
  intake: ""
};

export default function LeadFormModal() {
  const { isOpen, closeLeadForm, source } = useLeadForm();
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [errors, setErrors] = useState<LeadFieldErrors>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setValues(initialValues);
    setStatus("idle");
    setStatusMessage("");
    setErrors({});
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLeadForm();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLeadForm]);

  const canSubmit = useMemo(() => {
    return Boolean(
      values.name &&
        values.email &&
        values.phone &&
        values.city &&
        values.desiredCourse &&
        values.preferredCountry &&
        values.intake
    );
  }, [values]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name as keyof LeadFormValues]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || status === "sending") return;

    const nextValues = sanitizeLeadInput(values);
    const validationErrors = validateLeadInput(nextValues);
    if (hasValidationErrors(validationErrors)) {
      setErrors(validationErrors);
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields.");
      return;
    }

    setErrors({});
    setStatus("sending");
    setStatusMessage("Sending your request...");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...nextValues, source })
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null) as
          | { error?: string; errors?: LeadFieldErrors }
          | null;
        if (payload?.errors) {
          setErrors(payload.errors);
        }
        throw new Error(payload?.error || "Failed to send enquiry.");
      }

      setStatus("success");
      setStatusMessage("Thanks! Our team will reach out shortly. Please check your email.");
      setValues(initialValues);
      setShowSuccessPopup(true);
      window.setTimeout(() => {
        setShowSuccessPopup(false);
        closeLeadForm();
      }, 2200);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="no-scrollbar fixed inset-0 z-[60] overflow-y-auto bg-black/70 p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeLeadForm();
        }
      }}
    >
      <div className="relative mx-auto my-auto flex w-[min(92vw,1240px)] lg:w-[min(94vw,1380px)] max-h-[min(90dvh,820px)] lg:max-h-[min(92dvh,900px)] flex-col overflow-hidden rounded-[2rem] bg-[#efefef] shadow-2xl">
        <button
          type="button"
          onClick={closeLeadForm}
          aria-label="Close form"
          className="absolute right-4 top-3 z-20 text-5xl font-light leading-none text-[#161616] hover:text-black md:right-6 md:top-4"
        >
          ×
        </button>

        <div className="no-scrollbar grid flex-1 gap-4 overflow-y-auto p-4 sm:p-5 md:grid-cols-[1fr_1.05fr] md:gap-5 md:p-6 lg:gap-8 lg:p-9">
          <div className="rounded-[1.25rem] bg-[#f8f8f8] p-5 sm:p-6 md:p-7">
            <h2
              id="lead-form-title"
              className="text-center text-xl font-semibold text-[#1a1a1a] md:text-2xl"
            >
              Start Your PG Abroad <br /> Journey Today
            </h2>
            <div className="my-5 h-px w-full bg-gray-200" />

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="lead-name" className="sr-only">
                  Name
                </label>
                <input
                  id="lead-name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Name"
                  className={`w-full rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40] ${
                    errors.name ? "ring-2 ring-red-300" : ""
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="lead-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="lead-email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="Email address"
                  className={`w-full rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40] ${
                    errors.email ? "ring-2 ring-red-300" : ""
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="lead-phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="lead-phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="Phone number"
                  className={`w-full rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40] ${
                    errors.phone ? "ring-2 ring-red-300" : ""
                  }`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="lead-city" className="sr-only">
                  City
                </label>
                <input
                  id="lead-city"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="City"
                  className={`w-full rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40] ${
                    errors.city ? "ring-2 ring-red-300" : ""
                  }`}
                />
                {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
              </div>

              <div className="relative">
                <label htmlFor="lead-desired-course" className="sr-only">
                  Desired Course
                </label>
                <select
                  id="lead-desired-course"
                  name="desiredCourse"
                  value={values.desiredCourse}
                  onChange={handleChange}
                  required
                  className={`w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-500 outline-none ${
                    errors.desiredCourse ? "ring-2 ring-red-300" : ""
                  }`}
                >
                  <option value="">Desired Course</option>
                  {desiredCourseOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                  <span className="text-xs">▼</span>
                </div>
              </div>
              {errors.desiredCourse && (
                <p className="mt-1 text-xs text-red-600">{errors.desiredCourse}</p>
              )}

              <div className="relative">
                <label htmlFor="lead-preferred-country" className="sr-only">
                  Preferred Country
                </label>
                <select
                  id="lead-preferred-country"
                  name="preferredCountry"
                  value={values.preferredCountry}
                  onChange={handleChange}
                  required
                  className={`w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-500 outline-none ${
                    errors.preferredCountry ? "ring-2 ring-red-300" : ""
                  }`}
                >
                  <option value="">Preferred Country</option>
                  {preferredCountryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                  <span className="text-xs">▼</span>
                </div>
              </div>
              {errors.preferredCountry && (
                <p className="mt-1 text-xs text-red-600">{errors.preferredCountry}</p>
              )}

              <div className="relative">
                <label htmlFor="lead-intake" className="sr-only">
                  Intake
                </label>
                <select
                  id="lead-intake"
                  name="intake"
                  value={values.intake}
                  onChange={handleChange}
                  required
                  className={`w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-500 outline-none ${
                    errors.intake ? "ring-2 ring-red-300" : ""
                  }`}
                >
                  <option value="">Intake</option>
                  {intakeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                  <span className="text-xs">▼</span>
                </div>
              </div>
              {errors.intake && (
                <p className="mt-1 text-xs text-red-600">{errors.intake}</p>
              )}

              <button
                type="submit"
                disabled={!canSubmit || status === "sending"}
                className="mt-2 w-full rounded-full bg-[#2a2a2a] py-3.5 text-base font-medium text-white transition-all hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Submitting..." : "Get Free Counselling"}
              </button>

              {statusMessage && (
                <p
                  className={`text-center text-xs font-medium ${
                    status === "error" ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>

            <div className="mt-6 flex justify-center gap-6 text-[10px] font-medium uppercase tracking-widest text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="text-orange-500">✓</span> No Hidden Charges
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-orange-500">✓</span> 100% Confidential
              </span>
            </div>
          </div>

          <div className="relative hidden md:block overflow-hidden rounded-[1.25rem] bg-[#efefef]">
            <Image
              src="/logo.png"
              alt="Skolarrs Solutions"
              width={340}
              height={170}
              className="absolute left-1/2 top-14 z-10 h-auto w-[220px] -translate-x-1/2 lg:top-14 lg:w-[220px]"
            />
            <Image
              src="/popupnew.png"
              alt="Student"
              width={780}
              height={940}
              className="absolute bottom-0 left-1/2 h-auto w-[45%] max-w-none -translate-x-1/2 object-contain lg:w-[70%]"
            />
          </div>
        </div>
      </div>
      <SuccessPopup
        open={showSuccessPopup}
        message="Your enquiry has been submitted successfully."
      />
    </div>
  );
}
