
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  MoreVertical, 
  UserRound, 
  Phone, 
  Mail, 
  ChevronRight,
  ArrowRight,
  Car,
  Building2,
  TrendingUp,
  Merge
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"

export default function CustomerDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const customers = [
    { 
      id: "C-0042", 
      name: "Rahul Sharma", 
      phone: "+91 99887 76655", 
      email: "rahul.sharma@example.com", 
      vehicles: 1, 
      properties: 0, 
      warranties: 1, 
      lifetimeValue: "₹1.42L",
      status: "Premium" 
    },
    { 
      id: "C-0038", 
      name: "Aditi Rao", 
      phone: "+91 88776 65544", 
      email: "aditi.rao@gmail.com", 
      vehicles: 2, 
      properties: 1, 
      warranties: 3, 
      lifetimeValue: "₹5.8L",
      status: "Enterprise" 
    },
    { 
      id: "C-0035", 
      name: "Vikram Singh", 
      phone: "+91 77665 54433", 
      email: "vikram.s@outlook.com", 
      vehicles: 0, 
      properties: 1, 
      warranties: 1, 
      lifetimeValue: "₹2.2L",
      status: "Active" 
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Customer <span className="text-primary italic">360 Directory</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Unified Identity & Relationship Intelligence</p>
         </div>
         <div className="flex gap-4">
            <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5" onClick={() => toast({ title: "Merge Tool", description: "Identity de-duplication terminal active." })}>
              <Merge className="w-4 h-4" /> Merge Records
            </Button>
            <Button variant="gradient" className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl rounded-2xl">
              <UserRound className="w-4 h-4" /> Add Customer
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Profiles", val: "1,248", sub: "Deduplicated", icon: UserRound, color: "text-blue-500" },
          { label: "Multi-Asset Owners", val: "382", sub: "Vehicles + Properties", icon: TrendingUp, color: "text-green-500" },
          { label: "Avg CLV", val: "₹1.8L", sub: "Customer Lifetime Value", icon: TrendingUp, color: "text-purple-500" },
          { label: "Active Referrals", val: "142", sub: "Ecosystem Growth", icon: TrendingUp, color: "text-amber-500" },
        ].map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", s.color)}>
                <s.icon className="w-5 h-5" />
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
              <p className="text-3xl font-headline font-bold text-foreground">{s.val}</p>
              <p className="text-[9px] text-muted-foreground uppercase font-bold">{s.sub}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input 
             placeholder="Search by Name, Phone, Email or Profile ID..." 
             className="pl-10 h-12 bg-white/5 border-white/5 rounded-2xl" 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
        </div>
        <div className="flex gap-2 shrink-0">
           <Button variant="outline" className="h-12 rounded-2xl border-white/5 px-6 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <Filter className="w-4 h-4" /> Filters
           </Button>
        </div>
      </div>

      <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/5">
            <tr>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Customer Detail</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Portfolio Assets</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Warranties</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Lifetime Value</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Identity</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {customers.map((c, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                <td className="p-6">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                         {c.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="space-y-1">
                         <p className="font-bold text-sm text-foreground uppercase tracking-tight">{c.name}</p>
                         <p className="text-[10px] text-muted-foreground font-medium uppercase">{c.id}</p>
                      </div>
                   </div>
                </td>
                <td className="p-6">
                   <div className="flex items-center gap-3">
                      {c.vehicles > 0 && (
                        <div className="flex items-center gap-1 text-[10px] font-bold text-foreground">
                          <Car className="w-3 h-3 text-primary" /> {c.vehicles}
                        </div>
                      )}
                      {c.properties > 0 && (
                        <div className="flex items-center gap-1 text-[10px] font-bold text-foreground">
                          <Building2 className="w-3 h-3 text-green-500" /> {c.properties}
                        </div>
                      )}
                   </div>
                </td>
                <td className="p-6 text-center">
                   <Badge variant="outline" className="text-[10px] font-bold border-white/10">{c.warranties}</Badge>
                </td>
                <td className="p-6 text-right">
                   <span className="text-sm font-headline font-bold text-primary">{c.lifetimeValue}</span>
                </td>
                <td className="p-6 text-center">
                   <Badge className={cn(
                     "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                     c.status === "Premium" ? "bg-purple-500/10 text-purple-500 border-purple-500/20" :
                     c.status === "Enterprise" ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                     "bg-white/5 text-muted-foreground"
                   )}>{c.status}</Badge>
                </td>
                <td className="p-6 text-right">
                   <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Link href={`/admin/customers/${c.id}`}><ArrowRight className="w-4 h-4" /></Link>
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
