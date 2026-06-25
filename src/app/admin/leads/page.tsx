"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  MoreVertical, 
  ArrowRight,
  UserCheck,
  RefreshCw,
  Download,
  Plus,
  Loader2,
  Mail,
  Phone,
  MessageSquare
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export default function AdminLeadsPage() {
  const [view, setView] = useState<"kanban" | "list">("kanban")
  const [isAddingLead, setIsAddingLead] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const pipeline = [
    { id: "L-9942", name: "John Wick", project: "Moto PPF Full Kit", val: "₹1.2L", status: "New", partner: "Elite Wraps", date: "2h ago" },
    { id: "L-9938", name: "Sarah Connor", project: "Architectural Solar", val: "₹4.5L", status: "Contacted", partner: "Skyline Pro", date: "1d ago" },
    { id: "L-9932", name: "Bruce Wayne", project: "Full Stealth PPF", val: "₹6.8L", status: "Qualified", partner: "Gotham Detailing", date: "2d ago" },
  ]

  const columns = ["New", "Contacted", "Qualified", "Won", "Lost"]

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsAddingLead(false)
      toast({
        title: "Lead Created",
        description: "New enquiry captured and routed to regional queue.",
      })
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">Lead <span className="text-primary italic">Pipeline</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Network-Wide Lead Oversight & Strategic Routing</p>
         </div>
         <div className="flex gap-2">
            <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2" onClick={() => toast({ title: "Export Started", description: "Lead database CSV being generated." })}>
              <Download className="w-4 h-4" /> Export CSV
            </Button>
            <Button variant="gradient" className="h-12 px-6 font-bold text-xs uppercase tracking-widest gap-2" onClick={() => setIsAddingLead(true)}>
              <Plus className="w-4 h-4" /> Manual Lead Entry
            </Button>
         </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input placeholder="Search all leads by name, city, or partner..." className="pl-10 h-12 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <div className="flex gap-2 shrink-0">
           <Button variant="outline" className="h-12 rounded-2xl border-white/5 px-4"><Filter className="w-4 h-4" /></Button>
           <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl">
              <button onClick={() => setView("kanban")} className={cn("px-4 py-2 text-[10px] font-bold uppercase rounded-xl transition-all", view === "kanban" ? "bg-primary text-white" : "text-muted-foreground")}>Kanban</button>
              <button onClick={() => setView("list")} className={cn("px-4 py-2 text-[10px] font-bold uppercase rounded-xl transition-all", view === "list" ? "bg-primary text-white" : "text-muted-foreground")}>List</button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {columns.map((col) => (
          <div key={col} className="space-y-4 min-w-[280px]">
            <div className="flex items-center justify-between px-2">
               <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{col}</span>
               <Badge variant="outline" className="text-[8px] border-white/10 bg-white/5">{pipeline.filter(l => l.status === col).length}</Badge>
            </div>
            <div className="space-y-3">
               {pipeline.filter(l => l.status === col).map((lead, i) => (
                 <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all cursor-pointer group shadow-xl">
                   <CardContent className="p-5 space-y-4">
                     <div className="flex items-start justify-between">
                        <div className="space-y-1">
                           <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{lead.name}</h4>
                           <p className="text-[10px] text-muted-foreground uppercase font-bold">{lead.project}</p>
                        </div>
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                     </div>
                     <div className="flex flex-col gap-2 p-3 bg-black/20 rounded-xl border border-white/5">
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase">
                           <span className="text-muted-foreground">Assigned:</span>
                           <span className="text-primary">{lead.partner}</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase">
                           <span className="text-muted-foreground">Value:</span>
                           <span className="text-foreground">{lead.val}</span>
                        </div>
                     </div>
                     <div className="flex gap-2 pt-2 border-t border-white/5">
                        <Button variant="outline" size="sm" className="h-8 text-[9px] uppercase font-bold rounded-lg gap-1 border-white/10" onClick={() => toast({ title: "Reassign Dialog", description: "Opening network re-routing tool." })}>
                           <UserCheck className="w-3 h-3" /> Reassign
                        </Button>
                        <Button size="icon" variant="gradient" className="h-8 w-8 rounded-lg ml-auto"><ArrowRight className="w-3 h-3" /></Button>
                     </div>
                   </CardContent>
                 </Card>
               ))}
            </div>
          </div>
        ))}
      </div>

      {/* Manual Lead Dialog */}
      <Dialog open={isAddingLead} onOpenChange={(o) => { if(!isSubmitting) setIsAddingLead(o); }}>
        <DialogContent className="max-w-2xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={handleAddLead}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Manual Lead Entry</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Network-Wide Enquiry Distribution</DialogDescription>
            </DialogHeader>

            <div className="p-8 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Customer Name</label>
                  <Input required placeholder="Full Name" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Phone Number</label>
                  <Input required placeholder="+91 ..." className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-muted-foreground">Enquiry Project / Interest</label>
                <Select required>
                  <SelectTrigger className="bg-white/5 border-white/5 h-12 rounded-xl text-sm">
                    <SelectValue placeholder="Select Product" />
                  </SelectTrigger>
                  <SelectContent className="bg-az-midnight border-white/10">
                    <SelectItem value="auto">Automotive PPF Full Body</SelectItem>
                    <SelectItem value="moto">Motorcycle Protection Kit</SelectItem>
                    <SelectItem value="arch">Architectural Solar Shield</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-muted-foreground">Auto-Routing Recommendation</label>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase text-foreground">Recommended: Elite Bangalore (2.4km)</span>
                   </div>
                   <Badge variant="outline" className="text-[8px] border-primary/30 text-primary uppercase">98% Match</Badge>
                </div>
              </div>
            </div>

            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
              <Button type="button" variant="ghost" onClick={() => setIsAddingLead(false)} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Cancel</Button>
              <Button type="submit" disabled={isSubmitting} className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">
                {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Routing Lead...</> : <>Create & Distribute <ArrowRight className="w-4 h-4 ml-2" /></>}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
