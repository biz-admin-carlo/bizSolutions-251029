export default function SaasOverview() {
  return (
    <section
      id="saas-overview"
      className="relative -mx-[50vw] left-1/2 right-1/2 w-screen scroll-mt-24 py-20 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
          SaaS Overview
        </h2>
        <p className="mt-4 text-center text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed">
          BizSolutions is your all-in-one partner for business growth. From
          boosting your online presence with MyBiz, to engaging customers
          through MyBizChat, and simplifying workforce management with BizBuddy,
          we deliver smart, scalable tools designed to help your business
          thrive.
        </p>

        <div className="mt-14 space-y-0">
          {/* MyBiz */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-y-8 items-start py-12 md:py-16">
            <div>
              <h3 className="text-3xl font-semibold text-[#FF851A]">MyBiz</h3>
              <p className="mt-3 text-lg font-semibold text-[#1C1C1C]">
                Online Business Listings & Website Development
              </p>
              <p className="mt-3 text-sm text-[#1C1C1C]/80 leading-relaxed">
                Put your business on the digital map with MyBiz. Gain
                visibility, attract new customers, and build trust with verified
                online listings and professional websites designed to help you
                stand out and grow.
              </p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-[#1C1C1C]">100k +</p>
                <p className="text-xs text-[#1C1C1C]/70">
                  Active Business Listings
                </p>
              </div>
            </div>
            <div>
              <p className="text-base font-semibold text-[#1C1C1C]">
                Key Features :
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-[#1C1C1C]/80">
                <li>Business listings that improve your online presence</li>
                <li>Built-in SEO boost to rank higher in searches</li>
                <li>Customer reviews to build credibility and trust</li>
                <li>
                  Professional profile that stands out from the competition
                </li>
                <li>Custom website development tailored to your business</li>
              </ul>
            </div>
          </div>

          {/* MyBizChat - full-bleed band */}
          <div className="relative left-1/2 -translate-x-1/2 w-screen bg-[#F9F9F9] overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 items-start py-12 md:py-16">
                <div>
                  <h3 className="text-3xl font-semibold text-[#FF851A]">
                    MyBizChat
                  </h3>
                  <p className="mt-3 text-lg font-semibold text-[#1C1C1C]">
                    AI-Powered Chat Plugin
                  </p>
                  <p className="mt-3 text-sm text-[#1C1C1C]/80 leading-relaxed">
                    Engage visitors the moment they land on your site. MyBizChat
                    provides AI-powered live chat that answers questions,
                    captures leads, and supports customers — all day, every day.
                  </p>
                  <div className="mt-8">
                    <p className="text-lg font-semibold text-[#1C1C1C]">
                      70k +
                    </p>
                    <p className="text-xs text-[#1C1C1C]/70">Active Users</p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-semibold text-[#1C1C1C]">
                    Key Features :
                  </p>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-[#1C1C1C]/80">
                    <li>24/7 AI chat support for instant responses</li>
                    <li>Lead capture to grow your customer base</li>
                    <li>Automation to save time and reduce manual effort</li>
                    <li>Easy integrations with your website and tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* MyBizBuddy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 items-start py-12 md:py-16">
            <div>
              <h3 className="text-3xl font-semibold text-[#FF851A]">
                MyBizBuddy
              </h3>
              <p className="mt-3 text-lg font-semibold text-[#1C1C1C]">
                Timekeeping & Payroll App
              </p>
              <p className="mt-3 text-sm text-[#1C1C1C]/80 leading-relaxed">
                Keep your team on track and your business running smoothly.
                BizBuddy makes it simple to manage time, track attendance, and
                even handle payroll in one seamless system.
              </p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-[#1C1C1C]">20k +</p>
                <p className="text-xs text-[#1C1C1C]/70">Active Users</p>
              </div>
            </div>
            <div>
              <p className="text-base font-semibold text-[#1C1C1C]">
                Key Features :
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-[#1C1C1C]/80">
                <li>Easy clock-in/out system for employees</li>
                <li>Team reports for attendance and performance</li>
                <li>Mobile-friendly app for on-the-go access</li>
                <li>Integrated payroll system for accurate compensation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
