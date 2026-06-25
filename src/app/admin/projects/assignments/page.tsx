"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  UserPlus, 
  MapPin, 
  Star, 
  Briefcase, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  History,
  MoreVertical,
  Plus
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProjectAssignmentsPage() {
  const installers = [
    { name: "Karthik R.", partner: "Elite Bangalore", tier: "MASTER", activeJobs: 3, load: 85, score: 4.9 },
    { name: "Nadeem S.", partner: "Elite Bangalore", tier: "GOLD", activeJobs: 1, load: 40, score: 4.7 },
    { name: "Rohan P.", partner: "Mumbai Hub", tier: "CERTIFIED", activeJobs: 4, load: 95, score: 4.2 },
    { name: "Siddharth M.", partner: "Mumbai Hub", tier: "MASTER", activeJobs: 2, load: 60, score: 4.8 },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
         <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground ml-2">Human Capital Dispatch</h3>
         <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl">
            <Plus className="w-4 h-4" /> Authorize Displacement
         </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {installers.map((inst, i) => (
          <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-xl group overflow-hidden">
            <CardContent className="p-8 flex flex-col lg:flex-row items-center gap-12">
               <div className="flex-1 space-y-6 w-full">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner group-hover:bg-primary group-hover:text-white transition-all font-bold text-xl">
                           {inst.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="space-y-1">
                           <h4 className="text-2xl font-headline font-bold uppercase tracking-tight text-foreground">{inst.name}</h4>
                           <div className="flex items-center gap-3">
                              <Badge variant="outline" className={cn(
                                "text-[9px] uppercase font-bold border-white/10",
                                inst.tier === 'MASTER' ? "text-purple-500 border-purple-500/20 bg-purple-500/5" : ""
                              )}>{inst.tier} TIER</Badge>
                              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{inst.partner}</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-4">
                     <div className="space-y-2">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Active Job Load</p>
                        <p className="text-lg font-bold flex items-center gap-2 uppercase text-foreground">
                           <Briefcase className="w-4 h-4 text-primary" /> {inst.activeJobs} Assigned
                        </p>
                     </div>
                     <div className="space-y-2">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Operational Capacity</p>
                        <div className="space-y-1.5">
                           <div className="flex justify-between text-[10px] font-bold">
                              <span className="text-foreground">{inst.load}%</span>
                           </div>
                           <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className={cn(
                                "h-full transition-all",
                                inst.load > 90 ? "bg-red-500" : inst.load > 70 ? "bg-amber-500" : "bg-primary"
                              )} style={{ width: `${inst.load}%` }} />
                           </div>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Mastery Rating</p>
                        <div className="flex items-center gap-2">
                           <span className="text-lg font-headline font-bold text-foreground">{inst.score}</span>
                           <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex gap-2 w-full lg:w-auto">
                  <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold border-white/10 bg-white/5 hover:bg-white/10">
                     View Schedule
                  </Button>
                  <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold border-white/10 bg-white/5 hover:bg-primary hover:text-white transition-all">
                     Re-Assign Task
                  </Button>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
