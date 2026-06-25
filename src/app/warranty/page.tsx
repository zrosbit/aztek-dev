
"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  FileText, 
  Shield, 
  Award,
  Medal,
  Star,
  Clock,
  ArrowRight,
  Loader2,
  Calendar,
  User,
  Phone,
  Mail,
  Zap,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SiteHeader } from "@/components/layout/site-header"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function WarrantyCenterPage() {
  const [warrantyId, setWarrantyId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      toast({
        title: "Registry Searched",
        description: "No active record found for the provided ID. Please check your credentials.",
      })
    }, 1500)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsRegistering(true)
    setTimeout(() => {
      setIsRegistering(false)
      toast({
        title: "Registration Transmitted",
        description: "Your warranty activation request has been sent to our verification node.",
      })
    }, 2000)
  }

  const tiers = [
    { title: "Automotive PPF", years: "10 Years", desc: "Defects, yellowing, cracking, peeling", icon: Shield },
    { title: "Motorcycle PPF", years: "7 Years", desc: "Material defects, installation issues", icon: Zap },
    { title: "Architectural Films", years: "15 Years", desc: "Film failure, discoloration, bubbling", icon: Star },
  ]

  const benefits = [
    { title: "Free replacement for defects", icon: CheckCircle2 },
    { title: "Priority support access", icon: CheckCircle2 },
    { title: "Transferable warranty", icon: CheckCircle2 },
    { title: "Nationwide coverage", icon: CheckCircle2 },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
              <Shield className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-headline font-bold uppercase tracking-tight text-foreground">
            Warranty Center
          </h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
            Comprehensive warranty coverage and support for your protection investment
          </p>
        </section>

        {/* Checker Section */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <Card className="bg-card border-white/5 p-8 md:p-12 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Check Your Warranty</h3>
              </div>
              <form onSubmit={handleVerify} className="flex flex-col md:flex-row gap-4">
                <Input 
                  placeholder="Enter warranty ID or registration number" 
                  className="h-14 bg-background border-white/5 text-sm rounded-xl focus:ring-primary/40"
                  value={warrantyId}
                  onChange={(e) => setWarrantyId(e.target.value)}
                />
                <Button type="submit" disabled={isVerifying} className="h-14 px-10 rounded-xl text-[10px] uppercase font-bold tracking-widest">
                  {isVerifying ? <Loader2 className="w-4 h-4 animate-spin" /> : "Search"}
                </Button>
              </form>
            </div>
          </Card>
        </section>

        {/* Tier Cards Section */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <Card key={tier.title} className="bg-card border-white/5 hover:border-primary/20 transition-all p-10 space-y-6">
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">{tier.title}</p>
                <div className="space-y-1">
                  <p className="text-4xl font-headline font-bold text-foreground">{tier.years}</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Registration Section */}
        <section className="py-32 bg-card/20 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                  <FileText className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-4xl font-headline font-bold uppercase tracking-tight text-foreground">
                Register Your Warranty
              </h2>
              <p className="text-sm text-muted-foreground uppercase font-bold tracking-widest">
                Activate your protection warranty online
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Name *</label>
                  <Input required className="h-14 bg-background border-white/5 rounded-2xl focus:ring-primary/40" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Email *</label>
                  <Input type="email" required className="h-14 bg-background border-white/5 rounded-2xl focus:ring-primary/40" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Phone *</label>
                  <Input required className="h-14 bg-background border-white/5 rounded-2xl focus:ring-primary/40" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Product *</label>
                  <Input required placeholder="PPF, Ceramic, etc." className="h-14 bg-background border-white/5 rounded-2xl focus:ring-primary/40" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Installer Name *</label>
                  <Input required className="h-14 bg-background border-white/5 rounded-2xl focus:ring-primary/40" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Installation Date *</label>
                  <Input type="date" required className="h-14 bg-background border-white/5 rounded-2xl focus:ring-primary/40" />
                </div>
              </div>
              <Button type="submit" disabled={isRegistering} className="w-full h-16 rounded-2xl btn-electric text-[11px] font-bold uppercase tracking-[0.3em] shadow-xl">
                {isRegistering ? <Loader2 className="w-5 h-5 animate-spin" /> : "Register Warranty"}
              </Button>
            </form>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-40">
          <div className="max-w-7xl mx-auto px-6 space-y-20">
            <h2 className="text-4xl font-headline font-bold uppercase tracking-tight text-center">
              Warranty Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="bg-card border-white/5 p-8 flex flex-col items-center justify-center text-center space-y-6 group hover:border-primary/40 transition-all">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                    {benefit.title}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-white/5 py-20">
         <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="space-y-6 max-w-sm">
              <div className="flex flex-col items-start leading-none">
                <span className="font-headline font-bold text-2xl tracking-[0.18em] uppercase text-foreground">AZTEK</span>
                <span className="text-[8px] font-bold tracking-[0.3em] text-muted-foreground uppercase mt-0.5">PROTECTION TECHNOLOGY</span>
              </div>
              <p className="text-[10px] text-muted-foreground font-medium leading-relaxed uppercase tracking-tight">
                Protection Technology Ecosystem for vehicles, motorcycles, and architectural solutions.
              </p>
              <div className="flex gap-4">
                 {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer text-[10px] font-bold">X</div>)}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Solutions</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="/solutions/automotive" className="hover:text-foreground transition-colors">Automotive</Link>
                     <Link href="/solutions/moto" className="hover:text-foreground transition-colors">Motorcycle</Link>
                     <Link href="/solutions/architectural" className="hover:text-foreground transition-colors">Architectural</Link>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Company</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="/about" className="hover:text-foreground transition-colors">About Us</Link>
                     <Link href="/partners" className="hover:text-foreground transition-colors">Partners</Link>
                     <Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link>
                     <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Support</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link>
                     <Link href="/warranty" className="hover:text-foreground transition-colors text-foreground font-black">Warranty</Link>
                     <Link href="/locator" className="hover:text-foreground transition-colors">Locator</Link>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Legal</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                     <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-8 pt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 mt-20 text-[9px] font-bold uppercase text-muted-foreground tracking-[0.3em]">
            <p>© 2026 AZTEK Ecosystem PVT LTD. All rights reserved.</p>
            <div className="flex gap-8">
               <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
               <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
               <Link href="#" className="hover:text-primary transition-colors">X (Twitter)</Link>
            </div>
         </div>
      </footer>
    </div>
  )
}
