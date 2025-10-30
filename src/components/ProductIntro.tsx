import { ReactNode } from "react";

type ProductIntroProps = {
  productName: string;
  children: ReactNode; // description paragraph(s)
  id?: string;
  showDottedBackground?: boolean;
};

export default function ProductIntro({
  productName,
  children,
  id = "product-intro",
  showDottedBackground = false,
}: ProductIntroProps) {
  return (
    <section
      id={id}
      className="relative -mx-[50vw] left-1/2 right-1/2 w-screen py-20 md:py-24"
      style={
        showDottedBackground
          ? {
              backgroundImage: "url('/dotted-secondary-bg.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
          What is <span className="text-[#FF851A]">{productName}</span>?
        </h2>
        <div className="mt-6 text-base sm:text-lg text-[#1C1C1C]/80 max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
}
