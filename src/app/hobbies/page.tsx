import Link from "next/link";

export default function Hobbies() {
  return (
    <main className="flex-grow">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-5 text-white space-y-5">
        <h4 className="text-3xl font-serif font-semibold">hobbies</h4>
        <p className="text-white/70 leading-relaxed text-base sm:text-lg max-w-2xl">
          I'm drawn to atmospheric films like <em>Heat</em> and{" "}
          <em>Nightcrawler</em>. I spend my time hiking national parks—
          Yosemite, Rainier, Zion, and more. Lately, I’ve been exploring
          photography. I also enjoy building PCs and eating Thai food.
        </p>

        <div className="pt-4 flex flex-wrap gap-2 text-[13px]">
          <a
            href="https://letterboxd.com/mhrtk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-semibold text-white/80 hover:text-white hover:border-white/20 transition"
          >
            <span>letterboxd</span>
            <span aria-hidden className="text-[12px]">↗</span>
          </a>
          <Link
            href="/hobbies/gear"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-semibold text-white/80 hover:text-white hover:border-white/20 transition"
          >
            <span>current gear</span>
            <span aria-hidden className="text-[12px]">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
