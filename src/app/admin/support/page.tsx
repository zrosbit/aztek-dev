
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  LifeBuoy, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  Search, 
  Filter, 
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  ChevronRight,
  Loader2,
  Zap,
  PieChart as PieIcon
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts"

export default function AdminSupportCenter() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isProcessing, setIsProcessing] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { label: "Open Tickets", val: "42", sub: "12 Critical", icon: MessageSquare, color: "text-blue-500" },
    { label: "Avg Resolution", val: "4.2h", sub: "-18% vs Last Wk", icon: Clock, color: "text-green-500" },
    { label: "SLA Compliance", val: "98.4%", sub: "Network Target", icon: ShieldCheck, color: "text-purple-500" },
    { label: "Active Escalations", val: "05", sub: "Review Required", icon: AlertCircle, color: "text-red-500" }
  ]

  const tickets = [
    { id: "TKT-9942", entity: "Elite Wraps BLR", category: "Partner Support", subject: "Material Batch Mismatch", priority: "HIGH", status: "OPEN", age: "2h" },
    { id: "TKT-9938", entity: "Rahul Mehta (Client)", category: "Complaint", subject: "Edge Lifting - Front Bumper", priority: "CRITICAL", status: "ESCALATED", age: "5h" },
    { id: "TKT-9932", entity: "Mumbai Hub", category: "Customer Support", subject: "Warranty Sync Failure", priority: "MEDIUM", status: "PENDING", age: "1d" },
  ]

  const volumeData = [
    { day: "Mon", tickets: 12 },
    { day: "Tue", tickets: 18 },
    { day: "Wed", tickets: 15 },
    { day: "Thu", tickets: 22 },
    { day: "Fri", tickets: 30 },
    { day: "Sat", tickets: 10 },
    { day: "Sun", tickets: 8 },
  ]

  const categoryMix = [
    { name: "Partner Support", value: 45, color: "#2563EB" },
    { name: "Complaints", value: 25, color: "#EF4444" },
    { name: "Customer Support", value: 30, color: "#10B981" },
  ]

  const handleAction = (id: string, action: string) => {
    setIsProcessing(id)
    setTimeout(() => {
      setIsProcessing(null)
      toast({ title: "Protocol Executed", description: `${action} complete for ${id}. Notification sent.` })
    }, 1500)
  }

  if (!mounted) return null

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Support <span className="text-primary italic">Command</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-tight">Global Issue Governance, SLA Management & Resolution Analytics</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
             <BarChart3 className="w-4 h-4" /> Global Support BI
          </Button>
          <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl">
             <LifeBuoy className="w-4 h-4" /> Create Admin Ticket
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all group p-6 space-y-4 shadow-xl">
             <div className="flex items-center justify-between">
                <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", s.color)}>
                   <s.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[8px] border-white/10 uppercase font-bold tracking-widest">Live Feed</Badge>
             </div>
             <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                <p className="text-3xl font-headline font-bold text-foreground">{s.val}</p>
                <p className="text-[9px] text-muted-foreground uppercase font-bold">{s.sub}</p>
             </div>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full justify-start overflow-x-auto scrollbar-hide">
          <TabsTrigger value="dashboard" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Dashboard</TabsTrigger>
          <TabsTrigger value="tickets" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Active Tickets</TabsTrigger>
          <TabsTrigger value="escalations" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Escalations</TabsTrigger>
          <TabsTrigger value="analytics" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Resolution BI</TabsTrigger>
          <TabsTrigger value="settings" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Protocol Setup</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-8 animate-in fade-in duration-500">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl p-8">
                 <CardHeader className="px-0 pt-0 pb-10 border-b border-white/5 flex flex-row items-center justify-between">
                    <div className="space-y-1">
                       <CardTitle className="text-sm uppercase tracking-widest">Inbound Ticket Velocity</CardTitle>
                       <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Daily support request volume (Trailing 7 Days)</p>
                    </div>
                    <TrendingUp className="w-5 h-5 text-primary opacity-20" />
                 </CardHeader>
                 <div className="h-[300px] w-full pt-10">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={volumeData}>
                          <defs>
                             <linearGradient id="colorTkt" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <XAxis dataKey="day" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                          <YAxis hide />
                          <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                          <Area type="monotone" dataKey="tickets" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorTkt)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </Card>

              <Card className="bg-white/5 border-white/10 shadow-2xl p-8 flex flex-col items-center justify-center">
                 <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-12">Support Category Mix</h4>
                 <div className="h-[220px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                          <Pie data={categoryMix} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={4}>
                             {categoryMix.map((entry, index) => (
                               <Cell key={index} fill={entry.color} />
                             ))}
                          </Pie>
                       </PieChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="grid grid-cols-1 gap-4 mt-8 w-full">
                    {categoryMix.map((item) => (
                      <div key={item.name} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                         <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.name}</span>
                         </div>
                         <span className="text-xs font-bold text-foreground">{item.value}%</span>
                      </div>
                    ))}
                 </div>
              </Card>
           </div>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-6 animate-in fade-in duration-500">
           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                 <Input placeholder="Search tickets by ID, Subject, Entity or Technician..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
              </div>
              <div className="flex gap-2">
                 <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/5 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
                    <Filter className="w-4 h-4" /> All Categories
                 </Button>
              </div>
           </div>

           <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
              <table className="w-full text-left">
                 <thead className="bg-white/5 border-b border-white/5">
                    <tr>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Ticket ID & Entity</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Classification</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Subject Matter</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Priority</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status / Age</th>
                       <th className="p-6"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {tickets.map((t) => (
                      <tr key={t.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                         <td className="p-6">
                            <div className="space-y-1">
                               <p className="font-mono text-xs font-bold text-primary uppercase">{t.id}</p>
                               <p className="text-sm font-bold text-foreground uppercase tracking-tight">{t.entity}</p>
                            </div>
                         </td>
                         <td className="p-6">
                            <Badge variant="outline" className="text-[8px] uppercase font-bold tracking-widest border-white/10 bg-white/5">{t.category}</Badge>
                         </td>
                         <td className="p-6">
                            <p className="text-xs font-medium text-foreground max-w-[200px] truncate">{t.subject}</p>
                         </td>
                         <td className="p-6 text-center">
                            <Badge className={cn(
                               "text-[8px] font-bold uppercase px-3 py-1",
                               t.priority === 'CRITICAL' ? "bg-red-500 text-white" : 
                               t.priority === 'HIGH' ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-blue-500/10 text-blue-500"
                            )}>{t.priority}</Badge>
                         </td>
                         <td className="p-6 text-center">
                            <div className="flex flex-col items-center gap-1">
                               <Badge variant="outline" className={cn(
                                 "text-[8px] uppercase border-white/10",
                                 t.status === 'ESCALATED' ? "text-red-500 animate-pulse" : "text-muted-foreground"
                               )}>{t.status}</Badge>
                               <span className="text-[8px] font-bold text-muted-foreground uppercase">{t.age} OLD</span>
                            </div>
                         </td>
                         <td className="p-6 text-right">
                            <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><ArrowRight className="w-4 h-4" /></Button>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
