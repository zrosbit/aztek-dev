
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Bell, 
  ShieldCheck, 
  Zap, 
  Clock, 
  History, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle,
  Mail,
  MapPin,
  Car,
  FileText
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function UserNotificationFeed() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const alerts = [
    { id: "A-9942", type: "WARRANTY", title: "Warranty Certificate Verified", desc: "Your 10-year protection for BMW X5 has been successfully registered in the national registry.", time: "2h ago", status: "UNREAD", icon: ShieldCheck, color: "text-primary" },
    { id: "A-9938", type: "CLAIM", title: "Claim ID CLM-9942 Update", desc: "Technical forensic review is now active for your front bumper enquiry.", time: "5h ago", status: "READ", icon: AlertTriangle, color: "text-amber-500" },
    { id: "A-9912", type: "OFFER", title: "Friend Referral Credit", desc: "Congratulations! Your referral Amit Desai has completed an installation. ₹2,500 credited.", time: "2d ago", status: "UNREAD", icon: Zap, color: "text-green-500" },
    { id: "A-9901", type: "SYSTEM", title: "New Monsoon Guide Available", desc: "Expert tips on maintaining ceramic hydrophobicity during extreme rain.", time: "1w ago", status: "READ", icon: FileText, color: "text-blue-400" },
  ]

  if (!mounted) return null

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Activity <span className="text-primary italic">Feed</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Personal Asset Alerts & Protection Intelligence</p>
        </div>
        <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest" onClick={() => toast({ title: "Feed Refreshed", description: "Latest registry events fetched." })}>
          <Clock className="w-4 h-4 mr-2" /> Mark all read
        </Button>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {alerts.map((a) => (
          <Card key={a.id} className={cn(
            "bg-white/5 border-white/10 hover:border-primary/40 transition-all cursor-pointer group shadow-2xl overflow-hidden",
            a.status === 'UNREAD' ? "border-l-4 border-l-primary" : ""
          )}>
            <CardContent className="p-8 flex items-start gap-8">
               <div className={cn("w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500", a.color)}>
                  <a.icon className="w-7 h-7" />
               </div>
               <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                     <Badge variant="outline" className="text-[9px] uppercase font-bold tracking-widest border-white/10 text-primary bg-primary/5">{a.type}</Badge>
                     <span className="text-[10px] font-bold text-muted-foreground uppercase">{a.time}</span>
                  </div>
                  <h4 className="text-xl font-headline font-bold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">{a.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">{a.desc}</p>
                  <div className="pt-4 flex items-center gap-4 text-[10px] font-bold text-primary uppercase group-hover:translate-x-2 transition-transform">
                     View Detail <ChevronRight className="w-3.5 h-3.5" />
                  </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="p-12 border-2 border-dashed border-white/5 rounded-[40px] text-center space-y-4 bg-white/[0.01]">
         <History className="w-12 h-12 mx-auto text-muted-foreground opacity-20" />
         <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.3em] max-w-[200px] mx-auto leading-relaxed">Registry history older than 30 days is archived in your asset vault.</p>
      </div>
    </div>
  )
}
