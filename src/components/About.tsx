export default function About() {
  return (
    <section
      id="about"
      className="relative -mx-[50vw] left-1/2 right-1/2 w-screen scroll-mt-24 -mt-10 md:-mt-28 min-h-[360px] md:min-h-[442px] py-16 md:py-24 flex flex-col items-center justify-center text-center bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/about-bg.svg')",
      }}
    >
      <div
        className="absolute inset-0 bg-[url('/dotted-secondary-bg.png')] bg-repeat opacity-60 mix-blend-multiply pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 65%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 65%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6">
        <div className="md:ml-auto md:max-w-xl text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
            About <span className="text-[#FF851A]">BizSolutions</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#1C1C1C]/80">
            BizSolutions is your all-in-one partner for business growth. From
            boosting your online presence with MyBiz, to engaging customers
            through MyBizChat, and simplifying workforce management with
            BizBuddy, we deliver smart, scalable tools designed to help your
            business thrive.
          </p>
          <a
            href="/about"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#00A7A7] px-5 py-2 text-white font-medium shadow-sm hover:bg-[#009393] focus:outline-none focus:ring-2 focus:ring-[#00A7A7]/40"
          >
            Get to Know Us Better
          </a>
        </div>
      </div>
    </section>
  );
}
