"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  MessageSquare,
  ChevronRight,
  ArrowRight,
  Calendar,
  MapPin,
  Car,
  Tag,
  History,
  Send,
  Loader2,
  Table as TableIcon,
  LayoutGrid,
  TrendingUp,
  Target,
  BarChart3,
  PieChart as PieIcon,
  Zap,
  ArrowUpRight,
  XCircle,
  FileText
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, Cell, PieChart, Pie } from "recharts"

export default function LeadPipelinePage() {
  const [view, setView] = useState<"kanban" | "list">("kanban")
  const [selectedLead, setSelectedLead] = useState<any>(null)
  const [isAddingLead, setIsAddingLead] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [pipeline, setPipeline] = useState([
    { 
      id: "L-9942",
      name: "John Wick", 
      project: "Moto PPF Full Kit", 
      val: "₹1.2L", 
      status: "New", 
      source: "Website", 
      date: "2h ago",
      phone: "+91 99887 76655",
      email: "john@continental.com",
      vehicle: "Ducati Panigale V4 - 2024",
      notes: "Customer interested in high-impact zones specifically. Awaiting return call."
    },
    { 
      id: "L-9938",
      name: "Sarah Connor", 
      project: "Architectural Heat Reject", 
      val: "₹4.5L", 
      status: "Contacted", 
      source: "Referral", 
      date: "1d ago",
      phone: "+91 88776 65544",
      email: "sarah@future.net",
      vehicle: "Luxury Villa - Bangalore",
      notes: "Commercial glazing enquiry for South-facing facade."
    },
    { 
      id: "L-9932",
      name: "Bruce Wayne", 
      project: "Full Stealth PPF", 
      val: "₹6.8L", 
      status: "Quote Sent", 
      source: "Walk-in", 
      date: "2d ago",
      phone: "+91 77665 54433",
      email: "bruce@wayne.tech",
      vehicle: "Lamborghini Revuelto - Black",
      notes: "Satin finish transformation requested. Samples shown in person."
    }
  ])

  const opportunities = [
    { name: "Executive Motors Fleet", potential: "₹14.5L", probability: 65, vertical: "Enterprise", status: "Negotiation", alert: "High Priority" },
    { name: "Indiranagar Tech Park", potential: "₹28.2L", probability: 40, vertical: "Architectural", status: "Site Survey", alert: "Strategic" },
    { name: "Superbike Owners Club", potential: "₹4.8L", probability: 85, vertical: "Moto", status: "Drafting MOU", alert: "Volume" },
  ]

  const analyticsData = {
    intake: [
      { day: "Mon", count: 8 },
      { day: "Tue", count: 12 },
      { day: "Wed", count: 15 },
      { day: "Thu", count: 10 },
      { day: "Fri", count: 22 },
      { day: "Sat", count: 18 },
      { day: "Sun", count: 5 },
    ],
    sources: [
      { name: "Website", value: 45, color: "#0066FF" },
      { name: "Referral", value: 30, color: "#10B981" },
      { name: "Social", value: 25, color: "#8B5CF6" },
    ],
    disciplineEff: [
      { name: "PPF", eff: 82 },
      { name: "Ceramic", eff: 74 },
      { name: "Moto", eff: 91 },
      { name: "Arch", eff: 58 },
    ]
  }

  const columns = ["New", "Contacted", "Quote Sent", "Won", "Lost"]

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsAddingLead(false)
      toast({
        title: "Lead Created",
        description: "Enquiry has been initialized in your regional queue.",
      })
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Connect <span className="text-az-blue italic">Pipeline</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-tight">Unified Lead Management & Strategic Conversion Terminal</p>
         </div>
         <div className="flex gap-2">
            <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5" onClick={() => toast({ title: "WhatsApp Sync", description: "Fetching unread business enquiries..." })}>
              <MessageSquare className="w-4 h-4 text-az-success" /> WhatsApp Lead
            </Button>
            <Button variant="gradient" className="h-12 px-6 font-bold text-xs uppercase tracking-widest gap-2 rounded-2xl shadow-xl" onClick={() => setIsAddingLead(true)}>
              <Plus className="w-4 h-4" /> Add Lead
            </Button>
         </div>
      </div>

      <Tabs defaultValue="pipeline" className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-white/5 pb-4">
           <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto overflow-x-auto scrollbar-hide">
              <TabsTrigger value="pipeline" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-az-blue">
                <Target className="w-3.5 h-3.5" /> Active Pipeline
              </TabsTrigger>
              <TabsTrigger value="opportunities" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-az-blue">
                <Zap className="w-3.5 h-3.5" /> Opportunities
              </TabsTrigger>
              <TabsTrigger value="analytics" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-az-blue">
                <BarChart3 className="w-3.5 h-3.5" /> Performance BI
              </TabsTrigger>
           </TabsList>

           <div className="flex gap-2 shrink-0">
              <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl">
                 <button 
                   onClick={() => setView("kanban")}
                   className={cn("px-4 py-2 text-[10px] font-bold uppercase rounded-xl transition-all flex items-center gap-2", view === "kanban" ? "bg-az-blue text-white shadow-lg" : "text-muted-foreground")}
                 >
                   <LayoutGrid className="w-3.5 h-3.5" /> Kanban
                 </button>
                 <button 
                   onClick={() => setView("list")}
                   className={cn("px-4 py-2 text-[10px] font-bold uppercase rounded-xl transition-all flex items-center gap-2", view === "list" ? "bg-az-blue text-white shadow-lg" : "text-muted-foreground")}
                 >
                   <TableIcon className="w-3.5 h-3.5" /> List
                 </button>
              </div>
              <Button variant="outline" className="h-14 rounded-2xl border-white/5 px-4 bg-white/5"><Filter className="w-4 h-4" /></Button>
           </div>
        </div>

        <TabsContent value="pipeline" className="space-y-6 animate-in fade-in duration-500">
           <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Filter pipeline by name, vehicle or source..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
           </div>

           {view === "kanban" ? (
             <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-6 scrollbar-hide">
               {columns.map((col) => (
                 <div key={col} className="space-y-4 min-w-[280px]">
                   <div className="flex items-center justify-between px-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{col}</span>
                      <Badge variant="outline" className="text-[8px] border-white/10 bg-white/5">{pipeline.filter(l => l.status === col).length}</Badge>
                   </div>
                   <div className="space-y-3">
                      {pipeline.filter(l => l.status === col).map((lead, i) => (
                        <Card 
                           key={i} 
                           className="bg-white/5 border-white/10 hover:border-az-blue/40 transition-all cursor-pointer group shadow-xl"
                           onClick={() => setSelectedLead(lead)}
                         >
                          <CardContent className="p-5 space-y-4">
                            <div className="flex items-start justify-between">
                               <div className="space-y-1">
                                  <h4 className="font-bold text-sm group-hover:text-az-blue transition-colors text-foreground uppercase tracking-tight">{lead.name}</h4>
                                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">{lead.project}</p>
                               </div>
                               <MoreVertical className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div className="flex items-center justify-between">
                               <span className="text-xs font-bold font-headline text-az-blue">{lead.val}</span>
                               <span className="text-[9px] text-muted-foreground uppercase font-bold">{lead.date}</span>
                            </div>
                            <div className="flex gap-2 pt-2 border-t border-white/5">
                               <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-white/5 bg-white/5 hover:bg-az-blue/10" onClick={(e) => { e.stopPropagation(); toast({ title: "Connecting...", description: `Dialing ${lead.phone}` }) }}><Phone className="w-3 h-3" /></Button>
                               <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-white/5 bg-white/5 hover:bg-az-blue/10" onClick={(e) => { e.stopPropagation(); toast({ title: "Drafting Email", description: `Opening mailto:${lead.email}` }) }}><Mail className="w-3 h-3" /></Button>
                               <Button size="icon" variant="gradient" className="h-8 w-8 rounded-lg ml-auto"><ArrowRight className="w-3 h-3" /></Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      {pipeline.filter(l => l.status === col).length === 0 && (
                        <div className="h-32 border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center">
                           <p className="text-[9px] uppercase font-bold text-muted-foreground opacity-30">Drop cards here</p>
                        </div>
                      )}
                   </div>
                 </div>
               ))}
             </div>
           ) : (
             <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
               <table className="w-full text-left">
                 <thead className="bg-white/5 border-b border-white/5">
                   <tr>
                     <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Enquiry Detail</th>
                     <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Asset / Project</th>
                     <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Stage</th>
                     <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Potential</th>
                     <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Inbound</th>
                     <th className="p-6"></th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                   {pipeline.map((lead, i) => (
                     <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-pointer" onClick={() => setSelectedLead(lead)}>
                       <td className="p-6">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-az-blue/10 flex items-center justify-center text-az-blue font-bold text-xs shadow-inner">
                               {lead.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex flex-col">
                               <span className="font-bold text-foreground group-hover:text-az-blue transition-colors text-sm uppercase tracking-tight">{lead.name}</span>
                               <span className="text-[10px] text-muted-foreground font-bold">{lead.email}</span>
                            </div>
                         </div>
                       </td>
                       <td className="p-6">
                          <div className="space-y-1">
                             <p className="text-xs font-bold text-foreground uppercase">{lead.project}</p>
                             <p className="text-[10px] text-muted-foreground uppercase">{lead.vehicle}</p>
                          </div>
                       </td>
                       <td className="p-6 text-center">
                          <Badge variant="outline" className="bg-az-blue/5 text-az-blue border-az-blue/20 text-[8px] uppercase font-bold px-3 py-1">{lead.status}</Badge>
                       </td>
                       <td className="p-6 text-right">
                          <span className="text-sm font-headline font-bold text-az-blue">{lead.val}</span>
                       </td>
                       <td className="p-6 text-right">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase">{lead.date}</span>
                       </td>
                       <td className="p-6 text-right">
                          <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-az-blue transition-colors"><ChevronRight className="w-4 h-4" /></Button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           )}
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-6 animate-in fade-in duration-500">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.map((opt) => (
                <Card key={opt.name} className="bg-white/5 border-white/10 hover:border-az-blue/30 transition-all group shadow-2xl relative overflow-hidden">
                   <CardHeader className="p-8 border-b border-white/5 bg-white/[0.01]">
                      <div className="flex items-center justify-between mb-4">
                         <Badge className="bg-az-blue text-white text-[8px] uppercase font-bold tracking-widest px-3 py-1">{opt.alert}</Badge>
                         <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold text-muted-foreground uppercase">ID: OPT-024</span>
                            <MoreVertical className="w-3 h-3 text-muted-foreground" />
                         </div>
                      </div>
                      <CardTitle className="text-xl font-headline font-bold uppercase tracking-tight text-foreground group-hover:text-az-blue transition-colors leading-none">{opt.name}</CardTitle>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase mt-2">{opt.vertical} Vertical • {opt.status}</p>
                   </CardHeader>
                   <CardContent className="p-8 space-y-8">
                      <div className="grid grid-cols-2 gap-8">
                         <div className="space-y-1">
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">Potential Yield</p>
                            <p className="text-2xl font-headline font-bold text-az-blue">{opt.potential}</p>
                         </div>
                         <div className="space-y-1 text-right">
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">Win Prob.</p>
                            <p className="text-2xl font-headline font-bold text-foreground">{opt.probability}%</p>
                         </div>
                      </div>
                      
                      <div className="space-y-2">
                         <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-az-blue shadow-[0_0_10px_#0066FF]" style={{ width: `${opt.probability}%` }} />
                         </div>
                         <p className="text-[8px] text-muted-foreground uppercase font-bold text-center">Predictive Success Index</p>
                      </div>

                      <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10 group-hover:bg-az-blue group-hover:text-white transition-all">
                        Initiate Strategy Brief <ArrowRight className="w-3.5 h-3.5 ml-2" />
                      </Button>
                   </CardContent>
                   <Zap className="absolute -bottom-10 -right-10 w-48 h-48 text-az-blue opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                </Card>
              ))}

              <Card className="border-2 border-dashed border-white/5 bg-white/[0.01] rounded-[32px] flex flex-col items-center justify-center p-12 text-center space-y-6 group hover:border-az-blue/30 transition-all cursor-pointer">
                 <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground group-hover:text-az-blue group-hover:scale-110 transition-all shadow-inner">
                    <Plus className="w-8 h-8" />
                 </div>
                 <div className="space-y-2">
                    <h4 className="text-lg font-headline font-bold uppercase text-foreground">Create Strategic Lead</h4>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest max-w-[180px] leading-relaxed">Input enterprise or high-value multi-asset enquiries.</p>
                 </div>
              </Card>
           </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-8 animate-in fade-in duration-500">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl p-8">
                 <CardHeader className="px-0 pt-0 pb-10 border-b border-white/5 flex flex-row items-center justify-between">
                    <div className="space-y-1">
                       <CardTitle className="text-sm uppercase tracking-widest">Enquiry Intake Velocity</CardTitle>
                       <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Daily intake volume across Trailing 7 days</p>
                    </div>
                    <TrendingUp className="w-5 h-5 text-az-blue opacity-20" />
                 </CardHeader>
                 <div className="h-[350px] w-full pt-10">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={analyticsData.intake}>
                          <defs>
                             <linearGradient id="colorIntake" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0066FF" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <XAxis dataKey="day" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                          <YAxis hide />
                          <Tooltip contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                          <Area type="monotone" dataKey="count" stroke="#0066FF" strokeWidth={3} fillOpacity={1} fill="url(#colorIntake)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </Card>

              <Card className="bg-white/5 border-white/10 shadow-2xl p-8 flex flex-col items-center justify-center">
                 <CardHeader className="px-0 pt-0 pb-8 border-b border-white/5 w-full">
                    <CardTitle className="text-sm uppercase tracking-widest text-center">Lead Source Distribution</CardTitle>
                 </CardHeader>
                 <div className="h-[240px] w-full mt-10">
                    <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                          <Pie data={analyticsData.sources} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={4}>
                             {analyticsData.sources.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.color} />
                             ))}
                          </Pie>
                       </PieChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="grid grid-cols-1 gap-3 w-full mt-8">
                    {analyticsData.sources.map((s) => (
                      <div key={s.name} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                         <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.name}</span>
                         </div>
                         <span className="text-xs font-bold text-foreground">{s.value}%</span>
                      </div>
                    ))}
                 </div>
              </Card>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 p-8 shadow-2xl">
                 <CardHeader className="px-0 pt-0 pb-8 border-b border-white/5">
                    <CardTitle className="text-sm uppercase tracking-widest">Discipline Conversion Efficiency</CardTitle>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">Lead-to-Project win rate per product category</p>
                 </CardHeader>
                 <div className="h-[300px] w-full mt-10">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={analyticsData.disciplineEff}>
                          <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                          <YAxis hide />
                          <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                          <Bar dataKey="eff" radius={[6, 6, 0, 0]}>
                             {analyticsData.disciplineEff.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.eff > 80 ? "#22C55E" : entry.eff > 60 ? "#0066FF" : "#F59E0B"} />
                             ))}
                          </Bar>
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </Card>

              <Card className="bg-az-blue/5 border border-az-blue/20 p-12 rounded-[40px] flex flex-col justify-center space-y-8 relative overflow-hidden group">
                 <div className="space-y-4 relative z-10">
                    <div className="w-16 h-16 rounded-[24px] bg-az-blue/10 border border-az-blue/20 flex items-center justify-center text-az-blue shadow-inner group-hover:scale-110 transition-transform duration-700">
                       <Target className="w-8 h-8" />
                    </div>
                    <h3 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground leading-none">Commercial <br /><span className="text-az-blue italic">Forecast.</span></h3>
                    <p className="text-sm text-muted-foreground font-medium max-w-sm uppercase tracking-tight leading-relaxed">Based on your current pipeline velocity, we project a **₹2.4L revenue lift** for the upcoming 14-day window.</p>
                 </div>
                 <div className="flex gap-4 relative z-10 pt-4">
                    <Button variant="outline" className="h-12 px-8 rounded-xl border-az-blue/20 text-az-blue text-[9px] uppercase font-bold bg-az-blue/5">Optimize Strategy</Button>
                    <Button variant="gradient" className="h-12 px-8 rounded-xl text-[9px] uppercase font-bold shadow-xl">Detailed BI Report</Button>
                 </div>
                 <TrendingUp className="absolute -bottom-10 -right-10 w-64 h-64 text-az-blue opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
              </Card>
           </div>
        </TabsContent>
      </Tabs>

      {/* Add Lead Dialog */}
      <Dialog open={isAddingLead} onOpenChange={(o) => { if(!isSubmitting) setIsAddingLead(o); }}>
        <DialogContent className="max-w-2xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={handleAddLead}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Manual Inbound Entry</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Capture new customer enquiry for processing</DialogDescription>
            </DialogHeader>

            <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Customer Full Name</label>
                  <Input required placeholder="e.g. John Doe" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Mobile Endpoint</label>
                  <Input required placeholder="+91 ..." className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-muted-foreground">Vehicle / Project Detail</label>
                <Input required placeholder="e.g. Lamborghini Revuelto - Stealth PPF" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Estimated Value</label>
                  <Input placeholder="e.g. ₹1.5L" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Lead Source</label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/5 h-12 rounded-xl text-sm">
                      <SelectValue placeholder="Select Source" />
                    </SelectTrigger>
                    <SelectContent className="bg-az-midnight border-white/10">
                      <SelectItem value="website">Studio Website</SelectItem>
                      <SelectItem value="walkin">Walk-in Enquiry</SelectItem>
                      <SelectItem value="referral">Customer Referral</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
              <Button type="button" variant="ghost" onClick={() => setIsAddingLead(false)} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Cancel</Button>
              <Button type="submit" disabled={isSubmitting} className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl min-w-[200px]">
                {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Storing Record...</> : <>Create Lead <ArrowRight className="w-4 h-4 ml-2" /></>}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Lead Detail Modal */}
      <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <DialogContent className="max-w-4xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-az-blue/10 flex items-center justify-center text-az-blue font-bold text-xl shadow-inner border border-az-blue/20">
                {selectedLead?.name.split(' ').map((n: any) => n[0]).join('')}
              </div>
              <div className="space-y-1">
                <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">{selectedLead?.name}</DialogTitle>
                <div className="flex items-center gap-3">
                  <Badge className="bg-az-blue/10 text-az-blue border-az-blue/20 text-[9px] uppercase font-bold tracking-widest">{selectedLead?.status}</Badge>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">ID: {selectedLead?.id}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="h-10 rounded-xl border-white/10 bg-white/5 text-[9px] uppercase font-bold gap-2">
                <History className="w-3.5 h-3.5" /> Interaction Log
              </Button>
            </div>
          </div>

          <div className="p-8 space-y-10 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-az-blue">Contact Intelligence</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-bold">{selectedLead?.phone}</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-bold">{selectedLead?.email}</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-bold uppercase">Region: Bangalore Hub</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-az-blue">Opportunity Detail</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <Car className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-bold uppercase">{selectedLead?.vehicle}</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-bold uppercase">{selectedLead?.project}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-az-blue/5 rounded-xl border border-az-blue/10">
                    <span className="text-[10px] font-bold uppercase text-az-blue">Est. Value</span>
                    <span className="text-lg font-headline font-bold text-az-blue">{selectedLead?.val}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-az-blue">Internal Notes</h3>
               <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
                  <p className="text-xs text-muted-foreground leading-relaxed italic">"{selectedLead?.notes}"</p>
                  <div className="flex gap-2">
                    <Input placeholder="Append interaction note..." className="bg-black/20 border-white/5 h-11 text-xs rounded-xl" />
                    <Button variant="outline" className="h-11 px-4 border-white/10 rounded-xl" onClick={() => toast({ title: "Note Saved", description: "Activity log updated." })}><Send className="w-4 h-4" /></Button>
                  </div>
               </div>
            </div>
          </div>

          <div className="p-8 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
            <Button variant="outline" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold border-white/10 hover:bg-red-500/10 hover:text-red-500">Archive Opportunity</Button>
            <div className="flex gap-3">
              <Button variant="outline" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold border-white/10">Move to Next Stage</Button>
              <Button variant="gradient" className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">
                Convert to Project <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
