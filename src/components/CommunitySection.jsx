import React from 'react'
import { Github, Star, Sparkles, MessageSquare } from 'lucide-react'

export default function CommunitySection() {
  return (
    <section id="community" className="relative py-20 px-6 max-w-4xl mx-auto z-10 text-center">
      <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-800/60 border border-charcoal-700/60 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-vermilion/15 rounded-full blur-3xl pointer-events-none" />

        {/* Hanko Seal */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vermilion to-vermilion-dark flex items-center justify-center font-kanji text-white font-bold text-xl mx-auto mb-6 shadow-lg shadow-vermilion/30">
          共
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-washi-100 mb-3">
          FOLLOW THE JOURNEY
        </h2>

        <p className="max-w-xl mx-auto text-washi-300 text-sm sm:text-base font-light mb-8">
          This project is an open creative exploration. All code, 3D experiments, and future releases will be open-sourced and hosted directly on GitHub Pages.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-vermilion hover:bg-vermilion-glow text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-vermilion/30 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Star className="w-4 h-4" />
            <span>Star on GitHub</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-700 text-washi-200 hover:text-white font-semibold text-xs uppercase tracking-wider border border-charcoal-600 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </section>
  )
}
