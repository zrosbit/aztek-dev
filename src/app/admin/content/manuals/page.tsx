"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  ShieldCheck, 
  RefreshCw, 
  ArrowRight,
  Download
} from "lucide-react"

export default function ContentManualsPage() {
  const manuals = [
    { product: "AZTEK Pro Ultra PPF", ver: "v4.2.1", date: "Oct 2026", status: "Network-Wide" },
    { product: "9H Ceramic Matrix Gold", ver: "v2.0.0", date: "Sep 2026", status: "Network-Wide" },
    { product: "Moto Shield Precision Fit", ver: "v3.1.4", date: "Aug 2026", status: "South Hub Only" },
    { product: "Solar Shield V4 Window", ver: "v2.2.0", date: "Jul 2026", status: "Network-Wide" },
    { product: "Matte Finish PPF", ver: "v4.0.1", date: "Jun 2026", status: "Global" },
  ]

  return (
    <div className="space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[40px] space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-[24px] bg-primary flex items-center justify-center text-white shadow-2xl">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-2xl font-headline font-bold uppercase tracking-tight text-foreground leading-none">Manual Integrity Node</h4>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">Auto-Injection Status: Active (12 Node Hubs)</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed font-medium uppercase tracking-tight relative z-10 max-w-2xl">
            Product manuals are cryptographically signed and injected into every Partner Connect terminal upon publication. Technical translations are auto-generated for regional hubs.
          </p>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.05),transparent_70%)] pointer-events-none" />
        </Card>

        <div className="space-y-3">
          {manuals.map((m, i) => (
            <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all group overflow-hidden shadow-xl">
              <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-3">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{m.product}</h4>
                      <Badge variant="outline" className="text-[8px] border-white/10 uppercase tracking-widest">{m.status}</Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase">Manual Version {m.ver} • Published {m.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="h-10 px-4 rounded-xl border-white/10 bg-white/5 text-[9px] uppercase font-bold gap-2">
                    <Download className="w-3.5 h-3.5" /> Source
                  </Button>
                  <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><RefreshCw className="w-4 h-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-10 flex justify-center">
          <Button variant="outline" className="h-14 px-12 rounded-full border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-primary transition-all">
             Initialize New SKU Manual <ArrowRight className="w-4 h-4 ml-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}
