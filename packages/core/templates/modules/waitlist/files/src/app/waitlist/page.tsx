import type { Metadata } from 'next';
import { WaitlistForm } from '@/components/waitlist/waitlist-form';

export const metadata: Metadata = {
  title: 'Join the Waitlist',
  description: 'Be the first to know when we launch.',
};

export default function WaitlistPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Coming Soon</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re working on something amazing. Be the first to know when we launch.
          </p>
        </div>

        <WaitlistForm />

        <p className="text-center text-sm text-muted-foreground">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
