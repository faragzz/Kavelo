type SectionLabelProps = {
  children: React.ReactNode;
  accent?: "indigo" | "teal";
};

export default function SectionLabel({
  children,
  accent = "indigo",
}: SectionLabelProps) {
  const colors = {
    indigo: "text-[#5B4CFF] bg-[#5B4CFF]/10 border border-[#5B4CFF]/20",
    teal: "text-[#00E5C3] bg-[#00E5C3]/10 border border-[#00E5C3]/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full animate-reveal ${colors[accent]}`}
    >
      <span
        className={`w-1 h-1 rounded-full ${accent === "indigo" ? "bg-[#5B4CFF]" : "bg-[#00E5C3]"}`}
      />
      {children}
    </span>
  );
}
