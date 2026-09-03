import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Barrio Web Studio | Sitios web bilingües',
  description:
    'Diseño de sitios web bilingües para pequeños negocios locales. Agenda una consulta gratuita.',
  openGraph: {
    title: 'Barrio Web Studio | Tu negocio merece verse increíble',
    description: 'Sitios web bilingües con corazón local.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Barrio Web Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barrio Web Studio',
    description: 'Sitios web bilingües con corazón local.',
    images: ['/og.png'],
  },
  icons: {
    icon: '/logo-tamale.png',
    apple: '/logo-tamale.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
