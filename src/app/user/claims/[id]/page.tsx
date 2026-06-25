
"use client"

import { use, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Shield, 
  FileText,
  ChevronRight,
  MessageSquare,
  Search,
  Camera,
  History,
  MapPin
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function ClaimDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  const claim = {
    id: id,
    warrantyId: "AZ-2026-KA-00421",
    product: "AZTEK Automotive PPF Full Body",
    installer: "Elite Wraps Bangalore",
    status: "UNDER_REVIEW",
    date: "Oct 26, 2024",
    type: "Edge Lifting - Front Bumper",
    description: "Observed minor film lift along the lower radiator intake vent on the passenger side. Only visible after track day heat cycles.",
    photos: [1, 2, 3].map(i => `https://picsum.photos/seed/evid${i}/400/300`),
    timeline: [
      { status: "New", date: "Oct 26, 09:42 AM", action: "Claim Initialized", note: "Forensic ID assigned via A6 protocol." },
      { status: "Under Review", date: "Oct 26, 11:15 AM", action: "Forensic Audit Active", note: "Admins are reviewing evidence against the original installation job card." },
      { status: "In Progress", date: "Oct 27, 02:00 PM", action: "Human Audit Triggered", note: "Nexus ops review requested for edge-lift validation." },
    ]
  }

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "UNDER_REVIEW": return { label: "Forensic Review Active", color: "text-amber-500", icon: AlertTriangle }
      case "RESOLVED": return { label: "Claim Resolved", color: "text-green-500", icon: CheckCircle2 }
      case "APPROVED": return { label: "Approved - Assignment Pending", color: "text-blue-500", icon: Shield }
      default: return { label: status, color: "text-primary", icon: Clock }
    }
  }

  const statusCfg = getStatusConfig(claim.status)

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <Button asChild variant="ghost" className="h-12 w-12 rounded-full border border-white/5 bg-white/5 p-0">
             <Link href="/user/claims"><ArrowLeft className="w-5 h-5" /></Link>
          </Button>
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">{claim.id}</h1>
              <Badge variant="outline" className="border-amber-500/30 text-amber-500 bg-amber-500/5 text-[9px] uppercase font-bold tracking-widest px-3 py-1">In Review</Badge>
            </div>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">{claim.type}</p>
          </div>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <MessageSquare className="w-4 h-4 text-primary" /> Contact Support
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
           <Card className="bg-white/5 border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
              <CardHeader className="p-8 border-b border-white/5">
                 <CardTitle className="text-sm uppercase tracking-widest">Technical Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                 <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase text-primary tracking-widest">Problem Description</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium bg-white/[0.02] p-6 rounded-2xl border border-white/5 italic">
                       "{claim.description}"
                    </p>
                 </div>

                 <div className="space-y-6">
                    <h4 className="text-[10px] font-bold uppercase text-primary tracking-widest">Evidence Documentation</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                       {claim.photos.map((p, i) => (
                         <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                            <img src={p} alt="Evidence" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                    <div className="space-y-2">
                       <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Matched Warranty</p>
                       <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-primary/30 transition-all cursor-pointer">
                          <Shield className="w-5 h-5 text-primary" />
                          <div>
                             <p className="text-xs font-bold uppercase">{claim.warrantyId}</p>
                             <p className="text-[9px] text-muted-foreground uppercase font-bold">{claim.product}</p>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Original Installer</p>
                       <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                          <MapPin className="w-5 h-5 text-muted-foreground" />
                          <div>
                             <p className="text-xs font-bold uppercase">{claim.installer}</p>
                             <p className="text-[9px] text-primary uppercase font-bold">Gold Lab Verified</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>

        <div className="space-y-8">
           <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground">Forensic Lifecycle</h3>
           <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="space-y-10 relative z-10">
                 {claim.timeline.map((item, i) => (
                   <div key={i} className="flex gap-6 items-start group">
                      <div className="flex flex-col items-center gap-2">
                         <div className={cn(
                           "w-3 h-3 rounded-full mt-1.5 shadow-[0_0_15px_rgba(0,102,255,0.4)]",
                           i === claim.timeline.length - 1 ? "bg-primary animate-pulse" : "bg-white/20"
                         )} />
                         {i !== claim.timeline.length - 1 && <div className="w-px h-16 bg-white/10" />}
                      </div>
                      <div className="space-y-1.5">
                         <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.date}</p>
                         <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">{item.action}</h4>
                         <p className="text-[10px] text-primary font-bold uppercase tracking-tight">{item.note}</p>
                      </div>
                   </div>
                 ))}
              </div>
              
              <div className="pt-8 border-t border-white/5">
                 <div className="p-5 bg-primary/5 border border-primary/20 rounded-2xl space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                       <statusCfg.icon className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">{statusCfg.label}</span>
                    </div>
                    <p className="text-[10px] font-medium text-muted-foreground leading-relaxed uppercase">
                       Our forensic review team is currently cross-referencing your claim evidence with the original installation job card. You will receive an encrypted notification once the audit phase completes.
                    </p>
                 </div>
              </div>

              <History className="absolute -bottom-10 -right-10 w-40 h-40 text-primary opacity-5 -rotate-12" />
           </div>

           <Card className="bg-white/5 border-white/10 p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                 <FileText className="w-5 h-5" />
                 <h4 className="text-[10px] font-bold uppercase tracking-widest">Protocol Notice</h4>
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
                 Approved claims result in a technical rectification authorization (TRA) sent directly to your original lab or an alternative regional hub.
              </p>
           </Card>
        </div>
      </div>
    </div>
  )
}
