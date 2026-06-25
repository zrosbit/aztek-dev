
"use client"

import { use, useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RotateCcw, CheckCircle2, ShieldCheck, Save, ArrowRight } from "lucide-react"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function JobSignOffPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hasSigned, setHasSigned] = useState(false)
  const [timestamp, setTimestamp] = useState("")

  useEffect(() => {
    setTimestamp(new Date().toLocaleTimeString())
  }, [])

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasSigned(false)
  }

  const handleComplete = () => {
    toast({ title: "Sign-off Captured", description: "Warranty activation transmitted to eWarrantyFy." })
    router.push(`/installer/jobs/${id}`)
  }

  return (
    <div className="space-y-8 flex flex-col h-[calc(100vh-4rem)]">
      <div className="p-6 bg-white/[0.02] border-b border-white/5 flex items-center justify-between shrink-0">
        <Button asChild variant="ghost" size="icon" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5">
          <Link href={`/installer/jobs/${id}`}><ArrowLeft className="w-5 h-5" /></Link>
        </Button>
        <h2 className="text-sm font-bold uppercase tracking-widest">Digital Sign-off</h2>
        <div className="w-10" />
      </div>

      <div className="px-6 space-y-6 flex-1 flex flex-col">
        <div className="space-y-2">
          <h3 className="text-xl font-headline font-bold uppercase">Customer Approval</h3>
          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest leading-relaxed">
            Please ask the customer to sign below to verify installation quality and activate the 10-year digital warranty.
          </p>
        </div>

        <div className="flex-1 bg-white/5 border border-white/10 rounded-[32px] relative overflow-hidden group">
           <canvas 
             ref={canvasRef}
             className="w-full h-full touch-none"
             onMouseDown={() => setHasSigned(true)}
             onTouchStart={() => setHasSigned(true)}
           />
           <div className="absolute top-4 right-4">
              <Button size="icon" variant="outline" className="w-10 h-10 rounded-xl border-white/10 bg-black/40" onClick={clearSignature}>
                 <RotateCcw className="w-4 h-4" />
              </Button>
           </div>
           {!hasSigned && (
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Sign Here</span>
             </div>
           )}
        </div>

        <div className="p-5 bg-primary/5 border border-primary/20 rounded-2xl flex items-start gap-4">
           <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
           <p className="text-[10px] text-muted-foreground font-medium uppercase leading-relaxed">
             Signature timestamp {timestamp && `(${timestamp})`} and GPS coordinates will be embedded into the digital warranty record.
           </p>
        </div>
      </div>

      <div className="p-6 bg-black/80 backdrop-blur-xl border-t border-white/10 shrink-0 fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <Button 
          disabled={!hasSigned}
          className="w-full h-16 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest gap-2 shadow-xl"
          onClick={handleComplete}
        >
          Activate Warranty & Finish <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
