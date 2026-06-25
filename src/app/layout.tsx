import type {Metadata} from 'next';
import './globals.css';
import { PrototypeSwitcher } from '@/components/prototype-switcher';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'AZTEK Pro | Protection Technology For Every Surface',
  description: 'Advanced molecular protection for elite automotive, motorcycle, and architectural environments.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary/30">
        {children}
        <PrototypeSwitcher />
        <Toaster />
      </body>
    </html>
  );
}
