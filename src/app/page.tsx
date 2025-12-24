import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-grow">
      <section className="max-w-3xl mx-auto px-6 py-16 text-white space-y-6">
        <div className="space-y-2">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            mihir takalkar
          </h1>
          <div className="h-px w-20 bg-white/60" />
        </div>

        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
          I study EECS at UC Berkeley, working across systems, applied ML, and embedded software. This winter I will intern at Uber; previously, I spent time at Amazon and have contributed to research on campus. Feel free to reach out!
        </p>

        <div className="flex gap-4 text-sm text-white/80">
          <a
            href="mailto:mihirtakalkar@berkeley.edu"
            className="inline-flex items-center gap-2 hover:text-white transition"
          >
            <Mail className="h-5 w-5" />
            Email
          </a>
          <a
            href="https://github.com/mihirtakalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mihirtakalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
