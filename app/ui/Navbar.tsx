import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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

      <Image src="/hamburger.svg" width={40} height={13} alt="open-nav" />
    </header>
  );
}
