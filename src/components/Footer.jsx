export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 pt-6 pb-10 text-[11px] font-mono text-zinc-500">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ascel Ray D. Glimer</p>
        <p className="text-zinc-400">Made with React + Vite</p>
      </div>
    </footer>
  );
}