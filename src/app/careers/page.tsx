import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Careers" };
import Link from "next/link";

export default function CareersPage() {
  return (
    <>
      <NavBar />
      <section
        id="careers-hero"
        className="relative -mx-[50vw] left-1/2 right-1/2 w-screen bg-no-repeat bg-cover pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 md:pb-24 min-h-[420px] sm:min-h-[540px] md:min-h-[622px] overflow-x-hidden"
        style={{
          backgroundImage: "url('/careers-banner.svg')",
          backgroundPosition: "right center",
        }}
      >
        {/* Mobile readability overlay to make background image fainter */}
        <div
          className="absolute inset-0 md:hidden bg-white/80 z-0 pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 h-full max-w-screen-xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-full md:max-w-[45vw]">
            <h1 className="mt-6 md:mt-10 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-[#1C1C1C]">
              Build Your Future with
              <br />
              <span className="text-[#FF851A]">BizSolutions</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#1C1C1C]/80">
              At BizSolutions, we are always on the lookout for talented and
              passionate individuals to join our dynamic team. Our commitment to
              excellence starts with our employees, and we pride ourselves on
              creating an inclusive and supportive work environment.
            </p>
            <div className="mt-8">
              <Link
                href="#open-positions"
                className="inline-flex items-center rounded-[10px] bg-teal-600 text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
