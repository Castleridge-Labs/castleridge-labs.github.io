"use client"

import * as React from "react"
import { MockExtensionPopup } from "@/components/mock-extension-popup"
import { Search, ChevronLeft, ChevronRight, RotateCw, Star, MoreVertical } from "lucide-react"

export function BrowserSimulation() {
    const [isOpen, setIsOpen] = React.useState(false)

    // Auto-open on load for impact
    React.useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="w-full max-w-5xl mx-auto p-4 md:p-12">
            {/* Browser Shell */}
            <div className="rounded-xl border border-white/10 bg-[#1e1e1e] shadow-2xl overflow-hidden relative">

                {/* Browser Toolbar */}
                <div className="h-14 bg-[#2b2b2b] border-b border-white/5 flex items-center px-4 gap-4">
                    {/* Window Controls */}
                    <div className="flex gap-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex gap-2 text-white/20">
                        <ChevronLeft className="w-5 h-5" />
                        <ChevronRight className="w-5 h-5" />
                        <RotateCw className="w-4 h-4 mt-0.5" />
                    </div>

                    {/* Omnibox */}
                    <div className="flex-1 h-9 bg-[#1e1e1e] rounded flex items-center px-3 gap-3 text-xs text-white/40 font-mono relative overflow-hidden">
                        <Search className="w-3 h-3" />
                        <span>chrome://extensions/ufc-calendar</span>
                        <div className="absolute right-3 flex items-center gap-2">
                            <Star className="w-3 h-3" />
                        </div>
                    </div>

                    {/* Extensions Area */}
                    <div className="flex items-center gap-3 pl-2 border-l border-white/10 relative">
                        {/* The Trigger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-white/10' : ''}`}
                            title="Open UFC Calendar"
                        >
                            <div className="w-5 h-5 rounded bg-rose-600 flex items-center justify-center">
                                <span className="text-[8px] font-bold text-white tracking-tighter">UFC</span>
                            </div>
                        </button>

                        <div className="w-8 h-8 rounded flex items-center justify-center opacity-20">
                            <div className="w-5 h-5 bg-white/50 rounded-full" />
                        </div>
                        <div className="w-8 h-8 rounded flex items-center justify-center opacity-20">
                            <div className="w-5 h-5 bg-white/50 rounded-full" />
                        </div>

                        <MoreVertical className="w-4 h-4 text-white/20 ml-2" />

                        {/* The Popup Container */}
                        {isOpen && (
                            <div className="absolute top-12 right-0 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                                <MockExtensionPopup />
                            </div>
                        )}
                    </div>
                </div>

                {/* Browser Viewport (The Content) */}
                <div className="h-[750px] bg-[#000] relative flex items-center justify-center overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                    <div className="text-center z-0 opacity-50 select-none pointer-events-none">
                        <h1 className="text-4xl md:text-6xl font-black uppercase text-white/5 tracking-tighter">
                            Waiting for Signal
                        </h1>
                    </div>

                    {/* If popup is closed, show a hint */}
                    {!isOpen && (
                        <div className="absolute top-4 right-20 text-white/50 font-mono text-xs animate-bounce">
                            ▲ Click to Initialize
                        </div>
                    )}
                </div>
            </div>

            {/* Instruction Label */}
            <div className="mt-8 text-center">
                <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                    Interactive Simulation // v2.4.0
                </p>
            </div>
        </div>
    )
}
