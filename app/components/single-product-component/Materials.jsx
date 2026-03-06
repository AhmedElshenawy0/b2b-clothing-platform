import Image from "next/image";
import { InfoCircleOutlined } from "@ant-design/icons";

export const MaterialsSection = () => (
  <section className="space-y-8">
    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
      <h2 className="text-2xl font-bold text-slate-800">
        Materials & Fabric Specs
      </h2>
      <span className="text-xs font-bold text-slate-400 flex items-center gap-2">
        <InfoCircleOutlined /> TECHNICAL DATA SHEET
      </span>
    </div>

    <div className="flex flex-col gap-6">
      {/* 1. Full-Width Premium Image Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group">
        <Image
          src="/material5.jpg"
          alt="Close-up of combed cotton fabric"
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
        />
        {/* Glassmorphism Overlay for Image Details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div className="space-y-1">
            <span className="text-green-400 text-xs font-black uppercase tracking-[0.2em]">
              Premium Quality
            </span>
            <h3 className="text-white text-2xl font-bold">
              Combed Cotton N-180
            </h3>
          </div>
          <div className="hidden md:block bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl text-white text-xs">
            High-density weave for superior durability and soft hand-feel.
          </div>
        </div>
      </div>

      {/* 2. Expanded Technical Table (Full Width) */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 bg-slate-50/80 border-b border-slate-100 px-6 py-4">
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
            Parameter
          </span>
          <span className="hidden md:block text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">
            Quality Grade
          </span>
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">
            Standard / Value
          </span>
        </div>

        <div className="divide-y divide-slate-50">
          {[
            ["Fabric Type", "Premium Selection", "Combed Cotton"],
            ["Weight (GSM)", "Standard Mid-weight", "180 ±5"],
            ["Weave Structure", "High-Density", "Single Jersey"],
            ["Shrinkage Rate", "Industry Leading", "< 3%"],
            ["Color Fastness", "ISO 105-C06 Certified", "Grade 4–5"],
            ["Breathability", "High Performance", "95% Air Permeability"],
          ].map(([k, tag, v]) => (
            <div
              key={k}
              className="grid grid-cols-2 md:grid-cols-3 items-center px-6 py-5 hover:bg-slate-50/30 transition-colors group"
            >
              <span className="text-slate-700 font-bold text-sm group-hover:text-green-700 transition-colors">
                {k}
              </span>
              <span className="hidden md:flex justify-center">
                <span className="text-[10px] font-black text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase border border-green-100/50">
                  {tag}
                </span>
              </span>
              <span className="font-black text-slate-900 text-sm text-right">
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
