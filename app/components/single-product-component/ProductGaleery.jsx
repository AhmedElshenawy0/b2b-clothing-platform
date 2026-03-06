"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "/material7.jpg",
  "/material8.jpg",
  "/material6.jpg",
  "/material9.jpg",
];

export const ProductGallery = () => {
  const [activeImage, setActiveImage] = useState(IMAGES[0]);

  return (
    <div className="flex gap-6">
      {/* ===== Thumbnails (Left) ===== */}
      <div className="flex flex-col gap-3">
        {IMAGES.map((img) => (
          <button
            key={img}
            onClick={() => setActiveImage(img)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border
              ${
                activeImage === img
                  ? "border-gray-900"
                  : "border-gray-200 hover:border-gray-400"
              }
              transition`}
          >
            <Image
              src={img}
              alt="Product thumbnail"
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* ===== Main Image (Right) ===== */}
      <div className="relative flex-1 h-[520px] bg-gray-100 rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            {/* 👇 zoom wrapper */}
            <motion.div
              animate={{ scale: [1, 1.1] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage}
                alt="Product image"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
