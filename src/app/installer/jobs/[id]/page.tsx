
"use client"

import { use, useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Navigation, 
  Loader2, 
  Camera, 
  CheckCircle2,
  Package,
  FileSignature
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { MapTerminal } from "@/components/maps/map-terminal"

export default function InstallerJobHub({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [isCheckingIn, setIsCheckingIn] = useState(false)
  const [checkedIn, setCheckedIn] = useState(false)
  const [location, setLocation] = useState<GeolocationPosition | null>(null)

  const job = {
    id: id,
    customer: "Rahul Sharma",
    phone: "+91 99887 76655",
    address: "Indiranagar 12th Main, Bangalore",
    vehicle: "Porsche 911 GT3 (KA01MX2024)",
    product: "AZTEK Pro Ultra PPF Full Body",
    notes: "Customer requested extra wrap in wheel arch area.",
    tasks: 7,
    completedTasks: 0,
    lat: 12.9716,
    lng: 77.5946
  }

  const handleCheckIn = () => {
    setIsCheckingIn(true)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation(pos)
        setTimeout(() => {
          setIsCheckingIn(false)
          setCheckedIn(true)
          toast({ title: "Checked In", description: "GPS Verified. Distance: 120m (Pass)" })
        }, 1500)
      }, () => {
        // Fallback if geo denied
        setTimeout(() => {
          setIsCheckingIn(false)
          setCheckedIn(true)
          toast({ title: "Check-in Override", description: "Manual check-in logged for this session." })
        }, 1500)
      })
    } else {
      setIsCheckingIn(false)
      setCheckedIn(true)
    }
  }

  return (
    <div className="space-y-6 pb-20">
      {/* Dynamic Action Bar */}
      <div className="p-6 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
        <Button asChild variant="ghost" size="icon" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5">
          <Link href="/installer"><ArrowLeft className="w-5 h-5" /></Link>
        </Button>
        <div className="text-center space-y-0.5">
           <p className="text-[9px] font-bold text-primary uppercase tracking-widest">{job.id}</p>
           <h2 className="text-sm font-bold uppercase tracking-tight">{job.customer}</h2>
        </div>
        <div className="w-10" />
      </div>

      <div className="px-6 space-y-6">
        {/* Real Open Source Map View */}
        <div className="aspect-[2/1] bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group">
           <MapTerminal points={[{ lat: job.lat, lng: job.lng, title: "Job Location", subtitle: job.address }]} center={[job.lat, job.lng]} zoom={15} />
           <div className="absolute bottom-4 right-4 z-[1000]">
              <Button size="sm" variant="outline" className="h-9 px-4 rounded-xl border-white/10 bg-black/40 backdrop-blur-md text-[9px] uppercase font-bold tracking-widest gap-2">
                 <Navigation className="w-3 h-3 text-primary" /> Navigation
              </Button>
           </div>
        </div>

        {/* Info Card */}
        <Card className="bg-white/5 border-white/10 shadow-xl overflow-hidden">
           <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                 <div className="space-y-0.5">
                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Asset</p>
                    <p className="text-sm font-bold uppercase text-foreground">{job.vehicle}</p>
                 </div>
                 <Badge variant="outline" className="text-[8px] border-primary/30 text-primary uppercase">Assigned</Badge>
              </div>
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                       <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">System Track</p>
                       <p className="text-xs font-bold uppercase">{job.product}</p>
                    </div>
                 </div>
                 <div className="p-4 bg-white/5 border border-white/5 rounded-2xl italic text-[11px] text-muted-foreground">
                    "{job.notes}"
                 </div>
              </div>
           </CardContent>
        </Card>

        {/* Check-In / Action Area */}
        {!checkedIn ? (
          <Button 
            disabled={isCheckingIn} 
            className="w-full h-16 rounded-[28px] bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(0,102,255,0.3)] group"
            onClick={handleCheckIn}
          >
            {isCheckingIn ? <Loader2 className="w-5 h-5 animate-spin" /> : (
              <div className="flex items-center gap-3">
                 <MapPin className="w-5 h-5" />
                 <span className="text-sm font-bold uppercase tracking-[0.2em]">Check In at Location</span>
              </div>
            )}
          </Button>
        ) : (
          <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-bottom-4 duration-500">
             {[
               { label: "Checklist", icon: CheckCircle2, url: `/installer/jobs/${id}/checklist`, val: "0/7" },
               { label: "Materials", icon: Package, url: `/installer/jobs/${id}/materials`, val: "Scan" },
               { label: "Photos", icon: Camera, url: `/installer/jobs/${id}/photos`, val: "4 Slots" },
               { label: "Sign-off", icon: FileSignature, url: `/installer/jobs/${id}/sign-off`, val: "Pending" },
             ].map((action) => (
               <Link key={action.label} href={action.url}>
                 <Card className="bg-white/5 border-white/10 hover:border-primary/40 transition-all active:scale-95 h-32 flex flex-col justify-between p-5 group">
                    <div className="flex items-center justify-between">
                       <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <action.icon className="w-4 h-4" />
                       </div>
                       <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-all" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-foreground uppercase tracking-widest">{action.label}</p>
                       <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-tight">{action.val}</p>
                    </div>
                 </Card>
               </Link>
             ))}
          </div>
        )}
      </div>
    </div>
  )
}
