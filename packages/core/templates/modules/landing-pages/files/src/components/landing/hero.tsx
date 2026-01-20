import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  badge?: string;
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function Hero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              {badge}
            </div>
          )}

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            {description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {primaryCta.text}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
