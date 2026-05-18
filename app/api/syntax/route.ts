import { NextResponse } from 'next/server';
import { featureItems, syntaxItems } from '@/lib/syntax';

export function GET() {
  return NextResponse.json({
    name: 'Bekasi Lang',
    version: '0.4.0',
    extensions: ['.bsl', '.bls'],
    install: {
      npm: 'npm install bekasi-lang@latest',
      global: 'npm install -g bekasi-lang@latest',
      windows: 'install-bekasi-lang.exe'
    },
    pages: ['/docs', '/install', '/extension', '/playground', '/developer'],
    features: featureItems,
    syntax: syntaxItems
  });
}
