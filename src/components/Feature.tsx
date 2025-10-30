import Image from "next/image";

type FeatureProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  circleSize?: number; // outer circle diameter in px
  className?: string;
};

export default function Feature({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  circleSize = 72,
  className = "",
}: FeatureProps) {
  return (
    <div className={`flex items-start gap-4 sm:gap-6 ${className}`}>
      <div
        className="relative shrink-0 rounded-full overflow-hidden"
        style={{ width: circleSize, height: circleSize }}
        aria-hidden
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 72px, 84px"
          className="object-cover"
          priority
        />
      </div>

      <div className="min-w-0">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1C1C1C]">
          {title}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed max-w-[60ch]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
