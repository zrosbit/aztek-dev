"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  MoreVertical, 
  ArrowRight,
  User,
  Package,
  Calendar,
  ShieldCheck,
  CreditCard,
  Loader2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function OrderRegistry() {
  const [processingId, setProcessingId] = useState<string | null>(null)

  const orders = [
    { id: "ORD-9942", partner: "Elite Wraps Bangalore", items: "12 Items (PPF/Ceramic)", val: "₹2,42,000", status: "PENDING", date: "2h ago", hub: "BLR" },
    { id: "ORD-9938", partner: "Moto Shield Pro Pune", items: "5 Kits (Moto Armor)", val: "₹85,000", status: "APPROVED", date: "5h ago", hub: "MUM" },
    { id: "ORD-9932", partner: "Skyline Arch Hub", items: "10 Rolls (Solar Shield)", val: "₹4,20,000", status: "PENDING", date: "1d ago", hub: "DEL" },
  ]

  const handleApprove = (id: string) => {
    setProcessingId(id)
    setTimeout(() => {
      setProcessingId(null)
      toast({ title: "Order Authorized", description: "Stock reservation transmitted to regional hub." })
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search orders by ID, Partner or Region..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/5 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
          <Filter className="w-4 h-4" /> Filter Status
        </Button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-xl group overflow-hidden">
            <CardContent className="p-8 flex flex-col lg:flex-row items-center gap-12">
               <div className="flex-1 space-y-6 w-full">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                           <Package className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-primary font-mono uppercase tracking-widest">{order.id} / HUB-{order.hub}</p>
                           <h4 className="text-xl font-bold uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors">{order.partner}</h4>
                        </div>
                     </div>
                     <Badge className={cn(
                        "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                        order.status === 'APPROVED' ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                     )}>{order.status}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Manifest Detail</p>
                        <p className="text-sm font-bold flex items-center gap-2 uppercase tracking-tight text-foreground">{order.items}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Order Total</p>
                        <p className="text-sm font-bold flex items-center gap-2 text-primary font-headline">{order.val}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Age / Inbound</p>
                        <p className="text-sm font-bold flex items-center gap-2 uppercase tracking-tighter text-muted-foreground">
                           <Calendar className="w-3.5 h-3.5" /> {order.date}
                        </p>
                     </div>
                  </div>
               </div>

               <div className="flex gap-2 w-full lg:w-auto">
                  <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 bg-white/5">
                     View Line Items
                  </Button>
                  <Button 
                    variant={order.status === 'APPROVED' ? 'outline' : 'gradient'}
                    disabled={order.status === 'APPROVED' || processingId === order.id}
                    className="flex-1 lg:flex-none h-14 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl min-w-[200px]"
                    onClick={() => handleApprove(order.id)}
                  >
                    {processingId === order.id ? <Loader2 className="w-4 h-4 animate-spin" /> : order.status === 'APPROVED' ? 'Reservation Active' : <>Approve & Reserve <ArrowRight className="w-4 h-4" /></>}
                  </Button>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
