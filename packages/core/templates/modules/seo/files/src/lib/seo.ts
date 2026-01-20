import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'My App';

export function createMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      type: 'website',
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: 'Welcome to our platform',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteName,
    description: 'Welcome to our platform',
    siteName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};
