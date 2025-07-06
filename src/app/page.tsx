export default function Home() {
  return (
    <main className="min-h-screen grid grid-rows-[auto_auto_auto_1fr_auto] items-center justify-items-center gap-4 p-8 sm:p-20 font-semibold text-white">
      <h1 className="text-xl sm:text-2xl">mihir's personal website</h1>

      <p className="text-sm sm:text-base text-white/70">
        EECS @ UC Berkeley • SDE Intern @ Amazon
      </p>

      <p className="text-xs sm:text-sm text-white/50">
        Reach out at <span className="font-mono">mihirtakalkar AT berkeley.edu</span>
      </p>

      <nav aria-label="Social Links" className="mt-6">
        <ul className="space-y-4 text-center">
          <li>
            <a
              href="https://github.com/mihirtakalkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mihirtakalkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://letterboxd.com/mhrtk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Letterboxd
            </a>
          </li>
        </ul>
      </nav>

      <footer className="text-sm opacity-50 mt-10">
        © {new Date().getFullYear()} mhrtk
      </footer>
    </main>
  );
}