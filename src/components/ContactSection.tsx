'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Mail, Clock, Shield } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const initialValues = { name: '', email: '', subject: '', message: '' }

const details = [
  { icon: Mail, text: 'hello@presslydesign.com' },
  { icon: Clock, text: 'Response within 1 business day' },
  { icon: Shield, text: 'Your data is never stored or shared' },
]

export default function ContactSection() {
  const [values, setValues] = useState(initialValues)
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMessage(data.error ?? 'Something went wrong.')
        setFormState('error')
        return
      }

      setFormState('success')
      setValues(initialValues)
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setFormState('error')
    }
  }

  return (
    <section id="contact" className="bg-[#0a0a0f] py-28 px-6">
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
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Start a Project
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Tell me about your brand and what you need — I&apos;ll get back to you within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Ready when you are.
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Whether you&apos;re starting from scratch or refreshing an existing brand,
                fill in the form and I&apos;ll be in touch to discuss your project.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {details.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-white/50 text-sm">
                  <span className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-[#4c8eda]" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            {/* Decorative card */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 mt-auto">
              <p className="text-white/20 text-xs uppercase tracking-widest mb-2">Subject line tip</p>
              <p className="text-white/50 text-sm leading-relaxed">
                Include your brand name, the service you need, and your deadline — it helps me
                respond with a more useful first reply.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3"
          >
            {formState === 'success' ? (
              // Success state — replaces the form after submission
              <div className="h-full rounded-3xl border border-[#4c8eda]/20 bg-[#4c8eda]/5 flex flex-col items-center justify-center text-center p-12 gap-4 min-h-64">
                <CheckCircle size={40} className="text-[#4c8eda]" />
                <h3 className="text-white font-semibold text-xl">Message sent!</h3>
                <p className="text-white/40 text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll review your brief and get back to you within one business day.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-2 text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-white/40 text-xs uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={values.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#4c8eda]/50 transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white/40 text-xs uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={values.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#4c8eda]/50 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-white/40 text-xs uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="e.g. Logo design for my coffee brand"
                    value={values.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#4c8eda]/50 transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-white/40 text-xs uppercase tracking-widest">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your brand, goals, audience, formats needed, and your deadline..."
                    value={values.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#4c8eda]/50 transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Error message */}
                {formState === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={15} />
                    {errorMessage}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4c8eda] to-[#7f55d9] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 disabled:opacity-50 transition-opacity duration-200 self-start"
                >
                  {formState === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Brief
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}