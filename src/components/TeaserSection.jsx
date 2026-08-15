import React from 'react'
import { Flame, Clock, Sparkles, ShieldAlert, CheckCircle2, CircleDashed } from 'lucide-react'

export default function TeaserSection({ onWaitlist }) {
  const steps = [
    { title: 'World Lore & Script', status: 'In Progress', icon: CircleDashed, active: true },
    { title: 'Sumi-e Thumbnailing', status: 'Upcoming', icon: CircleDashed, active: false },
    { title: 'Charcoal & Line Inking', status: 'Upcoming', icon: CircleDashed, active: false },
    { title: 'Digital Mastering & Release', status: 'Upcoming', icon: CircleDashed, active: false },
  ]

  return (
    <section id="teaser" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-charcoal-800/80 to-charcoal-900/90 border border-charcoal-700/80 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Subtle Accent Light */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-vermilion/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold-kintsugi/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Story Teaser Info */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vermilion/10 border border-vermilion/30 text-vermilion text-xs font-semibold uppercase tracking-wider mb-6">
              <Flame className="w-3.5 h-3.5" />
              <span>Currently In The Forge • Project 01</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-washi-100 mb-4 leading-tight">
              SHADOW OF THE RONIN <br />
              <span className="font-kanji text-2xl sm:text-3xl text-vermilion font-normal">
                (浪人の影)
              </span>
            </h2>

            <p className="text-washi-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              In an ancient era fractured by mythical spirits, an exiled samurai wields a blade drawn in liquid black ink. A visceral dark fantasy epic exploring vengeance, honor, and the boundary between humanity and folklore.
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="px-3 py-1 rounded-md bg-charcoal-700/60 border border-charcoal-600/60 text-xs text-washi-200">
                🖌️ Sumi-e & Charcoal
              </span>
              <span className="px-3 py-1 rounded-md bg-charcoal-700/60 border border-charcoal-600/60 text-xs text-washi-200">
                ⚔️ Martial Arts Action
              </span>
              <span className="px-3 py-1 rounded-md bg-charcoal-700/60 border border-charcoal-600/60 text-xs text-washi-200">
                📜 Dark Japanese Fantasy
              </span>
            </div>

            <button
              onClick={onWaitlist}
              className="px-6 py-3.5 rounded-xl bg-vermilion hover:bg-vermilion-glow text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-vermilion/25 transition-all active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Notified When Chapter 1 Drops</span>
            </button>
          </div>

          {/* Right: Studio Production Roadmap */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-charcoal-900/80 border border-charcoal-700/50 shadow-inner flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-charcoal-700/60 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-washi-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold-kintsugi" /> Production Roadmap
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-vermilion/15 text-vermilion border border-vermilion/30 font-semibold">
                ACT 1 IN PROGRESS
              </span>
            </div>

            <div className="space-y-4">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      step.active
                        ? 'bg-charcoal-800 border-vermilion/50 shadow-md'
                        : 'bg-charcoal-800/40 border-charcoal-700/40 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg ${step.active ? 'bg-vermilion/20 text-vermilion' : 'bg-charcoal-700 text-washi-300'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium text-washi-100">{step.title}</span>
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${step.active ? 'text-vermilion' : 'text-washi-300/60'}`}>
                      {step.status}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-charcoal-800/50 border border-charcoal-700/40 text-[11px] text-washi-300 leading-relaxed">
              💡 <strong className="text-washi-100">Zero compromisations:</strong> Every page is hand-crafted with utmost attention to panel flow and ink weight before publishing.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
