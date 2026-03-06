import ProductGridCard from "./ProductRow Card";

export default function ProductsGrid({ filteredProducts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {filteredProducts.map((p) => (
        <ProductGridCard key={p.id} p={p} />
      ))}
    </div>
  );
}
