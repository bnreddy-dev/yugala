import React, { useState, useEffect } from 'react'
import { AnimatedGithub, AnimatedSparkles } from './icons/AnimatedIcons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    setMobileMenuOpen(false)
    const el = document.getElementById('about')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cosmic-950/95 backdrop-blur-md border-b border-radha-gold/30 py-2.5 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-cosmic-950/90 via-cosmic-950/60 to-transparent backdrop-blur-[4px] border-b border-washi-100/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-washi-300/30 shadow-md group-hover:scale-105 group-hover:border-radha-gold transition-all duration-300 bg-cosmic-900 flex items-center justify-center">
            <img
              src="./assets/yugala_logo.jpg"
              alt="YUGALA Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-washi-100 flex items-center gap-2 group-hover:text-radha-gold transition-colors">
              YUGALA <span className="text-[10px] text-radha-gold font-mono tracking-widest uppercase font-semibold px-1.5 py-0.5 border border-radha-gold/40 rounded bg-cosmic-900/60">STUDIO</span>
            </span>
            <span className="text-[10px] text-washi-400 font-mono tracking-wider hidden sm:inline">The Kalpa Saga Trilogy</span>
          </div>
        </div>

        {/* Desktop Quick Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="./reader-book03/index.html"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-white bg-red-600/90 hover:bg-red-500 font-bold transition-all shadow-md shadow-red-900/40"
          >
            <AnimatedSparkles className="w-3 h-3 text-radha-gold" />
            <span>Book 03 <span className="text-[9px] opacity-80">(Finale)</span></span>
          </a>

          <a
            href="./reader-book02/index.html"
            className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-washi-200 hover:text-white hover:bg-white/10 transition-all"
          >
            Book 02
          </a>

          <a
            href="./reader/index.html"
            className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-washi-200 hover:text-white hover:bg-white/10 transition-all"
          >
            Book 01
          </a>

          <button
            onClick={scrollToAbout}
            className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-radha-gold hover:text-white hover:bg-radha-gold/10 transition-all"
          >
            Trilogy Catalog
          </button>
        </div>

        {/* Right Action: GitHub & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/bnreddy-dev/yugala"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-washi-200 hover:text-white bg-cosmic-900/70 hover:bg-cosmic-800 border border-washi-300/20 hover:border-radha-gold/50 rounded-lg transition-all flex items-center gap-2 shadow group"
          >
            <AnimatedGithub className="w-4 h-4 text-washi-300 group-hover:text-radha-gold transition-colors" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-washi-200 hover:text-white bg-cosmic-900/60 border border-washi-300/20 rounded-lg"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              ) : (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cosmic-950/98 border-b border-radha-gold/30 px-6 py-4 flex flex-col gap-3 backdrop-blur-xl animate-fadeIn">
          <a
            href="./reader-book03/index.html"
            className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-mono uppercase tracking-wider text-white bg-red-600/90 font-bold"
          >
            <span>Book 03: The Broken Kalpa</span>
            <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded text-radha-gold">FINALE</span>
          </a>
          <a
            href="./reader-book02/index.html"
            className="px-4 py-2 rounded-lg text-sm font-mono uppercase tracking-wider text-washi-200 hover:bg-white/10"
          >
            Book 02: Wrath of the Kala Chakra
          </a>
          <a
            href="./reader/index.html"
            className="px-4 py-2 rounded-lg text-sm font-mono uppercase tracking-wider text-washi-200 hover:bg-white/10"
          >
            Book 01: Shattered Mandala
          </a>
          <button
            onClick={scrollToAbout}
            className="text-left px-4 py-2 rounded-lg text-sm font-mono uppercase tracking-wider text-radha-gold hover:bg-radha-gold/10"
          >
            View Trilogy Catalog &darr;
          </button>
        </div>
      )}
    </nav>
  )
}
