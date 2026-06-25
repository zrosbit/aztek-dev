"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Download, 
  Search, 
  Filter, 
  MoreVertical,
  History,
  FileStack
} from "lucide-react"

export default function ContentDownloadsPage() {
  const downloads = [
    { name: "Master Logo Pack", size: "12.4MB", type: "Vector", dls: 1420, date: "2d ago" },
    { name: "PPF Spec Sheet Jun 26", size: "1.2MB", type: "PDF", dls: 856, date: "1w ago" },
    { name: "Partner Contract v4", size: "400KB", type: "Docs", dls: 312, date: "2d ago" },
    { name: "Warranty Guide PDF", size: "2.1MB", type: "PDF", dls: 2450, date: "Active" },
    { name: "Studio Signage Master", size: "45MB", type: "Print", dls: 112, date: "1mo ago" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search shared assets by filename, type or category..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/5 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <Filter className="w-4 h-4" /> All Assets
           </Button>
           <Button variant="gradient" className="h-14 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl">
              <FileStack className="w-4 h-4" /> Upload Shared Asset
           </Button>
        </div>
      </div>

      <div className="border border-white/5 rounded-[32px] overflow-hidden bg-card shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/5">
            <tr>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground pl-10">Asset Detail</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Type & Size</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Network Transmissions</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Published</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {downloads.map((d, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                <td className="p-6 pl-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                      <Download className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">{d.name}</span>
                  </div>
                </td>
                <td className="p-6">
                  <div className="space-y-0.5">
                    <Badge variant="outline" className="text-[8px] border-white/10 uppercase tracking-widest">{d.type}</Badge>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase">{d.size}</p>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <div className="space-y-0.5">
                    <p className="text-sm font-headline font-bold text-foreground">{d.dls.toLocaleString()}</p>
                    <p className="text-[8px] text-primary uppercase font-bold">Downloads</p>
                  </div>
                </td>
                <td className="p-6 text-right text-[10px] font-bold text-muted-foreground uppercase">{d.date}</td>
                <td className="p-6 text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><History className="w-4 h-4" /></Button>
                    <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><MoreVertical className="w-4 h-4" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
