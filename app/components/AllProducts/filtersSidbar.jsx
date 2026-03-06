"use client";
import { Select, InputNumber, Slider, Checkbox } from "antd";

export default function FiltersSidebar({
  fabricFilter,
  setFabricFilter,
  categoryFilter,
  setCategoryFilter,
  priceRange,
  setPriceRange,
  moq,
  setMoq,
  ratings,
  setRatings,
  availability,
  setAvailability,
}) {
  return (
    <aside className="col-span-12 lg:col-span-3">
      <div className="sticky top-24 bg-white border rounded-xl p-5 space-y-6">
        <h3 className="font-semibold text-lg">Filters</h3>

        {/* Category */}
        <div>
          <label className="text-sm font-medium">Category</label>
          <Select
            placeholder="Select Category"
            value={categoryFilter || undefined}
            onChange={setCategoryFilter}
            options={[
              { value: "T-Shirts", label: "T-Shirts" },
              { value: "Polo Shirts", label: "Polo Shirts" },
              { value: "Jackets", label: "Jackets" },
              { value: "Sweatshirts", label: "Sweatshirts" },
            ]}
            className="w-full mt-1"
          />
        </div>

        {/* Fabric */}
        <div>
          <label className="text-sm font-medium">Fabric</label>
          <Select
            placeholder="Select Fabric"
            value={fabricFilter || undefined}
            onChange={setFabricFilter}
            options={[
              { value: "Cotton", label: "Cotton" },
              { value: "Organic Cotton", label: "Organic Cotton" },
              { value: "Denim", label: "Denim" },
              { value: "Fleece", label: "Fleece" },
            ]}
            className="w-full mt-1"
          />
        </div>

        {/* Price Range */}
        <div>
          <label className="text-sm font-medium">Price Range ($)</label>
          <Slider
            range
            min={0}
            max={50}
            value={priceRange}
            onChange={setPriceRange}
          />
        </div>

        {/* Minimum MOQ */}
        <div>
          <label className="text-sm font-medium">Minimum MOQ</label>
          <InputNumber
            className="w-full mt-1"
            min={0}
            value={moq}
            onChange={setMoq}
          />
        </div>

        {/* Supplier Rating */}
        <div>
          <label className="text-sm font-medium">Supplier Rating</label>
          <Checkbox.Group
            options={["4★ & up", "3★ & up"]}
            value={ratings}
            onChange={setRatings}
          />
        </div>

        {/* Availability */}
        <div>
          <label className="text-sm font-medium">Availability</label>
          <Checkbox.Group
            options={["In Stock", "Ready to Ship"]}
            value={availability}
            onChange={setAvailability}
          />
        </div>
      </div>
    </aside>
  );
}
