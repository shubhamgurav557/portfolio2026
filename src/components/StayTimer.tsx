'use client';

import { useEffect, useMemo, useState } from 'react';
import { gsap } from 'gsap';

const milestones = [
  { time: 60, label: 'Discovery begins' },
  { time: 180, label: 'Deep dive mode' },
  { time: 300, label: 'Retention unlocked' },
];

export default function StayTimer() {
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState('Explore the interactive sections to unlock more.');

  useEffect(() => {
    const interval = setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const active = milestones.filter((item) => seconds >= item.time).slice(-1)[0];
    if (active) {
      setMessage(`Milestone reached: ${active.label}`);
    }
  }, [seconds]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stay-timer-card', { opacity: 0, y: 20, duration: 1, ease: 'power2.out' });
    });
    return () => ctx.revert();
  }, []);

  const progress = useMemo(() => Math.min(100, (seconds / 300) * 100), [seconds]);

  return (
    <section className="stay-timer-card rounded-3xl border border-cyan-300/20 bg-slate-950/80 p-6 shadow-neon backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Stay engaged</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Your visit time is building momentum.</h3>
          <p className="mt-3 max-w-2xl text-slate-300">I built this portfolio to keep users exploring with motion, storytelling, and real interaction. Stay 5 minutes and watch the experience unlock.</p>
        </div>

        <div className="rounded-3xl bg-slate-900/70 p-4 text-right">
          <p className="text-5xl font-semibold text-cyan-200">{Math.floor(seconds / 60)}m {seconds % 60}s</p>
          <p className="text-sm text-slate-400">Session progress: {Math.round(progress)}%</p>
        </div>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-200" style={{ width: `${progress}%` }} />
      </div>

      <p className="mt-4 text-slate-300">{message}</p>
    </section>
  );
}
