export type SyntaxItem = {
  bekasi: string;
  meaning: string;
  example: string;
  vibe: string;
};

export const syntaxItems: SyntaxItem[] = [
  { bekasi: 'taroh', meaning: 'Bikin variabel', example: 'taroh nama = "Mamat"', vibe: 'nyimpen value' },
  { bekasi: 'nyablak()', meaning: 'Print output', example: 'nyablak("Halo Bekasi!")', vibe: 'ngomong ke layar' },
  { bekasi: 'tanyein()', meaning: 'Input user', example: 'taroh nama = tanyein("Nama: ")', vibe: 'nanya dulu' },
  { bekasi: 'kalo', meaning: 'Percabangan if', example: 'kalo umur >= 17 { ... }', vibe: 'pilih jalan' },
  { bekasi: 'kalo_kagak', meaning: 'Cabang else', example: '} kalo_kagak { ... }', vibe: 'plan B' },
  { bekasi: 'selagi', meaning: 'While loop', example: 'selagi i > 0 { ... }', vibe: 'muter terus' },
  { bekasi: 'ulang', meaning: 'Loop count', example: 'ulang 5 { nyablak("gas") }', vibe: 'repeat cepet' },
  { bekasi: 'jurus', meaning: 'Function', example: 'jurus tambah(a, b) { balikin a + b }', vibe: 'skill reusable' },
  { bekasi: 'balikin', meaning: 'Return value', example: 'balikin hasil', vibe: 'pulangin hasil' },
  { bekasi: 'muat', meaning: 'Import .bsl/.bls', example: 'muat "globals/default.bls"', vibe: 'ambil helper' },
  { bekasi: 'iye / kagak', meaning: 'Boolean', example: 'taroh aktif = iye', vibe: 'yes no lokal' },
  { bekasi: 'dan / atau / bukan', meaning: 'Logical operator', example: 'kalo aktif dan bukan error { ... }', vibe: 'logika santai' },
  { bekasi: '[]', meaning: 'Array dan index', example: 'taroh data = ["a", "b"]', vibe: 'list simple' },
  { bekasi: 'bekasi doctor', meaning: 'Cek instalasi CLI', example: 'bekasi doctor', vibe: 'cek kesehatan' },
  { bekasi: 'bekasi globals', meaning: 'Lihat globals aktif', example: 'bekasi globals', vibe: 'cek helper' }
];

export const featureItems = [
  'File .bsl untuk program utama',
  'File .bls untuk globals dan helper',
  'CLI bekasi dan alias bsl',
  'Auto-load globals/default.bls',
  'Syntax highlight VS Code',
  'Windows installer launcher .exe',
  'Panduan install Windows, Linux, dan macOS',
  'API syntax untuk kebutuhan web docs'
];
