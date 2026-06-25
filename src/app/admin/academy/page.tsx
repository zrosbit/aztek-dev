"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Medal, 
  Award, 
  Trophy, 
  Clock, 
  Calendar, 
  AlertTriangle, 
  TrendingUp,
  GraduationCap,
  PlayCircle,
  CheckCircle2,
  FileText
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AcademyDashboardPage() {
  const kpis = [
    { label: "Active Learners", val: "642", icon: Users, color: "text-blue-500" },
    { label: "Certified Installers", val: "385", icon: Medal, color: "text-green-500" },
    { label: "Gold Partners", val: "76", icon: Award, color: "text-amber-500" },
    { label: "Master Installers", val: "12", icon: Trophy, color: "text-purple-500" },
  ]

  const funnel = [
    { label: "Applications", val: 850, pct: "100%" },
    { label: "Theory Complete", val: 640, pct: "75%" },
    { label: "Practical Complete", val: 420, pct: "49%" },
    { label: "Certified", val: 385, pct: "45%" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">Academy <span className="text-primary italic">Governance</span></h1>
        <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Quality Control, Curriculum Management & Certifications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-4 shadow-xl group hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between">
              <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", s.color)}>
                <s.icon className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-[8px] border-white/10 font-bold uppercase tracking-widest">Live</Badge>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
              <p className="text-3xl font-headline font-bold text-foreground">{s.val}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl">
          <CardHeader className="p-8 border-b border-white/5">
            <CardTitle className="text-sm uppercase tracking-widest">Certification Velocity Funnel</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-12 space-y-8">
            {funnel.map((item, i) => (
              <div key={item.label} className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <span>{item.label}</span>
                  <span className="text-primary">{item.val} ({item.pct})</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-1000" 
                    style={{ width: item.pct }} 
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 shadow-2xl">
          <CardHeader className="p-8 border-b border-white/5">
            <CardTitle className="text-sm uppercase tracking-widest">Recent Practical Audits</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {[
              { partner: "Elite Wraps", track: "Auto PPF", score: "4.8/5", status: "Passed", color: "text-green-500" },
              { partner: "Moto Shield Pune", track: "Motorcycle", score: "3.9/5", status: "Review", color: "text-amber-500" },
              { partner: "Skyline Arch", track: "Architectural", score: "4.2/5", status: "Passed", color: "text-green-500" },
              { partner: "Bengaluru Hub", track: "Ceramic", score: "4.9/5", status: "Passed", color: "text-green-500" },
            ].map((audit, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all cursor-pointer">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-foreground">{audit.partner}</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold">{audit.track}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className={cn("text-xs font-bold", audit.color)}>{audit.score}</p>
                  <p className="text-[8px] uppercase tracking-widest font-bold opacity-60">{audit.status}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
