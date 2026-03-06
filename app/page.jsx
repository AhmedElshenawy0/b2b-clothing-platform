"use client";
import Image from "next/image";
import { useState } from "react";
import { B2BInquiryForm } from "./components/Home-component/InquirtCta";
import { B2BFAQ } from "./components/Home-component/B2BFAQ";
import Category from "./components/Home-component/Category";
import Link from "next/link";
import { Typography, Button, Tag, Row, Col, Divider, Badge, Rate } from "antd";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  GlobalOutlined,
  globalOutlined,
  SafetyOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {
  FileSearchOutlined,
  SafetyCertificateOutlined,
  RocketOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
const { Title, Text } = Typography;
const products = [
  {
    id: 1,
    name: "Athleisure Tracksuit",
    image: "/maged1.webp",
  },
  {
    id: 2,
    name: "Custom T-shirt Set",
    image: "/maged2.webp",
  },
  {
    id: 3,
    name: "Premium Hoodie",
    image: "/maged3.webp",
  },
];
const imagesss = [
  {
    name: "فساتين",
    image: "/maged1.webp",
  },
  {
    name: "بناطيل",
    image: "/maged2.webp",
  },
  {
    name: "جواكت",
    image: "/maged3.webp",
  },
  ,
  {
    name: "قمصان",
    image: "/maged1.webp",
  },
  {
    name: "جيب",
    image: "/maged2.webp",
  },
  {
    name: "كينزات",
    image: "/maged3.webp",
  },
];
const steps = [
  {
    step: "01",
    icon: <FileSearchOutlined className="text-3xl text-green-600" />,
    title: "Sampling & Prototyping",
    details: [
      "Fabric Sourcing & Selection",
      "Technical Pattern Making",
      "Prototype Approval",
    ],
    desc: "We transform your concepts into physical samples. We select the best fabrics and create a precision prototype to ensure quality and fit before mass production begins.",
    color: "bg-blue-50",
  },
  {
    step: "02",
    icon: <SafetyCertificateOutlined className="text-3xl text-orange-600" />,
    title: "Quality & Compliance",
    details: [
      "Material Lab Testing",
      "Pre-production Meeting",
      "Final Costing & Contracts",
    ],
    desc: "Once the sample is approved, we conduct rigorous lab tests on materials to meet international standards and finalize all technical specifications and commercial terms.",
    color: "bg-orange-50",
  },
  {
    step: "03",
    icon: <DeploymentUnitOutlined className="text-3xl text-purple-600" />,
    title: "Mass Production",
    details: [
      "In-line Quality Control",
      "Daily Status Reports",
      "Strict Lead-time Tracking",
    ],
    desc: "Manufacturing starts in our specialized production lines. We maintain strict adherence to the timeline with continuous inspections at every stage—from cutting to final stitching.",
    color: "bg-purple-50",
  },
  {
    step: "04",
    icon: <RocketOutlined className="text-3xl text-green-600" />,
    title: "Logistics & Delivery",
    details: [
      "Export Documentation",
      "Global Freight (Sea/Air)",
      "Post-delivery Support",
    ],
    desc: "The final stage covers professional export packaging, issuance of certificates of origin, and coordinating shipment logistics to ensure safe delivery to your warehouse.",
    color: "bg-green-50",
  },
];
const clients = [
  { name: "Global Retail Co", logo: "/logos/client1.svg" },
  { name: "Nordic Brands", logo: "/logos/client2.svg" },
  { name: "UK Fashion Group", logo: "/logos/client3.svg" },
  { name: "MENA Distributors", logo: "/logos/client4.svg" },
];

const testimonials = [
  {
    quote:
      "Wonder's production consistency is unmatched. They handled our 50,000-unit seasonal launch without a single QC issue.",
    author: "James Wilson",
    position: "Supply Chain Director, Global Retail",
    rating: 5,
  },
  {
    quote:
      "The best OEM partner we've worked with in Egypt. Their sampling speed and fabric sourcing saved us weeks of development time.",
    author: "Sarah Ahmed",
    position: "Founder, Urban Style UK",
    rating: 5,
  },
];
export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <div className=" bg-gray-50 min-h-screen mt-0 md:mt-0 ">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          src="/Video/herovideo1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <Badge
            count="Certified Export Factory"
            style={{ backgroundColor: "#22c55e" }}
            className="mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            <span className="text-green-400">Wonder</span> Manufacturing
            <br />
            <span className="text-2xl md:text-4xl font-light text-gray-300">
              High-Scale Apparel Production for Global Brands
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Specializing in high-volume OEM/ODM services. We bridge the gap
            between complex design and mass-scale production with precision,
            transparency, and global logistics.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button
              type="primary"
              size="large"
              className="bg-green-600 border-none h-14 px-12 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-lg"
            >
              Explore Products
            </Button>
            <Button
              size="large"
              ghost
              className="h-14 px-12 rounded-full text-lg border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Get Technical Quote
            </Button>
          </div>
        </div>
      </section>
      {/* ================= Why Partner With Us ================= */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Tag color="green" className="mb-4">
            Why Partner With Us
          </Tag>
          <Title level={2} className="!text-4xl md:!text-5xl !font-black">
            Manufacturing Standards
          </Title>
          <Text className="text-gray-500 text-lg">
            Industrial-grade solutions for large-scale retail & distribution.
          </Text>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Controlled Quality",
              icon: <SafetyOutlined className="text-4xl text-green-600 mb-6" />,
              desc: "Every batch undergoes a 4-point inspection system to ensure 0% defect rates before shipping.",
              points: [
                "Fabric Durability Tests",
                "Stitch Density Checks",
                "Color Fastness Audit",
              ],
            },
            {
              title: "Scalable Capacity",
              icon: <GlobalOutlined className="text-4xl text-green-600 mb-6" />,
              desc: "Our facility is equipped with automated machinery to handle rapid scaling and massive seasonal orders.",
              points: [
                "120,000+ Monthly Units",
                "Advanced Laser Cutting",
                "Automated Sewing Lines",
              ],
            },
            {
              title: "Export Logistics",
              icon: <TeamOutlined className="text-4xl text-green-600 mb-6" />,
              desc: "Full support for international trade, providing all necessary documentation for smooth customs clearance.",
              points: [
                "EU/UK Market Compliance",
                "Door-to-Port Delivery",
                "FOB/CIF Terms Available",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-10 rounded-[2.5rem] bg-gray-50 border border-transparent hover:border-green-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              {item.icon}
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8">{item.desc}</p>
              <div className="space-y-3">
                {item.points.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                  >
                    <CheckCircleFilled className="text-green-500 text-xs" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= Categories ================= */}
      <Category />
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logos Grid - Trusted By */}
          <div className="text-center mb-16">
            <Text className="uppercase tracking-[0.2em] text-gray-400 font-bold text-xs block mb-8">
              Trusted by Industry Leaders
            </Text>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              {clients.map((client, i) => (
                <span key={i} className="text-2xl font-black text-gray-800">
                  {client.name}
                </span>
                /* استبدل النص بـ <img src={client.logo} /> عند توفر الشعارات */
              ))}
            </div>
          </div>

          <Divider className="border-gray-200" />

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            {testimonials.map((test, i) => (
              <div
                key={i}
                className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Quote Mark Decoration */}
                <span className="absolute -top-4 -left-2 text-[12rem] text-green-500/5 font-serif leading-none select-none">
                  “
                </span>

                <div className="relative z-10">
                  <Rate
                    disabled
                    defaultValue={test.rating}
                    className="text-green-500 text-xs mb-6"
                  />
                  <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                    {test.quote}
                  </p>
                  <div>
                    <Title level={4} className="!mb-0 !text-lg">
                      {test.author}
                    </Title>
                    <Text
                      type="secondary"
                      className="text-sm uppercase tracking-wider"
                    >
                      {test.position}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST / FEATURES (Detailed) ================= */}

      {/* ================= STATS & B2B DETAILS (Dark High-Tech) ================= */}
      <section className="py-12 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <Tag color="green" className="mb-6 px-4 py-1">
              Enterprise Solutions
            </Tag>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              A Strategic Extension <br /> of Your Own Brand
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We operate as a direct factory partner, removing middlemen to
              provide you with competitive pricing and direct control over the
              production floor.
            </p>

            <div className="grid sm:grid-cols-2 gap-y-8 gap-x-12">
              {[
                { t: "OEM Services", d: "Custom branding & labels" },
                { t: "Fabric Sourcing", d: "Global textile network" },
                { t: "Fast Sampling", d: "7-10 days prototyping" },
                { t: "Global Shipping", d: "MENA, EU, & UK markets" },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircleFilled className="text-green-500" />
                    <span className="font-bold text-lg">{feature.t}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{feature.d}</span>
                </div>
              ))}
            </div>

            <Button
              type="primary"
              size="large"
              className="mt-14 bg-green-600 border-none h-14 px-10 rounded-xl font-bold"
            >
              Open Partnership Inquiry
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                label: "Annual Output",
                value: "1.5M+",
                sub: "Pieces Per Year",
              },
              { label: "Min. Order", value: "50 pcs", sub: "Per Style/Color" },
              {
                label: "Markets Served",
                value: "15+",
                sub: "Global Countries",
              },
              { label: "Lead Time", value: "21 Days", sub: "Average Delivery" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:border-green-500/50 transition-all duration-500 group"
              >
                <p className="text-4xl font-black text-white group-hover:text-green-400 transition-colors mb-2">
                  {stat.value}
                </p>
                <p className="text-green-500 font-bold uppercase tracking-tighter text-xs mb-1">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-none">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= WORKFLOW (STEPS) ================= */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 transform translate-x-20 z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <Tag
              color="green"
              className="mb-4 px-4 py-1 rounded-full uppercase tracking-widest font-bold"
            >
              Our Workflow
            </Tag>
            <Title
              level={2}
              className="!text-4xl md:!text-5xl !font-black !mb-6"
            >
              A Robust Framework for <br /> Bulk Procurement
            </Title>
            <Text className="text-gray-500 text-lg max-w-2xl block leading-relaxed">
              We don't just manufacture apparel; we manage a complete supply
              chain cycle that ensures stability, transparency, and premium
              quality for your brand.
            </Text>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {steps.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col h-full p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                {/* Step Icon & Number */}
                <div className="flex justify-between items-start mb-8">
                  <div
                    className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-500`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-green-100 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>

                <Divider className="my-4 border-gray-100" />

                {/* Technical Bullet Points */}
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs font-bold text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= B2B FAQ ================= */}
      {/* <AllProducts /> */}
      <B2BFAQ />
      {/* ================= B2B INQUIRY CTA ================= */}
      <B2BInquiryForm />
    </div>
  );
}
