import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:{
    template: '%s | Clabed Dashboard',
    default: 'Clabed Dashboard',
  },
  description: 'Clabed Autos Dashboard, built with Next.js App Router',
  metadataBase: new URL('https://next-dashboard-lovat-omega.vercel.app')
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
