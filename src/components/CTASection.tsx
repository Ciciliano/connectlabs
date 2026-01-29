import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  variant?: "light" | "dark";
}

export function CTASection({ title, subtitle, buttonText, buttonLink, variant = "dark" }: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section className={`section-padding ${isDark ? "section-dark" : "bg-muted"}`}>
      <div className="container-custom text-center">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
          isDark ? "text-white" : "text-foreground"
        }`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
            isDark ? "text-white/80" : "text-muted-foreground"
          }`}>
            {subtitle}
          </p>
        )}
        <Link
          to={buttonLink}
          className="btn-cta inline-flex items-center gap-2 text-lg"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
