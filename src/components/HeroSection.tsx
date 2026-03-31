'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

// Each element gets its own delay via the transition prop directly.
// This avoids a Framer Motion v12 TypeScript issue with function-based variants.
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f]">

      {/* Background gradient blobs — purely decorative, give depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#4c8eda]/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#7f55d9]/20 blur-[120px]" />
      </div>

      {/* Top navigation */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-10">
        <span className="text-white font-semibold tracking-widest text-sm uppercase">
          Pressly Design Studio
        </span>
        <a
          href="mailto:hello@presslydesign.com"
          className="text-sm text-white/60 hover:text-white transition-colors duration-200"
        >
          Get in Touch
        </a>
      </nav>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#4c8eda] mb-8 border border-[#4c8eda]/30 rounded-full px-4 py-2"
        >
          <Sparkles size={12} />
          Digital Graphic Design Studio
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-6 tracking-tight"
        >
          Design That{' '}
          <span className="bg-gradient-to-r from-[#4c8eda] to-[#7f55d9] bg-clip-text text-transparent">
            Speaks
          </span>{' '}
          For Your Brand
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-white/50 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Fast, professional, and brand-focused — logos, social media kits,
          digital assets, and more. Delivered 100% digitally.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@presslydesign.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4c8eda] to-[#7f55d9] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>
          <a
            href="#portfolio"
            className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
          >
            View My Work →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — clicking scrolls smoothly to the Services section */}
      <motion.a
        {...fadeUp(0.7)}
        href="#services"
        className="absolute bottom-8 flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors duration-200 cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-current to-transparent" />
      </motion.a>
    </section>
  )
}