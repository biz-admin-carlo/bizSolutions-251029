import NavBar from "@/components/NavBar";
import PreFooter from "@/components/PreFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main>
        <section
          className="relative -mx-[50vw] left-1/2 right-1/2 w-screen pt-36 pb-20 overflow-hidden"
          style={{
            backgroundImage: "url('/dotted-secondary-bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1C1C] leading-tight">
              Empowering <span className="text-[#FF851A]">businesses</span> with
              <br /> smarter solutions.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#1C1C1C]/80 max-w-4xl mx-auto">
              From managing your team to engaging customers and streamlining
              workflows,
              <span className="text-[#FF851A]"> BizSolutions </span>
              brings everything together in one simple platform built for
              growth.
            </p>
          </div>
        </section>

        {/* About Us section */}
        <section className="relative -mx-[50vw] left-1/2 right-1/2 w-screen h-[421px] overflow-hidden">
          {/* Image layer with midpoint fade */}
          {/* Mobile image (no gradient mask) */}
          <div
            className="absolute inset-0 bg-no-repeat bg-[position:65%_center] bg-cover md:hidden"
            style={{
              backgroundImage: "url('/about-us-bg.svg')",
            }}
            aria-hidden
          />
          {/* Mobile readability scrim */}
          <div
            className="absolute inset-0 md:hidden bg-gradient-to-r from-white/95 via-white/80 to-transparent pointer-events-none"
            aria-hidden
          />
          {/* Desktop/tablet image with gradient mask */}
          <div
            className="absolute inset-0 hidden md:block bg-no-repeat bg-contain bg-right"
            style={{
              backgroundImage: "url('/about-us-bg.svg')",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 75%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 75%)",
            }}
            aria-hidden
          />
          {/* Dotted overlay on top of the image */}
          <div
            className="absolute inset-0 z-10 bg-[url('/dotted-secondary-bg.png')] bg-repeat opacity-60 mix-blend-multiply pointer-events-none"
            aria-hidden
          />
          <div className="relative z-20 max-w-screen-xl mx-auto px-6 h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1C1C1C]">
                About <span className="text-[#FF851A]">Us</span>
              </h2>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#1C1C1C]/80">
                At <span className="text-[#FF851A]">BizSolutions</span>, we
                transcend the traditional boundaries of web development. Our
                ethos is centered around not just creating websites, but weaving
                comprehensive digital experiences that deeply connect with your
                audience.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#1C1C1C]/80">
                We are driven by a relentless passion to fuse the latest in
                cutting-edge technology with groundbreaking design, ensuring
                your brand not only stands out but sets new benchmarks in
                digital innovation.
              </p>
            </div>
            <div className="hidden md:block" aria-hidden />
          </div>
        </section>

        {/* Company narrative section */}
        <section className="py-16">
          <div className="max-w-screen-xl mx-auto px-6 space-y-12 text-[#1C1C1C]">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Pioneering Digital Innovation in Silicon Valley
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#1C1C1C]/80">
                Welcome to <span className="text-[#FF851A]">BizSolutions</span>,
                nestled in the heart of innovation at 20289 Stevens Creek Blvd
                #1039, Cupertino, CA 95014. In the dynamic landscape of Silicon
                Valley, California, we stand as a beacon of digital creativity
                and technological advancement. BizSolutions isn’t just a brand;
                it’s a revolution in the realm of business commerce. Our mission
                is to foster a vibrant community where ideas flourish and
                boundaries are pushed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Crafting Digital Experiences That Resonate
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#1C1C1C]/80">
                At <span className="text-[#FF851A]">BizSolutions</span>, we do
                more than build websites; we sculpt digital masterpieces. Our
                expertise lies in creating immersive experiences that captivate
                and engage. Driven by our passion for innovation, we blend
                state-of-the-art technology with groundbreaking design, ensuring
                your brand not only stands out but sets new standards.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Your Gateway to Digital Excellence
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#1C1C1C]/80">
                Embark on a journey of digital transformation with us. Whether
                refining an existing digital presence or launching a bold new
                venture, our team is dedicated to transforming your vision into
                a digital masterpiece. We specialize in sleek, responsive
                designs, SEO-optimized content, and a user experience that
                speaks directly to your audience’s needs and aspirations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Collaboration Meets Innovation
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#1C1C1C]/80">
                Your vision is the canvas for our creativity. At{" "}
                <span className="text-[#FF851A]">BizSolutions</span>, we believe
                in the power of collaboration. Share your dreams with us, and
                watch as our experts infuse them with innovation and expertise.
                Staying abreast of the latest digital trends and technologies,
                we ensure your website transcends traditional boundaries,
                becoming a vibrant hub for growth and customer engagement.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Start Your Digital Journey with Us
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#1C1C1C]/80">
                The journey towards an extraordinary digital presence begins
                with a single step. Reach out to us, and let’s start a
                conversation that could redefine the digital landscape. Your
                aspirations, coupled with our expertise, are the perfect recipe
                for a digital experience that’s not just seen but remembered.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Join Us in Shaping the Future
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#1C1C1C]/80">
                At <span className="text-[#FF851A]">BizSolutions</span>, your
                future is our focus. Let’s collaborate to create something
                extraordinary. Visit us in Silicon Valley, send us a message, or
                give us a call. We are more than ready to embark on this
                exciting journey with you.
              </p>
            </div>
          </div>
        </section>

        <PreFooter>
          At <span className="text-[#FF851A]">BizSolutions</span>, we go beyond
          web development — we provide the tools and technology that help your
          business get discovered, connect with customers, and work smarter
          every day.
        </PreFooter>
      </main>
    </>
  );
}
