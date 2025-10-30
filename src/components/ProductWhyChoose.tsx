type WhyItem = {
  title: string;
  description: string;
};

type ProductWhyChooseProps = {
  productName: string;
  items: WhyItem[];
  id?: string;
};

export default function ProductWhyChoose({
  productName,
  items,
  id = "why-choose",
}: ProductWhyChooseProps) {
  return (
    <section id={id} className="max-w-screen-xl mx-auto px-6 py-20">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
        Why Choose <span className="text-[#FF851A]">{productName}</span>?
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="text-2xl font-semibold text-[#1C1C1C]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#1C1C1C]/80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
