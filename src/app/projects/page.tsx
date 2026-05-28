import ProjectGrid from '@/components/ProjectGrid';

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 lg:px-8">
      <section className="space-y-8 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-neon backdrop-blur-xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Projects</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Featured work and interactive product demos.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Explore case studies that highlight my full-stack approach, polished UI systems, and retention-first motion design.
          </p>
        </div>

        <ProjectGrid />
      </section>
    </div>
  );
}
