"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  History, 
  Search, 
  Filter, 
  Download, 
  ShieldAlert, 
  User, 
  Clock, 
  ArrowRight
} from "lucide-react"

export default function AuditLogPage() {
  const logs = [
    { user: "Sachin R.", action: "PARTNER_TIER_UPGRADE", record: "Elite Wraps", time: "2m ago", details: "Certified → Gold" },
    { user: "Nadeem S.", action: "LEAD_REASSIGNED", record: "L-9921", time: "14m ago", details: "Moto Shield → Gotham" },
    { user: "System", action: "AUTO_ROUTING_SUCCESS", record: "L-9942", time: "1h ago", details: "City: Bangalore" },
    { user: "Jeho J.", action: "WARRANTY_VOIDED", record: "AZ-11242", time: "4h ago", details: "Policy breach detected" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">Audit <span className="text-primary italic">Ledger</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Immutable Transaction History & Forensic Activity Log</p>
         </div>
         <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2">
            <Download className="w-4 h-4" /> Export CSV
         </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input placeholder="Filter logs by User, Action ID or Record..." className="pl-10 h-12 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <div className="flex gap-2 shrink-0">
           <Button variant="outline" className="h-12 rounded-2xl border-white/5 px-6 text-[10px] uppercase font-bold tracking-widest gap-2">
              <Filter className="w-4 h-4" /> All Actions
           </Button>
           <Button variant="outline" className="h-12 rounded-2xl border-white/5 px-6 text-[10px] uppercase font-bold tracking-widest gap-2">
              <ShieldAlert className="w-4 h-4 text-red-500" /> Security Only
           </Button>
        </div>
      </div>

      <div className="space-y-3">
        {logs.map((log, i) => (
          <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all group overflow-hidden">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-12">
               <div className="flex items-center gap-4 w-48 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                     <User className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-foreground uppercase tracking-widest">{log.user}</p>
                     <p className="text-[9px] text-muted-foreground uppercase font-bold">{log.time}</p>
                  </div>
               </div>

               <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                     <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[9px] uppercase font-bold tracking-widest px-3 py-1 mb-2">
                        {log.action}
                     </Badge>
                     <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">Target:</span>
                        <span className="text-xs font-bold font-mono text-foreground">{log.record}</span>
                     </div>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Metadata / Reason</p>
                     <p className="text-xs font-medium text-foreground">{log.details}</p>
                  </div>
               </div>

               <Button size="icon" variant="ghost" className="text-muted-foreground group-hover:text-primary transition-colors">
                  <ArrowRight className="w-5 h-5" />
               </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
