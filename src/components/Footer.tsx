import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[.08] dark:border-white/[.145] bg-[#F9F9F9]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 p-6 md:p-10 text-[#1C1C1C]">
        {/* Brand + Summary */}
        <div className="space-y-3">
          <h3
            className={`${poppins.className} text-[28px] sm:text-[36px] md:text-[45px] font-semibold tracking-tight text-[#FF851A] leading-tight`}
          >
            BizSolutions LLC
          </h3>
          <p className="text-lg font-semibold">
            Your Partner for Your Business Needs
          </p>
          <p className="text-sm text-black/70 leading-relaxed">
            BizSolutions is your partner in growth — streamlining operations,
            boosting visibility, and giving you the tools to focus on what
            matters most: lasting success.
          </p>
          <div className="flex items-center gap-4 pt-2">
            {/* Social icons */}
            <SocialLink href="#" label="Facebook">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
              </svg>
            </SocialLink>
            <SocialLink href="#" label="LinkedIn">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.45 2.45 0 0 1 6.94 6.5ZM4.78 8.56h4.32V20H4.78ZM13 8.56h-4.2V20h4.2v-6.19c0-1.64.86-2.7 2.26-2.7s1.98.95 1.98 2.65V20h4.21v-6.7c0-3.35-1.79-4.91-4.19-4.91a3.6 3.6 0 0 0-3.26 1.79h-.04Z" />
              </svg>
            </SocialLink>
            <SocialLink href="#" label="X">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M4 3h4.5l3.05 4.58L15.8 3H20l-6.1 8.01L20.5 21H16l-3.33-4.97L9.07 21H4.02l6.77-9.06Z" />
              </svg>
            </SocialLink>
            <SocialLink href="#" label="Instagram">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-3.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
              </svg>
            </SocialLink>
            <SocialLink href="#" label="TikTok">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M13.5 3H16a4.6 4.6 0 0 0 4.5 4.5V10A7.1 7.1 0 0 1 16 8.42V15a5 5 0 1 1-5-5 5.1 5.1 0 0 1 1 .1V12a3 3 0 1 0 3 3Z" />
              </svg>
            </SocialLink>
            <SocialLink href="#" label="YouTube">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M22 12s0-3.2-.41-4.61a3 3 0 0 0-2.11-2.11C17.07 4.9 12 4.9 12 4.9s-5.07 0-7.48.38A3 3 0 0 0 2.41 7.4C2 8.8 2 12 2 12s0 3.2.41 4.6a3 3 0 0 0 2.11 2.12c2.4.38 7.48.38 7.48.38s5.07 0 7.48-.38a3 3 0 0 0 2.11-2.12C22 15.21 22 12 22 12ZM10 15.5v-7l6 3.5Z" />
              </svg>
            </SocialLink>
          </div>
        </div>

        {/* Right column group: Navigation, Help, Contact */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 md:justify-self-end md:w-fit">
          {/* Navigation links */}
          <div>
            <p className="text-sm font-semibold mb-4">Navigation Links</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:underline underline-offset-4">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:underline underline-offset-4"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#solutions"
                  className="hover:underline underline-offset-4"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#other-services"
                  className="hover:underline underline-offset-4"
                >
                  Other Services
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="hover:underline underline-offset-4"
                >
                  FAQ’s
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="text-sm font-semibold mb-4">Help</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#contact"
                  className="hover:underline underline-offset-4"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline underline-offset-4">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline underline-offset-4">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <p className="text-sm font-semibold mb-4">Contact Details</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-teal-600" aria-hidden>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                </span>
                <span>San Jose, CA 95132</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-teal-600" aria-hidden>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1.1 1.1 0 0 1 1.2-.27c1.3.52 2.7.8 4.1.8a1.1 1.1 0 0 1 1.1 1.1V20a2 2 0 0 1-2 2C10.7 22 2 13.3 2 2a2 2 0 0 1 2-2h2.2a1.1 1.1 0 0 1 1.1 1.1c0 1.4.27 2.8.8 4.1.16.42.05.9-.27 1.2Z" />
                  </svg>
                </span>
                <a
                  href="tel:+18332497418"
                  className="hover:underline underline-offset-4"
                >
                  +1 833-249-7418
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-teal-600" aria-hidden>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6Zm0 3.73V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.73l-9.35 5.84a2 2 0 0 1-2.3 0Z" />
                  </svg>
                </span>
                <a
                  href="mailto:Info@bizsolutions.us"
                  className="hover:underline underline-offset-4"
                >
                  Info@bizsolutions.us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright bar */}
      <div className="w-full bg-[#1F1F1F] text-white">
        <div className="max-w-screen-xl mx-auto py-3 px-6 md:px-10 text-center text-sm">
          <span>© {new Date().getFullYear()} All Rights Reserved. </span>
          <span className="text-[#FF851A] font-medium">Bizsolutions LLC.</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-[#00A7A7] hover:text-[#00A7A7] transition-colors"
    >
      {children}
    </Link>
  );
}
