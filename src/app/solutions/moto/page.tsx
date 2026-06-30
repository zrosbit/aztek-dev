"use client"

import banner1 from "../../img/a1.png";
import aa2 from "../../img/aa2.png";


import { SiteHeader } from "@/components/layout/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  ShieldCheck, 
  CheckCircle2, 
  Shield, 
  Zap, 
  ArrowRight,
  Bike,
  Check,
  Info,
  MapPin,
  Phone,
  Mail
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

export default function MotoPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === "solution-moto") || PlaceHolderImages[0]

  const packages = [
    {
      title: "Essential",
      label: "Critical area protection",
      features: [
        "Tank protection",
        "Headlight coverage",
        "Mirror protection",
        "2-year warranty"
      ],
      icon: Shield,
      accent: "border-white/10"
    },
    {
      title: "Performance",
      label: "Enhanced coverage for spirited riding",
      features: [
        "Full tank & fenders",
        "Swing arm protection",
        "Frame coverage",
        "5-year warranty"
      ],
      icon: Zap,
      accent: "border-primary/40 shadow-primary/10 shadow-xl",
      isPopular: true
    },
    {
      title: "Track Ready",
      label: "Maximum protection for track bikes",
      features: [
        "Full body coverage",
        "Custom fit",
        "Track-grade material",
        "7-year warranty"
      ],
      icon: ShieldCheck,
      accent: "border-white/10"
    }
  ]

  const brands = [
    "Ducati", "BMW Motorrad", "KTM", "Triumph",
    "Harley-Davidson", "Kawasaki", "Honda", "Yamaha"
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0 z-0">
            <Image 
              src={banner1} 
              alt="Motorcycle Protection" 
              fill 
              className="object-cover opacity-60 group-hover:grayscale-0 transition-all duration-1000"
              data-ai-hint="superbike"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center space-y-8 animate-reveal-up">
            <Badge variant="outline" className="px-6 py-2 border-primary/30 text-primary bg-primary/5 uppercase tracking-[0.4em] font-bold text-[10px] rounded-full">
              AZTEK Moto Vertical
            </Badge>
            <h1 className="text-6xl md:text-[8rem] font-headline font-bold uppercase tracking-tighter leading-none text-gradient">
              Motorcycle <br /><span className="text-primary italic">Protection</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-tight">
              Premium protection packages for superbikes and luxury motorcycles. Engineered to maintain OEM aesthetics while providing invisible high-impact defense.
            </p>
            <div className="pt-8">
               <Button asChild size="lg" className="btn-electric h-16 px-14 text-[11px] rounded-full text-white">
                 <Link href="#quote">Get Protection Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
               </Button>
            </div>
          </div>
        </section>

        {/* Protection Packages */}
        <section className="py-40 border-b border-white/5 bg-primary/5">
          <div className="max-w-7xl mx-auto px-8 space-y-24">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-headline font-bold uppercase tracking-tight">Protection Packages</h2>
              <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.3em]">Custom-fit PPF solutions for high-performance motorcycles</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card key={pkg.title} className={cn("bg-card border transition-all duration-500 group overflow-hidden flex flex-col h-full", pkg.accent)}>
                  <CardHeader className="p-10 space-y-6">
                    <div className="flex items-center justify-between">
                       <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <pkg.icon className="w-6 h-6" />
                       </div>
                       {pkg.isPopular && <Badge className="bg-primary text-white text-[8px] uppercase tracking-widest px-3">Most Popular</Badge>}
                    </div>
                    <div>
                       <CardTitle className="text-2xl uppercase tracking-widest">{pkg.title}</CardTitle>
                       <CardDescription className="text-xs text-muted-foreground font-medium uppercase mt-2">{pkg.label}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="px-10 pb-10 flex-1 flex flex-col">
                    <ul className="space-y-4 pt-8 border-t border-white/5">
                       {pkg.features.map(f => (
                         <li key={f} className="flex items-center gap-3 text-xs font-bold uppercase text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                         </li>
                       ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-40">
           <div className="max-w-7xl mx-auto px-8 space-y-20">
              <div className="text-center space-y-4">
                <h2 className="text-5xl font-headline font-bold uppercase tracking-tight text-foreground">Premium Brands We Protect</h2>
                <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.3em]">Expert protection for all major motorcycle brands</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {brands.map((brand) => (
                   <div key={brand} className="p-8 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center text-center hover:border-primary/40 hover:bg-white/[0.08] transition-all cursor-default">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{brand}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Side-by-Side: Why Protect? */}
        <section className="py-40 bg-card/20 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="aspect-[16/10] relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                 <Image 
                   src={aa2} 
                   alt="Technical bike detailing" 
                   fill 
                   className="object-cover grayscale"
                   data-ai-hint="motorcycle detail"
                 />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
              <div className="space-y-12">
                 <div className="space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/20 text-[10px] font-bold uppercase tracking-widest px-4 py-1">Ecosystem Standards</Badge>
                    <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">Why Protect <br /><span className="text-primary italic">Your Bike?</span></h2>
                 </div>
                 <div className="space-y-6">
                    {[
                      "Shield against stone chips and road debris",
                      "Maintain resale value",
                      "Custom-fit for perfect aesthetics",
                      "Track-tested durability"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                            <Check className="w-4 h-4 text-primary group-hover:text-white" />
                         </div>
                         <p className="text-sm text-muted-foreground font-bold uppercase tracking-tight leading-relaxed">{item}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote" className="py-40">
           <div className="max-w-4xl mx-auto px-8 space-y-16">
              <div className="text-center space-y-4">
                 <h2 className="text-5xl font-headline font-bold uppercase tracking-tight">Get Your Quote</h2>
                 <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Connect with our technical team to initialize your moto project</p>
              </div>

              <Card className="bg-white/5 border-white/10 p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
                 <form className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Name *</label>
                          <Input required placeholder="Your name" className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Email *</label>
                          <Input type="email" required placeholder="your@email.com" className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Phone *</label>
                          <Input type="tel" placeholder="+91 ..." className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Motorcycle</label>
                          <Input placeholder="Make and model" className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Message</label>
                       <Textarea placeholder="Describe your project..." className="bg-background/50 border-white/10 min-h-[120px] rounded-2xl text-sm p-6" />
                    </div>
                    <Button className="w-full h-16 btn-electric rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em]">
                       Request Quote <ArrowRight className="ml-2 w-4 h-4" />
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
              <p className="text-[10px] text-muted-foreground max-w-xs font-medium leading-relaxed">Protection Technology Ecosystem for vehicles, motorcycles, and architectural solutions.</p>
              <div className="flex gap-4">
                 <Badge variant="outline" className="border-white/10 opacity-40">FB</Badge>
                 <Badge variant="outline" className="border-white/10 opacity-40">IG</Badge>
                 <Badge variant="outline" className="border-white/10 opacity-40">LI</Badge>
                 <Badge variant="outline" className="border-white/10 opacity-40">TW</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Solutions</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="/solutions/automotive" className="hover:text-foreground">Automotive Protection</Link>
                     <Link href="/solutions/moto" className="hover:text-foreground">Motorcycle Protection</Link>
                     <Link href="/solutions/architectural" className="hover:text-foreground">Architectural Films</Link>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Company</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="/about" className="hover:text-foreground">About Us</Link>
                     <Link href="/partners" className="hover:text-foreground">Partner Network</Link>
                     <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link>
                     <Link href="/resources" className="hover:text-foreground">Resources</Link>
                     <Link href="/warranty" className="hover:text-foreground">Warranty Center</Link>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Contact</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Mumbai, Maharashtra, India</p>
                     <p className="flex items-center gap-2"><Phone className="w-3 h-3" /> +91 98765 43210</p>
                     <p className="flex items-center gap-2"><Mail className="w-3 h-3" /> info@aztek.com</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-8 pt-20 flex justify-between items-center border-t border-white/5 mt-20 text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
            <p>© 2025 AZTEK Protection Technology. All rights reserved.</p>
            <div className="flex gap-8">
               <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
               <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            </div>
         </div>
      </footer>
    </div>
  )
}
