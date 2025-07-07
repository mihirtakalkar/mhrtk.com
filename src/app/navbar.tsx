import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent border-none">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-10 py-10 text-white font-medium">
        <Link href="/" className="text-lg font-semibold hover:text-white/80 transition">
          mhrtk
        </Link>
        <ul className="flex gap-6 text-sm">
          <Link href="/projects" className="hover:text-white/80 transition-colors duration-150">
              Projects
          </Link>
          <Link href="/experience" className="hover:text-white/80 transition-colors duration-150">
              Experience
            </Link>
          <Link href="/hobbies" className="hover:text-white/80 transition-colors duration-150">
              Hobbies
          </Link>
        </ul>
      </nav>
    </header>
  );
}