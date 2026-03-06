"use client";

import Image from "next/image";
import { Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* ===== LOGO & ABOUT ===== */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-white font-bold text-2xl tracking-wide">
              WONDER
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Factory-direct apparel manufacturer for global B2B partners.
            High-quality production, OEM solutions, and export-ready services.
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © {new Date().getFullYear()} Wonder. All rights reserved.
          </p>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Home", "Products", "About Us", "Contact", "Request Quote"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* ===== CONTACT INFO ===== */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:sales@wonder.com"
                className="hover:text-green-500 transition"
              >
                sales@wonder.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="hover:text-green-500 transition"
              >
                +1 234 567 890
              </a>
            </li>
            <li>Address: 1234 Industrial Rd, City, Country</li>
            <li>Hours: Mon-Fri 9am - 6pm</li>
          </ul>
        </div>

        {/* ===== NEWSLETTER / CTA ===== */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold">Stay Updated</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Subscribe for new products, promotions, and B2B insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              placeholder="Your business email"
              prefix={<MailOutlined />}
              size="large"
              className="rounded-lg flex-1 border-gray-700 bg-black text-gray-200 placeholder-gray-500 focus:border-green-500"
            />
            <Button
              type="primary"
              size="large"
              className="bg-green-700 hover:bg-green-600 w-full sm:w-auto rounded-lg transition"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-gray-500 text-xs">
        Designed & Built for B2B Apparel Manufacturers • Powered by Next.js &
        Tailwind
      </div>
    </footer>
  );
};
