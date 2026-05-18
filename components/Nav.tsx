import Link from 'next/link';

const links = [
  { href: '/docs', label: 'Docs' },
  { href: '/install', label: 'Install' },
  { href: '/extension', label: 'VS Code' },
  { href: '/playground', label: 'Playground' },
  { href: '/developer', label: 'Developer' }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/65 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-xl font-black tracking-tight">
          <span className="gradient-text">Bekasi</span>Lang
        </Link>
        <div className="flex items-center gap-1 overflow-x-auto text-sm font-bold md:gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap rounded-full px-3 py-2 transition hover:bg-black/5 md:px-4">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
