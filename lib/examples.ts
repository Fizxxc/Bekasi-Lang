export const helloWorld = `muat "../globals/default.bls"

taroh nama = "Bocil Tambun"
taroh mood = "gaskeun"
taroh stack = [".bsl", ".bls", "npm", "vscode"]

nyablak(salam(nama))
nyablak("Mood hari ini: " + mood)
nyablak("File utama: " + stack[0])

kalo 18 >= 17 dan mood == "gaskeun" {
  nyablak("Udah bisa KTP, lanjut deploy bang!")
} kalo_kagak {
  nyablak("Santai dulu, rapihin globals dulu.")
}`;

export const countdown = `taroh i = 3
selagi i > 0 {
  nyablak("otw jalan: " + i)
  i = i - 1
}

ulang 2 {
  nyablak("cek sekali lagi, biar kagak zonk")
}

nyablak("sampe juga, cuy!")`;

export const globalsFile = `# globals/default.bls
jurus salam(nama) {
  balikin "Oi " + nama + ", ape kabar? Gaskeun!"
}

jurus labelin(teks) {
  balikin "[BEKASI MODE] " + teks
}

jurus mantap(pesan) {
  nyablak("🔥 " + pesan + " 🔥")
}`;

export const installSnippet = `npm install bekasi-lang@latest
npx bekasi init warung-logika
cd warung-logika
npx bekasi run src/index.bsl`;

export const platformInstall = {
  windowsExe: `Download bekasi-lang-windows-installer.zip
Extract zip-nya
Double click install-bekasi-lang.exe
Buka terminal baru
bekasi --help`,
  windowsNpm: `winget install OpenJS.NodeJS.LTS
npm install -g bekasi-lang@latest
bekasi init warung-logika
bekasi run warung-logika/src/index.bsl`,
  macos: `brew install node
npm install -g bekasi-lang@latest
bekasi init warung-logika
bekasi run warung-logika/src/index.bsl`,
  linux: `sudo apt install nodejs npm
npm install -g bekasi-lang@latest
bekasi init warung-logika
bekasi run warung-logika/src/index.bsl`
};

export const vscodeInstall = `Download bekasi-lang-vscode-extension.zip
Extract folder extension-nya
Buka VS Code
Extensions > ... > Install from VSIX atau jalankan vsce package dulu
Buka file .bsl / .bls`;
