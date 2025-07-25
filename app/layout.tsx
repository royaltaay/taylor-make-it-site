import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Taylor Make It | Custom Website Design & Development by Taylor Prince",
  description: "Professional custom websites for small businesses and entrepreneurs. Fast delivery, responsive design, and SEO-ready. Starting at $3,500. Get your website in 1-2 weeks.",
  keywords: "custom website design, web development, small business websites, responsive design, SEO optimization, Taylor Prince, website builder, professional websites",
  authors: [{ name: "Taylor Prince" }],
  creator: "Taylor Prince",
  publisher: "Taylor Make It",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/tmi favicon.png",
  },
  openGraph: {
    title: "Taylor Make It | Custom Website Design & Development",
    description: "Professional custom websites for small businesses. Fast delivery, responsive design, and SEO-ready. Starting at $3,500.",
    url: "https://taylormake.it",
    siteName: "Taylor Make It",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taylor Make It - Custom Website Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor Make It | Custom Website Design & Development",
    description: "Professional custom websites for small businesses. Fast delivery, responsive design, and SEO-ready.",
    creator: "@taylorprince",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://taylormake.it",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Taylor Make It',
    description: 'Professional custom website design and development services for small businesses and entrepreneurs.',
    url: 'https://taylormake.it',
    founder: {
      '@type': 'Person',
      name: 'Taylor Prince',
      jobTitle: 'Web Designer & Developer',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$3,500 - $7,500+',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter Site',
        price: '3500',
        priceCurrency: 'USD',
        description: '1-5 pages, mobile-responsive design, basic SEO setup, contact form integration',
      },
      {
        '@type': 'Offer',
        name: 'Growth Site',
        price: '7500',
        priceCurrency: 'USD',
        description: '8-12 custom pages, strategy session, custom features, enhanced SEO setup',
      },
    ],
    sameAs: [
      'https://www.figma.com/proto/3RJE50tGInmIphy30kI3Lp/Taylor-Make-It---Recent-Work',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
