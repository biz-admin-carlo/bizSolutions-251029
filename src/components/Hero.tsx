export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw] -mt-10 sm:-mt-20 bg-white bg-no-repeat bg-cover bg-top md:bg-[position:center_-35px] py-12 sm:py-20 md:py-24 min-h-[420px] sm:min-h-[540px] md:min-h-[622px] overflow-x-hidden"
      style={{
        backgroundImage: "url('/hero.svg')",
      }}
    >
      <div className="h-full max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col justify-center">
        {/* Headline */}
        <h1 className="text-left text-3xl sm:text-5xl md:text-6xl font-semibold leading-snug sm:leading-tight tracking-tight text-[#1C1C1C]">
          Smart Solutions to
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Grow Your
          <span className="text-[#FF851A]"> Business</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 text-left text-base sm:text-lg md:text-xl text-[#1C1C1C]/80 max-w-2xl sm:max-w-3xl">
          From online presence to customer support and productivity — all in one
          place.
        </p>

        {/* Stats section */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
          {/* Customers */}
          <div>
            <p className="text-2xl sm:text-3xl font-semibold text-[#1C1C1C]">
              50k+
            </p>
            <p className="text-sm text-[#1C1C1C]/70">Satisfied Customers</p>
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block h-8 w-px bg-[#1C1C1C]/15"
            aria-hidden
          />

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div>
              <p className="text-2xl sm:text-3xl font-semibold text-[#1C1C1C]">
                4.9 / 5
              </p>
              <div
                className="mt-1 flex items-center gap-1"
                aria-label="Rating 4.9 out of 5"
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FF851A"
                    aria-hidden
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm text-[#1C1C1C]/70">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
