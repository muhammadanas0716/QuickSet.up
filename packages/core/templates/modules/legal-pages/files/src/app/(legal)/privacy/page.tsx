import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy and how we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p className="mt-4">
              We collect information you provide directly to us, such as when you
              create an account, make a purchase, or contact us for support.
            </p>
            <p className="mt-2">This information may include:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Name and email address</li>
              <li>Payment information</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              2. How We Use Your Information
            </h2>
            <p className="mt-4">We use the information we collect to:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              3. Information Sharing
            </h2>
            <p className="mt-4">
              We do not sell your personal information. We may share your
              information with third-party service providers who perform services
              on our behalf, such as payment processing and email delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              4. Data Security
            </h2>
            <p className="mt-4">
              We take reasonable measures to help protect your personal
              information from loss, theft, misuse, and unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              5. Contact Us
            </h2>
            <p className="mt-4">
              If you have any questions about this Privacy Policy, please contact
              us at privacy@yourdomain.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
