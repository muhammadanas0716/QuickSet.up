import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function CTA({ title, description, primaryCta, secondaryCta }: CTAProps) {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center sm:p-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {primaryCta.text}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium transition-colors hover:bg-secondary"
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
