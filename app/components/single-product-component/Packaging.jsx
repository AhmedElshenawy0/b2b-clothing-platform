"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export const ManufacturingSection = () => {
  const listItems = [
    "Consistent fabric sourcing and batch tracking",
    "Pre-production samples and approval process",
    "Quality inspection before packaging",
    "Export documentation support for EU markets",
  ];

  return (
    <section
      className="relative overflow-hidden border border-gray-200 rounded-2xl p-8 md:p-12 
                        bg-gradient-to-r from-green-50 to-white transition-all duration-500"
    >
      {/* Subtle left accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-green-700 rounded-tr-xl rounded-br-xl" />

      {/* Typing Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold pl-4 mb-8">
        Manufacturing & Trade Standards
      </h2>

      <div className="space-y-6 max-w-3xl pl-4">
        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 leading-relaxed"
        >
          We operate with structured manufacturing workflows, consistent
          material sourcing, and controlled production batches to ensure
          long-term supply stability for wholesale partners.
        </motion.p>

        {/* List with staggered bounce */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3 text-gray-600 text-sm"
        >
          {listItems.map((item, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: idx * 0.2,
                type: "spring",
                stiffness: 120,
              }}
              className="flex items-start gap-2"
            >
              <FaCheckCircle className="text-green-700 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Outro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-gray-500 text-sm"
        >
          Designed for retailers, brands, and distributors seeking reliable
          long-term manufacturing partnerships.
        </motion.p>
      </div>
    </section>
  );
};
