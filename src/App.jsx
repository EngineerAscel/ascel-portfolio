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
  { label: 'Consulting', href: '#consulting', icon: 'consulting' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInquirySubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ascelrayg@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) {
        throw new Error('Inquiry submission failed');
      }

      event.currentTarget.reset();
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <div
      id="top"
      data-theme={isDark ? 'dark' : 'light'}
      className={`relative flex min-h-screen font-sans transition-colors duration-300 ${
        isDark ? 'bg-[#0b0f14] text-zinc-100' : 'bg-white text-zinc-900'
      } selection:bg-zinc-200`}
    >
      <div
        className={`fixed inset-0 z-0 pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(#2a2f38_1px,transparent_1px)] [background-size:20px_20px] opacity-80'
            : 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60'
        }`}
      ></div>

      <button
        type="button"
        aria-label="Toggle light and dark mode"
        onClick={() => setIsDark((prev) => !prev)}
        className={`fixed right-4 top-[calc(4.5rem+env(safe-area-inset-top))] z-30 flex h-10 w-10 items-center justify-center rounded-full border text-base shadow-sm transition-all duration-200 hover:scale-105 md:top-[calc(1rem+env(safe-area-inset-top))] md:h-12 md:w-12 md:text-lg ${
          isDark
            ? 'border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700'
            : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'
        }`}
      >
        {isDark ? '☀' : '☾'}
      </button>

      <aside className={`hidden md:flex flex-col w-64 lg:w-72 h-screen fixed left-0 top-0 border-r z-10 backdrop-blur-sm p-8 ${isDark ? 'border-zinc-800 bg-[#111827]/90' : 'border-zinc-100 bg-white/90'}`}>
        <Sidebar />
      </aside>

      <main className="flex-1 w-full md:ml-64 lg:ml-72 relative z-10">
        <div
          className={`md:hidden sticky top-0 z-40 border-b backdrop-blur-sm ${
            isDark ? 'border-zinc-800 bg-[#0b0f14]/90' : 'border-zinc-200 bg-white/90'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a
              href="#top"
              className={`font-mono text-lg font-bold tracking-tight ${
                isDark ? 'text-zinc-100' : 'text-zinc-900'
              }`}
            >
              Ascel Ray.
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`relative z-50 flex h-9 w-9 items-center justify-center rounded-full border transition ${
                isDark
                  ? 'border-zinc-700 bg-zinc-800 text-zinc-200 hover:text-zinc-50'
                  : 'border-zinc-200 bg-white text-zinc-700 hover:text-zinc-900'
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {menuOpen && (
            <div
              className={`border-t px-4 py-4 shadow-sm ${
                isDark ? 'border-zinc-800 bg-[#0b0f14]' : 'border-zinc-200 bg-white'
              }`}
            >
              <nav className={`flex flex-col gap-3 font-mono text-sm ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {mobileNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2.5 transition ${
                      isDark ? 'text-zinc-300 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <span className={isDark ? 'text-zinc-400' : 'text-zinc-400'}>{iconMap[link.icon]}</span>
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

          <section id="consulting" className="space-y-5">
            <div className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-3">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                Consulting Inquiry
              </div>
              <a
                href="mailto:ascelrayg@gmail.com?subject=Consulting%20inquiry"
                aria-label="Email inquiry"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-300 bg-white text-zinc-700 transition hover:bg-zinc-50"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                  <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" strokeLinejoin="round" />
                  <path d="m5 7 7 6 7-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
                tell me about it
              </h3>

              <p className="max-w-[40rem] text-sm leading-relaxed text-zinc-600">
                Share the essentials and I&apos;ll reply with next steps. The more context you include,
                the more useful my first response can be.
              </p>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleInquirySubmit}>
              <input type="hidden" name="_subject" value="New consulting inquiry" readOnly />
              <input type="hidden" name="_captcha" value="true" readOnly />
              <input type="hidden" name="_template" value="table" readOnly />
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                  <span className="mb-1.5 flex items-center gap-1">
                    Name <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="consulting-field w-full rounded-md border border-zinc-300 bg-[#f3f3f1] px-3 py-2 text-sm text-zinc-800 placeholder:text-xs placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none"
                  />
                </label>

                <label className="block text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                  <span className="mb-1.5 flex items-center gap-1">
                    Email <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="consulting-field w-full rounded-md border border-zinc-300 bg-[#f3f3f1] px-3 py-2 text-sm text-zinc-800 placeholder:text-xs placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none"
                  />
                </label>

                <label className="block text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                  <span className="mb-1.5">Company / Organization</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Optional"
                    className="consulting-field w-full rounded-md border border-zinc-300 bg-[#f3f3f1] px-3 py-2 text-sm text-zinc-800 placeholder:text-xs placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none"
                  />
                </label>

                <label className="block text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                  <span className="mb-1.5 flex items-center gap-1">
                    What can I help with? <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="help"
                    required
                    placeholder="e.g. AI workshop, product build, fractional CTO"
                    className="consulting-field w-full rounded-md border border-zinc-300 bg-[#f3f3f1] px-3 py-2 text-sm text-zinc-800 placeholder:text-xs placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none"
                  />
                </label>

                <label className="block text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                  <span className="mb-1.5">Budget Range</span>
                  <div className="relative">
                    <select name="budget" className="consulting-field w-full appearance-none rounded-md border border-zinc-300 bg-[#f3f3f1] px-3 py-2 text-sm text-zinc-700 focus:border-zinc-500 focus:outline-none">
                      <option className="text-zinc-700">Select one (optional)</option>
                      <option>Under $5k</option>
                      <option>$5k - $15k</option>
                      <option>$15k - $30k</option>
                      <option>$30k+</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-zinc-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4">
                        <path d="m7 10 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </label>

                <label className="block text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                  <span className="mb-1.5">Ideal Timeline</span>
                  <input
                    type="text"
                    name="timeline"
                    placeholder="e.g. October, next quarter, flexible"
                    className="consulting-field w-full rounded-md border border-zinc-300 bg-[#f3f3f1] px-3 py-2 text-sm text-zinc-800 placeholder:text-xs placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none"
                  />
                </label>
              </div>

              <label className="block text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                <span className="mb-1.5 flex items-center gap-1">
                  Project details <span className="text-red-500">*</span>
                </span>
                <textarea
                  rows="4"
                  name="details"
                  required
                  placeholder="What are you working on, who is it for, and what would a successful outcome look like?"
                  className="consulting-field w-full resize-none rounded-md border border-zinc-300 bg-[#f3f3f1] px-3 py-2 text-sm text-zinc-800 placeholder:text-xs placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none"
                />
              </label>

              <div className="flex flex-col gap-3 border-t border-zinc-200 pt-3 md:flex-row md:items-center md:justify-between">
                <p className="text-xs text-zinc-500">
                  Please don&apos;t include passwords, API keys, or other sensitive information.
                </p>

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                  <p className="text-xs text-zinc-500">
                    Prefer email? <a href="mailto:ascelrayg@gmail.com" className="text-zinc-800 underline">ascelrayg@gmail.com</a>
                  </p>

                  <button
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-zinc-800"
                  >
                    {submitStatus === 'sending' ? 'Sending...' : 'Send inquiry'}
                    {submitStatus !== 'sending' && <span className="ml-2 text-lg">→</span>}
                  </button>
                </div>
              </div>
              {submitStatus === 'success' && (
                <p className="text-xs text-emerald-600" role="status">
                  Thanks, your inquiry was sent successfully.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-xs text-red-600" role="alert">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;