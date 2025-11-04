import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";
//
import PreFooter from "@/components/PreFooter";
import ProductIntro from "@/components/ProductIntro";
import ProductKeyFeatures from "@/components/ProductKeyFeatures";
import ProductWhyChoose from "@/components/ProductWhyChoose";

export const metadata: Metadata = { title: "MyBiz" };

export default function MyBizPage() {
  return (
    <>
      <NavBar />
      {/* Hero */}
      <section
        id="mybiz-hero"
        className="relative -mx-[50vw] left-1/2 right-1/2 w-screen bg-white bg-no-repeat bg-cover md:bg-contain bg-top md:bg-right pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 md:pb-24 min-h-[420px] sm:min-h-[540px] md:min-h-[560px] overflow-x-hidden"
        style={{
          backgroundImage: "url('/mybiz-banner.svg')",
        }}
      >
        {/* Mobile readability overlay to make background image fainter */}
        <div
          className="absolute inset-0 md:hidden bg-white/80 z-0 pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 h-full max-w-screen-xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <p className="text-5xl sm:text-6xl font-semibold tracking-tight text-left">
              <span className="text-[#FF851A]">MyBiz</span>
            </p>
            <h1 className="mt-6 text-3xl sm:text-2xl md:text-3xl font-semibold leading-tight text-[#1C1C1C] text-left">
              Put your business on the digital map.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#1C1C1C]/80 text-left max-w-2xl">
              Boost visibility, attract customers, and build trust with powerful
              business listings and professional websites.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#explore"
                className="inline-flex items-center justify-center rounded-lg border border-teal-500 px-5 py-2.5 text-teal-600 font-medium hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              >
                Explore MyBiz
              </Link>
              <Link
                href="https://mybizsolutions.us/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              >
                View Full Pricing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductIntro productName="MyBiz">
        MyBiz is your all-in-one visibility solution. From verified online
        listings to professional websites, MyBiz helps your business get
        discovered, stand out, and grow in the digital marketplace.
      </ProductIntro>
      <ProductKeyFeatures
        features={[
          {
            title: "Business Listings",
            description:
              "Show up where your customers are searching. MyBiz creates verified business profiles across trusted online platforms, boosting your credibility and making it easier for new clients to find you.",
            imageSrc: "/business-listings.svg",
            imageAlt: "Business Listings",
          },
          {
            title: "SEO Boost",
            description:
              "Climb higher in search results without the complexity. Built‑in SEO optimization helps your business rank better, giving you more visibility and more clicks.",
            imageSrc: "/seo-boost-icon.svg",
            imageAlt: "SEO Boost",
          },
          {
            title: "Customer Reviews",
            description:
              "Turn happy customers into your best promoters. Collect, manage, and display reviews that build trust and influence buying decisions.",
            imageSrc: "/Customer Reviews Icon.svg",
            imageAlt: "Customer Reviews",
          },
          {
            title: "Website Development",
            description:
              "Stand out online with a custom, mobile‑friendly website designed to showcase your brand. From sleek layouts to fast‑loading pages, we’ll turn visitors into loyal customers.",
            imageSrc: "/website-development-icon.svg",
            imageAlt: "Website Development",
          },
        ]}
      />
      <ProductWhyChoose
        productName="MyBiz"
        items={[
          {
            title: "Full Digital Presence",
            description:
              "With both verified listings and a professional website, MyBiz gives your business complete visibility online — so customers can find you anytime, anywhere.",
          },
          {
            title: "Built for Small & Growing Businesses",
            description:
              "We understand the challenges of scaling. MyBiz is designed to be simple, affordable, and effective for entrepreneurs, startups, and local businesses.",
          },
          {
            title: "Stay Competitive with SEO",
            description:
              "Our platform comes with built‑in SEO tools that help you rank higher in search results, keeping you ahead of competitors in your market.",
          },
          {
            title: "Hassle‑Free Setup",
            description:
              "No technical skills? No problem. We take care of the heavy lifting so you can focus on running your business while we get you online fast.",
          },
        ]}
      />
      <PreFooter
        rawChildren
        ctaHref="https://mybizsolutions.us/pricing"
        ctaLabel="View Full Pricing"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
          Your business deserves to be seen.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#1C1C1C]/80">
          From listings to websites,{" "}
          <span className="text-[#FF851A]">My Biz</span> gives you everything
          you need to shine online.
        </p>
      </PreFooter>
    </>
  );
}
