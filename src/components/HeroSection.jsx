import React from 'react'
import { AnimatedGithub, AnimatedArrowDown, AnimatedSparkles } from './icons/AnimatedIcons'

export default function HeroSection({ onExplore }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-16">
      {/* English Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 text-[18vw] font-cinzel font-black text-washi-100 whitespace-nowrap leading-none -z-10">
        YUGALA
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
        {/* Origin Badge with itshover Animated Sparkles */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cosmic-800/80 border border-radha-gold/40 backdrop-blur-md mb-8 shadow-xl shadow-radha-gold/10 group cursor-default">
          <AnimatedSparkles className="w-3.5 h-3.5 text-mayur-cyan" />
          <span className="text-xs font-semibold uppercase tracking-widest text-washi-200 font-mono">
            Original Comic Studio • In Genesis
          </span>
        </div>

        {/* Main Grand Title */}
        <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-washi-100 leading-[1.05] mb-6">
          YUGALA <br />
          <span className="bg-gradient-to-r from-radha-gold via-radha-rose to-mayur-cyan bg-clip-text text-transparent">
            STUDIO
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-washi-300/85 font-light leading-relaxed mb-10">
          Where ancient cosmic lore and mythic timelines come to life through dynamic ink craftsmanship, bold paneling, and cinematic storytelling.
        </p>

        {/* GitHub Link with itshover animated GitHub icon */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-radha-rose to-radha-gold hover:from-radha-champagne hover:to-radha-gold text-cosmic-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-radha-gold/20 hover:shadow-radha-gold/35 transition-all duration-300 flex items-center gap-2.5 active:scale-95 group"
          >
            <AnimatedGithub className="w-4 h-4 text-cosmic-950" />
            <span>Follow on GitHub</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator with itshover animated arrow down */}
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
