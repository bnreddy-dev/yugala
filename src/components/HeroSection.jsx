import React from 'react'
import { AnimatedGithub, AnimatedArrowDown, AnimatedSparkles } from './icons/AnimatedIcons'

export default function HeroSection({ onExplore }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-16">
      {/* Subtle Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 text-[18vw] font-cinzel font-black text-washi-100 whitespace-nowrap leading-none -z-10">
        YUGALA
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
        {/* Origin Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cosmic-800/80 border border-radha-gold/40 backdrop-blur-md mb-8 shadow-xl shadow-radha-gold/10 group cursor-default">
          <AnimatedSparkles className="w-3.5 h-3.5 text-mayur-cyan" />
          <span className="text-xs font-semibold uppercase tracking-widest text-washi-200 font-mono">
            Original Comic Studio • In Genesis
          </span>
        </div>

        {/* Clean, Elegant, Premium Title (Image 1 Style) */}
        <h1 className="font-cinzel text-6xl sm:text-7xl md:text-8xl font-bold tracking-wider text-washi-100 leading-none mb-8">
          YUGALA
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-washi-300/80 font-light leading-relaxed mb-10">
          Where ancient cosmic lore and mythic timelines come to life through dynamic ink craftsmanship, bold paneling, and cinematic storytelling.
        </p>

        {/* Minimalist Premium Button (Image 1 Style) */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/bnreddy-dev/yugala"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-lg border border-washi-300/30 hover:border-radha-gold/60 bg-cosmic-900/60 hover:bg-cosmic-800/80 text-washi-200 hover:text-white font-mono text-xs uppercase tracking-widest shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            <AnimatedGithub className="w-4 h-4 text-radha-gold" />
            <span>Follow on GitHub</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        onClick={onExplore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-washi-300/40 hover:text-radha-gold cursor-pointer transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono group-hover:tracking-wider transition-all">Scroll to Explore</span>
        <AnimatedArrowDown className="w-4 h-4 text-radha-gold" />
      </div>
    </section>
  )
}
