
"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Mail
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function LeadsPipelinePage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const pipeline = [
    { name: "John Wick", interest: "Moto PPF Full Kit", value: "₹1.2L", status: "New", source: "Website", date: "2h ago" },
    { name: "Sarah Connor", interest: "Architectural Heat Reject", value: "₹4.5L", status: "Contacted", source: "Referral", date: "1d ago" },
    { name: "Bruce Wayne", interest: "Full Stealth PPF", value: "₹6.8L", status: "Quote Sent", source: "Walk-in", date: "2d ago" },
    { name: "Tony Stark", interest: "Ceramic Pro Gold", value: "₹85k", status: "Won", source: "Instagram", date: "3d ago" },
  ]

  const stages = ["All", "New", "Contacted", "Quote Sent", "Won", "Lost"]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground">AZTEK <span className="text-az-blue italic">Connect CRM</span></h1>
          <p className="text-muted-foreground">Unified Partner OS for lead management and project lifecycles.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-12 border-white/5 gap-2 rounded-2xl">
            <MessageSquare className="w-4 h-4 text-az-success" />
            WhatsApp Lead
          </Button>
          <Button variant="gradient" className="h-12 px-6 font-bold text-xs uppercase tracking-widest gap-2">
            <Plus className="w-4 h-4" />
            Add New Lead
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/5 border-white/10 shadow-xl">
          <CardContent className="p-6 space-y-2">
            <p className="text-[10px] uppercase font-bold text-muted-foreground">Pipeline Value</p>
            <p className="text-2xl font-headline font-bold text-foreground">₹12.4L</p>
            <div className="flex items-center gap-1 text-[10px] text-green-500 font-bold">
              <TrendingUp className="w-3 h-3" /> +14% vs Last Month
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10 shadow-xl">
          <CardContent className="p-6 space-y-2">
            <p className="text-[10px] uppercase font-bold text-muted-foreground">New Leads</p>
            <p className="text-2xl font-headline font-bold text-foreground">08</p>
            <p className="text-[10px] text-muted-foreground uppercase">Awaiting Contact</p>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10 shadow-xl">
          <CardContent className="p-6 space-y-2">
            <p className="text-[10px] uppercase font-bold text-muted-foreground">Conversion Rate</p>
            <p className="text-2xl font-headline font-bold text-foreground">24%</p>
            <p className="text-[10px] text-muted-foreground uppercase">Stable Velocity</p>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10 shadow-xl">
          <CardContent className="p-6 space-y-2">
            <p className="text-[10px] uppercase font-bold text-muted-foreground">Avg. Job Value</p>
            <p className="text-2xl font-headline font-bold text-foreground">₹1.5L</p>
            <p className="text-[10px] text-muted-foreground uppercase">High-Margin Projects</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {stages.map((stage) => (
          <Button
            key={stage}
            variant={activeFilter === stage ? "default" : "outline"}
            onClick={() => setActiveFilter(stage)}
            className={cn(
              "h-9 px-6 text-[10px] font-bold uppercase tracking-widest shrink-0 rounded-full",
              activeFilter !== stage && "border-white/5 bg-white/5 hover:bg-white/10 text-muted-foreground"
            )}
          >
            {stage}
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        {pipeline.map((lead, i) => (
          <Card key={i} className="bg-white/5 border-white/10 hover:border-az-blue/40 transition-all cursor-pointer group shadow-2xl">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-az-blue/10 flex items-center justify-center text-az-blue font-bold shrink-0 shadow-inner">
                {lead.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 space-y-1">
                  <p className="font-bold text-lg text-foreground">{lead.name}</p>
                  <p className="text-xs text-muted-foreground">{lead.interest}</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Potential Value</p>
                  <p className="text-sm font-headline font-bold text-foreground">{lead.value}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Source</p>
                  <Badge variant="outline" className="text-[10px] border-white/10 text-muted-foreground">{lead.source}</Badge>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Status</p>
                  <Badge className={cn(
                    "text-[10px] uppercase font-bold tracking-widest",
                    lead.status === "Won" ? "bg-az-success/10 text-az-success border-az-success/20" :
                    lead.status === "New" ? "bg-az-blue/10 text-az-blue border-az-blue/20" :
                    "bg-white/5 text-muted-foreground border-white/5"
                  )}>
                    {lead.status}
                  </Badge>
                </div>
              </div>

              <div className="shrink-0 flex gap-3">
                <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/10 rounded-xl">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </Button>
                <Button size="icon" variant="gradient" className="rounded-xl shadow-lg">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
