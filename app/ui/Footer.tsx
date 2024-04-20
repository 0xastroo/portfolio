import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-5">
      <div className="border-t-2 border-b-2">
        <div className="flex flex-col items-center gap-4 max-w-[80%] mx-auto py-6">
          <p className={`${GeistSans.className} text-center`}>
            GOT A GREAT IDEA BUT NEED HELP BUILDING IT?
          </p>
          <Link
            className={`${GeistSans.className} bg-[#00B068] px-3 py-1 rounded-md text-sm font-semibold`}
            href="/contact"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-5 max-w-[80%] mx-auto">
        <div className="flex flex-col gap-0.5">
          <a
            href="https://github.com/0xastroo"
            className={`${GeistMono.className} text-sm font-medium`}
          >
            GITHUB
          </a>
          <a
            href="https://twitter.com/0x_astroo"
            className={`${GeistMono.className} text-sm font-medium`}
          >
            X (TWITTER)
          </a>
          <a
            href="mailto:advait.nsj@proton.me"
            className={`${GeistMono.className} text-sm font-medium`}
          >
            advait.nsj@proton.me
          </a>
        </div>
        <p className={`${GeistSans.className} font-bold`}>
          {new Date().getFullYear()} ©{" "}
          <span className="text-[#00B068]">0xastroo</span>. {" "} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
