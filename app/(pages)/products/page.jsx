"use client";

import { useState, useMemo } from "react";
import {
  Select,
  InputNumber,
  Slider,
  Checkbox,
  Rate,
  Empty,
  Tooltip,
} from "antd";
import {
  FilterOutlined,
  InfoCircleOutlined,
  EnvironmentOutlined,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// ─── Data ──────────────────────────────────────────────────────────────────
const productsData = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    image: "/maged1.webp",
    moq: 100,
    price: 5,
    fabric: "Cotton",
    category: "T-Shirts",
    leadTime: "15d",
    rating: 4.5,
    availability: "In Stock",
    supplier: "Global Tex",
    sustainable: true,
  },
  {
    id: 2,
    name: "Organic Polo Shirt",
    image: "/maged1.webp",
    moq: 150,
    price: 7,
    fabric: "Organic Cotton",
    category: "Polo Shirts",
    leadTime: "20d",
    rating: 5,
    availability: "Ready to Ship",
    supplier: "EcoWear Ltd",
    sustainable: true,
  },
  {
    id: 3,
    name: "Denim Jacket",
    image: "/maged1.webp",
    moq: 50,
    price: 25,
    fabric: "Denim",
    category: "Jackets",
    leadTime: "25d",
    rating: 4,
    availability: "In Stock",
    supplier: "Indigo Mfg",
    sustainable: false,
  },
  {
    id: 4,
    name: "Fleece Hoodie",
    image: "/maged1.webp",
    moq: 80,
    price: 18,
    fabric: "Fleece",
    category: "Sweatshirts",
    leadTime: "15d",
    rating: 3.8,
    availability: "Ready to Ship",
    supplier: "Urban Soft",
    sustainable: true,
  },
  {
    id: 5,
    name: "Slim Chino Pants",
    image: "/maged1.webp",
    moq: 120,
    price: 14,
    fabric: "Cotton Blend",
    category: "Pants",
    leadTime: "18d",
    rating: 4.2,
    availability: "In Stock",
    supplier: "StyleForge",
    sustainable: false,
  },
  {
    id: 6,
    name: "Linen Summer Shirt",
    image: "/maged1.webp",
    moq: 60,
    price: 11,
    fabric: "Linen",
    category: "Shirts",
    leadTime: "22d",
    rating: 4.7,
    availability: "Ready to Ship",
    supplier: "NaturalWear",
    sustainable: true,
  },
  {
    id: 7,
    name: "Athletic Shorts",
    image: "/maged1.webp",
    moq: 200,
    price: 6,
    fabric: "Polyester",
    category: "Shorts",
    leadTime: "12d",
    rating: 4.0,
    availability: "In Stock",
    supplier: "SportsTex",
    sustainable: false,
  },
  {
    id: 8,
    name: "Wool Overcoat",
    image: "/maged1.webp",
    moq: 30,
    price: 48,
    fabric: "Wool",
    category: "Jackets",
    leadTime: "30d",
    rating: 4.9,
    availability: "Ready to Ship",
    supplier: "LuxuryMfg",
    sustainable: true,
  },
  {
    id: 9,
    name: "Bamboo Underwear Set",
    image: "/maged1.webp",
    moq: 300,
    price: 3,
    fabric: "Bamboo",
    category: "T-Shirts",
    leadTime: "10d",
    rating: 4.6,
    availability: "In Stock",
    supplier: "EcoBase",
    sustainable: true,
  },
  {
    id: 10,
    name: "Cargo Trousers",
    image: "/maged1.webp",
    moq: 75,
    price: 19,
    fabric: "Ripstop",
    category: "Pants",
    leadTime: "20d",
    rating: 3.9,
    availability: "In Stock",
    supplier: "UrbanGear",
    sustainable: false,
  },
  {
    id: 11,
    name: "Vintage Polo Shirt",
    image: "/maged1.webp",
    moq: 100,
    price: 9,
    fabric: "Pique Cotton",
    category: "Polo Shirts",
    leadTime: "17d",
    rating: 4.3,
    availability: "Ready to Ship",
    supplier: "RetroCloth",
    sustainable: false,
  },
];

const CATEGORIES = [
  "All",
  "T-Shirts",
  "Polo Shirts",
  "Jackets",
  "Sweatshirts",
  "Pants",
  "Shirts",
  "Shorts",
];

// ─── StatPill ──────────────────────────────────────────────────────────────
function StatPill({ value, label, accent }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl min-w-[110px]"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <span
        className="text-2xl font-black leading-none tracking-tight"
        style={{ color: accent }}
      >
        {value}
      </span>
      <span
        className="text-[10px] font-bold uppercase tracking-widest mt-1 text-center leading-tight"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── LiveBadge ─────────────────────────────────────────────────────────────
function LiveBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
      style={{
        background: "rgba(52,211,153,0.12)",
        border: "1px solid rgba(52,211,153,0.3)",
      }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">
        Live Inventory
      </span>
    </div>
  );
}

// ─── PillBtn ───────────────────────────────────────────────────────────────
function PillBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`
        whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider
        border transition-all duration-200
        ${
          active
            ? "bg-slate-900 text-white border-slate-900 shadow-md"
            : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
        }
      `}
    >
      {children}
    </button>
  );
}

// ─── FilterPanel ───────────────────────────────────────────────────────────
function FilterPanel({
  priceRange,
  setPriceRange,
  moq,
  setMoq,
  availability,
  setAvailability,
  onReset,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6"
    >
      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Unit Price (USD)
          </h4>
          <Tooltip title="Estimated FOB pricing per unit">
            <InfoCircleOutlined className="text-slate-300 text-xs" />
          </Tooltip>
        </div>
        <Slider
          range
          min={0}
          max={50}
          value={priceRange}
          onChange={setPriceRange}
        />
        <div className="flex justify-between text-xs font-mono font-bold text-slate-600 mt-1">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
          Maximum MOQ
        </h4>
        <InputNumber
          className="w-full"
          placeholder="e.g. 500"
          value={moq}
          min={0}
          onChange={setMoq}
        />
      </div>

      <div>
        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
          Availability
        </h4>
        <Checkbox.Group
          className="flex flex-col gap-2"
          options={["In Stock", "Ready to Ship"]}
          value={availability}
          onChange={setAvailability}
        />
        <button
          onClick={onReset}
          className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors"
        >
          Reset All Filters
        </button>
      </div>
    </motion.div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [moq, setMoq] = useState(null);
  const [availability, setAvailability] = useState([]);
  const [sortBy, setSortBy] = useState("popular");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const router = useRouter();
  const activeFiltersCount = [
    priceRange[0] > 0 || priceRange[1] < 50,
    !!moq,
    availability.length > 0,
  ].filter(Boolean).length;

  const filteredProducts = useMemo(() => {
    let list = productsData.filter((p) => {
      const matchesCategory =
        categoryFilter === "All" || p.category === categoryFilter;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesMoq = !moq || p.moq <= moq;
      const matchesAvail =
        availability.length === 0 || availability.includes(p.availability);
      return matchesCategory && matchesPrice && matchesMoq && matchesAvail;
    });
    if (sortBy === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "rating")
      list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [categoryFilter, priceRange, moq, availability, sortBy]);

  const handleReset = () => {
    setCategoryFilter("All");
    setPriceRange([0, 50]);
    setMoq(null);
    setAvailability([]);
    setShowAdvanced(false);
  };

  const toggleAvailability = (val) =>
    setAvailability((prev) =>
      prev.includes(val) ? prev.filter((a) => a !== val) : [...prev, val],
    );

  return (
    /* mt-[96px] clears the fixed navbar */
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ══════════════ HERO HEADER ══════════════ */}
      <div className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* glow blobs */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(52,211,153,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.10) 0%, transparent 70%)",
          }}
        />

        {/* diagonal stripe */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(-55deg, rgba(34,197,94,0.06) 0px, rgba(34,197,94,0.06) 1px, transparent 1px, transparent 28px)",
          }}
        />

        {/* Header content */}
        <div className="relative max-w-[1600px] mx-auto px-6 py-12">
          {/* Top row */}
          {/* <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <LiveBadge />
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Sort by
              </span>
              <Select
                value={sortBy}
                onChange={setSortBy}
                className="w-48"
                variant="filled"
                options={[
                  { value: "popular", label: "Most Popular" },
                  { value: "low", label: "Price: Low → High" },
                  { value: "high", label: "Price: High → Low" },
                  { value: "rating", label: "Top Rated" },
                ]}
              />
            </div>
          </div> */}

          {/* Headline + stats */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-400 mb-4">
                B2B Manufacturing Platform
              </p>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
                Apparel{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                    Sourcing
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 6 Q50 1 100 5 Q150 9 200 4"
                      stroke="#22c55e"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>
                </span>{" "}
                Catalog
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                Connect directly with{" "}
                <span className="text-white font-semibold">
                  verified manufacturers
                </span>{" "}
                across 40+ countries. MOQ-first sourcing, real lead times, and
                sustainable options — all in one place.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-6">
                {[
                  "ISO Certified",
                  "100% Vetted",
                  "Direct Factory",
                  "No Middlemen",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-700 bg-slate-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap gap-3 lg:justify-end"
            >
              <StatPill value="2,400+" label="Products" accent="#34d399" />
              <StatPill value="340+" label="Suppliers" accent="#6ee7b7" />
              <StatPill value="40+" label="Countries" accent="#a7f3d0" />
              <StatPill value="98%" label="On-time Rate" accent="#d1fae5" />
            </motion.div>
          </div>

          {/* Divider */}
          <div
            className="mt-10 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(100,116,139,0.5), transparent)",
            }}
          />

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-6 mt-5">
            {[
              { icon: "🔒", text: "Secure payments" },
              { icon: "📦", text: "Sample ordering" },
              { icon: "🌿", text: "Eco-certified options" },
              { icon: "⚡", text: "Ready-to-ship stock" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <span className="text-sm">{icon}</span>
                <span className="text-xs text-slate-500 font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ FILTER BAR + GRID ══════════════ */}
      <div className="max-w-[1600px] mx-auto px-6 pt-6">
        {/* Filter bar */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <PillBtn
                key={cat}
                active={categoryFilter === cat}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat}
              </PillBtn>
            ))}

            <div className="ml-auto flex items-center gap-2 flex-wrap">
              <PillBtn
                active={availability.includes("In Stock")}
                onClick={() => toggleAvailability("In Stock")}
              >
                🟢 In Stock
              </PillBtn>
              <PillBtn
                active={availability.includes("Ready to Ship")}
                onClick={() => toggleAvailability("Ready to Ship")}
              >
                ⚡ Ready to Ship
              </PillBtn>

              <button
                onClick={() => setShowAdvanced((v) => !v)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider
                  border transition-all duration-200
                  ${
                    showAdvanced
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                  }
                `}
              >
                <FilterOutlined />
                More Filters
                {activeFiltersCount > 0 && (
                  <span className="bg-white text-green-700 rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-black">
                    {activeFiltersCount}
                  </span>
                )}
                <DownOutlined
                  className={`text-[10px] transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`}
                />
              </button>

              {(categoryFilter !== "All" || activeFiltersCount > 0) && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-bold text-slate-400 hover:text-red-500 border border-transparent hover:border-red-200 transition-all"
                >
                  <CloseOutlined className="text-[10px]" /> Clear
                </button>
              )}
            </div>
          </div>

          <AnimatePresence>
            {showAdvanced && (
              <FilterPanel
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                moq={moq}
                setMoq={setMoq}
                availability={availability}
                setAvailability={setAvailability}
                onReset={handleReset}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Results bar */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-slate-500 font-medium">
            Showing{" "}
            <span className="text-slate-900 font-bold">
              {filteredProducts.length}
            </span>{" "}
            verified products
          </p>
          <div className="hidden md:flex items-center gap-3 bg-slate-900 text-white text-xs font-bold px-5 py-2.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Sourcing Expert Online —
            <button className="underline underline-offset-2 hover:text-green-400 transition-colors">
              Custom Request
            </button>
          </div>
        </div>

        {/* ══ PRODUCT GRID ══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-green-500 hover:shadow-2xl transition-all flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex flex-col items-start gap-2">
                    {p.sustainable && (
                      <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-500 text-white rounded-full shadow-lg">
                        <EnvironmentOutlined className="text-[10px]" />
                        <span className="text-[9px] font-black uppercase tracking-widest leading-none">
                          Eco
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-lg shadow-sm border border-slate-100">
                      <span className="relative flex h-1.5 w-1.5">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${p.availability === "In Stock" ? "bg-green-400" : "bg-blue-400"}`}
                        />
                        <span
                          className={`relative inline-flex rounded-full h-1.5 w-1.5 ${p.availability === "In Stock" ? "bg-green-500" : "bg-blue-500"}`}
                        />
                      </span>
                      <span className="text-[9px] font-bold text-slate-700 uppercase tracking-tighter leading-none">
                        {p.availability}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[9px] font-black text-green-600 uppercase tracking-widest bg-green-50 px-1.5 py-0.5 rounded">
                      {p.category}
                    </span>
                    <Tooltip title="Verified Manufacturer">
                      <div className="bg-blue-50 p-1 rounded-full">
                        <svg
                          className="w-2.5 h-2.5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </div>

                  <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-green-700 transition-colors line-clamp-2 mb-1.5">
                    {p.name}
                  </h3>

                  <div className="flex items-center gap-1 mb-3">
                    <Rate
                      disabled
                      defaultValue={p.rating}
                      className="text-[9px]"
                    />
                    <span className="text-[10px] font-bold text-slate-400">
                      ({p.rating})
                    </span>
                  </div>

                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between mb-3">
                    <div>
                      <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tighter">
                        From
                      </p>
                      <p className="text-lg font-black text-slate-900 leading-none">
                        ${p.price}
                        <span className="text-[9px] font-bold text-slate-400">
                          /pc
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tighter">
                        Min. Order
                      </p>
                      <p className="text-xs font-bold text-slate-700">
                        {p.moq} Units
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => router.push(`./products/${p?.id}`)}
                    className="w-full h-9 rounded-xl bg-slate-900 hover:bg-green-800 cursor-pointer text-white font-bold text-[10px] uppercase tracking-wider transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="py-32 bg-white rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center">
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={
                <div className="text-center">
                  <p className="text-lg font-bold text-slate-800">
                    No matching garments found
                  </p>
                  <p className="text-slate-400 text-sm">
                    Try adjusting your price range or category filters.
                  </p>
                  <button
                    className="mt-3 text-green-600 font-bold text-sm hover:underline"
                    onClick={handleReset}
                  >
                    Clear All Filters
                  </button>
                </div>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
