type SectionLabelProps = {
  children: React.ReactNode;
  accent?: "amber" | "teal";
};

export default function SectionLabel({
  children,
  accent = "amber",
}: SectionLabelProps) {
  const colors = {
    amber: "text-kavelo-amber bg-kavelo-amber/10 border border-kavelo-amber/20",
    teal: "text-kavelo-teal bg-kavelo-teal/10 border border-kavelo-teal/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full animate-reveal ${colors[accent]}`}
    >
      <span
        className={`w-1 h-1 rounded-full ${accent === "amber" ? "bg-kavelo-amber" : "bg-kavelo-teal"}`}
      />
      {children}
    </span>
  );
}
