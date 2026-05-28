'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { skills } from '@/lib/data';

export default function SkillGrid() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-card', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {skills.map((skill) => (
        <article key={skill.label} className="skill-card group rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-neon transition hover:-translate-y-1 hover:border-cyan-400/30">
          <div className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${skill.color} px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 shadow-lg shadow-cyan-500/10`}> 
            {skill.label}
          </div>
          <p className="text-slate-300">{skill.description}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-cyan-300 transition group-hover:text-white">
            <span className="text-xs uppercase tracking-[0.32em]">Mastered</span>
            <span className="h-1.5 w-10 rounded-full bg-cyan-400/70" />
          </div>
        </article>
      ))}
    </div>
  );
}
