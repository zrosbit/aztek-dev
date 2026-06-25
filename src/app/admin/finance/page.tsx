"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CreditCard, 
  TrendingUp, 
  Clock, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertTriangle,
  Receipt,
  Download,
  Search,
  Filter,
  MoreVertical,
  BarChart3,
  Calendar,
  PieChart,
  ArrowRight,
  DollarSign,
  Wallet,
  Zap,
  Target,
  Loader2,
  FileText,
  History,
  Lock,
  ArrowDownLeft,
  RefreshCw,
  Building2,
  ShieldCheck
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, Cell, PieChart as RePieChart, Pie } from "recharts"
import { toast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"

export default function AdminFinancePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isApproving, setIsApproving] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { label: "Net Network Value", val: "₹1.42 Cr", sub: "Total Receivables", icon: CreditCard, color: "text-blue-500" },
    { label: "Collection Rate", val: "78.4%", sub: "30-Day Velocity", icon: CheckCircle2, color: "text-green-500" },
    { label: "Partner Incentives", val: "₹8.2L", sub: "Pending Payout", icon: Wallet, color: "text-purple-500" },
    { label: "Critical Aging", val: "₹14.2L", sub: "60d+ Past Due", icon: AlertTriangle, color: "text-red-500" }
  ]

  const revenueData = [
    { month: "Jan", val: 4500000 },
    { month: "Feb", val: 5200000 },
    { month: "Mar", val: 6800000 },
    { month: "Apr", val: 6100000 },
    { month: "May", val: 7400000 },
    { month: "Jun", val: 8900000 },
  ]

  const productRevenueMix = [
    { name: "Automotive PPF", value: 55, color: "#0066FF" },
    { name: "Ceramic Matrix", value: 25, color: "#22C55E" },
    { name: "Moto Shield", value: 15, color: "#F59E0B" },
    { name: "Architectural", value: 5, color: "#8B5CF6" },
  ]

  const invoices = [
    { id: "INV-2026-0842", partner: "Elite Wraps Bangalore", amount: "₹4,25,000", status: "ISSUED", age: "12d", type: "Stock Order" },
    { id: "INV-2026-0838", partner: "Moto Shield Pro", amount: "₹1,18,000", status: "OVERDUE", age: "35d", type: "Stock Order" },
    { id: "INV-2026-0835", partner: "Skyline Arch Hub", amount: "₹8,40,000", status: "PAID", age: "N/A", type: "Consultation" },
  ]

  const settlements = [
    { id: "PAY-9942", date: "Oct 26", partner: "Elite Wraps", amount: "₹1,25,000", method: "NEFT", status: "SETTLED" },
    { id: "PAY-9938", date: "Oct 25", partner: "Mumbai Detailing", amount: "₹42,000", method: "IMPS", status: "SETTLED" },
  ]

  const handleApprovePayout = (partner: string) => {
    setIsApproving(partner)
    setTimeout(() => {
      setIsApproving(null)
      toast({
        title: "Payout Approved",
        description: `Commission for ${partner} has been authorized for release.`,
      })
    }, 1500)
  }

  if (!mounted) return null

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Finance <span className="text-primary italic">& Accounts</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-tight">National Treasury Terminal — Revenue Velocity, GST Compliance & Incentive Governance</p>
         </div>
         <div className="flex gap-4">
            <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <Download className="w-4 h-4" /> Export Ledger
            </Button>
            <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl">
              <RefreshCw className="w-4 h-4" /> Synchronize Records
            </Button>
         </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full justify-start overflow-x-auto scrollbar-hide">
          <TabsTrigger value="overview" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Dashboard</TabsTrigger>
          <TabsTrigger value="revenue" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Revenue BI</TabsTrigger>
          <TabsTrigger value="billing" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Partner Billing</TabsTrigger>
          <TabsTrigger value="credit" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Credit Limits</TabsTrigger>
          <TabsTrigger value="commissions" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Commission Mgmt</TabsTrigger>
          <TabsTrigger value="gst" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">GST Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <Card key={s.label} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all group shadow-xl">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", s.color)}>
                          <s.icon className="w-5 h-5" />
                        </div>
                        {s.label === "Critical Aging" && (
                          <Badge className="bg-red-500 text-white border-none animate-pulse">Critical</Badge>
                        )}
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                        <p className="text-3xl font-headline font-bold text-foreground">{s.val}</p>
                        <p className="text-[10px] text-muted-foreground uppercase font-bold">{s.sub}</p>
                    </div>
                  </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl overflow-hidden">
              <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-sm uppercase tracking-widest">Network Collection Velocity</CardTitle>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Realized network revenue accumulation (Trailing 6 Months)</p>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-12">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorRevFin" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0066FF" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      />
                      <Area type="monotone" dataKey="val" stroke="#0066FF" strokeWidth={3} fillOpacity={1} fill="url(#colorRevFin)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 shadow-2xl">
              <CardHeader className="p-8 border-b border-white/5">
                <CardTitle className="text-sm uppercase tracking-widest">Settlement Alerts</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {[
                  { msg: "UTR Mismatch: Elite BLR", type: "Audit Flag", icon: AlertTriangle, color: "text-amber-500" },
                  { msg: "Bulk Payout Authorized", type: "Incentive", icon: CheckCircle2, color: "text-green-500" },
                  { msg: "New Credit Limit Request", type: "Treasury", icon: Zap, color: "text-blue-500" },
                ].map((alert, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/10 transition-all cursor-pointer group">
                    <alert.icon className={cn("w-5 h-5 shrink-0", alert.color)} />
                    <div className="space-y-1">
                      <p className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{alert.msg}</p>
                      <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-muted-foreground">{alert.type} • 2h ago</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full h-12 rounded-xl text-[10px] uppercase font-bold tracking-widest border-white/10 mt-4">View All Activity</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="animate-in fade-in duration-500 space-y-8">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 bg-white/5 border-white/10 p-8 shadow-2xl">
                 <CardHeader className="px-0 pt-0 pb-10 border-b border-white/5">
                    <CardTitle className="text-sm uppercase tracking-widest">Vertical Revenue Distribution</CardTitle>
                    <CardDescription className="text-[10px] font-bold uppercase tracking-widest">Network-wide product category revenue mix</CardDescription>
                 </CardHeader>
                 <div className="h-[350px] w-full pt-10">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={productRevenueMix}>
                          <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                          <YAxis hide />
                          <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                             {productRevenueMix.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.color} />
                             ))}
                          </Bar>
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </Card>

              <div className="space-y-8">
                 <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[40px] space-y-6 relative overflow-hidden group">
                    <div className="space-y-2 relative z-10">
                       <h3 className="text-3xl font-headline font-bold uppercase tracking-tighter">Growth <br /><span className="text-primary italic">Forecasting.</span></h3>
                       <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest leading-relaxed">
                          Projected network yield for Q4 2026 based on historical intake and partner expansion trajectory.
                       </p>
                    </div>
                    <div className="space-y-4 relative z-10 pt-6">
                       <div className="p-4 bg-background/50 rounded-2xl border border-white/5">
                          <p className="text-[9px] font-bold text-muted-foreground uppercase">Expected Yield</p>
                          <p className="text-2xl font-headline font-bold text-primary">₹2.12 Cr</p>
                       </div>
                    </div>
                    <TrendingUp className="absolute -bottom-10 -right-10 w-48 h-48 text-primary opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                 </Card>
              </div>
           </div>
        </TabsContent>

        <TabsContent value="billing" className="animate-in fade-in duration-500 space-y-6">
           <div className="flex gap-4">
              <div className="relative flex-1">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                 <Input placeholder="Search invoices by Partner, ID or Type..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
              </div>
              <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/10 bg-white/5"><Filter className="w-4 h-4" /></Button>
           </div>

           <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
              <table className="w-full text-left">
                 <thead className="bg-white/5 border-b border-white/5">
                    <tr>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Invoice Detail</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Partner Entity</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Classification</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Amount (Gross)</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Aging / Status</th>
                       <th className="p-6"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {invoices.map((inv) => (
                       <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="p-6">
                             <div className="space-y-1">
                                <p className="font-mono text-xs font-bold text-primary uppercase">{inv.id}</p>
                                <p className="text-[9px] text-muted-foreground font-bold uppercase">Oct 24, 2026</p>
                             </div>
                          </td>
                          <td className="p-6 font-bold text-sm uppercase text-foreground">{inv.partner}</td>
                          <td className="p-6">
                             <Badge variant="outline" className="text-[8px] uppercase font-bold border-white/10 px-2 py-0.5 bg-white/5">{inv.type}</Badge>
                          </td>
                          <td className="p-6 text-right font-headline font-bold text-foreground">{inv.amount}</td>
                          <td className="p-6 text-center">
                             <div className="flex flex-col items-center gap-1">
                                <Badge className={cn(
                                   "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                                   inv.status === 'PAID' ? "bg-green-500/10 text-green-500" : 
                                   inv.status === 'OVERDUE' ? "bg-red-500/10 text-red-500 animate-pulse" : "bg-blue-500/10 text-blue-500"
                                )}>{inv.status}</Badge>
                                {inv.status === 'OVERDUE' && <span className="text-[8px] text-red-500 font-bold uppercase">{inv.age} Past Due</span>}
                             </div>
                          </td>
                          <td className="p-6 text-right">
                             <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><MoreVertical className="w-4 h-4" /></Button>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </TabsContent>

        <TabsContent value="credit" className="animate-in fade-in duration-500 space-y-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 shadow-2xl p-10 space-y-8">
                 <div className="space-y-2">
                    <h3 className="text-2xl font-headline font-bold uppercase">Credit Control Terminal</h3>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                       Manage partner technical credit limits and automated financial scoring protocols.
                    </p>
                 </div>
                 <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Base Global Limit (₹)</label>
                          <Input defaultValue="5,00,000" className="h-12 bg-black/20 border-white/10 rounded-xl font-mono text-primary font-bold" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Late Payment Interest %</label>
                          <Input defaultValue="1.5%" className="h-12 bg-black/20 border-white/10 rounded-xl font-mono" />
                       </div>
                    </div>
                    <div className="p-6 bg-primary/5 border border-primary/20 rounded-[32px] space-y-4">
                       <div className="flex items-center gap-3 text-primary">
                          <Lock className="w-5 h-5" />
                          <h4 className="text-[10px] font-bold uppercase tracking-widest">Auto-Freeze Protocol</h4>
                       </div>
                       <div className="flex items-center justify-between p-3 bg-background/40 rounded-xl">
                          <span className="text-[10px] font-bold uppercase">Block Order on 45d Overdue</span>
                          <div className="w-10 h-6 bg-primary rounded-full flex items-center justify-end px-1"><div className="w-4 h-4 bg-white rounded-full" /></div>
                       </div>
                    </div>
                    <Button className="w-full h-14 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">Apply Global Credit Rules</Button>
                 </div>
              </Card>

              <div className="space-y-8">
                 <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-6">
                    <div className="flex justify-between items-center">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Regional Exposure</h4>
                    </div>
                    <div className="space-y-6">
                       {[
                         { hub: "South Hub", val: 82 },
                         { hub: "West Hub", val: 45 },
                         { hub: "North Hub", val: 92 },
                       ].map(h => (
                         <div key={h.hub} className="space-y-2">
                            <div className="flex justify-between text-[9px] font-bold uppercase">
                               <span className="text-muted-foreground">{h.hub} Utilization</span>
                               <span className={cn(h.val > 90 ? "text-red-500" : "text-foreground")}>{h.val}%</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                               <div className={cn("h-full transition-all duration-1000", h.val > 90 ? "bg-red-500" : "bg-primary")} style={{ width: `${h.val}%` }} />
                            </div>
                         </div>
                       ))}
                    </div>
                 </Card>
              </div>
           </div>
        </TabsContent>

        <TabsContent value="commissions" className="animate-in fade-in duration-500 space-y-6">
           <div className="grid grid-cols-1 gap-4">
              {[
                { partner: "Elite Wraps", period: "Sep 2026", rev: "₹12.5L", rate: "12%", amount: "₹1,50,000", status: "CALCULATED" },
                { partner: "Moto Pro Pune", period: "Sep 2026", rev: "₹8.4L", rate: "10%", amount: "₹84,000", status: "APPROVED" },
                { partner: "Skyline Hub", period: "Sep 2026", rev: "₹15.2L", rate: "15%", amount: "₹2,28,000", status: "SETTLED" },
              ].map((inc, i) => (
                <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-xl overflow-hidden group">
                  <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-10">
                     <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Partner Entity</p>
                           <h4 className="font-bold text-sm uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{inc.partner}</h4>
                           <p className="text-[10px] text-muted-foreground uppercase font-bold">{inc.period}</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Eligible Revenue</p>
                           <p className="text-sm font-bold text-foreground">{inc.rev}</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Technical Rate</p>
                           <Badge variant="outline" className="text-[10px] text-primary border-primary/20 bg-primary/5">{inc.rate}</Badge>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Payable Incentive</p>
                           <p className="text-lg font-headline font-bold text-primary">{inc.amount}</p>
                        </div>
                     </div>
                     <div className="flex flex-col items-center gap-3">
                        <Badge className={cn(
                           "text-[9px] uppercase font-bold tracking-widest px-4 py-1",
                           inc.status === "SETTLED" ? "bg-green-500/10 text-green-500" : 
                           inc.status === "APPROVED" ? "bg-blue-500/10 text-blue-500" : "bg-amber-500/10 text-amber-500"
                        )}>{inc.status}</Badge>
                        {inc.status === "CALCULATED" && (
                           <Button 
                             size="sm" 
                             className="h-8 text-[9px] uppercase font-bold tracking-widest px-6"
                             onClick={() => handleApprovePayout(inc.partner)}
                             disabled={isApproving === inc.partner}
                           >
                             {isApproving === inc.partner ? <Loader2 className="w-3 h-3 animate-spin" /> : "Authorize Payout"}
                           </Button>
                        )}
                     </div>
                  </CardContent>
                </Card>
              ))}
           </div>
        </TabsContent>

        <TabsContent value="gst" className="animate-in fade-in duration-500">
           <Card className="p-20 border-2 border-dashed border-white/10 rounded-[40px] text-center space-y-8 bg-white/[0.01]">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto border border-primary/20">
                 <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-3">
                 <h3 className="text-2xl font-headline font-bold uppercase tracking-tight text-foreground">GST Compliance Hub</h3>
                 <p className="text-sm text-muted-foreground max-w-md mx-auto font-medium uppercase tracking-widest leading-relaxed">
                    Generate structured GSTR-1 data packs and partner tax statements. All records are synchronized with national accounting standards.
                 </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                 <Button variant="outline" className="h-14 px-12 rounded-2xl border-white/10 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-primary transition-all">Download GSTR-1 Pack</Button>
                 <Button variant="outline" className="h-14 px-12 rounded-2xl border-white/10 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-primary transition-all">Monthly Statements</Button>
              </div>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
