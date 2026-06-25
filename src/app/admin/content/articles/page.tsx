"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Newspaper, 
  Edit, 
  Trash2, 
  ArrowRight,
  MoreVertical
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContentArticlesPage() {
  const articles = [
    { title: "Self-Healing Technology 101", cat: "Materials", status: "Published", date: "Oct 24", author: "Dr. Aris V." },
    { title: "Q4 Market Outlook", cat: "Industry", status: "Draft", date: "Active", author: "Nexus Ops" },
    { title: "Edge Seal Excellence", cat: "Technical", status: "Published", date: "Sep 12", author: "Master Sachin" },
    { title: "9H Ceramic Bonding Guide", cat: "Technical", status: "Published", date: "Aug 30", author: "Nadeem S." },
    { title: "Solar IRR Benchmarks", cat: "Engineering", status: "Review", date: "Aug 22", author: "Dr. Aris V." },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Filter articles by title, author or category..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/5 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
          + Add Article
        </Button>
      </div>

      <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/5">
            <tr>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Article Title</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Category</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Author</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Last Sync</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {articles.map((a, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Newspaper className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm text-foreground uppercase tracking-tight">{a.title}</span>
                  </div>
                </td>
                <td className="p-6">
                  <Badge variant="outline" className="text-[8px] border-white/10 uppercase tracking-widest">{a.cat}</Badge>
                </td>
                <td className="p-6 text-xs font-bold text-muted-foreground uppercase">{a.author}</td>
                <td className="p-6 text-center">
                  <Badge className={cn(
                    "text-[9px] uppercase font-bold px-3 py-1",
                    a.status === 'Published' ? "bg-green-500/10 text-green-500" : 
                    a.status === 'Draft' ? "bg-white/5 text-muted-foreground" : "bg-amber-500/10 text-amber-500"
                  )}>{a.status}</Badge>
                </td>
                <td className="p-6 text-right text-[10px] font-bold text-muted-foreground uppercase">{a.date}</td>
                <td className="p-6 text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><Edit className="w-4 h-4" /></Button>
                    <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-red-500"><Trash2 className="w-4 h-4" /></Button>
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
