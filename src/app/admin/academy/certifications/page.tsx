"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  ExternalLink,
  ShieldCheck,
  Star,
  Clock,
  MoreVertical,
  QrCode,
  Loader2,
  Trophy
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function AcademyCertificationsPage() {
  const [issuingId, setIssuingId] = useState<number | null>(null)

  const pending = [
    { 
      id: 1,
      partner: "Elite Wraps Bangalore", 
      owner: "Siddharth M.", 
      track: "Train the Trainer", 
      tier: "Master", 
      theory: "98%", 
      practical: "Mock Audit Passed", 
      date: "2h ago" 
    },
    { 
      id: 2,
      partner: "Pune Detailing Studio", 
      owner: "Amol K.", 
      track: "Ceramic Matrix", 
      tier: "Gold", 
      theory: "88%", 
      practical: "4.2/5", 
      date: "5h ago" 
    },
  ]

  const handleIssueCert = (id: number) => {
    setIssuingId(id)
    // Simulate spec-compliant INSTALLER_CERTIFICATION call to eWarrantyFy
    setTimeout(() => {
      setIssuingId(null)
      toast({
        title: "Certification Issued",
        description: "Credentials generated via eWarrantyFy. Plaque dispatch triggered.",
      })
    }, 2500)
  }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-primary/5 border-primary/20 p-8 rounded-3xl relative overflow-hidden group">
          <div className="relative z-10 space-y-4">
            <Badge className="bg-primary text-white text-[8px] uppercase font-bold tracking-widest px-3 py-1">Action Required</Badge>
            <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">14 Pending Certifications</h3>
            <p className="text-xs text-muted-foreground font-medium max-w-[200px]">Review theoretical and practical scores to authorize issuance.</p>
          </div>
          <Award className="absolute -bottom-10 -right-10 w-48 h-48 text-primary opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
        </Card>

        <Card className="bg-white/5 border-white/10 p-8 rounded-3xl flex flex-col justify-between">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Digital Registry</p>
            <p className="text-3xl font-headline font-bold text-foreground">1,248</p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
             <span className="text-[9px] font-bold uppercase text-muted-foreground">Sync with eWarrantyFy</span>
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </Card>

        <Card className="bg-white/5 border-white/10 p-8 rounded-3xl flex flex-col justify-between">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Master Status</p>
            <p className="text-3xl font-headline font-bold text-purple-500">12</p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
             <span className="text-[9px] font-bold uppercase text-muted-foreground">Authorized Trainers</span>
             <Trophy className="w-3.5 h-3.5 text-purple-500" />
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-bold">Pending Authorizations</h3>
        <div className="grid grid-cols-1 gap-4">
          {pending.map((p) => (
            <Card key={p.id} className="bg-white/5 border-white/10 hover:border-az-blue/30 transition-all shadow-2xl overflow-hidden group">
              <CardContent className="p-8 flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 space-y-6 w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-az-blue/10 text-az-blue border-az-blue/20 text-[9px] uppercase font-bold tracking-widest px-3 py-1">
                        {p.track}
                      </Badge>
                      <Badge variant="outline" className={cn(
                        "text-[9px] uppercase font-bold px-3 py-1",
                        p.tier === "Master" ? "border-purple-500/50 text-purple-500" : "border-amber-500/50 text-amber-500"
                      )}>
                        {p.tier} Tier Upgrade
                      </Badge>
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">{p.date}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Partner & Owner</p>
                      <h4 className="text-xl font-bold uppercase tracking-tighter">{p.partner}</h4>
                      <p className="text-xs text-muted-foreground font-medium">{p.owner}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Assessment Scores</p>
                      <div className="flex items-center gap-8">
                         <div>
                            <p className="text-xs font-bold text-primary">Theory: {p.theory}</p>
                            <div className="h-1 w-12 bg-white/5 rounded-full mt-1"><div className="h-full bg-primary" style={{ width: p.theory }} /></div>
                         </div>
                         <div>
                            <p className="text-xs font-bold text-green-500">Practical: {p.practical}</p>
                            <div className="h-1 w-12 bg-white/5 rounded-full mt-1"><div className="h-full bg-green-500" style={{ width: '95%' }} /></div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 w-full lg:w-auto">
                  <Button variant="outline" className="flex-1 lg:flex-none h-14 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/5">
                    View Dossier
                  </Button>
                  <Button 
                    variant="gradient" 
                    className="flex-1 lg:flex-none h-14 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 min-w-[200px]"
                    onClick={() => handleIssueCert(p.id)}
                    disabled={issuingId === p.id}
                  >
                    {issuingId === p.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Approve & Issue <Award className="w-4 h-4" /></>}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
