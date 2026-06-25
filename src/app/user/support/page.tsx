
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  LifeBuoy, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight, 
  ArrowRight,
  HelpCircle,
  FileText,
  MapPin,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Send,
  Loader2
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

export default function UserHelpDesk() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const faqs = [
    { q: "How to transfer a warranty?", a: "Login to your dashboard, select the asset, and use the 'Transfer' tool. You'll need the recipient's verified mobile number." },
    { q: "Where can I find my digital certificate?", a: "All verified protection records are stored in your 'Assets & Vault' tab. You can download the PDF anytime." },
    { q: "My film has a small scratch, what to do?", a: "AZTEK Pro Ultra films feature self-healing technology. Often, a few minutes in direct sunlight or warm water will erase surface swirls." },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({ title: "Inquiry Received", description: "Our technical team will respond within 24 hours." })
    }, 2000)
  }

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Help <span className="text-primary italic">Desk</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Customer Support & Surface Advice Terminal</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
           <Card className="bg-white/5 border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
              <CardHeader className="p-8 border-b border-white/5 bg-white/[0.01]">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                       <MessageSquare className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-sm uppercase tracking-widest">Connect with technical Support</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="p-8">
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Inquiry Subject</label>
                          <Input required placeholder="e.g. Warranty Question" className="h-12 bg-white/5 border-white/5 rounded-xl" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Related Asset (Optional)</label>
                          <Input placeholder="e.g. BMW X5" className="h-12 bg-white/5 border-white/5 rounded-xl" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Message Detail</label>
                       <Textarea required placeholder="How can our surface specialists assist you today?" className="min-h-[150px] bg-white/5 border-white/5 rounded-2xl p-6 text-sm" />
                    </div>
                    <Button disabled={isSubmitting} className="h-14 px-12 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl group">
                       {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Transmit Inquiry <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></>}
                    </Button>
                 </form>
              </CardContent>
           </Card>

           <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground ml-2">Common Knowledge</h3>
              <div className="grid grid-cols-1 gap-4">
                 {faqs.map((f, i) => (
                   <Card key={i} className="bg-white/5 border-white/5 hover:border-primary/20 transition-all p-8 rounded-3xl">
                      <div className="flex gap-6">
                         <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <HelpCircle className="w-5 h-5" />
                         </div>
                         <div className="space-y-3">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">{f.q}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">{f.a}</p>
                         </div>
                      </div>
                   </Card>
                 ))}
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <Card className="bg-primary/5 border-primary/20 p-8 rounded-[32px] space-y-6 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                 <div className="flex items-center gap-3 text-primary">
                    <ShieldCheck className="w-6 h-6" />
                    <h4 className="text-sm font-bold uppercase tracking-widest">Policy Verification</h4>
                 </div>
                 <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
                    Need to verify the authenticity of an installation? Use our public registry tool with your Warranty ID.
                 </p>
                 <Button variant="outline" asChild className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-primary/20">
                    <Link href="/warranty">Open Registry Tool</Link>
                 </Button>
              </div>
           </Card>

           <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-6 shadow-xl">
              <div className="flex items-center gap-3 text-muted-foreground">
                 <MapPin className="w-5 h-5" />
                 <h4 className="text-[10px] font-bold uppercase tracking-widest">Locate Hubs</h4>
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">
                 Access 480+ certified studios globally for inspections, maintenance or new installations.
              </p>
              <Button variant="outline" asChild className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10">
                 <Link href="/user/locator">Launch Locator</Link>
              </Button>
           </Card>

           <div className="p-8 border-2 border-dashed border-white/5 rounded-[40px] text-center space-y-4 bg-white/[0.01]">
              <Clock className="w-10 h-10 mx-auto text-muted-foreground opacity-20" />
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] max-w-[200px] mx-auto">Our specialized support nodes are active 09:00 - 18:00 IST Monday to Saturday.</p>
           </div>
        </div>
      </div>
    </div>
  )
}
