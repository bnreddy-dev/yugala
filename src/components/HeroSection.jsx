import React from 'react'
import { AnimatedArrowDown, AnimatedSparkles } from './icons/AnimatedIcons'

export default function HeroSection({ onExplore }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end text-left px-6 sm:px-12 md:px-24 pb-32 bg-transparent">
      {/* 
        Removed the static 2D background image and heavy gradients.
        We want the beautiful 3D Three.js camera spline flight and floating manuscript tiles 
        to be completely visible behind this UI!
      */}
      <div className="relative z-10 max-w-3xl">
        {/* Origin Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600/90 text-white mb-6 uppercase tracking-[0.2em] text-[10px] font-bold shadow-lg shadow-red-900/50">
          <AnimatedSparkles className="w-3 h-3" />
          <span>Yugala Original Series</span>
        </div>

        {/* Title */}
        <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl font-black tracking-wider text-white leading-none mb-4 drop-shadow-2xl">
          SHATTERED <br/><span className="text-radha-gold">MANDALA</span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-mono tracking-widest text-washi-300 mb-6 uppercase drop-shadow-md">Book 01</h2>

        {/* Synopsis */}
        <p className="text-base sm:text-lg text-washi-200 font-light leading-relaxed mb-10 max-w-2xl drop-shadow-lg">
          A scarred ascetic awakens to a world stripped of logic. Armed with a humming cybernetic blade and relentless fury, Aryan descends into the shattered citadel to confront the armored tyrant who broke the timeline.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="./reader/index.html"
            className="px-8 py-3 rounded bg-white hover:bg-gray-200 text-black font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-3 group"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            <span>Read Now</span>
          </a>
          <button 
            onClick={onExplore}
            className="px-8 py-3 rounded bg-cosmic-900/60 hover:bg-cosmic-800/80 border border-white/20 text-white font-bold uppercase tracking-widest backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
          >
            <span>More Info</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        onClick={onExplore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-washi-300/60 hover:text-white cursor-pointer transition-colors group z-20"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono group-hover:tracking-wider transition-all drop-shadow-md">Explore Library</span>
        <AnimatedArrowDown className="w-4 h-4 text-radha-gold drop-shadow-md" />
      </div>
    </section>
  )
}
