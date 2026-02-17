import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { ProofStrip } from '@/components/sections/ProofStrip'
import { MarketScale } from '@/components/sections/MarketScale'
import { ReportForm } from '@/components/sections/ReportForm'
import { FeaturesBento } from '@/components/sections/FeaturesBento'
import { Understanding } from '@/components/sections/Understanding'
import { PromptIntelligence } from '@/components/sections/PromptIntelligence'
import { CTAStrip } from '@/components/sections/CTAStrip'
import { UseCases } from '@/components/sections/UseCases'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ProofStrip />
        <MarketScale />
        <ReportForm />
        <FeaturesBento />
        <Understanding />
        <PromptIntelligence />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
