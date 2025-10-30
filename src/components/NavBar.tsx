"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const nearTop = currentY < 10;
      const scrollingUp = currentY < lastScrollY;
      setIsVisible(scrollingUp || nearTop);
      lastScrollY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full border-b border-black/[.08] dark:border-white/[.145] bg-white shadow-sm transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center gap-4 p-3">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/bizsolutions-logo.png"
            alt="Biz Solutions logo"
            width={150}
            height={36}
            className="h-8 md:h-9 w-auto"
            priority
          />
        </Link>

        {/* Right side: Navigation + CTA (desktop) */}
        <div className="ml-auto hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 text-sm text-[#1C1C1C]">
            {/* Home link */}
            {pathname === "/" ? (
              <div className="flex flex-col items-center">
                <Link href="/" className="font-semibold text-teal-600">
                  Home
                </Link>
                <span className="mt-1 h-[2px] w-12 bg-teal-600 rounded-full" />
              </div>
            ) : (
              <Link
                href="/"
                className="font-semibold text-[#1C1C1C] hover:text-[#1C1C1C]"
              >
                Home
              </Link>
            )}

            {pathname.startsWith("/about") ? (
              <div className="flex flex-col items-center">
                <Link href="/about" className="font-semibold text-teal-600">
                  About Us
                </Link>
                <span className="mt-1 h-[2px] w-20 bg-teal-600 rounded-full" />
              </div>
            ) : (
              <Link
                href="/about"
                className="font-semibold text-[#1C1C1C] hover:text-[#1C1C1C]"
              >
                About Us
              </Link>
            )}

            {/* SaaS with dropdown */}
            <div className="relative group before:absolute before:top-full before:left-0 before:right-0 before:h-3 before:content-['']">
              <button className="inline-flex items-center gap-2 font-semibold text-[#1C1C1C] hover:text-[#1C1C1C]">
                <span>SaaS</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/70"
                  aria-hidden
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 hidden group-hover:block z-20">
                <div className="min-w-[220px] rounded-lg border border-black/[.08] dark:border-white/[.145] bg-white shadow-md p-2">
                  <Link
                    href="/products/mybiz"
                    className="block px-3 py-2 rounded-md hover:bg-black/[.04] dark:hover:bg-white/[.06]"
                  >
                    MyBiz
                  </Link>
                  <Link
                    href="/products/mybizchat"
                    className="block px-3 py-2 rounded-md hover:bg-black/[.04] dark:hover:bg-white/[.06]"
                  >
                    MyBizChat
                  </Link>
                  <Link
                    href="/products/mybizbuddy"
                    className="block px-3 py-2 rounded-md hover:bg-black/[.04] dark:hover:bg-white/[.06]"
                  >
                    MyBizBuddy
                  </Link>
                </div>
              </div>
            </div>

            {pathname.startsWith("/other-services") ? (
              <div className="flex flex-col items-center">
                <Link
                  href="/other-services"
                  className="font-semibold text-teal-600"
                >
                  Other Services
                </Link>
                <span className="mt-1 h-[2px] w-28 bg-teal-600 rounded-full" />
              </div>
            ) : (
              <Link
                href="/other-services"
                className="font-semibold text-[#1C1C1C] hover:text-[#1C1C1C]"
              >
                Other Services
              </Link>
            )}
            {pathname.startsWith("/faqs") ? (
              <div className="flex flex-col items-center">
                <Link href="/faqs" className="font-semibold text-teal-600">
                  FAQ’s
                </Link>
                <span className="mt-1 h-[2px] w-12 bg-teal-600 rounded-full" />
              </div>
            ) : (
              <Link
                href="/faqs"
                className="font-semibold text-[#1C1C1C] hover:text-[#1C1C1C]"
              >
                FAQ’s
              </Link>
            )}
            {pathname.startsWith("/careers") ? (
              <div className="flex flex-col items-center">
                <Link href="/careers" className="font-semibold text-teal-600">
                  Careers
                </Link>
                <span className="mt-1 h-[2px] w-16 bg-teal-600 rounded-full" />
              </div>
            ) : (
              <Link
                href="/careers"
                className="font-semibold text-[#1C1C1C] hover:text-[#1C1C1C]"
              >
                Careers
              </Link>
            )}
          </div>
          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-600 text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Right: Hamburger (mobile) */}
        <div className="ml-auto md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#1C1C1C] hover:bg-black/[.05] focus:outline-none focus:ring-2 focus:ring-teal-500/40"
          >
            {mobileOpen ? (
              // X icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`${
          mobileOpen ? "block" : "hidden"
        } md:hidden border-t border-black/[.08] bg-white shadow-sm`}
      >
        <div className="max-w-screen-xl mx-auto px-3 py-2">
          <nav className="flex flex-col py-1 text-[#1C1C1C]">
            <Link
              href="/"
              className="px-2 py-3 rounded-md hover:bg-black/[.04]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-2 py-3 rounded-md hover:bg-black/[.04]"
            >
              About Us
            </Link>

            <div className="mt-1 px-2 py-2">
              <div className="text-sm font-semibold text-[#1C1C1C]/70">
                SaaS
              </div>
              <div className="mt-1 flex flex-col">
                <Link
                  href="/products/mybiz"
                  className="px-2 py-2 rounded-md hover:bg-black/[.04]"
                >
                  MyBiz
                </Link>
                <Link
                  href="/products/mybizchat"
                  className="px-2 py-2 rounded-md hover:bg-black/[.04]"
                >
                  MyBizChat
                </Link>
                <Link
                  href="/products/mybizbuddy"
                  className="px-2 py-2 rounded-md hover:bg-black/[.04]"
                >
                  MyBizBuddy
                </Link>
              </div>
            </div>

            <Link
              href="/other-services"
              className="px-2 py-3 rounded-md hover:bg-black/[.04]"
            >
              Other Services
            </Link>
            <Link
              href="/faqs"
              className="px-2 py-3 rounded-md hover:bg-black/[.04]"
            >
              FAQ’s
            </Link>
            <Link
              href="/careers"
              className="px-2 py-3 rounded-md hover:bg-black/[.04]"
            >
              Careers
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center rounded-full bg-teal-600 text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
