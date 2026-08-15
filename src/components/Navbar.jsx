import React, { useState, useEffect } from 'react'
import { AnimatedGithub } from './icons/AnimatedIcons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cosmic-950/85 backdrop-blur-md border-b border-cosmic-700/60 py-2.5 shadow-2xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-radha-gold/30 shadow-lg shadow-radha-gold/20 group-hover:scale-105 group-hover:border-radha-gold/60 transition-all duration-300 bg-cosmic-900 flex items-center justify-center">
            <img
              src="./assets/yugala_logo.jpg"
              alt="YUGALA Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-lg font-black tracking-widest text-washi-100 flex items-center gap-2">
              YUGALA <span className="text-[10px] text-radha-gold font-normal px-1.5 py-0.2 border border-radha-gold/40 rounded bg-radha-gold/10">STUDIO</span>
            </span>
          </div>
        </div>

        {/* GitHub Link with itshover-style animated icon */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-washi-200 hover:text-white bg-cosmic-800/80 hover:bg-cosmic-700/80 border border-cosmic-600/70 hover:border-radha-gold/50 rounded-lg transition-all flex items-center gap-2 shadow group"
        >
          <AnimatedGithub className="w-4 h-4 text-radha-gold" />
          <span>GitHub</span>
        </a>
      </div>
    </nav>
  )
}
