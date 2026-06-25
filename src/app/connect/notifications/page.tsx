
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Bell, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  Zap,
  Info,
  ChevronRight,
  History,
  MessageSquare,
  Package,
  GraduationCap,
  Users,
  Search,
  Filter
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"

export default function PartnerNotificationCenter() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const notifications = [
    { id: "NT-9942", type: "LEAD", title: "New High-Value Lead Assigned", desc: "John Wick (Lamborghini Revuelto) has been routed to your studio.", time: "2h ago", status: "UNREAD", icon: Users, color: "text-blue-500" },
    { id: "NT-9938", type: "STOCK", title: "Order Shipped: ORD-9912", desc: "12 Rolls of Pro Ultra PPF are in transit from Bengaluru HQ.", time: "5h ago", status: "READ", icon: Package, color: "text-green-500" },
    { id: "NT-9932", type: "ACADEMY", title: "Certification Renewal Warning", desc: "Your Master Installer status for Moto Armor expires in 30 days.", time: "1d ago", status: "UNREAD", icon: GraduationCap, color: "text-amber-500" },
    { id: "NT-9921", type: "SYSTEM", title: "Protocol Update: Monsoon 2026", desc: "New co-branded marketing assets are now available in the hub.", time: "2d ago", status: "READ", icon: Zap, color: "text-purple-500" },
  ]

  const handleReadAll = () => {
    toast({ title: "Notifications Cleared", description: "All active alerts marked as processed." })
  }

  if (!mounted) return null

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Notification <span className="text-az-blue italic">Feed</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-tight">Studio Operational Alerts & Global Network Announcements</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5" onClick={handleReadAll}>
            <CheckCircle2 className="w-4 h-4" /> Mark All Read
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input placeholder="Search alerts by type or keyword..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/5 bg-white/5"><Filter className="w-4 h-4" /></Button>
      </div>

      <div className="space-y-4">
         {notifications.map((n) => (
           <Card key={n.id} className={cn(
             "bg-white/5 border-white/10 hover:border-az-blue/30 transition-all cursor-pointer group shadow-xl overflow-hidden",
             n.status === 'UNREAD' ? "border-l-4 border-l-az-blue" : ""
           )}>
             <CardContent className="p-6 flex flex-col md:flex-row items-center gap-10">
                <div className={cn("w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner group-hover:bg-az-blue group-hover:text-white transition-all", n.color)}>
                   <n.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1 w-full">
                   <div className="flex items-center justify-between mb-1">
                      <Badge variant="outline" className="text-[8px] uppercase font-bold tracking-widest border-white/10 text-az-blue">{n.type}</Badge>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">{n.time}</span>
                   </div>
                   <h4 className="text-lg font-bold uppercase tracking-tighter text-foreground group-hover:text-az-blue transition-colors leading-tight">{n.title}</h4>
                   <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">{n.desc}</p>
                </div>
                <Button size="icon" variant="ghost" className="text-muted-foreground group-hover:text-az-blue transition-colors">
                   <ChevronRight className="w-5 h-5" />
                </Button>
             </CardContent>
           </Card>
         ))}
      </div>

      <div className="p-12 border-2 border-dashed border-white/5 rounded-[40px] text-center space-y-6 bg-white/[0.01]">
         <div className="w-16 h-16 rounded-full bg-az-blue/10 flex items-center justify-center mx-auto">
            <History className="w-8 h-8 text-az-blue opacity-30" />
         </div>
         <div className="space-y-2">
            <h3 className="text-xl font-headline font-bold uppercase text-foreground">Historical Archive</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto font-medium uppercase tracking-tight">Access all transmissions sent to your studio terminal in the last 12 months.</p>
         </div>
         <Button variant="outline" className="h-12 px-10 rounded-xl border-white/10 text-[10px] uppercase font-bold tracking-widest">Load Archived Records</Button>
      </div>
    </div>
  )
}
