import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyPatria from "@/components/WhyPatria";
import ProductsSection from "@/components/ProductsSection";
import DianaStory from "@/components/About";
import FAQ from "@/components/FAQ";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFE9C8] text-[#3d1f08]" dir="rtl">
      <Navbar />
      <Hero />
      <WhyPatria />
      <ProductsSection />
      <DianaStory />
      <FAQ />
    </main>
  );
}