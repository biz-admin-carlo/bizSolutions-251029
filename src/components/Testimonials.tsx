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
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8">
                <TestimonialCard
                  quote="“I want to compliment Bizsolutions for their outstanding performance and attitude in handling my business media. I'm so pleased and applaud them.”"
                  authorName="Prince E."
                  authorTitle=""
                  className="min-w-[360px] max-w-[420px]"
                />
                <TestimonialCard
                  quote="“I really like your posts and content ideas for my Facebook Page. I really appreciate your hard work. Thank you.”"
                  authorName="Chris S."
                  authorTitle=""
                  className="min-w-[360px] max-w-[420px]"
                />
                <TestimonialCard
                  quote="“We are so pleased and excited that this finally has happened. You guys have been incredible, and we are excited to continue working with you for years to come! Your responsiveness and dedication through this whole process has been amazing and we are lucky to have you guys in our corner. We will get to work on all of this and keep you posted throughout the process. We cannot even express how much this helps us, thank you again so much!”"
                  authorName="Simeon S."
                  authorTitle=""
                  className="min-w-[360px] max-w-[420px]"
                />
                <TestimonialCard
                  quote="“I’m truly impressed with how attentive and patient the BizSolutions team is. They always listen to what I need and make sure every detail is right. It’s rare to find that kind of dedication.”"
                  authorName="Angela V."
                  authorTitle=""
                  className="min-w-[360px] max-w-[420px]"
                />
                <TestimonialCard
                  quote="“Working with BizSolutions has been a great experience. Their professionalism and quick response time make every project smooth and stress-free. Highly dependable!”"
                  authorName="Mark D."
                  authorTitle=""
                  className="min-w-[360px] max-w-[420px]"
                />
                <TestimonialCard
                  quote="“From start to finish, BizSolutions made the whole web development process easy and enjoyable. They listened carefully, made smart suggestions, and delivered exactly what I needed.”"
                  authorName="Melissa R."
                  authorTitle=""
                  className="min-w-[360px] max-w-[420px]"
                />
                <TestimonialCard
                  quote="“BizSolutions built a beautiful and functional website for my business. They really took the time to understand what I wanted and turned my ideas into something even better than I imagined.”"
                  authorName="Jessica M."
                  authorTitle=""
                  className="min-w-[360px] max-w-[420px]"
                />
                <TestimonialCard
                  quote="“I appreciate the consistency and effort from the whole BizSolutions team. They always deliver quality work and communicate clearly.”"
                  authorName="Renee L."
                  authorTitle=""
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
