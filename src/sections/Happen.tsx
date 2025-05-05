"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { useEffect, useState } from "react"

export default function Happen() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <section className="container">
        <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-black">
                LET&apos;S MAKE IT
                <br />
                HAPPEN TOGETHER.
            </h1>
            </div>

            <div className="flex-1 flex flex-col gap-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-light">
                We champions are a rebellion against the old Ineffective Lead Generation Methods
            </p>

            <div>
                <Button
                variant="default"
                className="group bg-black text-white hover:bg-black/90 rounded px-6 py-6 text-lg"
                >
                Start an Conversation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
            </div>
        </div>
        </section>
    </section>
  )
}
