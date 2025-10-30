import NavBar from "@/components/NavBar";
import PreFooter from "@/components/PreFooter";
import FaqAccordionAnimator from "@/components/FaqAccordionAnimator";

export default function FAQsPage() {
  return (
    <>
      <NavBar />
      <section
        id="faqs-hero"
        className="relative -mx-[50vw] left-1/2 right-1/2 w-screen h-[622px] -mt-20 bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "url('/faq-banner.svg')" }}
      >
        <div className="h-full max-w-screen-xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <h1 className="mt-6 md:mt-10 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-[#1C1C1C]">
            <span className="text-[#FF851A]">Your Questions,</span> Answered
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#1C1C1C]/80 max-w-4xl">
            At BizSolutions, we believe clarity builds confidence. That’s why
            we’ve gathered the most common questions about our services — from
            MyBiz (online business listings & Website Development), BizChat (AI
            chat support), to BizBuddy (time tracking).
          </p>
          <p className="mt-4 text-lg md:text-xl text-[#1C1C1C]/80 max-w-3xl">
            Whether you’re just starting out or scaling your business, you’ll
            find straightforward answers to help you make the right decision.
          </p>
        </div>
      </section>

      {/* General Questions section */}
      <section id="general-faqs" className="pb-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-3 w-3 rounded-full bg-teal-600" />
            <h3 className="text-xl md:text-2xl font-semibold text-[#1C1C1C]">
              General Questions
            </h3>
          </div>

          <div>
            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  What is BizSolutions?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  BizSolutions is a web development and digital solutions
                  company that helps businesses establish and grow their online
                  presence. We provide modern websites, SEO optimization,
                  business listings, and smart tools designed to boost
                  visibility and efficiency.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Who are your typical clients?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  We work with small businesses, startups, and growing companies
                  across different industries. Whether you need a professional
                  website, stronger SEO, or digital tools to manage your
                  business, BizSolutions adapts to your needs.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  What industries do you serve?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Our services are industry‑flexible. We’ve supported businesses
                  in retail, services, real estate, healthcare, hospitality, and
                  more. If your business needs a digital presence, we can build
                  it.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id="services-faqs" className="pb-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-3 w-3 rounded-full bg-teal-600" />
            <h3 className="text-xl md:text-2xl font-semibold text-[#1C1C1C]">
              Services
            </h3>
          </div>

          <div>
            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  What services does BizSolutions offer?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">We provide:</p>
                <ul className="mt-3 list-disc pl-6 text-[#1C1C1C]/80 space-y-1">
                  <li>
                    <span className="font-semibold">MyBiz</span> — Online
                    business listings, SEO, reviews, and website development.
                  </li>
                  <li>
                    <span className="font-semibold">BizChat</span> — AI-powered
                    chat support with automation, translation, and web plugins.
                  </li>
                  <li>
                    <span className="font-semibold">BizBuddy</span> — A
                    timekeeping app with clock-in/out, smart scheduling, and
                    payroll tools.
                  </li>
                  <li>
                    <span className="font-semibold">Bookkeeping Services</span>{" "}
                    — Professional bookkeeping to manage your records, payroll,
                    and financial reports.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Technical & IT Support
                    </span>{" "}
                    — Reliable IT assistance, maintenance, and cybersecurity for
                    smooth operations.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Customer Service Outsourcing
                    </span>{" "}
                    — Dedicated representatives to handle customer inquiries and
                    support.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Sales & Collection Services
                    </span>{" "}
                    — Streamlined sales process and customer account management
                    for better cash flow.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Social Media Management
                    </span>{" "}
                    — Creative content, community engagement, and analytics to
                    grow your brand online.
                  </li>
                  <li>
                    <span className="font-semibold">Website Development</span> —
                    Custom, responsive, and SEO-optimized websites tailored to
                    your brand and goals.
                  </li>
                </ul>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Do you provide custom website development?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Yes. Every website we build is designed to reflect your brand
                  identity and meet your business objectives. We focus on user
                  experience, performance, and SEO to ensure your site attracts
                  and converts visitors effectively.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Can you help with SEO and online visibility?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Absolutely. We integrate SEO best practices into every project
                  and provide tools to help your business rank higher in search
                  results and attract more customers.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Do you offer ongoing support for all services?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Yes. Whether you’re using MyBiz, BizChat, or BizBuddy, we
                  provide continuous support, updates, and onboarding to help
                  you get the most out of your tools.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Which service is right for me — MyBiz, BizChat, or BizBuddy?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  It depends on your business goals:
                </p>
                <ul className="mt-3 list-disc pl-6 text-[#1C1C1C]/80 space-y-1">
                  <li>
                    Choose <span className="font-semibold">MyBiz</span> if you
                    want to boost your online presence through websites, SEO,
                    listings, and customer reviews.
                  </li>
                  <li>
                    Choose <span className="font-semibold">BizChat</span> if you
                    need AI-powered chat support, multilingual translation, and
                    smart web plugins to engage customers 24/7.
                  </li>
                  <li>
                    Choose <span className="font-semibold">BizBuddy</span> if
                    you want to manage your team better with time tracking,
                    clock-in/out, smart scheduling, and payroll tools.
                  </li>
                  <li>
                    Choose{" "}
                    <span className="font-semibold">Bookkeeping Services</span>{" "}
                    if you want accurate recordkeeping and financial clarity.
                  </li>
                  <li>
                    Choose{" "}
                    <span className="font-semibold">
                      Technical & IT Support
                    </span>{" "}
                    if you need reliable system maintenance, troubleshooting, or
                    cybersecurity.
                  </li>
                  <li>
                    Choose{" "}
                    <span className="font-semibold">
                      Customer Service Outsourcing
                    </span>{" "}
                    if you want a professional team to enhance your customer
                    experience.
                  </li>
                  <li>
                    Choose{" "}
                    <span className="font-semibold">
                      Sales & Collection Services
                    </span>{" "}
                    if you aim to improve your revenue process and manage client
                    relationships efficiently.
                  </li>
                  <li>
                    Choose{" "}
                    <span className="font-semibold">
                      Social Media Management
                    </span>{" "}
                    if you want to strengthen your online presence and engage
                    your audience creatively.
                  </li>
                  <li>
                    Choose{" "}
                    <span className="font-semibold">Website Development</span>{" "}
                    if you want a professional, mobile-friendly, and
                    high-performing website that drives results.
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Delivery section */}
      <section id="process-delivery-faqs" className="pb-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-3 w-3 rounded-full bg-teal-600" />
            <h3 className="text-xl md:text-2xl font-semibold text-[#1C1C1C]">
              Process & Delivery
            </h3>
          </div>

          <div>
            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  How does the project process work?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Our process includes a discovery call, planning, design,
                  development, testing, and launch. We keep you updated every
                  step of the way to ensure the final product matches your
                  vision.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  How long does it take to build a website?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Timelines vary depending on project complexity. A simple
                  website can be ready in 2–3 weeks, while a more advanced
                  custom site may take 6–8 weeks.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Can you work with my existing website or do you only build
                  from scratch?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  We can do both. If you already have a website, we can
                  redesign, optimize, or enhance it. If you’re starting fresh,
                  we’ll build a new one tailored to your needs.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages section */}
      <section id="pricing-packages-faqs" className="pb-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-3 w-3 rounded-full bg-teal-600" />
            <h3 className="text-xl md:text-2xl font-semibold text-[#1C1C1C]">
              Pricing & Packages
            </h3>
          </div>

          <div>
            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  How much does MyBiz cost?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Pricing depends on your needs, such as listings, SEO, and
                  website features. We offer starter-friendly plans and the
                  ability to scale as you grow.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  How much does BizBuddy cost?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  BizBuddy offers flexible plans depending on your team size.
                  The Starter plan is free for individual use, while paid plans
                  unlock advanced features like payroll integration, team
                  reports, and scheduling tools.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Is BizChat affordable for small businesses?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Yes. BizChat’s entry-level plan provides AI-powered chat
                  support at a low cost, giving small businesses 24/7 customer
                  engagement without hiring extra staff. Higher-tier plans add
                  advanced automation and integrations.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  How much does a website cost?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Pricing depends on features, design complexity, and project
                  scope. We offer flexible plans for startups, small businesses,
                  and growing companies, so you can choose what fits your
                  budget.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Can I try BizBuddy or BizChat before paying?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Absolutely. Both BizBuddy and BizChat come with free starter
                  plans so you can explore the features before upgrading to a
                  paid plan that suits your business needs.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Do you offer flexible plans for small businesses?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Yes. Our Starter plans are designed to give small businesses
                  affordable access to professional websites and essential
                  digital tools.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Can I upgrade services later as my business grows?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Definitely. Our solutions are scalable, so you can start small
                  and add features, integrations, or tools as your business
                  expands.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Technical & Maintenance section */}
      <section id="technical-maintenance-faqs" className="pb-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-3 w-3 rounded-full bg-teal-600" />
            <h3 className="text-xl md:text-2xl font-semibold text-[#1C1C1C]">
              Technical & Maintenance
            </h3>
          </div>

          <div>
            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Are MyBiz, BizChat, and BizBuddy mobile-friendly?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Yes. All of our services are optimized for mobile devices so
                  you can manage your business anytime, anywhere.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Will my website be mobile-friendly?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Yes. Every website we develop is fully responsive, ensuring it
                  looks and performs great on desktops, tablets, and
                  smartphones.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Do you provide hosting and domain services?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Yes. MyBiz includes hosting and domain support as part of its
                  packages, ensuring your website is secure and always
                  accessible.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  How do you ensure security across your services?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  We use SSL certificates, secure hosting, and data encryption
                  to keep your business and customer information safe.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  Do I need technical skills to use your services?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Not at all. MyBiz, BizChat, and BizBuddy are built to be
                  user-friendly. Our team handles setup, and you get easy
                  dashboards to manage everything without coding.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Enable smooth accordion animations */}
      <FaqAccordionAnimator />

      {/* Support & Communication section */}
      <section id="support-communication-faqs" className="pb-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-3 w-3 rounded-full bg-teal-600" />
            <h3 className="text-xl md:text-2xl font-semibold text-[#1C1C1C]">
              Support & Communication
            </h3>
          </div>

          <div>
            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  How do I get help if I need it?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  Our support team is available through email and chat. We also
                  provide knowledge bases and training materials for MyBiz,
                  BizChat, and BizBuddy.
                </p>
              </details>
            </div>

            <div className="border-t-2 border-teal-600">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[#1C1C1C] font-semibold">
                  What kind of support do you provide after launch?
                  <svg
                    className="size-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 15l6-6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[#1C1C1C]/80">
                  We offer maintenance packages, troubleshooting, updates, and
                  priority support options depending on your plan — whether for
                  MyBiz, BizChat, or BizBuddy.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Prefooter CTA */}
      <PreFooter
        title={"Can’t find what you’re looking for?"}
        subtitle={"we’re here to help."}
        ctaHref="/contact"
        ctaLabel="Contact Us Today"
      />
    </>
  );
}
