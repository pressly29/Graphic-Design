'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Lightbulb, MessageSquare, PackageCheck, HeartHandshake } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Client Brief',
    description:
      'You share your brand details, goals, target audience, required formats, deadline, and any reference materials via email.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Concept & Design',
    description:
      'I develop initial design concepts tailored to your brief — exploring visual directions that fit your brand personality.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Revision Rounds',
    description:
      'You review the concepts and share feedback. We refine together until the design feels exactly right.',
  },
  {
    number: '04',
    icon: PackageCheck,
    title: 'Asset Delivery',
    description:
      'Final files delivered via secure digital channels — PNG, JPG, PDF, SVG, plus source files (AI/PSD/Figma on request).',
  },
  {
    number: '05',
    icon: HeartHandshake,
    title: 'Ongoing Support',
    description:
      'After delivery I remain available for questions, minor tweaks, or future design needs as your brand grows.',
  },
]

export default function WorkflowSection() {
  return (
    <section id="workflow" className="bg-[#0a0a0f] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-[#4c8eda] mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            The Process
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            A clear, collaborative workflow from first message to final delivery.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/*
            Connecting line — visible on large screens only.
            Sits behind the step cards, running left to right
            through the center of the number badges.
          */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative flex flex-col items-center text-center lg:items-center"
                >
                  {/*
                    Number badge — sits on the connecting line on desktop.
                    The gradient border gives it a premium feel without a solid ring.
                  */}
                  <div className="relative mb-6">
                    <div className="w-[72px] h-[72px] rounded-full bg-[#0a0a0f] border border-white/10 flex items-center justify-center z-10 relative">
                      <Icon size={24} className="text-[#4c8eda]" />
                    </div>
                    {/* Step number — top-right of badge */}
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#4c8eda] to-[#7f55d9] flex items-center justify-center text-white text-[10px] font-bold z-20">
                      {index + 1}
                    </span>
                  </div>

                  {/* Step title */}
                  <h3 className="text-white font-semibold text-base mb-2">
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p className="text-white/40 text-sm leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>

                  {/*
                    Mobile connector line — only between steps, not after the last one.
                    Hidden on large screens where the horizontal line takes over.
                  */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-8 w-px h-10 bg-gradient-to-b from-white/10 to-transparent mx-auto" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 rounded-3xl border border-white/5 bg-white/[0.03] p-10 sm:p-14 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full bg-[#4c8eda]/10 blur-[80px]" />
          </div>

          <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Ready to start?</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s build something great together.
          </h3>
          <a
            href="mailto:hello@presslydesign.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4c8eda] to-[#7f55d9] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-200 text-sm"
          >
            Send a Brief
          </a>
        </motion.div>

      </div>
    </section>
  )
}