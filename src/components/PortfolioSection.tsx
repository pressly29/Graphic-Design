'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Luxe',
    category: 'Brand Identity',
    description: 'Luxury skincare brand — logo suite, color palette, and packaging mockups built around minimalism and elegance.',
    gradient: 'from-[#c9a96e] via-[#7f55d9] to-[#1a0533]',
    accent: '#c9a96e',
    featured: true,
  },
  {
    title: 'Volta',
    category: 'Visual System',
    description: 'Tech startup wordmark, icon set, and brand guidelines built for scale.',
    gradient: 'from-[#4c8eda] via-[#0a1628] to-[#0a0a0f]',
    accent: '#4c8eda',
    featured: false,
  },
  {
    title: 'The Grove Café',
    category: 'Restaurant Branding',
    description: 'Menu design, signage, and a social media kit rooted in warmth and nature.',
    gradient: 'from-[#4caf7d] via-[#1a3328] to-[#0a0a0f]',
    accent: '#4caf7d',
    featured: false,
  },
  {
    title: 'Pulse',
    category: 'App UI Kit',
    description: 'Fitness app icon set, onboarding screens, and social post templates.',
    gradient: 'from-[#f05a7e] via-[#2d0a14] to-[#0a0a0f]',
    accent: '#f05a7e',
    featured: false,
  },
  {
    title: 'Monarch',
    category: 'Marketing Pack',
    description: 'Real estate brochure, presentation deck, and digital ad set.',
    gradient: 'from-[#e8a838] via-[#2d1a00] to-[#0a0a0f]',
    accent: '#e8a838',
    featured: false,
  },
  {
    title: 'Neon District',
    category: 'Social Media Kit',
    description: 'Music artist Instagram templates, cover art, and promo graphics.',
    gradient: 'from-[#7f55d9] via-[#1a0a2e] to-[#0a0a0f]',
    accent: '#7f55d9',
    featured: false,
  },
]

const featured = projects.find((p) => p.featured)!
const rest = projects.filter((p) => !p.featured)

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#0a0a0f] py-28 px-6">
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
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Portfolio
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            A look at recent brand projects — each one built around a distinct identity and purpose.
          </p>
        </motion.div>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="group relative rounded-3xl overflow-hidden mb-5 cursor-pointer h-80 sm:h-96"
        >
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} transition-transform duration-700 group-hover:scale-105`} />

          {/* Abstract shape overlays for visual texture */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-black/30 blur-2xl" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10">
            <div className="flex items-start justify-between">
              <span
                className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border"
                style={{ color: featured.accent, borderColor: `${featured.accent}40` }}
              >
                {featured.category}
              </span>
              {/* Arrow appears on hover */}
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={16} className="text-white" />
              </span>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                {featured.title}
              </h3>
              <p className="text-white/60 text-sm max-w-md">{featured.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Remaining cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-56"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />

              {/* Texture overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5 blur-xl" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border"
                    style={{ color: project.accent, borderColor: `${project.accent}40` }}
                  >
                    {project.category}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={14} className="text-white" />
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm">
            Interested in working together?{' '}
            <a
              href="mailto:hello@presslydesignstudio.com"
              className="text-[#4c8eda] hover:text-[#7f55d9] transition-colors duration-200"
            >
              Start a conversation →
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  )
}