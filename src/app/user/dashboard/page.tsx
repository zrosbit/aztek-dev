
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ExternalLink, 
  QrCode, 
  Clock,
  ArrowRight,
  Shield,
  RefreshCw,
  AlertTriangle,
  UserPlus,
  Loader2,
  Bell,
  Zap,
  Info,
  Car,
  Building2,
  History,
  Target,
  Share2,
  Trophy,
  CheckCircle2,
  Plus,
  Smartphone,
  Phone,
  Mail,
  MoreVertical,
  ChevronRight,
  Briefcase,
  MessageSquare
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CustomerPortalExpanded() {
  const [activeTab, setActiveTab] = useState("overview")
  const [transferringId, setTransferringId] = useState<string | null>(null)
  const [isLinking, setIsLinking] = useState(false)
  const [isAddingAsset, setIsAddingAsset] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeAssets = [
    { 
      id: "V-9942",
      type: "vehicle",
      name: "BMW X5 xDrive40i",
      reg: "KA01MX2024",
      warranties: [
        { id: "AZ-2026-KA-11242", product: "AZTEK Pro Ultra PPF", status: "ACTIVE", expiry: "Jun 2036" }
      ],
      transferable: true
    },
    { 
      id: "P-8821",
      type: "property",
      name: "Whitefield Villa - North Block",
      reg: "Plot 42A",
      warranties: [
        { id: "AZ-2025-ARCH-0042", product: "Architectural Solar Shield", status: "ACTIVE", expiry: "Oct 2035" }
      ],
      transferable: true
    },
    { 
      id: "V-9912",
      type: "vehicle",
      name: "Ducati Panigale V4S",
      reg: "TN01NB1122",
      warranties: [
        { id: "AZ-2024-MOTO-0932", product: "Moto Shield Pro Kit", status: "EXPIRING_SOON", expiry: "Aug 2026", alert: "60 Days" }
      ],
      transferable: false
    }
  ]

  const serviceHistory = [
    { date: "Oct 24, 2026", action: "Warranty Registered", ref: "AZ-2026-KA-11242", hub: "Bangalore HQ", type: "system" },
    { date: "Oct 22, 2026", action: "Full Body PPF Install", ref: "BMW X5", hub: "Elite Wraps Studio", type: "job" },
    { date: "Aug 15, 2026", action: "Claim Resolved", ref: "CLM-9912", hub: "Nexus Admin", type: "claim" },
    { date: "Jun 12, 2026", action: "6-Month Inspection", ref: "9H Ceramic", hub: "Detailing Hub Chennai", type: "maintenance" },
  ]

  const referralData = {
    code: "AZ-REF-RAHUL-42",
    stats: [
      { label: "Friends Referred", val: "12", icon: UserPlus, color: "text-blue-500" },
      { label: "Successful Conversions", val: "03", icon: CheckCircle2, color: "text-green-500" },
      { label: "Rewards Earned", val: "₹7,500", icon: Trophy, color: "text-amber-500" },
    ],
    history: [
      { name: "Amit Desai", status: "CONVERTED", date: "Oct 24", reward: "₹2,500 Credit" },
      { name: "Siddharth M.", status: "PENDING", date: "Oct 20", reward: "--" },
    ]
  }

  const handleAction = (msg: string) => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setTransferringId(null)
      setIsLinking(false)
      setIsAddingAsset(false)
      toast({ title: "Action Complete", description: msg })
    }, 1500)
  }

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Client <span className="text-primary italic">Terminal</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Protocol B17: Full Ecosystem Access</p>
         </div>
         <div className="flex gap-4">
            <Button variant="outline" className="rounded-2xl h-12 border-white/5 gap-2 text-[10px] uppercase font-bold tracking-widest" onClick={() => setIsLinking(true)}>
               <RefreshCw className="w-4 h-4" /> Sync Registry
            </Button>
            <Button variant="gradient" asChild className="rounded-2xl h-12 px-8 text-[10px] uppercase font-bold tracking-widest shadow-xl">
               <Link href="/user/claims/new">Raise Claim</Link>
            </Button>
         </div>
      </div>

      {mounted ? (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-10">
          <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto overflow-x-auto scrollbar-hide">
            <TabsTrigger value="overview" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
              Overview
            </TabsTrigger>
            <TabsTrigger value="assets" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
              My Assets & Vault
            </TabsTrigger>
            <TabsTrigger value="history" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
              Service History
            </TabsTrigger>
            <TabsTrigger value="referrals" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
              Referrals & Rewards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-10 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="bg-primary/5 border-primary/20 p-8 rounded-[32px] relative overflow-hidden group">
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3 text-primary">
                              <Shield className="w-6 h-6" />
                              <h4 className="text-sm font-bold uppercase tracking-widest">Active Protection</h4>
                            </div>
                            <p className="text-3xl font-headline font-bold text-foreground">03 <span className="text-xs text-muted-foreground uppercase font-medium">Assets Covered</span></p>
                            <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-primary/20 bg-primary/10" onClick={() => setActiveTab("assets")}>Open Vault</Button>
                        </div>
                        <Shield className="absolute -bottom-10 -right-10 w-48 h-48 text-primary opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                      </Card>

                      <Card className="bg-amber-500/5 border-amber-500/20 p-8 rounded-[32px] space-y-6">
                        <div className="flex items-center gap-3 text-amber-500">
                            <Bell className="w-6 h-6 animate-pulse" />
                            <h4 className="text-sm font-bold uppercase tracking-widest">Action Required</h4>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">1 Warranty (Ducati V4S) is expiring in 60 days. Schedule a ceramic refresher for continued coverage.</p>
                        <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-amber-500/20">Book Inspection</Button>
                      </Card>
                  </div>

                  <Card className="bg-white/5 border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
                      <CardHeader className="p-8 border-b border-white/5">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm uppercase tracking-widest">Recent Activity Ledger</CardTitle>
                            <Button variant="ghost" size="sm" className="text-[10px] uppercase font-bold text-primary" onClick={() => setActiveTab("history")}>View Full History</Button>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="divide-y divide-white/5">
                            {serviceHistory.slice(0, 3).map((h, i) => (
                              <div key={i} className="flex items-center justify-between p-6 hover:bg-white/[0.02] transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-muted-foreground">
                                      <History className="w-5 h-5" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-bold uppercase text-foreground">{h.action}</p>
                                      <p className="text-[10px] text-muted-foreground uppercase font-bold">{h.ref} • {h.hub}</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-muted-foreground uppercase">{h.date}</span>
                              </div>
                            ))}
                        </div>
                      </CardContent>
                  </Card>
                </div>

                <div className="space-y-8">
                  <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-8">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Refer & Earn</h4>
                        <p className="text-[10px] text-muted-foreground uppercase font-bold leading-relaxed">Refer a friend to any AZTEK hub and earn service credits once their protection is registered.</p>
                      </div>
                      <div className="p-6 bg-black/20 rounded-2xl border border-white/5 space-y-4">
                        <div className="space-y-1">
                            <span className="text-[9px] font-bold text-muted-foreground uppercase">Your Unique Code</span>
                            <p className="text-lg font-mono font-bold text-primary tracking-widest">{referralData.code}</p>
                      </div>
                        <Button className="w-full h-10 rounded-xl text-[9px] uppercase font-bold" onClick={() => toast({ title: "Copied", description: "Code added to clipboard." })}>Share Code</Button>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest pt-4 border-t border-white/5">
                        <span className="text-muted-foreground">Rewards Credited</span>
                        <span className="text-foreground">₹7,500</span>
                      </div>
                  </Card>

                  <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-4">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Zap className="w-5 h-5" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest">Network Alert</h4>
                      </div>
                      <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-medium">New monsoon protection campaign is active. Visit any certified hub for free hydrophobicity testing.</p>
                  </Card>
                </div>
            </div>
          </TabsContent>

          <TabsContent value="assets" className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground">My Registered Assets</h3>
                <Button variant="outline" className="h-10 rounded-xl border-white/10 gap-2 text-[10px] uppercase font-bold" onClick={() => setIsAddingAsset(true)}>
                  <Plus className="w-4 h-4" /> Add Asset
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {activeAssets.map((asset) => (
                  <Card key={asset.id} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-2xl overflow-hidden group">
                    <div className="aspect-video relative bg-black/40 overflow-hidden border-b border-white/5">
                        <img src={`https://picsum.photos/seed/asset${asset.id}/800/450`} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={asset.name} />
                        <div className="absolute top-6 left-6 flex gap-2">
                          <Badge className="bg-primary text-white border-none">{asset.reg}</Badge>
                          <Badge variant="outline" className="bg-black/60 backdrop-blur-md text-white border-white/10">{asset.type === 'vehicle' ? 'Vehicle' : 'Property'}</Badge>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                          <div className="glass px-4 py-2 rounded-xl border-white/10">
                              <p className="text-lg font-headline font-bold text-white uppercase tracking-tight">{asset.name}</p>
                          </div>
                        </div>
                    </div>
                    <CardContent className="p-8 space-y-8">
                        <div className="space-y-4">
                          <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest">Linked Warranties</h5>
                          {asset.warranties.map(w => (
                            <div key={w.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-primary/20 transition-all">
                                <div className="space-y-1">
                                  <p className="text-[10px] font-bold text-az-blue font-mono">{w.id}</p>
                                  <p className="text-sm font-bold text-foreground uppercase">{w.product}</p>
                                  <p className="text-[9px] text-muted-foreground uppercase font-bold">Expires: {w.expiry}</p>
                                </div>
                                <div className="flex gap-2 mt-4 md:mt-0">
                                  <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl border-white/5 text-[9px] uppercase font-bold">Download Cert</Button>
                                  <Button size="icon" variant="outline" className="h-9 w-9 border-white/5"><ExternalLink className="w-3.5 h-3.5" /></Button>
                                </div>
                            </div>
                          ))}
                        </div>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <Button variant="ghost" className="text-[9px] uppercase font-bold text-muted-foreground hover:text-foreground">Maintenance Log</Button>
                          {asset.transferable && (
                            <button 
                              className="text-[9px] uppercase font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                              onClick={() => setTransferringId(asset.id)}
                            >
                              <Share2 className="w-3.5 h-3.5" /> Transfer Ownership
                            </button>
                          )}
                        </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="animate-in fade-in duration-500">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-8">
                  {serviceHistory.map((item, i) => (
                    <div key={i} className="flex gap-8 items-start group">
                        <div className="flex flex-col items-center gap-3">
                          <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xl transition-all group-hover:scale-110 duration-500",
                            item.type === 'job' ? "bg-blue-500/10 border-blue-500/20 text-blue-500" :
                            item.type === 'claim' ? "bg-amber-500/10 border-amber-500/20 text-amber-500" :
                            "bg-primary/10 border-primary/20 text-primary"
                          )}>
                              {item.type === 'job' ? <Briefcase className="w-5 h-5" /> : 
                              item.type === 'claim' ? <AlertTriangle className="w-5 h-5" /> : 
                              item.type === 'maintenance' ? <Zap className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
                          </div>
                          {i !== serviceHistory.length - 1 && <div className="w-px h-24 bg-white/5" />}
                        </div>
                        <div className="flex-1 space-y-4 pt-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                              <h4 className="text-xl font-headline font-bold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">{item.action}</h4>
                              <span className="text-[10px] font-bold text-muted-foreground uppercase bg-white/5 px-3 py-1 rounded-full">{item.date}</span>
                          </div>
                          <div className="p-6 rounded-[28px] bg-white/[0.02] border border-white/5 space-y-4 shadow-inner">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="space-y-1">
                                    <p className="text-[9px] font-bold text-muted-foreground uppercase">Reference</p>
                                    <p className="text-xs font-bold text-foreground truncate">{item.ref}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] font-bold text-muted-foreground uppercase">Location Hub</p>
                                    <p className="text-xs font-bold text-foreground truncate">{item.hub}</p>
                                </div>
                                <div className="space-y-1 col-span-2">
                                    <p className="text-[9px] font-bold text-muted-foreground uppercase">Record Status</p>
                                    <div className="flex items-center gap-2">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-az-success" />
                                      <span className="text-[10px] font-bold text-az-success uppercase">Verified Integrity</span>
                                    </div>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" className="h-8 text-[9px] uppercase font-bold p-0 text-primary hover:bg-transparent hover:translate-x-2 transition-all">
                                View Record Detail <ChevronRight className="w-3 h-3 ml-2" />
                              </Button>
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
            </div>
          </TabsContent>

          <TabsContent value="referrals" className="space-y-12 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {referralData.stats.map((s, i) => (
                  <Card key={i} className="bg-white/5 border-white/10 p-8 space-y-4 hover:border-primary/20 transition-all shadow-2xl">
                    <div className={cn("w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center", s.color)}>
                        <s.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                        <p className="text-3xl font-headline font-bold text-foreground">{s.val}</p>
                    </div>
                  </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="bg-primary/5 border-primary/20 p-12 rounded-[40px] space-y-10 relative overflow-hidden group">
                  <div className="space-y-4 relative z-10">
                      <h3 className="text-3xl font-headline font-bold uppercase tracking-tight">Generate <span className="text-primary italic">Invitation</span></h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium max-w-sm">Share your unique AZTEK referral identity. Both you and your friend earn technical service credits on conversion.</p>
                  </div>
                  <div className="space-y-6 relative z-10">
                      <div className="relative">
                        <Input readOnly value={referralData.code} className="bg-black/40 border-white/10 h-16 rounded-2xl text-lg font-mono tracking-widest text-primary pr-32" />
                        <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-6 rounded-xl text-[10px] font-bold uppercase" onClick={() => toast({ title: "Copied", description: "Identity link ready." })}>Copy Code</Button>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" className="flex-1 h-14 rounded-2xl bg-white/5 border-white/10 uppercase font-bold text-[10px] gap-2 hover:bg-primary hover:text-white transition-all">
                            <MessageSquare className="w-4 h-4" /> WhatsApp
                        </Button>
                        <Button variant="outline" className="flex-1 h-14 rounded-2xl bg-white/5 border-white/10 uppercase font-bold text-[10px] gap-2 hover:bg-primary hover:text-white transition-all">
                            <Share2 className="w-4 h-4" /> Global Share
                        </Button>
                      </div>
                  </div>
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.05),transparent_70%)] pointer-events-none" />
                  <Target className="absolute -bottom-10 -right-10 w-48 h-48 text-primary opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                </Card>

                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground">Conversion Status</h3>
                  <div className="space-y-3">
                      {referralData.history.map((r, i) => (
                        <Card key={i} className="bg-white/5 border-white/5 p-6 hover:border-primary/20 transition-all flex items-center justify-between">
                          <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                                <UserPlus className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="font-bold text-sm uppercase tracking-widest">{r.name}</p>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold">Referral Date: {r.date}</p>
                              </div>
                          </div>
                          <div className="text-right space-y-1">
                              <Badge variant="outline" className={cn(
                                "text-[8px] uppercase font-bold tracking-widest",
                                r.status === 'CONVERTED' ? "border-az-success text-az-success bg-az-success/5" : "border-white/10 text-muted-foreground"
                              )}>{r.status}</Badge>
                              <p className="text-[10px] font-bold text-primary uppercase">{r.reward}</p>
                          </div>
                        </Card>
                      ))}
                  </div>
                </div>
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="h-96 w-full bg-white/5 border border-white/10 rounded-3xl animate-pulse" />
      )}

      {/* Sync Registry Dialog */}
      <Dialog open={isLinking} onOpenChange={(o) => { if(!isProcessing) setIsLinking(o); }}>
        <DialogContent className="max-w-md bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={(e) => { e.preventDefault(); handleAction("Identity Sync Complete. Found 1 new record."); }}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Sync Registry</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Search eWarrantyFy Registry by Endpoint</DialogDescription>
            </DialogHeader>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Phone or Warranty ID</label>
                <Input required placeholder="+91 ... or AZ-2026-XXXX" className="h-12 bg-white/5 border-white/5 text-sm font-mono tracking-widest rounded-xl focus:ring-primary/40" />
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">System will cross-reference your verified identity endpoints with global installation logs.</p>
            </div>
            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
               <Button type="button" variant="ghost" onClick={() => setIsLinking(false)} className="text-[10px] font-bold uppercase">Cancel</Button>
               <Button disabled={isProcessing} className="h-12 px-8 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl">
                 {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Initiate Sync"}
               </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add Asset Dialog */}
      <Dialog open={isAddingAsset} onOpenChange={(o) => { if(!isProcessing) setIsAddingAsset(o); }}>
        <DialogContent className="max-w-2xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={(e) => { e.preventDefault(); handleAction("New asset registered. Awaiting technical link."); }}>
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
               <Button disabled={isProcessing} className="h-12 px-8 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl">Create Asset Profile</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Transfer Dialog */}
      <Dialog open={!!transferringId} onOpenChange={() => setTransferringId(null)}>
        <DialogContent className="max-w-md bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={(e) => { e.preventDefault(); handleAction("Transfer invite transmitted. Awaiting recipient acceptance."); }}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Initiate Transfer</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Relinquish Ownership & Transfer Warranty</DialogDescription>
            </DialogHeader>
            <div className="p-8 space-y-8">
               <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl space-y-1">
                  <span className="text-[9px] font-bold uppercase text-primary">Transferring Asset</span>
                  <p className="text-xs font-bold text-foreground">BMW X5 (KA01MX2024)</p>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Recipient Mobile Number *</label>
                  <Input required placeholder="+91 ..." className="h-12 bg-white/5 border-white/5 rounded-xl" />
               </div>
               <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl flex gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                  <p className="text-[9px] font-bold text-muted-foreground leading-relaxed uppercase">This will send an encrypted transfer invite. Once accepted, your primary access to this asset will terminate.</p>
               </div>
            </div>
            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
               <Button type="button" variant="ghost" onClick={() => setTransferringId(null)} className="text-[10px] font-bold uppercase">Cancel</Button>
               <Button disabled={isProcessing} className="h-12 px-8 rounded-xl text-[10px] font-bold uppercase tracking-widest bg-primary shadow-xl">Transmit Invite</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
