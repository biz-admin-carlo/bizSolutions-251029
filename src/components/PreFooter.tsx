import { ReactNode } from "react";
import Link from "next/link";

type PreFooterProps = {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  rawChildren?: boolean;
};

export default function PreFooter({
  children,
  title,
  subtitle,
  ctaHref,
  ctaLabel,
  rawChildren = false,
}: PreFooterProps) {
  return (
    <section
      id="prefooter"
      className="relative -mx-[50vw] left-1/2 right-1/2 w-screen scroll-mt-24 py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/dotted-secondary-bg.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {children ? (
          rawChildren ? (
            <>{children}</>
          ) : (
            <p className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-[#1C1C1C]">
              {children}
            </p>
          )
        ) : (
          <>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
              {title ?? "Your business growth starts here."}
            </h2>
            <p className="mt-4 text-center text-sm sm:text-base text-[#1C1C1C]/80">
              {subtitle ?? "Smart tools. Real results. Growth made simple."}
            </p>
          </>
        )}
        {ctaHref && ctaLabel && (
          <div className="mt-6">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
            >
              {ctaLabel}
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
        )}
      </div>
    </section>
  );
}
