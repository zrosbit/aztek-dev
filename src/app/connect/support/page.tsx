
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  LifeBuoy, 
  MessageSquare, 
  Zap, 
  Clock, 
  ChevronRight, 
  Plus, 
  FileText,
  Smartphone,
  ShieldCheck,
  Search,
  History,
  CheckCircle2,
  AlertTriangle,
  Loader2
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function PartnerSupportHub() {
  const [isCreating, setIsCreating] = useState(false)
  const [loading, setLoading] = useState(false)

  const tickets = [
    { id: "TKT-9942", subject: "Material Batch Mismatch", status: "IN_REVIEW", date: "2h ago", category: "Inventory" },
    { id: "TKT-9912", subject: "Academy Module 05 Quiz Error", status: "RESOLVED", date: "2d ago", category: "Academy" },
  ]

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsCreating(false)
      toast({ title: "Ticket Initialized", description: "Protocol A1 transmitted to Hub Support." })
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Support <span className="text-az-blue italic">Hub</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Partner Operational Assistance & Technical Helpdesk</p>
        </div>
        <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl" onClick={() => setIsCreating(true)}>
           <Plus className="w-4 h-4" /> Open New Ticket
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-az-blue/5 border-az-blue/20 p-8 rounded-[32px] space-y-6 relative overflow-hidden group">
           <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 text-az-blue">
                 <Zap className="w-6 h-6" />
                 <h4 className="text-sm font-bold uppercase tracking-widest">Priority SLA</h4>
              </div>
              <p className="text-3xl font-headline font-bold text-foreground">4.0 <span className="text-xs text-muted-foreground uppercase font-medium">Hours</span></p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold">Standard Resolution target for Gold Tier</p>
           </div>
           <Zap className="absolute -bottom-10 -right-10 w-48 h-48 text-az-blue opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
        </Card>

        <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-6">
           <div className="flex items-center gap-3 text-muted-foreground">
              <Smartphone className="w-6 h-6" />
              <h4 className="text-sm font-bold uppercase tracking-widest">WhatsApp Direct</h4>
           </div>
           <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">Immediate technical advice for master installers via encrypted mobile tunnel.</p>
           <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10">Launch Chat</Button>
        </Card>

        <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-6">
           <div className="flex items-center gap-3 text-muted-foreground">
              <ShieldCheck className="w-6 h-6" />
              <h4 className="text-sm font-bold uppercase tracking-widest">Knowledge Base</h4>
           </div>
           <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">Access 142+ SOPs and technical manuals without opening a ticket.</p>
           <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10">Browse Wiki</Button>
        </Card>
      </div>

      <div className="space-y-4">
         <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground ml-2">Active Technical Requests</h3>
         <div className="grid grid-cols-1 gap-4">
            {tickets.map((t) => (
              <Card key={t.id} className="bg-white/5 border-white/10 hover:border-az-blue/30 transition-all cursor-pointer group shadow-xl">
                <CardContent className="p-6 flex flex-col md:flex-row items-center gap-8">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:bg-az-blue/10 group-hover:text-az-blue transition-all">
                      <MessageSquare className="w-6 h-6" />
                   </div>
                   <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
                      <div className="md:col-span-2 space-y-1">
                         <p className="font-mono text-[10px] font-bold text-az-blue">{t.id}</p>
                         <h4 className="text-lg font-bold uppercase text-foreground group-hover:text-az-blue transition-colors leading-tight">{t.subject}</h4>
                         <Badge variant="outline" className="text-[8px] uppercase border-white/10">{t.category}</Badge>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase">Current Status</p>
                         <Badge className={cn(
                           "text-[9px] uppercase font-bold tracking-widest px-3",
                           t.status === 'RESOLVED' ? "bg-az-success/10 text-az-success border-az-success/20" : "bg-az-blue/10 text-az-blue border-az-blue/20"
                         )}>{t.status}</Badge>
                      </div>
                      <div className="text-right space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase">Last Activity</p>
                         <p className="text-xs font-bold text-foreground">{t.date}</p>
                      </div>
                   </div>
                   <Button size="icon" variant="ghost" className="text-muted-foreground group-hover:text-az-blue transition-colors">
                      <ChevronRight className="w-5 h-5" />
                   </Button>
                </CardContent>
              </Card>
            ))}
         </div>
      </div>
    </div>
  )
}
