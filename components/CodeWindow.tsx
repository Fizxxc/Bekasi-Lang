export function CodeWindow({ title, code }: { title: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-zinc-950 shadow-2xl shadow-orange-500/20">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <span className="font-display text-sm text-orange-100">{title}</span>
      </div>
      <pre className="code-scroll max-h-[440px] overflow-auto p-5 text-sm leading-7 text-orange-50 md:text-base">
        <code>{code}</code>
      </pre>
    </div>
  );
}
