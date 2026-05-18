'use client';

import { useMemo, useState } from 'react';
import { Nav } from '@/components/Nav';
import { helloWorld } from '@/lib/examples';

export default function PlaygroundPage() {
  const [code, setCode] = useState(helloWorld);
  const preview = useMemo(() => makePreview(code), [code]);

  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="font-bold uppercase tracking-[.24em] text-orange-600">Playground</p>
        <h1 className="mt-3 font-display text-5xl font-black tracking-tight md:text-6xl">Coba utak-atik syntax-nya.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
          Ini playground visual buat baca struktur kode. Buat output beneran, jalanin package `bekasi-lang` dari terminal.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <textarea
            value={code}
            onChange={(event) => setCode(event.target.value)}
            spellCheck={false}
            className="min-h-[520px] rounded-3xl border border-black/10 bg-zinc-950 p-5 font-mono text-sm leading-7 text-orange-50 shadow-2xl shadow-orange-500/20 outline-none ring-orange-400 transition focus:ring-4"
          />
          <div className="rounded-3xl border border-black/10 bg-white/75 p-6 shadow-xl shadow-rose-500/10 backdrop-blur">
            <h2 className="font-display text-2xl font-black">Kode ini kebaca apa aja?</h2>
            <p className="mt-2 leading-7 text-zinc-600">Panel ini ngitung keyword penting biar orang langsung nangkep isi file `.bsl`.</p>
            <div className="mt-5 space-y-3">
              {preview.map((line, index) => (
                <div key={`${line}-${index}`} className="rounded-2xl border border-black/10 bg-white/80 p-4 font-mono text-sm text-zinc-700">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function makePreview(source: string) {
  const lines = source.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const stats = {
    imports: lines.filter((line) => line.startsWith('muat ')).length,
    variables: lines.filter((line) => line.startsWith('taroh ')).length,
    prints: lines.filter((line) => line.startsWith('nyablak')).length,
    conditions: lines.filter((line) => line.startsWith('kalo ')).length,
    loops: lines.filter((line) => line.startsWith('selagi ') || line.startsWith('ulang ')).length,
    functions: lines.filter((line) => line.startsWith('jurus ')).length
  };
  return [
    `muat/import: ${stats.imports}`,
    `variabel taroh: ${stats.variables}`,
    `nyablak/print: ${stats.prints}`,
    `kalo/if: ${stats.conditions}`,
    `loop selagi/ulang: ${stats.loops}`,
    `jurus/function: ${stats.functions}`,
    'Pengen lihat output? Run: npx bekasi run src/index.bsl'
  ];
}
