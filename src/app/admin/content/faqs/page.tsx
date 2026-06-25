"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Plus, 
  Search, 
  ArrowRight,
  MoreVertical
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContentFAQsPage() {
  const faqs = [
    { q: "Warranty registration timeline?", cat: "Operational", status: "Active", priority: "High" },
    { q: "9H Ceramic cure time?", cat: "Technical", status: "Active", priority: "Medium" },
    { q: "PPF yellowing causes?", cat: "Product", status: "Review", priority: "High" },
    { q: "Batch matching protocol?", cat: "Inventory", status: "Active", priority: "Critical" },
    { q: "Academy Tier 2 requirements?", cat: "Training", status: "Active", priority: "Medium" },
    { q: "Site survey checklist v4?", cat: "Arch", status: "Active", priority: "High" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground ml-2">Network Q&A Management</h3>
        <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl">
           <Plus className="w-4 h-4" /> Add New FAQ
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((f, i) => (
          <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all group shadow-xl flex flex-col">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center justify-between mb-6">
                <Badge variant="outline" className="text-[8px] uppercase border-white/10 text-primary">{f.cat}</Badge>
                <Badge className={cn(
                  "text-[8px] uppercase px-3 py-1 font-bold tracking-widest border-none",
                  f.priority === 'Critical' ? "bg-red-500 text-white" :
                  f.priority === 'High' ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-500"
                )}>{f.priority}</Badge>
              </div>
              <CardTitle className="text-lg uppercase tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors">{f.q}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 mt-auto">
               <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase">Status: {f.status}</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary"><MoreVertical className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm" className="h-8 text-[9px] uppercase font-bold text-primary gap-2 p-0 hover:bg-transparent hover:translate-x-1 transition-transform">
                      Edit QA <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
