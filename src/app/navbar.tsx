import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent border-non">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-10 py-10 text-white font-medium">
        <Link
          href="/"
          className="text-lg font-semibold hover:text-slate-200 transition"
        >
          mhrtk
        </Link>
        <ul className="flex gap-6 text-sm">
          <Link
            href="/projects"
            className="relative group text-white transition-colors duration-150 hover:text-slate-200"
          >
            Projects
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-slate-400 transition-all duration-300 group-hover:w-full"
            style={{ backgroundColor: '#cba6f7' }}></span>
          </Link>
           <Link
            href="/experience"
            className="relative group text-white transition-colors duration-150 hover:text-slate-200"
          >
            Experience
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-slate-400 transition-all duration-300 group-hover:w-full" 
            style={{ backgroundColor: '#cba6f7' }}></span>
          </Link>
           <Link
            href="/hobbies"
            className="relative group text-white transition-colors duration-150 hover:text-slate-200"
          >
            Hobbies
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-slate-400 transition-all duration-300 group-hover:w-full"
            style={{ backgroundColor: '#cba6f7' }}></span>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
