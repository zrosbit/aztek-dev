"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { 
  BookOpenText, 
  Plus, 
  Search,
  ExternalLink,
  ShieldCheck,
  History
} from "lucide-react"

export default function ContentKBPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-white/5 border-white/10 p-12 text-center border-2 border-dashed rounded-[40px] h-full flex flex-col justify-center">
            <div className="max-w-md mx-auto space-y-8">
              <div className="w-20 h-20 rounded-[32px] bg-primary/10 flex items-center justify-center mx-auto border border-primary/20 shadow-inner">
                <BookOpenText className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-headline font-bold uppercase tracking-tight text-foreground">Technical Wiki Terminal</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed uppercase tracking-tight">
                  The primary technical engine for installers. Manage deep-dive engineering articles, chemical bonding guides, and forensic installation protocols.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="outline" className="rounded-2xl h-14 px-10 text-[10px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/5">
                  Browse Full Wiki
                </Button>
                <Button className="rounded-2xl h-14 px-12 text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl bg-primary">
                  Launch Editor <Plus className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground ml-2">KB Operations</h3>
          
          <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[32px] space-y-4">
            <div className="flex items-center gap-4 text-primary">
              <ShieldCheck className="w-6 h-6" />
              <h4 className="text-lg font-headline font-bold uppercase text-foreground leading-none">Review Protocol</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
              All wiki updates undergo a 3-stage verification by the Master Trainer board. Current review queue: **04 items**.
            </p>
            <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] font-bold uppercase border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
              Manage Queue
            </Button>
          </Card>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Recent Peer-Reviews</h4>
            {[
              { title: "Matte Edge Bonding", reviewer: "Sachin R.", status: "VERIFIED", date: "2d ago" },
              { title: "Curtain Wall ROI", reviewer: "Dr. Aris V.", status: "PENDING", date: "3d ago" },
              { title: "9H Cure Profile", reviewer: "Nadeem S.", status: "VERIFIED", date: "1w ago" },
            ].map((review, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-primary/20 transition-all">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold uppercase text-foreground">{review.title}</p>
                  <p className="text-[9px] text-muted-foreground font-bold uppercase">{review.reviewer} • {review.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={cn(
                    "text-[8px] uppercase font-bold",
                    review.status === 'VERIFIED' ? "border-green-500/50 text-green-500" : "border-white/10"
                  )}>{review.status}</Badge>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-all cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
