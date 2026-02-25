"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useLeadForm } from "./LeadFormProvider";

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

  useEffect(() => {
    if (!isOpen) return;
    setValues(initialValues);
    setStatus("idle");
    setStatusMessage("");
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
    return Boolean(values.name && values.email && values.phone);
  }, [values]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || status === "sending") return;

    setStatus("sending");
    setStatusMessage("Sending your request...");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...values, source })
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Failed to send enquiry.");
      }

      setStatus("success");
      setStatusMessage("Thanks! Our team will reach out shortly.");
      setValues(initialValues);
      window.setTimeout(() => closeLeadForm(), 1600);
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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeLeadForm();
        }
      }}
    >
      <div className="relative w-full max-w-5xl rounded-[2rem] bg-white p-5 shadow-2xl md:p-8">
        <button
          type="button"
          onClick={closeLeadForm}
          aria-label="Close form"
          className="absolute right-5 top-5 text-2xl text-gray-700 hover:text-black"
        >
          ×
        </button>

        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <div className="rounded-[1.75rem] bg-[#fbfbfb] p-6 md:p-8">
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
                  className="w-full rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40]"
                />
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
                  className="w-full rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40]"
                />
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
                  className="w-full rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40]"
                />
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
                  type="text"
                  placeholder="City"
                  className="w-full rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40]"
                />
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
                  className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-500 outline-none"
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

              <div className="relative">
                <label htmlFor="lead-preferred-country" className="sr-only">
                  Preferred Country
                </label>
                <select
                  id="lead-preferred-country"
                  name="preferredCountry"
                  value={values.preferredCountry}
                  onChange={handleChange}
                  className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-500 outline-none"
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

              <div className="relative">
                <label htmlFor="lead-intake" className="sr-only">
                  Intake
                </label>
                <select
                  id="lead-intake"
                  name="intake"
                  value={values.intake}
                  onChange={handleChange}
                  className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-500 outline-none"
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

          <div className="hidden md:flex flex-col items-center justify-center gap-6 px-4 py-4 text-center">
            <Image
              src="/logo.png"
              alt="Skolarrs Solutions"
              width={200}
              height={90}
              className="h-auto w-48 md:w-52"
            />
            <Image
              src="/popup.png"
              alt="Student"
              width={640}
              height={820}
              className="h-auto w-full max-w-[320px] md:max-w-[400px] lg:max-w-[460px]"
            />
            <p className="text-sm font-medium text-gray-600">
              Learn Beyond Boundaries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
