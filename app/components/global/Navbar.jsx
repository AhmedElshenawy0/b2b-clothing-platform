"use client";

import { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  const handleScroll = () => {
    const currentY = window.scrollY;
    if (currentY < lastScrollY || currentY < 50) setShowNav(true);
    else setShowNav(false);
    setLastScrollY(currentY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={false}
      animate={{ y: showNav ? 0 : -120, opacity: showNav ? 1 : 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-green-50 transition">
            <FiMenu className="text-2xl text-gray-700" />
          </button>

          <div className="italic text-xl font-bold text-green-800">WONDER</div>

          <LanguageSwitcher />
        </div>

        <div className="flex-1 hidden md:flex justify-center">
          <Input
            size="large"
            placeholder="Search products..."
            prefix={<SearchOutlined />}
            className="rounded-full shadow-sm w-full max-w-lg"
          />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a className="text-gray-600 font-medium" href="#">
            Blog
          </a>
          <a className="text-gray-600 font-medium" href="#">
            Signin
          </a>
        </div>
      </div>

      <div className="hidden md:block border-t">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center gap-3">
          {[
            { key: "", label: "Home" },
            { key: "about", label: "About" },
            { key: "products", label: "Products" },
            { key: "services", label: "Services" },
          ].map((item) => (
            <a
              key={item.key}
              href={`./${item.key}`}
              className="px-5 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-green-700 hover:bg-green-50 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
