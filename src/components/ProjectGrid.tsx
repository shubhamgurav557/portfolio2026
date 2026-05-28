'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { projects } from '@/lib/data';

const categories = ['All', 'React', 'Next.js', 'JS', 'UX'];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, [activeCategory]);

  const filtered = projects.filter((project) =>
    activeCategory === 'All' ? true : project.tags.some((tag) => tag.toLowerCase().includes(activeCategory.toLowerCase()))
  );

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm transition ${activeCategory === category ? 'border-cyan-400 bg-cyan-500/10 text-cyan-200' : 'border-white/10 text-slate-300 hover:border-cyan-400/30 hover:text-white'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        {filtered.map((project) => (
          <article key={project.title} className="project-card rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-neon transition hover:-translate-y-1 hover:border-violet-400/30">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-200">Featured</span>
            </div>
            <p className="mt-4 text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-cyan-500/25 px-3 py-1 bg-cyan-500/5">{tag}</span>
              ))}
            </div>
            <a href={project.url} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white">
              View details
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
