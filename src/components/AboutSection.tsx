'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '100%', label: 'Digital Delivery' },
  { value: '1 Day', label: 'Response Time' },
]

const values = [
  'Brand-focused design, not just pretty visuals',
  'Fast turnaround without cutting corners',
  'Clear communication at every stage',
  'Your files, your ownership — always',
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0a0a0f] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#7f55d9] mb-4 block">
            Behind the Studio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            About
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/*
              Gradient card acts as the photo placeholder.
              When you have a real photo, swap this div for a next/image component.
            */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#4c8eda]/30 via-[#7f55d9]/20 to-[#0a0a0f]">

              {/* Abstract shapes for texture */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-[#4c8eda]/20 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-[#7f55d9]/20 blur-3xl" />
              </div>

              {/* Initials in center — placeholder for a real photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-7xl font-bold bg-gradient-to-br from-[#4c8eda] to-[#7f55d9] bg-clip-text text-transparent select-none">
                    P
                  </span>
                  <p className="text-white/20 text-xs uppercase tracking-widest mt-2">
                    Photo coming soon
                  </p>
                </div>
              </div>

              {/* Bottom label strip */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-semibold text-lg">Pressly</p>
                <p className="text-white/50 text-sm">Graphic Designer & Visual Identity Specialist</p>
              </div>
            </div>

            {/* Floating stat card — decorative accent */}
            <div className="absolute -bottom-5 -right-5 bg-[#111118] border border-white/10 rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-[#4c8eda] font-bold text-2xl">50+</p>
              <p className="text-white/40 text-xs">Projects delivered</p>
            </div>
          </motion.div>

          {/* Right — bio and values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 tracking-tight leading-snug">
                Design that&apos;s fast, focused,<br />and built around your brand.
              </h3>
              <p className="text-white/50 text-base leading-relaxed mb-4">
                Welcome to Pressly Design Studio — a solo design practice dedicated to helping
                businesses and creators build a visual identity that stands out. Every project
                is treated with the care and precision of a larger agency, delivered with the
                speed and personal touch only a one-on-one collaboration can offer.
              </p>
              <p className="text-white/50 text-base leading-relaxed">
                All work is delivered 100% digitally, no meetings required. Just clear
                communication, great design, and files you own completely.
              </p>
            </div>

            {/* Values list */}
            <ul className="flex flex-col gap-3">
              {values.map((value, index) => (
                <motion.li
                  key={value}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex items-start gap-3 text-white/60 text-sm"
                >
                  <CheckCircle size={16} className="text-[#4c8eda] mt-0.5 shrink-0" />
                  {value}
                </motion.li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#4c8eda] to-[#7f55d9] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-white/30 text-xs mt-1 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}