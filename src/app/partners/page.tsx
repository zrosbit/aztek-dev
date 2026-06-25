"use client"

import Link from "next/link"
import { 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Trophy, 
  Medal, 
  Star, 
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/layout/site-header"

export default function PartnerNetworkPage() {
  const benefits = [
    { title: "Qualified Leads", desc: "Automotive and architectural leads routed directly to your business via AZTEK Connect.", icon: Users },
    { title: "Academy Training", desc: "Access the benchmark in protection technology training and tiered certification.", icon: GraduationCap },
    { title: "Marketing Support", desc: "Co-branded collateral, seasonal campaign packs, and premium display assets.", icon: TrendingUp },
    { title: "Warranty Backing", desc: "10-year digital warranties backed by eWarrantyFy to give your customers confidence.", icon: ShieldCheck },
  ]

  const tiers = [
    {
      level: 1,
      name: "Certified Installer",
      how: "Complete Academy Tier 1 — theory + practical lab",
      benefits: ["Listed on Partner Finder", "Connect Access", "Warranty Rights", "Standard Margins"],
      icon: Star,
      color: "text-primary"
    },
    {
      level: 2,
      name: "Gold Partner",
      how: "Complete Academy Tier 2 — advanced install assessment",
      benefits: ["Priority Lead Routing", "Gold Portal Badge", "Enhanced Margins", "Co-brand Support"],
      icon: Medal,
      color: "text-amber-500"
    },
    {
      level: 3,
      name: "Master Installer",
      how: "Complete Academy Tier 3 — become a certified trainer",
      benefits: ["Top Finder Placement", "Premium Margins", "Certification Revenue Share", "Quality Ambassador"],
      icon: Trophy,
      color: "text-purple-500"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-48 overflow-hidden bg-primary/5">
          <div className="max-w-7xl mx-auto px-8 text-center space-y-8 relative z-10">
            <Badge variant="outline" className="px-4 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-[0.2em] font-bold text-[10px]">
              Global Partner Network
            </Badge>
            <h1 className="text-5xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-[0.9] uppercase text-gradient">
              Build your future with <br /><span className="text-primary italic">AZTEK Protection</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Join India's most advanced protection ecosystem. Transform your workshop with AZTEK Connect, Academy, and eWarrantyFy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="btn-electric h-16 px-12 text-xs rounded-full">
                <Link href="/partners/apply">Apply for Certification <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-12 text-xs rounded-full border-white/10 uppercase tracking-widest font-bold">
                <Link href="#tiers">Explore Tiers</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="py-32">
          <div className="max-w-7xl mx-auto px-8 space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-headline font-bold uppercase tracking-tighter">The Connect Advantage</h2>
              <p className="text-muted-foreground max-w-xl mx-auto uppercase tracking-widest text-[10px] font-bold">We provide the operational moat that helps certified partners scale.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {benefits.map((b) => (
                <div key={b.title} className="space-y-4 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <b.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-headline font-bold uppercase tracking-tight">{b.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section id="tiers" className="py-32 bg-card/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-8 space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-headline font-bold uppercase tracking-tighter">Certification Ladder</h2>
              <p className="text-muted-foreground max-w-xl mx-auto uppercase tracking-widest text-[10px] font-bold">Progress through our tiered system to unlock advanced routing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <Card key={tier.name} className="bg-white/5 border-white/5 relative overflow-hidden group shadow-2xl">
                  <div className={cn("absolute top-0 left-0 w-full h-1", tier.color.replace('text', 'bg'))} />
                  <CardHeader className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className={cn("w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform", tier.color)}>
                        <tier.icon className="w-7 h-7" />
                      </div>
                      <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest border-white/10">Tier 0{tier.level}</Badge>
                    </div>
                    <CardTitle className="text-2xl font-headline uppercase leading-none">{tier.name}</CardTitle>
                    <CardDescription className="text-xs font-bold uppercase text-muted-foreground mt-4 tracking-tight">{tier.how}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <ul className="space-y-4">
                      {tier.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-xs font-medium text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full mt-10 rounded-2xl h-12 text-[10px] uppercase font-bold tracking-widest border-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                      <Link href="/partners/apply">Select Tier Path</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-background text-center relative overflow-hidden">
           <div className="max-w-4xl mx-auto px-8 space-y-12 relative z-10">
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-none">
                 Ready to <br /><span className="text-primary italic">Transform?</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                 Initiate your application to the AZTEK global network today. Join 480+ certified labs redefining protection.
              </p>
              <div className="pt-8">
                 <Button asChild className="btn-electric h-16 px-16 text-xs rounded-full">
                    <Link href="/partners/apply">Apply For Certification <ArrowRight className="ml-3 w-4 h-4" /></Link>
                 </Button>
              </div>
           </div>
        </section>
      </main>
    </div>
  )
}
