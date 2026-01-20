'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  priceId?: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({
  name,
  description,
  price,
  priceId,
  features,
  popular,
}: PricingCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!priceId) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`relative rounded-2xl border p-8 ${
        popular
          ? 'border-primary bg-primary/5'
          : 'border-border bg-card'
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
          Most Popular
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Custom' && (
          <span className="text-muted-foreground">/month</span>
        )}
      </div>

      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubscribe}
        disabled={isLoading || !priceId}
        className={`w-full rounded-lg px-4 py-3 font-medium transition-colors ${
          popular
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        } disabled:cursor-not-allowed disabled:opacity-50`}
      >
        {isLoading ? 'Loading...' : price === 'Custom' ? 'Contact Us' : 'Get Started'}
      </button>
    </div>
  );
}
