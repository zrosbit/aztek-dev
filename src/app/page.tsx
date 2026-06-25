import Link from "next/link"
import solArch from "./img/sol-arch-HK8pbRH6.jpg";
import MotoImg from "./img/sol-moto-WL7sRVal.jpg";
import MotoCycle from "./img/sol-auto-CAiO7Nzc.jpg";
import BannerC from "./img/car.jpg";
import car1 from "./img/car.jpg";
import a1 from "./img/a1.png";
import a2 from "./img/a2.jpg";
import carP from "./img/car-banner.jpg";

import { 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Shield, 
  Car, 
  Bike, 
  Building2, 
  ArrowRight,
  Users,
  History,
  CheckCircle2,
  Globe,
  Layers,
  Box,
  Star,
  Trophy,
  Smartphone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { SiteHeader } from "@/components/layout/site-header"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

export default function LandingPage() {
  const stats = [
    { label: "Years Experience", val: "10+" },
    { label: "Certified Studios", val: "500+" },
    { label: "Projects Completed", val: "50,000+" },
    { label: "Client Satisfaction", val: "98%" }
  ]

  const solutions = [
    { 
      title: "Automotive Protection", 
      desc: "Comprehensive protection across automotive, motorcycle, and architectural applications", 
image: carP,
      features: ["Paint Protection Film", "Ceramic Protection", "Window Films"],
      href: "/solutions/automotive"
    },
    { 
      title: "Motorcycle Protection", 
      desc: "Specialized protection for superbikes and premium motorcycles", 
image: MotoImg,
      features: ["Bike PPF", "Premium Packages", "Performance Protection"],
      href: "/solutions/moto"
    },
    { 
      title: "Architectural Films", 
      desc: "Advanced window films for commercial and residential buildings", 
      image: solArch,
      features: ["Heat Rejection Films", "Privacy Films", "Decorative Films"],
      href: "/solutions/architectural"
    }
  ]

  const whyAztek = [
    { title: "Advanced Technology", desc: "Cutting-edge molecular engineering for superior surface defense.", icon: Zap },
    { title: "Premium Quality", desc: "Rigorous standards ensuring consistent performance across all verticals.", icon: ShieldCheck },
    { title: "Certified Network", desc: "100% of our installers undergo mandatory tiered certification.", icon: Users },
    { title: "Long-Term Protection", desc: "Digital warranty standards ensure lasting value and peace of mind.", icon: History }
  ]

  const industries = [
    { name: "Automotive", icon: Car },
    { name: "Motorcycle", icon: Bike },
    { name: "Architecture", icon: Building2 },
    { name: "Commercial", icon: Layers },
    { name: "Fleet", icon: Globe },
    { name: "Professional Detailing", icon: Box }
  ]

  const stories = [
    { title: "Luxury Sedan Full Protection", client: "Executive Client", image: carP },
    { title: "Superbike Protection Package", client: "Pro Racer", image: a1 },
    { title: "Commercial Building Heat Rejection", client: "Tech Park", image: a2 }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30">
      <SiteHeader />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0 z-0">
            <Image 
              src= {BannerC}
              alt="AZTEK Pro Hero"
              fill
              className="object-cover opacity-50 grayscale"
              priority
              data-ai-hint="luxury car ppf"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center space-y-12">
            <div className="space-y-6 animate-reveal-up">
              <h2 className="text-7xl md:text-[9rem] font-headline font-bold tracking-tighter leading-[0.8] uppercase text-gradient">
                Protection <span className="text-primary italic"> for </span> <br /> every surface
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                AZTEK Pro deliver advanced surface protection solutions that redefine industry standards for automotive, motorcycle and architecture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-reveal-up [animation-delay:200ms]">
              <Button size="lg" asChild className="btn-electric h-16 px-14 text-[11px] rounded-full text-white">
                <Link href="/partners/apply">Become a Partner <ChevronRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-16 px-14 text-[11px] font-bold uppercase tracking-widest border-white/10 hover:bg-white/5 rounded-full">
                <Link href="/solutions/automotive">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-20 bg-background border-b border-white/5">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map(s => (
              <div key={s.label} className="space-y-2">
                <p className="text-4xl md:text-5xl font-headline font-bold text-foreground">{s.val}</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Protection Solutions - High Contrast Obsidian Cards */}
        <section id="solutions" className="py-40 bg-background/50">
          <div className="max-w-7xl mx-auto px-8 space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold uppercase tracking-tight text-foreground">Protection Solutions</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm font-medium uppercase tracking-tight">
                Comprehensive protection across automotive, motorcycle, and architectural applications with AZTEK Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((v) => (
                <Card key={v.title} className="bg-card border-white/5 overflow-hidden flex flex-col h-full group shadow-2xl rounded-[2.5rem] transition-all hover:border-primary/20">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image 
                      src={v.image} 
                      alt={v.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint="luxury asset"
                    />
                  </div>
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-[13px] font-bold uppercase tracking-[0.2em] text-primary">{v.title}</CardTitle>
                    <CardDescription className="text-[11px] text-muted-foreground leading-relaxed mt-4 font-bold h-10 line-clamp-2 uppercase tracking-wide">
                      {v.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex-1">
                    <ul className="space-y-4 mt-8">
                      {v.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-[10px] text-foreground/80 font-bold uppercase tracking-widest">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-8 pt-0 mt-auto">
                    <Link href={v.href} className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group/link">
                      Learn More <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why AZTEK Pro */}
        <section className="py-40 bg-background/50 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-8 space-y-20">
              <div className="text-center space-y-4">
                 <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">Why AZTEK Pro</h2>
                 <p className="text-muted-foreground max-w-xl mx-auto text-sm font-medium uppercase tracking-tight">Setting the global standard in surface protection and partner excellence</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {whyAztek.map(f => (
                   <div key={f.title} className="p-10 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all group space-y-8">
                      <f.icon className="w-10 h-10 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest">{f.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tight">{f.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-40 bg-background">
           <div className="max-w-7xl mx-auto px-8 space-y-20">
              <div className="text-center space-y-4">
                 <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">Industries We Serve</h2>
                 <p className="text-muted-foreground max-w-xl mx-auto text-sm font-medium uppercase tracking-tight">Providing strategic protection solutions across multiple sectors</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                 {industries.map((ind) => (
                   <div key={ind.name} className="p-8 rounded-2xl bg-card border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:border-primary/40 transition-all cursor-default">
                      <ind.icon className="w-6 h-6 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-tight">{ind.name}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Success Stories */}
        <section className="py-40 bg-background/50 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-8 space-y-20">
              <div className="text-center space-y-4">
                 <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">Success Stories</h2>
                 <p className="text-muted-foreground max-w-xl mx-auto text-sm font-medium uppercase tracking-tight">Explore our track record of installation excellence and client satisfaction</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {stories.map((s, i) => (
                   <Card key={i} className="bg-card border-white/5 hover:border-primary/20 transition-all group overflow-hidden shadow-2xl rounded-3xl">
                      <div className="aspect-video relative overflow-hidden">
                         <Image src={s.image} alt={s.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-ai-hint="project showcase" />
                      </div>
                      <CardContent className="p-8 space-y-3">
                         <h4 className="text-lg font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors leading-tight">{s.title}</h4>
                         <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{s.client}</p>
                      </CardContent>
                   </Card>
                 ))}
              </div>

              <div className="text-center">
                 <Link href="/case-studies" className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors underline underline-offset-8">
                    View All Success Stories
                 </Link>
              </div>
           </div>
        </section>

        {/* Join Our Partner Network */}
        <section className="py-40">
           <div className="max-w-7xl mx-auto px-8">
              <Card className="bg-card border-white/5 p-12 md:p-20 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
                 <div className="space-y-6 relative z-10 max-w-2xl text-center md:text-left">
                    <h2 className="text-5xl md:text-6xl font-headline font-bold uppercase tracking-tight text-foreground">Join Our Partner Network</h2>
                    <p className="text-lg text-muted-foreground font-medium uppercase tracking-tight leading-relaxed">
                       Grow your business with access to advanced tools, marketing support, and exclusive pricing programs with AZTEK Pro partners network today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                       <Button asChild className="btn-electric h-14 px-10 rounded-full text-xs font-bold uppercase">
                          <Link href="/partners/apply">Get In Contact <ArrowRight className="ml-2 w-4 h-4" /></Link>
                       </Button>
                       <Button variant="outline" asChild className="h-14 px-10 rounded-full text-xs font-bold uppercase border-white/10 hover:bg-white/5">
                          <Link href="/partners">Learn More</Link>
                       </Button>
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.05),transparent_70%)] pointer-events-none" />
              </Card>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-background text-center">
           <div className="max-w-4xl mx-auto px-8 space-y-12">
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-none">
                 Protect Better. <br /><span className="text-primary italic">Partner Smarter.</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium uppercase tracking-widest leading-relaxed">Experience a new standard of excellence with AZTEK Pro protection technology systems</p>
              <div className="pt-8">
                 <Button asChild className="btn-electric h-16 px-16 text-xs rounded-full uppercase font-bold tracking-[0.2em]">
                    <Link href="/contact">Schedule Consultation</Link>
                 </Button>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-card border-t border-white/5 py-20">
         <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="space-y-6 max-w-sm">
              <div className="flex flex-col items-start leading-none">
                <span className="font-headline font-bold text-2xl tracking-[0.18em] uppercase text-foreground">AZTEK <span className="text-primary italic">PRO</span></span>
                <span className="text-[8px] font-bold tracking-[0.3em] text-muted-foreground uppercase mt-0.5">PROTECTION TECHNOLOGY</span>
              </div>
              <p className="text-[10px] text-muted-foreground font-medium leading-relaxed uppercase tracking-tight">
                Advanced molecular surface armor designed to preserve OEM finish integrity for the full service life of the vehicle.
              </p>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                Mumbai, Maharashtra, India
              </p>
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
                     <Link href="/warranty" className="hover:text-foreground transition-colors">Warranty</Link>
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
            <p>© 2026 AZTEK Pro Ecosystem PVT LTD. All rights reserved.</p>
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
