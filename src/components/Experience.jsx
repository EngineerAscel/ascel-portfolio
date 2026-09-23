export default function Experience() {
  return (
    <section className="space-y-8" id="experience">
      <div className="flex items-center gap-4 text-sm font-mono text-zinc-400 mb-8">
        <span>02 — experience</span>
        <div className="h-px bg-zinc-200 flex-1"></div>
      </div>

      <div className="space-y-12">
        
        <div className="flex flex-col md:flex-row gap-6 items-baseline justify-between">
          <div className="flex flex-col gap-2 max-w-md">
            <h3 className="text-lg font-medium text-zinc-900">IT Support Intern</h3>
            <p className="text-sm font-mono text-zinc-500">SP Madrid & Associates</p>
            <p className="text-sm text-zinc-600 mt-2">
              Maintained hardware, deployed workstations, and provided technical support across the IT department during On-the-Job Training.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400 whitespace-nowrap">2026</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-baseline justify-between">
          <div className="flex flex-col gap-2 max-w-md">
            <h3 className="text-lg font-medium text-zinc-900">Accounting Clerk / Data Encoder</h3>
            <p className="text-sm font-mono text-zinc-500">168 FCC Formula Callcenter</p>
            <p className="text-sm text-zinc-600 mt-2">
              Managed data entry and processed accounting records to maintain accurate financial tracking.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400 whitespace-nowrap">2025</span>
        </div>

      </div>
    </section>
  );
}