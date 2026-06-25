"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Truck, 
  ShoppingCart, 
  ClipboardCheck, 
  ArrowRight,
  Plus,
  ArrowUpRight,
  Loader2,
  Search,
  History,
  ShieldCheck,
  Package,
  CheckCircle2,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProcurementAllocationsPage() {
  const [isProcessing, setIsProcessing] = useState<string | null>(null)
  const [isNewPO, setIsNewPO] = useState(false)
  const [isSubmittingPO, setIsSubmittingPO] = useState(false)

  const partnerOrders = [
    { id: "ORD-9942", partner: "Elite Wraps Bangalore", items: "5 Rolls Ultra PPF", value: "₹2.25L", status: "Awaiting Allocation", date: "2h ago", hub: "BLR" },
    { id: "ORD-9938", partner: "Moto Shield Pro", items: "12 Unit Ceramic Gold", value: "₹78k", status: "Allocated", date: "5h ago", hub: "MUM" },
    { id: "ORD-9935", partner: "Skyline Pro", items: "10 Rolls Solar V4", value: "₹2.8L", status: "Dispatched", date: "1d ago", hub: "DEL" },
  ]

  const purchaseOrders = [
    { id: "PO-2026-0154", supplier: "Eastman Chemicals", items: "200 Rolls PPF Matrix", status: "In Transit", eta: "Jun 22", value: "₹42.5L" },
    { id: "PO-2026-0148", supplier: "STEK USA", items: "150 Rolls Matte Film", status: "Received", eta: "Jun 14", value: "₹38.2L" },
  ]

  const handleAction = (id: string, action: string) => {
    setIsProcessing(id)
    setTimeout(() => {
      setIsProcessing(null)
      toast({
        title: "Action Successful",
        description: `${action} completed for ${id}. Stock levels synchronized.`,
      })
    }, 1500)
  }

  const handleCreatePO = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingPO(true)
    setTimeout(() => {
      setIsSubmittingPO(false)
      setIsNewPO(false)
      toast({
        title: "PO Transmitted",
        description: "Purchase Order successfully transmitted to supplier portal.",
      })
    }, 2000)
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex justify-end gap-3">
         <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl" onClick={() => setIsNewPO(true)}>
            <Plus className="w-4 h-4" /> Transmit PO
         </Button>
      </div>

      <Tabs defaultValue="partner-orders" className="space-y-6">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto overflow-x-auto scrollbar-hide">
          <TabsTrigger value="partner-orders" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            Partner Fulfillment <Badge variant="secondary" className="bg-white/10 text-[8px] ml-2">14</Badge>
          </TabsTrigger>
          <TabsTrigger value="purchase-orders" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            Purchase Orders
          </TabsTrigger>
          <TabsTrigger value="grn" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            Receiving (GRN)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="partner-orders" className="space-y-4 animate-in fade-in duration-500">
           <div className="grid grid-cols-1 gap-4">
              {partnerOrders.map((order) => (
                <Card key={order.id} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-2xl overflow-hidden group">
                  <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-12">
                     <div className="flex-1 space-y-6 w-full">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-4">
                              <span className="text-xs font-bold text-primary font-mono">{order.id}</span>
                              <Badge className={cn(
                                "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                                order.status === "Awaiting Allocation" ? "bg-amber-500/10 text-amber-500" : "bg-blue-500/10 text-blue-500"
                              )}>{order.status}</Badge>
                              <Badge variant="outline" className="text-[8px] border-white/10 uppercase tracking-widest px-2">{order.hub} HUB</Badge>
                           </div>
                           <span className="text-[10px] text-muted-foreground uppercase font-bold">{order.date}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                           <div className="space-y-1">
                              <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Client Partner</p>
                              <h4 className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">{order.partner}</h4>
                           </div>
                           <div className="space-y-1">
                              <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Order Manifest</p>
                              <p className="text-sm font-medium text-foreground">{order.items}</p>
                           </div>
                           <div className="space-y-1">
                              <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Commercial Value</p>
                              <p className="text-sm font-bold text-primary font-headline">{order.value}</p>
                           </div>
                        </div>
                     </div>

                     <div className="flex gap-2 w-full lg:w-auto">
                        <Button variant="outline" className="flex-1 lg:flex-none h-12 px-6 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 bg-white/5">Details</Button>
                        <Button 
                          variant="gradient" 
                          disabled={isProcessing === order.id}
                          className="flex-1 lg:flex-none h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-lg min-w-[200px]"
                          onClick={() => handleAction(order.id, "Stock Allocation")}
                        >
                           {isProcessing === order.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Allocate & Pick <ArrowRight className="w-4 h-4 ml-2" /></>}
                        </Button>
                     </div>
                  </CardContent>
                </Card>
              ))}
           </div>
        </TabsContent>

        <TabsContent value="purchase-orders" className="space-y-4 animate-in fade-in duration-500">
           {purchaseOrders.map((po) => (
             <Card key={po.id} className="bg-white/5 border-white/10 p-8 shadow-xl hover:border-primary/30 transition-all group">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="flex items-center gap-6 flex-1">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner border border-primary/20">
                         <ShoppingCart className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                         <div className="flex items-center gap-3">
                            <span className="font-mono text-sm font-bold text-primary">{po.id}</span>
                            <Badge variant="outline" className={cn(
                               "text-[9px] uppercase font-bold border-white/10 px-2 py-0.5",
                               po.status === "In Transit" ? "border-blue-500/50 text-blue-500 animate-pulse" : ""
                            )}>{po.status}</Badge>
                         </div>
                         <h4 className="text-xl font-bold uppercase tracking-tighter text-foreground">{po.supplier}</h4>
                         <p className="text-xs text-muted-foreground font-medium uppercase">{po.items} • {po.value}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-12 shrink-0">
                      <div className="text-right space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Expected Hub Arrival</p>
                         <p className="text-sm font-bold text-foreground font-headline">{po.eta}</p>
                      </div>
                      <Button variant="outline" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 bg-white/5 hover:bg-white/10">
                         Track Shipment <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
                      </Button>
                   </div>
                </div>
             </Card>
           ))}
        </TabsContent>

        <TabsContent value="grn" className="animate-in fade-in duration-500">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 shadow-2xl p-8 space-y-8">
                 <div className="space-y-2">
                    <CardTitle className="text-lg uppercase tracking-widest">Record Goods Receipt</CardTitle>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">National Registry Verification Terminal</p>
                 </div>
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Reference PO Number</label>
                       <div className="flex gap-2">
                          <Input placeholder="PO-2026-XXXX" className="bg-black/20 border-white/10 h-12 rounded-xl text-sm font-mono tracking-widest uppercase" />
                          <Button variant="outline" className="h-12 px-6 rounded-xl border-white/10 text-[10px] font-bold uppercase">Fetch Order</Button>
                       </div>
                    </div>
                    <div className="p-8 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-[32px] text-center space-y-4 group hover:border-primary/30 transition-all cursor-pointer">
                       <ClipboardCheck className="w-12 h-12 mx-auto text-muted-foreground opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all" />
                       <div className="space-y-1">
                          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">Scan Master Packing List</p>
                          <p className="text-[8px] text-muted-foreground uppercase font-bold">Auto-verifies serial ranges against PO line items</p>
                       </div>
                    </div>
                    <Button variant="gradient" className="w-full h-14 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl" onClick={() => handleAction("GRN-NEW", "National Stock-In")}>Complete GRN & Stock-In</Button>
                 </div>
              </Card>

              <div className="space-y-6">
                 <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-bold ml-2">Audit Status</h3>
                 <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                       <ShieldCheck className="w-5 h-5" />
                       <h4 className="text-[10px] font-bold uppercase tracking-widest">Quality Assurance Protocol</h4>
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">
                       System requires 10% random batch sampling for every inter-continental shipment. Sampling IDs are auto-generated on GRN completion.
                    </p>
                 </Card>
                 <div className="space-y-3">
                    {[
                      { id: "GRN-092", date: "16 Jun", hub: "BLR HQ", status: "Verified", qty: "45 Rolls" },
                      { id: "GRN-088", date: "12 Jun", hub: "DEL Hub", status: "Mismatch Flag", qty: "120 Units", alert: true },
                    ].map((g, i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-2xl group hover:border-primary/20 transition-all">
                         <div className="flex items-center gap-4">
                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border", g.alert ? "bg-red-500/10 border-red-500/20 text-red-500" : "bg-green-500/10 border-green-500/20 text-green-500")}>
                               <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div className="space-y-0.5">
                               <p className="text-xs font-bold text-foreground font-mono">{g.id}</p>
                               <p className="text-[9px] text-muted-foreground font-bold uppercase">{g.hub} • {g.date}</p>
                            </div>
                         </div>
                         <div className="text-right">
                            <p className="text-sm font-bold text-foreground">{g.qty}</p>
                            <p className={cn("text-[8px] uppercase font-bold tracking-widest", g.alert ? "text-red-500" : "text-green-500")}>{g.status}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </TabsContent>
      </Tabs>

      {/* Transmit PO Dialog */}
      <Dialog open={isNewPO} onOpenChange={(o) => { if(!isSubmittingPO) setIsNewPO(o); }}>
        <DialogContent className="max-w-3xl bg-background border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={handleCreatePO}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Create Procurement Order</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">National Stock Replenishment Terminal</DialogDescription>
            </DialogHeader>

            <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Supplier Source</label>
                  <Select required>
                    <SelectTrigger className="h-12 bg-white/5 border-white/5 rounded-xl"><SelectValue placeholder="Select Vendor" /></SelectTrigger>
                    <SelectContent className="glass">
                      <SelectItem value="eastman">Eastman Chemicals (USA)</SelectItem>
                      <SelectItem value="stek">STEK (South Korea)</SelectItem>
                      <SelectItem value="nano">Nano-Shield Matrix (Germany)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Destination Node</label>
                  <Select required>
                    <SelectTrigger className="h-12 bg-white/5 border-white/5 rounded-xl"><SelectValue placeholder="Select Warehouse" /></SelectTrigger>
                    <SelectContent className="glass">
                      <SelectItem value="blr">Bengaluru HQ</SelectItem>
                      <SelectItem value="mum">Mumbai Hub</SelectItem>
                      <SelectItem value="del">Delhi Hub</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl space-y-4">
                 <h4 className="text-[10px] font-bold uppercase text-primary tracking-widest border-b border-white/5 pb-2">Order Line Items</h4>
                 <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6"><Input placeholder="SKU Detail" className="h-10 bg-black/20" /></div>
                    <div className="col-span-3"><Input placeholder="Qty" type="number" className="h-10 bg-black/20" /></div>
                    <div className="col-span-3"><Input placeholder="Unit Cost" type="number" className="h-10 bg-black/20" /></div>
                 </div>
                 <Button type="button" variant="outline" className="h-9 px-4 rounded-xl text-[8px] uppercase font-bold border-white/10" onClick={() => toast({ title: "Line Added", description: "Empty row inserted into PO manifest." })}>+ Add Product SKU</Button>
              </div>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold uppercase text-foreground">Compliance Verification Passed</span>
                 </div>
                 <Badge variant="outline" className="text-[8px] border-primary/30 text-primary">Ready to Transmit</Badge>
              </div>
            </div>

            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
              <Button type="button" variant="ghost" onClick={() => setIsNewPO(false)} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Cancel</Button>
              <Button type="submit" disabled={isSubmittingPO} className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl min-w-[240px]">
                {isSubmittingPO ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <>Authorize Transmission <ArrowRight className="w-4 h-4 ml-2" /></>}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
