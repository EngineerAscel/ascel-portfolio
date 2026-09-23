import { useState } from 'react';
import Sidebar, { iconMap } from './components/Sidebar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Stack from './components/Stack';
import Certification from './components/Certification';
import stellarExp from './assets/StellarExp.jpg';
import stellarExp1 from './assets/StellarExp1.jpg';
import stellarExp2 from './assets/StellarExp2.jpg';

const galleryImages = [
  { src: stellarExp, alt: 'Gallery photo 1' },
  { src: stellarExp1, alt: 'Gallery photo 2' },
  { src: stellarExp2, alt: 'Gallery photo 3' },
];

const mobileNavLinks = [
  { label: 'Projects', href: '#projects', icon: 'briefcase' },
  { label: 'Experience', href: '#experience', icon: 'timeline' },
  { label: 'Certification', href: '#certification', icon: 'badge' },
  { label: 'Stack', href: '#stack', icon: 'layers' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="flex min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>

      <aside className="hidden md:flex flex-col w-64 lg:w-72 h-screen fixed left-0 top-0 border-r border-zinc-100 z-10 bg-white/90 backdrop-blur-sm p-8">
        <Sidebar />
      </aside>

      <main className="flex-1 w-full md:ml-64 lg:ml-72 relative z-10">
        <div className="md:hidden sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="font-mono text-lg font-bold tracking-tight text-zinc-900">
              Ascel Ray.
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:text-zinc-900"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-zinc-200 bg-white px-4 py-4 shadow-sm">
              <nav className="flex flex-col gap-3 font-mono text-sm text-zinc-600">
                {mobileNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2.5 transition hover:text-zinc-900"
                  >
                    <span className="text-zinc-400">{iconMap[link.icon]}</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>

        <div className="max-w-3xl mx-auto px-4 py-8 md:px-6 md:py-24 space-y-20 md:space-y-32">
          <Hero />
          <Projects />
          <Experience />
          <Certification />
          <Stack />
          <Stats />
          <section className="space-y-6" id="photos">
            <div className="flex items-center gap-4 text-sm font-mono text-zinc-400">
              <span>Photos</span>
              <div className="h-px bg-zinc-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {galleryImages.map((image) => (
                <div
                  key={image.alt}
                  className="h-56 rounded-sm border border-zinc-200 bg-zinc-100 overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;