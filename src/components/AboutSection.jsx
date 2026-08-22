import React from 'react'
import { AnimatedLayers, AnimatedGithub } from './icons/AnimatedIcons'

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-[70vh] flex flex-col justify-start px-6 sm:px-12 md:px-24 py-16 z-10 max-w-7xl mx-auto w-full">
      
      {/* OTT Style Section Header */}
      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-washi-100 mb-8 border-b border-washi-100/10 pb-4 inline-block">
        More Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Series Info Details */}
        <div className="col-span-1 md:col-span-2 space-y-8">
          <p className="text-washi-300 text-base sm:text-lg font-light leading-relaxed">
            We are dedicated to crafting original graphic sagas rooted in deep cosmic mythologies. Utilizing dynamic Classic Manga Ink, expressive linework, and kinetic 3D comic paneling to create transcendent visual literature.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-washi-300">
            <div>
              <span className="block text-washi-400 font-mono text-xs uppercase tracking-widest mb-1">Creator</span>
              <span className="font-semibold text-white">Yugala Studio</span>
            </div>
            <div>
              <span className="block text-washi-400 font-mono text-xs uppercase tracking-widest mb-1">Genre</span>
              <span className="font-semibold text-white">Action, Dark Fantasy, Sci-Fi</span>
            </div>
            <div>
              <span className="block text-washi-400 font-mono text-xs uppercase tracking-widest mb-1">Maturity Rating</span>
              <span className="inline-block border border-white/40 px-2 py-0.5 text-xs font-bold text-white rounded">16+</span>
            </div>
          </div>
        </div>

        {/* Thumbnail / Continue Reading Card */}
        <div className="col-span-1">
          <a href="./reader/index.html" className="group block relative rounded-lg overflow-hidden border border-cosmic-700/60 shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-radha-gold/50 cursor-pointer">
            <div className="aspect-[2/3] w-full bg-cover bg-center" style={{ backgroundImage: 'url(./reader/pages/02.jpg)' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-cinzel font-bold text-xl mb-1">Book 01</h4>
              <p className="text-radha-gold font-mono text-xs uppercase tracking-widest mb-3">50 Pages</p>
              <div className="flex items-center gap-2 text-white font-bold text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded justify-center group-hover:bg-radha-gold group-hover:text-black transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                <span>Read Chapter</span>
              </div>
            </div>
          </a>
        </div>

      </div>

      {/* GitHub Footer */}
      <div className="mt-24 pt-6 border-t border-cosmic-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-washi-300/70 w-full">
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
