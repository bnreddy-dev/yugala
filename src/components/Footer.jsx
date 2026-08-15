import React from 'react'
import { AnimatedGithub, AnimatedSparkles } from './icons/AnimatedIcons'

export default function Footer() {
  return (
    <footer className="border-t border-cosmic-800 bg-cosmic-950/95 py-12 px-6 z-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-washi-300/70">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-radha-gold/30 shadow-md shadow-radha-gold/10 bg-cosmic-900 flex items-center justify-center">
            <img
              src="./assets/yugala_logo.jpg"
              alt="YUGALA Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-cinzel font-bold text-washi-200 tracking-wider">YUGALA STUDIO</p>
            <p className="text-[10px] text-washi-300/50">Original Comic Arts & Mythic Lore</p>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="flex items-center gap-1.5 font-light group cursor-default">
          <span>Crafted with</span>
          <AnimatedSparkles className="w-3.5 h-3.5 text-radha-gold" />
          <span>and devotion to transcendent storytelling</span>
        </div>

        {/* GitHub link to direct repository */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/bnreddy-dev/yugala"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-washi-200 hover:text-radha-gold transition-colors group"
          >
            <AnimatedGithub className="w-4 h-4 text-mayur-cyan" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
