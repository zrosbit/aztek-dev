"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Gavel, 
  ShieldCheck, 
  Trophy, 
  TrendingUp, 
  Settings,
  MoreVertical,
  CheckCircle2,
  AlertTriangle,
  Star,
  Users
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function PartnerGovernancePage() {
  const tiers = [
    { name: "Silver", color: "text-slate-400", req: "Standard Onboarding", active: 27, benefits: ["Basic Routing", "Std Margin"] },
    { name: "Gold", color: "text-amber-500", req: "90+ Score + Cert", active: 12, benefits: ["Priority Routing", "Bonus Margin"] },
    { name: "Platinum", color: "text-blue-500", req: "Audit Pass + Revenue", active: 4, benefits: ["Exclusive Leads", "Elite Margin"] },
  ]

  const leaderboard = [
    { name: "Elite Wraps Bangalore", score: 98.4, rank: 1, trend: "up" },
    { name: "Mumbai Detailing Hub", score: 96.2, rank: 2, trend: "stable" },
    { name: "Delhi Arch Shield", score: 94.5, rank: 3, trend: "down" },
  ]

  return (
    <div className="space-y-8 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <Card key={tier.name} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-2xl relative overflow-hidden group">
            <CardHeader className="p-8 border-b border-white/5 bg-white/[0.01]">
               <div className="flex items-center justify-between">
                  <CardTitle className={cn("text-2xl font-headline font-bold uppercase", tier.color)}>{tier.name}</CardTitle>
                  <Badge variant="outline" className="text-[10px] font-bold border-white/10 uppercase tracking-widest">{tier.active} Active</Badge>
               </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
               <div className="space-y-1">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Entry Protocol</p>
                  <p className="text-xs font-bold text-foreground uppercase">{tier.req}</p>
               </div>
               <div className="space-y-3 pt-4 border-t border-white/5">
                  {tier.benefits.map(b => (
                    <div key={b} className="flex items-center gap-2 text-[10px] font-bold text-foreground/80 uppercase">
                       <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {b}
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl">
           <CardHeader className="p-8 border-b border-white/5">
              <CardTitle className="text-sm uppercase tracking-widest">Performance Leaderboard</CardTitle>
           </CardHeader>
           <CardContent className="p-0">
              <div className="divide-y divide-white/5">
                 {leaderboard.map((item) => (
                   <div key={item.name} className="flex items-center justify-between p-6 hover:bg-white/[0.02] transition-colors group">
                      <div className="flex items-center gap-6">
                         <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold shadow-inner">
                            {item.rank}
                         </div>
                         <h4 className="text-sm font-bold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                      </div>
                      <div className="flex items-center gap-12">
                         <div className="text-right space-y-0.5">
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">Composite Score</p>
                            <p className="text-xl font-headline font-bold text-foreground">{item.score}%</p>
                         </div>
                         <Button size="icon" variant="ghost" className="text-muted-foreground"><MoreVertical className="w-4 h-4" /></Button>
                      </div>
                   </div>
                 ))}
              </div>
           </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 p-8 rounded-[32px] space-y-6">
           <div className="flex items-center gap-4 text-primary">
              <ShieldCheck className="w-8 h-8" />
              <h4 className="text-lg font-headline font-bold uppercase text-foreground">Scoring Matrix</h4>
           </div>
           <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
              Scores are recalibrated every 24 hours based on real-time data from Connect projects, claim rates, and Academy completion.
           </p>
           <div className="space-y-4 pt-4">
              {[
                { l: "Job Integrity", v: 40 },
                { l: "Revenue Flow", v: 30 },
                { l: "Claim SLA", v: 20 },
                { l: "Academy Rank", v: 10 },
              ].map(m => (
                <div key={m.l} className="space-y-1.5">
                   <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest">
                      <span>{m.l}</span>
                      <span className="text-primary">{m.v}% Weight</span>
                   </div>
                   <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${m.v}%` }} />
                   </div>
                </div>
              ))}
           </div>
        </Card>
      </div>
    </div>
  )
}
