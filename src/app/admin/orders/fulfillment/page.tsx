"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Truck, 
  Package, 
  MapPin, 
  ChevronRight, 
  Loader2, 
  CheckCircle2, 
  Clock, 
  Navigation,
  ArrowRight,
  ClipboardList,
  Search,
  Zap,
  ShieldCheck,
  Smartphone
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function FulfillmentHub() {
  const [activeStage, setActiveStage] = useState<"packing" | "dispatch" | "shipping">("packing")
  const [processingId, setProcessingId] = useState<string | null>(null)

  const queue = [
    { id: "ORD-9938", partner: "Moto Shield Pune", stage: "packing", items: "5 Kits", priority: "NORMAL", warehouse: "MUM Hub" },
    { id: "ORD-9935", partner: "Skyline Pro", stage: "dispatch", items: "12 Rolls", priority: "URGENT", warehouse: "DEL Hub" },
    { id: "ORD-9921", partner: "Elite Wraps", stage: "shipping", items: "2 Rolls", priority: "NORMAL", warehouse: "BLR HQ", tracking: "AZ-LOG-88219" },
  ]

  const handleProcess = (id: string, next: string) => {
    setProcessingId(id)
    setTimeout(() => {
      setProcessingId(null)
      toast({ title: "Logistics Update", description: `Order ${id} moved to ${next} phase.` })
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Awaiting Packing", val: "14", icon: Package, stage: "packing", color: "text-blue-500" },
          { label: "Ready for Dispatch", val: "08", icon: ClipboardList, stage: "dispatch", color: "text-amber-500" },
          { label: "In Transit", val: "22", icon: Truck, stage: "shipping", color: "text-green-500" },
        ].map((s) => (
          <button 
            key={s.label} 
            onClick={() => setActiveStage(s.stage as any)}
            className={cn(
              "p-6 rounded-[32px] border text-left transition-all duration-500 group relative overflow-hidden",
              activeStage === s.stage ? "bg-white/5 border-primary ring-1 ring-primary/20 shadow-2xl" : "bg-white/5 border-white/10 hover:border-white/20"
            )}
          >
            <div className="flex items-center justify-between mb-4 relative z-10">
               <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", activeStage === s.stage ? "text-primary" : s.color)}>
                  <s.icon className="w-5 h-5" />
               </div>
               {activeStage === s.stage && <Badge className="bg-primary text-white text-[8px] uppercase">Active Terminal</Badge>}
            </div>
            <div className="relative z-10">
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
               <p className="text-3xl font-headline font-bold text-foreground">{s.val}</p>
            </div>
            {activeStage === s.stage && <div className="absolute inset-0 bg-primary/5 animate-pulse" />}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
           <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground">National Logistics Queue</h3>
           <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input placeholder="Filter by ID or Partner..." className="w-full bg-white/5 border border-white/10 h-10 pl-10 rounded-xl text-xs" />
           </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {queue.filter(o => o.stage === activeStage).map((order) => (
            <Card key={order.id} className="bg-white/5 border-white/10 shadow-xl overflow-hidden group">
               <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-10">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
                     <div className="space-y-1">
                        <p className="text-[9px] font-bold text-primary font-mono">{order.id}</p>
                        <h4 className="font-bold text-sm uppercase text-foreground">{order.partner}</h4>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase">Manifest</p>
                        <p className="text-xs font-bold text-foreground">{order.items}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase">Dispatch Hub</p>
                        <p className="text-xs font-bold flex items-center gap-1.5 uppercase text-foreground">
                           <MapPin className="w-3 h-3 text-primary" /> {order.warehouse}
                        </p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase">Logistics Status</p>
                        <Badge variant="outline" className={cn(
                           "text-[8px] uppercase font-bold tracking-widest border-white/10",
                           order.priority === 'URGENT' ? "text-red-500 border-red-500/20 bg-red-500/5" : ""
                        )}>{activeStage === 'shipping' ? `Tracking: ${order.tracking}` : `Priority: ${order.priority}`}</Badge>
                     </div>
                  </div>
                  <div className="flex gap-2 w-full lg:w-auto">
                     {activeStage === 'packing' && (
                        <Button 
                          variant="gradient" 
                          disabled={processingId === order.id}
                          className="flex-1 lg:flex-none h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-lg min-w-[180px]"
                          onClick={() => handleProcess(order.id, "dispatch")}
                        >
                           {processingId === order.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Scan & Confirm Pack <ArrowRight className="w-4 h-4" /></>}
                        </Button>
                     )}
                     {activeStage === 'dispatch' && (
                        <Button 
                          variant="gradient" 
                          disabled={processingId === order.id}
                          className="flex-1 lg:flex-none h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-lg min-w-[180px]"
                          onClick={() => handleProcess(order.id, "shipping")}
                        >
                           {processingId === order.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Print Label & Dispatch <Truck className="w-4 h-4" /></>}
                        </Button>
                     )}
                     {activeStage === 'shipping' && (
                        <Button 
                          variant="outline" 
                          className="flex-1 lg:flex-none h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/5"
                        >
                           Track Shipment <Navigation className="w-3.5 h-3.5 ml-2" />
                        </Button>
                     )}
                  </div>
               </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[40px] space-y-4">
         <div className="flex items-center gap-4 text-primary">
            <ShieldCheck className="w-6 h-6" />
            <h4 className="text-lg font-headline font-bold uppercase tracking-tight text-foreground">Supply Chain Integrity</h4>
         </div>
         <p className="text-sm text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
            Order fulfillment is synchronized with national batch tracking. Serial numbers are auto-assigned upon "Packing Confirmation" to maintain forensic material genealogy.
         </p>
      </Card>
    </div>
  )
}
