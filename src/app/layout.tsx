import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Shubham Gurav | Full Stack Developer',
  description: 'Portfolio of Shubham Gurav showcasing frontend design, animation, and full-stack experience.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_28%)]">
          <NavBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
