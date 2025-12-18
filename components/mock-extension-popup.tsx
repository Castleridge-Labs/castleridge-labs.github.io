"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"

export function MockExtensionPopup() {
    const [isLoading, setIsLoading] = React.useState(true)

    return (
        <div className="w-[500px] h-[620px] bg-white border rounded-lg flex flex-col overflow-hidden shadow-2xl relative">

            {/* Loading State */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 z-10 transition-opacity duration-500">
                    <Loader2 className="w-8 h-8 text-rose-600 animate-spin mb-4" />
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                        Establishing Link...
                    </p>
                </div>
            )}

            {/* The Live Portal - Direct Link to App */}
            <iframe
                src="https://main.dge8uvx5u74zp.amplifyapp.com/"
                className="w-full h-full border-0"
                onLoad={() => setIsLoading(false)}
                title="UFC Calendar Live Portal"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />

            {/* Interaction Hint Overlay */}
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black/80 text-white text-[10px] px-2 py-1 rounded font-mono uppercase">
                    Live Feed Active
                </span>
            </div>
        </div>
    )
}
