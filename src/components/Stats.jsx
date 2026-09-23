export default function Stats() {
  return (
    <section className="border-t border-zinc-200 pt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono text-zinc-900">StellarPH ↗</span>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Community</span>
        </div>
        
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono text-zinc-900">React / Node ↗</span>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Frontend</span>
        </div>
        
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono text-zinc-900">SQL / SupaBase ↗</span>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Backend</span>
        </div>

      </div>
    </section>
  );
}