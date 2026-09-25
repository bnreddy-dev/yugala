import React from 'react'
import { AnimatedLayers, AnimatedGithub } from './icons/AnimatedIcons'

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-[70vh] flex flex-col justify-start px-6 sm:px-12 md:px-24 py-16 z-10 max-w-7xl mx-auto w-full">
      
      {/* OTT Style Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-washi-100/10 pb-4 gap-4">
        <div>
          <span className="text-radha-gold font-mono text-xs uppercase tracking-widest block mb-1">Official Trilogy Catalog</span>
          <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-washi-100">
            The Kalpa Saga Trilogy
          </h3>
        </div>
        <span className="text-washi-400 font-mono text-xs uppercase tracking-wider">Classic Manga Ink &bull; 100% Free &bull; Complete Trilogy</span>
      </div>

      {/* Comic Book Library Grid - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        {/* Book 03 Card (Grand Finale) */}
        <a href="./reader-book03/index.html" className="group relative rounded-xl overflow-hidden border border-radha-gold shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-radha-gold/30 flex flex-col bg-charcoal-900/60 backdrop-blur-md">
          <div className="w-full aspect-[2/3] bg-cover bg-center" style={{ backgroundImage: 'url(./reader-book03/pages/00_cover.jpg)' }}></div>
          <div className="p-5 flex flex-col justify-between flex-1">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded bg-red-600/90 text-white font-mono text-[10px] uppercase tracking-wider font-bold mb-2">Grand Finale</div>
              <h4 className="text-white font-cinzel font-bold text-xl mb-1 group-hover:text-radha-gold transition-colors">The Broken Kalpa</h4>
              <p className="text-radha-gold font-mono text-xs uppercase tracking-widest mb-2">Book 03 &bull; 50 Pages</p>
              <p className="text-washi-300 text-xs leading-relaxed font-light mb-4">Aryan confronts Emperor Vishwamitra at the singularity nexus to break the cosmic cycle and free Aryavarta.</p>
            </div>
            <div className="flex items-center gap-2 text-black font-bold text-sm bg-white px-4 py-2 rounded justify-center group-hover:bg-radha-gold transition-colors mt-auto">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span>Read Book 03</span>
            </div>
          </div>
        </a>

        {/* Book 02 Card */}
        <a href="./reader-book02/index.html" className="group relative rounded-xl overflow-hidden border border-radha-gold/40 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-radha-gold hover:shadow-radha-gold/20 flex flex-col bg-charcoal-900/60 backdrop-blur-md">
          <div className="w-full aspect-[2/3] bg-cover bg-center" style={{ backgroundImage: 'url(./reader-book02/pages/00_cover.jpg)' }}></div>
          <div className="p-5 flex flex-col justify-between flex-1">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded bg-cosmic-800 text-washi-300 font-mono text-[10px] uppercase tracking-wider font-bold mb-2">Book 02</div>
              <h4 className="text-white font-cinzel font-bold text-xl mb-1 group-hover:text-radha-gold transition-colors">Wrath of the Kala Chakra</h4>
              <p className="text-radha-gold font-mono text-xs uppercase tracking-widest mb-2">Book 02 &bull; 50 Pages</p>
              <p className="text-washi-300 text-xs leading-relaxed font-light mb-4">Aryan ascends to celestial orbit to shatter the Kala Chakra before human consciousness is rewritten forever.</p>
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded justify-center group-hover:bg-white group-hover:text-black transition-colors mt-auto">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span>Read Book 02</span>
            </div>
          </div>
        </a>

        {/* Book 01 Card */}
        <a href="./reader/index.html" className="group relative rounded-xl overflow-hidden border border-cosmic-700/60 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/40 flex flex-col bg-charcoal-900/60 backdrop-blur-md">
          <div className="w-full aspect-[2/3] bg-cover bg-center" style={{ backgroundImage: 'url(./reader/pages/00_cover.jpg)' }}></div>
          <div className="p-5 flex flex-col justify-between flex-1">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded bg-cosmic-800 text-washi-300 font-mono text-[10px] uppercase tracking-wider font-bold mb-2">Book 01</div>
              <h4 className="text-white font-cinzel font-bold text-xl mb-1 group-hover:text-radha-champagne transition-colors">Shattered Mandala</h4>
              <p className="text-radha-gold font-mono text-xs uppercase tracking-widest mb-2">Book 01 &bull; 50 Pages</p>
              <p className="text-washi-300 text-xs leading-relaxed font-light mb-4">Origins at the Brahma Wound crater. A scarred ascetic awakens and battles Imperial hunting skiffs.</p>
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded justify-center group-hover:bg-white group-hover:text-black transition-colors mt-auto">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span>Read Book 01</span>
            </div>
          </div>
        </a>

      </div>

      {/* Series Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-washi-100/10 text-sm text-washi-300">
        <div>
          <span className="block text-washi-400 font-mono text-xs uppercase tracking-widest mb-1">Creator</span>
          <span className="font-semibold text-white">Yugala Studio</span>
        </div>
        <div>
          <span className="block text-washi-400 font-mono text-xs uppercase tracking-widest mb-1">Genre</span>
          <span className="font-semibold text-white">Action, Dark Fantasy, Mythological Sci-Fi</span>
        </div>
        <div>
          <span className="block text-washi-400 font-mono text-xs uppercase tracking-widest mb-1">Visual Medium</span>
          <span className="font-semibold text-white">Classic Manga Ink (G-Pen & Kakeami)</span>
        </div>
      </div>

      {/* GitHub Footer */}
      <div className="pt-6 border-t border-cosmic-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-washi-300/70 w-full">
        <span className="font-mono text-washi-300/60">Open Source & Free on GitHub Pages</span>
        <a
          href="https://github.com/bnreddy-dev/yugala"
          target="_blank"
          rel="noreferrer"
          className="text-radha-gold hover:text-radha-champagne font-semibold transition-colors flex items-center gap-1.5 group"
        >
          <AnimatedGithub className="w-4 h-4 text-mayur-cyan" />
          <span>Follow on GitHub</span>
        </a>
      </div>
    </section>
  )
}
