import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TransMedics Internship',
  description: 'Interactive presentation of Ysabellas internship projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EFECEA] text-[#302f32]`}>{children}</body>
    </html>
  );
}
