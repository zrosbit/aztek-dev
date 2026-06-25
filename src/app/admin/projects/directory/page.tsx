"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  MoreVertical, 
  ArrowRight,
  ExternalLink,
  MapPin,
  Car,
  Tag,
  History,
  FileText
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProjectDirectoryPage() {
  const projects = [
    { id: "AZ-JOB-BLR-00421", partner: "Elite Wraps Bangalore", customer: "Rahul Sharma", asset: "Porsche 911 GT3", status: "IN_PROGRESS", progress: 65, date: "Oct 24", vertical: "Auto" },
    { id: "AZ-JOB-MUM-00398", partner: "Mumbai Detail Lab", customer: "Aditi Rao", asset: "BMW i7 M70", status: "QC_PHASE", progress: 90, date: "Oct 22", vertical: "Auto" },
    { id: "AZ-JOB-PUN-00215", partner: "Moto Shield Pune", customer: "Vikram S.", asset: "Ducati V4S", status: "COMPLETED", progress: 100, date: "Oct 18", vertical: "Moto" },
    { id: "AZ-JOB-DEL-00512", partner: "Skyline Arch Hub", customer: "Nexus Realty", asset: "Facade - Phase 1", status: "BOOKED", progress: 0, date: "Oct 25", vertical: "Arch" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search global registry by Job ID, Partner, or Asset..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/5 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <Filter className="w-4 h-4" /> Filter Status
           </Button>
        </div>
      </div>

      <div className="border border-white/5 rounded-[32px] overflow-hidden bg-card shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/5">
            <tr>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Project Identity</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Certified Partner</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Asset & Vertical</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">QC Score</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {projects.map((p, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                <td className="p-6">
                   <div className="space-y-1">
                      <p className="font-mono text-xs font-bold text-primary uppercase">{p.id}</p>
                      <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Logged: {p.date}</p>
                   </div>
                </td>
                <td className="p-6">
                   <div className="flex flex-col">
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm uppercase">{p.partner}</span>
                      <span className="text-[9px] text-muted-foreground font-bold flex items-center gap-1 uppercase">
                         <MapPin className="w-3 h-3" /> Regional Node
                      </span>
                   </div>
                </td>
                <td className="p-6">
                   <div className="space-y-0.5">
                      <p className="text-xs font-bold text-foreground uppercase truncate max-w-[200px]">{p.asset}</p>
                      <Badge variant="outline" className="text-[8px] font-bold uppercase border-white/10 px-2 py-0">{p.vertical}</Badge>
                   </div>
                </td>
                <td className="p-6 text-center">
                   <div className="flex flex-col gap-1 w-24 mx-auto">
                      <span className="text-[10px] font-bold text-foreground">{p.progress}%</span>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-primary" style={{ width: `${p.progress}%` }} />
                      </div>
                   </div>
                </td>
                <td className="p-6 text-center">
                   <Badge className={cn(
                      "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                      p.status === 'COMPLETED' ? "bg-green-500/10 text-green-500 border-green-500/20" : 
                      p.status === 'QC_PHASE' ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                      "bg-blue-500/10 text-blue-500 border-blue-500/20"
                   )}>{p.status.replace('_', ' ')}</Badge>
                </td>
                <td className="p-6 text-right">
                   <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><ArrowRight className="w-4 h-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
