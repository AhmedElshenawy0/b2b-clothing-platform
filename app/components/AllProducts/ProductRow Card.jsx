import { Button, Tag } from "antd";
import Image from "next/image";

export default function ProductGridCard({ p }) {
  return (
    <div
      className="bg-white border rounded-2xl overflow-hidden 
                    hover:shadow-lg hover:-translate-y-1 
                    transition-all duration-200 flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full h-56">
        <Image src={p.image} alt={p.name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {p.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3">
          <Tag color="green">MOQ {p.moq}</Tag>
          <Tag>{p.fabric}</Tag>
        </div>

        <div className="text-sm text-gray-500 space-y-1 mb-4">
          <p>Lead time: {p.leadTime}</p>
          <p>Packaging: {p.packaging}</p>
        </div>

        <div className="mt-auto">
          <p className="text-xs text-gray-500">FOB Price</p>
          <p className="text-xl font-bold text-green-700 mb-3">{p.price}</p>

          <Button type="primary" className="w-full">
            Request Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
