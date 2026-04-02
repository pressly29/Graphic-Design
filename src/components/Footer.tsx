'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#workflow' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5">

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold text-lg tracking-tight">
              Pressly Design Studio
            </span>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Fast, professional, and brand-focused graphic design — delivered
              100% digitally, worldwide.
            </p>
            <a
              href="mailto:hello@presslydesignstudio.com"
              className="inline-flex items-center gap-2 text-[#4c8eda] text-sm hover:text-[#7f55d9] transition-colors duration-200 mt-2"
            >
              <Mail size={14} />
              hello@presslydesignstudio.com
            </a>
          </div>

          {/* Column 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-white/20 text-xs uppercase tracking-widest">
              Navigation
            </span>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Start a project CTA */}
          <div className="flex flex-col gap-4">
            <span className="text-white/20 text-xs uppercase tracking-widest">
              Work With Me
            </span>
            <p className="text-white/30 text-sm leading-relaxed">
              Have a project in mind? Send over your brief and let&apos;s build
              something great.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4c8eda] to-[#7f55d9] text-white text-sm font-semibold px-5 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 w-fit mt-2"
            >
              Start a Project
              <ArrowUpRight size={14} />
            </a>
          </div>

        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {currentYear} Pressly Design Studio. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            No sensitive financial or personal data is stored.
          </p>
        </div>
      </div>

    </footer>
  )
}