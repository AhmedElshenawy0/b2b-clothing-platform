const COLORS = [
  {
    name: "Black",
    hex: "#000000",
    code: "BLK-01",
    image: "/material2.jpg",
  },
  {
    name: "Gray",
    hex: "#b9b7b7ff",
    code: "WHT-01",
    image: "/material1.jpg",
  },
  {
    name: "Green",
    hex: "#3a8346ff",
    code: "CHR-03",
    image: "/material3.jpg",
  },
  {
    name: "Forest Rose",
    hex: "#e58696ff",
    code: "GRN-07",
    image: "/material4.jpg",
  },
];

import Image from "next/image";

export const ColorsSection = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-semibold">Available Colors</h2>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {COLORS.map((c) => (
        <div key={c.code} className="border rounded-xl p-4 space-y-3">
          {/* Color Swatch */}
          <div
            className="w-full h-20 rounded-lg border"
            style={{ backgroundColor: c.hex }}
          />

          {/* Image */}
          <div className="w-full h-20 relative rounded-lg overflow-hidden border">
            <Image
              src={c.image}
              alt={c.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Text */}
          <div className="text-sm">
            <div className="font-medium">{c.name}</div>
            <div className="text-gray-500">{c.code}</div>
          </div>
        </div>
      ))}
    </div>

    <p className="text-xs text-gray-500">
      Custom colors available for MOQ orders. Dye lot variation ±5%.
    </p>
  </section>
);
