
"use client"

import { use, useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Car, 
  Building2, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  History,
  FileText,
  CreditCard,
  UserPlus,
  Zap,
  CheckCircle2,
  ChevronRight,
  MoreVertical,
  Camera,
  MessageSquare,
  Plus,
  Share2,
  X,
  Loader2
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

export default function Customer360Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [activeTab, setActiveTab] = useState("overview")
  const [isAddingAsset, setIsAddingAsset] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const customer = {
    id: id,
    name: "Rahul Sharma",
    phone: "+91 99887 76655",
    email: "rahul.sharma@example.com",
    address: "Whitefield, Bengaluru, KA 560066",
    status: "Premium",
    clv: "₹1,42,500",
    joinDate: "Oct 2024",
    vehicles: [
      { registration: "KA01MX2024", make: "Porsche", model: "911 GT3", product: "Stealth PPF", date: "Oct 24, 2024" }
    ],
    properties: [],
    orders: [
      { id: "AZ-QT-BLR-00421", date: "Oct 24, 2024", total: "₹1,25,000", status: "FULFILLED" },
      { id: "AZ-QT-BLR-00392", date: "Sep 12, 2024", total: "₹17,500", status: "FULFILLED" }
    ],
    warranties: [
      { id: "AZ-2026-KA-11242", product: "PPF Full Body", status: "ACTIVE", expiry: "Oct 2034" }
    ],
    claims: [
      { id: "CLM-9942", type: "Edge Lifting", status: "UNDER_REVIEW", date: "2h ago" }
    ],
    referrals: [
      { name: "Amit Desai", status: "CONVERTED", reward: "₹2,500 Credit" }
    ]
  }

  const handleAddAsset = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsAddingAsset(false)
      toast({
        title: "Asset Linked",
        description: "New vehicle configuration has been added to the customer profile.",
      })
    }, 1500)
  }

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Button asChild variant="ghost" className="h-12 w-12 rounded-full border border-white/5 bg-white/5 p-0">
             <Link href="/admin/customers"><ArrowLeft className="w-5 h-5" /></Link>
          </Button>
          <div className="space-y-1">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">{customer.name}</h1>
              <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] uppercase font-bold tracking-widest px-3 py-1">{customer.status}</Badge>
            </div>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Profile ID: {customer.id} • Verified Since {customer.joinDate}</p>
          </div>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <MessageSquare className="w-4 h-4 text-az-success" /> WhatsApp
           </Button>
           <Button variant="gradient" className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl rounded-2xl">
              <FileText className="w-4 h-4" /> Generate Report
           </Button>
        </div>
      </div>

      {mounted ? (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-10">
          <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto">
            <TabsTrigger value="overview" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Overview</TabsTrigger>
            <TabsTrigger value="assets" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Asset Portfolio</TabsTrigger>
            <TabsTrigger value="history" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Commercial History</TabsTrigger>
            <TabsTrigger value="referrals" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Referrals</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-10 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-white/5 border-white/10 p-8 space-y-10">
                  <div className="space-y-6">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Identity Intelligence</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all">
                              <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                              <span className="text-sm font-bold">{customer.phone}</span>
                            </div>
                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all">
                              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                              <span className="text-sm font-bold">{customer.email}</span>
                            </div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all">
                            <div className="flex items-start gap-4">
                              <MapPin className="w-5 h-5 text-muted-foreground group-hover:text-primary mt-1" />
                              <span className="text-sm font-bold leading-relaxed">{customer.address}</span>
                            </div>
                        </div>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/5">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Lifetime Spend</p>
                        <p className="text-3xl font-headline font-bold text-primary">{customer.clv}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Net Margin</p>
                        <p className="text-3xl font-headline font-bold text-foreground">₹72.4k</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Satisfaction Score</p>
                        <p className="text-3xl font-headline font-bold text-az-success">4.9/5</p>
                      </div>
                  </div>
                </Card>

                <div className="space-y-8">
                  <Card className="bg-primary/5 border-primary/20 p-8 rounded-[32px] space-y-6 relative overflow-hidden">
                      <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3 text-primary">
                            <ShieldCheck className="w-6 h-6" />
                            <h4 className="text-sm font-bold uppercase tracking-widest">Active Protection</h4>
                        </div>
                        <div className="space-y-4">
                            {customer.warranties.map(w => (
                              <div key={w.id} className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-bold text-foreground uppercase">{w.product}</p>
                                    <p className="text-[9px] text-muted-foreground font-mono">{w.id}</p>
                                </div>
                                <Badge className="bg-az-success/10 text-az-success text-[8px]">{w.status}</Badge>
                              </div>
                            ))}
                        </div>
                        <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-primary/20">Verify Registry Status</Button>
                      </div>
                  </Card>

                  <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Zap className="w-5 h-5" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest">Relationship Trigger</h4>
                      </div>
                      <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">Customer has a high-value Porsche asset with single protection. Recommend Architectural ROI for home garage or villa.</p>
                      <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10">Mark as Opportunity</Button>
                  </Card>
                </div>
            </div>
          </TabsContent>

          <TabsContent value="assets" className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {customer.vehicles.map(v => (
                  <Card key={v.registration} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-2xl group overflow-hidden">
                    <div className="aspect-video relative bg-black/40 border-b border-white/5 overflow-hidden">
                        <img src="https://picsum.photos/seed/porsche360/800/600" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Vehicle" />
                        <div className="absolute top-6 left-6 flex gap-2">
                          <Badge className="bg-primary text-white border-none">{v.registration}</Badge>
                          <Badge variant="outline" className="bg-black/60 backdrop-blur-md text-white border-white/10">{v.make} {v.model}</Badge>
                        </div>
                    </div>
                    <CardContent className="p-8 space-y-8">
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                              <p className="text-[10px] font-bold text-muted-foreground uppercase">Primary Layer</p>
                              <h4 className="text-xl font-bold uppercase text-foreground">{v.product}</h4>
                          </div>
                          <div className="text-right space-y-1">
                              <p className="text-[10px] font-bold text-muted-foreground uppercase">Installed</p>
                              <p className="text-sm font-bold text-foreground">{v.date}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                          <Button variant="outline" className="rounded-xl h-11 text-[9px] uppercase font-bold border-white/10">Job Documentation</Button>
                          <Button variant="outline" className="rounded-xl h-11 text-[9px] uppercase font-bold border-white/10">Photos</Button>
                        </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card 
                  onClick={() => setIsAddingAsset(true)}
                  className="border-2 border-dashed border-white/5 bg-white/[0.01] flex flex-col items-center justify-center p-12 text-center space-y-6 rounded-[32px] group hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all">
                      <Plus className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                      <h4 className="text-lg font-bold uppercase tracking-tight">Build this</h4>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold">Add another vehicle or property to this profile</p>
                  </div>
                </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="animate-in fade-in duration-500">
            <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
                <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/5">
                      <tr>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Order / ID</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Date</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Type</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Amount</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
                        <th className="p-6"></th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                      {customer.orders.map((o, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="p-6">
                              <span className="font-mono text-xs font-bold text-primary">{o.id}</span>
                          </td>
                          <td className="p-6">
                              <span className="text-sm font-medium">{o.date}</span>
                          </td>
                          <td className="p-6">
                              <Badge variant="outline" className="text-[8px] uppercase font-bold border-white/10">Standard Project</Badge>
                          </td>
                          <td className="p-6 text-right">
                              <span className="text-sm font-headline font-bold text-foreground">{o.total}</span>
                          </td>
                          <td className="p-6 text-center">
                              <Badge className="bg-az-success/10 text-az-success text-[8px] uppercase font-bold">{o.status}</Badge>
                          </td>
                          <td className="p-6 text-right">
                              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><ChevronRight className="w-4 h-4" /></Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
            </div>
          </TabsContent>

          <TabsContent value="referrals" className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 space-y-4">
                  {customer.referrals.map((r, i) => (
                    <Card key={i} className="bg-white/5 border-white/10 p-6 flex flex-col md:flex-row items-center justify-between shadow-xl">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                              <UserPlus className="w-6 h-6" />
                          </div>
                          <div className="space-y-1">
                              <h4 className="font-bold text-sm uppercase tracking-widest text-foreground">{r.name}</h4>
                              <p className="text-[10px] text-muted-foreground uppercase font-bold">Status: {r.status}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-10">
                          <div className="text-right space-y-1">
                              <p className="text-[10px] font-bold text-muted-foreground uppercase">Reward Earned</p>
                              <p className="text-sm font-bold text-primary">{r.reward}</p>
                          </div>
                          <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl text-[9px] uppercase font-bold border-white/10">Record Detail</Button>
                        </div>
                    </Card>
                  ))}
                  
                  {customer.referrals.length === 0 && (
                    <div className="p-20 border-2 border-dashed border-white/5 rounded-[40px] text-center bg-white/[0.01]">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">No referral history detected for this profile.</p>
                    </div>
                  )}
                </div>

                <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-8">
                  <div className="space-y-2">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Referral Link</h4>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Global conversion identifier</p>
                  </div>
                  <div className="relative">
                      <Input readOnly value="AZ-REF-RAHUL-42" className="bg-black/40 border-white/10 h-12 rounded-xl text-xs font-mono pr-20" />
                      <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 text-[9px] uppercase font-bold text-primary" onClick={() => toast({ title: "Copied", description: "Referral code added to clipboard." })}>Copy</Button>
                  </div>
                  <div className="pt-8 border-t border-white/5 space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-muted-foreground">Lifetime Rewards</span>
                        <span className="text-foreground">₹2,500</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-muted-foreground">Pending Payouts</span>
                        <span className="text-foreground">₹0.00</span>
                      </div>
                  </div>
                </Card>
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="h-96 w-full bg-white/5 border border-white/10 rounded-3xl animate-pulse" />
      )}

      {/* Register New Asset Dialog */}
      <Dialog open={isAddingAsset} onOpenChange={(o) => { if(!isProcessing) setIsAddingAsset(o); }}>
        <DialogContent className="max-w-2xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={handleAddAsset}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Register New Asset</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Establish new Vehicle or Property profile</DialogDescription>
            </DialogHeader>
            <div className="p-8 space-y-8">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase text-muted-foreground">Asset Type</label>
                     <Select required>
                        <SelectTrigger className="h-12 bg-white/5 border-white/5 rounded-xl"><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent className="glass"><SelectItem value="v">Vehicle</SelectItem><SelectItem value="p">Property</SelectItem></SelectContent>
                     </Select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase text-muted-foreground">Primary Identifier</label>
                     <Input required placeholder="Reg No. or Plot No." className="h-12 bg-white/5 border-white/5 rounded-xl" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Full Description</label>
                  <Input required placeholder="e.g. Porsche 911 GT3 RS / Main Facade Glass" className="h-12 bg-white/5 border-white/5 rounded-xl" />
               </div>
            </div>
            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
               <Button type="button" variant="ghost" onClick={() => setIsAddingAsset(false)} className="text-[10px] font-bold uppercase">Cancel</Button>
               <Button disabled={isProcessing} className="h-12 px-8 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl">
                  {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Create Asset Profile"}
               </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
