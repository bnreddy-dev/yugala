import React, { useState } from 'react'
import { Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    // Save to local storage
    try {
      const currentList = JSON.parse(localStorage.getItem('comics_waitlist') || '[]')
      if (!currentList.includes(email)) {
        currentList.push(email)
        localStorage.setItem('comics_waitlist', JSON.stringify(currentList))
      }
    } catch (err) {
      console.error(err)
    }

    setSubmitted(true)
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#e63946', '#d4af37', '#ffffff']
    })
  }

  return (
    <section id="waitlist" className="relative py-24 px-6 max-w-4xl mx-auto z-10 text-center">
      <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-800/70 border border-charcoal-700/60 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-vermilion/10 rounded-full blur-3xl pointer-events-none" />

        {/* Hanko Icon */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vermilion to-vermilion-dark flex items-center justify-center font-kanji text-white font-bold text-xl mx-auto mb-6 shadow-lg shadow-vermilion/30">
          契
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-washi-100 mb-3">
          BE FIRST TO READ CHAPTER 1
        </h2>

        <p className="max-w-xl mx-auto text-washi-300 text-sm sm:text-base font-light mb-8">
          Join our private early-access list. We will send you a single notification the moment the premiere chapter is published.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-charcoal-900/90 border border-vermilion/40 text-washi-100 flex flex-col items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-8 h-8 text-vermilion" />
            <h3 className="font-cinzel font-bold text-lg">You are on the Priority List!</h3>
            <p className="text-xs text-washi-300 max-w-md">
              Thank you for supporting original Japanese comic art. We will notify you directly at <strong className="text-washi-100">{email}</strong> upon release.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3.5 rounded-xl bg-charcoal-900/90 border border-charcoal-600/80 text-washi-100 placeholder-washi-300/40 text-sm focus:outline-none focus:border-vermilion focus:ring-1 focus:ring-vermilion transition-all shadow-inner"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-vermilion hover:bg-vermilion-glow text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-vermilion/30 transition-all active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Join Waitlist</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-washi-300/60 font-light">
          <ShieldCheck className="w-4 h-4 text-gold-kintsugi" />
          <span>No spam, zero promotions. Only pure release announcements.</span>
        </div>
      </div>
    </section>
  )
}
