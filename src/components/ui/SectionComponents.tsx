import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ badge, title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full mb-4 ${
          light 
            ? "bg-accent/20 text-accent" 
            : "bg-accent/10 text-accent"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
        light ? "text-white" : "text-foreground"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl leading-relaxed ${
          light ? "text-white/80" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="card-premium group">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="card-premium">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-cta" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-foreground mb-6 leading-relaxed italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role} • {company}</p>
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">{value}</div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}
