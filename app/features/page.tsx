import { CheckCircle2 } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { featureItems } from '@/lib/syntax';

export default function FeaturesPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="font-bold uppercase tracking-[.24em] text-orange-600">Features</p>
        <h1 className="mt-3 font-display text-5xl font-black tracking-tight md:text-6xl">Ekosistem kecil yang dibuat biar gampang dipakai.</h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureItems.map((item) => (
            <div key={item} className="flex gap-4 rounded-3xl border border-black/10 bg-white/75 p-5 shadow-xl shadow-orange-500/10">
              <CheckCircle2 className="mt-1 shrink-0 text-orange-600" size={24} />
              <p className="text-lg font-bold leading-8 text-zinc-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
