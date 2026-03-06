"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import SuccessPopup from "./SuccessPopup";
import {
  hasValidationErrors,
  sanitizeLeadInput,
  validateLeadInput,
  type LeadFieldErrors
} from "@/app/lib/leadValidation";
import {
  domesticDesiredCourseOptions,
  getDomesticCollegeOptions
} from "@/app/lib/domesticCourses";
import { domesticPreferredCityOptions } from "@/app/lib/leadFormOptions";

type DomesticFormValues = {
  name: string;
  email: string;
  phone: string;
  city: string;
  preferredCity: string;
  college: string;
  desiredCourse: string;
};

type SubmitState = "idle" | "sending" | "success" | "error";

const initialValues: DomesticFormValues = {
  name: "",
  email: "",
  phone: "",
  city: "",
  preferredCity: "",
  college: "",
  desiredCourse: ""
};

export default function DomesticHeroSection() {
  const [values, setValues] = useState<DomesticFormValues>(initialValues);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<LeadFieldErrors>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const canSubmit = useMemo(() => {
    return Boolean(
      values.name &&
      values.email &&
      values.phone &&
      values.city &&
      values.preferredCity &&
      values.college &&
      values.desiredCourse
    );
  }, [values]);

  const collegeOptions = useMemo(
    () => getDomesticCollegeOptions(values.preferredCity),
    [values.preferredCity]
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => {
      if (name === "preferredCity") {
        const nextCollegeOptions = getDomesticCollegeOptions(value);
        return {
          ...prev,
          preferredCity: value,
          college: nextCollegeOptions.includes(prev.college) ? prev.college : ""
        };
      }
      return { ...prev, [name]: value };
    });
    setErrors((prev) => ({ ...prev, [name as keyof DomesticFormValues]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || status === "sending") return;

    const nextValues = sanitizeLeadInput({
      ...values,
      studyMode: "domestic",
      preferredCountry: "",
      intake: ""
    });
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
        body: JSON.stringify({
          ...nextValues,
          source: "Domestic Hero Form"
        })
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
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
      window.setTimeout(() => setShowSuccessPopup(false), 2400);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="home"
      className="relative flex w-full items-center overflow-hidden bg-[#e8e8e8] py-12 lg:min-h-[800px]"
    >
      <div className="absolute inset-0 z-0  ">
        <div className="hidden md:block">
          <Image
            src="/Hero_Domestic-2.png"
            alt="Graduate background"
            fill
            priority
            className="object-cover object-left lg:object-center"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/Hero_Domestic_Mob.png"
            alt="Graduate background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="order-1 mt-8 flex flex-col items-center text-center md:mt-0 md:items-start md:text-left lg:order-none lg:col-span-7">
            <div className="flex flex-col items-center gap-6 md:items-start lg:gap-6">

              <div className="flex max-w-xl flex-col items-center justify-start gap-4 pt-4 md:pt-0 lg:flex-row lg:items-center">
                <div className="hidden shrink-0 md:block">
                  <Image
                    src="/celebration.png"
                    alt="25+ Years Excellence"
                    width={100}
                    height={100}
                    className="w-24 lg:w-32"
                  />
                </div>
                <h1 className="text-4xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Build Your Career with Top Domestic PG Programs
                </h1>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <div className="flex -space-x-2">
                <Image
                  src="/avatars-group.png"
                  alt="Students"
                  width={100}
                  height={40}
                  className="h-9 w-auto"
                />
              </div>
              <p className="text-sm font-medium text-white  sm:text-base">
                Trusted by <span className="font-medium text-white ">20.5K+ Students</span>
              </p>
              <a
                href="#success"
                className="text-sm font-medium text-[#b38b40] underline decoration-2 underline-offset-4"
              >
                Read Reviews
              </a>
            </div>
          </div>

          <div className="order-2 flex items-center justify-center lg:order-none lg:col-span-5 lg:justify-end">
            <aside className="w-full max-w-md rounded-[2.5rem] bg-white p-6 shadow-2xl lg:p-8">
              <h2 className="mb-6 text-center text-xl font-medium text-[#1a1a1a] sm:text-2xl">
                Start Your PG <br /> Journey Today
              </h2>

              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="domestic-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="domestic-name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="Name"
                    className={`w-full rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40] ${errors.name ? "ring-2 ring-red-300" : ""
                      }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="domestic-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="domestic-email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    type="email"
                    placeholder="Email address"
                    className={`w-full rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40] ${errors.email ? "ring-2 ring-red-300" : ""
                      }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="domestic-phone" className="sr-only">
                    Phone number
                  </label>
                  <input
                    id="domestic-phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    placeholder="Phone number"
                    className={`w-full rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40] ${errors.phone ? "ring-2 ring-red-300" : ""
                      }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="domestic-city" className="sr-only">
                    City
                  </label>
                  <input
                    id="domestic-city"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="City"
                    className={`w-full rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40] ${errors.city ? "ring-2 ring-red-300" : ""
                      }`}
                  />
                  {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
                </div>
                <div className="relative">
                  <label htmlFor="domestic-preferred-city" className="sr-only">
                    Preferred City
                  </label>
                  <select
                    id="domestic-preferred-city"
                    name="preferredCity"
                    value={values.preferredCity}
                    onChange={handleChange}
                    required
                    className={`w-full cursor-pointer appearance-none rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-500 outline-none ${
                      errors.preferredCity ? "ring-2 ring-red-300" : ""
                    }`}
                  >
                    <option value="">Preferred City</option>
                    {domesticPreferredCityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <span className="text-xs">▼</span>
                  </div>
                </div>
                {errors.preferredCity && (
                  <p className="mt-1 text-xs text-red-600">{errors.preferredCity}</p>
                )}

                <div className="relative">
                  <label htmlFor="domestic-college" className="sr-only">
                    College/University
                  </label>
                  <select
                    id="domestic-college"
                    name="college"
                    value={values.college}
                    onChange={handleChange}
                    required
                    className={`w-full cursor-pointer appearance-none rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-500 outline-none ${
                      errors.college ? "ring-2 ring-red-300" : ""
                    }`}
                  >
                    <option value="">
                      {values.preferredCity
                        ? "Select College/University"
                        : "Select Preferred City First"}
                    </option>
                    {collegeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <span className="text-xs">▼</span>
                  </div>
                </div>
                {errors.college && <p className="mt-1 text-xs text-red-600">{errors.college}</p>}

                <div className="relative">
                  <label htmlFor="domestic-desired-course" className="sr-only">
                    Desired Course
                  </label>
                  <select
                    id="domestic-desired-course"
                    name="desiredCourse"
                    value={values.desiredCourse}
                    onChange={handleChange}
                    required
                    className={`w-full cursor-pointer appearance-none rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-500 outline-none ${errors.desiredCourse ? "ring-2 ring-red-300" : ""
                      }`}
                  >
                    <option value="">Desired Course</option>
                    {domesticDesiredCourseOptions.map((option) => (
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

                <button
                  type="submit"
                  disabled={!canSubmit || status === "sending"}
                  className="mt-2 w-full rounded-full bg-[#2a2a2a] py-4 text-base font-medium text-white transition-all hover:bg-black active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Submitting..." : "Get Free Counselling"}
                </button>

                {status !== "idle" && (
                  <p
                    className={`text-center text-sm ${status === "success"
                        ? "text-green-700"
                        : status === "error"
                          ? "text-red-700"
                          : "text-gray-600"
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
            </aside>
          </div>
        </div>
      </div>
      <SuccessPopup
        open={showSuccessPopup}
        message="Your enquiry has been submitted successfully."
      />
    </section>
  );
}
