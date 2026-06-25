"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileCheck, 
  Download, 
  ArrowRight, 
  Search, 
  Filter,
  CheckCircle2,
  FileText,
  UserCheck,
  History,
  ShieldCheck,
  Printer
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function ProjectReportsPage() {
  const reports = [
    { id: "REP-0421", job: "AZ-JOB-0421", customer: "Rahul Sharma", partner: "Elite BLR", score: "4.8/5", date: "2h ago", status: "VERIFIED" },
    { id: "REP-0392", job: "AZ-JOB-0392", customer: "Amit Desai", partner: "Moto Pune", score: "5.0/5", date: "1d ago", status: "VERIFIED" },
    { id: "REP-0385", job: "AZ-JOB-0385", customer: "Aditi Rao", partner: "Mumbai Hub", score: "4.2/5", date: "2d ago", status: "AUDIT_REQ" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Filter completion reports by Job ID or Customer..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/5 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
           <Download className="w-4 h-4" /> Bulk Export Registry
        </Button>
      </div>

      <div className="space-y-4">
        {reports.map((r, i) => (
          <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-xl group overflow-hidden">
            <CardContent className="p-8 flex flex-col lg:flex-row items-center gap-12">
               <div className="flex-1 space-y-6 w-full">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-inner">
                           <FileCheck className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-primary font-mono uppercase tracking-widest">{r.id} / Completion Cert</p>
                           <h4 className="text-xl font-bold uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors">{r.customer}</h4>
                        </div>
                     </div>
                     <Badge className={cn(
                        "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                        r.status === 'VERIFIED' ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                     )}>{r.status.replace('_', ' ')}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Original Job Context</p>
                        <p className="text-sm font-bold flex items-center gap-2 uppercase text-foreground">{r.job}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Installing Studio</p>
                        <p className="text-sm font-bold flex items-center gap-2 uppercase text-foreground">{r.partner}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Quality Audit Score</p>
                        <div className="flex items-center gap-2">
                           <span className="text-sm font-bold text-az-success">{r.score}</span>
                           <ShieldCheck className="w-4 h-4 text-az-success" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex gap-2 w-full lg:w-auto">
                  <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 bg-white/5 hover:bg-white/10">
                     <Printer className="w-4 h-4 mr-2" /> PDF Report
                  </Button>
                  <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 bg-white/5 hover:bg-white/10">
                     <History className="w-4 h-4 mr-2" /> Forensic Log
                  </Button>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
