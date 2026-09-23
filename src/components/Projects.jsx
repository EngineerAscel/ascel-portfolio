const projectVideoUrl = 'https://www.youtube.com/watch?v=xBex4Ri0KD8&source_ve_path=MTc4NDI0';
const embedVideoUrl = 'https://www.youtube.com/embed/xBex4Ri0KD8?rel=0&source_ve_path=MTc4NDI0';

export default function Projects() {
  return (
    <section className="space-y-8" id="projects">
      <div className="mb-8 flex items-center gap-4 text-sm font-mono text-zinc-400">
        <span>01 — projects</span>
        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <div className="space-y-5">
        <article className="rounded-[18px] bg-transparent p-0 text-zinc-900">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[clamp(1.7rem,2.5vw,2.5rem)] font-black leading-none tracking-[-0.04em] text-zinc-900">
              1D Garage System
            </h3>
            <span className="pt-2 text-xs font-mono uppercase tracking-[0.16em] text-zinc-400">2024</span>
          </div>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
            Dashboard interface developed with Team Matatag 2.0 to track vehicles, revenue, and client records.
          </p>

          <div className="mt-5 overflow-hidden rounded-[18px] border border-zinc-200 bg-white px-2 py-2 shadow-[0_0_0_1px_rgba(24,24,27,0.02)]">
            <div className="aspect-video w-full overflow-hidden rounded-[10px] bg-zinc-950">
              <iframe
                src={embedVideoUrl}
                title="1D Garage System demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </article>

        <div className="flex justify-center">
          <a
            href={projectVideoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-900"
          >
            View on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}