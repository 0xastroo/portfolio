"use client";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-5 bg-black">
      <div>
        <Link className="flex flex-col items-center -gap-0.5" href="/">
          <h1 className={`${GeistSans.className} font-semibold `}>
            Advait Jadhav
          </h1>
          <p
            className={`${GeistMono.className} font-semibold text-xs text-[#00B068]`}
          >
            0xastroo
          </p>
        </Link>
      </div>

      <Image
        onClick={() => setIsOpen(true)}
        src="/hamburger.svg"
        width={40}
        height={13}
        alt="open-nav"
      />
      <nav
        className={`fixed top-0 right-0 h-screen bg-black w-3/4 transition-all delay-75 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6">
          <Link href="#" onClick={() => setIsOpen(false)}>
            CLOSE NAV
          </Link>
        </div>
        <ul className="flex flex-col h-[30vh] justify-center gap-6 items-center ">
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className={`${GeistMono.className} text-2xl hover:underline`}
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className={`${GeistMono.className} text-2xl hover:underline`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
