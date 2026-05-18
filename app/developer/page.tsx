import { Github, Mail, MessageCircle, Sparkles } from 'lucide-react';
import { Nav } from '@/components/Nav';

const contacts = [
  {
    label: 'GitHub',
    value: 'Fizxxc',
    href: 'https://github.com/Fizxxc',
    icon: Github
  },
  {
    label: 'WhatsApp',
    value: '+6288991114939',
    href: 'https://wa.me/6288991114939',
    icon: MessageCircle
  },
  {
    label: 'Email',
    value: 'fizzx404@gmail.com',
    href: 'mailto:fizzx404@gmail.com',
    icon: Mail
  }
];

export default function DeveloperPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[.9fr_1.1fr] md:items-start md:py-20">
        <div className="rounded-[2rem] border border-black/10 bg-zinc-950 p-7 text-white shadow-2xl shadow-orange-500/20 md:sticky md:top-28">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-400 via-rose-500 to-violet-600 font-display text-4xl font-black shadow-glow">
            FD
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-orange-100">
            <Sparkles size={16} /> Creator Profile
          </p>
          <h1 className="mt-5 font-display text-5xl font-black leading-none tracking-tight md:text-6xl">Fizzx Devv</h1>
          <p className="mt-5 text-lg leading-8 text-orange-50/80">
            Developer yang suka bikin project unik, nyoba hal baru, dan ngeracik ide lokal jadi karya digital yang bisa dipakai orang.
          </p>
          <div className="mt-7 rounded-3xl border border-white/10 bg-white/10 p-5">
            <p className="font-display text-2xl font-black">Bekasi Lang</p>
            <p className="mt-2 leading-7 text-orange-50/75">
              Dibuat biar belajar programming nggak harus selalu kaku. Syntax-nya santai, tampilannya rame, tapi fondasinya tetap rapi.
            </p>
          </div>
        </div>

        <div>
          <p className="font-bold uppercase tracking-[.24em] text-orange-600">Developer</p>
          <h2 className="mt-3 font-display text-5xl font-black tracking-tight md:text-6xl">Kenalan sama orang di balik project ini.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-700">
            Halaman ini dibuat simple: profil singkat, kontak resmi, dan info project biar orang gampang connect setelah mampir ke Bekasi Lang.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group rounded-3xl border border-black/10 bg-white/75 p-5 shadow-xl shadow-orange-500/10 transition hover:-translate-y-1 hover:bg-white"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 transition group-hover:rotate-6">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[.16em] text-zinc-500">{item.label}</p>
                      <p className="mt-1 font-display text-xl font-black">{item.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: 'Code', text: 'Suka bikin tools, web, dan eksperimen bahasa pemrograman kecil.' },
              { title: 'Design', text: 'Tampilan dibuat colorful, clean, dan enak dilihat di mobile.' },
              { title: 'Local vibe', text: 'Bawa rasa lokal ke project biar lebih punya identitas.' }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-lg shadow-rose-500/10">
                <h3 className="font-display text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
