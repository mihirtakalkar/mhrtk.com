const gear = [
  { name: "Laptop", detail: "MacBook Pro 14\" (M2 Pro, 2023)" },
  { name: "Phone", detail: "iPhone 14 Pro" },
  { name: "Keyboard", detail: "Anne Pro 2 (Gateron Browns)" },
  { name: "Mouse", detail: "Logitech G502 X Lightspeed" },
  { name: "Audio", detail: "AirPods Pro (1st gen)" },
  { name: "Pack", detail: "Aer Travel Pack 3 X-Pac Mini" },
];

export default function Gear() {
  return (
    <main className="flex-grow">
      <section className="max-w-3xl mx-auto px-6 sm:px-10 py-12 text-white space-y-6">
        <div className="space-y-2">
          <h1 className="font-display text-3xl font-semibold">current gear</h1>
          <p className="text-sm text-white/70">Hardware and daily peripherals I rely on.</p>
        </div>

        <div className="space-y-3 divide-y divide-white/10">
          {gear.map((item) => (
            <div key={item.name} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <span className="text-sm font-semibold text-white">{item.name}</span>
              <span className="text-sm text-white/80 text-right">{item.detail}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
