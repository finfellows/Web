import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Chatbot from '@/components/templates/chatbot';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className='h-screen relative'>
        <Navigation />
        {children}
        <Chatbot />

        <Footer />
      </body>
    </html>
  );
}
