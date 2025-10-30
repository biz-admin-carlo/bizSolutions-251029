import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";

export default function Products() {
  return (
    <section
      id="our-saas"
      className="scroll-mt-24 flex flex-col items-center py-14 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-[#1C1C1C]">
        Our SaaS
      </h2>

      {/* Subtext */}
      <p className="mt-3 text-center text-sm sm:text-base text-black/70 dark:text-white/70 max-w-md">
        Explore our suite of products designed to grow your business.
      </p>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 w-full max-w-screen-xl">
        {/* MyBiz */}
        <Card className="flex flex-col items-center text-center p-6 sm:p-8 hover:shadow-md transition-shadow">
          <Image
            src="/mybiz.svg"
            alt="MyBiz illustration"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="object-contain"
            priority
          />
          <h3 className="mt-6 text-[20px] sm:text-[22px] font-semibold text-[#1C1C1C]">
            MyBiz
          </h3>
          <p className="mt-1 text-sm sm:text-[14px] text-[#1C1C1C]/70">
            Business Listings
          </p>
          <div className="mt-6 sm:mt-auto pt-4">
            <Link
              href="/products/mybiz"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-5 py-2 text-sm sm:text-base text-white font-medium shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
            >
              Learn More
            </Link>
          </div>
        </Card>

        {/* MyBizBuddy */}
        <Card className="flex flex-col items-center text-center p-6 sm:p-8 hover:shadow-md transition-shadow">
          <Image
            src="/mybizbuddy.svg"
            alt="MyBizBuddy illustration"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="object-contain"
            priority
          />
          <h3 className="mt-6 text-[20px] sm:text-[22px] font-semibold text-[#1C1C1C]">
            MyBizBuddy
          </h3>
          <p className="mt-1 text-sm sm:text-[14px] text-[#1C1C1C]/70">
            Timekeeping App
          </p>
          <div className="mt-6 sm:mt-auto pt-4">
            <Link
              href="/products/mybizbuddy"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-5 py-2 text-sm sm:text-base text-white font-medium shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
            >
              Learn More
            </Link>
          </div>
        </Card>

        {/* MyBizChat */}
        <Card className="flex flex-col items-center text-center p-6 sm:p-8 hover:shadow-md transition-shadow">
          <Image
            src="/mybizchat.svg"
            alt="MyBizChat illustration"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="object-contain"
            priority
          />
          <h3 className="mt-6 text-[20px] sm:text-[22px] font-semibold text-[#1C1C1C]">
            MyBizChat
          </h3>
          <p className="mt-1 text-sm sm:text-[14px] text-[#1C1C1C]/70">
            AI Chat Plugin
          </p>
          <div className="mt-6 sm:mt-auto pt-4">
            <Link
              href="/products/mybizchat"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-5 py-2 text-sm sm:text-base text-white font-medium shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
            >
              Learn More
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
