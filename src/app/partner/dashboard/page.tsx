
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, ShieldCheck, BarChart3, Clock, Plus, ArrowUpRight, Search, Bell, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { TrendingUp } from "lucide-react"

export default function PartnerNexusDashboard() {
  const kpis = [
    { label: "Pipeline Revenue", val: "₹4.2 Cr", change: "↑ 18%", icon: Users, color: "text-blue-500" },
    { label: "Active Jobs", val: "182", change: "Stable", icon: ShieldCheck, color: "text-green-500" },
    { label: "Lead Win Rate", val: "24%", change: "↑ 2.1%", icon: BarChart3, color: "text-purple-500" },
    { label: "Pending Claims", val: "08", change: "Action Req", icon: Clock, color: "text-red-500" }
  ]

  const renewalOps = [
    { customer: "Vikram S.", product: "Auto PPF", lapse: "60d", action: "Schedule Inspection" },
    { customer: "Anjali M.", product: "Ceramic Gold", lapse: "30d", action: "Re-coat Consult" },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Command <span className="text-az-blue italic">Center</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Master Installer Lab 042 / Bangalore Hub</p>
         </div>
         <div className="flex gap-4">
            <Button variant="secondary" className="rounded-2xl h-12 gap-2 text-[10px] uppercase font-bold tracking-widest"><Search className="w-4 h-4" /> Search Platform</Button>
            <Button variant="gradient" className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2"><Plus className="w-4 h-4" /> Create Job Card</Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {kpis.map((k) => (
           <Card key={k.label} className="group hover:border-az-blue/50 transition-all bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
              <CardContent className="p-8 space-y-6">
                 <div className="flex items-center justify-between">
                    <div className={cn("p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-az-blue/30 transition-all", k.color)}>
                       <k.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-[10px] border-white/10 uppercase font-bold tracking-widest group-hover:text-az-blue transition-colors px-3 py-1">{k.change}</Badge>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{k.label}</p>
                    <p className="text-4xl font-headline font-bold text-foreground">{k.val}</p>
                 </div>
              </CardContent>
           </Card>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white/5 border-white/10 shadow-2xl">
               <CardHeader className="p-8 flex flex-row items-center justify-between border-b border-white/5">
                  <div className="space-y-1">
                     <CardTitle className="text-sm uppercase tracking-widest">Renewal Opportunity Pipeline</CardTitle>
                     <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Proactive outreach to protect customer lifetime value</p>
                  </div>
                  <Badge variant="outline" className="text-[9px] uppercase border-amber-500/20 text-amber-500 font-bold bg-amber-500/5">Action Required</Badge>
               </CardHeader>
               <CardContent className="p-8 space-y-4">
                  {renewalOps.map((op, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-az-blue/30 transition-all group">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-az-blue/10 flex items-center justify-center text-az-blue">
                             <Bell className="w-5 h-5" />
                          </div>
                          <div className="space-y-0.5">
                             <p className="font-bold text-sm uppercase tracking-tight">{op.customer}</p>
                             <p className="text-[10px] text-muted-foreground font-bold uppercase">{op.product} • Expires in {op.lapse}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-4">
                          <span className="text-[10px] font-bold uppercase text-az-blue group-hover:underline cursor-pointer">{op.action}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronRight className="w-4 h-4" /></Button>
                       </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10 mt-2">View Full Renewal Queue</Button>
               </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
               <CardHeader className="p-8 flex flex-row items-center justify-between border-b border-white/5">
                  <div className="space-y-1">
                     <CardTitle className="text-lg uppercase tracking-widest text-foreground">Lead Velocity Matrix</CardTitle>
                     <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Real-time conversion tracking across regional verticals</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-az-blue hover:text-az-accent"><ArrowUpRight className="w-5 h-5" /></Button>
               </CardHeader>
               <CardContent className="p-12 pt-16">
                  <div className="h-[200px] w-full flex items-end justify-between gap-3">
                     {[65, 45, 90, 55, 80, 70, 95, 60, 85, 75, 50, 90].map((h, i) => (
                       <div key={i} className="flex-1 group relative">
                          <div 
                            className="w-full bg-az-blue/20 hover:bg-az-blue transition-all duration-500 rounded-t-xl cursor-pointer shadow-[0_0_15px_rgba(0,102,255,0.1)] hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]" 
                            style={{ height: `${h}%` }}
                          />
                       </div>
                     ))}
                  </div>
               </CardContent>
            </Card>
         </div>

         <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
               <CardHeader className="p-8 border-b border-white/5">
                  <CardTitle className="text-lg uppercase tracking-widest text-foreground">Operational Tasks</CardTitle>
               </CardHeader>
               <CardContent className="p-8 space-y-6">
                  {[
                    { title: "Renewal: Vikram S.", time: "60d Lapse", status: "Outreach", color: "text-az-warning" },
                    { title: "PPF Edge Seal Audit", time: "2h ago", status: "Critical", color: "text-az-error" },
                    { title: "Academy Module 05", time: "1d ago", status: "Mandatory", color: "text-az-warning" },
                    { title: "Warranty ID Verify", time: "2d ago", status: "Review", color: "text-az-blue" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-az-blue/20 transition-all cursor-pointer group">
                       <div className="space-y-1">
                          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-az-blue transition-colors">{item.title}</h4>
                          <p className="text-[10px] text-muted-foreground uppercase font-bold">{item.time}</p>
                       </div>
                       <Badge variant="outline" className={cn("text-[9px] uppercase tracking-widest border-white/10", item.color)}>{item.status}</Badge>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full h-14 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/10 mt-4">Open Operational Queue</Button>
               </CardContent>
            </Card>
            
            <Card className="bg-az-blue/5 border-az-blue/20 p-8 rounded-[32px] space-y-4">
               <div className="flex items-center gap-3 text-az-blue">
                  <TrendingUp className="w-5 h-5" />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Revenue Forecast</h4>
               </div>
               <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">Your renewal pipeline represents ₹12.5L in potential revenue for the next 60 days.</p>
               <Button className="w-full h-12 text-[10px] font-bold uppercase tracking-widest rounded-2xl bg-az-blue shadow-lg shadow-blue-500/30">Analyze Pipeline</Button>
            </Card>
         </div>
      </div>
    </div>
  )
}
