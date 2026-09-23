export default function Stack() {
  const interests = [
    "Web Development", "UI/UX Design", "Computer Hardware", 
    "Mobile Application", "Technical Support", "Networking"
  ];

  return (
    <section className="space-y-8" id="stack">
      <div className="flex items-center gap-4 text-sm font-mono text-zinc-400 mb-8">
        <span>04 — stack & tools</span>
        <div className="h-px bg-zinc-200 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Tech Stack */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-zinc-900">Tech Stack</h3>
          <ul className="text-sm text-zinc-500 font-mono space-y-2">
            <li>Html / Css / JavaScript</li>
            <li>React / Node.js</li>
            <li>Php / SupaBase / MySql (Xampp)</li>
            <li>C++ / Java / Python</li>
          </ul>
        </div>

        {/* Tools & AI */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-zinc-900">Tools & AI</h3>
          <ul className="text-sm text-zinc-500 font-mono space-y-2">
            <li>Visual Studio Code</li>
            <li>Git / GitHub</li>
            <li>ChatGPT / Gemini / Co Pilot</li>
          </ul>
        </div>

        {/* Interests */}
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-sm font-medium text-zinc-900 mb-3">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <span key={item} className="px-3 py-1.5 bg-zinc-100/50 border border-zinc-200 text-zinc-600 text-xs font-mono rounded-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}