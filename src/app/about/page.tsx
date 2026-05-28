import { values } from '@/lib/data';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-12 lg:px-8">
      <section className="space-y-8 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-neon backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">About</p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Designer of premium frontends with clean structure and motion-driven polish.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I bring 4+ years of frontend engineering and a deep focus on frameworks like React and Next.js. My work lands at the intersection of performance, accessibility, and high-velocity user engagement.
            </p>
          </div>
          <Link href="/projects" className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/15 hover:text-white">
            See case studies
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{item.title}</p>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-8">
            <h2 className="text-2xl font-semibold text-white">Experience highlights</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <p className="font-semibold text-white">Cyberium Info — ERP Solution</p>
                <p className="mt-2 text-sm">Delivered an enterprise resource planning system with HR, finance, and supply chain workflows using React, JavaScript, WordPress, and AWS.</p>
              </li>
              <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <p className="font-semibold text-white">3PS Media — MVX E-learning</p>
                <p className="mt-2 text-sm">Built an adaptive learning platform with immersive gamification, responsive UX, and question logic tailored to learner avatars.</p>
              </li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-8">
            <h2 className="text-2xl font-semibold text-white">What I bring</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>Building modern SPAs that feel like apps by using animation, smart navigation, and layered storytelling.</p>
              <p>Crafting frontend systems that scale with components, design tokens, and strong performance practices.</p>
              <p>Connecting the frontend to backend services with Node.js, Express and MongoDB when the experience demands dynamic data.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
