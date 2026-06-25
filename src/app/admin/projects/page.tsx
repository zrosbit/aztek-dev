"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Activity,
  ArrowUpRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar } from "recharts"

export default function ProjectDashboardPage() {
  const stats = [
    { label: "Active Jobs", val: "142", sub: "Currently In-Field", icon: Clock, color: "text-blue-500" },
    { label: "Completed MTD", val: "428", sub: "Oct 2026 Registry", icon: CheckCircle2, color: "text-green-500" },
    { label: "Avg Quality Score", val: "98.2%", sub: "Network Baseline", icon: ShieldCheck, color: "text-primary" },
    { label: "Rework Alerts", val: "03", sub: "Action Required", icon: AlertTriangle, color: "text-red-500" }
  ]

  const velocityData = [
    { name: "Mon", val: 12 },
    { name: "Tue", val: 18 },
    { name: "Wed", val: 15 },
    { name: "Thu", val: 22 },
    { name: "Fri", val: 30 },
    { name: "Sat", val: 25 },
    { name: "Sun", val: 10 },
  ]

  return (
    <div className="space-y-8 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all group shadow-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className={cn("p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", s.color)}>
                  <s.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[8px] border-white/10 uppercase font-bold tracking-widest text-primary bg-primary/5 px-2 py-0.5">Live Feed</Badge>
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
               <CardTitle className="text-sm uppercase tracking-widest">Installation Velocity</CardTitle>
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Daily project completions across national nodes</p>
            </div>
            <Activity className="w-5 h-5 text-primary opacity-20" />
          </CardHeader>
          <CardContent className="p-8 pt-12">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={velocityData}>
                  <defs>
                    <linearGradient id="colorProj" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0066FF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="val" stroke="#0066FF" strokeWidth={3} fillOpacity={1} fill="url(#colorProj)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 shadow-2xl">
          <CardHeader className="p-8 border-b border-white/5">
            <CardTitle className="text-sm uppercase tracking-widest">Critical Quality Feed</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {[
              { msg: "Edge Lift Detected: AZ-JOB-0421", type: "Rework Risk", icon: AlertTriangle, color: "text-red-500" },
              { msg: "QC Pending: Skyline Mumbai", type: "Workflow", icon: Clock, color: "text-amber-500" },
              { msg: "Material Mismatch: Moto-Pune", type: "Inventory", icon: ShieldCheck, color: "text-blue-500" },
            ].map((alert, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/10 transition-all cursor-pointer group">
                <alert.icon className={cn("w-5 h-5 shrink-0", alert.color)} />
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{alert.msg}</p>
                  <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-muted-foreground">{alert.type} • Active</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
