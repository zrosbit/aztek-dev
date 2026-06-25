
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ShieldAlert, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ChevronRight,
  History,
  FileText,
  AlertTriangle
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function UserClaimsPage() {
  const claims = [
    {
      id: "CLM-9942",
      warrantyId: "AZ-2026-KA-00421",
      product: "AZTEK Automotive PPF",
      status: "UNDER_REVIEW",
      date: "Oct 26, 2024",
      lastUpdate: "2h ago",
      type: "Edge Lifting"
    },
    {
      id: "CLM-9912",
      warrantyId: "AZ-2024-KA-00398",
      product: "Moto Shield Pro",
      status: "RESOLVED",
      date: "Aug 15, 2024",
      lastUpdate: "2mo ago",
      type: "Material Defect"
    }
  ]

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "NEW": return { label: "Submitted", color: "bg-blue-500/10 text-blue-500 border-blue-500/20", icon: Clock }
      case "UNDER_REVIEW": return { label: "Under Review", color: "bg-amber-500/10 text-amber-500 border-amber-500/20", icon: AlertTriangle }
      case "APPROVED": return { label: "Approved", color: "bg-green-500/10 text-green-500 border-green-500/20", icon: CheckCircle2 }
      case "REJECTED": return { label: "Rejected", color: "bg-red-500/10 text-red-500 border-red-500/20", icon: XCircle }
      case "RESOLVED": return { label: "Resolved", color: "bg-green-500/10 text-green-500 border-green-500/20", icon: CheckCircle2 }
      default: return { label: status, color: "bg-white/5 text-muted-foreground", icon: Clock }
    }
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Claims <span className="text-primary italic">Center</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Forensic Review Tracking & Support Requests</p>
        </div>
        <Button asChild variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest shadow-xl">
           <Link href="/user/claims/new">Initiate New Claim</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Active Requests", val: "01", color: "text-amber-500" },
          { label: "Lifetime Resolved", val: "03", color: "text-green-500" },
          { label: "Avg Review SLA", val: "48H", color: "text-primary" },
        ].map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-2">
             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
             <p className={cn("text-2xl font-headline font-bold", s.color)}>{s.val}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground">Submitted Claims History</h3>
        {claims.length > 0 ? (
          <div className="space-y-3">
            {claims.map((claim) => {
              const config = getStatusConfig(claim.status)
              return (
                <Card key={claim.id} className="bg-white/5 border-white/10 hover:border-primary/40 transition-all cursor-pointer group shadow-xl">
                  <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <config.icon className={cn("w-6 h-6", config.color.split(' ')[1])} />
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold text-primary font-mono">{claim.id}</p>
                          <h4 className="text-lg font-headline font-bold uppercase text-foreground leading-tight group-hover:text-primary transition-colors">{claim.type}</h4>
                          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{claim.product}</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Policy Context</p>
                          <p className="text-xs font-bold uppercase">{claim.warrantyId}</p>
                          <p className="text-[10px] text-muted-foreground">Created: {claim.date}</p>
                       </div>
                       <div className="flex items-center justify-between md:justify-end gap-12">
                          <div className="text-right space-y-1">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Current Phase</p>
                             <Badge className={cn("text-[9px] font-bold uppercase px-3 py-1", config.color)}>{config.label}</Badge>
                          </div>
                       </div>
                    </div>
                    <div className="flex gap-2 w-full lg:w-auto">
                       <Button asChild variant="outline" className="flex-1 lg:flex-none h-12 px-6 rounded-xl border-white/10 text-[9px] uppercase font-bold gap-2">
                          <Link href={`/user/claims/${claim.id}`}>
                            <FileText className="w-3.5 h-3.5" /> View Timeline <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                       </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          <Card className="p-20 border-2 border-dashed border-white/5 bg-white/[0.01] text-center space-y-6 rounded-[40px]">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto opacity-20">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-headline font-bold uppercase">No active claims</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-widest max-w-xs mx-auto leading-relaxed">
                Your protection records are currently operating within specification. Use the New Claim tool to report surface issues.
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
