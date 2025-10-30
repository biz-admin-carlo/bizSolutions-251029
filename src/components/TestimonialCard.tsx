import Image from "next/image";
type TestimonialCardProps = {
  quote: string;
  authorName: string;
  authorTitle: string;
  className?: string;
};

export default function TestimonialCard({
  quote,
  authorName,
  authorTitle,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`rounded-2xl bg-white border border-black/[.08] shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-8 md:p-10 text-center ${className}`}
    >
      <div className="flex justify-center" aria-hidden>
        <Image src="/quote.png" alt="quote" width={28} height={28} />
      </div>

      <p className="mt-4 text-sm text-[#1C1C1C]/80 leading-relaxed">{quote}</p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-[#1C1C1C]">{authorName}</p>
        <p className="text-xs text-[#FF851A]">{authorTitle}</p>
      </div>
    </div>
  );
}
