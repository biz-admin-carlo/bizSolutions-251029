import Feature from "@/components/Feature";

export default function OtherServices() {
  return (
    <section
      id="other-services"
      className="scroll-mt-24 -mt-10 md:-mt-14 py-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-[#1C1C1C]">
        Our Other Services
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        <Feature
          imageSrc="/social-media-icon.svg"
          imageAlt="Social media icon"
          title="Social Media Management"
          subtitle="Enhance your online presence with strategic content creation, engagement, and analytics-driven social media management."
          circleSize={84}
        />

        <Feature
          imageSrc="/webdev-icon.svg"
          imageAlt="Website icon"
          title="Website Development"
          subtitle="Build a powerful digital presence with custom-designed websites that are fast, responsive, and crafted to showcase your brand."
          circleSize={84}
        />

        <Feature
          imageSrc="/bookkeeping-icon.svg"
          imageAlt="Bookkeeping icon"
          title="Bookkeeping Services"
          subtitle="Stay on top of your finances with accurate, reliable, and efficient bookkeeping solutions tailored to your business needs."
          circleSize={84}
        />

        <Feature
          imageSrc="/customer-service-icon.svg"
          imageAlt="Customer service icon"
          title="Customer Service Outsourcing"
          subtitle="Deliver exceptional customer experiences with our dedicated and well-trained support professionals representing your brand."
          circleSize={84}
        />

        <Feature
          imageSrc="/it-support-icon.svg"
          imageAlt="IT support icon"
          title="IT Support"
          subtitle="Empower your business with expert technical support that ensures your systems run smoothly and securely around the clock."
          circleSize={84}
        />

        <Feature
          imageSrc="/sales-collection-icon.svg"
          imageAlt="Sales and collections icon"
          title="Sales & Collection Services"
          subtitle="Drive growth and improve cash flow with our effective sales and collection strategies designed to boost performance and efficiency."
          circleSize={84}
        />
      </div>
    </section>
  );
}
