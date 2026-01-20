'use client';

import { useCallback } from 'react';
import { trackEvent as track } from '@/lib/posthog';

interface TrackEventProps {
  children: React.ReactNode;
  event: string;
  properties?: Record<string, unknown>;
  onClick?: () => void;
}

export function TrackEvent({
  children,
  event,
  properties,
  onClick,
}: TrackEventProps) {
  const handleClick = useCallback(() => {
    track(event, properties);
    onClick?.();
  }, [event, properties, onClick]);

  return (
    <span onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </span>
  );
}

// Hook for tracking events
export function useTrackEvent() {
  return useCallback(
    (eventName: string, properties?: Record<string, unknown>) => {
      track(eventName, properties);
    },
    []
  );
}
