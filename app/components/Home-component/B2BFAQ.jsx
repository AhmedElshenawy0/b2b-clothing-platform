"use client";

import { Collapse } from "antd";

export const B2BFAQ = () => {
  const faqs = [
    {
      q: "What is your Minimum Order Quantity (MOQ)?",
      a: "Our MOQ starts from 50 pieces, depending on the product type, fabric, and customization requirements. For bulk orders, we can provide flexible quantities.",
    },
    {
      q: "What is the production lead time?",
      a: "Typical production lead time is 15–30 days after final sample approval. We can adjust based on order volume and complexity.",
    },
    {
      q: "What payment terms do you offer?",
      a: "Payment terms are negotiated based on order size. Bank transfers are accepted. For new clients, a deposit is usually required with balance before shipment.",
    },
    {
      q: "Do you offer OEM / Private Label services?",
      a: "Yes. We provide full OEM and Private Label solutions, including branding, custom labels, packaging, and hangtags tailored for your brand.",
    },
    {
      q: "Can you handle multiple product types in one order?",
      a: "Absolutely. We can consolidate multiple SKUs in a single production batch to optimize cost and delivery time.",
    },
    {
      q: "Do you provide sample production?",
      a: "Yes, we offer sampling services before mass production to ensure the quality and design meet your specifications.",
    },
  ];

  // Transform faqs into AntD Collapse items
  const items = faqs.map((faq, index) => ({
    key: index,
    label: <span className="font-semibold text-gray-900">{faq.q}</span>,
    children: <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>,
  }));

  return (
    <section className="py-12  border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-14">
          Buyer FAQs
        </h2>

        <Collapse
          accordion
          bordered={false}
          className="bg-white"
          expandIconPlacement="end"
          ghost
          items={items} // <-- use items instead of children
        />
      </div>
    </section>
  );
};
