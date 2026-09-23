import { useRef, useState } from 'react';
import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';
import cert4 from '../assets/cert4.jpg';
import cert6 from '../assets/cert6.jpg';
import cert7 from '../assets/cert7.jpg';
import cert8 from '../assets/cert8.jpg';

const certifications = [
  {
    title: 'Certificate of Attendance',
    tag: 'Event',
    date: '2026',
    image: cert1,
    description: 'Participant in the Marketing ME Live event at Rizal Technological University - Mandaluyong.',
  },
  {
    title: 'Certificate of Attendance',
    tag: 'Event',
    date: '2026',
    image: cert2,
    description: 'Participant in the Marketing ME Live event at Rizal Technological University - Mandaluyong.',
  },
  {
    title: 'Academic Achievement',
    tag: 'Recognition',
    date: '2024',
    image: cert3,
    description: 'Awarded for consistent achievement and academic excellence in pursuit of the BSIT program.',
  },
  {
    title: 'Best in Work Immersion',
    tag: 'Immersion',
    date: '2023',
    image: cert4,
    description: 'Recognized as best in work immersion for exemplary performance and initiative.',
  },
  {
    title: 'Cloud Kickoff Assembly',
    tag: 'Cloud',
    date: '2026',
    image: cert6,
    description: 'Participated in a cloud fundamentals learning session focused on practical technology education.',
  },
  {
    title: 'Certificate of Participation',
    tag: 'Learning',
    date: '2026',
    image: cert7,
    description: 'Completed a digital learning participation program focused on cloud and technology awareness.',
  },
  {
    title: 'Certificate of Participation',
    tag: 'Learning',
    date: '2026',
    image: cert8,
    description: 'Completed a digital learning participation program focused on Empowering IT Students for Environment Action.',
  },
];

export default function Certification() {
  const scrollRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const scrollCards = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleCertSelect = (cert, closeGallery = false) => {
    setSelectedCert(cert);
    if (closeGallery) setShowAll(false);
  };

  return (
    <>
      <section className="space-y-8" id="certification">
        <div className="mb-8 flex items-center justify-between gap-4 text-sm font-mono text-zinc-400">
          <div className="flex flex-1 items-center gap-4">
            <span>03 — certifications</span>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-900"
          >
            ALL CERT ↗
          </button>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll certificates left"
            onClick={() => scrollCards('left')}
            className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-lg text-zinc-600 shadow-sm transition-all duration-200 ease-out hover:scale-110 hover:shadow-md hover:text-zinc-900"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pl-10 pr-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {certifications.map((cert) => (
              <article
                key={`${cert.title}-${cert.date}`}
                onClick={() => handleCertSelect(cert, true)}
                className="group min-w-[240px] max-w-[240px] cursor-pointer rounded-[22px] border border-zinc-200 bg-zinc-50 p-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                    {cert.tag}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">{cert.date}</span>
                </div>

                <div className="mb-4 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="dark-img h-24 w-full object-cover transition-all duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-medium text-zinc-900">{cert.title}</h3>
                  <p className="text-sm text-zinc-600">{cert.description}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll certificates right"
            onClick={() => scrollCards('right')}
            className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-lg text-zinc-600 shadow-sm transition-all duration-200 ease-out hover:scale-110 hover:shadow-md hover:text-zinc-900"
          >
            ›
          </button>
        </div>
      </section>

      {showAll && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-3 py-4">
          <div className="relative w-full max-w-[1000px] rounded-[20px] border border-zinc-200 bg-[#f3f3f1] p-3 shadow-2xl md:p-4">
            <button
              type="button"
              onClick={() => setShowAll(false)}
              className="absolute right-4 top-4 h-7 w-7 rounded-full border border-zinc-200 bg-white text-sm text-zinc-500 transition hover:text-zinc-900"
            >
              ✕
            </button>

            <div className="mb-4 flex items-center justify-between gap-4 pr-8">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">certifications</p>
                <h2 className="mt-2 text-2xl font-bold text-zinc-900">All certificates</h2>
              </div>
            </div>

            <div className="max-h-[72vh] overflow-y-auto pr-1">
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {certifications.map((cert) => (
                  <button
                    key={`${cert.title}-${cert.date}-grid`}
                    type="button"
                    onClick={() => handleCertSelect(cert)}
                    className="group rounded-[16px] border border-zinc-200 bg-white p-2.5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mb-3 overflow-hidden rounded-[12px] border border-zinc-200 bg-zinc-100">
                      <img src={cert.image} alt={cert.title} className="h-28 w-full object-cover" />
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500">{cert.tag}</span>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-400">{cert.date}</span>
                    </div>

                    <h3 className="mt-3 text-base font-medium text-zinc-900">{cert.title}</h3>
                    <p className="mt-2 text-xs text-zinc-600">{cert.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                      <span>verify</span>
                      <span>›</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedCert && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-3 py-4">
          <div className="relative w-full max-w-[760px] rounded-[18px] border border-zinc-200 bg-white p-3 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute right-3 top-3 h-7 w-7 rounded-full border border-zinc-200 bg-white text-sm text-zinc-500 transition hover:text-zinc-900"
            >
              ✕
            </button>

            <div className="mt-5 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="h-full max-h-[50vh] w-full rounded-xl object-contain bg-zinc-100"
              />

              <div className="flex flex-col justify-center space-y-2">
                <span className="inline-flex w-fit rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                  {selectedCert.tag}
                </span>
                <h3 className="text-lg font-medium text-zinc-900">{selectedCert.title}</h3>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">{selectedCert.date}</p>
                <p className="text-sm text-zinc-600">{selectedCert.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
