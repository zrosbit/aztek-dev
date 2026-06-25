"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Briefcase, 
  Search, 
  Plus, 
  Edit, 
  Trash2
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AdminCareersPage() {
  const jobStats = [
    { label: "Active Postings", val: "05", color: "text-blue-500" },
    { label: "Total Applications", val: "142", color: "text-green-500" },
    { label: "Pending Reviews", val: "18", color: "text-amber-500" },
    { label: "Hired MTD", val: "03", color: "text-purple-500" },
  ]

  const activePostings = [
    { title: "Senior Surface Engineer", dept: "Materials Science", apps: 42, status: "Active", date: "2d ago" },
    { title: "Network Ops Manager", dept: "Connect Ecosystem", apps: 28, status: "Active", date: "5d ago" },
    { title: "Full Stack Engineer", dept: "Platform Tech", apps: 56, status: "Paused", date: "1w ago" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Talent <span className="text-primary italic">Acquisition</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Global Hiring & Organizational Growth Manager</p>
         </div>
         <Button variant="gradient" className="h-12 px-8 font-bold text-xs uppercase tracking-widest gap-2 shadow-2xl">
            <Plus className="w-4 h-4" /> Create New Posting
         </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {jobStats.map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-2 shadow-xl">
             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
             <p className={cn("text-3xl font-headline font-bold", s.color)}>{s.val}</p>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input placeholder="Search job titles, departments, or keywords..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-14 rounded-2xl border-white/5 px-6 text-[10px] uppercase font-bold tracking-widest">All Departments</Button>
        </div>
      </div>

      <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/5">
            <tr>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Position Details</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Applications</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Posted</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {activePostings.map((p, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                <td className="p-6">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                         <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                         <p className="font-bold text-sm uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{p.title}</p>
                         <p className="text-[10px] text-muted-foreground font-bold uppercase">{p.dept}</p>
                      </div>
                   </div>
                </td>
                <td className="p-6 text-center">
                   <div className="flex flex-col items-center gap-1">
                      <span className="text-sm font-bold text-foreground">{p.apps}</span>
                      <span className="text-[8px] font-bold text-primary uppercase">Candidates</span>
                   </div>
                </td>
                <td className="p-6 text-center">
                   <Badge className={cn(
                     "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                     p.status === "Active" ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-white/5 text-muted-foreground border-white/5"
                   )}>{p.status}</Badge>
                </td>
                <td className="p-6 text-right">
                   <span className="text-[10px] font-bold text-muted-foreground uppercase">{p.date}</span>
                </td>
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
