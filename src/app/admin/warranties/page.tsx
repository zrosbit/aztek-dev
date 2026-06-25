"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  MoreVertical, 
  ExternalLink, 
  AlertTriangle, 
  Database, 
  RefreshCw, 
  Clock, 
  Activity, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  Mail, 
  Send, 
  Loader2,
  ChevronRight,
  ArrowRight,
  Shield,
  MapPin,
  Camera,
  UserCheck,
  Bell,
  TrendingUp,
  MessageSquare,
  ShieldAlert,
  Zap,
  History,
  Code,
  Link as LinkIcon,
  Layers,
  Settings,
  BarChart3,
  Globe,
  QrCode
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts"

export default function AdminWarrantiesPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [voidingId, setVoidingId] = useState<string | null>(null)
  const [selectedClaim, setSelectedClaim] = useState<any>(null)
  const [isSyncing, setIsSyncing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const analyticsData = [
    { name: "Mon", issued: 42, claims: 2 },
    { name: "Tue", issued: 38, claims: 1 },
    { name: "Wed", issued: 55, claims: 3 },
    { name: "Thu", issued: 48, claims: 0 },
    { name: "Fri", issued: 72, claims: 4 },
    { name: "Sat", issued: 85, claims: 2 },
    { name: "Sun", issued: 32, claims: 1 },
  ]

  const registry = [
    { id: "AZ-2026-KA-11242", customer: "Rahul M.", product: "PPF Full Body", partner: "Elite Wraps", status: "ACTIVE", eWfy: "EWFY-88219", date: "2h ago" },
    { id: "AZ-2026-MH-11239", customer: "Amit S.", product: "9H Ceramic", partner: "Moto Shield", status: "PENDING", eWfy: "Awaiting Sync", date: "1d ago" },
  ]

  const verificationLogs = [
    { id: "V-9942", warrantyId: "AZ-2026-KA-11242", location: "Bengaluru, IN", device: "iPhone / Safari", time: "14m ago", status: "VERIFIED" },
    { id: "V-9941", warrantyId: "AZ-NONE-0000", location: "Unknown (IP: 142.1.2.4)", device: "Chrome", time: "1h ago", status: "FAILED" },
  ]

  const syncQueue = [
    { id: "AZ-2026-KA-11250", target: "eWarrantyFy", error: "422: PRODUCT_UNKNOWN", retryCount: 2, time: "45m ago" },
  ]

  const claimsQueue = [
    { 
      id: "AZ-CLM-BLR-00042", 
      warrantyId: "AZ-2026-KA-11242", 
      customer: "Rahul M.", 
      type: "Edge Lifting", 
      status: "NEW", 
      priority: "CRITICAL",
      description: "Observed minor film lift along the lower radiator intake vent on the passenger side.",
      originalJob: { id: "AZ-JOB-BLR-00421", installer: "Elite Wraps Bangalore" }
    },
  ]

  const handleManualSync = () => {
    setIsSyncing(true)
    setTimeout(() => {
      setIsSyncing(false)
      toast({ title: "Sync Protocol Successful", description: "Records transmitted to global registry." })
    }, 2000)
  }

  const handleVoid = () => {
    toast({ variant: "destructive", title: "Warranty Voided", description: `Policy ${voidingId} revoked.` })
    setVoidingId(null)
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Warranty <span className="text-primary italic">Governance</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-tight max-w-xl">Technical Registry Control, Forensic Lifecycle Management & API Integration Hub</p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5" onClick={handleManualSync} disabled={isSyncing}>
              {isSyncing ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />} Force Sync Engine
           </Button>
           <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl">
              <ShieldCheck className="w-4 h-4" /> Global Cert Center
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Active Policies", val: "1,248", sub: "Verified Registry", icon: ShieldCheck, color: "text-blue-500" },
          { label: "Claim Velocity", val: "1.2%", sub: "Trailing 30d", icon: TrendingUp, color: "text-green-500" },
          { label: "Forensic Flags", val: "09", sub: "Action Required", icon: AlertTriangle, color: "text-red-500" },
          { label: "Verification Rate", val: "428", sub: "Daily Scans", icon: Activity, color: "text-purple-500" }
        ].map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all p-6 space-y-4">
             <div className="flex items-center justify-between">
                <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", s.color)}>
                   <s.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[8px] border-white/10 uppercase font-bold">Sync Active</Badge>
             </div>
             <div className="space-y-1">
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
            <TabsTrigger value="overview" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Dashboard</TabsTrigger>
            <TabsTrigger value="registry" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Registry</TabsTrigger>
            <TabsTrigger value="claims" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Claims Hub</TabsTrigger>
            <TabsTrigger value="verification" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Verification Logs</TabsTrigger>
            <TabsTrigger value="tech-ops" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Technical Ops</TabsTrigger>
            <TabsTrigger value="mapping" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Product Mapping</TabsTrigger>
            <TabsTrigger value="settings" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl p-8">
                   <CardHeader className="px-0 pt-0 pb-10 border-b border-white/5 flex flex-row items-center justify-between">
                      <div className="space-y-1">
                         <CardTitle className="text-sm uppercase tracking-widest">Issuance & Claims Velocity</CardTitle>
                         <p className="text-[10px] font-bold text-muted-foreground uppercase">Real-time telemetry from national nodes</p>
                      </div>
                      <BarChart3 className="w-5 h-5 text-primary opacity-20" />
                   </CardHeader>
                   <div className="h-[300px] w-full pt-10">
                      <ResponsiveContainer width="100%" height="100%">
                         <AreaChart data={analyticsData}>
                            <defs>
                               <linearGradient id="colorIssued" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/><stop offset="95%" stopColor="#2563EB" stopOpacity={0}/></linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                            <YAxis hide />
                            <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                            <Area type="monotone" dataKey="issued" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorIssued)" />
                            <Area type="monotone" dataKey="claims" stroke="#EF4444" strokeWidth={2} fill="transparent" />
                         </AreaChart>
                      </ResponsiveContainer>
                   </div>
                </Card>

                <div className="space-y-8">
                   <Card className="bg-primary/5 border-primary/20 p-8 rounded-[32px] space-y-6">
                      <div className="flex items-center gap-3 text-primary">
                         <Zap className="w-6 h-6" />
                         <h4 className="text-sm font-bold uppercase tracking-widest">System Health</h4>
                      </div>
                      <div className="space-y-4">
                         {[
                           { l: "Registry Sync", v: "100%", status: "success" },
                           { l: "Verification Uptime", v: "99.98%", status: "success" },
                           { l: "Claim Response SLA", v: "4.2h", status: "warning" },
                         ].map(m => (
                           <div key={m.l} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                              <span className="text-muted-foreground">{m.l}</span>
                              <span className={m.status === 'success' ? "text-az-success" : "text-az-warning"}>{m.v}</span>
                           </div>
                         ))}
                      </div>
                   </Card>

                   <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary">Network Distribution</h4>
                      <div className="space-y-4 pt-4 border-t border-white/5">
                         {["PPF", "Ceramic", "Moto", "Solar"].map(cat => (
                           <div key={cat} className="space-y-1.5">
                              <div className="flex justify-between text-[8px] font-bold uppercase text-muted-foreground">
                                 <span>{cat} Series</span>
                                 <span>{Math.floor(Math.random() * 40 + 60)}% Utilization</span>
                              </div>
                              <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: `${Math.random() * 40 + 60}%` }} /></div>
                           </div>
                         ))}
                      </div>
                   </Card>
                </div>
             </div>
          </TabsContent>

          <TabsContent value="registry" className="space-y-6 animate-in fade-in duration-500">
             <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                   <Input placeholder="Search Registry by ID, Customer, VIN or Phone..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
                </div>
                <div className="flex gap-2">
                   <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/5 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
                      <Filter className="w-4 h-4" /> Filter Status
                   </Button>
                </div>
             </div>

             <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
                <table className="w-full text-left">
                   <thead className="bg-white/5 border-b border-white/5">
                      <tr>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Warranty Terminal ID</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Customer & Asset</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Installing Partner</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Policy Status</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Age</th>
                         <th className="p-6"></th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                      {registry.map((r, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                           <td className="p-6">
                              <div className="space-y-1">
                                 <p className="font-mono text-xs font-bold text-primary uppercase">{r.id}</p>
                                 <p className="text-[9px] text-muted-foreground font-bold uppercase">eWfy: {r.eWfy}</p>
                              </div>
                           </td>
                           <td className="p-6">
                              <div className="space-y-0.5">
                                 <p className="font-bold text-sm text-foreground uppercase tracking-tight">{r.customer}</p>
                                 <p className="text-[10px] text-muted-foreground font-bold uppercase">{r.product}</p>
                              </div>
                           </td>
                           <td className="p-6 text-center text-xs font-bold uppercase text-foreground">{r.partner}</td>
                           <td className="p-6 text-center">
                              <Badge className={cn(
                                "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                                r.status === 'ACTIVE' ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                              )}>{r.status}</Badge>
                           </td>
                           <td className="p-6 text-right text-[10px] font-bold text-muted-foreground uppercase">{r.date}</td>
                           <td className="p-6 text-right">
                              <div className="flex justify-end gap-2">
                                 <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><QrCode className="w-4 h-4" /></Button>
                                 <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><Mail className="w-4 h-4" /></Button>
                                 <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-red-500" onClick={() => setVoidingId(r.id)}><XCircle className="w-4 h-4" /></Button>
                              </div>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </TabsContent>

          <TabsContent value="claims" className="space-y-6 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 gap-4">
                {claimsQueue.map((claim) => (
                  <Card key={claim.id} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-2xl overflow-hidden group">
                     <CardContent className="p-8 flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6 w-full">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 shadow-inner">
                                    <AlertTriangle className="w-6 h-6" />
                                 </div>
                                 <div>
                                    <p className="text-[10px] font-bold text-primary font-mono">{claim.id}</p>
                                    <h4 className="text-xl font-bold uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors">{claim.customer}</h4>
                                 </div>
                              </div>
                              <Badge className="bg-red-500 text-white text-[9px] uppercase font-bold tracking-widest">{claim.priority} PRIORITY</Badge>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div className="space-y-1">
                                 <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Policy Context</p>
                                 <p className="text-sm font-bold uppercase">{claim.warrantyId}</p>
                              </div>
                              <div className="space-y-1">
                                 <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Defect Type</p>
                                 <p className="text-sm font-medium uppercase text-foreground">{claim.type}</p>
                              </div>
                              <div className="space-y-1">
                                 <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Original Lab</p>
                                 <p className="text-sm font-bold uppercase text-primary">{claim.originalJob.installer}</p>
                              </div>
                           </div>
                        </div>

                        <div className="flex gap-2 w-full lg:w-auto">
                           <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 bg-white/5">Forensic Detail</Button>
                           <Button variant="gradient" className="flex-1 lg:flex-none h-14 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2">Launch Review Terminal <ChevronRight className="w-4 h-4" /></Button>
                        </div>
                     </CardContent>
                  </Card>
                ))}
             </div>
          </TabsContent>

          <TabsContent value="verification" className="space-y-6 animate-in fade-in duration-500">
             <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
                <table className="w-full text-left">
                   <thead className="bg-white/5 border-b border-white/5">
                      <tr>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Scan Terminal ID</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Warranty Reference</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Geo-Location / Device</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Result</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Timestamp</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                      {verificationLogs.map((log) => (
                        <tr key={log.id} className="hover:bg-white/[0.02] transition-colors">
                           <td className="p-6 font-mono text-xs font-bold text-muted-foreground uppercase">{log.id}</td>
                           <td className="p-6 font-bold text-xs uppercase text-primary">{log.warrantyId}</td>
                           <td className="p-6">
                              <div className="space-y-0.5">
                                 <p className="text-[11px] font-bold text-foreground flex items-center gap-2"><MapPin className="w-3 h-3" /> {log.location}</p>
                                 <p className="text-[9px] text-muted-foreground uppercase font-bold">{log.device}</p>
                              </div>
                           </td>
                           <td className="p-6 text-center">
                              <Badge variant="outline" className={cn(
                                "text-[8px] font-bold uppercase px-3 py-0.5",
                                log.status === 'VERIFIED' ? "border-green-500/50 text-green-500 bg-green-500/5" : "border-red-500/50 text-red-500 bg-red-500/5"
                              )}>{log.status}</Badge>
                           </td>
                           <td className="p-6 text-right text-[10px] font-bold text-muted-foreground uppercase">{log.time}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </TabsContent>

          <TabsContent value="tech-ops" className="space-y-8 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10 shadow-2xl p-8 space-y-6">
                   <div className="flex items-center justify-between border-b border-white/5 pb-6">
                      <div className="flex items-center gap-4">
                         <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                            <Database className="w-5 h-5" />
                         </div>
                         <CardTitle className="text-sm uppercase tracking-widest">Failed Sync Queue</CardTitle>
                      </div>
                      <Badge className="bg-red-500 text-white font-bold uppercase text-[8px]">{syncQueue.length} ERRORS</Badge>
                   </div>
                   <div className="space-y-4">
                      {syncQueue.map((item) => (
                        <div key={item.id} className="p-5 bg-background/40 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-red-500/30 transition-all">
                           <div className="space-y-1">
                              <p className="text-xs font-mono font-bold text-primary uppercase">{item.id}</p>
                              <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest">{item.error}</p>
                           </div>
                           <div className="flex items-center gap-6">
                              <span className="text-[9px] text-muted-foreground font-bold uppercase">{item.time}</span>
                              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><RefreshCw className="w-4 h-4" /></Button>
                           </div>
                        </div>
                      ))}
                   </div>
                </Card>

                <Card className="bg-white/5 border-white/10 shadow-2xl p-8 space-y-8">
                   <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                         <Code className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-sm uppercase tracking-widest">API & Webhook Infrastructure</CardTitle>
                   </div>
                   <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                         <div className="space-y-0.5">
                            <p className="text-[10px] font-bold uppercase text-foreground">eWarrantyFy Gateway</p>
                            <p className="text-[9px] text-az-success font-bold uppercase">Operational · 112ms Latency</p>
                         </div>
                         <div className="w-2 h-2 rounded-full bg-az-success animate-pulse" />
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                         <div className="space-y-0.5">
                            <p className="text-[10px] font-bold uppercase text-foreground">Outbound Webhooks</p>
                            <p className="text-[9px] text-muted-foreground font-bold uppercase">12 Deliveries today · 0 Failures</p>
                         </div>
                         <Button variant="ghost" size="sm" className="text-[9px] uppercase font-bold text-primary">Logs</Button>
                      </div>
                   </div>
                </Card>
             </div>
          </TabsContent>

          <TabsContent value="mapping" className="animate-in fade-in duration-500">
             <Card className="bg-white/5 border-white/10 shadow-2xl overflow-hidden">
                <CardHeader className="p-8 border-b border-white/5 bg-white/[0.01] flex flex-row items-center justify-between">
                   <div className="space-y-1">
                      <CardTitle className="text-sm uppercase tracking-widest">Global Product Mapping</CardTitle>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Define warranty terms and coverage matrices by Product Series</p>
                   </div>
                   <Button variant="outline" size="sm" className="h-9 rounded-xl border-white/10 text-[9px] font-bold uppercase">+ Add Series</Button>
                </CardHeader>
                <CardContent className="p-0">
                   <table className="w-full text-left">
                      <thead className="bg-white/5 border-b border-white/5">
                         <tr>
                            <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Product Series</th>
                            <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Default Term</th>
                            <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Coverage Code</th>
                            <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Auto-Sync</th>
                            <th className="p-6"></th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {[
                           { name: "Automotive Ultra PPF", term: "10 Years", code: "AUTO_PPF_V2", sync: true },
                           { name: "9H Ceramic Matrix", term: "5 Years", code: "CER_ARMOR_9H", sync: true },
                           { name: "Moto Shield Pro", term: "7 Years", code: "MOTO_KIT_PRO", sync: true },
                           { name: "Architectural Solar", term: "10 Years", code: "ARCH_SOLAR_V4", sync: false },
                         ].map((p, i) => (
                           <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                              <td className="p-6 font-bold text-xs uppercase tracking-widest text-foreground">{p.name}</td>
                              <td className="p-6 text-sm font-headline font-bold text-primary">{p.term}</td>
                              <td className="p-6 font-mono text-xs font-bold text-muted-foreground">{p.code}</td>
                              <td className="p-6 text-center">
                                 <div className={cn("w-2 h-2 rounded-full mx-auto", p.sync ? "bg-az-success" : "bg-white/10")} />
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

          <TabsContent value="settings" className="animate-in fade-in duration-500">
             <Card className="bg-white/5 border-white/10 shadow-2xl p-8 max-w-4xl space-y-12">
                <div className="space-y-6">
                   <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary border-b border-white/5 pb-4">Issuance Protocols</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[32px] space-y-4">
                         <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Auto-Generate PDF Certificate</p>
                         <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase text-foreground">Enabled</span>
                            <div className="w-10 h-6 bg-primary rounded-full flex items-center justify-end px-1"><div className="w-4 h-4 bg-white rounded-full" /></div>
                         </div>
                      </div>
                      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[32px] space-y-4">
                         <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Mandatory Job Card Link</p>
                         <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase text-foreground">Strict Mode</span>
                            <div className="w-10 h-6 bg-primary rounded-full flex items-center justify-end px-1"><div className="w-4 h-4 bg-white rounded-full" /></div>
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

      {/* Forensic Claim Detail Modal */}
      <Dialog open={!!selectedClaim} onOpenChange={() => setSelectedClaim(null)}>
        <DialogContent className="max-w-6xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl h-[90vh] flex flex-col">
          <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">{selectedClaim?.id}</DialogTitle>
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-[9px] uppercase font-bold tracking-widest">{selectedClaim?.status}</Badge>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">Forensic Audit Terminal Active</span>
                </div>
              </div>
            </div>
            <Button size="icon" variant="ghost" onClick={() => setSelectedClaim(null)} className="rounded-full hover:bg-white/5"><XCircle className="w-6 h-6 text-muted-foreground" /></Button>
          </div>
          <div className="flex-1 overflow-y-auto p-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-8">
                   <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary border-b border-white/5 pb-4">Technical Description</h3>
                   <div className="p-8 rounded-[32px] bg-white/5 border border-white/5 italic text-sm text-muted-foreground leading-relaxed">
                      "{selectedClaim?.description}"
                   </div>
                </div>
                <div className="space-y-8">
                   <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary border-b border-white/5 pb-4">Forensic Metadata</h3>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Original Job</p>
                         <p className="text-xs font-mono font-bold">{selectedClaim?.originalJob.id}</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Linked Studio</p>
                         <p className="text-xs font-bold uppercase">{selectedClaim?.originalJob.installer}</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-end gap-4">
             <Button variant="outline" className="h-12 px-8 rounded-xl border-white/10 text-[10px] uppercase font-bold">Reject with Notes</Button>
             <Button className="h-12 px-12 rounded-xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">Approve Forensic Claim <ArrowRight className="w-4 h-4 ml-2" /></Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Void Dialog */}
      <AlertDialog open={!!voidingId} onOpenChange={() => setVoidingId(null)}>
        <AlertDialogContent className="bg-az-midnight border-white/10">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl uppercase font-headline">Revoke Warranty Policy?</AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-muted-foreground uppercase tracking-tight">
              This action is irreversible. The digital record {voidingId} will be voided in the eWarrantyFy registry and the customer will be notified of the termination.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-xl border-white/10 text-[10px] uppercase font-bold">Cancel</AlertDialogCancel>
            <AlertDialogAction className="rounded-xl bg-red-500 hover:bg-red-600 text-[10px] uppercase font-bold" onClick={handleVoid}>Confirm Revocation</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
