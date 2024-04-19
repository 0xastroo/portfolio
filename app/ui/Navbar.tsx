import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 px-5 bg-black">
      <div className="flex flex-col items-center -gap-0.5">
        <h1 className={`${GeistSans.className} font-semibold `}>
          Advait Jadhav
        </h1>
        <p
          className={`${GeistMono.className} font-semibold text-xs text-[#00B068]`}
        >
          0xastroo
        </p>
      </div>

      <Image src="/hamburger.svg" width={40} height={13} alt="open-nav" />
    </header>
  );
}
