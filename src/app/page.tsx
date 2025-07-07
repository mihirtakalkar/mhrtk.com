import { Github, Linkedin, Film } from "lucide-react";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero / Intro Section */}
      <main className="min-h-screen grid place-items-center p-8 sm:p-20 text-white font-medium text-center">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            mihir's personal website
          </h1>

          <p className="text-white/70 text-base sm:text-lg">
            EECS @ UC Berkeley • SDE Intern @ Amazon
          </p>

          <p className="text-white/50 text-sm sm:text-base font-mono">
            mihirtakalkar AT berkeley.edu
          </p>

          <nav aria-label="Social Links" className="mt-6">
            <ul className="flex justify-center gap-6 text-white/70 hover:text-white transition">
              <li>
                <a
                  href="https://github.com/mihirtakalkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 hover:scale-110 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/mihirtakalkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 hover:scale-110 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://letterboxd.com/mhrtk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Letterboxd"
                >
                  <Film className="h-5 w-5 hover:scale-110 transition-transform" />
                </a>
              </li>
            </ul>
          </nav>

          <footer className="text-sm text-white/30 mt-10">
            © {new Date().getFullYear()} mhrtk
          </footer>
        </div>
      </main>

      {/* Section Placeholders */}
      <section id="projects" className="min-h-[60vh] px-8 py-20 text-white scroll-mt-24">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Projects</h2>
        <p className="text-white/60">This is a placeholder for projects.</p>
      </section>

      <section id="experience" className="min-h-[60vh] px-8 py-20 text-white scroll-mt-24">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Experience</h2>
        <p className="text-white/60">This is a placeholder for experience.</p>
      </section>

      <section id="hobbies" className="min-h-[60vh] px-8 py-20 text-white scroll-mt-24">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Hobbies</h2>
        <p className="text-white/60">This is a placeholder for hobbies.</p>
      </section>
    </>
  );
}