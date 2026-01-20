import { PricingCard } from '@/components/pricing/pricing-card';
import { PLANS } from '@/lib/stripe';

export const metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for everyone.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that works best for you. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          <PricingCard
            name={PLANS.starter.name}
            description={PLANS.starter.description}
            price={PLANS.starter.price}
            priceId={PLANS.starter.priceId}
            features={PLANS.starter.features}
          />
          <PricingCard
            name={PLANS.pro.name}
            description={PLANS.pro.description}
            price={PLANS.pro.price}
            priceId={PLANS.pro.priceId}
            features={PLANS.pro.features}
            popular
          />
          <PricingCard
            name={PLANS.enterprise.name}
            description={PLANS.enterprise.description}
            price={PLANS.enterprise.price}
            priceId={PLANS.enterprise.priceId}
            features={PLANS.enterprise.features}
          />
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6 text-left">
            <div>
              <h3 className="font-medium">Can I cancel anytime?</h3>
              <p className="mt-2 text-muted-foreground">
                Yes, you can cancel your subscription at any time. You&apos;ll continue to have access until the end of your billing period.
              </p>
            </div>
            <div>
              <h3 className="font-medium">What payment methods do you accept?</h3>
              <p className="mt-2 text-muted-foreground">
                We accept all major credit cards including Visa, Mastercard, and American Express.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Do you offer refunds?</h3>
              <p className="mt-2 text-muted-foreground">
                We offer a 30-day money-back guarantee. If you&apos;re not satisfied, contact us for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
