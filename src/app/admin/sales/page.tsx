"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  FileText, 
  ShoppingCart, 
  ArrowUpRight, 
  Search, 
  Filter, 
  MoreVertical, 
  Download,
  TrendingUp,
  CheckCircle2,
  Clock,
  Printer,
  ChevronRight,
  Calculator,
  UserRound,
  Building2,
  Plus,
  LayoutGrid,
  Table as TableIcon,
  UserCheck,
  Loader2,
  ArrowRight,
  ListTodo,
  CalendarDays,
  Target,
  BarChart3,
  PieChart,
  Settings,
  XCircle,
  Zap,
  Globe
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, AreaChart, Area } from "recharts"

export default function AdminSalesTerminal() {
  const [activeTab, setActiveTab] = useState("pipeline")
  const [view, setView] = useState<"kanban" | "list">("kanban")
  const [isAddingLead, setIsAddingLead] = useState(false)
  const [isSubmittingLead, setIsSubmittingLead] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const pipelineData = [
    { id: "L-9942", name: "John Wick", project: "Moto PPF Full Kit", val: "₹1.2L", status: "New", partner: "Elite Wraps", date: "2h ago" },
    { id: "L-9938", name: "Sarah Connor", project: "Architectural Solar", val: "₹4.5L", status: "Qualified", partner: "Skyline Pro", date: "1d ago" },
    { id: "L-9932", name: "Bruce Wayne", project: "Full Stealth PPF", val: "₹6.8L", status: "Opportunity", partner: "Gotham Detailing", date: "2d ago" },
    { id: "L-9921", name: "Tony Stark", project: "Iron Shield Ceramic", val: "₹2.2L", status: "Won", partner: "Stark Labs", date: "3d ago" },
    { id: "L-9915", name: "Steve Rogers", project: "Vintage Film Restore", val: "₹85k", status: "Lost", partner: "Cap Auto", date: "1w ago" },
  ]

  const orders = [
    { id: "AZ-SO-BLR-00392", customer: "Rahul Sharma", product: "Full Body PPF", status: "ALLOCATION", date: "Oct 24", amount: "₹1,25,000", partner: "Elite Wraps" },
    { id: "AZ-SO-BLR-00385", customer: "Aditi Rao", product: "Ceramic Gold", status: "READY", date: "Oct 22", amount: "₹24,500", partner: "Shield Detailing" },
    { id: "AZ-SO-DEL-00411", customer: "Vikram Singh", product: "Architectural V4", status: "FULFILLED", date: "Oct 20", amount: "₹4,20,000", partner: "Skyline Pro" },
  ]

  const quotes = [
    { id: "AZ-QT-BLR-00421", customer: "John Wick", product: "Moto PPF Kit", amount: "₹1,20,000", status: "SENT", expiry: "6d left", partner: "Elite Wraps" },
    { id: "AZ-QT-MUM-00418", customer: "Sarah Connor", product: "Solar Shield", amount: "₹4,50,000", status: "ACCEPTED", expiry: "N/A", partner: "Mumbai Hub" },
  ]

  const leadColumns = ["New", "Qualified", "Opportunity", "Won", "Lost"]

  const lostReasons = [
    { reason: "Price Too High", val: 45 },
    { reason: "Competitor Choice", val: 30 },
    { reason: "Timing/Delay", val: 15 },
    { reason: "Product Spec Gap", val: 10 },
  ]

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingLead(true)
    setTimeout(() => {
      setIsSubmittingLead(false)
      setIsAddingLead(false)
      toast({
        title: "Lead Initialized",
        description: "Enquiry captured and routed to regional queue via Engine v2.",
      })
    }, 1500)
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Sales <span className="text-primary italic">Command</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Network-Wide Commercial Oversight & Conversion Intelligence</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5" onClick={() => toast({ title: "Export Started", description: "Generating full CSV data pack..." })}>
            <Download className="w-4 h-4" /> Global Export
          </Button>
          <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl" onClick={() => setIsAddingLead(true)}>
            <Plus className="w-4 h-4" /> Manual Entry
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Active Pipeline", val: "₹1.84 Cr", sub: "142 Open Leads", icon: TrendingUp, color: "text-blue-500" },
          { label: "Conv. Efficiency", val: "74.2%", sub: "+4% vs Last Mo", icon: CheckCircle2, color: "text-green-500" },
          { label: "Pending Tasks", val: "28", sub: "Follow-ups Due", icon: ListTodo, color: "text-amber-500" },
          { label: "Lost Revenue", val: "₹12.5L", sub: "Trailing 30 Days", icon: XCircle, color: "text-red-500" },
        ].map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-4 shadow-xl group hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between">
              <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", s.color)}>
                <s.icon className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-[8px] border-white/10 font-bold uppercase tracking-widest">Live Sync</Badge>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
              <p className="text-2xl font-headline font-bold text-foreground">{s.val}</p>
              <p className="text-[9px] text-muted-foreground uppercase font-bold">{s.sub}</p>
            </div>
          </Card>
        ))}
      </div>

      {mounted ? (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full justify-start overflow-x-auto scrollbar-hide">
            <TabsTrigger value="pipeline" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Pipeline</TabsTrigger>
            <TabsTrigger value="orders" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Sales Orders</TabsTrigger>
            <TabsTrigger value="quotations" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Quotations</TabsTrigger>
            <TabsTrigger value="operations" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Operations</TabsTrigger>
            <TabsTrigger value="intelligence" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Intelligence</TabsTrigger>
            <TabsTrigger value="engine" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Assignment Engine</TabsTrigger>
            <TabsTrigger value="settings" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="pipeline" className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Filter pipeline by name, studio or ID..." className="pl-10 h-12 bg-white/5 border-white/5 rounded-2xl" />
              </div>
              <div className="flex gap-2 shrink-0">
                <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl">
                  <button onClick={() => setView("kanban")} className={cn("px-4 py-2 text-[10px] font-bold uppercase rounded-xl transition-all", view === "kanban" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-foreground")}>Kanban</button>
                  <button onClick={() => setView("list")} className={cn("px-4 py-2 text-[10px] font-bold uppercase rounded-xl transition-all", view === "list" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-foreground")}>List</button>
                </div>
                <Button variant="outline" className="h-12 rounded-2xl border-white/5 px-4"><Filter className="w-4 h-4" /></Button>
              </div>
            </div>

            {view === "kanban" ? (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {leadColumns.map((col) => (
                  <div key={col} className="space-y-4 min-w-[260px]">
                    <div className="flex items-center justify-between px-2 border-b border-white/5 pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{col}</span>
                      <Badge variant="secondary" className="text-[8px] bg-white/5">{pipelineData.filter(l => l.status === col).length}</Badge>
                    </div>
                    <div className="space-y-3">
                      {pipelineData.filter(l => l.status === col).map((lead) => (
                        <Card key={lead.id} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all cursor-pointer group shadow-xl">
                          <CardContent className="p-4 space-y-4">
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <h4 className="font-bold text-xs group-hover:text-primary transition-colors uppercase truncate">{lead.name}</h4>
                                <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-tight">{lead.project}</p>
                              </div>
                              <MoreVertical className="w-3 h-3 text-muted-foreground" />
                            </div>
                            <div className="flex items-center justify-between text-[9px] font-bold uppercase">
                              <span className="text-primary">{lead.partner}</span>
                              <span className="text-foreground">{lead.val}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
                <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/5">
                    <tr>
                      <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Entity Detail</th>
                      <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Assigned Studio</th>
                      <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Stage</th>
                      <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Revenue Pot.</th>
                      <th className="p-6"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {pipelineData.map((lead) => (
                      <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="p-6">
                          <div className="space-y-1">
                            <p className="font-bold text-sm text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">{lead.name}</p>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase">{lead.project}</p>
                          </div>
                        </td>
                        <td className="p-6 font-medium text-xs uppercase">{lead.partner}</td>
                        <td className="p-6 text-center">
                          <Badge variant="outline" className="text-[8px] uppercase font-bold border-white/10">{lead.status}</Badge>
                        </td>
                        <td className="p-6 text-right font-headline font-bold text-primary">{lead.val}</td>
                        <td className="p-6 text-right">
                          <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><ArrowRight className="w-4 h-4" /></Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </TabsContent>

          <TabsContent value="orders" className="animate-in fade-in duration-500">
            <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
                <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/5">
                      <tr>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Order ID</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Customer & Studio</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Product</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Date</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Amount</th>
                        <th className="p-6"></th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                      {orders.map((o) => (
                        <tr key={o.id} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="p-6 font-mono text-xs font-bold text-primary">{o.id}</td>
                          <td className="p-6">
                              <div className="space-y-1">
                                <p className="font-bold text-sm text-foreground uppercase tracking-tight">{o.customer}</p>
                                <p className="text-[9px] text-muted-foreground font-bold uppercase">Partner: {o.partner}</p>
                              </div>
                          </td>
                          <td className="p-6 text-xs uppercase font-medium">{o.product}</td>
                          <td className="p-6 text-center text-xs font-bold text-muted-foreground">{o.date}</td>
                          <td className="p-6 text-center">
                              <Badge className={cn(
                                "text-[8px] uppercase font-bold",
                                o.status === "READY" ? "bg-green-500/10 text-green-500" :
                                o.status === "FULFILLED" ? "bg-blue-500/10 text-blue-500" :
                                "bg-amber-500/10 text-amber-500"
                              )}>{o.status}</Badge>
                          </td>
                          <td className="p-6 text-right font-headline font-bold text-foreground">{o.amount}</td>
                          <td className="p-6 text-right">
                              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><MoreVertical className="w-4 h-4" /></Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
            </div>
          </TabsContent>

          <TabsContent value="quotations" className="animate-in fade-in duration-500 space-y-6">
            <Card className="bg-white/5 border-white/10 shadow-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-widest">Network Quotation Registry</h3>
                  <Button variant="outline" size="sm" className="h-9 text-[9px] uppercase border-white/10">Pricing Rules v2.4</Button>
                </div>
                <div className="p-0">
                  <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/5">
                      <tr>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Quote ID</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Entity</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Total</th>
                        <th className="p-6"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {quotes.map((q) => (
                        <tr key={q.id} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="p-6 font-mono text-xs font-bold text-primary">{q.id}</td>
                          <td className="p-6">
                            <div className="space-y-1">
                              <p className="font-bold text-sm uppercase">{q.customer}</p>
                              <p className="text-[9px] text-muted-foreground uppercase font-bold">{q.partner}</p>
                            </div>
                          </td>
                          <td className="p-6 text-center">
                            <Badge variant="outline" className={cn(
                                "text-[8px] uppercase font-bold",
                                q.status === "ACCEPTED" ? "border-green-500 text-green-500" : "border-white/10"
                            )}>{q.status}</Badge>
                          </td>
                          <td className="p-6 text-right font-headline font-bold">{q.amount}</td>
                          <td className="p-6 text-right">
                            <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><Printer className="w-4 h-4" /></Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </Card>
          </TabsContent>

          <TabsContent value="operations" className="animate-in fade-in duration-500 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10 p-8 shadow-2xl">
                  <CardHeader className="px-0 pt-0 flex flex-row items-center justify-between border-b border-white/5 pb-4">
                      <CardTitle className="text-sm uppercase tracking-widest flex items-center gap-3">
                        <Clock className="w-4 h-4 text-amber-500" /> Pending Follow-Ups
                      </CardTitle>
                      <Badge className="bg-amber-500/10 text-amber-500 border-none">12 Overdue</Badge>
                  </CardHeader>
                  <div className="space-y-4 pt-6">
                      {[
                        { task: "Call Rahul M.", ref: "L-9942", age: "2h ago", priority: "High" },
                        { task: "Review Porsche Specs", ref: "AZ-SO-014", age: "5h ago", priority: "Medium" },
                        { task: "Finalize Villa Quote", ref: "L-9938", age: "1d ago", priority: "High" },
                      ].map((t, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
                            <div className="flex items-center gap-4">
                              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                              <div>
                                  <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors uppercase">{t.task}</p>
                                  <p className="text-[9px] text-muted-foreground uppercase font-bold">Ref: {t.ref}</p>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">{t.age}</span>
                        </div>
                      ))}
                  </div>
                </Card>

                <Card className="bg-white/5 border-white/10 p-8 shadow-2xl">
                  <CardHeader className="px-0 pt-0 flex flex-row items-center justify-between border-b border-white/5 pb-4">
                      <CardTitle className="text-sm uppercase tracking-widest flex items-center gap-3">
                        <Zap className="w-4 h-4 text-blue-500" /> Lead Assignment Pulse
                      </CardTitle>
                  </CardHeader>
                  <div className="space-y-6 pt-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto border border-blue-500/20">
                        <UserCheck className="w-8 h-8 text-blue-500" />
                      </div>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest max-w-xs mx-auto leading-relaxed">
                        94% of leads today were auto-assigned to Gold+ studios within 5 minutes of capture.
                      </p>
                      <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10">View Assignment Logs</Button>
                  </div>
                </Card>
            </div>
          </TabsContent>

          <TabsContent value="intelligence" className="animate-in fade-in duration-500 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-white/5 border-white/10 p-8 shadow-2xl">
                  <CardHeader className="px-0 pt-0 border-b border-white/5 pb-4">
                      <CardTitle className="text-sm uppercase tracking-widest">Lead Source Distribution</CardTitle>
                  </CardHeader>
                  <div className="h-[300px] w-full pt-8">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={[
                            { name: 'Mon', val: 4000 },
                            { name: 'Tue', val: 3000 },
                            { name: 'Wed', val: 2000 },
                            { name: 'Thu', val: 2780 },
                            { name: 'Fri', val: 1890 },
                            { name: 'Sat', val: 2390 },
                            { name: 'Sun', val: 3490 },
                        ]}>
                            <defs>
                              <linearGradient id="colorIntelligence" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                            />
                            <Area type="monotone" dataKey="val" stroke="#2563EB" fillOpacity={1} fill="url(#colorIntelligence)" />
                        </AreaChart>
                      </ResponsiveContainer>
                  </div>
                </Card>

                <div className="space-y-8">
                  <Card className="bg-white/5 border-white/10 p-8 shadow-2xl space-y-6">
                      <h4 className="text-[10px] font-bold uppercase text-primary tracking-widest">Lost Lead Analysis</h4>
                      <div className="space-y-6">
                        {lostReasons.map(r => (
                            <div key={r.reason} className="space-y-2">
                              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                                  <span className="text-muted-foreground">{r.reason}</span>
                                  <span className="text-foreground">{r.val}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                  <div className="h-full bg-red-500" style={{ width: `${r.val}%` }} />
                              </div>
                            </div>
                        ))}
                      </div>
                  </Card>

                  <Card className="bg-primary/5 border border-primary/20 p-8 rounded-3xl space-y-4">
                      <div className="flex items-center gap-3 text-primary">
                        <BarChart3 className="w-5 h-5" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest">Conversion Benchmark</h4>
                      </div>
                      <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-medium">
                        Gold Partner conversion efficiency is **12% higher** than network baseline. Recommendation: Route high-value leads to Master Tier labs.
                      </p>
                  </Card>
                </div>
            </div>
          </TabsContent>

          <TabsContent value="engine" className="animate-in fade-in duration-500">
            <Card className="bg-white/5 border-white/10 p-8 shadow-2xl space-y-10">
                <div className="space-y-2">
                  <h3 className="text-xl font-headline font-bold uppercase">Auto-Routing Engine v2.4</h3>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest max-w-xl">
                      Configure high-efficiency lead distribution rules based on proximity, partner tier, and specialized product discipline.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6 border-t border-white/5">
                  <div className="space-y-6">
                      <h4 className="text-[10px] font-bold uppercase text-primary tracking-[0.2em]">Assignment Priorities</h4>
                      <div className="space-y-4">
                        {[
                            { label: "Partner Proximity", val: 40 },
                            { label: "Partner Performance Score", val: 35 },
                            { label: "Regional Balancing", val: 15 },
                            { label: "Inventory Availability", val: 10 },
                        ].map(p => (
                            <div key={p.label} className="space-y-2">
                              <div className="flex justify-between items-center text-[10px] font-bold uppercase">
                                  <span className="text-muted-foreground">{p.label}</span>
                                  <span className="text-foreground">{p.val}% Weight</span>
                              </div>
                              <Input type="range" defaultValue={p.val} className="h-1 bg-white/10 accent-primary rounded-full cursor-pointer" />
                            </div>
                        ))}
                      </div>
                  </div>

                  <div className="p-8 bg-black/20 rounded-[32px] border border-white/5 space-y-6 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-primary">
                        <Globe className="w-8 h-8" />
                        <span className="text-[11px] font-bold uppercase tracking-widest leading-tight">Global Routing Active in 12 Node Hubs</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">
                        Manual intervention required for leads {">"} ₹5.0L in value. These are flagged for Executive Review before partner transmission.
                      </p>
                      <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold border-primary/20">Sync Engine Rules</Button>
                  </div>
                </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="animate-in fade-in duration-500">
            <Card className="bg-white/5 border-white/10 p-8 shadow-2xl space-y-10">
                <div className="space-y-8">
                  <div className="space-y-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary border-b border-white/5 pb-2">Sales Protocol Config</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                            <p className="text-[10px] font-bold uppercase text-muted-foreground">Standard Quote Validity</p>
                            <Select defaultValue="15">
                              <SelectTrigger className="bg-background/50 h-10 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent className="glass"><SelectItem value="15">15 Days</SelectItem><SelectItem value="30">30 Days</SelectItem></SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-3 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                            <p className="text-[10px] font-bold uppercase text-muted-foreground">Lead Aging Threshold (Hours)</p>
                            <Select defaultValue="24">
                              <SelectTrigger className="bg-background/50 h-10 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent className="glass"><SelectItem value="24">24 Hours</SelectItem><SelectItem value="48">48 Hours</SelectItem></SelectContent>
                            </Select>
                        </div>
                      </div>
                  </div>
                </div>
            </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="h-96 w-full bg-white/5 border border-white/10 rounded-3xl animate-pulse" />
      )}

      {/* Manual Lead Dialog */}
      <Dialog open={isAddingLead} onOpenChange={(o) => { if(!isSubmittingLead) setIsAddingLead(o); }}>
        <DialogContent className="max-w-2xl bg-black border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={handleAddLead}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Technical Lead Entry</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Manual capture into national distribution grid</DialogDescription>
            </DialogHeader>

            <div className="p-8 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Customer Identity</label>
                  <Input required placeholder="Full Name" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Mobile Endpoint</label>
                  <Input required placeholder="+91 ..." className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-muted-foreground">Target Asset / Project</label>
                <Input required placeholder="e.g. Porsche 911 GT3 RS" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Assigned Discipline</label>
                  <Select required>
                    <SelectTrigger className="bg-white/5 border-white/5 h-12 rounded-xl text-sm">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="glass">
                      <SelectItem value="auto">Automotive PPF</SelectItem>
                      <SelectItem value="moto">Motorcycle Armor</SelectItem>
                      <SelectItem value="arch">Architectural Solar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Lead Source</label>
                  <Select required>
                    <SelectTrigger className="bg-white/5 border-white/5 h-12 rounded-xl text-sm">
                      <SelectValue placeholder="Select Source" />
                    </SelectTrigger>
                    <SelectContent className="glass">
                      <SelectItem value="walkin">Walk-in Hub</SelectItem>
                      <SelectItem value="referral">Partner Referral</SelectItem>
                      <SelectItem value="direct">Direct Lead (Nexus)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
              <Button type="button" variant="ghost" onClick={() => setIsAddingLead(false)} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Cancel</Button>
              <Button type="submit" disabled={isSubmittingLead} className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">
                {isSubmittingLead ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Distributing...</> : <>Inject Lead <ArrowRight className="w-4 h-4 ml-2" /></>}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
