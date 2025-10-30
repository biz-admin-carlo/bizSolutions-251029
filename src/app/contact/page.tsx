"use client";

import NavBar from "@/components/NavBar";
import Link from "next/link";
import { FormEvent, useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | BizSolutions LLC";
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("fullName") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const subjectInput = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    const subject = subjectInput || `New inquiry from ${name || "website"}`;
    const bodyLines = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      "",
      message && "Message:\n" + message,
    ].filter(Boolean);
    const body = bodyLines.join("\n");

    const to = "info@bizsolutions.us";
    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };
  return (
    <>
      <NavBar />
      <section
        id="contact-hero"
        className="relative -mx-[50vw] left-1/2 right-1/2 w-screen h-[622px] -mt-20 bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "url('/contact-us-banner.png')" }}
      >
        <div className="h-full max-w-screen-xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-full md:max-w-[40vw]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-[#1C1C1C]">
              Let’s <span className="text-[#FF851A]">Connect</span>
            </h1>
            <p className="mt-6 text-lg md:text-l text-[#1C1C1C]/80">
              Have a question, need support, or want to learn more about our
              services? Our team is here to help. Choose the option that fits
              best, and we’ll get back to you shortly.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Details + Form */}
      <section id="contact" className="py-16">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-[45px] leading-[1.1] font-semibold text-[#1C1C1C]">
              Contact our Team
            </h2>
            <p className="mt-4 text-[#1C1C1C]/80 max-w-xl">
              Have questions or need support? Reach out to the BizSolutions
              team, we’re here to help.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold text-[#1C1C1C]">
                  Email Us :
                </p>
                <div className="mt-2 flex items-center gap-3 text-[#1C1C1C]">
                  {/* Mail icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="m22 8-10 7L2 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a
                    href="mailto:info@bizsolutions.us"
                    className="hover:underline"
                  >
                    info@bizsolutions.us
                  </a>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#1C1C1C]">
                  Call Us :
                </p>
                <div className="mt-2 flex items-center gap-3 text-[#1C1C1C]">
                  {/* Phone icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h2a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.46-1.14a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a href="tel:+18332497418" className="hover:underline">
                    +1 833-249-7418
                  </a>
                </div>
              </div>
            </div>

            <div className="my-10 h-px w-full bg-[#1C1C1C]/10" />

            <div>
              <h2 className="text-[45px] leading-[1.1] font-semibold text-[#1C1C1C]">
                Let’s Build Your Digital Success
              </h2>
              <p className="mt-4 text-[#1C1C1C]/80 max-w-xl">
                Reach out to our team and discover how BizSolutions can create
                the right digital tools such as websites, AI chat support,
                timekeeping apps, and online business listings to grow your
                business.
              </p>
              <div className="mt-6">
                <a
                  href="tel:+18332497418"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-teal-600 text-teal-700 px-5 py-2 text-sm font-semibold hover:bg-teal-50 transition-colors"
                >
                  CALL US NOW
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h2a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.46-1.14a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-black/[.08] shadow-sm p-6 md:p-8 bg-white"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1C1C1C]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g John Doe"
                    name="fullName"
                    className="mt-2 w-full rounded-md border border-black/[.12] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1C1C1C]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g name@example.com"
                    name="email"
                    className="mt-2 w-full rounded-md border border-black/[.12] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1C1C1C]">
                    Phone Number{" "}
                    <span className="text-[#1C1C1C]/60 text-xs">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder=""
                    name="phone"
                    className="mt-2 w-full rounded-md border border-black/[.12] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1C1C1C]">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="subject"
                    className="mt-2 w-full rounded-md border border-black/[.12] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1C1C1C]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    name="message"
                    className="mt-2 w-full rounded-md border border-black/[.12] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
              </div>

              <p className="mt-6 text-xs text-[#1C1C1C]/70">
                By clicking submit, you agree to BizSolutions{" "}
                <Link
                  href="/privacy-policy"
                  className="underline text-[#FF851A] hover:text-[#e37312]"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to receive marketing emails and phone calls (if you
                provided a phone number). You can unsubscribe at any time.
              </p>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-teal-600 text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors"
              >
                Submit
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M22 2 11 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2 15 22l-4-9-9-4 20-7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
