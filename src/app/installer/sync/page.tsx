
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw, CheckCircle2, Clock, CloudOff, ArrowUpRight, Loader2 } from "lucide-react"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"

export default function InstallerSyncPage() {
  const [syncing, setSyncing] = useState(false)

  const queue = [
    { id: "TX-99421", type: "JOB_COMPLETION", time: "10m ago", status: "PENDING", details: "Rahul Sharma - Porsche 911" },
    { id: "TX-99418", type: "PHOTO_UPLOAD", time: "12m ago", status: "SYNCED", details: "4 Technical Photos (2.4MB)" },
    { id: "TX-99415", type: "MATERIAL_LOG", time: "15m ago", status: "SYNCED", details: "AZ-AUTO-PPF (1.5m)" },
  ]

  const handleManualSync = () => {
    setSyncing(true)
    setTimeout(() => {
      setSyncing(false)
      toast({ title: "Sync Complete", description: "All field records pushed to AZTEK Nexus." })
    }, 2000)
  }

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-headline font-bold uppercase tracking-tight">Sync Terminal</h1>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Field Data Reconciliation</p>
        </div>
        <Button size="icon" variant="outline" className={cn("rounded-xl border-white/10", syncing && "animate-spin")} onClick={handleManualSync}>
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-white/5 border-white/10 p-5 space-y-2">
           <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Queue Size</p>
           <p className="text-2xl font-headline font-bold">142 KB</p>
        </Card>
        <Card className="bg-white/5 border-white/10 p-5 space-y-2">
           <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Latency</p>
           <p className="text-2xl font-headline font-bold text-green-500">22 ms</p>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground">Transmission Log</h3>
        {queue.map((tx) => (
          <Card key={tx.id} className="bg-white/5 border-white/10 overflow-hidden">
            <CardContent className="p-5 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center border",
                    tx.status === "SYNCED" ? "bg-green-500/10 border-green-500/20 text-green-500" : "bg-blue-500/10 border-blue-500/20 text-blue-500 animate-pulse"
                  )}>
                     {tx.status === "SYNCED" ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <div className="space-y-0.5">
                     <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-foreground uppercase">{tx.type}</span>
                        <Badge variant="outline" className="text-[8px] uppercase px-1 py-0 border-white/10">{tx.status}</Badge>
                     </div>
                     <p className="text-[10px] text-muted-foreground font-medium uppercase">{tx.details}</p>
                  </div>
               </div>
               <span className="text-[9px] font-bold text-muted-foreground uppercase">{tx.time}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="p-8 border-2 border-dashed border-white/5 rounded-[40px] text-center space-y-4 bg-white/[0.01]">
         <CloudOff className="w-10 h-10 mx-auto text-muted-foreground opacity-20" />
         <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] max-w-[200px] mx-auto">Offline processing active. Data is stored locally and synced automatically.</p>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
