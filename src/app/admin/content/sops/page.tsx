"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ClipboardList, 
  Wrench, 
  Plus, 
  MoreVertical,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContentSOPsPage() {
  const sops = [
    { name: "BMW Bumper Template SOP", ver: "v2.1", tier: "Gold+", type: "Installation" },
    { name: "eWarrantyFy Batch Sync SOP", ver: "v1.4", tier: "Standard", type: "Connect" },
    { name: "Post-Install QC SOP", ver: "v4.0", tier: "Standard", type: "Quality" },
    { name: "Surface Decon Protocol", ver: "v3.2", tier: "Standard", type: "Technical" },
    { name: "Commercial Glazing Audit", ver: "v1.1", tier: "Master", type: "Arch" },
    { name: "Lead Re-Routing Logic", ver: "v2.4", tier: "Manager", type: "Ops" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground ml-2">Technical SOP Registry</h3>
        <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl">
           <Plus className="w-4 h-4" /> Create New SOP
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sops.map((sop, i) => (
          <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/40 transition-all group overflow-hidden flex flex-col shadow-2xl">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {sop.type === 'Installation' ? <Wrench className="w-6 h-6" /> : <ClipboardList className="w-6 h-6" />}
                </div>
                <div className="space-y-1">
                  <Badge variant="outline" className="text-[8px] border-white/10 uppercase tracking-widest text-primary">{sop.type}</Badge>
                  <CardTitle className="text-sm font-bold uppercase tracking-widest leading-tight group-hover:text-primary transition-colors">{sop.name}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0 mt-auto space-y-6">
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase">Compliance Version</p>
                  <p className="text-xs font-mono font-bold text-foreground">{sop.ver}</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase">Access Level</p>
                  <p className="text-xs font-bold text-amber-500 uppercase">{sop.tier}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10 bg-white/5 group-hover:bg-white/10 transition-all">Update Meta</Button>
                <Button size="icon" variant="outline" className="h-11 w-11 rounded-xl border-white/10 bg-white/5 hover:text-primary"><ArrowRight className="w-4 h-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
