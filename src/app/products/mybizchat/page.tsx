import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import ProductIntro from "@/components/ProductIntro";
import ProductKeyFeatures from "@/components/ProductKeyFeatures";
import ProductWhyChoose from "@/components/ProductWhyChoose";
import PreFooter from "@/components/PreFooter";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "MyBizChat" };

export default function MyBizChatPage() {
  return (
    <>
      <NavBar />
      {/* Hero */}
      <section
        id="bizchat-hero"
        className="relative -mx-[50vw] left-1/2 right-1/2 w-screen bg-white bg-no-repeat bg-cover md:bg-contain bg-top md:bg-right pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 md:pb-24 min-h-[420px] sm:min-h-[540px] md:min-h-[560px] overflow-x-hidden"
        style={{
          backgroundImage: "url('/bizchat-banner.svg')",
        }}
      >
        {/* Mobile readability overlay to make background image fainter */}
        <div
          className="absolute inset-0 md:hidden bg-white/80 z-0 pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 h-full max-w-screen-xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <div className="text-5xl sm:text-6xl font-semibold tracking-tight">
              <span className="align-middle inline-flex items-center gap-3">
                <Image
                  src="/bizchat-logo.svg"
                  alt="BizChat"
                  width={250}
                  height={96}
                  priority
                />
                <span className="sr-only">BizChat</span>
              </span>
            </div>
            <h1 className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-[#1C1C1C] text-left">
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
                Explore Biz Chat
              </Link>
              <Link
                href="https://mybizchat.io/pricing"
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
      <ProductIntro productName="BizChat">
        BizChat is your 24/7 AI-powered website assistant. From answering FAQs
        to capturing leads, BizChat ensures every visitor feels heard,
        supported, and guided — without the need for extra staff.
      </ProductIntro>
      <ProductKeyFeatures
        features={[
          {
            title: "24/7 AI Chat Support",
            description:
              "Be there for your customers around the clock. BizChat instantly responds to questions, guides visitors, and provides support — even when your team is offline.",
            imageSrc: "/247 AI Chat Support icon.svg",
            imageAlt: "24/7 AI Chat Support",
          },
          {
            title: "Auto Translate",
            description:
              "Break language barriers instantly. BizChat translates conversations in real time, making it easy to connect with customers from different regions without needing a multilingual support team.",
            imageSrc: "/Auto Translate icon.svg",
            imageAlt: "Auto Translate",
          },
          {
            title: "Webchat Plugin",
            description:
              "Turn conversations into opportunities. BizChat collects contact details, qualifies prospects, and sends them straight to your sales pipeline.",
            imageSrc: "/Webchat Plugin icon.svg",
            imageAlt: "Webchat Plugin",
          },
          {
            title: "Quick Reply Suggestions",
            description:
              "Respond faster with AI-powered reply options. BizChat suggests the best answers in real time, helping your team handle conversations quickly and consistently.",
            imageSrc: "/Quick Reply Suggestions icon.svg",
            imageAlt: "Quick Reply Suggestions",
          },
        ]}
      />
      <ProductWhyChoose
        productName="BizChat"
        items={[
          {
            title: "Human-like AI",
            description:
              "Deliver conversations that feel personal and engaging. BizChat’s AI is trained to respond naturally, making customers feel like they’re chatting with a real team member.",
          },
          {
            title: "Scalable for Any Business",
            description:
              "Whether you’re a small startup, an online shop, or a growing enterprise, BizChat adapts to your needs and grows with your business.",
          },
          {
            title: "Boost Sales & Conversions",
            description:
              "Turn browsing into buying. By engaging visitors at the right moment, BizChat helps capture interest, answer questions, and guide leads toward conversion.",
          },
          {
            title: "Quick Setup, No Coding",
            description:
              "Skip the tech headaches. Install BizChat with a simple plugin and start chatting with customers in minutes — no coding or IT team required.",
          },
        ]}
      />
      <PreFooter rawChildren>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
          Ready to start smarter conversations?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#1C1C1C]/80">
          With <span className="text-[#FF851A]">Biz Chat</span>, every visitor
          becomes an opportunity.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            href="https://mybizchat.io/pricing"
            className="inline-flex items-center justify-center rounded-lg border border-teal-500 px-5 py-2.5 text-teal-600 font-medium hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
          >
            Compare Pricing
          </Link>
          <span className="text-[#1C1C1C]/60">or</span>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
          >
            Get Started
          </Link>
        </div>
      </PreFooter>
    </>
  );
}
