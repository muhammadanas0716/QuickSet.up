'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  description: string;
  items: FAQItem[];
}

export function FAQ({ title, description, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-6 pb-6 pt-4">
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
