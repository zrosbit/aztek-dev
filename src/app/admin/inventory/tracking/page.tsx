"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  Filter, 
  User, 
  Download, 
  AlertCircle,
  MapPin,
  ChevronRight,
  Loader2,
  ArrowRight,
  History,
  ShieldCheck,
  Zap,
  Package,
  ArrowDownLeft,
  ArrowUpRight,
  RefreshCw
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"

export default function StockMovementsAuditPage() {
  const [isAdjusting, setIsAdjusting] = useState(false)

  const batches = [
    { id: "PPF-2026-06-001", sku: "AZ-AUTO-PPF-ULTRA", product: "Pro Ultra PPF (15m)", hub: "BLR HQ", qty: 85, status: "Active", qc: "PASS" },
    { id: "CER-2026-05-012", sku: "AZ-AUTO-CER-GOLD", product: "9H Nano Gold (30ml)", hub: "MUM Hub", qty: 120, status: "Active", qc: "PASS" },
    { id: "MAT-2026-06-005", sku: "AZ-AUTO-PPF-MATTE", product: "Matte PPF (15m)", hub: "DEL Hub", qty: 50, status: "Quarantined", qc: "HOLD" },
  ]

  const movements = [
    { id: "MV-99421", date: "16 Jun 2026, 11:20 AM", type: "JOB_CONSUMPTION", sku: "AZ-AUTO-PPF-ULTRA", qty: "-1", hub: "BLR HQ", ref: "AZ-JOB-BLR-0421", user: "Siddharth M.", color: "text-red-500" },
    { id: "MV-99418", date: "16 Jun 2026, 09:45 AM", type: "ADJUSTMENT", sku: "AZ-AUTO-CER-GOLD", qty: "-2", hub: "MUM Hub", ref: "AUDIT-MUM-Q2", user: "Karthik R.", color: "text-red-500" },
    { id: "MV-99415", date: "15 Jun 2026, 02:30 PM", type: "STOCK_RECEIPT", sku: "AZ-AUTO-PPF-ULTRA", qty: "+50", hub: "BLR HQ", ref: "PO-2026-0142", user: "System", color: "text-green-500" },
    { id: "MV-99412", date: "14 Jun 2026, 04:15 PM", type: "TRANSFER_IN", sku: "AZ-AUTO-PPF-MATTE", qty: "+10", hub: "DEL Hub", ref: "TR-BLR-DEL-01", user: "Delhi Admin", color: "text-green-500" },
  ]

  const handleAuthorizeAdjustment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAdjusting(true)
    setTimeout(() => {
      setIsAdjusting(false)
      toast({
        title: "Adjustment Authorized",
        description: "Discrepancy record stored in national ledger. IP metadata logged.",
      })
    }, 2000)
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex justify-end gap-3">
         <Button variant="outline" className="h-12 px-6 rounded-2xl border-white/10 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5" onClick={() => toast({ title: "Export Started", description: "Immutable audit CSV is being generated." })}>
            <Download className="w-4 h-4" /> Export Audit Trail
         </Button>
      </div>

      <Tabs defaultValue="ledger" className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto overflow-x-auto scrollbar-hide">
          <TabsTrigger value="ledger" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            Movement Ledger
          </TabsTrigger>
          <TabsTrigger value="batches" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            Batch Tracking
          </TabsTrigger>
          <TabsTrigger value="adjustments" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            Physical Adjustments
          </TabsTrigger>
          <TabsTrigger value="transfers" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            Inter-Node Transfers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ledger" className="animate-in fade-in duration-500 space-y-6">
           <div className="flex gap-4">
              <div className="relative flex-1">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                 <Input placeholder="Search movement ID, SKU or Reference object..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
              </div>
              <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/10 bg-white/5"><Filter className="w-4 h-4" /></Button>
           </div>

           <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
              <table className="w-full text-left">
                 <thead className="bg-white/5 border-b border-white/5">
                    <tr>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Movement Identity</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Type</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Context SKU</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Qty Delta</th>
                       <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Linked Reference</th>
                       <th className="p-6"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {movements.map((m, i) => (
                       <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-6">
                             <div className="space-y-1">
                                <p className="font-mono text-xs font-bold text-primary uppercase">{m.id}</p>
                                <p className="text-[9px] text-muted-foreground font-bold uppercase">{m.date}</p>
                             </div>
                          </td>
                          <td className="p-6">
                             <Badge variant="outline" className="text-[8px] uppercase font-bold border-white/10 px-2 py-0.5 whitespace-nowrap bg-white/5">
                                {m.type.replace('_', ' ')}
                             </Badge>
                          </td>
                          <td className="p-6">
                             <div className="space-y-0.5">
                                <p className="text-[10px] font-bold text-foreground">{m.sku}</p>
                                <p className="text-[9px] text-muted-foreground uppercase font-bold">{m.hub}</p>
                             </div>
                          </td>
                          <td className="p-6 text-center">
                             <span className={cn("text-lg font-headline font-bold", m.color)}>{m.qty}</span>
                          </td>
                          <td className="p-6">
                             <span className="text-[10px] font-mono text-muted-foreground font-bold uppercase">{m.ref}</span>
                          </td>
                          <td className="p-6 text-right">
                             <div className="flex items-center justify-end gap-3">
                                <div className="text-right">
                                   <p className="text-[10px] font-bold text-foreground uppercase">{m.user}</p>
                                   <p className="text-[8px] text-muted-foreground uppercase">Authorized</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary transition-all shadow-inner">
                                   <User className="w-4 h-4" />
                                </div>
                             </div>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </TabsContent>

        <TabsContent value="batches" className="animate-in fade-in duration-500 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {batches.map((batch) => (
                <Card key={batch.id} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all group overflow-hidden shadow-2xl">
                  <CardHeader className="p-8 border-b border-white/5 bg-white/[0.02] flex flex-row items-center justify-between">
                    <div className="space-y-1">
                       <span className="font-mono text-xs font-bold text-primary">{batch.id}</span>
                       <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{batch.sku}</p>
                    </div>
                    <Badge className={cn(
                      "text-[9px] uppercase font-bold tracking-widest",
                      batch.qc === "PASS" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    )}>QC {batch.qc}</Badge>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    <div className="space-y-1">
                       <h4 className="text-lg font-bold text-foreground uppercase tracking-tight">{batch.product}</h4>
                       <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span className="text-[10px] font-bold uppercase text-foreground">{batch.hub}</span>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-5 rounded-2xl bg-black/20 border border-white/5 space-y-1 shadow-inner">
                          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Qty Remaining</p>
                          <p className="text-2xl font-headline font-bold">{batch.qty}</p>
                       </div>
                       <div className="p-5 rounded-2xl bg-black/20 border border-white/5 space-y-1 shadow-inner">
                          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Batch Status</p>
                          <p className="text-xs font-bold text-foreground mt-2 uppercase">{batch.status}</p>
                       </div>
                    </div>

                    <Button variant="outline" className="w-full h-12 rounded-xl text-[10px] uppercase font-bold tracking-widest border-white/10 group-hover:bg-white/5 transition-all">
                       Trace Consumption Genealogy <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
           </div>
        </TabsContent>

        <TabsContent value="adjustments" className="animate-in fade-in duration-500">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                 <Card className="bg-white/5 border-white/10 shadow-2xl p-8 space-y-8">
                    <div className="space-y-2">
                       <h3 className="text-2xl font-headline font-bold uppercase">Manual Correction Hub</h3>
                       <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                          Correct physical discrepancies, damages or returns. All adjustments require forensic reasoning.
                       </p>
                    </div>
                    <form className="space-y-6" onSubmit={handleAuthorizeAdjustment}>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Context SKU</label>
                             <Input placeholder="AZ-SKU-CODE" className="h-12 bg-black/20 border-white/10 rounded-xl font-mono uppercase" required />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Target Node</label>
                             <Select required>
                                <SelectTrigger className="h-12 bg-black/20 border-white/10 rounded-xl">
                                  <SelectValue placeholder="Select Warehouse" />
                                </SelectTrigger>
                                <SelectContent className="glass">
                                   <SelectItem value="blr">Bengaluru HQ</SelectItem>
                                   <SelectItem value="mum">Mumbai Hub</SelectItem>
                                   <SelectItem value="del">Delhi Hub</SelectItem>
                                </SelectContent>
                             </Select>
                          </div>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Adjustment Classification</label>
                             <Select required>
                                <SelectTrigger className="h-12 bg-black/20 border-white/10 rounded-xl">
                                  <SelectValue placeholder="Select Type" />
                                </SelectTrigger>
                                <SelectContent className="glass">
                                   <SelectItem value="gain">Physical Gain (+)</SelectItem>
                                   <SelectItem value="loss">Physical Loss (-)</SelectItem>
                                   <SelectItem value="damage">Damage Write-off</SelectItem>
                                   <SelectItem value="return">Vendor Return</SelectItem>
                                </SelectContent>
                             </Select>
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Qty Magnitude</label>
                             <Input type="number" placeholder="0" className="h-12 bg-black/20 border-white/10 rounded-xl" required />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Correction Reason / Audit Reference</label>
                          <textarea className="w-full h-32 bg-black/20 border border-white/10 rounded-2xl p-6 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary/40" placeholder="Forensic reasoning required for immutable ledger entry..." required />
                       </div>
                       <Button variant="gradient" disabled={isAdjusting} className="w-full h-14 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">
                          {isAdjusting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <>Authorize Adjustment Protocol <ArrowRight className="w-4 h-4 ml-2" /></>}
                       </Button>
                    </form>
                 </Card>
              </div>

              <div className="space-y-8">
                 <Card className="bg-amber-500/5 border border-amber-500/20 p-8 rounded-[32px] space-y-6">
                    <div className="flex items-center gap-3 text-amber-500">
                       <AlertCircle className="w-6 h-6" />
                       <h4 className="text-sm font-bold uppercase tracking-widest leading-none">Security Warning</h4>
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">
                       Manual stock corrections are flagged for Executive Review. IP metadata and terminal identity are embedded into the adjustment record.
                    </p>
                 </Card>

                 <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground ml-2">Recent Write-offs</h3>
                    {[
                       { hub: "BLR HQ", date: "Jun 16", mismatch: "-2 Rolls", reason: "Transit Damage" },
                       { hub: "MUM Hub", date: "Jun 12", mismatch: "+1 Unit", reason: "Cycle Count" },
                    ].map((a, i) => (
                       <div key={i} className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-primary/20 transition-all">
                          <div className="space-y-1">
                             <p className="text-[10px] font-bold text-foreground uppercase">{a.hub}</p>
                             <p className="text-[8px] text-muted-foreground font-bold uppercase">{a.reason} • {a.date}</p>
                          </div>
                          <span className={cn("text-xs font-bold font-headline", a.mismatch.includes('-') ? "text-red-500" : "text-green-500")}>{a.mismatch}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </TabsContent>

        <TabsContent value="transfers" className="animate-in fade-in duration-500">
           <Card className="p-12 border-2 border-dashed border-white/10 rounded-[40px] text-center space-y-6 bg-white/[0.01]">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                 <RefreshCw className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                 <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-foreground">Inter-Node Transfer Terminal</h3>
                 <p className="text-sm text-muted-foreground max-w-sm mx-auto font-medium uppercase tracking-widest leading-relaxed">
                    Balance national stock by shifting material between regional hubs. Requires logistics authorization and weight verification.
                 </p>
              </div>
              <Button variant="outline" className="h-12 px-8 rounded-2xl border-white/10 text-[10px] uppercase font-bold tracking-widest">Open Transfer Pipeline</Button>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
