"use client";
import { ColorsSection } from "@/app/components/single-product-component/Colors";
import { ProductionHighlights } from "@/app/components/single-product-component/KeyBenefits";
import { MaterialsSection } from "@/app/components/single-product-component/Materials";
import {
  ManufacturingSection,
  PackagingSection,
} from "@/app/components/single-product-component/Packaging";
import { ProductGallery } from "@/app/components/single-product-component/ProductGaleery";
import { ProductInfo } from "@/app/components/single-product-component/ProductInfo";
import { SizesSection } from "@/app/components/single-product-component/Sizes";
import { Button } from "antd";
import { motion } from "framer-motion";

import { FiTruck, FiBox, FiGlobe } from "react-icons/fi";

import { useParams } from "next/navigation";

const listItems = [
  "Consistent fabric sourcing and batch tracking",
  "Pre-production samples and approval process",
  "Quality inspection before packaging",
  "Export documentation support for EU markets",
];
export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-4 md:pt-6 mt-0 pb-10 space-y-10">
      <section className="rounded-2xl p-6 md:p-10 border border-gray-200 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <ProductGallery />
          <ProductInfo />
        </div>
      </section>

      <section className=" rounded-2xl p-8 md:p-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <ProductionHighlights />
          <MaterialsSection />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white">
        <div className="md:pr-6 md:border-r">
          <SizesSection />
        </div>

        <div className="md:pl-6">
          <ColorsSection />
        </div>
      </div>
      <ManufacturingSection />
      <section className="relative overflow-hidden rounded-3xl p-8 md:p-14  bg-white">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Packaging Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.5 }}
            className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg flex flex-col justify-between"
          >
            <h2 className="text-2xl font-semibold mb-6 text-green-800 flex items-center gap-2">
              <FiTruck className="text-green-700" />
              Packaging & Logistics
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3 items-start">
                <FiBox className="text-green-700 mt-1 flex-shrink-0" />
                Bulk polybag packaging (50–100 pcs / carton)
              </li>
              <li className="flex gap-3 items-start">
                <FiBox className="text-green-700 mt-1 flex-shrink-0" />
                Carton packing with SKU labeling
              </li>
              <li className="flex gap-3 items-start">
                <FiGlobe className="text-green-700 mt-1 flex-shrink-0" />
                Worldwide shipping via DHL / FedEx / Sea freight
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t text-sm text-gray-500">
              Lead time: 15–25 days • OEM / Private label available
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl bg-white p-10 flex flex-col justify-center items-center text-center shadow-lg"
          >
            <div className="absolute -top-6 bg-green-700 text-white text-sm px-4 py-1 rounded-full">
              B2B ONLY
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              Interested in Bulk Orders?
            </h2>

            <p className="text-gray-600 max-w-sm mb-6">
              Request wholesale pricing, samples, MOQs, and full technical
              specifications.
            </p>

            <Button
              size="large"
              className="bg-green-800 text-white hover:bg-green-700 border-none px-8"
            >
              Request Wholesale Price
            </Button>
          </motion.div>
        </div>

        {/* Extra B2B note */}
        <p className="text-xs text-gray-400 mt-6 text-center md:text-left max-w-7xl mx-auto">
          NDA available • Factory direct pricing • Export documentation
          supported
        </p>
      </section>
    </div>
  );
}
