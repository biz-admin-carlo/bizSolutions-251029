import Feature from "@/components/Feature";

// Using existing Feature component for consistent layout

export default function WhyChoose() {
  return (
    <section id="why-choose" className="scroll-mt-24 py-16 -mt-16 md:-mt-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
          Why Choose <span className="text-[#FF851A]">BizSolutions</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          <Feature
            imageSrc="/all-in-one.svg"
            imageAlt="All-in-one ecosystem"
            title="All-in-one ecosystem"
            subtitle="From online visibility to customer engagement and team management, BizSolutions brings everything together in one smart platform."
            circleSize={96}
          />

          <Feature
            imageSrc="/trusted-business.svg"
            imageAlt="Trusted by businesses"
            title="Trusted by businesses"
            subtitle="Entrepreneurs, startups, and growing teams rely on BizSolutions to strengthen their online presence and boost productivity."
            circleSize={96}
          />

          <Feature
            imageSrc="/save-time.svg"
            imageAlt="Save time & increase efficiency"
            title="Save time & increase efficiency"
            subtitle="Automate routine tasks, streamline workflows, and focus on what matters most — growing your business."
            circleSize={96}
          />

          <Feature
            imageSrc="/scalable-for-teams.svg"
            imageAlt="Scalable for teams of any size"
            title="Scalable for teams of any size"
            subtitle="Whether you’re a solo entrepreneur or managing a large workforce, our solutions adapt to fit your business needs."
            circleSize={96}
          />
        </div>
      </div>
    </section>
  );
}
