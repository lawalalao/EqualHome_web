import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div style={{ background: "var(--eh-bg)", minHeight: "100vh", overflowX: "hidden" }}>
      <Nav lang={lang} dict={dict.nav} />
      <main>
        <Hero dict={dict.hero} />
        <Proof dict={dict.proof} />
        <How dict={dict.how} />
        <BalanceSection dict={dict.balance} />
        <Mental dict={dict.mental} />
        <Pricing dict={dict.pricing} />
        <Testimonials dict={dict.testimonials} />
        <FAQ dict={dict.faq} />
        <CTA dict={dict.cta} />
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  );
}
