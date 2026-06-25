"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  RefreshCw, 
  Calendar, 
  User, 
  AlertTriangle, 
  Clock, 
  ArrowRight, 
  Search,
  Bell,
  Mail,
  ShieldCheck,
  History
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function AcademyRenewalsPage() {
  const queue = [
    { partner: "Rapid Wraps Delhi", owner: "Rohan S.", track: "Automotive PPF", expiry: "12 Days", status: "Overdue" },
    { partner: "Chennai Detailing Lab", owner: "Anjali K.", track: "Ceramic Matrix", expiry: "30 Days", status: "Action Required" },
    { partner: "Pune Moto Pro", owner: "Vikram P.", track: "Motorcycle Armor", expiry: "45 Days", status: "Notification Sent" },
  ]

  const handleNotify = (partner: string) => {
    toast({
      title: "Notification Dispatched",
      description: `Encrypted renewal alert sent to ${partner} Connect terminal.`,
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search renewal queue by partner or owner..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <Button variant="outline" className="h-14 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5 border-white/10">
          <History className="w-4 h-4" /> Certification History
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground ml-2">Expiring Certifications</h3>
            {queue.map((item) => (
              <Card key={item.partner} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-xl group overflow-hidden">
                <CardContent className="p-6 flex flex-col md:flex-row items-center gap-10">
                   <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                      <AlertTriangle className="w-6 h-6" />
                   </div>
                   <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Partner Studio</p>
                         <h4 className="text-lg font-bold uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors">{item.partner}</h4>
                         <p className="text-[10px] text-muted-foreground uppercase font-bold">{item.owner}</p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Discipline</p>
                         <Badge variant="outline" className="text-[10px] uppercase border-white/10">{item.track}</Badge>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Expires In</p>
                         <p className={cn(
                           "text-sm font-bold uppercase",
                           item.status === "Overdue" ? "text-red-500 animate-pulse" : "text-amber-500"
                         )}>{item.expiry}</p>
                      </div>
                   </div>
                   <div className="flex gap-2 w-full md:w-auto">
                      <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-white/10 bg-white/5" onClick={() => handleNotify(item.partner)}>
                         <Bell className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="flex-1 md:flex-none h-12 px-6 rounded-xl border-white/10 bg-white/5 text-[10px] uppercase font-bold gap-2">
                         Schedule Re-Assessment
                      </Button>
                   </div>
                </CardContent>
              </Card>
            ))}
         </div>

         <div className="space-y-8">
            <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[32px] space-y-6 shadow-2xl">
               <div className="flex items-center gap-4 text-primary">
                  <ShieldCheck className="w-8 h-8" />
                  <h4 className="text-lg font-headline font-bold uppercase text-foreground leading-none">Renewal Policy</h4>
               </div>
               <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
                  AZTEK technical certifications expire every 24 months. Gold and Master partners must undergo a mandatory practical re-audit to maintain their tier-based lead routing privileges.
               </p>
               <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-muted-foreground">Certified Expiry</span>
                     <span className="text-foreground">24 Months</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-muted-foreground">Notification SLA</span>
                     <span className="text-foreground">60 Days Prior</span>
                  </div>
               </div>
            </Card>

            <div className="p-8 border-2 border-dashed border-white/5 rounded-[40px] text-center space-y-4 bg-white/[0.01]">
               <RefreshCw className="w-10 h-10 mx-auto text-muted-foreground opacity-20" />
               <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] max-w-[200px] mx-auto">Renewal automation is active. 14 partners have been auto-notified this month.</p>
            </div>
         </div>
      </div>
    </div>
  )
}
