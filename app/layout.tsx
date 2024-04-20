import type { Metadata } from "next";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "0xastroo - Portfolio",
  description:
    "Advait is a committed Frontend Developer. His area of expertise lies in crafting modern and minimalist user interfaces. He is determined to be on top of the constantly changing digital scene.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#141414] antialiased">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
