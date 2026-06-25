"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Newspaper, 
  MessageCircleQuestion, 
  ClipboardList, 
  Download, 
  History, 
  Plus,
  Zap,
  ShieldCheck,
  Globe,
  TrendingUp
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function ContentDashboardPage() {
  const handleAction = (msg: string) => {
    toast({ title: "Hub Updated", description: msg })
  }

  const kpis = [
    { label: "Total Articles", val: "142", sub: "Published", icon: Newspaper, color: "text-blue-500" },
    { label: "Active FAQs", val: "48", sub: "Verified", icon: MessageCircleQuestion, color: "text-green-500" },
    { label: "SOP Registry", val: "24", sub: "Compliance Level", icon: ClipboardList, color: "text-purple-500" },
    { label: "Asset Downloads", val: "14k", sub: "Network-wide", icon: Download, color: "text-amber-500" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-end gap-4">
        <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5" onClick={() => handleAction("Exporting global audit log...")}>
          <History className="w-4 h-4" /> Global Audit
        </Button>
        <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl" onClick={() => handleAction("Initializing content creation terminal...")}>
          <Plus className="w-4 h-4" /> Create New Content
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {kpis.map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all p-6 space-y-4 shadow-xl">
             <div className="flex items-center justify-between">
                <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", s.color)}>
                   <s.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[8px] border-white/10 uppercase font-bold">Sync Active</Badge>
             </div>
             <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                <p className="text-3xl font-headline font-bold text-foreground">{s.val}</p>
                <p className="text-[9px] text-muted-foreground uppercase font-bold">{s.sub}</p>
             </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <Card className="lg:col-span-2 bg-white/5 border-white/10 p-12 rounded-[40px] flex flex-col justify-center space-y-8 relative overflow-hidden group">
            <div className="space-y-4 relative z-10">
               <h3 className="text-4xl font-headline font-bold uppercase tracking-tighter leading-tight text-foreground">Content <br /><span className="text-primary italic">Intelligence.</span></h3>
               <p className="text-sm text-muted-foreground font-medium max-w-sm uppercase tracking-tight leading-relaxed">
                  The network-wide technical wiki is synchronized with global engineering nodes. All Knowledge Base entries are peer-reviewed by Master Installers before publication.
               </p>
            </div>
            <div className="flex gap-4 relative z-10 pt-4">
               <Button variant="outline" className="h-12 px-8 rounded-xl border-primary/20 text-primary text-[9px] uppercase font-bold bg-primary/5">Launch Wiki Editor</Button>
               <Button variant="gradient" className="h-12 px-8 rounded-xl text-[9px] uppercase font-bold shadow-xl">Review Queue</Button>
            </div>
            <Globe className="absolute -bottom-10 -right-10 w-64 h-64 text-primary opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
         </Card>

         <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[40px] space-y-6">
            <div className="flex items-center gap-3 text-primary">
               <ShieldCheck className="w-6 h-6" />
               <h4 className="text-lg font-headline font-bold uppercase text-foreground">Registry Integrity</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
               Product manuals are auto-injected into every Partner Connect terminal upon major SKU updates. Ensure technical translations are verified for all regional hubs.
            </p>
            <div className="pt-4 border-t border-white/10 space-y-4">
               <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-muted-foreground">Manuals Synced</span>
                  <span className="text-az-success">100% (Pass)</span>
               </div>
               <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-muted-foreground">Pending Edits</span>
                  <span className="text-foreground">0</span>
               </div>
            </div>
         </Card>
      </div>
    </div>
  )
}
