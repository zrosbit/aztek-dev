"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Smartphone, 
  Send, 
  Plus, 
  Calendar, 
  Clock, 
  History, 
  MoreVertical, 
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Users,
  Search,
  Filter,
  BarChart3,
  TrendingUp,
  FileText,
  SmartphoneNfc,
  Settings
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, Cell } from "recharts"

export default function AdminNotificationCommand() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isProcessing, setIsProcessing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const deliveryStats = [
    { label: "Emails Sent", val: "12,480", status: "success", rate: "99.8%" },
    { label: "WhatsApp Out", val: "8,520", status: "success", rate: "94.2%" },
    { label: "Push Delivered", val: "4,210", status: "warning", rate: "88.5%" },
    { label: "SMS Failures", val: "04", status: "error", rate: "0.1%" },
  ]

  const engagementData = [
    { day: "Mon", open: 420, click: 120 },
    { day: "Tue", open: 380, click: 110 },
    { day: "Wed", open: 510, click: 145 },
    { day: "Thu", open: 480, click: 130 },
    { day: "Fri", open: 620, click: 190 },
    { day: "Sat", open: 240, click: 85 },
    { day: "Sun", open: 310, click: 95 },
  ]

  const templates = [
    { id: "EMAIL-WARR-ISSUE", name: "Warranty Certificate Issued", channel: "Email", status: "VERIFIED", lastUsed: "2m ago" },
    { id: "WA-LEAD-ASSIGN", name: "New Lead Assigned Alert", channel: "WhatsApp", status: "VERIFIED", lastUsed: "14m ago" },
    { id: "PUSH-STOCK-LOW", name: "Critical Stock Notification", channel: "Push", status: "ACTIVE", lastUsed: "1h ago" },
    { id: "EMAIL-RENEW-60D", name: "60-Day Renewal Reminder", channel: "Email", status: "VERIFIED", lastUsed: "4h ago" },
  ]

  const broadcasts = [
    { name: "Monsoon 2026 Launch", target: "All Partners", date: "Oct 24", status: "COMPLETED", reach: "482 Reach" },
    { name: "System Maintenance Alert", target: "All Terminals", date: "Oct 28", status: "SCHEDULED", reach: "Global" },
  ]

  const handleLaunch = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      toast({ title: "Broadcast Initiated", description: "Sequence transmitted to network hub." })
    }, 1500)
  }

  if (!mounted) return null

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Notification <span className="text-primary italic">Command</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-tight">Omni-Channel Communication Engine & Automated Event Governance</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
            <History className="w-4 h-4" /> Transmission Log
          </Button>
          <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl" onClick={handleLaunch} disabled={isProcessing}>
            {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            Launch Global Broadcast
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {deliveryStats.map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-4 shadow-xl">
             <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                <Badge variant="outline" className={cn(
                  "text-[8px] font-bold uppercase",
                  s.status === 'success' ? "text-green-500 border-green-500/20" : "text-amber-500 border-amber-500/20"
                )}>{s.rate} Success</Badge>
             </div>
             <p className="text-3xl font-headline font-bold text-foreground">{s.val}</p>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full justify-start overflow-x-auto scrollbar-hide">
          <TabsTrigger value="dashboard" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Dashboard</TabsTrigger>
          <TabsTrigger value="templates" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Templates</TabsTrigger>
          <TabsTrigger value="campaigns" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Campaigns</TabsTrigger>
          <TabsTrigger value="scheduled" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Scheduled</TabsTrigger>
          <TabsTrigger value="automation" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-8 animate-in fade-in duration-500">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl p-8">
                 <CardHeader className="px-0 pt-0 pb-10 border-b border-white/5 flex flex-row items-center justify-between">
                    <div className="space-y-1">
                       <CardTitle className="text-sm uppercase tracking-widest">Network Engagement BI</CardTitle>
                       <p className="text-[10px] font-bold text-muted-foreground uppercase">Open vs Click-through rates across all verticals</p>
                    </div>
                    <TrendingUp className="w-5 h-5 text-primary opacity-20" />
                 </CardHeader>
                 <div className="h-[300px] w-full pt-10">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={engagementData}>
                          <defs>
                             <linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <XAxis dataKey="day" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                          <YAxis hide />
                          <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                          <Area type="monotone" dataKey="open" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorOpen)" />
                          <Area type="monotone" dataKey="click" stroke="#10B981" strokeWidth={2} fill="transparent" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </Card>

              <div className="space-y-8">
                 <Card className="bg-primary/5 border-primary/20 p-8 rounded-[32px] space-y-6">
                    <div className="flex items-center gap-3 text-primary">
                       <Zap className="w-6 h-6" />
                       <h4 className="text-sm font-bold uppercase tracking-widest">Active Automation</h4>
                    </div>
                    <div className="space-y-4">
                       {[
                         { l: "Email Gateway", v: "Operational", s: "success" },
                         { l: "WhatsApp API", v: "Operational", s: "success" },
                         { l: "FCM Push Node", v: "Operational", s: "success" },
                       ].map(m => (
                         <div key={m.l} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                            <span className="text-muted-foreground">{m.l}</span>
                            <span className={m.s === 'success' ? "text-az-success" : "text-az-warning"}>{m.v}</span>
                         </div>
                       ))}
                    </div>
                 </Card>

                 <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-4 shadow-xl">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary">Failed Deliveries</h4>
                    <div className="space-y-3 pt-4 border-t border-white/5">
                       <div className="flex items-center gap-3 p-3 bg-red-500/5 border border-red-500/20 rounded-xl">
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                          <p className="text-[10px] font-bold text-foreground">04 Rejected WhatsApp Nodes</p>
                       </div>
                    </div>
                 </Card>
              </div>
           </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6 animate-in fade-in duration-500">
           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                 <Input placeholder="Filter templates by name, ID or channel..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
              </div>
              <div className="flex gap-2">
                 <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/5 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
                    <Plus className="w-4 h-4" /> Create Template
                 </Button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((t) => (
                <Card key={t.id} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all group shadow-xl">
                   <CardHeader className="p-6 pb-4">
                      <div className="flex items-center justify-between mb-4">
                         <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-primary">
                            {t.channel === 'Email' ? <Mail className="w-4 h-4" /> : t.channel === 'WhatsApp' ? <MessageSquare className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
                         </div>
                         <Badge variant="outline" className="text-[8px] uppercase">{t.status}</Badge>
                      </div>
                      <CardTitle className="text-sm uppercase font-bold leading-tight text-foreground">{t.name}</CardTitle>
                      <p className="text-[9px] font-mono text-muted-foreground mt-2">{t.id}</p>
                   </CardHeader>
                   <CardContent className="p-6 pt-0 mt-4 border-t border-white/5 pt-4">
                      <div className="flex items-center justify-between">
                         <span className="text-[9px] text-muted-foreground uppercase font-bold">Last: {t.lastUsed}</span>
                         <Button variant="ghost" size="sm" className="h-8 text-[9px] uppercase font-bold text-primary gap-2">Edit <ArrowRight className="w-3 h-3" /></Button>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6 animate-in fade-in duration-500">
           {broadcasts.map((b, i) => (
             <Card key={i} className="bg-white/5 border-white/10 p-8 shadow-xl hover:border-primary/30 transition-all group">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner border border-primary/20">
                         <Zap className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                         <div className="flex items-center gap-3">
                            <h4 className="text-xl font-bold uppercase tracking-tighter text-foreground">{b.name}</h4>
                            <Badge variant="outline" className={cn(
                               "text-[9px] uppercase font-bold",
                               b.status === 'SCHEDULED' ? "border-amber-500 text-amber-500" : "border-green-500 text-green-500"
                            )}>{b.status}</Badge>
                         </div>
                         <p className="text-xs text-muted-foreground font-medium uppercase">{b.target} • {b.date}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-12">
                      <div className="text-right space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Network Impact</p>
                         <p className="text-sm font-bold text-foreground font-headline">{b.reach}</p>
                      </div>
                      <Button variant="outline" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10">Manage Sequence</Button>
                   </div>
                </div>
             </Card>
           ))}
        </TabsContent>

        <TabsContent value="scheduled" className="animate-in fade-in duration-500">
           <Card className="p-20 border-2 border-dashed border-white/10 rounded-[40px] text-center space-y-8 bg-white/[0.01]">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto border border-primary/20">
                 <Calendar className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-3">
                 <h3 className="text-2xl font-headline font-bold uppercase tracking-tight text-foreground">Message Scheduler Active</h3>
                 <p className="text-sm text-muted-foreground max-w-md mx-auto font-medium uppercase tracking-widest leading-relaxed">
                    Automated sequences for partner technical reviews and customer renewal reminders are being managed by the scheduler node.
                 </p>
              </div>
              <Button variant="outline" className="h-14 px-12 rounded-2xl border-white/10 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-primary hover:text-white transition-all">Launch Scheduler Terminal</Button>
           </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-6 animate-in fade-in duration-500">
           <Card className="bg-white/5 border-white/10 shadow-2xl overflow-hidden">
              <CardHeader className="p-8 border-b border-white/5">
                 <CardTitle className="text-sm uppercase tracking-widest">Event-Driven Notification Rules</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                 <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/5">
                       <tr>
                          <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Trigger Event</th>
                          <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Channels</th>
                          <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Priority</th>
                          <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
                          <th className="p-6"></th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {[
                         { event: "WARRANTY_ISSUED", channels: ["Email", "Push"], priority: "HIGH", status: "ACTIVE" },
                         { event: "LEAD_ASSIGNED", channels: ["WhatsApp", "Push"], priority: "CRITICAL", status: "ACTIVE" },
                         { event: "CLAIM_APPROVED", channels: ["Email", "WhatsApp"], priority: "HIGH", status: "ACTIVE" },
                         { event: "STOCK_REPLENISH_READY", channels: ["Push"], priority: "MEDIUM", status: "ACTIVE" },
                       ].map((rule) => (
                         <tr key={rule.event} className="hover:bg-white/[0.02] transition-colors group">
                            <td className="p-6 font-mono text-xs font-bold text-primary">{rule.event}</td>
                            <td className="p-6">
                               <div className="flex gap-2">
                                  {rule.channels.map(c => <Badge key={c} variant="outline" className="text-[8px] uppercase">{c}</Badge>)}
                               </div>
                            </td>
                            <td className="p-6">
                               <Badge className={cn(
                                 "text-[8px] font-bold uppercase",
                                 rule.priority === 'CRITICAL' ? "bg-red-500 text-white" : "bg-blue-500/10 text-blue-500"
                               )}>{rule.priority}</Badge>
                            </td>
                            <td className="p-6 text-center">
                               <div className="w-2 h-2 rounded-full bg-green-500 mx-auto" />
                            </td>
                            <td className="p-6 text-right">
                               <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><Settings className="w-4 h-4" /></Button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </CardContent>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
