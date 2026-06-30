
"use client"

import a2 from "../../img/a2.jpg";
import aka1 from "../../img/ak-a1.png";

import b1 from "../../img/corOffice.jpg";
import b2 from "../../img/villa.jpg";
import b3 from "../../img/tower.jpg";


import { SiteHeader } from "@/components/layout/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EnergySavingsCalculator } from "@/components/architectural/energy-calculator"
import { 
  Building2, 
  Sun, 
  Shield, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Eye, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone,
  Layout,
  ChevronRight,
  Target,
  Clock
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

export default function ArchitecturalSolutionPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === "solution-arch") || PlaceHolderImages[0]

  const solutions = [
    { title: "Heat Rejection", desc: "Up to 80% solar heat reduction for climate control.", icon: Sun },
    { title: "Privacy Films", desc: "Enhanced privacy without blocking natural light.", icon: Eye },
    { title: "Decorative Films", desc: "Aesthetic enhancement and corporate branding.", icon: Layout },
    { title: "Safety Films", desc: "Shatter protection and structural security.", icon: Shield },
  ]

  const benefits = [
    "Reduce cooling costs by up to 45%",
    "Eliminate glare and improve comfort",
    "99% UV rejection to prevent fading",
    "Enhance building aesthetics",
    "Increase property value",
    "Improve energy efficiency ratings"
  ]

  const showcases = [
    { title: "Corporate Office", area: "50,000 sq ft", savings: "₹5L annual", image: b1 },
    { title: "Residential Villa", area: "8,000 sq ft", savings: "₹80K annual", image: b2 },
    { title: "Commercial Tower", area: "200,000 sq ft", savings: "₹25L annual", image: b3 },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0 z-0">
            <Image 
              src={a2} 
              alt="Architectural Protection" 
              fill 
              className="object-cover opacity-100 group-hover:grayscale-0 transition-all duration-1000"
              data-ai-hint="modern architecture"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center space-y-8 animate-reveal-up">
            <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none text-gradient">
              Architectural <br /><span className="text-primary italic">Films</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-tight">
              Advanced window film solutions for commercial and residential buildings.
            </p>
            <div className="pt-8">
               <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 h-14 px-12 text-[10px] uppercase font-bold tracking-widest rounded-xl">
                 <Link href="#survey">Request Site Survey</Link>
               </Button>
            </div>
          </div>
        </section>

        {/* Film Solutions Matrix */}
        <section className="py-40 bg-background">
          <div className="max-w-7xl mx-auto px-8 space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">Film Solutions</h2>
              <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.3em]">Comprehensive window film applications for every need</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((s) => (
                <Card key={s.title} className="bg-white/5 border-white/5 hover:border-primary/40 transition-all p-10 space-y-8 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">{s.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tight">{s.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Savings Calculator Section */}
        <section className="py-40 bg-primary/5 border-y border-white/5">
           <div className="max-w-4xl mx-auto text-center space-y-12 mb-20">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-primary mb-8">
                 <Target className="w-8 h-8" />
              </div>
              <h2 className="text-5xl font-headline font-bold uppercase tracking-tight">Energy Savings Calculator</h2>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Estimate your annual savings with AZTEK window films</p>
           </div>
           <EnergySavingsCalculator />
        </section>

        {/* Commercial Benefits Section */}
        <section className="py-40">
           <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="grid grid-cols-2 gap-6">
                 <div className="aspect-[4/5] relative rounded-[32px] overflow-hidden border border-white/10">
                    <Image src={aka1} alt="Building Facade" fill className="object-cover grayscale" data-ai-hint="glass skyscraper" />
                 </div>
                 <div className="aspect-[4/5] relative rounded-[32px] overflow-hidden border border-white/10 mt-12">
                    <Image src={a2} alt="Office Interior" fill className="object-cover grayscale" data-ai-hint="modern office" />
                 </div>
              </div>
              <div className="space-y-12">
                 <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">Commercial <span className="text-primary italic">Benefits</span></h2>
                 <div className="space-y-6">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                            <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
                         </div>
                         <p className="text-sm text-muted-foreground font-bold uppercase tracking-tight">{benefit}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Project Showcase Section */}
        <section className="py-40 bg-card/20 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-8 space-y-20">
              <div className="text-center space-y-4">
                 <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">Project Showcase</h2>
                 <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.3em]">Proven results across diverse structural environments</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {showcases.map((show, i) => (
                   <Card key={i} className="bg-white/5 border-white/5 hover:border-primary/20 transition-all group overflow-hidden shadow-2xl">
                      <div className="aspect-video relative overflow-hidden">
                         <Image src={show.image} alt={show.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-ai-hint="architecture project" />
                      </div>
                      <CardContent className="p-8 space-y-4">
                         <h4 className="text-lg font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{show.title}</h4>
                         <div className="space-y-2 pt-4 border-t border-white/5">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Coverage: {show.area}</p>
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Savings: {show.savings}</p>
                         </div>
                      </CardContent>
                   </Card>
                 ))}
              </div>
           </div>
        </section>

        {/* Site Survey Form Section */}
        <section id="survey" className="py-40">
           <div className="max-w-4xl mx-auto px-8 space-y-16">
              <div className="text-center space-y-4">
                 <h2 className="text-5xl font-headline font-bold uppercase tracking-tight">Request Site Survey</h2>
                 <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Schedule a technical assessment for your property</p>
              </div>

              <Card className="bg-white/5 border-white/10 p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
                 <form className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Full Name *</label>
                          <Input required placeholder="Your name" className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Email Address *</label>
                          <Input type="email" required placeholder="your@email.com" className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Phone Number *</label>
                          <Input type="tel" placeholder="+91 ..." className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Project Type</label>
                          <Input placeholder="e.g., Office, Residential" className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Message</label>
                       <Textarea placeholder="Tell us about your project requirements..." className="bg-background/50 border-white/10 min-h-[120px] rounded-2xl text-sm p-6" />
                    </div>
                    <Button className="w-full h-16 bg-white text-black hover:bg-white/90 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl">
                       Request Survey <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                 </form>
                 <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.03),transparent_70%)] pointer-events-none" />
              </Card>
           </div>
        </section>
      </main>

      <footer className="bg-[#0A0A0A] border-t border-white/5 py-20">
         <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6">
              <div className="flex flex-col items-start leading-none">
                <span className="font-headline font-bold text-2xl tracking-[0.18em] uppercase text-foreground">AZTEK</span>
                <span className="text-[8px] font-bold tracking-[0.3em] text-muted-foreground uppercase mt-0.5">PROTECTION TECHNOLOGY</span>
              </div>
              <p className="text-[10px] text-muted-foreground max-w-xs font-medium leading-relaxed">Advanced window film technology for high-performance architectural environments.</p>
              <div className="flex gap-4">
                 {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer text-[10px] font-bold">X</div>)}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Solutions</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="/solutions/automotive" className="hover:text-foreground">Automotive</Link>
                     <Link href="/solutions/moto" className="hover:text-foreground">Motorcycle</Link>
                     <Link href="/solutions/architectural" className="hover:text-foreground">Architectural</Link>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Company</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="/about" className="hover:text-foreground">About</Link>
                     <Link href="/partners" className="hover:text-foreground">Partner Network</Link>
                     <Link href="/resources" className="hover:text-foreground">Resources</Link>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Contact</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Mumbai, India</p>
                     <p className="flex items-center gap-2"><Phone className="w-3 h-3" /> +91 80 4444 8888</p>
                     <p className="flex items-center gap-2"><Mail className="w-3 h-3" /> info@aztek.com</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-8 pt-20 flex justify-between items-center border-t border-white/5 mt-20 text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
            <p>© 2026 AZTEK Ecosystem PVT LTD. All rights reserved.</p>
            <div className="flex gap-8">
               <Link href="#" className="hover:text-foreground">Privacy</Link>
               <Link href="#" className="hover:text-foreground">Terms</Link>
            </div>
         </div>
      </footer>
    </div>
  )
}
