import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import ProductIntro from "@/components/ProductIntro";
import ProductKeyFeatures from "@/components/ProductKeyFeatures";
import ProductWhyChoose from "@/components/ProductWhyChoose";
import PreFooter from "@/components/PreFooter";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "MyBizBuddy" };

export default function MyBizBuddyPage() {
  return (
    <>
      <NavBar />
      {/* Hero */}
      <section
        id="mybizbuddy-hero"
        className="relative -mx-[50vw] left-1/2 right-1/2 w-screen bg-white bg-no-repeat bg-cover md:bg-contain bg-top md:bg-right pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 md:pb-24 min-h-[420px] sm:min-h-[540px] md:min-h-[560px] overflow-x-hidden"
        style={{
          backgroundImage: "url('/bizbuddy-banner.svg')",
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
                  src="/bizbuddy-horizontal-logo.png"
                  alt="BizBuddy"
                  width={250}
                  height={96}
                  priority
                />
                <span className="sr-only">BizBuddy</span>
              </span>
            </div>
            <h1 className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-[#1C1C1C] text-left">
              Simplify time tracking and boost productivity.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#1C1C1C]/80 text-left max-w-2xl">
              From clock-ins to payroll, BizBuddy keeps your team organized and
              efficient.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#explore"
                className="inline-flex items-center justify-center rounded-lg border border-teal-500 px-5 py-2.5 text-teal-600 font-medium hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              >
                Visit Biz Buddy
              </Link>
              <Link
                href="https://mybizbuddy.co/pricing"
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

      <ProductIntro productName="Biz Buddy">
        BizBuddy is your all‑in‑one timekeeping app designed to make work
        management simple. From logging hours to generating payroll‑ready
        reports, BizBuddy helps you stay on top of schedules, productivity, and
        team performance.
      </ProductIntro>

      <ProductKeyFeatures
        features={[
          {
            title: "Clock‑in / Clock‑out",
            description:
              "Simplify attendance tracking. Employees can clock in and out with just one tap — anytime, anywhere — ensuring accurate time logs without the hassle of manual tracking.",
            imageSrc: "/Clock-in, Clock-out Icon.svg",
            imageAlt: "Clock‑in / Clock‑out",
          },
          {
            title: "Payroll Integration",
            description:
              "Save hours on payroll processing. BizBuddy automatically compiles work hours into export‑ready payroll reports, helping you reduce errors and streamline payouts.",
            imageSrc: "/Payroll Integration icon.svg",
            imageAlt: "Payroll Integration",
          },
          {
            title: "Smart Scheduling",
            description:
              "Keep your team organized and avoid conflicts. Easily plan shifts, assign tasks, and manage availability with an intuitive scheduler that keeps everyone on the same page.",
            imageSrc: "/Smart Scheduling icon.svg",
            imageAlt: "Smart Scheduling",
          },
          {
            title: "Mobile‑Friendly",
            description:
              "Work seamlessly from anywhere. With BizBuddy’s mobile app, employees and managers can track hours, view schedules, and manage reports on the go.",
            imageSrc: "/Mobile-Friendly icon.svg",
            imageAlt: "Mobile‑Friendly",
          },
        ]}
      />

      <ProductWhyChoose
        productName="Biz Buddy"
        items={[
          {
            title: "Designed for Teams of Any Size",
            description:
              "Whether you’re running a small business or managing a growing company, BizBuddy adapts to your needs and scales effortlessly as your team expands.",
          },
          {
            title: "Boost Productivity",
            description:
              "Turn insights into action. With clear reports and analytics, you’ll understand team performance at a glance and make smarter business decisions.",
          },
          {
            title: "Real‑Time Accuracy",
            description:
              "Say goodbye to outdated manual logs. BizBuddy tracks hours and attendance instantly, giving you accurate records you can trust.",
          },
          {
            title: "Easy Setup & Use",
            description:
              "No steep learning curve. BizBuddy is designed to be intuitive and user‑friendly, so your team can start tracking time and schedules within minutes.",
          },
        ]}
      />

      <PreFooter rawChildren>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
          Take control of time, schedules, and payroll.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#1C1C1C]/80">
          <span className="text-[#FF851A]">Biz Buddy</span> keeps your team on
          track and your business moving forward.
        </p>
      </PreFooter>

      {/* Download Section */}
      <section
        id="download"
        className="max-w-screen-xl mx-auto px-6 py-16 md:py-24 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
          Available now on iOS & Android
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#1C1C1C]/80">
          Download the app and simplify team management today.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Image
            src="/DL Button.png"
            alt="Download on the App Store and Google Play"
            width={560}
            height={140}
            className="object-contain"
            priority
          />
        </div>
      </section>
    </>
  );
}
