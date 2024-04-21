import { GeistMono } from "geist/font/mono";

export default function Page() {
  return (
    <main className="max-w-[80%] mx-auto">
      <div className="flex h-[80vh] justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1
            className={`${GeistMono.className} text-4xl text-center font-bold`}
          >
            Building some{" "}
            <span className="bg-[#F6FF92] text-black px-[3px]">awesome</span>{" "}
            projects!
          </h1>
          <p className={`${GeistMono.className} font-medium`}>
            Will be listing them here soon!
          </p>
        </div>
      </div>
    </main>
  );
}
