const navLinks = [
  { label: 'Projects', href: '#projects', icon: 'briefcase' },
  { label: 'Experience', href: '#experience', icon: 'timeline' },
  { label: 'Certification', href: '#certification', icon: 'badge' },
  { label: 'Stack', href: '#stack', icon: 'layers' },
  { label: 'Consulting', href: '#consulting', icon: 'consulting' },
];

const sidebarStats = [
  { label: 'Community', value: 'StellarPH' },
  { label: 'Frontend', value: 'React / Node' },
  { label: 'Backend', value: 'SQL / SupaBase' },
  { label: 'Photos', value: 'Gallery' },
];

export const iconMap = {
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5">
      <path d="M8 7V6.5A1.5 1.5 0 0 1 9.5 5h5A1.5 1.5 0 0 1 16 6.5V7" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M4 11h16" strokeLinecap="round" />
    </svg>
  ),
  timeline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5">
      <path d="M4 19h16" strokeLinecap="round" />
      <path d="M7 16V9" strokeLinecap="round" />
      <path d="M12 16V5" strokeLinecap="round" />
      <path d="M17 16v-7" strokeLinecap="round" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5">
      <path d="M12 3.8 4.8 6.4v5.2c0 3.4 2.1 6.4 7.2 8.6 5.1-2.2 7.2-5.2 7.2-8.6V6.4L12 3.8Z" strokeLinejoin="round" />
      <path d="m9.5 12 1.6 1.6 3.4-3.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5">
      <path d="m12 4 8 4-8 4-8-4 8-4Z" strokeLinejoin="round" />
      <path d="m4 12 8 4 8-4" strokeLinejoin="round" />
      <path d="m4 16 8 4 8-4" strokeLinejoin="round" />
    </svg>
  ),
  consulting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5">
      <path d="M5 18.5V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v7A2.5 2.5 0 0 1 16.5 17H10l-5 3v-1.5Z" strokeLinejoin="round" />
      <path d="M8.5 10h7M8.5 13h5" strokeLinecap="round" />
    </svg>
  ),
};

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="space-y-12">
        <a href="#top" className="block font-mono text-sm font-bold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors">
          Ascel Ray.
        </a>
        
        <nav className="flex flex-col gap-4 text-sm text-zinc-500 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2.5 hover:text-zinc-900 transition-colors"
            >
              <span className="text-zinc-400">{iconMap[link.icon]}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="space-y-4 border-t border-zinc-200 pt-6">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">Stats</p>
          <div className="space-y-3">
            {sidebarStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-sm font-mono text-zinc-900">{stat.value}</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-xs font-mono text-zinc-400">
          <p>Pasig City, Philippines</p>
          <p className="mt-2">For work, collabs & everything else, reach me at</p>
        </div>
        <div className="flex flex-col gap-1">
          <a href="mailto:your.email@example.com" className="text-sm font-mono text-zinc-900 hover:underline underline-offset-4">
            ascelrayg@gmail.com
          </a>
          <a href="tel:09686465621" className="text-sm font-mono text-zinc-500 hover:text-zinc-900 transition-colors">
            09686465621
          </a>
        </div>
      </div>
    </div>
  );
}