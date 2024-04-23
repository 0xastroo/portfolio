"use client";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-black md:px-20">
      <div>
        <Link className="flex flex-col -gap-0.5" href="/">
          <h1 className={`${GeistSans.className} text-lg font-semibold `}>
            Advait Jadhav
          </h1>
          <p
            className={`${GeistMono.className} font-semibold text-xs text-[#00B068]`}
          >
            0xastroo
          </p>
        </Link>
      </div>

      <Link href="#" onClick={() => setIsOpen(true)}>
        <Image
          src="/hamburger.svg"
          width={40}
          height={13}
          alt="open-nav"
        />
      </Link>
      <motion.nav
        className={`fixed top-0 right-0 h-screen bg-black w-full`}
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={variants}
        transition={{
          ease: "linear",
          duration: .25,
        }}
      >
        <div className="fixed top-0 right-0 p-6">
          <Link href="#" onClick={() => setIsOpen(false)}>
            <Image
              src="/closeNav.svg"
              width={45}
              height={45}
              alt="close-nav"
              className="text-white"
            />
          </Link>
        </div>
        <ul className="flex flex-col h-[75vh] justify-center gap-10 items-center ">
          <motion.li
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "bounce", duration: .8 }}
          >
            <Link
              onClick={() => setIsOpen(false)}
              className={`${GeistMono.className} text-4xl hover:underline`}
              href="/"
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "bounce", duration: .8 }}
          >
            <Link
              onClick={() => setIsOpen(false)}
              className={`${GeistMono.className} text-4xl hover:underline`}
              href="/projects"
            >
              Projects
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "bounce", duration: .8 }}
          >
            <Link
              onClick={() => setIsOpen(false)}
              className={`${GeistMono.className} text-4xl hover:underline`}
              href="/contact"
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </motion.nav>
    </header>
  );
}
