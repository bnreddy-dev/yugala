import React, { useRef, useEffect } from 'react'
import ThreeBackground from './components/ThreeBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

export default function App() {
  const scrollProgress = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const progress = window.scrollY / totalScroll
        scrollProgress.current = Math.min(Math.max(progress, 0), 1)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen selection:bg-vermilion selection:text-white bg-charcoal-900/80 text-washi-100">
      {/* 3D Three.js Camera Spline Background */}
      <ThreeBackground scrollProgress={scrollProgress} />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col">
        <HeroSection onExplore={scrollToAbout} />
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
