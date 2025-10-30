import Image from "next/image";

type ServiceSectionProps = {
  id?: string;
  title: string; // 45px heading
  introHeading: string;
  introText: string;
  detailsHeading: string;
  detailsText: string;
  whyHeading: string;
  whyText: string;
  bulletsTitle: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  altBg?: boolean; // true => #F9F9F9, false => #FFFFFF
  imageRight?: boolean;
};

export default function ServiceSection({
  id,
  title,
  introHeading,
  introText,
  detailsHeading,
  detailsText,
  whyHeading,
  whyText,
  bulletsTitle,
  bullets,
  imageSrc,
  imageAlt,
  altBg = false,
  imageRight = false,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      className={`relative -mx-[50vw] left-1/2 right-1/2 w-screen py-16 md:py-20 ${
        altBg ? "bg-[#F9F9F9]" : "bg-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center font-semibold text-[#FF851A] text-[45px]">
          {title}
        </h2>

        <div className="mt-8 space-y-6 text-[#1C1C1C]">
          <h3 className="text-xl sm:text-2xl font-semibold">{introHeading}</h3>
          <p className="text-base text-[#1C1C1C]/80">{introText}</p>

          <h3 className="text-xl sm:text-2xl font-semibold">
            {detailsHeading}
          </h3>
          <p className="text-base text-[#1C1C1C]/80">{detailsText}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-20 items-start">
          <div
            className={`${
              imageRight ? "md:order-2" : "md:order-1"
            } md:col-span-1`}
          >
            <div className="rounded-lg border border-black/[.08] bg-white shadow-sm overflow-hidden">
              <div className="relative w-full aspect-[450/389]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div
            className={`${
              imageRight ? "md:order-1" : "md:order-2"
            } md:col-span-2`}
          >
            <h4 className="text-xl sm:text-2xl font-semibold text-[#1C1C1C]">
              {whyHeading}
            </h4>
            <p className="mt-4 text-base text-[#1C1C1C]/80">{whyText}</p>

            <h5 className="mt-6 text-lg font-semibold text-[#1C1C1C]">
              {bulletsTitle}
            </h5>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-base text-[#1C1C1C]/80">
              {bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
