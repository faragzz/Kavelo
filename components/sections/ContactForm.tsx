"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  contactSchema,
  ContactFormData,
} from "@/lib/validations";
import CTAButton from "@/components/ui/CTAButton";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Something went wrong");
      }

      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send. Please email us directly."
      );
    }
  };

  const inputClass =
    "w-full bg-[#13131A] border border-[#2A2A38] rounded-xl px-4 py-3 text-sm text-[#F5F4F0] placeholder:text-[#5A5A72] focus:outline-none focus:border-[#5B4CFF] transition-colors duration-200";
  const labelClass = "block text-xs font-semibold text-[#8888A8] uppercase tracking-wider mb-2";
  const errorClass = "text-xs text-red-400 mt-1.5";

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 rounded-2xl bg-[#00E5C3]/15 border border-[#00E5C3]/30 flex items-center justify-center mx-auto mb-6 text-2xl">
          ✓
        </div>
        <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F5F4F0] mb-3">
          Message received.
        </h3>
        <p className="text-[#5A5A72] text-sm max-w-sm mx-auto">
          We'll review your project and reply to your email within 24 hours — usually sooner.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[#5B4CFF] hover:text-[#7B6FFF] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-[#5B4CFF]">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            {...register("name")}
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-[#5B4CFF]">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register("email")}
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Project type + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project type <span className="text-[#5B4CFF]">*</span>
          </label>
          <select
            id="projectType"
            {...register("projectType")}
            className={`${inputClass} appearance-none cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              Select a type…
            </option>
            <option value="website">Websites & Landing Pages</option>
            <option value="custom-software">Custom Platforms & Portals</option>
            <option value="mobile-app">Mobile Applications</option>
            <option value="both">Both / Multiple Services</option>
          </select>
          {errors.projectType && (
            <p className={errorClass}>{errors.projectType.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="budgetRange" className={labelClass}>
            Budget range{" "}
            <span className="text-[#5A5A72] normal-case tracking-normal font-normal">
              (optional)
            </span>
          </label>
          <input
            id="budgetRange"
            type="text"
            placeholder="Your estimated budget"
            {...register("budgetRange")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project <span className="text-[#5B4CFF]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="What are you building, where are you in the process, and what do you need?"
          {...register("message")}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {/* Error state */}
      {status === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
          {errorMessage}
        </div>
      )}

      <CTAButton
        type="submit"
        disabled={status === "loading"}
        size="lg"
        className="w-full justify-center"
      >
        {status === "loading" ? "Sending…" : "Send message →"}
      </CTAButton>

      <p className="text-center text-xs text-[#5A5A72]">
        We reply within 24 hours. No sales calls unless you request one.
      </p>
    </form>
  );
}
