
"use client"

import { use, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Camera, CheckCircle2, Plus, X, ShieldAlert } from "lucide-react"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function JobPhotosPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [photos, setPhotos] = useState<string[]>([])

  const slots = [
    { label: "Before: Front 45°", req: true },
    { label: "Before: Rear 45°", req: true },
    { label: "After: Front 45°", req: true },
    { label: "After: Detail Edge", req: true },
    { label: "After: Gloss Matrix", req: false },
  ]

  const capturePhoto = (idx: number) => {
    if (photos.length < slots.length) {
      setPhotos([...photos, `https://picsum.photos/seed/jobphoto${photos.length}/400/300`])
      toast({ title: "Photo Captured", description: "Timestamp and GPS tagged." })
    }
  }

  const handleSave = () => {
    if (photos.length < 4) {
      toast({ variant: "destructive", title: "Missing Evidence", description: "Please capture all required slots." })
      return
    }
    toast({ title: "Documentation Saved", description: "4 photos queued for high-res transmission." })
    router.push(`/installer/jobs/${id}`)
  }

  return (
    <div className="space-y-6">
      <div className="p-6 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
        <Button asChild variant="ghost" size="icon" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5">
          <Link href={`/installer/jobs/${id}`}><ArrowLeft className="w-5 h-5" /></Link>
        </Button>
        <h2 className="text-sm font-bold uppercase tracking-widest">Photo Evidence</h2>
        <div className="w-10" />
      </div>

      <div className="px-6 space-y-6">
        <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl flex items-center gap-3">
           <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
           <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest leading-relaxed">Gallery uploads disabled. Native camera only to ensure technical integrity.</p>
        </div>

        <div className="space-y-4">
           {slots.map((slot, i) => (
             <div key={slot.label} className="space-y-2">
                <div className="flex justify-between items-center px-1">
                   <span className="text-[10px] font-bold uppercase tracking-widest">{slot.label}</span>
                   {slot.req && <span className="text-[8px] font-bold text-red-500 uppercase tracking-widest">Required</span>}
                </div>
                {photos[i] ? (
                  <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative group">
                     <img src={photos[i]} className="w-full h-full object-cover" alt="Proof" />
                     <button onClick={() => setPhotos(photos.filter((_, idx) => idx !== i))} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md border border-white/10">
                        <X className="w-4 h-4" />
                     </button>
                     <div className="absolute bottom-4 left-4">
                        <Badge className="bg-black/60 backdrop-blur-md text-[8px] border-white/10">GPS: 12.9716, 77.5946</Badge>
                     </div>
                  </div>
                ) : (
                  <button 
                    onClick={() => capturePhoto(i)}
                    className="w-full aspect-video rounded-3xl border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center gap-3 group active:scale-95 transition-all"
                  >
                     <Camera className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                     <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Open Camera</span>
                  </button>
                )}
             </div>
           ))}
        </div>
      </div>

      <div className="p-6 bg-black/80 backdrop-blur-xl border-t border-white/10 fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <Button 
          className="w-full h-14 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest gap-2 shadow-xl"
          onClick={handleSave}
        >
          Confirm Documentation
        </Button>
      </div>
    </div>
  )
}
