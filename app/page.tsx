import WhatsAppFloating from "@/components/WhatsAppFloating"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProductGrid } from "@/components/product-grid"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <ProductGrid />
        <GuaranteeSection />
        <FaqSection />
      </main>

      <SiteFooter />

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <WhatsAppFloating />
      
    </div>
  )
}
