import Image from "next/image";
import Link from "next/link";
import { Typography, Badge } from "antd";

const { Title, Text } = Typography;

const categories = [
  {
    name: "فساتين",
    count: "120 Item",
    image: "/Eid Shopping.webp",
    tag: "New",
  },
  {
    name: "بناطيل",
    count: "85 Item",
    image: "/Na Nin Townes Cotton Twill Trouser.webp",
  },
  {
    name: "جواكت",
    count: "240 Item",
    image:
      "/Toloer Fake Two Piece Jackets For Women Long Sleeves Zipper Loose Oversized Coats Female 2021 Streetwear Fashion New green-One Size.webp",
    tag: "Hot",
  },
  {
    name: "قمصان",
    count: "310 Item",
    image: "/Choker Neck Dip Hem Striped Top.webp",
  },
  { name: "جيب", count: "95 Item", image: "/Fesyen Islam.webp" },
  {
    name: "كينزات",
    count: "150 Item",
    image: "/SHEIN Plus Lace Up Balloon Sleeve Sweater.webp",
  },
];

export default function Category() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* ===== Section Header ===== */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-100 pb-6">
        <div>
          <Title level={2} style={{ margin: 0 }}>
            Browse by Category
          </Title>
          <Text type="secondary" className="text-lg">
            Select a specialized category to view our wholesale collections.
          </Text>
        </div>
        <Link
          href="/products"
          className="text-blue-600 font-semibold hover:underline"
        >
          View All Collections →
        </Link>
      </div>

      {/* ===== Categories Grid ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat, i) => (
          <Link href="/products" key={i} className="group relative">
            <Badge.Ribbon
              text={cat.tag}
              color={cat.tag === "Hot" ? "red" : "blue"}
              className={cat.tag ? "block" : "hidden"}
            >
              <div className="flex flex-col items-center bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-2">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-50">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Info Area */}
                <div className="py-4 text-center">
                  <h4 className="text-gray-900 font-bold text-lg mb-0 transition-colors group-hover:text-blue-600">
                    {cat.name}
                  </h4>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                    {cat.count}
                  </p>

                  {/* Subtle Accent Line */}
                  <div className="w-0 group-hover:w-1/2 h-0.5 bg-blue-600 mx-auto mt-2 transition-all duration-300" />
                </div>
              </div>
            </Badge.Ribbon>
          </Link>
        ))}
      </div>
    </section>
  );
}
