'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: 'hsl(172 72% 46%)',
          colorBackground: 'hsl(220 14% 11%)',
          colorInputBackground: 'hsl(220 12% 16%)',
          colorInputText: 'hsl(210 20% 96%)',
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
