"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Camera, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink, 
  Search, 
  Filter,
  Maximize2,
  Trash2,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function ProjectMediaPage() {
  const mediaItems = [
    { id: "IMG-0421-1", job: "AZ-JOB-0421", type: "BEFORE", label: "Front 45°", status: "VERIFIED", date: "2h ago" },
    { id: "IMG-0421-2", job: "AZ-JOB-0421", type: "AFTER", label: "Edge Seal Detail", status: "PENDING", date: "2h ago" },
    { id: "IMG-0398-1", job: "AZ-JOB-0398", type: "AFTER", label: "Gloss Finish", status: "VERIFIED", date: "1d ago" },
    { id: "IMG-0398-2", job: "AZ-JOB-0398", type: "BEFORE", label: "Surface Decon", status: "FLAGGED", date: "1d ago", error: "Low Light" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search media by Job ID or forensic tag..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <div className="flex gap-2">
           <Badge variant="outline" className="h-14 px-6 rounded-2xl border-white/10 bg-white/5 flex items-center gap-3">
              <Camera className="w-4 h-4 text-primary" />
              <div className="text-left">
                 <p className="text-[10px] font-bold uppercase leading-none">Global Feed</p>
                 <p className="text-[8px] text-muted-foreground uppercase font-bold">142 Uploads Today</p>
              </div>
           </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mediaItems.map((item, i) => (
          <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all group overflow-hidden shadow-2xl">
            <div className="aspect-square relative bg-black/40 overflow-hidden">
               <img src={`https://picsum.photos/seed/media${item.id}/400/400`} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Job Evidence" />
               <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={cn(
                    "text-[8px] font-bold uppercase tracking-widest border-none",
                    item.type === 'BEFORE' ? "bg-amber-500 text-white" : "bg-primary text-white"
                  )}>{item.type}</Badge>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-2 w-full">
                     <Button size="icon" variant="outline" className="flex-1 h-10 rounded-xl bg-white/10 border-white/20 text-white"><Maximize2 className="w-4 h-4" /></Button>
                     <Button size="icon" variant="outline" className="flex-1 h-10 rounded-xl bg-white/10 border-white/20 text-white hover:bg-az-success transition-all"><CheckCircle2 className="w-4 h-4" /></Button>
                     <Button size="icon" variant="outline" className="flex-1 h-10 rounded-xl bg-white/10 border-white/20 text-white hover:bg-red-500 transition-all"><XCircle className="w-4 h-4" /></Button>
                  </div>
               </div>
            </div>
            <CardContent className="p-5 space-y-3">
               <div className="flex items-center justify-between">
                  <p className="text-[10px] font-mono font-bold text-primary">{item.job}</p>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">{item.date}</span>
               </div>
               <div className="space-y-1">
                  <h4 className="text-sm font-bold uppercase tracking-tight text-foreground">{item.label}</h4>
                  <div className="flex items-center gap-2">
                     <Badge variant="outline" className={cn(
                        "text-[8px] font-bold uppercase tracking-widest border-white/10",
                        item.status === 'VERIFIED' ? "text-az-success" : item.status === 'FLAGGED' ? "text-red-500 border-red-500/20 bg-red-500/5" : "text-blue-500"
                     )}>{item.status}</Badge>
                     {item.error && <span className="text-[8px] font-bold text-red-500 uppercase tracking-widest">({item.error})</span>}
                  </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
