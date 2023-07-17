import { Exo_2 } from 'next/font/google';
import { Metadata } from 'next';

import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import '../styles/globals.scss';

const exo2 = Exo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Counterparts Avatars',
  description:
    'A virtual twin of your contributions towards humanity, for use across the metaverse.',
  generator: 'Counterparts.io',
  applicationName: 'Counterparts Avatars',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Counterparts',
    'Avatar',
    'Metaverse',
    '3D',
    'NFT',
    'Web3',
    'Impact',
    'Gaming',
  ],
  authors: [{ name: 'Brett Cornick' }],
  colorScheme: 'dark',
  creator: 'Brett Cornick',
  publisher: 'Counterparts.io',
  openGraph: {
    title: 'Counterparts Avatars',
    description:
      'A virtual twin of your contributions towards humanity, for use across the metaverse.',
    url: 'https://counterparts.io',
    siteName: 'Counterparts Avatars',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Counterparts Avatars',
    description:
      'A virtual twin of your contributions towards humanity, for use across the metaverse.',
    creator: '@brett_cornick',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo2.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
