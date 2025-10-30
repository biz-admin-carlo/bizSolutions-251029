import Image from "next/image";
import Card from "@/components/Card";

export type FeatureItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

type ProductKeyFeaturesProps = {
  heading?: string;
  features: FeatureItem[];
};

export default function ProductKeyFeatures({
  heading = "Key Features",
  features,
}: ProductKeyFeaturesProps) {
  return (
    <section id="key-features" className="max-w-screen-xl mx-auto px-6 py-20">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
        {heading}
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
        {features.map((feature, index) => {
          const isRightColumn = index % 2 === 1; // md: second column

          const Text = (
            <div
              className={`min-w-0 order-1 ${
                isRightColumn ? "md:order-2" : "md:order-1"
              }`}
            >
              <h3 className="text-2xl font-semibold text-[#1C1C1C]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#1C1C1C]/80 max-w-prose">
                {feature.description}
              </p>
            </div>
          );

          const Img = (
            <Card
              className={`shrink-0 self-center md:self-auto flex items-center justify-center md:max-w-[320px] lg:max-w-[360px] order-2 !border-0 ${
                isRightColumn ? "md:order-1" : "md:order-2"
              }`}
              style={{ maxWidth: 250 }}
            >
              <Image
                src={feature.imageSrc}
                alt={feature.imageAlt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="object-contain"
                priority
              />
            </Card>
          );

          return (
            <div
              key={feature.title}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6"
            >
              {Text}
              {Img}
            </div>
          );
        })}
      </div>
    </section>
  );
}
