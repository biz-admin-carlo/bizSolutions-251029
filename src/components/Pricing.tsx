import Card from "@/components/Card";
import { Prata } from "next/font/google";

const prata = Prata({ subsets: ["latin"], weight: "400", display: "swap" });

function Plan({
  title,
  badge,
  price,
  period,
  ctaText,
  features,
  href,
}: {
  title: string;
  badge: string;
  price: string;
  period: string;
  ctaText: string;
  features: string[];
  href: string;
}) {
  return (
    <Card width={400} height={520} className="flex flex-col">
      <h3 className="text-[40px] font-semibold text-[#FF851A] text-center">
        {title}
      </h3>
      <p className="mt-1 text-center text-lg text-[#1C1C1C] font-semibold">
        {badge}
      </p>

      <div className="mt-6 text-left">
        <p className="text-base font-semibold text-[#1C1C1C]">Starting at</p>
        <div className="mt-2 flex items-baseline gap-3">
          <div
            className={`${prata.className} text-[40px] sm:text-[56px] leading-none text-[#1C1C1C]`}
          >
            {price}
          </div>
          <div className="text-base text-[#1C1C1C]">{period}</div>
        </div>
      </div>

      <a
        href={href}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#00A7A7] px-6 py-3 text-white font-medium shadow-sm hover:bg-[#009393] focus:outline-none focus:ring-2 focus:ring-[#00A7A7]/40"
      >
        {ctaText}
        <svg
          aria-hidden
          className="ml-2"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
        </svg>
      </a>

      <ul className="mt-6 space-y-4 text-base text-[#1C1C1C]">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00A7A7]"
              aria-hidden
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
          Affordable plans to get you started
        </h2>
        <p className="mt-3 text-center text-sm sm:text-base text-[#1C1C1C]/80">
          Discover our entry-level offers, the easiest way to experience each
          solution.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          <Plan
            title="MyBiz"
            badge="Starter Plan"
            price="$ 49.99"
            period="per month"
            ctaText="View Full Pricing"
            href="https://mybizsolutions.us/pricing"
            features={[
              "Verified business listing",
              "SEO-friendly profile",
              "Customer reviews",
              "Basic website development",
            ]}
          />

          <Plan
            title="MyBizBuddy"
            badge="Free Plan"
            price="$ 0"
            period="free for 1 user"
            ctaText="Try BizBuddy"
            href="https://mybizbuddy.co/pricing"
            features={[
              "Clock-in/out tracking",
              "Attendance reports",
              "Mobile app access",
            ]}
          />

          <Plan
            title="MyBizChat"
            badge="Free Plan"
            price="$ 0"
            period="forever"
            ctaText="Try BizChat Now"
            href="https://mybizchat.io/pricing"
            features={["Chat messaging app account", "Web plugin"]}
          />
        </div>
      </div>
    </section>
  );
}
