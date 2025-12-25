import usa from "@/data/usa.geo.json";
import { geoAlbersUsa, geoPath } from "d3-geo";

const parks = [
  { name: "Yosemite", lat: 37.8651, lon: -119.5383 },
  { name: "Zion", lat: 37.2982, lon: -113.0263 },
  { name: "Mount Rainier", lat: 46.8523, lon: -121.7603 },
  { name: "Joshua Tree", lat: 33.8734, lon: -115.9010 },
  { name: "Olympic", lat: 47.8021, lon: -123.6044 },
  { name: "North Cascades", lat: 48.7718, lon: -121.2985 },
  { name: "Arches", lat: 38.7331, lon: -109.5925 },
  { name: "Bryce Canyon", lat: 37.5930, lon: -112.1871 },
  { name: "Grand Canyon", lat: 36.1069, lon: -112.1129 },
  { name: "Everglades", lat: 25.5366, lon: -80.7487 },
  { name: "Lassen Volcanic", lat: 40.4977, lon: -121.4207 },
  { name: "Crater Lake", lat: 42.9446, lon: -122.1090 },
  { name: "Haleakalā", lat: 20.7204, lon: -156.1552 },
  { name: "Hawaiʻi Volcanoes", lat: 19.4194, lon: -155.2885 },
];

const width = 1000;
const height = 600;
const mapPadding = 36;
const mapScale = (width - mapPadding * 2) / width;
const mapTransform = `translate(${mapPadding}, ${mapPadding}) scale(${mapScale})`;
const projection = geoAlbersUsa().fitSize([width, height], usa as any);
const pathGenerator = geoPath(projection);
const outlinePath = pathGenerator(usa as any) || "";

export default function Parks() {
  return (
    <main className="flex-grow">
      <section className="max-w-4xl mx-auto px-6 sm:px-10 py-12 text-white space-y-6">
        <div className="space-y-2">
          <h1 className="font-display text-3xl font-semibold">parks</h1>
          <p className="text-sm text-white/70">
            A quick map of national parks I&apos;ve visited.
          </p>
        </div>

        <div className="relative w-full aspect-[5/3] rounded-xl overflow-hidden">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="absolute inset-0 h-full w-full text-white"
            aria-hidden
          >
            <g transform={mapTransform}>
              <path
                d={outlinePath}
                fill="currentColor"
                fillOpacity="0.06"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="1.5"
              />
              {parks.map((park) => {
                const point = projection([park.lon, park.lat]);
                if (!point) {
                  return null;
                }
                const [x, y] = point;
                const labelWidth = park.name.length * 6.5 + 16;
                const labelHeight = 20;
                const labelX = -labelWidth / 2;
                const labelY = -labelHeight - 10;
                return (
                  <g
                    key={park.name}
                    className="group"
                    transform={`translate(${x}, ${y})`}
                  >
                    <circle
                      r="10"
                      fill="rgba(21,128,61,0.2)"
                    />
                    <circle
                      r="5"
                      fill="#86efac"
                      stroke="#166534"
                      strokeWidth="1.5"
                    />
                    <g className="opacity-0 transition group-hover:opacity-100">
                      <rect
                        x={labelX}
                        y={labelY}
                        width={labelWidth}
                        height={labelHeight}
                        rx="10"
                        fill="rgba(0,0,0,0.7)"
                      />
                      <text
                        x="0"
                        y={labelY + labelHeight / 2 + 4}
                        textAnchor="middle"
                        fontSize="12"
                        fontWeight="600"
                        fill="#ffffff"
                      >
                        {park.name}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </section>
    </main>
  );
}
