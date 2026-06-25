"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  RefreshCw, 
  Package, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  ClipboardList
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function OrderReturns() {
  const returns = [
    { id: "RET-9942", orderId: "ORD-9912", partner: "South Hub Chennai", items: "1 Roll PPF (Core Defect)", status: "UNDER_REVIEW", date: "2d ago" },
    { id: "RET-9935", orderId: "ORD-9884", partner: "Elite Wraps", items: "2 Units Ceramic (Seal Leak)", status: "APPROVED", date: "5d ago" },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
           <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground ml-2">Reverse Logistics Queue</h3>
           <div className="space-y-4">
              {returns.map((ret) => (
                <Card key={ret.id} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-xl overflow-hidden group">
                  <CardContent className="p-6 flex flex-col md:flex-row items-center gap-10">
                     <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                        <RefreshCw className="w-6 h-6" />
                     </div>
                     <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-primary font-mono">{ret.id}</p>
                           <h4 className="text-sm font-bold uppercase text-foreground">{ret.partner}</h4>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted-foreground uppercase">Reason/Items</p>
                           <p className="text-xs font-medium text-foreground">{ret.items}</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted-foreground uppercase">Status</p>
                           <Badge variant="outline" className={cn(
                              "text-[8px] uppercase font-bold tracking-widest",
                              ret.status === 'APPROVED' ? "text-green-500 border-green-500/20" : "text-amber-500 border-amber-500/20"
                           )}>{ret.status}</Badge>
                        </div>
                     </div>
                     <Button size="icon" variant="ghost" className="text-muted-foreground group-hover:text-primary transition-colors"><ArrowRight className="w-5 h-5" /></Button>
                  </CardContent>
                </Card>
              ))}
           </div>
        </div>

        <div className="space-y-8">
           <Card className="bg-red-500/5 border border-red-500/20 p-8 rounded-[32px] space-y-6">
              <div className="flex items-center gap-4 text-red-500">
                 <ShieldAlert className="w-6 h-6" />
                 <h4 className="text-sm font-bold uppercase tracking-widest leading-none">Forensic Return Audit</h4>
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-medium">
                 All material returns trigger a mandatory quality scan at the destination hub. Approved returns result in automated **Credit Note** generation in the Billing Terminal.
              </p>
           </Card>

           <div className="p-10 border-2 border-dashed border-white/5 rounded-[40px] text-center space-y-4 bg-white/[0.01]">
              <ClipboardList className="w-10 h-10 mx-auto text-muted-foreground opacity-20" />
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] max-w-[200px] mx-auto">Returns policy v4.2 active. 100% photo documentation mandatory for partner credit.</p>
           </div>
        </div>
      </div>
    </div>
  )
}
