"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  MapPin, 
  Activity, 
  Award, 
  AlertTriangle,
  Globe,
  Briefcase
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, PieChart, Pie } from "recharts"

export default function PartnerDashboardPage() {
  const kpis = [
    { label: "Total Partners", val: "43", sub: "Active Labs", icon: Globe, color: "text-blue-500" },
    { label: "Master Tier", val: "04", sub: "Certified Trainers", icon: Award, color: "text-purple-500" },
    { label: "Active Jobs", val: "142", sub: "Network-Wide", icon: Briefcase, color: "text-green-500" },
    { label: "Alerts", val: "03", sub: "Governance Flags", icon: AlertTriangle, color: "text-amber-500" }
  ]

  const tierData = [
    { name: "Certified", value: 27, color: "#2563EB" },
    { name: "Gold", value: 12, color: "#F59E0B" },
    { name: "Master", value: 4, color: "#8B5CF6" },
  ]

  const regionalGrowth = [
    { region: "South", val: 18 },
    { region: "West", val: 12 },
    { region: "North", val: 24 },
    { region: "East", val: 4 },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <Card key={k.label} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all group shadow-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", k.color)}>
                  <k.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[8px] border-white/10 uppercase font-bold tracking-widest">Live Sync</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{k.label}</p>
                <p className="text-3xl font-headline font-bold text-foreground">{k.val}</p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase">{k.sub}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl">
          <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
             <div className="space-y-1">
                <CardTitle className="text-sm uppercase tracking-widest">Network Growth Strategy</CardTitle>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Regional partner acquisition velocity</p>
             </div>
          </CardHeader>
          <CardContent className="p-8 pt-12">
            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionalGrowth}>
                     <XAxis dataKey="region" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                     <YAxis hide />
                     <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                     <Bar dataKey="val" fill="#2563EB" radius={[6, 6, 0, 0]} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 shadow-2xl">
          <CardHeader className="p-8 border-b border-white/5">
             <CardTitle className="text-sm uppercase tracking-widest">Tier Distribution</CardTitle>
          </CardHeader>
          <CardContent className="p-8 flex items-center justify-between">
            <div className="h-[180px] w-[180px]">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie data={tierData} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={4}>
                        {tierData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                     </Pie>
                  </PieChart>
               </ResponsiveContainer>
            </div>
            <div className="space-y-4">
               {tierData.map((item) => (
                 <div key={item.name} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <div className="space-y-0.5">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.name}</p>
                       <p className="text-sm font-bold text-foreground">{item.value}</p>
                    </div>
                 </div>
               ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
