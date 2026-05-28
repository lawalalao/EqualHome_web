import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Proof } from "@/components/landing/Proof";
import { How } from "@/components/landing/How";
import { BalanceSection } from "@/components/landing/Balance";
import { Mental } from "@/components/landing/Mental";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div style={{ background: "var(--eh-bg)", minHeight: "100vh", overflowX: "hidden" }}>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <How />
        <BalanceSection />
        <Mental />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
