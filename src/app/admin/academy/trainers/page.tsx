"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  UserCheck, 
  MapPin, 
  Star, 
  ClipboardCheck, 
  Plus, 
  Search, 
  Award,
  MoreVertical,
  ChevronRight,
  TrendingUp,
  History
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function AcademyTrainersPage() {
  const trainers = [
    { name: "Sachin R.", specialty: "Automotive PPF", location: "Bengaluru HQ", audits: 142, rating: 4.9, status: "Active" },
    { name: "Nadeem S.", specialty: "Ceramic Matrix", location: "Pune Hub", audits: 98, rating: 4.8, status: "Traveling" },
    { name: "Jeho J.", specialty: "Architectural", location: "Global / Traveling", audits: 56, rating: 5.0, status: "Active" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search trainers by name, specialty or hub..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <Button variant="gradient" className="h-14 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl rounded-2xl">
          <Plus className="w-4 h-4" /> Authorize New Trainer
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {trainers.map((t) => (
          <Card key={t.name} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-2xl overflow-hidden group">
            <CardContent className="p-8 flex flex-col lg:flex-row items-center gap-12">
               <div className="flex-1 space-y-6 w-full">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center text-primary shadow-inner border border-primary/20 font-bold text-xl group-hover:bg-primary group-hover:text-white transition-all">
                           {t.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="space-y-1">
                           <h4 className="text-2xl font-headline font-bold uppercase tracking-tight text-foreground">{t.name}</h4>
                           <div className="flex items-center gap-3">
                              <Badge variant="outline" className="text-[9px] uppercase border-primary/20 text-primary font-bold">{t.specialty}</Badge>
                              <Badge className={cn(
                                "text-[9px] uppercase font-bold",
                                t.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500"
                              )}>{t.status}</Badge>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-4">
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Operational Base</p>
                        <p className="text-sm font-bold flex items-center gap-2 uppercase tracking-tighter"><MapPin className="w-3.5 h-3.5 text-primary" /> {t.location}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Practical Audits</p>
                        <p className="text-sm font-bold flex items-center gap-2 uppercase tracking-tighter"><ClipboardCheck className="w-3.5 h-3.5 text-primary" /> {t.audits} Certified</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Avg. Quality Rating</p>
                        <div className="flex items-center gap-2">
                           <span className="text-sm font-bold text-foreground">{t.rating} / 5.0</span>
                           <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex gap-2 w-full lg:w-auto">
                  <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold border-white/10 bg-white/5">
                     Trainer Dossier
                  </Button>
                  <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold border-white/10 bg-white/5">
                     <History className="w-4 h-4 mr-2" /> Audit Log
                  </Button>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
