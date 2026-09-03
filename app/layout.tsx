import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'San Luis Web Studio | Sitios web bilingües',
  description:
    'Diseño de sitios web bilingües para pequeños negocios locales. Agenda una consulta gratuita.',
  openGraph: {
    title: 'San Luis Web Studio | Tu negocio merece verse increíble',
    description: 'Sitios web bilingües con corazón local.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'San Luis Web Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Luis Web Studio',
    description: 'Sitios web bilingües con corazón local.',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line next/no-page-custom-font -- root layout is shared by every route in the app router */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,400..900,0..100,0..1&family=Nunito+Sans:wght@400..1000&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
