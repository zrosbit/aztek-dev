
"use client"

import { use, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CheckCircle2, Save } from "lucide-react"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function JobChecklistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [completed, setCompleted] = useState<number[]>([])

  const checklist = [
    "Surface decontamination completed",
    "Paint correction verified",
    "Film edges sealed — no lifting",
    "No visible contaminants under film",
    "Self-healing activation test passed",
    "Customer visual inspection done",
    "Digital manual data backup complete"
  ]

  const toggleCheck = (idx: number) => {
    setCompleted(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  const handleSave = () => {
    toast({ title: "Checklist Saved", description: "Technical data queued for sync." })
    router.push(`/installer/jobs/${id}`)
  }

  return (
    <div className="space-y-6">
      <div className="p-6 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
        <Button asChild variant="ghost" size="icon" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5">
          <Link href={`/installer/jobs/${id}`}><ArrowLeft className="w-5 h-5" /></Link>
        </Button>
        <h2 className="text-sm font-bold uppercase tracking-widest">Quality Audit</h2>
        <div className="w-10" />
      </div>

      <div className="px-6 space-y-4">
        {checklist.map((item, i) => (
          <div 
            key={i} 
            onClick={() => toggleCheck(i)}
            className={cn(
              "p-5 rounded-3xl border transition-all flex items-center gap-4 active:scale-[0.98]",
              completed.includes(i) ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(0,102,255,0.1)]" : "bg-white/5 border-white/5"
            )}
          >
            <Checkbox checked={completed.includes(i)} className="w-6 h-6 rounded-full data-[state=checked]:bg-primary" />
            <span className={cn(
              "text-xs font-bold uppercase tracking-tight",
              completed.includes(i) ? "text-foreground" : "text-muted-foreground"
            )}>{item}</span>
          </div>
        ))}
      </div>

      <div className="p-6 bg-black/80 backdrop-blur-xl border-t border-white/10 sticky bottom-0 z-50 fixed left-0 right-0 max-w-md mx-auto">
        <Button 
          className="w-full h-14 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest gap-2 shadow-xl"
          onClick={handleSave}
        >
          <Save className="w-4 h-4" /> Save Quality Checklist
        </Button>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
