'use client';

import AnimatedHero from "@/components/ui/animated-hero";
import Features from "@/components/ui/Features";
import StorePreview from "@/components/ui/store-preview";
import Pricing from "@/components/ui/Pricing";
import CTA from "@/components/ui/CTA";
import Personas from "@/components/ui/Personas";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-0">
      <AnimatedHero />
      <Personas />
      <Features />
      <Pricing />
      <StorePreview />
      <CTA />
    </main>
  );
}