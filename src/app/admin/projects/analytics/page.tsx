"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Target, 
  Zap, 
  Download,
  CheckCircle2,
  Activity,
  Layers,
  ShieldCheck,
  Smartphone
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, AreaChart, Area, PieChart, Pie } from "recharts"

export default function ProjectAnalyticsPage() {
  const regionalPerformance = [
    { hub: "South Hub", val: 94, sla: "98%" },
    { hub: "West Hub", val: 88, sla: "92%" },
    { hub: "North Hub", val: 76, sla: "89%" },
    { hub: "East Hub", val: 82, sla: "94%" },
  ]

  const mixData = [
    { name: "Automotive PPF", value: 55, color: "#0066FF" },
    { name: "Ceramic Armor", value: 25, color: "#22C55E" },
    { name: "Moto Shield", value: 15, color: "#F59E0B" },
    { name: "Architectural", value: 5, color: "#8B5CF6" },
  ]

  return (
    <div className="space-y-8 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl p-8">
           <CardHeader className="px-0 pt-0 pb-10 border-b border-white/5 flex flex-row items-center justify-between">
              <div className="space-y-1">
                 <CardTitle className="text-sm uppercase tracking-widest">Regional Completion Benchmarks</CardTitle>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase">Average quality score by regional distribution node</p>
              </div>
              <Button variant="outline" size="sm" className="h-8 text-[9px] uppercase font-bold border-white/10 bg-white/5"><Download className="w-3.5 h-3.5 mr-2" /> Export BI</Button>
           </CardHeader>
           <div className="h-[350px] w-full pt-10">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={regionalPerformance} barGap={12}>
                    <XAxis dataKey="hub" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                    <Bar dataKey="val" fill="#0066FF" radius={[6, 6, 0, 0]} />
                 </BarChart>
              </ResponsiveContainer>
           </div>
        </Card>

        <Card className="bg-white/5 border-white/10 shadow-2xl flex flex-col items-center justify-center p-8">
           <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-12">Discipline Distribution</h4>
           <div className="h-[220px] w-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                    <Pie data={mixData} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={4}>
                       {mixData.map((entry, index) => (
                         <Cell key={index} fill={entry.color} />
                       ))}
                    </Pie>
                 </PieChart>
              </ResponsiveContainer>
           </div>
           <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-12 w-full">
              {mixData.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                   <div className="space-y-0.5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.name}</p>
                      <p className="text-sm font-bold text-foreground">{item.value}%</p>
                   </div>
                </div>
              ))}
           </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card className="bg-white/5 border-white/10 p-8 space-y-6">
            <div className="flex items-center gap-3 text-primary">
               <Clock className="w-5 h-5" />
               <h4 className="text-[10px] font-bold uppercase tracking-widest">Avg completion cycle</h4>
            </div>
            <p className="text-4xl font-headline font-bold text-foreground">5.4 <span className="text-xs text-muted-foreground uppercase font-bold">Hours</span></p>
            <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">↓ 0.8h Efficiency Gain</p>
         </Card>

         <Card className="bg-white/5 border-white/10 p-8 space-y-6">
            <div className="flex items-center gap-3 text-amber-500">
               <Activity className="w-5 h-5" />
               <h4 className="text-[10px] font-bold uppercase tracking-widest">Network Rework Rate</h4>
            </div>
            <p className="text-4xl font-headline font-bold text-foreground">1.14%</p>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Within 2.0% Tolerance</p>
         </Card>

         <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[40px] flex flex-col justify-center relative overflow-hidden group">
            <div className="space-y-2 relative z-10">
               <h4 className="text-xl font-headline font-bold uppercase tracking-tight text-foreground">Quality Prediction</h4>
               <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">Projecting a 4.2% quality score increase for South Hub based on recent Master Training.</p>
            </div>
            <Button variant="outline" className="w-fit h-10 rounded-xl border-primary/20 bg-primary/10 text-[9px] uppercase font-bold tracking-widest mt-6 relative z-10">Launch Predictive BI</Button>
            <Zap className="absolute -bottom-10 -right-10 w-48 h-48 text-primary opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
         </Card>
      </div>
    </div>
  )
}
