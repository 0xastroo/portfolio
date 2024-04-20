import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export default function Services() {
  return (
    <section className="flex flex-col gap-6 max-w-[80%] mx-auto py-10">
      <h1 className={`${GeistSans.className} text-white font-bold text-3xl`}>
        SERVICES
      </h1>

      <div className="grid gap-4">
        <div className="bg-[rgba(0,0,0,.2)] h-52 p-6 rounded-lg">
          <h1 className={`${GeistSans.className} text-3xl`}>
            I AM <span className="underline text-[#00B068]">OPEN TO WORK!</span>
          </h1>
        </div>
        <div className="flex flex-col justify-between bg-[rgba(0,0,0,.2)] h-52 p-6 rounded-lg">
          <h1 className={`${GeistSans.className} text-xl`}>
            I WILL CREATE A FULLY FUNCTIONAL DYNAMIC WEBSITE FOR YOU!
          </h1>
          <div className="flex justify-between items-center">
            <p className={`${GeistSans.className} font-semibold`}>
              WEB DEVELOPMENT
            </p>
            <p
              className={`${GeistMono.className} text-[#F6FF92] font-semibold`}
            >
              01
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[rgba(0,0,0,.2)] h-52 p-6 rounded-lg">
          <h1 className={`${GeistSans.className} text-xl`}>
            I WILL DESIGN AN EYE CATCHING USER-INTERFACE
          </h1>
          <div className="flex justify-between items-center">
            <p className={`${GeistSans.className} font-semibold`}>WEB DESIGN</p>
            <p
              className={`${GeistMono.className} text-[#F6FF92] font-semibold`}
            >
              02
            </p>
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,.2)] h-52 p-6 rounded-lg">
          <h1 className={`${GeistSans.className} text-3xl`}>
            <span className="underline text-[#00B068]">CONNECT</span> WITH ME TO
            DISCUSS FURTHER
          </h1>
        </div>
      </div>
    </section>
  );
}
