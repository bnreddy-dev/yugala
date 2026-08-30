import React from 'react'
import { AnimatedArrowDown, AnimatedSparkles } from './icons/AnimatedIcons'

export default function HeroSection({ onExplore }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end text-left px-6 sm:px-12 md:px-24 pb-32 bg-transparent">
      <div className="relative z-10 max-w-3xl">
        {/* Origin Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600/90 text-white mb-6 uppercase tracking-[0.2em] text-[10px] font-bold shadow-lg shadow-red-900/50">
          <AnimatedSparkles className="w-3 h-3" />
          <span>Latest Release &bull; Book 02</span>
        </div>

        {/* Title */}
        <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl font-black tracking-wider text-white leading-none mb-4 drop-shadow-2xl">
          WRATH OF THE <br/><span className="text-radha-gold">KALA CHAKRA</span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-mono tracking-widest text-washi-300 mb-6 uppercase drop-shadow-md">Book 02 &bull; 50 Pages</h2>

        {/* Synopsis */}
        <p className="text-base sm:text-lg text-washi-200 font-light leading-relaxed mb-10 max-w-2xl drop-shadow-lg">
          Following the cataclysm at the Brahma Wound, Aryan ascends to the heavens to shatter the Kala Chakra and confront Emperor Vishwamitra before human consciousness is rewritten forever.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="./reader-book02/index.html"
            className="px-8 py-3 rounded bg-white hover:bg-gray-200 text-black font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-3 group"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            <span>Read Book 02</span>
          </a>
          <a
            href="./reader/index.html"
            className="px-8 py-3 rounded bg-cosmic-900/60 hover:bg-cosmic-800/80 border border-white/20 text-white font-bold uppercase tracking-widest backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
          >
            <span>Read Book 01</span>
          </a>
          <button 
            onClick={onExplore}
            className="px-6 py-3 rounded bg-transparent hover:bg-white/10 text-washi-300 hover:text-white font-mono text-xs uppercase tracking-widest transition-all duration-300"
          >
            <span>View Library &darr;</span>
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
