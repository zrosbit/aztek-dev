"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  GraduationCap, 
  MapPin, 
  MoreVertical, 
  ArrowUpRight,
  ShieldCheck,
  Award,
  Star,
  Clock
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AcademyPartnersPage() {
  const partners = [
    { 
      name: "Bangalore Premium Studio", 
      city: "Bengaluru", 
      track: "Automotive PPF", 
      tier: "Gold", 
      progress: 100, 
      status: "Active", 
      score: 4.8 
    },
    { 
      name: "Moto Shield Pune", 
      city: "Pune", 
      track: "Motorcycle Protection", 
      tier: "Certified", 
      progress: 65, 
      status: "Active", 
      score: 4.2 
    },
    { 
      name: "Delhi Arch Hub", 
      city: "New Delhi", 
      track: "Architectural Films", 
      tier: "Pending", 
      progress: 40, 
      status: "Reviewing", 
      score: 0 
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search partners by name, city or track..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" className="h-14 rounded-2xl border-white/5 px-6 text-[10px] uppercase font-bold tracking-widest gap-2">
            <Filter className="w-4 h-4" /> All Tiers
          </Button>
          <Button variant="outline" className="h-14 rounded-2xl border-white/5 px-6 text-[10px] uppercase font-bold tracking-widest gap-2">
            Expiring Soon
          </Button>
        </div>
      </div>

      <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/5">
            <tr>
              <th className="p-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground">Partner Detail</th>
              <th className="p-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground">Discipline Track</th>
              <th className="p-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground text-center">Progress</th>
              <th className="p-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground text-center">Tier</th>
              <th className="p-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground text-right">Quality Score</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {partners.map((p, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                <td className="p-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm uppercase tracking-widest">{p.name}</span>
                    <span className="text-[10px] text-muted-foreground font-bold flex items-center gap-1 uppercase">
                      <MapPin className="w-3 h-3" /> {p.city}
                    </span>
                  </div>
                </td>
                <td className="p-6">
                  <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest border-white/10 bg-white/5">
                    {p.track}
                  </Badge>
                </td>
                <td className="p-6">
                  <div className="flex flex-col gap-2 w-32 mx-auto">
                    <div className="flex justify-between text-[8px] font-bold uppercase text-muted-foreground">
                      <span>{p.progress}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <Badge className={cn(
                    "text-[10px] uppercase font-bold",
                    p.tier === "Gold" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                    p.tier === "Certified" ? "bg-az-blue/10 text-az-blue border-az-blue/20" :
                    "bg-white/5 text-muted-foreground border-white/5"
                  )}>{p.tier}</Badge>
                </td>
                <td className="p-6 text-right">
                  <span className="font-headline font-bold text-foreground">{p.score > 0 ? p.score : "--"}</span>
                </td>
                <td className="p-6 text-right">
                  <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
