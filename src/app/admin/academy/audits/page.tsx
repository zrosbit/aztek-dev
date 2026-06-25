"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  MapPin, 
  User, 
  CheckCircle2, 
  Clock, 
  Plus,
  ArrowRight,
  ClipboardCheck,
  Search
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function AcademyAuditsPage() {
  const audits = [
    { 
      partner: "Elite Wraps Bangalore", 
      date: "16 Jun 2026", 
      location: "Bangalore HQ", 
      trainer: "Sachin R.", 
      track: "Automotive PPF", 
      status: "Scheduled" 
    },
    { 
      partner: "Moto Shield Pune", 
      date: "14 Jun 2026", 
      location: "Pune Studio", 
      trainer: "Nadeem S.", 
      track: "Motorcycle Protection", 
      status: "Review Required" 
    },
    { 
      partner: "Skyline Arch Hub", 
      date: "12 Jun 2026", 
      location: "Bengaluru HQ", 
      trainer: "Jeho J.", 
      track: "Architectural Films", 
      status: "Completed" 
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="relative flex-1 w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Filter audits by partner or location..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <Button variant="gradient" className="h-14 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-2xl rounded-2xl">
          <Plus className="w-4 h-4" /> Schedule Practical Audit
        </Button>
      </div>

      <div className="space-y-4">
        {audits.map((audit, i) => (
          <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all group overflow-hidden shadow-xl">
            <CardContent className="p-8 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[9px] uppercase font-bold tracking-widest px-3 py-1">
                      {audit.track}
                    </Badge>
                    <Badge className={cn(
                      "text-[9px] uppercase font-bold tracking-widest",
                      audit.status === "Scheduled" ? "bg-blue-500/10 text-blue-500" :
                      audit.status === "Review Required" ? "bg-amber-500/10 text-amber-500 animate-pulse" :
                      "bg-green-500/10 text-green-500"
                    )}>{audit.status}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase font-bold">
                    <Calendar className="w-3.5 h-3.5" /> {audit.date}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Partner Studio</p>
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{audit.partner}</h4>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Location / Facility</p>
                    <p className="text-sm font-medium flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary" /> {audit.location}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Assigned Trainer</p>
                    <p className="text-sm font-bold flex items-center gap-2 uppercase tracking-tighter">
                      <User className="w-3.5 h-3.5 text-az-blue" /> {audit.trainer}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 w-full lg:w-auto">
                <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/5">
                  Audit Details
                </Button>
                <Button variant="gradient" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2">
                  {audit.status === "Completed" ? "View Scorecard" : "Launch Audit Tool"} <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
