"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  FileCheck, 
  Clock, 
  ArrowRight, 
  User, 
  CheckCircle2, 
  MapPin, 
  History,
  XCircle,
  Loader2
} from "lucide-react"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function PartnerApplicationsPage() {
  const [processing, setProcessing] = useState<string | null>(null)

  const applications = [
    { id: "APP-042", business: "Shield Detailing", owner: "Rohan S.", city: "Chennai", date: "2h ago", kyc: "VERIFIED", type: "Automotive" },
    { id: "APP-038", business: "Precision Arch Hub", owner: "Anjali K.", city: "Mumbai", date: "1d ago", kyc: "PENDING", type: "Architectural" },
    { id: "APP-035", business: "Moto Guard Pro", owner: "Vikram P.", city: "Ahmedabad", date: "3d ago", kyc: "VERIFIED", type: "Motorcycle" },
  ]

  const handleApprove = (id: string) => {
    setProcessing(id)
    setTimeout(() => {
      setProcessing(null)
      toast({ title: "Partner Approved", description: "Studio onboarding protocol initialized." })
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {applications.map((app) => (
          <Card key={app.id} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-2xl overflow-hidden group">
            <CardContent className="p-8 flex flex-col lg:flex-row items-center gap-12">
               <div className="flex-1 space-y-6 w-full">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                           <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{app.id} / {app.type}</p>
                           <h4 className="text-xl font-bold uppercase tracking-tighter text-foreground">{app.business}</h4>
                        </div>
                     </div>
                     <span className="text-[10px] font-bold text-muted-foreground uppercase">{app.date}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Business Owner</p>
                        <p className="text-sm font-bold flex items-center gap-2"><User className="w-3.5 h-3.5 text-primary" /> {app.owner}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Primary Territory</p>
                        <p className="text-sm font-bold flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-primary" /> {app.city}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">KYC Status</p>
                        <Badge className={cn(
                          "text-[9px] uppercase font-bold",
                          app.kyc === "VERIFIED" ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                        )}>{app.kyc}</Badge>
                     </div>
                  </div>
               </div>

               <div className="flex gap-2 w-full lg:w-auto">
                  <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 bg-white/5">
                     View Documents
                  </Button>
                  <Button 
                    variant="gradient" 
                    className="flex-1 lg:flex-none h-14 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl min-w-[180px]"
                    disabled={processing === app.id}
                    onClick={() => handleApprove(app.id)}
                  >
                    {processing === app.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Approve & Onboard <ArrowRight className="w-4 h-4" /></>}
                  </Button>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
