'use client'

import { motion } from 'framer-motion'
import { Layers, Share2, Monitor, FileText, Palette, PenTool } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Logo Design',
    description:
      'Distinctive logos that capture your brand identity — wordmarks, lettermarks, and icon-based marks.',
  },
  {
    icon: Palette,
    title: 'Brand Identity Systems',
    description:
      'Full visual identity: color palette, typography, logo usage rules, and brand guidelines.',
  },
  {
    icon: Share2,
    title: 'Social Media Kits',
    description:
      'On-brand templates and content packs for Instagram, Twitter/X, LinkedIn, and more.',
  },
  {
    icon: Monitor,
    title: 'Digital Assets',
    description:
      'Graphics, icons, and UI elements built for websites, apps, and digital campaigns.',
  },
  {
    icon: FileText,
    title: 'Marketing Materials',
    description:
      'Polished brochures, presentations, and promotional designs that convert and impress.',
  },
  {
    icon: Layers,
    title: 'Source File Delivery',
    description:
      'Every project ships with final assets (PNG, JPG, PDF, SVG) plus source files (AI, PSD, Figma on request).',
  },
]

// Animates each card in as it enters the viewport.
// `once: true` means it only plays once — not every time you scroll past.
const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0a0a0f] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#4c8eda] mb-4 block">
            What I Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Services
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Everything your brand needs to look professional and consistent across every touchpoint.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                // Each card staggers in slightly after the previous one
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.03] p-7 hover:border-[#4c8eda]/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#4c8eda]/20 to-[#7f55d9]/20 mb-5">
                  <Icon size={20} className="text-[#4c8eda] group-hover:text-[#7f55d9] transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Subtle gradient hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4c8eda]/0 to-[#7f55d9]/0 group-hover:from-[#4c8eda]/5 group-hover:to-[#7f55d9]/5 transition-all duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
