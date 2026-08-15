import React from 'react'
import { Brush, PenTool, Sparkles, Layers } from 'lucide-react'

const STYLES = [
  {
    id: 'sumie',
    kanji: '墨絵',
    title: 'Sumi-e & Ink-Splash',
    tagline: 'Flow of Black Ink & Dynamic Brush Force',
    desc: 'Deep black pigments, organic splatter textures, and deliberate calligraphic strokes that bring raw motion and natural power to every panel.',
    icon: Brush,
    accent: 'from-vermilion/20 to-transparent',
    borderColor: 'group-hover:border-vermilion/50',
    kanjiColor: 'text-vermilion/30',
  },
  {
    id: 'charcoal',
    kanji: '木炭',
    title: 'Charcoal & Raw Shading',
    tagline: 'Dark Textures & Visceral Tension',
    desc: 'Grainy charcoal gradients and rough cross-hatching that evoke deep psychological suspense, grim atmospheres, and tactile depth.',
    icon: Layers,
    accent: 'from-gold-kintsugi/20 to-transparent',
    borderColor: 'group-hover:border-gold-kintsugi/50',
    kanjiColor: 'text-gold-kintsugi/30',
  },
  {
    id: 'manga',
    kanji: '漫画',
    title: 'Classic & Seinen Manga',
    tagline: 'Kinetic Panelling & Screentone Precision',
    desc: 'High-contrast monochrome, dynamic perspective angles, and classic screentones designed for high-octane action and fast pacing.',
    icon: PenTool,
    accent: 'from-white/10 to-transparent',
    borderColor: 'group-hover:border-washi-200/50',
    kanjiColor: 'text-washi-100/20',
  },
  {
    id: 'handdrawn',
    kanji: '手描',
    title: 'Hand-Drawn Craftsmanship',
    tagline: 'Tradition Meets Modern Storytelling',
    desc: 'Each page starts with organic analog drawing on parchment paper before digital mastering, preserving the authentic human touch in every line.',
    icon: Sparkles,
    accent: 'from-vermilion/20 to-transparent',
    borderColor: 'group-hover:border-vermilion/50',
    kanjiColor: 'text-vermilion/30',
  },
]

export default function ArtStylesSection() {
  return (
    <section id="vision" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2 text-vermilion text-xs font-semibold tracking-widest uppercase mb-3">
          <span className="w-8 h-px bg-vermilion" />
          <span>The Artistic Foundation</span>
          <span className="w-8 h-px bg-vermilion" />
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-washi-100 mb-4">
          CRAFTED THROUGH JAPANESE MASTERY
        </h2>
        <p className="max-w-2xl text-washi-300 text-sm sm:text-base font-light">
          We don’t produce generic templates. Every upcoming release is rooted in distinct Japanese artistic schools to deliver a truly cinematic visual experience.
        </p>
      </div>

      {/* Grid of Art Styles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {STYLES.map((style) => {
          const Icon = style.icon
          return (
            <div
              key={style.id}
              className={`group relative p-8 rounded-2xl bg-charcoal-800/60 border border-charcoal-700/60 ${style.borderColor} backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl overflow-hidden`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${style.accent} rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform duration-500`} />

              {/* Massive Kanji Watermark */}
              <div className={`absolute -right-4 -bottom-4 font-kanji font-black text-8xl ${style.kanjiColor} select-none pointer-events-none transition-transform duration-500 group-hover:scale-110`}>
                {style.kanji}
              </div>

              {/* Header with Icon & Title */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3.5 rounded-xl bg-charcoal-700/60 border border-charcoal-600/50 text-washi-100 group-hover:text-vermilion group-hover:border-vermilion/40 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-kanji text-xs px-2.5 py-1 rounded-md bg-charcoal-900/80 border border-charcoal-700 text-washi-300">
                  {style.kanji}
                </span>
              </div>

              <h3 className="font-cinzel text-xl font-bold text-washi-100 mb-1">
                {style.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-kintsugi mb-4">
                {style.tagline}
              </p>
              <p className="text-sm text-washi-300 leading-relaxed">
                {style.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
