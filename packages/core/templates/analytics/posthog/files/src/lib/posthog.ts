import posthog from 'posthog-js';
import { PostHog } from 'posthog-node';

// Client-side PostHog initialization
export function initPostHog() {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false, // We capture manually with the PageView component
      capture_pageleave: true,
    });
  }
}

// Server-side PostHog client
export function getServerPostHog() {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return null;
  }

  return new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
  });
}

// Track custom events
export function trackEvent(
  eventName: string,
  properties?: Record<string, unknown>
) {
  if (typeof window !== 'undefined') {
    posthog.capture(eventName, properties);
  }
}

// Identify user
export function identifyUser(
  userId: string,
  properties?: Record<string, unknown>
) {
  if (typeof window !== 'undefined') {
    posthog.identify(userId, properties);
  }
}

// Reset user (on logout)
export function resetUser() {
  if (typeof window !== 'undefined') {
    posthog.reset();
  }
}

export { posthog };
