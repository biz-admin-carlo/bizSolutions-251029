"use client";

import NavBar from "@/components/NavBar";
import PreFooter from "@/components/PreFooter";
import Link from "next/link";
import ServiceSection from "@/components/ServiceSection";
import { FormEvent, useEffect } from "react";

export default function OtherServicesPage() {
  useEffect(() => {
    document.title = "Other Services | BizSolutions LLC";
  }, []);
  const handleQuoteSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("fullName") || "");
    const subjectInput = String(formData.get("subject") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");

    const subject = subjectInput || `Quote request from ${name || "website"}`;
    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      "",
      message && "Message:\n" + message,
    ]
      .filter(Boolean)
      .join("\n");

    const to = "info@bizsolutions.us";
    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto p-6 pt-0">
        {/* Hero */}
        <section
          className="relative -mx-[50vw] left-1/2 right-1/2 w-screen pt-36 pb-16 md:pb-20"
          style={{
            backgroundImage: "url('/dotted-secondary-bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1C1C] leading-tight">
              Your Partner in Comprehensive
              <br /> Outsourcing Solutions
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#1C1C1C]/80 max-w-4xl mx-auto">
              Empowering Your Business with Expertise That Delivers Results
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-teal-500 px-5 py-2.5 text-teal-600 font-medium hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              >
                Call Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Subsection below hero */}
        <section className="py-8 md:py-10">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-base leading-relaxed text-[#1C1C1C]/80">
              At BizSolutions, we offer a complete range of services designed to
              support your business at every level. Our dedicated teams
              specialize in website development, IT support, bookkeeping,
              customer service, sales and collection, and social media
              management. With our experience and commitment to excellence, we
              help your business operate efficiently and achieve lasting
              success.
            </p>
          </div>
        </section>

        {/* Service: Social Media Management using component */}
        <ServiceSection
          id="social-media-management"
          title="Social Media Management"
          introHeading="Your Partner in Social Media Success"
          introText="We help brands build meaningful connections online through strategy‑led content, on‑brand visuals, and data‑driven campaign execution."
          detailsHeading="Social Media Management at BizSolutions"
          detailsText="We create and curate content that reflects your brand’s personality, engage with followers, and track performance to ensure measurable results."
          whyHeading="Why Choose BizSolutions for Your Social Media Management?"
          whyText="We blend creativity with strategy to help your brand connect meaningfully with your audience. From crafting engaging content to managing campaigns, BizSolutions ensures every post builds visibility, trust, and loyalty."
          bulletsTitle="Our Social Media Services Include:"
          bullets={[
            "Content creation and post scheduling",
            "Community management and engagement",
            "Social media advertising and analytics",
            "Influencer collaboration and campaign monitoring",
            "Performance reporting and insights",
          ]}
          imageSrc="/Social Media Management Image.svg"
          imageAlt="Social media management"
          altBg={true}
          imageRight={false}
        />

        {/* Service: Bookkeeping Services using component */}
        <ServiceSection
          id="bookkeeping-services"
          title="Bookkeeping Services"
          introHeading="Your Partner in Bookkeeping Services"
          introText="Managing your finances has never been easier. At BizSolutions, we provide expert bookkeeping that helps your business stay compliant, accurate, and financially confident. Whether you're a startup or a growing enterprise, our goal is to simplify your books so you can focus on running your business."
          detailsHeading="Bookkeeping Services at BizSolutions"
          detailsText="Managing your finances has never been easier. At BizSolutions, we provide expert bookkeeping that helps your business stay compliant, accurate, and financially confident. Whether you're a startup or a growing enterprise, our goal is to simplify your books so you can focus on running your business."
          whyHeading="Why Choose BizSolutions for Your Bookkeeping?"
          whyText="We combine technology, accuracy, and expertise to make bookkeeping effortless and efficient. Our personalized approach ensures that your financial data is always organized, secure, and ready when you need it. With BizSolutions, you get the clarity and confidence to make better business decisions."
          bulletsTitle="Our Bookkeeping Services Include:"
          bullets={[
            "Accurate record keeping and financial reporting",
            "Payroll processing and reconciliation",
            "Accounts payable and receivable management",
            "Monthly and quarterly financial summaries",
            "Tax‑ready financial statements",
          ]}
          imageSrc="/Bookkepping Services Image.svg"
          imageAlt="Bookkeeping services"
          altBg={false}
          imageRight={false}
        />

        {/* Service: Website Development using component */}
        <ServiceSection
          id="website-development"
          title="Website Development"
          introHeading="Your Partner in Website Development"
          introText="Your website is more than just an online presence, it's your digital storefront, your first impression, and your most powerful marketing tool. At BizSolutions, we create professional, user‑focused websites that attract customers, build credibility, and drive results."
          detailsHeading="Website Development Services at BizSolutions"
          detailsText="We design and develop fully responsive, SEO‑optimized websites tailored to your business goals. Whether you need a simple informational site or a full‑scale eCommerce platform, our team ensures a seamless blend of design, functionality, and performance."
          whyHeading="Why Choose BizSolutions for Your Website Development?"
          whyText="Because we combine creativity with technology, ensuring your website not only looks great but performs flawlessly. Our approach focuses on delivering engaging user experiences that convert visitors into loyal customers."
          bulletsTitle="Our Website Development Services Include:"
          bullets={[
            "Custom website design aligned with your brand identity",
            "Mobile‑first, responsive layouts for all devices",
            "SEO and speed optimization for better search rankings",
            "eCommerce and payment gateway integration",
            "Website maintenance, updates, and security monitoring",
            "Landing page design and conversion optimization",
          ]}
          imageSrc="/Website Development Image.svg"
          imageAlt="Website development"
          altBg={true}
          imageRight={false}
        />

        {/* Service: Technical & IT Support using component */}
        <ServiceSection
          id="it-support"
          title="Technical & IT Support"
          introHeading="Your Trusted IT Support Partner"
          introText="Technology shouldn’t slow you down — it should move you forward. BizSolutions provides responsive, reliable, and secure IT support tailored to your business needs."
          detailsHeading="Technical & IT Support at BizSolutions"
          detailsText="We keep your systems running efficiently so your team can stay productive. From troubleshooting to cybersecurity, our experts handle it all with proactive monitoring and fast issue resolution."
          whyHeading="Why Choose BizSolutions for Your IT Support?"
          whyText="Our proactive approach ensures maximum uptime and data security. We focus on preventing issues before they affect your operations. With dedicated experts and reliable service, BizSolutions keeps your technology running smoothly so you can focus on growth."
          bulletsTitle="Our IT Services Include:"
          bullets={[
            "24/7 remote technical support",
            "Network setup, maintenance, and optimization",
            "Data backup and disaster recovery",
            "Hardware and software configuration",
            "Cybersecurity protection and audits",
          ]}
          imageSrc="/IT Support Image.svg"
          imageAlt="IT support"
          altBg={false}
          imageRight={false}
        />

        {/* Service: Customer Service Outsourcing using component */}
        <ServiceSection
          id="customer-service"
          title="Customer Service Outsourcing"
          introHeading="Your Partner in Customer Service"
          introText="Technology shouldn’t slow you down — it should move you forward. BizSolutions provides responsive, reliable, and secure IT support tailored to your business needs."
          detailsHeading="Customer Support at BizSolutions"
          detailsText="Our team acts as an extension of your brand, providing phone, email, and chat support that enhances customer satisfaction and builds loyalty."
          whyHeading="Why Choose BizSolutions for Your Customer Support?"
          whyText="We combine experience, empathy, and efficiency to ensure every customer feels valued. Our team is trained to represent your brand voice consistently while maintaining professionalism and warmth in every interaction."
          bulletsTitle="Our Customer Service Solutions Include:"
          bullets={[
            "24/7 inbound and outbound customer support",
            "Helpdesk and technical assistance",
            "Complaint resolution and feedback handling",
            "Live chat and email response management",
          ]}
          imageSrc="/Customer Service Image.svg"
          imageAlt="Customer service outsourcing"
          altBg={true}
          imageRight={false}
        />

        {/* Service: Sales & Collection using component */}
        <ServiceSection
          id="sales-collection"
          title="Sales & Collection Services"
          introHeading="Your Partner in Sales Collection"
          introText="Streamline your revenue process with BizSolutions’ Sales & Collection Services. We help businesses improve cash flow, close deals faster, and maintain strong client relationships."
          detailsHeading="Sales & Collection Services at BizSolutions"
          detailsText="Our trained professionals handle customer outreach, follow‑ups, and account collection with courtesy and precision, ensuring maximum recovery with minimal friction."
          whyHeading="Why Choose BizSolutions for Your Sales and Collection?"
          whyText="We prioritize professionalism, persistence, and positive communication to maintain customer relationships while securing timely payments. BizSolutions helps you increase revenue efficiency and reduce collection stress with proven, customer‑friendly strategies."
          bulletsTitle="Our Key Services Include:"
          bullets={[
            "Customer account management and follow‑ups",
            "Invoice tracking and collection monitoring",
            "CRM‑based sales reporting and analytics",
            "Payment reminders and reconciliation",
          ]}
          imageSrc="/Sales and Collection Services Image.svg"
          imageAlt="Sales and collection services"
          altBg={false}
          imageRight={false}
        />

        {/* Pre-Footer: Get a Free Quote */}
        <PreFooter rawChildren>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
            Get a Free <span className="text-[#FF851A]">Quote</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#1C1C1C]/80">
            Let’s Talk About What Your Business Needs
          </p>
          <p className="mt-6 max-w-4xl mx-auto text-sm sm:text-base text-[#1C1C1C]/80">
            We’re here to make business simple, efficient, and growth‑driven.
            Whether you’re looking to improve your operations, enhance your
            online presence, or streamline your customer service, our team at
            BizSolutions is ready to help.
          </p>
          <p className="mt-2 max-w-4xl mx-auto text-sm sm:text-base text-[#1C1C1C]/80">
            Getting started is easy — just share a few details about your
            business and the services you’re interested in. Our specialists will
            review your needs and provide a personalized quote tailored to your
            goals.
          </p>

          {/* Quote Form */}
          <div className="mt-10">
            <div className="mx-auto w-full md:max-w-[892px] md:aspect-[892/534]">
              <form
                onSubmit={handleQuoteSubmit}
                className="h-auto md:h-full rounded-lg border border-black/[.08] bg-white shadow-sm p-6 md:p-8 overflow-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-left text-sm font-semibold text-[#1C1C1C]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g John Doe"
                      name="fullName"
                      className="mt-2 w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-left text-sm font-semibold text-[#1C1C1C]">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="mt-2 w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-left text-sm font-semibold text-[#1C1C1C]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g name@example.com"
                      name="email"
                      className="mt-2 w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                      required
                    />
                  </div>
                  <div className="row-span-2">
                    <label className="block text-left text-sm font-semibold text-[#1C1C1C]">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={6}
                      name="message"
                      className="mt-2 w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-left text-sm font-semibold text-[#1C1C1C]">
                      Phone Number{" "}
                      <span className="text-[#1C1C1C]/60">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="mt-2 w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                    />
                  </div>
                </div>

                <p className="mt-6 text-xs text-[#1C1C1C]/70">
                  By clicking submit, you agree to BizSolutions{" "}
                  <Link href="/privacy" className="text-[#FF851A] underline">
                    Privacy Policy
                  </Link>{" "}
                  and consent to receive marketing emails and phone calls (if
                  you provided a phone number). You can unsubscribe at any time.
                </p>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                >
                  Submit
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
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <p className="text-base font-semibold text-[#1C1C1C]">
              Call us today and request your free quote
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors"
            >
              Call Us Now!
            </Link>
          </div>
        </PreFooter>
      </main>
    </>
  );
}
