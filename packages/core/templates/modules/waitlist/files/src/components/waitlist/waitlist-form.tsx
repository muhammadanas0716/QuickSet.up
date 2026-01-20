'use client';

import { useState } from 'react';
import { Mail, Loader2, CheckCircle } from 'lucide-react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-lg font-semibold">You&apos;re on the list!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll notify you when we launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-destructive">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-lg bg-primary py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Joining...
          </span>
        ) : (
          'Join the Waitlist'
        )}
      </button>
    </form>
  );
}
