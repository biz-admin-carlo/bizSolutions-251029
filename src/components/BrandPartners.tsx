import Image from "next/image";

export default function BrandPartners() {
  return (
    <section id="brand-partners" className="scroll-mt-24 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-[#1C1C1C]">
          Backed by Trusted Brands
        </h2>

        {/* Mobile: vertical column list */}
        <div className="mt-10 md:hidden">
          <div className="flex flex-col items-center gap-10 px-6">
            <Image
              src="/AWS.svg"
              alt="AWS"
              width={140}
              height={44}
              className="object-contain"
            />
            <Image
              src="/MongoDB.svg"
              alt="MongoDB"
              width={160}
              height={44}
              className="object-contain"
            />
            <Image
              src="/EX.svg"
              alt="Express"
              width={72}
              height={72}
              className="object-contain"
            />
            <Image
              src="/NodeJS.svg"
              alt="Node.js"
              width={150}
              height={44}
              className="object-contain"
            />
            <Image
              src="/React.svg"
              alt="React"
              width={140}
              height={44}
              className="object-contain"
            />
            <Image
              src="/JS.svg"
              alt="JavaScript"
              width={92}
              height={92}
              className="object-contain"
            />
            <Image
              src="/PostgreSQL.svg"
              alt="PostgreSQL"
              width={150}
              height={44}
              className="object-contain"
            />
            <Image
              src="/Postman.svg"
              alt="Postman"
              width={140}
              height={44}
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop/tablet: marquee track */}
        <div className="mt-10 relative overflow-hidden testimonial-fade-mask hidden md:block">
          <div className="testimonial-track gap-24 pr-24">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-24">
                <Image
                  src="/AWS.svg"
                  alt="AWS"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/MongoDB.svg"
                  alt="MongoDB"
                  width={140}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/EX.svg"
                  alt="Express"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <Image
                  src="/NodeJS.svg"
                  alt="Node.js"
                  width={130}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/React.svg"
                  alt="React"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/JS.svg"
                  alt="JavaScript"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <Image
                  src="/PostgreSQL.svg"
                  alt="PostgreSQL"
                  width={130}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/Postman.svg"
                  alt="Postman"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
