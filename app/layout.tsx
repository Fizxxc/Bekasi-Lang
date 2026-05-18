import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bekasi Lang — Ngoding Rasa Bekasi',
  description: 'Website dokumentasi Bekasi Lang: .bsl untuk program, .bls untuk globals, install via npm, installer Windows, dan VS Code extension.',
  keywords: ['Bekasi Lang', 'programming language', 'Next.js', 'Fizzx Devv', 'bsl', 'bls', 'VS Code extension'],
  authors: [{ name: 'Fizzx Devv' }],
  openGraph: {
    title: 'Bekasi Lang — Ngoding Rasa Bekasi',
    description: 'Bahasa pemrograman kecil dengan syntax Betawi-Bekasi yang santai tapi tetap rapi.',
    type: 'website',
    locale: 'id_ID'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
