import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Our terms of service and conditions of use.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="mt-4">
              By accessing or using our service, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not
              use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              2. Use of Service
            </h2>
            <p className="mt-4">
              You may use our service only for lawful purposes and in accordance
              with these Terms. You agree not to:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Interfere with or disrupt the service</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              3. User Accounts
            </h2>
            <p className="mt-4">
              When you create an account, you must provide accurate and complete
              information. You are responsible for maintaining the security of your
              account and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              4. Payment Terms
            </h2>
            <p className="mt-4">
              If you purchase a paid plan, you agree to pay the applicable fees.
              All fees are non-refundable unless otherwise stated. We may change
              our fees at any time with prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              5. Intellectual Property
            </h2>
            <p className="mt-4">
              The service and its original content, features, and functionality are
              owned by us and are protected by international copyright, trademark,
              and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              6. Limitation of Liability
            </h2>
            <p className="mt-4">
              In no event shall we be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to your
              use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              7. Changes to Terms
            </h2>
            <p className="mt-4">
              We reserve the right to modify these terms at any time. We will
              provide notice of any material changes by posting the new Terms of
              Service on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              8. Contact Us
            </h2>
            <p className="mt-4">
              If you have any questions about these Terms, please contact us at
              legal@yourdomain.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
