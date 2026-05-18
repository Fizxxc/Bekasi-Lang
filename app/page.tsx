import Link from 'next/link';
import { ArrowRight, Braces, CheckCircle2, Code2, Download, FileCode2, Globe2, Laptop, PackageCheck, PlugZap, Rocket, ShieldCheck, Sparkles, TerminalSquare, Wand2 } from 'lucide-react';
import { CodeWindow } from '@/components/CodeWindow';
import { Nav } from '@/components/Nav';
import { globalsFile, helloWorld, installSnippet } from '@/lib/examples';
import { featureItems, syntaxItems } from '@/lib/syntax';

const heroCards = [
  { icon: FileCode2, title: '.bsl', text: 'Tempat logic utama. Bacaannya santai, struktur tetap jelas.' },
  { icon: Globe2, title: '.bls', text: 'Globals, helper, dan jurus reusable biar project nggak acak-acakan.' },
  { icon: PackageCheck, title: 'npm ready', text: 'Pasang lewat npm, jalanin dari terminal, cocok buat demo dan belajar.' },
  { icon: PlugZap, title: 'VS Code', text: 'Highlight, snippet, bracket config, dan icon bahasa buat file Bekasi Lang.' }
];

const newFeatures = [
  { icon: Download, title: 'Installer Windows .exe', text: 'Buat user Windows yang pengen klik installer tanpa mikir command panjang.' },
  { icon: Laptop, title: 'Install guide lintas OS', text: 'Windows, Linux, dan macOS disiapin dalam satu halaman yang gampang diikuti.' },
  { icon: ShieldCheck, title: 'Doctor command', text: 'Cek Node, npm, CLI, dan globals supaya setup kelihatan aman sebelum ngoding.' },
  { icon: Wand2, title: 'Globals flow', text: 'Web sekarang ngejelasin cara .bls dipakai sebagai helper project.' }
];

export default function HomePage() {
  return (
    <main>
      <Nav />
      <section className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_.95fr] md:items-center md:py-24">
        <div className="absolute right-8 top-12 -z-10 h-48 w-48 rounded-full bg-rose-300/40 blur-3xl" />
        <div className="absolute left-0 top-40 -z-10 h-56 w-56 rounded-full bg-orange-300/30 blur-3xl" />
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300/60 bg-white/75 px-4 py-2 text-sm font-black text-orange-700 shadow-sm">
            <Sparkles size={16} /> v0.4.0 • npm • installer • extension
          </div>
          <h1 className="font-display text-5xl font-black leading-[.95] tracking-tight md:text-7xl">
            Bahasa ngoding kecil, <span className="gradient-text">rasa Bekasi</span> yang nggak kaku.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
            Bekasi Lang dibuat buat orang yang pengen belajar logic dengan gaya yang lebih dekat. File utama pakai `.bsl`, helper pakai `.bls`, lalu semuanya jalan lewat CLI Node.js.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/install" className="inline-flex items-center gap-2 rounded-2xl bg-zinc-950 px-5 py-3 font-bold text-white shadow-glow transition hover:-translate-y-0.5">
              Install Sekarang <ArrowRight size={18} />
            </Link>
            <Link href="/extension" className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/75 px-5 py-3 font-bold text-zinc-900 transition hover:-translate-y-0.5">
              VS Code Extension <Code2 size={18} />
            </Link>
            <Link href="/docs" className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/60 px-5 py-3 font-bold text-zinc-900 transition hover:-translate-y-0.5">
              Baca Docs <Braces size={18} />
            </Link>
          </div>
          <pre className="mt-7 max-w-xl overflow-auto rounded-2xl border border-black/10 bg-zinc-950 p-4 text-sm text-orange-50 shadow-xl shadow-orange-500/10"><code>{installSnippet}</code></pre>
        </div>
        <CodeWindow title="src/index.bsl" code={helloWorld} />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="grid gap-4 md:grid-cols-4">
          {heroCards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group rounded-3xl border border-black/10 bg-white/70 p-6 shadow-xl shadow-orange-500/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
                <Icon className="mb-5 text-orange-600 transition group-hover:rotate-6" size={30} />
                <h3 className="font-display text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-700">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-[2rem] border border-black/10 bg-zinc-950 p-6 text-white shadow-2xl shadow-rose-500/20 md:p-8">
          <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-center">
            <div>
              <p className="font-bold uppercase tracking-[.24em] text-orange-300">Update baru</p>
              <h2 className="mt-3 font-display text-4xl font-black">Sekarang bukan cuma web docs.</h2>
              <p className="mt-4 leading-7 text-orange-50/75">
                Ada panduan install lintas OS, installer Windows, extension VS Code, dan API syntax buat bikin ekosistem Bekasi Lang lebih niat.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {newFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/10 p-5">
                    <Icon className="mb-4 text-orange-300" size={26} />
                    <h3 className="font-display text-xl font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-orange-50/75">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[.9fr_1.1fr] md:items-start">
        <div>
          <p className="font-bold uppercase tracking-[.24em] text-orange-600">Fitur</p>
          <h2 className="mt-3 font-display text-4xl font-black">Yang dibutuhin buat mulai udah disiapin.</h2>
          <div className="mt-6 grid gap-3">
            {featureItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/75 p-4 shadow-sm">
                <CheckCircle2 className="mt-1 shrink-0 text-orange-600" size={20} />
                <p className="font-semibold leading-7 text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <CodeWindow title="globals/default.bls" code={globalsFile} />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/install" className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-xl shadow-orange-500/10 transition hover:-translate-y-1">
            <TerminalSquare className="mb-5 text-orange-600" size={32} />
            <h3 className="font-display text-2xl font-black">Install guide</h3>
            <p className="mt-3 leading-7 text-zinc-700">Windows .exe, npm global, Linux, dan macOS dalam satu halaman.</p>
          </Link>
          <Link href="/extension" className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-xl shadow-rose-500/10 transition hover:-translate-y-1">
            <Code2 className="mb-5 text-rose-600" size={32} />
            <h3 className="font-display text-2xl font-black">Extension VS Code</h3>
            <p className="mt-3 leading-7 text-zinc-700">Syntax highlight dan snippet biar file .bsl/.bls lebih enak dibaca.</p>
          </Link>
          <Link href="/playground" className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-xl shadow-violet-500/10 transition hover:-translate-y-1">
            <Rocket className="mb-5 text-violet-600" size={32} />
            <h3 className="font-display text-2xl font-black">Playground</h3>
            <p className="mt-3 leading-7 text-zinc-700">Coba struktur kode dan lihat keyword yang kebaca dari file Bekasi Lang.</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="font-bold uppercase tracking-[.24em] text-orange-600">Kamus Syntax</p>
          <h2 className="mt-3 font-display text-4xl font-black">Bahasanya nyantai, alurnya tetap jelas.</h2>
          <div className="mt-6 grid gap-3">
            {syntaxItems.slice(0, 8).map((item) => (
              <div key={item.bekasi} className="rounded-2xl border border-black/10 bg-white/75 p-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <code className="rounded-xl bg-orange-100 px-3 py-1 font-bold text-orange-700">{item.bekasi}</code>
                  <span className="text-sm font-bold text-zinc-500">{item.vibe}</span>
                </div>
                <p className="mt-2 font-semibold">{item.meaning}</p>
                <p className="mt-1 font-mono text-sm text-zinc-600">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
        <CodeWindow title="src/index.bsl" code={helloWorld} />
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-12 text-sm text-zinc-600">
        © 2026 Bekasi Lang Project. Built by Fizzx Devv.
      </footer>
    </main>
  );
}
