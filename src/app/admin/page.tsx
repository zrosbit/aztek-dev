"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  ArrowUpRight, 
  TrendingUp,
  AlertCircle,
  Network,
  MapPin,
  ArrowRight,
  MoreVertical,
  GraduationCap,
  Boxes,
  Smartphone
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts"
import Link from "next/link"

export default function AdminOverviewPage() {
  const stats = [
    { label: "Total Leads", val: "425", sub: "+12% this week", icon: Users, color: "text-blue-500" },
    { label: "Active Partners", val: "43", sub: "27 Certified / 12 Gold", icon: Network, color: "text-green-500" },
    { label: "Warranties Issued", val: "1,240", sub: "100% Digital", icon: ShieldCheck, color: "text-purple-500" },
    { label: "Inventory Value", val: "₹1.42 Cr", sub: "Global Network", icon: Boxes, color: "text-amber-500" }
  ]

  const revenueData = [
    { month: "Jan", rev: 8500000 },
    { month: "Feb", rev: 9200000 },
    { month: "Mar", rev: 11000000 },
    { month: "Apr", rev: 10500000 },
    { month: "May", rev: 12400000 },
    { month: "Jun", rev: 14200000 },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Network <span className="text-primary italic">Intelligence</span></h1>
          <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.3em]">Global AZTEK Ecosystem Command — Session Active</p>
        </div>
        <div className="flex gap-4">
          <Button asChild variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
            <Link href="/installer"><Smartphone className="w-4 h-4 text-primary" /> Field Operations</Link>
          </Button>
          <Button variant="gradient" className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2">
            Live Feed Active
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all group shadow-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className={cn("p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", s.color)}>
                  <s.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[8px] border-white/10 uppercase font-bold tracking-widest text-primary bg-primary/5 px-2 py-0.5">Live Sync</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                <p className="text-3xl font-headline font-bold text-foreground">{s.val}</p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase">{s.sub}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl overflow-hidden">
          <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
            <div className="space-y-1">
               <CardTitle className="text-sm uppercase tracking-widest">Revenue Velocity Matrix</CardTitle>
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Cumulative network revenue tracking (6 Months)</p>
            </div>
            <div className="flex gap-2">
               <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] uppercase tracking-widest">Invoiced</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-12">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0066FF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-black border border-white/10 p-3 rounded-xl shadow-2xl">
                            <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">{payload[0].payload.month}</p>
                            <p className="text-sm font-bold text-primary">₹{(Number(payload[0].value) / 10000000).toFixed(2)} Cr</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area type="monotone" dataKey="rev" stroke="#0066FF" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 shadow-2xl">
          <CardHeader className="p-8 border-b border-white/5">
            <CardTitle className="text-sm uppercase tracking-widest">Critical Alert Feed</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {[
              { msg: "Pending Warranty Claim: AZ-CLM-042", type: "Urgent", icon: AlertCircle, color: "text-red-500" },
              { msg: "Low Stock: AZ-PPF-ULTRA-15", type: "Inventory", icon: Boxes, color: "text-amber-500" },
              { msg: "New Partner Application: Mumbai Lab", type: "UPOS", icon: Clock, color: "text-purple-500" },
              { msg: "Certification Ready: Elite Bangalore", type: "Academy", icon: GraduationCap, color: "text-blue-500" },
            ].map((alert, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all cursor-pointer group">
                <alert.icon className={cn("w-5 h-5 shrink-0", alert.color)} />
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{alert.msg}</p>
                  <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-muted-foreground">{alert.type} • 2h ago</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full h-12 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/5 gap-2 mt-4">
               Access Operational Ledger <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
