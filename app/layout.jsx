import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/global/Navbar";
import { Footer } from "./components/global/Footer";
import "./i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>WONDER - Premium Clothing</title>
        <meta name="description" content="B2B Manufacturing and Wholesale" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <>
          <Navbar />
          <main className="flex-grow pt-32">{children}</main>
          <Footer />
        </>
        {/* <div className="min-h-screen bg-white" /> */}
      </body>
    </html>
  );
}
