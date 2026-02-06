export default function Experience() {
  const jobs = [
    {
      title: "Software Engineering Intern",
      org: "Uber",
      location: "Sunnyvale, CA",
      duration: "Jan 2026 – Present",
      description: "Membership: causal inference, engagement levers, and applied ML infrastructure",
    },
    {
      title: "Software Development Engineer Intern",
      org: "Amazon",
      location: "Bellevue, WA",
      duration: "May 2025 – Aug 2025",
      description: "Connected Vehicle Testing Infrastructure",
    },
    {
      title: "Firmware Engineer",
      org: "Formula Electric at Berkeley",
      location: "Richmond, CA",
      duration: "Jan 2024 – Aug 2025",
      description: "STM32-based firmware for vehicle telemetry pipeline",
    },
    {
      title: "Machine Learning Researcher",
      org: "UC Berkeley",
      location: "Berkeley, CA",
      duration: "Sep 2024 – May 2025",
      description: "Predictive modeling for 3D printing with GNNs and CNNs · Sarah McMains Group",
      link: "https://github.com/mihirtakalkar/additivemodels",
    },
    {
      title: "Software Engineering Intern",
      org: "Tutti (SkyDeck)",
      location: "Santa Clara, CA",
      duration: "Jun 2024 – Aug 2024",
      description: "Built frontend and ML tools for tax intelligence platform",
    },
  ];

  return (
    <main className="flex-grow">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12 text-white space-y-6">
        <h4 className="text-3xl font-serif font-semibold">experience</h4>
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div key={idx} className="space-y-1.5">
              <h2 className="text-xl font-semibold text-white">
                {job.title} <span className="text-white/80">@ {job.org}</span>
              </h2>
              <p className="text-sm text-white/60">
                {job.duration} · {job.location}
              </p>
              <p className="text-white/70 text-sm">{job.description}</p>
              {"link" in job && job.link ? (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white/70 hover:text-white transition"
                >
                  <span>repo</span>
                  <span aria-hidden className="text-[11px]">↗</span>
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
