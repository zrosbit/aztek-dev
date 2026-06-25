"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ShieldCheck, 
  Search, 
  Plus, 
  ExternalLink, 
  QrCode, 
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Mail,
  MessageSquare,
  History,
  FileBadge,
  ArrowRight,
  Loader2,
  X,
  Upload,
  ChevronRight,
  FileText,
  Camera
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function PartnerWarrantyPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isRegistering, setIsRegistering] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedClaim, setSelectedClaim] = useState<any>(null)

  const warranties = [
    { id: "AZ-2026-KA-00421", customer: "Rahul Mehta", vehicle: "BMW X5 (KA01MX2024)", product: "Full Body PPF", status: "ACTIVE", date: "Oct 24, 2024" },
    { id: "AZ-2026-KA-00398", customer: "Aditi Rao", vehicle: "BMW i7 (KA05NB1102)", product: "Ceramic Gold", status: "ACTIVE", date: "Aug 12, 2024" },
  ]

  const assignedClaims = [
    { 
      id: "AZ-CLM-BLR-00042", 
      warrantyId: "AZ-2026-KA-00421", 
      customer: "Rahul M.", 
      type: "Edge Lifting", 
      status: "APPROVED", 
      date: "Oct 26",
      desc: "Minor film lift along the lower radiator intake vent on the passenger side.",
      evidence: [1, 2, 3].map(i => `https://picsum.photos/seed/evid${i}/400/300`)
    },
  ]

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsRegistering(false)
      setActiveTab("vault")
      toast({ title: "Warranty Registered", description: "ID transmitted to eWarrantyFy and customer notified." })
    }, 2000)
  }

  const handleResolveClaim = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setSelectedClaim(null)
      toast({ title: "Claim Resolved", description: "Resolution protocol transmitted to Admin for sign-off." })
    }, 2000)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">eWarrantyFy <span className="text-az-blue italic">Portal</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Digital Registry & Lifecycle Management</p>
         </div>
         <div className="flex gap-4">
            <Button variant="outline" className="rounded-2xl h-12 border-white/10 gap-2 text-[10px] uppercase font-bold tracking-widest"><History className="w-4 h-4" /> Sync History</Button>
            <Button variant="gradient" className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2" onClick={() => setIsRegistering(true)}>
              <Plus className="w-4 h-4" /> Register New Warranty
            </Button>
         </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto overflow-x-auto scrollbar-hide">
          <TabsTrigger value="dashboard" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest data-[state=active]:bg-az-blue">
            Performance
          </TabsTrigger>
          <TabsTrigger value="vault" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest data-[state=active]:bg-az-blue">
            Warranty Vault
          </TabsTrigger>
          <TabsTrigger value="claims" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest data-[state=active]:bg-az-blue">
            Claims Queue <Badge variant="secondary" className="bg-red-500/20 text-red-500 text-[8px] ml-1">{assignedClaims.length}</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: "Active Policies", val: "582", color: "text-az-blue" },
              { label: "Issued (MTD)", val: "34", color: "text-az-success" },
              { label: "Claims Resolved", val: "12", color: "text-purple-500" },
              { label: "Expiring 60d", val: "18", color: "text-az-warning" },
            ].map((s) => (
              <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-2">
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                 <p className={cn("text-3xl font-headline font-bold", s.color)}>{s.val}</p>
              </Card>
            ))}
          </div>

          <Card className="bg-white/5 border-white/10 p-12 text-center border-2 border-dashed rounded-[40px]">
             <div className="max-w-md mx-auto space-y-6">
                <div className="w-16 h-16 rounded-full bg-az-blue/10 flex items-center justify-center mx-auto">
                   <ShieldCheck className="w-8 h-8 text-az-blue" />
                </div>
                <h3 className="text-xl font-headline font-bold uppercase tracking-tight">Standardized Protection</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed uppercase tracking-tight">Your studio is currently maintaining a 99.2% warranty issuance rate from completed job cards.</p>
             </div>
          </Card>
        </TabsContent>

        <TabsContent value="vault" className="space-y-4">
          <div className="flex gap-4">
             <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search Vault by ID, Customer, Vehicle or Phone..." className="pl-10 h-12 bg-white/5 border-white/5 rounded-2xl" />
             </div>
             <Button variant="outline" className="h-12 px-6 rounded-2xl border-white/10 text-[10px] uppercase font-bold tracking-widest">
                <FileBadge className="w-4 h-4 mr-2" /> Bulk Export
             </Button>
          </div>

          <div className="space-y-3">
            {warranties.map((w) => (
              <Card key={w.id} className="bg-white/5 border-white/10 hover:border-az-blue/30 transition-all cursor-pointer group shadow-xl">
                <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <QrCode className="w-7 h-7 opacity-20 group-hover:opacity-100 transition-all text-az-blue" />
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                       <p className="font-mono text-xs font-bold text-az-blue">{w.id}</p>
                       <h4 className="text-lg font-bold group-hover:text-az-blue transition-colors text-foreground uppercase">{w.customer}</h4>
                       <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{w.vehicle}</p>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">Protection Product</p>
                          <p className="text-sm font-bold text-foreground">{w.product}</p>
                       </div>
                       <Badge className="bg-az-success/10 text-az-success border-az-success/20 text-[9px] uppercase font-bold">{w.status}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full lg:w-auto">
                    <Button variant="outline" size="icon" className="h-12 w-12 border-white/10 rounded-xl bg-white/5"><ExternalLink className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="h-12 w-12 border-white/10 rounded-xl bg-white/5"><Mail className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="h-12 w-12 border-white/10 rounded-xl bg-white/5"><MessageSquare className="w-4 h-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="claims" className="space-y-4">
           {assignedClaims.length > 0 ? (
             <div className="space-y-4">
               {assignedClaims.map((claim) => (
                 <Card key={claim.id} className="bg-white/5 border-white/10 hover:border-az-blue/40 transition-all cursor-pointer group shadow-xl" onClick={() => setSelectedClaim(claim)}>
                    <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-8">
                       <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                          <AlertTriangle className="w-7 h-7" />
                       </div>
                       <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="space-y-1">
                             <p className="font-mono text-xs font-bold text-az-blue">{claim.id}</p>
                             <h4 className="text-lg font-bold uppercase tracking-tighter text-foreground group-hover:text-az-blue transition-colors">{claim.type}</h4>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Policy Context</p>
                             <p className="text-xs font-bold">{claim.warrantyId}</p>
                          </div>
                          <div className="flex items-center justify-between md:justify-end gap-12">
                             <div className="text-right space-y-1">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Instruction</p>
                                <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-[9px] uppercase font-bold">Awaiting Action</Badge>
                             </div>
                          </div>
                       </div>
                       <Button size="icon" variant="ghost" className="text-muted-foreground group-hover:text-az-blue transition-colors">
                          <ChevronRight className="w-5 h-5" />
                       </Button>
                    </CardContent>
                 </Card>
               ))}
             </div>
           ) : (
             <div className="p-12 border-2 border-dashed border-white/10 rounded-[40px] text-center space-y-4 bg-white/[0.02]">
                <AlertTriangle className="w-12 h-12 mx-auto text-az-warning opacity-30" />
                <div className="space-y-1">
                   <h3 className="font-headline font-bold uppercase text-lg">No Active Claims</h3>
                   <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Warranties raised by your studio are performing within spec.</p>
                </div>
             </div>
           )}
        </TabsContent>
      </Tabs>

      {/* Claim Processing Dialog */}
      <Dialog open={!!selectedClaim} onOpenChange={() => setSelectedClaim(null)}>
        <DialogContent className="max-w-5xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl h-[85vh] flex flex-col">
           <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="space-y-1">
                 <div className="flex items-center gap-3">
                    <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">{selectedClaim?.id}</DialogTitle>
                    <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 text-[10px] uppercase font-bold">Resolution Protocol</Badge>
                 </div>
                 <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Assigned Support Request / Bangalore Hub</p>
              </div>
              <Button size="icon" variant="ghost" onClick={() => setSelectedClaim(null)} className="rounded-full hover:bg-white/5"><X className="w-5 h-5" /></Button>
           </div>

           <div className="flex-1 overflow-y-auto p-12 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                    <div className="space-y-4">
                       <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-az-blue">Technical Briefing</h3>
                       <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                          <p className="text-sm font-medium text-foreground leading-relaxed italic">"{selectedClaim?.desc}"</p>
                          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-t border-white/5 pt-4">
                             <Calendar className="w-4 h-4" /> Received: {selectedClaim?.date}
                          </div>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-az-blue">Evidence Documentation</h3>
                       <div className="grid grid-cols-3 gap-3">
                          {selectedClaim?.evidence.map((img: string, idx: number) => (
                            <div key={idx} className="aspect-square rounded-xl overflow-hidden border border-white/10">
                               <img src={img} className="w-full h-full object-cover" alt="Evidence" />
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="space-y-8">
                    <div className="space-y-4">
                       <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-az-blue">Resolution Protocol</h3>
                       <div className="space-y-4">
                          <div className="space-y-2">
                             <label className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Rectification Notes *</label>
                             <Textarea required placeholder="Describe the corrective actions taken..." className="min-h-[150px] bg-background/50 border-white/10 rounded-2xl text-sm" />
                          </div>
                          <div className="p-8 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-2xl flex flex-col items-center justify-center gap-3 group hover:border-az-blue/30 transition-all cursor-pointer">
                             <Camera className="w-6 h-6 text-muted-foreground group-hover:text-az-blue" />
                             <span className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest">Upload After-Photos</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-8 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
              <Button variant="ghost" onClick={() => setSelectedClaim(null)} className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Exit Without Saving</Button>
              <Button disabled={isProcessing} className="h-12 px-12 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl" onClick={handleResolveClaim}>
                 {isProcessing ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : "Mark Resolved & Transmit"}
              </Button>
           </div>
        </DialogContent>
      </Dialog>

      {/* Registration Dialog */}
      <Dialog open={isRegistering} onOpenChange={(o) => { if(!isProcessing) setIsRegistering(o); }}>
        <DialogContent className="max-w-3xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={handleRegister}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Issue Digital Certificate</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Direct eWarrantyFy API Integration — Phase 1</DialogDescription>
            </DialogHeader>

            <div className="p-8 space-y-10 max-h-[60vh] overflow-y-auto">
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-az-blue">Customer Intelligence</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Input required placeholder="Customer Full Name" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                  <Input required type="email" placeholder="Customer Email" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                </div>
                <Input required placeholder="Customer Phone (+91 ...)" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-az-blue">Asset Description</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Input required placeholder="Vehicle Registration / Property Ref" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                  <Input required placeholder="Make & Model" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-az-blue">Warranty Parameters</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Select required>
                    <SelectTrigger className="bg-white/5 border-white/5 h-12 rounded-xl text-sm">
                      <SelectValue placeholder="Product Track" />
                    </SelectTrigger>
                    <SelectContent className="bg-az-midnight border-white/10">
                      <SelectItem value="ppf">Automotive PPF Full Body</SelectItem>
                      <SelectItem value="ceramic">Ceramic Gold 5yr</SelectItem>
                      <SelectItem value="moto">Moto Shield Pro</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input required type="number" placeholder="Term (Years)" defaultValue={10} className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
                 <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Generated ID Preview</p>
                    <p className="text-xl font-headline font-bold text-foreground">AZ-2026-KA-00425</p>
                 </div>
                 <div className="w-12 h-12 rounded-lg bg-az-blue/10 border border-az-blue/20 flex items-center justify-center text-az-blue">
                    <QrCode className="w-6 h-6" />
                 </div>
              </div>
            </div>

            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
              <Button type="button" variant="ghost" onClick={() => setIsRegistering(false)} className="text-[10px] font-bold uppercase tracking-widest">Cancel</Button>
              <Button type="submit" disabled={isProcessing} className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">
                {isProcessing ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Issuing Digital Cert...</> : <>Register & Deliver <ArrowRight className="w-4 h-4 ml-2" /></>}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
