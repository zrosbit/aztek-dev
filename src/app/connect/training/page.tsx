"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { 
  GraduationCap, 
  PlayCircle, 
  Lock, 
  Trophy, 
  Star,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  FileText,
  Clock,
  CheckCircle2,
  X,
  Play,
  Medal,
  Award
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AcademyModulePage() {
  const [activeModule, setActiveModule] = useState<any>(null)

  const tiers = [
    { 
      id: "certified", 
      name: "Certified Installer", 
      level: "Tier 1",
      req: "Theory + Practical Audit",
      benefits: "Finder Listing · Warranty Rights",
      color: "text-slate-400",
      icon: Star,
      active: false
    },
    { 
      id: "gold", 
      name: "Gold Partner", 
      level: "Tier 2",
      req: "Advanced Assessments + Tier 1",
      benefits: "Priority Leads · Co-Brand Support",
      color: "text-amber-500",
      icon: Medal,
      active: true
    },
    { 
      id: "master", 
      name: "Master Installer", 
      level: "Tier 3",
      req: "Trainer Status + Leadership Approval",
      benefits: "Revenue Share · Certify Others",
      color: "text-purple-500",
      icon: Trophy,
      active: false
    },
  ]

  const tracks = [
    { 
      title: "Automotive PPF", 
      level: "Expert", 
      progress: 100, 
      status: "Certified", 
      icon: Star, 
      color: "text-az-blue", 
      modules: 10,
      desc: "Full vehicle wraps, complex surfaces & technical edge mastery."
    },
    { 
      title: "Ceramic Matrix", 
      level: "Expert", 
      progress: 100, 
      status: "Certified", 
      icon: ShieldCheck, 
      color: "text-green-500", 
      modules: 7,
      desc: "Nano-technology application including leather & stacked layers."
    },
    { 
      title: "Architectural Solar", 
      level: "Advanced", 
      progress: 85, 
      status: "Active", 
      icon: Trophy, 
      color: "text-amber-500", 
      modules: 7,
      desc: "Curtain wall facades, energy ROI & anti-graffiti sacrifice layers."
    },
    { 
      title: "Train the Trainer", 
      level: "Gold Req", 
      progress: 0, 
      status: "Locked", 
      icon: GraduationCap, 
      color: "text-purple-500", 
      modules: 5,
      desc: "Master Installer pedagogical skills & quality audit standards."
    },
    { 
      title: "Connect Operations", 
      level: "Mandatory", 
      progress: 40, 
      status: "Active", 
      icon: BookOpen, 
      color: "text-slate-400", 
      modules: 3,
      desc: "Lead management, job cards, and digital warranty workflows."
    },
  ]

  const currentModuleDetails = {
    title: "Full Vehicle Wrap: Seamless Technique",
    track: "Automotive PPF",
    duration: "45:12",
    description: "Advanced Tier 2 module focusing on high-tension zones and invisible seams for 100% paint coverage.",
    resources: [
      { name: "Full Body Template Spec", type: "PDF" },
      { name: "Bulk Roll Cutting Protocol", type: "PDF" },
      { name: "Tier 2 Quality Checklist", type: "Docs" }
    ]
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">AZTEK <span className="text-az-blue italic">Academy</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Quality Control Gateway & Certification Ledger</p>
         </div>
         <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 h-14 backdrop-blur-xl">
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-[0.2em]">Partner Status</span>
            <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">Gold Certified</Badge>
         </div>
      </div>

      {/* Tiers Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <Card key={tier.id} className={cn(
            "bg-white/5 border-white/10 shadow-2xl relative overflow-hidden transition-all duration-500 group",
            tier.active && "border-amber-500/40 ring-1 ring-amber-500/20 shadow-amber-500/10"
          )}>
            <div className={cn("absolute top-0 left-0 w-1 h-full transition-colors", tier.active ? "bg-amber-500" : "bg-white/10")} />
            <CardHeader className="p-8">
              <div className="flex items-start justify-between mb-6">
                 <div className={cn("w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110", tier.color)}>
                    <tier.icon className="w-6 h-6" />
                 </div>
                 <Badge variant="outline" className="text-[9px] uppercase font-bold tracking-widest border-white/10">{tier.level}</Badge>
              </div>
              <div className="space-y-1">
                <CardTitle className={cn("text-xl uppercase tracking-widest transition-colors", tier.active ? "text-foreground" : "text-muted-foreground")}>{tier.name}</CardTitle>
                <p className="text-[10px] font-bold text-az-blue uppercase tracking-widest">{tier.req}</p>
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8">
               <div className="pt-6 border-t border-white/5">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-3">Key Privileges</p>
                  <p className="text-xs font-medium text-foreground/80 leading-relaxed">{tier.benefits}</p>
               </div>
            </CardContent>
            {tier.active && (
              <div className="absolute top-4 right-4 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                 <span className="text-[8px] font-bold uppercase text-amber-500 tracking-widest">Active Tier</span>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Curriculum Tracks */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
           <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-bold">Discipline Curriculum</h3>
           <Badge variant="outline" className="text-[9px] border-white/10 bg-white/5 font-bold uppercase">6 Authorized Tracks</Badge>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {tracks.map((track) => (
            <Card 
              key={track.title} 
              className={cn(
                "bg-white/5 border-white/10 hover:border-az-blue/30 transition-all cursor-pointer group shadow-2xl overflow-hidden",
                track.status === "Locked" && "opacity-50 cursor-not-allowed grayscale"
              )}
              onClick={() => track.status !== "Locked" && setActiveModule(track)}
            >
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-10">
                <div className={cn(
                  "w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-all duration-500",
                  track.color
                )}>
                  <track.icon className="w-10 h-10" />
                </div>
                
                <div className="flex-1 space-y-6 w-full">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-4">
                        <h4 className="text-2xl font-headline font-bold group-hover:text-az-blue transition-colors text-foreground uppercase tracking-tight">{track.title}</h4>
                        <Badge variant="outline" className="text-[10px] border-white/10 uppercase font-bold tracking-widest bg-white/5">{track.level}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium max-w-xl">{track.desc}</p>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="text-right">
                          <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">{track.modules} Modules</p>
                          <p className={cn("text-xs font-bold uppercase tracking-[0.1em]", track.status === "Certified" ? "text-green-500" : "text-az-blue")}>{track.status}</p>
                       </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1">
                       <span className="text-muted-foreground">Competency Progress</span>
                       <span className="text-az-blue">{track.progress}%</span>
                    </div>
                    <Progress value={track.progress} className="h-1.5 bg-white/5" />
                  </div>
                </div>

                <Button disabled={track.status === "Locked"} className="h-14 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shrink-0 bg-white/5 border-white/10 hover:bg-az-blue group-hover:text-white transition-all shadow-xl">
                  {track.status === "Certified" ? "View Credentials" : track.status === "Locked" ? "Track Locked" : "Resume Learning"}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Module Player Modal */}
      <Dialog open={!!activeModule} onOpenChange={() => setActiveModule(null)}>
        <DialogContent className="max-w-5xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <div className="aspect-video w-full bg-black relative flex items-center justify-center group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/academy/1280/720')] bg-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-az-midnight via-transparent to-transparent" />
             <Button size="icon" className="w-24 h-24 rounded-full bg-az-blue text-white shadow-[0_0_60px_rgba(0,102,255,0.4)] hover:scale-110 transition-transform relative z-10 border-4 border-white/10">
                <Play className="w-10 h-10 fill-current ml-1" />
             </Button>
             <div className="absolute bottom-10 left-10 right-10 flex items-center gap-8 z-10">
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-az-blue w-1/3 shadow-[0_0_15px_#0066FF]" />
                </div>
                <span className="text-xs font-mono font-bold text-white tracking-widest">06:14 / {currentModuleDetails.duration}</span>
             </div>
          </div>

          <div className="p-12 space-y-10">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-[10px] border-az-blue/30 text-az-blue uppercase font-bold tracking-[0.2em]">{currentModuleDetails.track} · Tier 2</Badge>
                  <h2 className="text-4xl font-headline font-bold uppercase tracking-tight text-foreground">{currentModuleDetails.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium max-w-2xl">{currentModuleDetails.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                   <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-az-blue" />
                      <div className="space-y-0.5">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase">Duration</p>
                         <p className="text-xs font-bold">{currentModuleDetails.duration} Min</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <div className="space-y-0.5">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase">Format</p>
                         <p className="text-xs font-bold uppercase">Video Lesson</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-az-blue" />
                      <div className="space-y-0.5">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase">Target</p>
                         <p className="text-xs font-bold uppercase">Gold Status</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="w-full lg:w-96 space-y-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-az-blue">Technical Resources</h3>
                <div className="space-y-3">
                   {currentModuleDetails.resources.map(res => (
                     <Button key={res.name} variant="outline" className="w-full h-14 justify-between px-5 border-white/5 bg-white/[0.02] text-[10px] font-bold uppercase tracking-widest group hover:border-az-blue/30 transition-all rounded-2xl">
                        <div className="flex items-center gap-4">
                           <div className="p-2 rounded-lg bg-white/5 text-az-blue">
                              <FileText className="w-4 h-4" />
                           </div>
                           <div className="text-left">
                              <p className="text-[10px]">{res.name}</p>
                              <p className="text-[8px] text-muted-foreground">{res.type}</p>
                           </div>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </Button>
                   ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
             <Button variant="ghost" onClick={() => setActiveModule(null)} className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground gap-3 hover:text-foreground">
                <X className="w-4 h-4" /> Exit Classroom
             </Button>
             <div className="flex gap-4">
                <Button variant="outline" className="h-14 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10">Download Certificate</Button>
                <Button className="h-14 px-12 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] bg-az-blue hover:bg-az-blue/90 shadow-xl gap-3 shadow-az-blue/20">
                   Mark Lesson Complete <CheckCircle2 className="w-4 h-4" />
                </Button>
             </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
