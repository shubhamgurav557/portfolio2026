'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { gsap } from 'gsap';

export default function ContactForm() {
  const [status, setStatus] = useState('Send a message and I will reply within 24 hours.');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-card', { opacity: 0, y: 28, duration: 0.9, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Message prepared — open your email client to send it.');
    const mailto = `mailto:shubhamgurav4978@gmail.com?subject=${encodeURIComponent(form.name + ' - Portfolio Inquiry')}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="contact-card rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-neon backdrop-blur-xl">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Let's connect</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Start a project or say hi.</h2>
        <p className="mt-3 text-slate-300">I use clean, accessible UI patterns and build polished product experiences. Share your idea and we can explore it together.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-slate-300">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm text-slate-300">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
            placeholder="email@example.com"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm text-slate-300">Message</span>
        <textarea
          required
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          rows={5}
          className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
          placeholder="Tell me about your idea or role..."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-300">{status}</p>
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
          Open email client
        </button>
      </div>
    </form>
  );
}
