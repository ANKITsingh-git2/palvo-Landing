import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MobileAppShowcase } from "@/components/mobile-app"
import { PreLaunchHighlights } from "@/components/pre-launch-highlights"
import { MultiAgentCrew } from "@/components/multi-agent-crew"
import { SolanaIntegration } from "@/components/solana-integration"
import { DemoVideo } from "@/components/demo-video"
import { UseCases } from "@/components/use-cases"
import { Testimonials } from "@/components/testimonials"
import { PrivacySecurity } from "@/components/privacy-security"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <div id="vision">
        <PreLaunchHighlights />
      </div>
      <div id="intelligence">
        <MultiAgentCrew />
      </div>
      <div id="product">
        <MobileAppShowcase />
      </div>
      <SolanaIntegration />
      <DemoVideo />
      <UseCases />
      <Testimonials />
      <div id="security">
        <PrivacySecurity />
      </div>
      <FAQ />
      <div id="waitlist">
        <CTA />
      </div>
      <Footer />
    </main>
  )
}
