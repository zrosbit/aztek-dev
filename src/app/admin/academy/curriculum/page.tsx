"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Plus, 
  PlayCircle, 
  FileText, 
  ShieldCheck, 
  Star, 
  Trophy, 
  Lock,
  ChevronRight,
  MoreVertical,
  Wrench,
  Droplets,
  Building2,
  Settings,
  GraduationCap
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AcademyCurriculumPage() {
  const tracks = [
    { title: "Automotive PPF", type: "Film Science", duration: "16 Hours", modules: 10, tier: "Tier 1-2", icon: Star, color: "text-az-blue", description: "Advanced full body wraps & matte finishing (Tier 2 complete)" },
    { title: "Ceramic Matrix", type: "Nanotechnology", duration: "10 Hours", modules: 7, tier: "Tier 1-2", icon: Droplets, color: "text-green-500", description: "Stacking protocols & interior specialization" },
    { title: "Motorcycle Protection", type: "Precision Kit", duration: "8 Hours", modules: 7, tier: "Tier 1-2", icon: ShieldCheck, color: "text-amber-500", description: "ADV full kits & exhaust zone ceramic" },
    { title: "Architectural Films", type: "Glass Science", duration: "12 Hours", modules: 7, tier: "Tier 1-2", icon: Building2, color: "text-purple-500", description: "Curtain wall facades & anti-graffiti sacrificial layers" },
    { title: "Train the Trainer", type: "Pedagogy", duration: "4 Hours", modules: 5, tier: "Tier 3", icon: GraduationCap, color: "text-purple-600", description: "Pedagogy, audit scoring & peer feedback (New Master Track)" },
    { title: "Connect Operations", type: "Platform OS", duration: "4 Hours", modules: 3, tier: "Tier 1", icon: Settings, color: "text-slate-400", description: "Lead routing & eWarrantyFy API protocols" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-end gap-4">
        <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest bg-white/5 gap-2">
          Assessment Rules
        </Button>
        <Button variant="gradient" className="h-12 px-8 font-bold text-xs uppercase tracking-widest gap-2 rounded-2xl shadow-xl">
          <Plus className="w-4 h-4" /> Create New Track
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <Card key={track.title} className="bg-white/5 border-white/10 shadow-2xl group hover:border-primary/30 transition-all flex flex-col">
            <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className={cn("p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform", track.color)}>
                  <track.icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-lg uppercase tracking-widest text-foreground leading-none">{track.title}</CardTitle>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{track.type}</p>
                </div>
              </div>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary transition-colors"><MoreVertical className="w-4 h-4" /></Button>
            </CardHeader>
            <CardContent className="p-8 space-y-8 flex-1">
              <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">{track.description}</p>
              
              <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/5">
                <div className="space-y-1">
                  <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Duration</span>
                  <p className="text-xl font-headline font-bold text-foreground">{track.duration}</p>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Modules</span>
                  <p className="text-xl font-headline font-bold text-primary">{track.modules}</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <Badge variant="outline" className={cn(
                  "text-[9px] uppercase font-bold tracking-widest border-white/10 bg-white/5",
                  track.tier === "Tier 3" && "border-purple-500/30 text-purple-500"
                )}>
                  {track.tier}
                </Badge>
                <Button variant="ghost" className="text-primary text-[10px] font-bold uppercase tracking-widest gap-2 p-0 h-auto hover:bg-transparent group-hover:translate-x-2 transition-transform">
                  Manage Content <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
