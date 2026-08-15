import React from 'react'
import { AnimatedLayers, AnimatedGithub } from './icons/AnimatedIcons'

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-24 max-w-4xl mx-auto z-10">
      <div className="p-8 sm:p-14 rounded-3xl bg-cosmic-800/60 border border-cosmic-700/60 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Subtle dual-glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-mayur-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-radha-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cosmic-700/60 border border-radha-gold/30 text-radha-gold text-xs font-mono uppercase tracking-wider mb-6 group cursor-default">
          <AnimatedLayers className="w-3.5 h-3.5 text-mayur-cyan" />
          <span>Genesis Phase</span>
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-washi-100 mb-6 leading-snug">
          MYTHIC STORYTELLING & DYNAMIC INK ART
        </h2>

        <p className="text-washi-300/90 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-2xl mx-auto">
          We are dedicated to crafting original graphic sagas rooted in deep cosmic mythologies. Utilizing dynamic ink washes, expressive linework, and kinetic comic paneling to create transcendent visual literature.
        </p>

        <div className="pt-6 border-t border-cosmic-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-washi-300/70">
          <span className="font-mono text-washi-300/60">Open Source & Free on GitHub Pages</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-radha-gold hover:text-radha-champagne font-semibold transition-colors flex items-center gap-1.5 group"
          >
            <AnimatedGithub className="w-4 h-4 text-mayur-cyan" />
            <span>Follow on GitHub →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
