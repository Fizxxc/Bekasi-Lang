import { Braces, Code2, FileCode2, Highlighter, Keyboard, PackageOpen, PlugZap } from 'lucide-react';
import { CodeWindow } from '@/components/CodeWindow';
import { Nav } from '@/components/Nav';
import { vscodeInstall } from '@/lib/examples';

const items = [
  { icon: Highlighter, title: 'Syntax highlight', text: 'Keyword seperti taroh, nyablak, kalo, jurus, balikin, muat langsung kebaca.' },
  { icon: Keyboard, title: 'Snippet cepat', text: 'Ketik prefix seperti taroh, kalo, jurus, ulang, globals, lalu tab.' },
  { icon: Braces, title: 'Bracket support', text: 'Auto close bracket, comment line, dan indentation untuk blok Bekasi Lang.' },
  { icon: FileCode2, title: '.bsl dan .bls', text: 'Dua extension utama langsung dikenali sebagai bahasa Bekasi Lang.' }
];

export default function ExtensionPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 md:grid-cols-[.95fr_1.05fr] md:items-center">
          <div>
            <p className="font-bold uppercase tracking-[.24em] text-orange-600">VS Code Extension</p>
            <h1 className="mt-3 font-display text-5xl font-black tracking-tight md:text-6xl">File `.bsl` dan `.bls` jadi enak dibaca.</h1>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              Extension ini fokus ke hal yang paling kepake dulu: highlight, snippet, comment, bracket, dan konfigurasi bahasa.
            </p>
          </div>
          <CodeWindow title="extension install" code={vscodeInstall} />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-black/10 bg-white/75 p-5 shadow-xl shadow-orange-500/10 transition hover:-translate-y-1">
                <Icon className="mb-4 text-orange-600" size={28} />
                <h2 className="font-display text-xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-black/10 bg-zinc-950 p-6 text-white shadow-2xl shadow-rose-500/20">
            <PlugZap className="mb-5 text-orange-300" size={34} />
            <h2 className="font-display text-3xl font-black">Cara package jadi VSIX</h2>
            <p className="mt-3 leading-7 text-orange-50/75">
              Zip extension yang aku buat sudah berisi source extension. Kalau mau dijadikan file `.vsix`, jalankan command ini dari folder extension.
            </p>
            <pre className="mt-5 overflow-auto rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-7 text-orange-50"><code>{`npm install -g @vscode/vsce
vsce package`}</code></pre>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-xl shadow-violet-500/10">
            <PackageOpen className="mb-5 text-violet-600" size={34} />
            <h2 className="font-display text-3xl font-black">Isi extension</h2>
            <ul className="mt-4 space-y-3 leading-7 text-zinc-700">
              <li><b>package.json</b> untuk kontribusi language VS Code.</li>
              <li><b>syntaxes/bekasi.tmLanguage.json</b> untuk grammar highlight.</li>
              <li><b>snippets/bekasi.code-snippets</b> untuk template kode cepat.</li>
              <li><b>language-configuration.json</b> untuk bracket, comment, dan auto close.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-xl shadow-orange-500/10">
          <div className="flex flex-wrap items-center gap-3">
            <Code2 className="text-orange-600" size={28} />
            <h2 className="font-display text-3xl font-black">Snippet yang tersedia</h2>
          </div>
          <pre className="mt-5 overflow-auto rounded-2xl bg-zinc-950 p-4 text-sm leading-7 text-orange-50"><code>{`taroh  -> taroh nama = "value"
nyablak -> nyablak("pesan")
kalo   -> kalo kondisi { ... } kalo_kagak { ... }
jurus  -> jurus nama(parameter) { balikin hasil }
ulang  -> ulang 5 { ... }
globals -> muat "../globals/default.bls"`}</code></pre>
        </div>
      </section>
    </main>
  );
}
