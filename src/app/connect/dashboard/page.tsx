"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { 
  Users, 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  Plus, 
  ArrowUpRight, 
  TrendingUp,
  ChevronRight,
  Package,
  Smartphone
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell, Pie, PieChart } from "recharts"

export default function PartnerConnectDashboard() {
  const kpis = [
    { label: "Revenue", val: "₹2,40,000", change: "+12%", icon: TrendingUp, color: "text-green-500", period: "Current Month" },
    { label: "Jobs Completed", val: "18", change: "Stable", icon: Package, color: "text-blue-500", period: "Current Month" },
    { label: "Leads Open", val: "07", change: "Action Req", icon: Users, color: "text-amber-500", period: "Live" },
    { label: "Warranties Issued", val: "43", change: "+8", icon: ShieldCheck, color: "text-purple-500", period: "All Time" }
  ]

  const revenueData = [
    { month: "Jan", val: 120000 },
    { month: "Feb", val: 180000 },
    { month: "Mar", val: 150000 },
    { month: "Apr", val: 210000 },
    { month: "May", val: 190000 },
    { month: "Jun", val: 240000, current: true },
  ]

  const productMix = [
    { name: "PPF", value: 45, color: "#0066FF" },
    { name: "Ceramic", value: 25, color: "#00D4FF" },
    { name: "Window", value: 15, color: "#22C55E" },
    { name: "Moto", value: 10, color: "#F59E0B" },
    { name: "Arch", value: 5, color: "#EF4444" },
  ]

  const recentLeads = [
    { name: "John Wick", project: "Moto PPF Full Kit", status: "New", date: "2h ago" },
    { name: "Sarah Connor", project: "Architectural Heat Reject", status: "Quote Sent", date: "1d ago" },
    { name: "Bruce Wayne", project: "Full Stealth PPF", status: "Won", date: "2d ago" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Command <span className="text-az-blue italic">Center</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Master Installer Lab 042 / Bangalore Hub</p>
         </div>
         <div className="flex gap-4">
            <Button asChild variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2">
              <Link href="/installer"><Smartphone className="w-4 h-4 text-primary" /> Field Terminal</Link>
            </Button>
            <Button variant="gradient" className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2">
              <Plus className="w-4 h-4" /> Create Job Card
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {kpis.map((k) => (
           <Card key={k.label} className="group hover:border-az-blue/50 transition-all bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
              <CardContent className="p-6 space-y-4">
                 <div className="flex items-center justify-between">
                    <div className={cn("p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-az-blue/30 transition-all", k.color)}>
                       <k.icon className="w-5 h-5" />
                    </div>
                    <Badge variant="outline" className="text-[9px] border-white/10 uppercase font-bold tracking-widest group-hover:text-az-blue transition-colors px-2 py-0.5">{k.change}</Badge>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{k.label}</p>
                    <p className="text-2xl font-headline font-bold text-foreground">{k.val}</p>
                    <p className="text-[9px] text-muted-foreground uppercase font-bold">{k.period}</p>
                 </div>
              </CardContent>
           </Card>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white/5 border-white/10 shadow-2xl overflow-hidden">
               <CardHeader className="p-6 border-b border-white/5">
                  <CardTitle className="text-sm uppercase tracking-widest">Revenue Velocity (6 Mo)</CardTitle>
               </CardHeader>
               <CardContent className="p-8 pt-12">
                  <div className="h-[240px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={revenueData}>
                        <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                        <Tooltip 
                          cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-az-midnight border border-white/10 p-2 rounded-lg shadow-xl">
                                  <p className="text-[10px] text-muted-foreground uppercase font-bold">{payload[0].payload.month}</p>
                                  <p className="text-sm font-bold text-az-blue">₹{payload[0].value?.toLocaleString()}</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar dataKey="val" radius={[6, 6, 0, 0]}>
                          {revenueData.map((entry, index) => (
                            <Cell key={index} fill={entry.current ? "#0066FF" : "rgba(0,102,255,0.2)"} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
               </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 shadow-2xl">
                <CardHeader className="p-6 border-b border-white/5">
                   <CardTitle className="text-sm uppercase tracking-widest">Product Revenue Mix</CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="h-[140px] w-[140px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={productMix} dataKey="value" innerRadius={40} outerRadius={60} paddingAngle={4}>
                          {productMix.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2">
                    {productMix.map((item) => (
                      <div key={item.name} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground w-12">{item.name}</span>
                        <span className="text-[10px] font-bold text-foreground">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 shadow-2xl">
                <CardHeader className="p-6 border-b border-white/5">
                   <CardTitle className="text-sm uppercase tracking-widest">Academy Progress</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Certified Tracks</p>
                      <p className="text-xl font-headline font-bold">3 of 5</p>
                    </div>
                    <Badge className="bg-az-blue/10 text-az-blue border-az-blue/20 text-[10px] uppercase tracking-widest">Gold Status</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest">
                       <span className="text-muted-foreground">Next: Connect Ops</span>
                       <span className="text-az-blue">85%</span>
                    </div>
                    <Progress value={85} className="h-1.5" />
                  </div>
                  <Button variant="outline" className="w-full h-10 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/5">
                    Resume Academy Module
                  </Button>
                </CardContent>
              </Card>
            </div>
         </div>

         <div className="space-y-8">
            <Card className="bg-white/5 border-white/10 shadow-2xl">
               <CardHeader className="p-6 border-b border-white/5 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm uppercase tracking-widest">Lead Feed</CardTitle>
                  <Button variant="ghost" size="sm" asChild className="text-[10px] uppercase font-bold text-az-blue">
                    <Link href="/connect/leads">View All <ChevronRight className="w-3 h-3 ml-1" /></Link>
                  </Button>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-white/5">
                    {recentLeads.map((lead, i) => (
                      <div key={i} className="p-4 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                           <span className="font-bold text-sm group-hover:text-az-blue transition-colors">{lead.name}</span>
                           <Badge variant="outline" className={cn(
                             "text-[8px] uppercase font-bold",
                             lead.status === "Won" ? "border-green-500/50 text-green-500" :
                             lead.status === "Quote Sent" ? "border-az-blue/50 text-az-blue" :
                             "border-amber-500/50 text-amber-500"
                           )}>
                             {lead.status}
                           </Badge>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-muted-foreground uppercase font-bold">
                           <span>{lead.project}</span>
                           <span>{lead.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
               </CardContent>
            </Card>

            <Card className="bg-az-blue/5 border-az-blue/20 p-6 space-y-4">
               <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-az-blue" />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Daily Ops Tasks</h4>
               </div>
               <div className="space-y-3">
                  {[
                    "Seal edges on Job #421",
                    "Sign-off Academy Assessment",
                    "Verify Batch #992-PPF"
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 text-[10px] font-medium">
                       <div className="w-1.5 h-1.5 rounded-full bg-az-blue" />
                       {task}
                    </div>
                  ))}
               </div>
            </Card>
         </div>
      </div>
    </div>
  )
}
