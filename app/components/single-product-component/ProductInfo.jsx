"use client";

import { useParams } from "next/navigation";
// import { getDictionary } from "@/lib/dictionary";
import { Button, Tag } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

export const ProductInfo = () => {
  // const { t, i18n } = useTranslation();
  // const [isArabic, setIsArabic] = useState(false);

  // useEffect(() => {
  //   setIsArabic(i18n.language === "ar");
  // }, [i18n.language]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Premium Cotton T‑Shirt{" "}
        </h1>
        <p className="text-slate-500 font-medium">
          Professional Casual Wear • Export Quality
        </p>
      </div>

      {/* السعر والـ MOQ */}
      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-1">
              Wholesale Price
            </p>
            <p className="text-2xl font-black text-slate-900 leading-none">
              Upon Request
            </p>
          </div>
          {/* استخدمنا text-end بدلاً من text-right لدعم العربي والإنجليزي تلقائياً */}
          <div className="text-end">
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-1">
              Min. Order
            </p>
            <p className="text-sm font-black text-slate-700">100 pcs</p>
          </div>
        </div>
      </div>

      {/* توفر العينات */}
      <div className="bg-green-50/40 p-4 border border-green-100 rounded-2xl transition-all hover:bg-green-50/60">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-bold text-green-800 flex items-center gap-1.5">
            <CheckCircleOutlined className="text-xs" /> Sample Availability
          </span>
          <Tag
            color="blue"
            className="m-0 rounded-full border-none font-bold text-[10px] px-2"
          >
            READY TO SHIP
          </Tag>
        </div>
        <p className="text-[12px] text-green-700 leading-relaxed font-medium">
          Get a physical sample in 5-7 days to verify fabric quality before bulk
          commitment.
        </p>
      </div>

      {/* Specs Tags (ممكن تترجمها برضه لو حبيت في الـ JSON) */}
      <div className="flex flex-wrap gap-2">
        {["100% Cotton", "180 GSM", "Pre‑shrunk", "Eco-Dye"].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg text-[11px] font-bold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* أزرار التواصل */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          type="primary"
          size="large"
          className="h-12 flex-1 rounded-xl bg-green-700 hover:!bg-green-800 border-none font-bold shadow-lg shadow-green-100"
        >
          Get Wholesale Quote
        </Button>
        <Button
          size="large"
          className="h-12 flex-1 rounded-xl border-slate-200 font-bold text-slate-600 hover:text-slate-900"
        >
          Contact Factory
        </Button>
      </div>
    </div>
  );
};
