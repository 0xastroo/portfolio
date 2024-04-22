import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export default function Page() {
  return (
    <main className="max-w-[80%] mx-auto">
      <div className="flex h-[75vh] items-center justify-center">
        <form action="">
          <div className="flex flex-col gap-3">
            <h1 className={`${GeistSans.className} text-4xl font-extrabold`}>
              Hello,
            </h1>
            <div className="flex flex-col gap-1">
              <h3 className={`${GeistSans.className} text-2xl font-medium`}>
                My{" "}
                <label htmlFor="name" className="text-[#00B068] px-[3px]">
                  name
                </label>{" "}
                is
              </h3>
              <input
                type="text"
                id="name"
                className={`${GeistSans.className} w-full text-xl rounded-lg text-[#F6FF92] bg-[#171717] border border-white outline-none px-3 py-[6px] font-medium`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className={`${GeistSans.className} text-2xl font-medium`}>
                I need{" "}
                <label htmlFor="help" className="text-[#00B068] px-[3px]">
                  help
                </label>{" "}
                with
              </h3>
              <input
                type="text"
                id="help"
                className={`${GeistSans.className} w-full text-xl rounded-lg text-[#F6FF92] bg-[#171717] border border-white outline-none px-3 py-[6px] font-medium`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className={`${GeistSans.className} text-2xl font-semibold`}>
                You can{" "}
                <label htmlFor="email" className="text-[#00B068] px-[3px]">
                  email
                </label>{" "}
                me at
              </h3>
              <input
                type="email"
                id="email"
                className={`${GeistSans.className} w-full text-xl rounded-lg text-[#F6FF92] bg-[#171717] border border-white outline-none px-3 py-[6px] font-medium`}
              />
            </div>
            <button className="mt-6">
              <span
                className={`${GeistMono.className} text-xl bg-[#F6FF92] rounded-md text-black font-semibold px-6 py-2`}
              >
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
