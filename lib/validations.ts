import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.enum(["website", "custom-software", "mobile-app", "both"], {
    error: "Please select a project type",
  }),
  budgetRange: z.string().optional(),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const projectTypeLabels: Record<string, string> = {
  website: "Websites & Landing Pages",
  "custom-software": "Custom Platforms & Portals",
  "mobile-app": "Mobile Applications",
  both: "Both / Multiple Services",
};

export const budgetRangeLabels: Record<string, string> = {
  "under-5k": "Under $5,000",
  "5k-15k": "$5,000 – $15,000",
  "15k-30k": "$15,000 – $30,000",
  "30k-plus": "$30,000+",
  "not-sure": "Not sure yet",
  "": "Prefer not to say",
};
