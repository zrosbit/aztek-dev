
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  User, 
  Award, 
  ShieldCheck, 
  LogOut, 
  History, 
  Settings, 
  Star, 
  Smartphone,
  CheckCircle2,
  Key,
  Globe,
  Bell,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function InstallerProfilePage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const agent = {
    name: "Karthik R.",
    id: "INST-0421",
    tier: "Master Installer",
    hub: "Bangalore HQ",
    rating: 4.9,
    experience: "5+ Years",
    certifications: [
      { name: "Automotive PPF Tier 3", status: "Active" },
      { name: "9H Ceramic Specialist", status: "Active" },
      { name: "Glass Matrix Advanced", status: "Active" },
    ],
    stats: [
      { label: "Jobs Done", val: "428" },
      { label: "Rework %", val: "0.4%" },
      { label: "SLA Rank", val: "#1" }
    ]
  }

  const handleLogout = () => {
    toast({ title: "Session Terminated", description: "Identity keys cleared." })
    router.push("/")
  }

  if (!mounted) return null

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-headline font-bold uppercase tracking-tight">Agent Profile</h1>
        <Button variant="ghost" size="icon" className="rounded-xl border border-white/5 bg-white/5" onClick={() => toast({ title: "Settings", description: "Profile configuration active." })}>
          <Settings className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>

      {/* Identity Card */}
      <Card className="bg-white/5 border-white/10 overflow-hidden shadow-2xl relative group">
        <CardContent className="p-8 space-y-6">
           <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-[28px] bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner font-bold text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                 {agent.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="space-y-1">
                 <h2 className="text-2xl font-headline font-bold uppercase tracking-tight text-foreground">{agent.name}</h2>
                 <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em]">{agent.id} • {agent.hub}</p>
                 <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] uppercase font-bold tracking-widest mt-2 px-3">{agent.tier}</Badge>
              </div>
           </div>

           <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
              {agent.stats.map(s => (
                <div key={s.label} className="text-center space-y-1">
                   <p className="text-[9px] font-bold text-muted-foreground uppercase">{s.label}</p>
                   <p className="text-lg font-headline font-bold text-foreground">{s.val}</p>
                </div>
              ))}
           </div>
        </CardContent>
        <ShieldCheck className="absolute -bottom-10 -right-10 w-48 h-48 text-primary opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
      </Card>

      {/* Mastery Section */}
      <div className="space-y-4">
         <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">Ecosystem Mastery</h3>
         <div className="space-y-3">
            {agent.certifications.map((c, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-2xl group hover:border-primary/40 transition-all">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                       <Award className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold uppercase text-foreground">{c.name}</p>
                 </div>
                 <CheckCircle2 className="w-4 h-4 text-az-success" />
              </div>
            ))}
         </div>
      </div>

      {/* Operational Options */}
      <div className="space-y-4">
         <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">Operational Protocol</h3>
         <div className="grid grid-cols-1 gap-3">
            <Button variant="outline" className="h-14 justify-between px-6 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-[10px] uppercase font-bold">
               <div className="flex items-center gap-3"><History className="w-4 h-4 text-primary" /> Completed Task Log</div>
               <ChevronRight className="w-4 h-4 opacity-40" />
            </Button>
            <Button variant="outline" className="h-14 justify-between px-6 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-[10px] uppercase font-bold">
               <div className="flex items-center gap-3"><Key className="w-4 h-4 text-primary" /> Session Keys & Security</div>
               <ChevronRight className="w-4 h-4 opacity-40" />
            </Button>
            <Button variant="outline" className="h-14 justify-between px-6 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-[10px] uppercase font-bold">
               <div className="flex items-center gap-3"><Bell className="w-4 h-4 text-primary" /> Push Preferences</div>
               <ChevronRight className="w-4 h-4 opacity-40" />
            </Button>
         </div>
      </div>

      <div className="pt-8">
         <Button variant="outline" className="w-full h-14 rounded-2xl border-red-500/20 text-red-500 bg-red-500/5 hover:bg-red-500 hover:text-white transition-all text-[10px] uppercase font-bold gap-3" onClick={handleLogout}>
            <LogOut className="w-4 h-4" /> Terminate Global Session
         </Button>
      </div>

      <div className="text-center space-y-1 py-10 opacity-30">
         <p className="text-[8px] font-bold uppercase tracking-[0.4em]">AZTEK Pro Field Terminal</p>
         <p className="text-[8px] font-mono">v4.2.1-stable // encrypted</p>
      </div>
    </div>
  )
}
