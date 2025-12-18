"use client"

import * as React from "react"
import { Activity, EyeOff, Globe, BarChart3 } from "lucide-react"

const features = [
  {
    title: "Live Fight Updates",
    description: "Real-time results & metrics.",
    icon: Activity,
  },
  {
    title: "Hide Results",
    description: "Spoiler-free browsing.",
    icon: EyeOff,
  },
  {
    title: "Smart Timezones",
    description: "Auto-sync to your locale.",
    icon: Globe,
  },
  {
    title: "Fight Statistics",
    description: "Complete tale of the tape.",
    icon: BarChart3,
  },
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4 py-24">
      {features.map((feature) => (
        <div 
          key={feature.title}
          className="group relative p-8 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300 overflow-hidden"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute -inset-px bg-gradient-to-br from-[#ee202015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative flex flex-col items-start gap-4">
            <div className="p-3 rounded-lg bg-[#ee202010] text-[#ee2020] ring-1 ring-[#ee202020]">
              <feature.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
