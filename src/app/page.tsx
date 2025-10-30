import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
};
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import OtherServices from "@/components/OtherServices";
import About from "@/components/About";
import SaasOverview from "@/components/SaasOverview";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import BrandPartners from "@/components/BrandPartners";
import PreFooter from "@/components/PreFooter";

export default function LandingRootPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-screen-xl mx-auto p-6 pt-20 space-y-24">
        <Hero />

        <Products />

        <OtherServices />

        <About />

        <SaasOverview />

        <WhyChoose />

        <Testimonials />

        <Pricing />

        <BrandPartners />

        <PreFooter />
      </main>
    </div>
  );
}
