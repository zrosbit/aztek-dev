"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  Shield, 
  Fingerprint, 
  History, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Smartphone,
  Globe,
  Lock,
  Building2,
  Users2,
  Key,
  Eye,
  Edit,
  Trash2,
  ArrowRight,
  Loader2,
  Target,
  GraduationCap,
  Wallet
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function AdminUserManagement() {
  const [activeTab, setActiveTab] = useState("directory")
  const [mounted, setMounted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { label: "Total Users", val: "42", sub: "Active Admins", icon: Users, color: "text-blue-500" },
    { label: "Active Roles", val: "08", sub: "Defined Matrix", icon: Shield, color: "text-purple-500" },
    { label: "Login Velocity", val: "142", sub: "Last 24 Hours", icon: Zap, color: "text-amber-500" },
    { label: "Security Flags", val: "00", sub: "Identity Health", icon: ShieldCheck, color: "text-green-500" },
  ]

  const userDirectory = [
    { id: "USR-001", name: "Sachin R.", email: "sachin@aztek.tech", role: "Super Admin", dept: "Executive", status: "Active", lastLogin: "2m ago" },
    { id: "USR-008", name: "Nadeem S.", email: "nadeem@aztek.tech", role: "Auditor", dept: "Quality Control", status: "Active", lastLogin: "14m ago" },
    { id: "USR-014", name: "Anjali K.", email: "anjali@aztek.tech", role: "Manager", dept: "Network Ops", status: "Away", lastLogin: "2h ago" },
    { id: "USR-022", name: "Vikram P.", email: "vikram@aztek.tech", role: "Analyst", dept: "Finance", status: "Inactive", lastLogin: "1w ago" },
  ]

  const roles = [
    { name: "Super Admin", users: 3, access: "Full System", color: "text-red-500" },
    { name: "Global Manager", users: 5, access: "Departmental", color: "text-purple-500" },
    { name: "Technical Auditor", users: 8, access: "Quality Hubs", color: "text-blue-500" },
    { name: "Support Tier 1", users: 12, access: "Ticketing Only", color: "text-green-500" },
  ]

  const loginHistory = [
    { user: "Sachin R.", ip: "106.51.242.11", location: "Bengaluru, IN", device: "macOS / Chrome", time: "2m ago", status: "Authorized" },
    { user: "Nadeem S.", ip: "122.162.14.8", location: "Pune, IN", device: "iPhone / Safari", time: "14m ago", status: "Authorized" },
    { user: "Anjali K.", ip: "49.36.112.5", location: "Mumbai, IN", device: "Windows / Edge", time: "2h ago", status: "Authorized" },
  ]

  const handleAction = (msg: string) => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      toast({ title: "Registry Updated", description: msg })
    }, 1500)
  }

  if (!mounted) return null

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">User <span className="text-primary italic">Management</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-tight">Identity Governance, Role-Based Access Control & Security Logging</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5" onClick={() => handleAction("Exporting forensic identity log...")}>
            <History className="w-4 h-4" /> Security Audit
          </Button>
          <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl" onClick={() => handleAction("Initializing invitation protocol...")}>
            <Plus className="w-4 h-4" /> Invite Team Member
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all p-6 space-y-4 shadow-xl">
             <div className="flex items-center justify-between">
                <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", s.color)}>
                   <s.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[8px] border-white/10 uppercase font-bold">Sync Level A</Badge>
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
          <TabsTrigger value="directory" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">User Directory</TabsTrigger>
          <TabsTrigger value="roles" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="topology" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Topology (Depts/Teams)</TabsTrigger>
          <TabsTrigger value="history" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Login History</TabsTrigger>
          <TabsTrigger value="settings" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Security Protocols</TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-6 animate-in fade-in duration-500">
           <div className="flex gap-4">
              <div className="relative flex-1">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                 <Input placeholder="Search users by name, email, department or ID..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
              </div>
              <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/5 bg-white/5"><Filter className="w-4 h-4" /></Button>
           </div>

           <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
              <table className="w-full text-left">
                 <thead className="bg-white/5 border-b border-white/5">
                    <tr>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Admin Entity</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Functional Dept</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">System Role</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Last Activity</th>
                       <th className="p-6"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {userDirectory.map((user) => (
                      <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                         <td className="p-6">
                            <div className="flex items-center gap-4">
                               <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner font-bold text-xs">
                                  {user.name.split(' ').map(n => n[0]).join('')}
                               </div>
                               <div className="space-y-0.5">
                                  <p className="font-bold text-sm text-foreground uppercase tracking-tight">{user.name}</p>
                                  <p className="text-[10px] text-muted-foreground font-mono">{user.email}</p>
                               </div>
                            </div>
                         </td>
                         <td className="p-6">
                            <p className="text-xs font-bold text-foreground uppercase">{user.dept}</p>
                         </td>
                         <td className="p-6">
                            <Badge variant="outline" className="text-[8px] uppercase font-bold tracking-widest border-white/10 px-3">{user.role}</Badge>
                         </td>
                         <td className="p-6 text-center">
                            <div className="flex items-center justify-center gap-2">
                               <div className={cn(
                                 "w-1.5 h-1.5 rounded-full",
                                 user.status === 'Active' ? "bg-green-500 shadow-[0_0_10px_#22C55E]" : 
                                 user.status === 'Away' ? "bg-amber-500" : "bg-white/10"
                               )} />
                               <span className="text-[9px] font-bold uppercase text-muted-foreground">{user.status}</span>
                            </div>
                         </td>
                         <td className="p-6 text-right">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">{user.lastLogin}</span>
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

        <TabsContent value="roles" className="animate-in fade-in duration-500 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roles.map((role) => (
                <Card key={role.name} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all p-8 space-y-6 shadow-2xl relative overflow-hidden group">
                   <div className="space-y-1 relative z-10">
                      <p className={cn("text-[10px] font-bold uppercase tracking-widest", role.color)}>{role.name}</p>
                      <h4 className="text-2xl font-headline font-bold text-foreground">{role.users} <span className="text-xs font-medium text-muted-foreground">Users</span></h4>
                   </div>
                   <div className="pt-4 border-t border-white/5 relative z-10">
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Access Profile</p>
                      <div className="flex items-center justify-between">
                         <span className="text-xs font-bold text-foreground">{role.access}</span>
                         <Button variant="ghost" size="icon" className="h-8 w-8 text-primary"><Edit className="w-3.5 h-3.5" /></Button>
                      </div>
                   </div>
                   <Shield className="absolute -bottom-6 -right-6 w-24 h-24 text-primary opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                </Card>
              ))}
           </div>

           <Card className="bg-white/5 border-white/10 shadow-2xl overflow-hidden">
              <CardHeader className="p-8 border-b border-white/5 bg-white/[0.01] flex flex-row items-center justify-between">
                 <div className="space-y-1">
                    <CardTitle className="text-sm uppercase tracking-widest">Global Permission Matrix</CardTitle>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">Module-level authorization mapping across system roles</p>
                 </div>
                 <Button variant="outline" size="sm" className="h-9 rounded-xl border-white/10 text-[9px] font-bold uppercase">+ Add Rule</Button>
              </CardHeader>
              <CardContent className="p-0">
                 <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/5">
                       <tr>
                          <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Module Terminal</th>
                          <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Super Admin</th>
                          <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Manager</th>
                          <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Auditor</th>
                          <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Support</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {[
                         { module: "Finance & Accounts", permissions: [true, true, false, false] },
                         { module: "Inventory Command", permissions: [true, true, true, false] },
                         { module: "Warranty Registry", permissions: [true, true, true, true] },
                         { module: "System Config", permissions: [true, false, false, false] },
                       ].map((m) => (
                         <tr key={m.module} className="hover:bg-white/[0.01] transition-colors">
                            <td className="p-6 font-bold text-xs uppercase tracking-widest text-foreground">{m.module}</td>
                            {m.permissions.map((p, i) => (
                              <td key={i} className="p-6 text-center">
                                 <div className={cn(
                                   "w-2 h-2 rounded-full mx-auto shadow-[0_0_10px_currentColor]",
                                   p ? "bg-primary text-primary" : "bg-white/5 text-transparent"
                                 )} />
                              </td>
                            ))}
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="topology" className="animate-in fade-in duration-500 space-y-8">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                 <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground flex items-center gap-3">
                       <Building2 className="w-4 h-4 text-primary" /> functional Hierarchy
                    </h3>
                    <Button variant="outline" size="sm" className="h-8 text-[8px] uppercase font-bold border-white/10 bg-white/5">+ New Department</Button>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Executive Strategy", head: "Sachin R.", count: 4, icon: Target },
                      { name: "Network Operations", head: "Anjali K.", count: 12, icon: Globe },
                      { name: "Quality & Academy", head: "Nadeem S.", count: 8, icon: GraduationCap },
                      { name: "Finance & Treasury", head: "Vikram P.", count: 6, icon: Wallet },
                    ].map((dept) => (
                      <Card key={dept.name} className="bg-white/5 border-white/10 hover:border-primary/40 transition-all p-6 space-y-6 shadow-xl group">
                         <div className="flex items-center justify-between">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                               <dept.icon className="w-6 h-6" />
                            </div>
                            <Badge variant="outline" className="text-[8px] border-white/10 uppercase font-bold">{dept.count} Members</Badge>
                         </div>
                         <div className="space-y-1">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{dept.name}</h4>
                            <p className="text-[9px] text-muted-foreground uppercase font-bold">Director: {dept.head}</p>
                         </div>
                         <Button variant="ghost" size="sm" className="w-full justify-between h-9 px-0 text-[9px] uppercase font-bold text-primary group-hover:translate-x-1 transition-transform">
                            Manage Teams <ArrowRight className="w-3 h-3" />
                         </Button>
                      </Card>
                    ))}
                 </div>
              </div>

              <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-8 shadow-2xl">
                 <div className="flex items-center gap-4 text-primary border-b border-white/5 pb-6">
                    <Users2 className="w-6 h-6" />
                    <h3 className="text-sm font-bold uppercase tracking-widest">Active System Teams</h3>
                 </div>
                 <div className="space-y-4">
                    {[
                      { name: "Support Tier 1", users: 8, status: "Active" },
                      { name: "South Hub Auditors", users: 4, status: "Active" },
                      { name: "Supply Chain Ops", users: 5, status: "On-Call" },
                      { name: "Platform Dev", users: 12, status: "Active" },
                    ].map((team) => (
                      <div key={team.name} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer">
                         <div className="space-y-0.5">
                            <p className="text-xs font-bold uppercase text-foreground">{team.name}</p>
                            <p className="text-[8px] text-muted-foreground font-bold uppercase">{team.users} Members Assigned</p>
                         </div>
                         <Badge variant="outline" className="text-[8px] border-white/10 bg-white/5 uppercase">{team.status}</Badge>
                      </div>
                    ))}
                 </div>
                 <Button variant="outline" className="w-full h-12 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/5">Create Dynamic Cluster</Button>
              </Card>
           </div>
        </TabsContent>

        <TabsContent value="history" className="animate-in fade-in duration-500">
           <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
              <table className="w-full text-left">
                 <thead className="bg-white/5 border-b border-white/5">
                    <tr>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground pl-10">Admin Identity</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Endpoint / IP</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Geo-Location</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Auth Result</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Timestamp</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {loginHistory.map((log, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                         <td className="p-6 pl-10">
                            <div className="flex items-center gap-4">
                               <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary transition-all">
                                  <Fingerprint className="w-4 h-4" />
                               </div>
                               <span className="font-bold text-sm text-foreground uppercase tracking-tight">{log.user}</span>
                            </div>
                         </td>
                         <td className="p-6">
                            <div className="space-y-0.5">
                               <p className="text-xs font-mono font-bold text-foreground">{log.ip}</p>
                               <p className="text-[8px] text-muted-foreground font-bold uppercase">{log.device}</p>
                            </div>
                         </td>
                         <td className="p-6 text-xs font-medium text-foreground uppercase tracking-tighter">
                            {log.location}
                         </td>
                         <td className="p-6 text-center">
                            <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-[8px] font-bold uppercase px-3 py-1">Authorized</Badge>
                         </td>
                         <td className="p-6 text-right text-[10px] font-bold text-muted-foreground uppercase">{log.time}</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </TabsContent>

        <TabsContent value="settings" className="animate-in fade-in duration-500">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 shadow-2xl p-10 space-y-10">
                 <div className="space-y-2">
                    <h3 className="text-2xl font-headline font-bold uppercase">Security Protocol Terminal</h3>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                       Manage global administrative authentication requirements and session encryption standards.
                    </p>
                 </div>
                 <div className="space-y-6">
                    {[
                      { l: "Require Mandatory 2FA for Super Admin", d: "Time-based OTP required for all executive actions.", v: true },
                      { l: "IP Access Restriction (Allowlist)", d: "Restrict admin terminal access to authorized corporate IPs.", v: false },
                      { l: "Session Absolute Timeout", d: "Force log out after 4 hours of activity.", v: true },
                      { l: "Action-Level Encryption Logs", d: "Store cryptographic hashes of all mutation actions.", v: true },
                    ].map(s => (
                      <div key={s.l} className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-primary/20 transition-all">
                         <div className="space-y-1">
                            <p className="text-sm font-bold uppercase text-foreground group-hover:text-primary transition-colors">{s.l}</p>
                            <p className="text-[10px] text-muted-foreground uppercase font-medium">{s.d}</p>
                         </div>
                         <div className={cn("w-10 h-6 rounded-full flex items-center px-1 cursor-pointer transition-all", s.v ? "bg-primary justify-end" : "bg-white/10 justify-start")}>
                            <div className="w-4 h-4 bg-white rounded-full shadow-lg" />
                         </div>
                      </div>
                    ))}
                    <Button className="w-full h-14 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">Apply Network Security Rules</Button>
                 </div>
              </Card>

              <div className="space-y-8">
                 <Card className="bg-primary/5 border-primary/20 p-10 rounded-[40px] space-y-8 relative overflow-hidden group">
                    <div className="relative z-10 space-y-4">
                       <div className="flex items-center gap-4 text-primary">
                          <Key className="w-8 h-8" />
                          <h4 className="text-lg font-headline font-bold uppercase text-foreground">Identity Keys</h4>
                       </div>
                       <p className="text-sm text-muted-foreground font-medium leading-relaxed uppercase tracking-tight">
                          Rotational encryption keys are managed at the node level. Manual key rotation is required every 90 days for technical compliance.
                       </p>
                    </div>
                    <div className="space-y-4 relative z-10">
                       <div className="p-4 bg-background/50 rounded-2xl border border-white/5 flex justify-between items-center">
                          <span className="text-[10px] font-bold uppercase text-muted-foreground">Current API Secret</span>
                          <p className="text-xs font-mono font-bold text-primary">•••••••••••••B17</p>
                       </div>
                       <Button variant="outline" className="w-full h-12 rounded-xl text-[9px] uppercase font-bold tracking-widest border-primary/30 text-primary">Rotate Identity Cluster</Button>
                    </div>
                    <Lock className="absolute -bottom-10 -right-10 w-48 h-48 text-primary opacity-5 -rotate-12" />
                 </Card>
              </div>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
