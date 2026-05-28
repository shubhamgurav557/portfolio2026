import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-12 lg:px-8">
      <section className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-neon backdrop-blur-xl lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Contact</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Let’s turn your idea into a polished web experience.</h1>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            If you are building a product, an internal tool, or a marketing experience, I can help with interactive UI, scalable code, and frontend performance.
          </p>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-slate-300">
            <p className="font-semibold text-white">Quick contact</p>
            <p className="mt-3 text-sm">Email: <a href="mailto:shubhamgurav4978@gmail.com" className="text-cyan-300 hover:text-cyan-200">shubhamgurav4978@gmail.com</a></p>
            <p className="mt-2 text-sm">Location: Bengaluru, KA</p>
            <p className="mt-2 text-sm">Open to frontend, full-stack, and interactive product work.</p>
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
