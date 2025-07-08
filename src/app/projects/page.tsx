export default function Projects() {
  const projects = [
    {
      title: "PintOS",
      tech: "C, GDB, File Systems, x86",
      description: "Built kernel threads, syscall dispatching, and custom file system logic.",
    },
    {
      title: "S1XT33N: Voice Controlled Car",
      tech: "Arduino, C++, Filters, PCA",
      description: "Developed voice-controlled car with motor control and firmware classification.",
    },
    {
      title: "Squarify",
      tech: "Next.js, TailwindCSS, MongoDB",
      description: "Group expense tracker with user auth, data modeling, and performance tuning.",
    },
  ];

  return (
    <main className="flex-grow">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-5 text-white space-y-5">
        <h4 className="text-3xl font-serif font-semibold">projects</h4>
        <div className="space-y-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="space-y-1">
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                {proj.title}
                <span className="text-white/60 font-normal"> · {proj.tech}</span>
              </h2>
              <p className="text-white/60 text-sm">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}