import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative -mx-[50vw] left-1/2 right-1/2 w-screen scroll-mt-24 py-16 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/dotted-secondary-bg.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C] pb-10">
          Hear From Our <span className="text-[#FF851A]">Clients</span>
        </h2>

        <div className="mt-10 relative overflow-hidden testimonial-fade-mask">
          <div className="testimonial-track gap-8 pr-8">
            {/* duplicate the set twice for seamless infinite scroll */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8">
                <TestimonialCard
                  quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  authorName="Cameron W."
                  authorTitle="Business Owner"
                  className="min-w-[360px] max-w-[420px]"
                />
                <TestimonialCard
                  quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  authorName="Floyd M."
                  authorTitle="Marketing Coordinator"
                  className="min-w-[360px] max-w-[420px]"
                />
                <TestimonialCard
                  quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  authorName="Savannah N."
                  authorTitle="Dog Trainer"
                  className="min-w-[360px] max-w-[420px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
