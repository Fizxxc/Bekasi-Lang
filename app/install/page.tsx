import { Apple, Download, Laptop, MonitorDown, PackageCheck, TerminalSquare } from 'lucide-react';
import { CodeWindow } from '@/components/CodeWindow';
import { Nav } from '@/components/Nav';
import { platformInstall } from '@/lib/examples';

const cards = [
  {
    icon: MonitorDown,
    title: 'Windows .exe',
    text: 'Pilihan paling gampang buat Windows: extract zip installer, klik exe, lalu buka terminal baru.',
    code: platformInstall.windowsExe
  },
  {
    icon: TerminalSquare,
    title: 'Windows npm',
    text: 'Versi manual buat yang nyaman pakai terminal. Pastikan Node.js LTS sudah terpasang.',
    code: platformInstall.windowsNpm
  },
  {
    icon: Apple,
    title: 'macOS / MacBook',
    text: 'Pakai Homebrew buat Node.js, lalu install Bekasi Lang secara global lewat npm.',
    code: platformInstall.macos
  },
  {
    icon: Laptop,
    title: 'Linux',
    text: 'Install Node.js dan npm dari package manager, setelah itu CLI bekasi bisa dipakai global.',
    code: platformInstall.linux
  }
];

export default function InstallPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[.24em] text-orange-600">Install</p>
          <h1 className="mt-3 font-display text-5xl font-black tracking-tight md:text-6xl">Pilih cara install yang paling cocok.</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-700">
            Bekasi Lang jalan di atas Node.js. Buat Windows disiapin juga installer `.exe` kecil yang menjalankan install npm global secara otomatis.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-xl shadow-orange-500/10">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-black">{item.title}</h2>
                    <p className="mt-2 leading-7 text-zinc-700">{item.text}</p>
                  </div>
                </div>
                <pre className="mt-5 overflow-auto rounded-2xl bg-zinc-950 p-4 text-sm leading-7 text-orange-50"><code>{item.code}</code></pre>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[.9fr_1.1fr] md:items-start">
          <div className="rounded-[2rem] border border-black/10 bg-zinc-950 p-6 text-white shadow-2xl shadow-rose-500/20">
            <PackageCheck className="mb-5 text-orange-300" size={34} />
            <h2 className="font-display text-3xl font-black">Cek setelah install</h2>
            <p className="mt-3 leading-7 text-orange-50/75">
              Kalau terminal sudah dibuka ulang, command ini harus kebaca. Kalau belum, cek PATH Node.js/npm di sistem.
            </p>
            <pre className="mt-5 overflow-auto rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-7 text-orange-50"><code>{`bekasi --help
bekasi doctor
bekasi globals`}</code></pre>
          </div>
          <CodeWindow title="install target" code={`npm install -g bekasi-lang@latest
bekasi init warung-logika
bekasi run warung-logika/src/index.bsl`} />
        </div>

        <div className="mt-10 rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-xl shadow-violet-500/10">
          <div className="flex flex-wrap items-center gap-3">
            <Download className="text-violet-600" size={28} />
            <h2 className="font-display text-3xl font-black">Catatan buat release GitHub</h2>
          </div>
          <p className="mt-4 leading-8 text-zinc-700">
            Taruh zip installer Windows dan zip extension VS Code di GitHub Releases. Dari web ini, kamu tinggal arahkan tombol download ke asset release tersebut.
          </p>
        </div>
      </section>
    </main>
  );
}
