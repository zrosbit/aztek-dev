"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ShieldAlert, 
  History, 
  Search, 
  Filter, 
  UserX, 
  RefreshCcw, 
  FileText, 
  AlertTriangle,
  Clock,
  MoreVertical,
  CheckCircle2,
  XCircle
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function PartnerCompliancePage() {
  const suspended = [
    { name: "South Hub Chennai", reason: "KYC_EXPIRED", since: "2d ago", hub: "BLR HQ", status: "SUSPENDED" },
    { name: "Rapid Wraps Delhi", reason: "POLICY_BREACH", since: "1w ago", hub: "DEL Hub", status: "SUSPENDED" },
  ]

  const audits = [
    { user: "Sachin R.", action: "PARTNER_SUSPEND", target: "South Hub", time: "2d ago", reason: "Compliance Audit" },
    { user: "Nadeem S.", action: "TIER_UPGRADE", target: "Elite Wraps", time: "5d ago", reason: "Perf Review" },
    { user: "System", action: "AUTO_KYC_PASS", target: "Mumbai Hub", time: "1w ago", reason: "Expiry Refresh" },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground flex items-center gap-3">
                 <ShieldAlert className="w-4 h-4 text-red-500" /> Suspension Registry
              </h3>
              <Badge className="bg-red-500 text-white font-bold uppercase text-[8px] border-none">{suspended.length} Active</Badge>
           </div>
           
           <div className="space-y-4">
              {suspended.map((p) => (
                <Card key={p.name} className="bg-red-500/5 border-red-500/10 hover:border-red-500/30 transition-all shadow-xl overflow-hidden group">
                  <CardContent className="p-6 flex flex-col md:flex-row items-center gap-10">
                     <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                        <UserX className="w-6 h-6" />
                     </div>
                     <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Partner Studio</p>
                           <h4 className="text-lg font-bold uppercase tracking-tighter text-foreground group-hover:text-red-500 transition-colors">{p.name}</h4>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Violation Code</p>
                           <Badge variant="outline" className="text-[10px] border-red-500/20 text-red-500 uppercase">{p.reason}</Badge>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Suspended On</p>
                           <p className="text-sm font-bold text-foreground">{p.since}</p>
                        </div>
                     </div>
                     <Button variant="outline" className="h-10 px-6 rounded-xl border-white/10 text-[9px] uppercase font-bold gap-2 hover:bg-green-500 hover:text-white hover:border-none transition-all">
                        <RefreshCcw className="w-3.5 h-3.5" /> Re-Instantiate
                     </Button>
                  </CardContent>
                </Card>
              ))}
           </div>
        </div>

        <div className="space-y-8">
           <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground flex items-center gap-3">
                 <History className="w-4 h-4 text-primary" /> Admin Audit Log
              </h3>
           </div>
           <div className="space-y-4">
              {audits.map((a, i) => (
                <div key={i} className="p-5 bg-white/5 border border-white/5 rounded-2xl space-y-3 hover:border-primary/20 transition-all group">
                   <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-[8px] font-bold uppercase tracking-widest border-white/10 text-primary">{a.action}</Badge>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase">{a.time}</span>
                   </div>
                   <div>
                      <p className="text-sm font-bold uppercase tracking-tight text-foreground">{a.target}</p>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase mt-1">Reason: {a.reason}</p>
                   </div>
                   <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                         <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-[9px] font-bold uppercase text-muted-foreground">Authorized by {a.user}</span>
                   </div>
                </div>
              ))}
              <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10">Full Transaction History</Button>
           </div>
        </div>
      </div>
    </div>
  )
}
