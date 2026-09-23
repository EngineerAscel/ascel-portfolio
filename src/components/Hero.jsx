import portrait from '../assets/portrait.jpg';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row gap-12 items-start">
      <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 self-center md:self-start bg-zinc-100 rounded-sm overflow-hidden flex items-center justify-center">
        <img
          src={portrait}
          alt="Ascel Ray Glimer portrait"
          className="dark-img h-full w-full object-cover"
        />
      </div>
      
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-5xl font-mono tracking-tight text-zinc-900">Ascel Ray Glimer</h1>
          <p className="text-sm font-mono text-red-600 mt-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Currenltly working with SP Madrid & Associates as an IT Support Intern
          </p>
        </div>
        
        <div className="space-y-4 text-justify text-zinc-600 leading-relaxed max-w-lg text-sm">
          <p>
            I'm a 4th-year BSIT student at Rizal Technological University with a focus on web development. 
          </p>
          <p>
            My journey in tech began with curiosity—taking apart old computers and learning how websites were made. Today, I enjoy building clean, modern interfaces and solving real problems through thoughtful code using tools like React, Node.js, and Supabase.
          </p>
        </div>

        <div className="flex gap-4 font-mono text-xs text-zinc-400 mt-4">
          <a href="#" className="hover:text-zinc-900 transition-colors">github ↗</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">linkedin ↗</a>
        </div>

        <div className="mt-2">
          <a
            href="/Ascel-Ray-Glimer-CV.pdf"
            download="Ascel-Ray-Glimer-CV.pdf"
            className="inline-flex items-center justify-center rounded-md border border-red-500 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-red-600 transition-colors hover:bg-red-100"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}