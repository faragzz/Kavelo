import Link from "next/link";
import { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D9622B] focus:ring-offset-2 focus:ring-offset-[#F7F5F1] disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  const variants = {
    primary:
      "bg-[#D9622B] text-white hover:bg-[#B94C1F] active:scale-[0.98] shadow-lg shadow-[#D9622B]/20 hover:shadow-[#D9622B]/40",
    secondary:
      "bg-transparent text-[#1A1D24] border border-[#E4E0D9] hover:border-[#D9622B] hover:text-[#B94C1F] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#D9622B] hover:text-[#B94C1F] hover:bg-[#D9622B]/10 active:scale-[0.98]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
