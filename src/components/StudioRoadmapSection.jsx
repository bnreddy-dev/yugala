import React from 'react'
import { Sparkles, Compass, Palette, BookOpen, Layers, CheckCircle2, CircleDashed } from 'lucide-react'

export default function StudioRoadmapSection() {
  const phases = [
    {
      phase: 'Phase 01',
      title: 'Art Mediums & Visual Research',
      status: 'Current Focus',
      active: true,
      desc: 'Developing ink dispersion shaders, charcoal textures, and 3D camera trajectory mechanics.',
      icon: Palette,
    },
    {
      phase: 'Phase 02',
      title: 'Universe & Story Ideation',
      status: 'In Discussion',
      active: false,
      desc: 'Establishing the core themes, world lore, character designs, and narrative genre.',
      icon: BookOpen,
    },
    {
      phase: 'Phase 03',
      title: 'Panel Composition & Drafts',
      status: 'Upcoming',
      active: false,
      desc: 'Crafting the initial draft layouts, testing dynamic action sequences, and screentone balance.',
      icon: Layers,
    },
    {
      phase: 'Phase 04',
      title: 'Public Platform Publishing',
      status: 'Upcoming',
      active: false,
      desc: 'Publishing high-resolution chapters with digital reading and download capabilities.',
      icon: Sparkles,
    },
  ]

  return (
    <section id="roadmap" className="relative py-20 px-6 max-w-7xl mx-auto z-10">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-2 text-gold-kintsugi text-xs font-semibold tracking-widest uppercase mb-3">
          <span className="w-8 h-px bg-gold-kintsugi" />
          <span>From Scratch to Creation</span>
          <span className="w-8 h-px bg-gold-kintsugi" />
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-washi-100 mb-4">
          CREATIVE DEVELOPMENT ROADMAP
        </h2>
        <p className="max-w-2xl text-washi-300 text-sm sm:text-base font-light">
          We are in the initial inception phase. Here is our transparent roadmap as we build both the storytelling engine and the artwork from the ground up.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md flex flex-col justify-between ${
                item.active
                  ? 'bg-charcoal-800/80 border-vermilion/50 shadow-xl shadow-vermilion/10'
                  : 'bg-charcoal-800/40 border-charcoal-700/50 hover:border-charcoal-600'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${item.active ? 'bg-vermilion/20 text-vermilion' : 'bg-charcoal-700/60 text-washi-300'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded ${
                    item.active ? 'bg-vermilion/20 text-vermilion border border-vermilion/30' : 'bg-charcoal-700/50 text-washi-300/60'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-widest text-gold-kintsugi">
                  {item.phase}
                </span>
                <h3 className="font-cinzel text-lg font-bold text-washi-100 mt-1 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-washi-300/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal-700/50 flex items-center gap-2 text-[11px] text-washi-300/60">
                {item.active ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-vermilion animate-ping" />
                    <span className="text-vermilion font-medium">In Active Progress</span>
                  </>
                ) : (
                  <>
                    <CircleDashed className="w-3.5 h-3.5" />
                    <span>Queued</span>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
