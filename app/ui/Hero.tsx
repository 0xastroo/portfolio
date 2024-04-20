import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export default function Hero() {
  return (
    <main className="max-w-[80%] mx-auto py-16">
      <div className="flex flex-col gap-6">
        <h1 className={`${GeistSans.className} text-2xl font-bold`}>
          Hello, I'm Advait
        </h1>
        <p className={`${GeistMono.className}`}>
          I am a{" "}
          <span className="bg-[#F6FF92] text-black px-[3px]">student</span> and
          a dedicated Web Developer. I work as a{" "}
          <span className="bg-[#F6FF92] text-black px-[3px]">
            Frontend Engineer
          </span>{" "}
          at{" "}
          <a
            className="underline text-[#00B068]"
            target="_blank"
            href="https://wne3.live"
          >
            WNE3
          </a>
          . My area of expertise lies in crafting{" "}
          <span className="bg-[#F6FF92] text-black px-[3px]">
            modern and minimalist
          </span>{" "}
          user interfaces.
        </p>
      </div>
    </main>
  );
}
