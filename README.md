# Bekasi Lang Web

Website dokumentasi Bekasi Lang berbasis **Next.js App Router**. Desainnya colorful, copywriting-nya santai, dan source-nya tetap rapi buat dikembangin lagi.

## Halaman

```txt
/             landing page utama
/docs         dokumentasi syntax dan starter flow
/install      panduan install Windows, Linux, macOS, dan installer .exe
/extension    halaman VS Code extension
/playground   playground visual buat baca struktur kode
/developer    profil dan kontak Fizzx Devv
/api/syntax   API route Next.js berisi data syntax + fitur
```

Semua halaman memakai TypeScript/TSX dari Next.js. Tidak ada halaman HTML manual.

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build production

```bash
npm run build
npm start
```

## Struktur

```txt
bekasi-lang-web/
├─ app/
│  ├─ api/syntax/route.ts
│  ├─ developer/page.tsx
│  ├─ docs/page.tsx
│  ├─ extension/page.tsx
│  ├─ features/page.tsx
│  ├─ install/page.tsx
│  ├─ playground/page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
├─ lib/
└─ package.json
```

## Upload ke GitHub

```bash
git init
git add .
git commit -m "Update Bekasi Lang web"
gh repo create bekasi-lang-web --public --source=. --remote=origin --push
```

Atau buat repo manual di GitHub lalu:

```bash
git remote add origin https://github.com/USERNAME/bekasi-lang-web.git
git branch -M main
git push -u origin main
```

## Deploy ke Vercel

Project ini dipin ke Node.js 20.x lewat `package.json` supaya proses install di Vercel lebih stabil.

Pengaturan yang disarankan di Vercel:

    Framework Preset: Next.js
    Install Command: npm install --no-audit --no-fund
    Build Command: npm run build
    Output Directory: kosong / default

Kalau pernah gagal deploy, buka Vercel > Deployments > Redeploy > centang Clear Build Cache.
