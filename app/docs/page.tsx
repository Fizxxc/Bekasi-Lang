import Link from 'next/link';
import { CodeWindow } from '@/components/CodeWindow';
import { Nav } from '@/components/Nav';
import { countdown, globalsFile, helloWorld, installSnippet } from '@/lib/examples';
import { syntaxItems } from '@/lib/syntax';

export default function DocsPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[.24em] text-orange-600">Dokumentasi</p>
          <h1 className="mt-3 font-display text-5xl font-black tracking-tight md:text-6xl">Mulai dari file kecil, jalaninnya langsung gas.</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-700">
            Bekasi Lang pakai `.bsl` untuk program utama dan `.bls` untuk globals. Kamu bisa bikin helper di file globals, import pakai `muat`, lalu jalanin lewat CLI.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/install" className="rounded-2xl bg-zinc-950 px-5 py-3 font-bold text-white shadow-glow transition hover:-translate-y-0.5">Lihat Install</Link>
            <Link href="/extension" className="rounded-2xl border border-black/10 bg-white/75 px-5 py-3 font-bold text-zinc-900 transition hover:-translate-y-0.5">Extension VS Code</Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white/75 p-6 shadow-xl shadow-orange-500/10">
            <h2 className="font-display text-2xl font-black">Install package</h2>
            <pre className="mt-4 overflow-auto rounded-2xl bg-zinc-950 p-4 text-sm text-orange-50"><code>{installSnippet}</code></pre>
            <p className="mt-4 leading-7 text-zinc-700">
              Setelah project dibuat, command `bekasi run` akan membaca file `.bsl` dan globals `.bls` sesuai config.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white/75 p-6 shadow-xl shadow-rose-500/10">
            <h2 className="font-display text-2xl font-black">File extension</h2>
            <ul className="mt-4 space-y-3 leading-7 text-zinc-700">
              <li><b>.bsl</b> — rumah utama logic program.</li>
              <li><b>.bls</b> — globals, helper, dan jurus reusable.</li>
              <li><b>muat</b> — ambil file `.bsl` atau `.bls` dari program.</li>
              <li><b>bekasi doctor</b> — cek setup sebelum jalan.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-black/10 bg-zinc-950 p-6 text-white shadow-2xl shadow-orange-500/20">
          <h2 className="font-display text-3xl font-black">Starter flow</h2>
          <pre className="mt-4 overflow-auto rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-7 text-orange-50"><code>{`npm install bekasi-lang@latest
npx bekasi init warung-logika
cd warung-logika
npx bekasi run src/index.bsl
npx bekasi repl
npx bekasi doctor`}</code></pre>
        </div>

        <h2 className="mt-14 font-display text-3xl font-black">Kamus syntax</h2>
        <div className="mt-6 overflow-hidden rounded-3xl border border-black/10 bg-white/75 shadow-xl shadow-orange-500/10">
          <div className="overflow-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-orange-100 text-orange-900">
                <tr>
                  <th className="p-4">Bekasi Lang</th>
                  <th className="p-4">Makna</th>
                  <th className="p-4">Contoh</th>
                  <th className="p-4">Rasa</th>
                </tr>
              </thead>
              <tbody>
                {syntaxItems.map((item) => (
                  <tr key={item.bekasi} className="border-t border-black/10">
                    <td className="p-4"><code className="rounded-lg bg-zinc-950 px-2 py-1 text-orange-50">{item.bekasi}</code></td>
                    <td className="p-4 font-semibold">{item.meaning}</td>
                    <td className="p-4 font-mono text-zinc-600">{item.example}</td>
                    <td className="p-4 text-zinc-500">{item.vibe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <CodeWindow title="src/index.bsl" code={helloWorld} />
          <CodeWindow title="loop.bsl" code={countdown} />
          <CodeWindow title="globals/default.bls" code={globalsFile} />
        </div>
      </section>
    </main>
  );
}
