import { Exo_2 } from 'next/font/google';

import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import '../styles/globals.scss';

const exo2 = Exo_2({ subsets: ['latin'] });

export const metadata = {
  title: 'Counterparts Avatars',
  description: 'Digital beings creating real-world impact.',
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
