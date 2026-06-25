"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  MapPin, 
  MoreVertical, 
  ArrowRight,
  UserPlus,
  ShieldCheck,
  Star,
  Award,
  Medal,
  History,
  Loader2,
  Building2,
  User,
  Globe,
  Zap,
  CheckCircle2,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export default function PartnerDirectoryPage() {
  const [isAdding, setIsAdding] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const partners = [
    { id: "P-042", name: "Elite Wraps Bangalore", owner: "Siddharth M.", city: "Bengaluru", tier: "Master", status: "Active", rev: "₹42.5L", quality: 4.9 },
    { id: "P-039", name: "Moto Shield Pro", owner: "Karthik R.", city: "Mysore", tier: "Gold", status: "Active", rev: "₹18.2L", quality: 4.7 },
    { id: "P-035", name: "Skyline Architectural", owner: "Amit D.", city: "Hubli", tier: "Certified", status: "Active", rev: "₹9.4L", quality: 4.5 },
  ]

  const handleOnboard = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsAdding(false)
      toast({
        title: "Studio Onboarded",
        description: "New partner node has been registered and initialized in the global registry.",
      })
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search all partners by studio, city or owner..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" className="h-14 rounded-2xl border-white/5 px-6 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
            <Filter className="w-4 h-4" /> Filters
          </Button>
          <Button 
            variant="gradient" 
            className="h-14 rounded-2xl px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl"
            onClick={() => setIsAdding(true)}
          >
            <UserPlus className="w-4 h-4" /> Onboard Studio
          </Button>
        </div>
      </div>

      <div className="border border-white/5 rounded-[32px] overflow-hidden bg-card shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/5">
            <tr>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Partner Detail</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Certification Tier</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Quality Score</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Revenue MTD</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {partners.map((p, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                <td className="p-6">
                   <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors uppercase tracking-tight">{p.name}</span>
                      <span className="text-[10px] text-muted-foreground font-bold flex items-center gap-1 uppercase">
                         <MapPin className="w-3 text-primary" /> {p.city}
                      </span>
                   </div>
                </td>
                <td className="p-6 text-center">
                   <div className="flex justify-center">
                      <Badge variant="outline" className={cn(
                        "text-[9px] uppercase font-bold tracking-widest border-white/10 px-3 py-1",
                        p.tier === "Master" ? "text-purple-500 border-purple-500/20" : 
                        p.tier === "Gold" ? "text-amber-500 border-amber-500/20" : "text-primary border-primary/20"
                      )}>{p.tier}</Badge>
                   </div>
                </td>
                <td className="p-6 text-center">
                   <div className="flex items-center justify-center gap-2">
                      <span className="text-sm font-bold text-foreground">{p.quality}</span>
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                   </div>
                </td>
                <td className="p-6 text-right font-headline font-bold text-primary">
                   {p.rev}
                </td>
                <td className="p-6 text-center">
                   <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-[9px] uppercase font-bold px-3 py-1">{p.status}</Badge>
                </td>
                <td className="p-6 text-right">
                   <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Link href={`/admin/partners/${p.id}`}><ArrowRight className="w-4 h-4" /></Link>
                   </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={isAdding} onOpenChange={(o) => { if(!isSubmitting) setIsAdding(o); }}>
        <DialogContent className="max-w-3xl bg-background border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={handleOnboard}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Onboard New Studio</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Initialize a new partner node in the AZTEK network</DialogDescription>
            </DialogHeader>

            <div className="p-8 space-y-10 max-h-[60vh] overflow-y-auto">
               <div className="space-y-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Identity & Ownership</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Business Name</label>
                       <Input required placeholder="e.g. Elite Wraps Studio" className="h-12 bg-white/5 border-white/5 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Principal Owner</label>
                       <Input required placeholder="Full Name" className="h-12 bg-white/5 border-white/5 rounded-xl" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Primary Contact Email</label>
                       <Input required type="email" placeholder="owner@domain.com" className="h-12 bg-white/5 border-white/5 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Mobile Endpoint</label>
                       <Input required placeholder="+91 ..." className="h-12 bg-white/5 border-white/5 rounded-xl" />
                    </div>
                  </div>
               </div>

               <div className="space-y-6 pt-6 border-t border-white/5">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Regional Grid</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Operating City</label>
                       <Input required placeholder="e.g. Bengaluru" className="h-12 bg-white/5 border-white/5 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Assigned Hub</label>
                       <Select required>
                          <SelectTrigger className="h-12 bg-white/5 border-white/5 rounded-xl"><SelectValue placeholder="Select Node" /></SelectTrigger>
                          <SelectContent className="glass">
                             <SelectItem value="blr">Bengaluru HQ</SelectItem>
                             <SelectItem value="mum">Mumbai Hub</SelectItem>
                             <SelectItem value="del">Delhi Hub</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                  </div>
               </div>

               <div className="space-y-6 pt-6 border-t border-white/5">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Classification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Certification Tier</label>
                       <Select required>
                          <SelectTrigger className="h-12 bg-white/5 border-white/5 rounded-xl"><SelectValue placeholder="Select Tier" /></SelectTrigger>
                          <SelectContent className="glass">
                             <SelectItem value="certified">Certified Installer</SelectItem>
                             <SelectItem value="gold">Gold Partner</SelectItem>
                             <SelectItem value="master">Master Installer</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Primary Track</label>
                       <Select required>
                          <SelectTrigger className="h-12 bg-white/5 border-white/5 rounded-xl"><SelectValue placeholder="Select Vertical" /></SelectTrigger>
                          <SelectContent className="glass">
                             <SelectItem value="auto">Automotive PPF</SelectItem>
                             <SelectItem value="moto">Motorcycle Armor</SelectItem>
                             <SelectItem value="arch">Architectural Solar</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Account Status</label>
                       <Select defaultValue="active">
                          <SelectTrigger className="h-12 bg-white/5 border-white/5 rounded-xl"><SelectValue /></SelectTrigger>
                          <SelectContent className="glass">
                             <SelectItem value="active">Active</SelectItem>
                             <SelectItem value="pending">Pending Certification</SelectItem>
                             <SelectItem value="onboarding">Onboarding</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                  </div>
               </div>

               <div className="p-6 bg-primary/5 border border-primary/20 rounded-3xl space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Zap className="w-5 h-5" />
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">Automation Protocol</h4>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">
                    This action will auto-generate a Connect Terminal ID and transmit a temporary encryption key to the owner's mobile endpoint.
                  </p>
               </div>
            </div>

            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
              <Button type="button" variant="ghost" onClick={() => setIsAdding(false)} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Cancel</Button>
              <Button disabled={isSubmitting} className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl min-w-[200px]">
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <>Commit Partner Profile <ArrowRight className="w-4 h-4 ml-2" /></>}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
