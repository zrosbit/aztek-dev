"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plus, 
  FileText, 
  ShoppingCart, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Search,
  Filter,
  MoreVertical,
  ArrowRight,
  Printer,
  Loader2,
  ShieldCheck,
  Zap
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function PartnerSalesPage() {
  const [activeTab, setActiveTab] = useState("quotes")
  const [isAddingOrder, setIsAddingOrder] = useState(false)
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false)

  const quotes = [
    { id: "AZ-QT-BLR-00421", customer: "Rahul Sharma", product: "Full Body PPF", amount: "₹1,25,000", status: "SENT", expiry: "6d left" },
    { id: "AZ-QT-BLR-00418", customer: "Aditi Rao", product: "Ceramic Gold", amount: "₹24,500", status: "ACCEPTED", expiry: "N/A" },
    { id: "AZ-QT-BLR-00415", customer: "Vikram Singh", product: "Architectural Solar", amount: "₹4,20,000", status: "DRAFT", expiry: "15d left" },
  ]

  const orders = [
    { id: "AZ-SO-BLR-00392", customer: "Rahul Sharma", product: "Full Body PPF", status: "ALLOCATION", date: "Oct 24", amount: "₹1,25,000" },
    { id: "AZ-SO-BLR-00385", customer: "Aditi Rao", product: "Ceramic Gold", status: "READY", date: "Oct 22", amount: "₹24,500" },
  ]

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingOrder(true)
    setTimeout(() => {
      setIsSubmittingOrder(false)
      setIsAddingOrder(false)
      setActiveTab("orders")
      toast({
        title: "Direct Order Initialized",
        description: "Order SO-9945 created and sent for fulfillment allocation.",
      })
    }, 2000)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Sales <span className="text-primary italic">Terminal</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Quote-to-Order Conversion & Revenue Pipeline</p>
         </div>
         <div className="flex gap-4">
            <Button asChild variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <Link href="/connect/sales/quotes/new"><Plus className="w-4 h-4" /> Create Quote</Link>
            </Button>
            <Button 
              variant="gradient" 
              className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl rounded-2xl"
              onClick={() => setIsAddingOrder(true)}
            >
              <ShoppingCart className="w-4 h-4" /> New Direct Order
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Pipeline Value", val: "₹12.4L", sub: "Active Quotes", icon: ArrowUpRight, color: "text-blue-500" },
          { label: "Confirmed Orders", val: "18", sub: "This Month", icon: ShoppingCart, color: "text-green-500" },
          { label: "Conv. Rate", val: "68%", sub: "Quote to Order", icon: CheckCircle2, color: "text-purple-500" },
          { label: "Avg. Ticket", val: "₹45k", sub: "Project Value", icon: FileText, color: "text-amber-500" },
        ].map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-4 shadow-xl group hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between">
              <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", s.color)}>
                <s.icon className="w-5 h-5" />
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
              <p className="text-2xl font-headline font-bold text-foreground">{s.val}</p>
              <p className="text-[9px] text-muted-foreground uppercase font-bold">{s.sub}</p>
            </div>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto">
          <TabsTrigger value="quotes" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            Quotation Hub <Badge variant="secondary" className="bg-white/10 text-[8px] ml-1">{quotes.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="orders" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            Sales Orders <Badge variant="secondary" className="bg-white/10 text-[8px] ml-1">{orders.length}</Badge>
          </TabsTrigger>
        </TabsList>

        <div className="flex gap-4">
           <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Filter by number or customer name..." className="pl-10 h-12 bg-white/5 border-white/5 rounded-2xl" />
           </div>
           <Button variant="outline" className="h-12 px-4 rounded-2xl border-white/5 bg-white/5"><Filter className="w-4 h-4" /></Button>
        </div>

        <TabsContent value="quotes" className="space-y-4 animate-in fade-in duration-500">
           {quotes.map((q) => (
             <Card key={q.id} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all group shadow-xl">
               <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 space-y-4 w-full">
                     <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-primary">{q.id}</span>
                        <Badge className={cn(
                          "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                          q.status === "SENT" ? "bg-blue-500/10 text-blue-500" :
                          q.status === "ACCEPTED" ? "bg-green-500/10 text-green-500" :
                          "bg-white/5 text-muted-foreground"
                        )}>{q.status}</Badge>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-1">
                           <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Customer</p>
                           <h4 className="text-lg font-bold group-hover:text-primary transition-colors uppercase">{q.customer}</h4>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Primary Product</p>
                           <p className="text-sm font-medium">{q.product}</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Total Value</p>
                           <p className="text-sm font-bold text-primary">{q.amount}</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-2 w-full lg:w-auto">
                     <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-white/10 bg-white/5 hover:bg-white/10"><Printer className="w-4 h-4" /></Button>
                     {q.status === "ACCEPTED" ? (
                       <Button variant="gradient" className="flex-1 lg:flex-none h-12 px-8 rounded-2xl text-[10px] uppercase font-bold gap-2">Convert to Order <ArrowRight className="w-4 h-4" /></Button>
                     ) : (
                       <Button variant="outline" className="flex-1 lg:flex-none h-12 px-8 rounded-2xl text-[10px] uppercase font-bold border-white/10">View Details</Button>
                     )}
                  </div>
               </CardContent>
             </Card>
           ))}
        </TabsContent>

        <TabsContent value="orders" className="space-y-4 animate-in fade-in duration-500">
           {orders.map((o) => (
             <Card key={o.id} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all group shadow-xl">
               <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 space-y-4 w-full">
                     <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-primary">{o.id}</span>
                        <Badge className={cn(
                          "text-[9px] uppercase font-bold tracking-widest",
                          o.status === "READY" ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                        )}>{o.status}</Badge>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-1">
                           <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Customer</p>
                           <h4 className="text-lg font-bold group-hover:text-primary transition-colors uppercase">{o.customer}</h4>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Scheduled</p>
                           <p className="text-sm font-medium">{o.date}</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Order Amount</p>
                           <p className="text-sm font-bold text-primary">{o.amount}</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-2 w-full lg:w-auto">
                     <Button variant="outline" className="flex-1 lg:flex-none h-12 px-8 rounded-2xl text-[10px] uppercase font-bold border-white/10">Manage Fulfillment</Button>
                     <Button variant="gradient" className="flex-1 lg:flex-none h-12 px-8 rounded-2xl text-[10px] uppercase font-bold">Generate Invoice</Button>
                  </div>
               </CardContent>
             </Card>
           ))}
        </TabsContent>
      </Tabs>

      {/* New Direct Order Dialog */}
      <Dialog open={isAddingOrder} onOpenChange={(o) => { if(!isSubmittingOrder) setIsAddingOrder(o); }}>
        <DialogContent className="max-w-2xl bg-black border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={handleCreateOrder}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Book Direct Order</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Skip quotation and initialize commercial project entry</DialogDescription>
            </DialogHeader>

            <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Customer Identity</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Full Name</label>
                    <Input required placeholder="Customer name" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Mobile Endpoint</label>
                    <Input required placeholder="+91 ..." className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Order Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-muted-foreground">Primary Product</label>
                      <Select required>
                         <SelectTrigger className="bg-white/5 border-white/5 h-12 rounded-xl text-sm">
                            <SelectValue placeholder="Select Product" />
                         </SelectTrigger>
                         <SelectContent className="glass">
                            <SelectItem value="auto">Automotive PPF Full Body</SelectItem>
                            <SelectItem value="moto">Motorcycle Protection Kit</SelectItem>
                            <SelectItem value="ceramic">9H Ceramic Matrix Armor</SelectItem>
                         </SelectContent>
                      </Select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-muted-foreground">Order Value (₹)</label>
                      <Input required type="number" placeholder="0.00" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl font-headline" />
                   </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-3xl space-y-4">
                 <div className="flex items-center gap-3 text-primary">
                    <ShieldCheck className="w-5 h-5" />
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">Inventory Lock</h4>
                 </div>
                 <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">
                    This action will immediately request batch allocation from your regional hub (Bangalore HQ). Ensure physical capacity is verified before booking.
                 </p>
              </div>
            </div>

            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
              <Button type="button" variant="ghost" onClick={() => setIsAddingOrder(false)} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Cancel</Button>
              <Button type="submit" disabled={isSubmittingOrder} className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl min-w-[200px]">
                {isSubmittingOrder ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Transmitting...</> : <>Confirm Direct Order <ArrowRight className="w-4 h-4 ml-2" /></>}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
