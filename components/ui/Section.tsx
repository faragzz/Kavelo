import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
};

export default function Section({
  children,
  className = "",
  id,
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-24 lg:py-32 ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
      )}
    </section>
  );
}
