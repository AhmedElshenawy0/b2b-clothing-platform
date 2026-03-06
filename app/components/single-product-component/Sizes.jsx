export const SizesSection = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-semibold">Size Specifications</h2>

    <div className="overflow-x-auto border rounded-xl">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left">Size</th>
            <th className="px-4 py-3 text-left">Chest (cm)</th>
            <th className="px-4 py-3 text-left">Length (cm)</th>
            <th className="px-4 py-3 text-left">Shoulder (cm)</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {[
            ["S", "50", "68", "42"],
            ["M", "52", "70", "44"],
            ["L", "54", "72", "46"],
            ["XL", "56", "74", "48"],
            ["XXL", "58", "76", "50"],
          ].map(([size, chest, length, shoulder]) => (
            <tr key={size}>
              <td className="px-4 py-3 font-medium">{size}</td>
              <td className="px-4 py-3">{chest}</td>
              <td className="px-4 py-3">{length}</td>
              <td className="px-4 py-3">{shoulder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-xs text-gray-500">
      Measurements are in centimeters. Tolerance ±2 cm. Custom sizing available
      for bulk orders.
    </p>
  </section>
);
