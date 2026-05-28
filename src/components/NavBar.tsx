'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { navItems } from '@/lib/data';

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-link', {
        opacity: 0,
        y: -18,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.24em] text-cyan-200">
          SHUBHAM
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-sm font-medium transition hover:text-cyan-300 ${pathname === item.href ? 'text-cyan-100' : 'text-slate-300'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="https://github.com/shubhamgurav557" target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/shubhamgurav557" target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href="mailto:shubhamgurav4978@gmail.com" className="text-slate-300 transition hover:text-white">
            <Mail size={18} />
          </a>
        </div>

        <button className="md:hidden text-slate-300" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-3 px-5 py-5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-200 text-lg" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
