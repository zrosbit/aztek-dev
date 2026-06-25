"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Package, 
  Layers, 
  History, 
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Search,
  MoreVertical,
  Activity
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProjectTrackingPage() {
  const materials = [
    { id: "TX-9921", job: "AZ-JOB-0421", sku: "AZ-AUTO-PPF-ULTRA", batch: "BATCH-2026-06", qty: "1.5m", status: "VERIFIED", partner: "Elite BLR" },
    { id: "TX-9918", job: "AZ-JOB-0418", sku: "AZ-AUTO-CER-GOLD", batch: "LOT-092-B", qty: "30ml", status: "VERIFIED", partner: "Elite BLR" },
    { id: "TX-9915", job: "AZ-JOB-0398", sku: "AZ-AUTO-PPF-MATTE", batch: "BATCH-2026-05", qty: "2.2m", status: "PENDING", partner: "Mumbai Hub" },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
               <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground flex items-center gap-3">
                  <Package className="w-4 h-4 text-primary" /> Material Consumption Terminal
               </h3>
               <Badge className="bg-primary/10 text-primary font-bold uppercase text-[8px] border-primary/20">Real-time Stock Draw</Badge>
            </div>
            
            <div className="space-y-3">
               {materials.map((m) => (
                 <Card key={m.id} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-xl group overflow-hidden">
                   <CardContent className="p-5 flex flex-col md:flex-row items-center gap-10">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all">
                         <Layers className="w-6 h-6" />
                      </div>
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                         <div className="space-y-1">
                            <p className="text-[10px] font-bold text-primary font-mono">{m.job}</p>
                            <h4 className="font-bold text-sm uppercase text-foreground">{m.sku}</h4>
                            <p className="text-[9px] text-muted-foreground uppercase font-bold">Log ID: {m.id}</p>
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Batch Reference</p>
                            <Badge variant="outline" className="text-[10px] font-mono border-white/10 bg-white/5">{m.batch}</Badge>
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Quantity Draw</p>
                            <p className="text-sm font-bold text-foreground uppercase">{m.qty}</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <Badge className={cn(
                            "text-[8px] uppercase font-bold tracking-widest",
                            m.status === 'VERIFIED' ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                         )}>{m.status}</Badge>
                         <p className="text-[8px] text-muted-foreground font-bold uppercase mt-1">Via Connect Field</p>
                      </div>
                   </CardContent>
                 </Card>
               ))}
            </div>
         </div>

         <div className="space-y-8">
            <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[32px] space-y-6">
               <div className="flex items-center gap-4 text-primary">
                  <ShieldCheck className="w-8 h-8" />
                  <h4 className="text-lg font-headline font-bold uppercase text-foreground">Stock Integrity</h4>
               </div>
               <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">
                  All field material draws are reconciled against regional hub inventory every 15 minutes. Serial number validation is mandatory for technical warranty issuance.
               </p>
               <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase">
                     <span className="text-muted-foreground">Network Delta</span>
                     <span className="text-az-success">0.02% (Pass)</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase">
                     <span className="text-muted-foreground">Unmatched Serials</span>
                     <span className="text-foreground">0</span>
                  </div>
               </div>
            </Card>

            <div className="p-10 border-2 border-dashed border-white/5 rounded-[40px] text-center space-y-4 bg-white/[0.01]">
               <Activity className="w-10 h-10 mx-auto text-muted-foreground opacity-20" />
               <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] max-w-[200px] mx-auto">Forensic batch genealogy is active. 100% of network consumption is traced to origin nodes.</p>
            </div>
         </div>
      </div>
    </div>
  )
}
