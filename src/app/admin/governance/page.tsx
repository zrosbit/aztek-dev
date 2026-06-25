"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Gavel, 
  ShieldCheck, 
  Trophy, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  UserCheck, 
  Settings,
  MoreVertical,
  ChevronRight,
  Star,
  Zap,
  Info,
  History,
  Activity,
  ArrowUpRight,
  ShieldAlert
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"

export default function AdminGovernancePage() {
  const [activeTab, setActiveTab] = useState("scorecards")

  const partnerScorecards = [
    { 
      id: "p1", 
      name: "Elite Wraps Bangalore", 
      tier: "ELITE", 
      score: 94.2, 
      metrics: [
        { subject: "Revenue", A: 98, fullMark: 100 },
        { subject: "Satisfaction", A: 95, fullMark: 100 },
        { subject: "Claim Rate", A: 92, fullMark: 100 },
        { subject: "Certification", A: 100, fullMark: 100 },
        { subject: "Conversion", A: 88, fullMark: 100 },
      ]
    },
    { 
      id: "p2", 
      name: "Mumbai Detailing Hub", 
      tier: "PLATINUM", 
      score: 86.5, 
      metrics: [
        { subject: "Revenue", A: 85, fullMark: 100 },
        { subject: "Satisfaction", A: 88, fullMark: 100 },
        { subject: "Claim Rate", A: 75, fullMark: 100 },
        { subject: "Certification", A: 90, fullMark: 100 },
        { subject: "Conversion", A: 82, fullMark: 100 },
      ]
    },
    { 
      id: "p3", 
      name: "Pune Moto Pro", 
      tier: "GOLD", 
      score: 72.8, 
      metrics: [
        { subject: "Revenue", A: 65, fullMark: 100 },
        { subject: "Satisfaction", A: 82, fullMark: 100 },
        { subject: "Claim Rate", A: 68, fullMark: 100 },
        { subject: "Certification", A: 80, fullMark: 100 },
        { subject: "Conversion", A: 70, fullMark: 100 },
      ]
    },
  ]

  const installerMetrics = [
    { name: "Siddharth M.", partner: "Elite Wraps", rework: "0.8%", quality: 4.9, cert: "MASTER" },
    { name: "Karthik R.", partner: "Moto Pro", rework: "4.2%", quality: 4.2, cert: "CERTIFIED" },
    { name: "Amit D.", partner: "Skyline Arch", rework: "1.4%", quality: 4.6, cert: "GOLD" },
    { name: "Nadeem S.", partner: "Elite Wraps", rework: "2.1%", quality: 4.7, cert: "GOLD" },
  ]

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Ecosystem <span className="text-primary italic">Governance</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Network-Wide Scorecards, Tiers & Quality Standards</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
            <Settings className="w-4 h-4" /> Scoring Weights
          </Button>
          <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl">
            <Gavel className="w-4 h-4" /> Run Network Audit
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto overflow-x-auto scrollbar-hide">
          <TabsTrigger value="scorecards" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Partner Scorecards</TabsTrigger>
          <TabsTrigger value="installers" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Installer Metrics</TabsTrigger>
          <TabsTrigger value="tiers" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Commercial Tiers</TabsTrigger>
        </TabsList>

        <TabsContent value="scorecards" className="space-y-8 animate-in fade-in duration-500">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partnerScorecards.map((p) => (
                <Card key={p.id} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all shadow-2xl overflow-hidden group">
                  <CardHeader className="p-8 border-b border-white/5 bg-white/[0.02] flex flex-row items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                         <CardTitle className="text-xl uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors">{p.name}</CardTitle>
                         <Badge variant="outline" className={cn(
                           "text-[9px] font-bold uppercase tracking-widest border-white/10",
                           p.tier === "ELITE" ? "text-purple-500 bg-purple-500/5" :
                           p.tier === "PLATINUM" ? "text-blue-500 bg-blue-500/5" : "text-amber-500 bg-amber-500/5"
                         )}>{p.tier} TIER</Badge>
                      </div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Composite Quality Score</p>
                    </div>
                    <div className="text-right">
                       <p className="text-3xl font-headline font-bold text-primary">{p.score}</p>
                       <p className="text-[8px] font-bold uppercase text-muted-foreground">Normalised Index</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                       <div className="h-[240px] p-4 flex items-center justify-center border-r border-white/5">
                          <ResponsiveContainer width="100%" height="100%">
                             <RadarChart cx="50%" cy="50%" outerRadius="80%" data={p.metrics}>
                                <PolarGrid stroke="rgba(255,255,255,0.05)" />
                                <PolarAngleAxis dataKey="subject" stroke="#64748b" fontSize={8} />
                                <Radar
                                   name={p.name}
                                   dataKey="A"
                                   stroke="#0066FF"
                                   fill="#0066FF"
                                   fillOpacity={0.2}
                                />
                             </RadarChart>
                          </ResponsiveContainer>
                       </div>
                       <div className="p-8 space-y-6 flex flex-col justify-center">
                          <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary border-b border-white/5 pb-2">Operational Strengths</h5>
                          <div className="space-y-4">
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                                   <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5">
                                   <p className="text-[10px] font-bold uppercase text-foreground">High Adhesion Quality</p>
                                   <p className="text-[8px] text-muted-foreground uppercase">Claim rate 42% below average</p>
                                </div>
                             </div>
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                   <TrendingUp className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5">
                                   <p className="text-[10px] font-bold uppercase text-foreground">Revenue Velocity</p>
                                   <p className="text-[8px] text-muted-foreground uppercase">Stable growth in Q2</p>
                                </div>
                             </div>
                          </div>
                          <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10 group-hover:bg-white/5">
                             Full Governance Dossier <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
                          </Button>
                       </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
           </div>
        </TabsContent>

        <TabsContent value="installers" className="animate-in fade-in duration-500">
           <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
              <table className="w-full text-left">
                 <thead className="bg-white/5 border-b border-white/5">
                    <tr>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Installer Name</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Certified Studio</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Quality Score</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Rework %</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
                       <th className="p-6"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {installerMetrics.map((inst, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                         <td className="p-6">
                            <div className="flex items-center gap-4">
                               <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shadow-inner">
                                  {inst.name.split(' ').map(n => n[0]).join('')}
                               </div>
                               <div className="space-y-1">
                                  <p className="font-bold text-sm text-foreground uppercase tracking-tight">{inst.name}</p>
                                  <Badge variant="outline" className="text-[8px] font-bold uppercase border-white/10 px-2">{inst.cert}</Badge>
                               </div>
                            </div>
                         </td>
                         <td className="p-6 text-sm font-medium uppercase tracking-tight text-muted-foreground">{inst.partner}</td>
                         <td className="p-6 text-center">
                            <div className="flex items-center justify-center gap-2">
                               <span className="text-sm font-bold text-foreground">{inst.quality} / 5.0</span>
                               <Star className={cn("w-3.5 h-3.5 fill-current", inst.quality >= 4.5 ? "text-amber-500" : "text-muted-foreground")} />
                            </div>
                         </td>
                         <td className="p-6 text-right">
                            <span className={cn("text-[10px] font-bold", parseFloat(inst.rework) > 3 ? "text-red-500" : "text-green-500")}>{inst.rework}</span>
                         </td>
                         <td className="p-6 text-center">
                            <Badge className={cn(
                               "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                               parseFloat(inst.rework) > 3 ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"
                            )}>
                               {parseFloat(inst.rework) > 3 ? "Review Required" : "Certified Active"}
                            </Badge>
                         </td>
                         <td className="p-6 text-right">
                            <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><MoreVertical className="w-4 h-4" /></Button>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </TabsContent>

        <TabsContent value="tiers" className="animate-in fade-in duration-500">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { name: "Silver", color: "text-slate-400", bg: "bg-slate-500/5", border: "border-slate-500/20", req: "Baseline Certification", benefits: ["Std Routing", "Base Margin"] },
                { name: "Gold", color: "text-amber-500", bg: "bg-amber-500/5", border: "border-amber-500/20", req: "Score > 70 + Rev Threshold", benefits: ["Priority Routing", "Enhanced Margin"] },
                { name: "Platinum", color: "text-blue-500", bg: "bg-blue-500/5", border: "border-blue-500/20", req: "Score > 85 + Claim Rate < Avg", benefits: ["Top Routing", "Premium Margin", "Marketing Fund"] },
                { name: "Elite", color: "text-purple-500", bg: "bg-purple-500/5", border: "border-purple-500/20", req: "Score > 90 + Master Trainer", benefits: ["New Product Access", "Revenue Share", "Advisory Board"] },
              ].map((tier) => (
                <Card key={tier.name} className={cn("border bg-white/5 flex flex-col justify-between overflow-hidden relative group transition-all", tier.bg, tier.border)}>
                  <div className={cn("absolute top-0 left-0 w-full h-1", tier.color.replace('text', 'bg'))} />
                  <CardHeader className="p-8">
                     <CardTitle className={cn("text-2xl font-headline font-bold uppercase tracking-tight", tier.color)}>{tier.name}</CardTitle>
                     <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">Entry Criteria</p>
                     <p className="text-xs font-medium text-foreground uppercase mt-1 leading-tight">{tier.req}</p>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                     <div className="space-y-4 pt-6 border-t border-white/5">
                        {tier.benefits.map(b => (
                          <div key={b} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-foreground/80">
                             <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {b}
                          </div>
                        ))}
                     </div>
                  </CardContent>
                </Card>
              ))}
           </div>

           <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[32px] space-y-4 mt-8">
              <div className="flex items-center gap-4 text-primary">
                 <Info className="w-6 h-6" />
                 <h4 className="text-lg font-headline font-bold uppercase tracking-tight text-foreground">Governance Protocol V2.1</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
                 Commercial tiers are recalibrated on the 1st of every month based on a rolling 12-month performance window. Academy tiers (Certified/Gold/Master) represent technical competency, while Governance tiers represent ongoing commercial health and quality adherence.
              </p>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
