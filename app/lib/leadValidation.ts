import { domesticDesiredCourseOptions } from "@/app/lib/domesticCourses";
import {
  desiredCourseOptions,
  domesticPreferredCityOptions
} from "@/app/lib/leadFormOptions";

export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  city: string;
  preferredCity: string;
  desiredCourse: string;
  preferredCountry: string;
  intake: string;
  studyMode: string;
  source?: string;
};

export type LeadFieldErrors = Partial<Record<keyof LeadInput, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s\-()]{7,20}$/;

export function sanitizeLeadInput(input: Partial<LeadInput>): LeadInput {
  const rawMode = (input.studyMode || "abroad").trim().toLowerCase();
  const studyMode = rawMode === "domestic" ? "domestic" : "abroad";

  return {
    name: (input.name || "").trim(),
    email: (input.email || "").trim(),
    phone: (input.phone || "").trim(),
    city: (input.city || "").trim(),
    preferredCity: (input.preferredCity || "").trim(),
    desiredCourse: (input.desiredCourse || "").trim(),
    preferredCountry: (input.preferredCountry || "").trim(),
    intake: (input.intake || "").trim(),
    studyMode,
    source: (input.source || "Website").trim()
  };
}

export function validateLeadInput(input: LeadInput): LeadFieldErrors {
  const errors: LeadFieldErrors = {};

  if (!input.name) {
    errors.name = "Name is required.";
  } else if (input.name.length < 2) {
    errors.name = "Name should be at least 2 characters.";
  }

  if (!input.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(input.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!input.phone) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_REGEX.test(input.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!input.city) {
    errors.city = "City is required.";
  } else if (input.city.length > 100) {
    errors.city = "City is too long.";
  }

  if (!input.desiredCourse) {
    errors.desiredCourse = "Desired course is required.";
  } else if (
    input.studyMode === "domestic" &&
    !domesticDesiredCourseOptions.includes(input.desiredCourse)
  ) {
    errors.desiredCourse = "Please select a valid domestic course.";
  } else if (
    input.studyMode === "abroad" &&
    !desiredCourseOptions.includes(input.desiredCourse as (typeof desiredCourseOptions)[number])
  ) {
    errors.desiredCourse = "Please select a valid desired course.";
  }

  if (input.studyMode === "domestic") {
    if (!input.preferredCity) {
      errors.preferredCity = "Preferred city is required.";
    } else if (
      !domesticPreferredCityOptions.includes(
        input.preferredCity as (typeof domesticPreferredCityOptions)[number]
      )
    ) {
      errors.preferredCity = "Please select a valid preferred city.";
    }
  }

  if (input.studyMode === "abroad") {
    if (!input.preferredCountry) {
      errors.preferredCountry = "Preferred country is required.";
    }

    if (!input.intake) {
      errors.intake = "Intake is required.";
    }
  }

  return errors;
}

export function hasValidationErrors(errors: LeadFieldErrors) {
  return Object.keys(errors).length > 0;
}
