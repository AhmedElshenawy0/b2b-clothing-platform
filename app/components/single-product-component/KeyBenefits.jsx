import {
  SkinOutlined,
  InboxOutlined,
  CheckCircleOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

export const ProductionHighlights = () => {
  const items = [
    {
      icon: <SkinOutlined />,
      title: "Fabric Consistency",
      desc: "Same yarn source across production batches",
    },
    {
      icon: <CheckCircleOutlined />,
      title: "Quality Assurance",
      desc: "Inline inspection & random batch testing",
    },
    {
      icon: <InboxOutlined />,
      title: "Bulk Optimization",
      desc: "Optimized cutting & packing for wholesale orders",
    },
    {
      icon: <ApartmentOutlined />,
      title: "Factory Capability",
      desc: "Monthly capacity: 50,000+ units",
    },
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-800">
        Production Excellence
      </h2>
      {/* خليناها 4 أعمدة عشان تملأ العرض الجديد بشكل احترافي */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-xl text-green-700 mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
