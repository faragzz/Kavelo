import type { Metadata } from "next";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected websites, web applications, and mobile projects designed and built by Kavelo.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <ProjectsShowcase />
    </div>
  );
}
