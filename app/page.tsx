import Hero from "./ui/Hero";
import Experience from "./ui/Experience";
import Services from "./ui/Services";
import local from "next/font/local";

const utara = local(
  {
    src: [
      {
        path: "../public/fonts/Utara-Medium.ttf",
        weight: "600"
      }
    ]
  }
)

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Services />
      <section className="max-w-[80%] mx-auto py-6">
        <h1 className={`${utara.className} text-center text-4xl md:text-5xl xl:text-7xl`}>
          Heart-Crafted By <span className="text-[#00B068]">0xastroo</span>
        </h1>
      </section>
    </>
  );
}
