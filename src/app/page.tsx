import Link from 'next/link';
import { heroTags } from '@/lib/data';
import SkillGrid from '@/components/SkillGrid';
import StayTimer from '@/components/StayTimer';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 lg:px-8">
      <section className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/80 p-10 shadow-neon backdrop-blur-xl lg:p-14">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-400/15 to-transparent" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Full Stack Developer
            </p>
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              I build immersive web experiences that keep visitors engaged.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Frontend-first portfolio design with custom motion, interactive storytelling, and real-world project highlights built on Next.js, React, and GSAP.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Explore projects
              </Link>
              <Link href="/about" className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:text-cyan-200">
                Learn more
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-cyan-500/5">
            <div className="mb-6 space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Experience</p>
              <div className="rounded-3xl bg-gradient-to-r from-cyan-500/15 via-slate-900/90 to-violet-500/15 p-5 text-slate-200">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Current focus</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Interactive product experiences</h2>
                <p className="mt-3 text-slate-300">Building SPA-first applications with cross-page transitions, performance-first animation, and retention-enhancing design.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-200 shadow-[inset_0_0_45px_rgba(15,23,42,0.2)]">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Location</p>
                <p className="mt-3 text-lg font-semibold text-white">Bengaluru, KA</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-200 shadow-[inset_0_0_45px_rgba(15,23,42,0.2)]">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Contact</p>
                <p className="mt-3 text-lg font-semibold text-white">shubhamgurav4978@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-neon backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Skill spectrum</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Build professional user journeys with modern frontend craft.</h2>
            <p className="mt-3 text-slate-300">I design vibrant, high-engagement interfaces with animation, accessibility, responsive systems, and backend-aware logic.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-200 shadow-sm shadow-cyan-500/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <SkillGrid />
        </div>

        <StayTimer />
      </section>
    </div>
  );
}
