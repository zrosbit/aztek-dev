"use client"

import { use, useEffect, useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowLeft, 
  ArrowRight,
  MapPin, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Zap, 
  Activity,
  ChevronRight,
  Info
} from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const CASE_DATA: Record<string, any> = {
  "AZ-CASE-01": {
    id: "AZ-CASE-01",
    title: "Porsche 911 GT3 RS",
    category: "Automotive",
    location: "Bengaluru, India",
    product: "AZTEK Pro Stealth PPF",
    duration: "4 Days",
    heroImage: "https://picsum.photos/seed/case1/1920/1080",
    challenge: "The client requested absolute paint protection for a high-performance GT3 RS intended for frequent track use. The primary challenge was the complex aero-ducting on the front fenders and the high-tension curves of the rear wing, which require precise fitment to avoid edge lifting under extreme thermal cycles.",
    solution: "We deployed a customized digital pattern for a 100% seamless wrap. AZTEK Pro Stealth film was chosen for its high-impact absorption and matte-satin finish that preserves the OEM paint color while eliminating gloss reflections. All edges were sealed using our proprietary thermal-bonding protocol.",
    outcomes: [
      { label: "Fitment Accuracy", val: "99.4%" },
      { label: "Thermal Stability", val: "100%" },
      { label: "Residual Value Impact", val: "+12%" }
    ],
    gallery: [
      "https://picsum.photos/seed/p1/600/400",
      "https://picsum.photos/seed/p2/600/400",
      "https://picsum.photos/seed/p3/600/400"
    ]
  },
  "AZ-CASE-02": {
    id: "AZ-CASE-02",
    title: "Nexus Commercial HQ",
    category: "Architectural",
    location: "Austin, TX",
    product: "Intelligent Solar Shield 70",
    duration: "14 Days",
    heroImage: "https://picsum.photos/seed/case2/1920/1080",
    challenge: "A 12-story glass facade building faced extreme heat gain, leading to soaring HVAC costs and employee discomfort. The board required a solution that reduced solar energy intake by 30% without affecting the natural clarity of the workspace glazing.",
    solution: "AZTEK spectrally-selective ceramic films were applied across 45,000 sq ft of facade. This technology filters infrared wavelengths while allowing 70% of visible light transmission, effectively maintaining a clear view while blocking 80% of heat-carrying IR rays.",
    outcomes: [
      { label: "Cooling Load Reduction", val: "32%" },
      { label: "Payback Period", val: "18 Mo" },
      { label: "UV Rejection", val: "99.9%" }
    ],
    gallery: [
      "https://picsum.photos/seed/n1/600/400",
      "https://picsum.photos/seed/n2/600/400",
      "https://picsum.photos/seed/n3/600/400"
    ]
  },
  "AZ-CASE-03": {
    id: "AZ-CASE-03",
    title: "Ducati Panigale V4",
    category: "Motorcycle",
    location: "Dubai, UAE",
    product: "Moto Shield Precision Fit",
    duration: "2 Days",
    heroImage: "https://picsum.photos/seed/case3/1920/1080",
    challenge: "Superbike fairings are extremely vulnerable to high-velocity stone impacts. The Panigale's complex carbon fairings and fuel tank curves make standard film kits difficult to apply without visible seams or air pockets.",
    solution: "We utilized our laser-mapped Moto Shield kit, featuring over 18 precision-cut panels. The 8.5-mil high-tack film was used to ensure permanent adhesion on high-vibration surfaces, including the carbon-fiber winglets.",
    outcomes: [
      { label: "Impact Absorption", val: "High" },
      { label: "Aesthetic Impact", val: "Invisible" },
      { label: "Cleaning Effort", val: "-60%" }
    ],
    gallery: [
      "https://picsum.photos/seed/d1/600/400",
      "https://picsum.photos/seed/d2/600/400",
      "https://picsum.photos/seed/d3/600/400"
    ]
  },
}

export default function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [project, setProject] = useState<any>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setProject(CASE_DATA[id] || CASE_DATA["AZ-CASE-01"])
  }, [id])

  if (!mounted || !project) return null

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Project Hero */}
        <section className="relative h-[70vh] w-full overflow-hidden bg-[#0A0A0A]">
          <Image 
            src={project.heroImage} 
            alt={project.title} 
            fill 
            className="object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="absolute bottom-20 left-0 right-0">
             <div className="max-w-7xl mx-auto px-8 space-y-6">
                <Button asChild variant="ghost" className="h-10 px-4 rounded-full bg-white/5 border border-white/10 text-white gap-2 mb-8 hover:bg-white/10 transition-all">
                  <Link href="/case-studies"><ArrowLeft className="w-4 h-4" /> Back to Portfolio</Link>
                </Button>
                <div className="flex items-center gap-4">
                   <Badge className="bg-primary text-white border-none px-4 py-1 text-[10px] uppercase tracking-widest">{project.category}</Badge>
                   <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase">{project.id}</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-headline font-bold uppercase tracking-tighter text-white">{project.title}</h1>
             </div>
          </div>
        </section>

        {/* Technical Dossier Grid */}
        <section className="py-32">
           <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Main Content Column */}
              <div className="lg:col-span-8 space-y-24">
                 
                 {/* Overview */}
                 <div className="space-y-8">
                    <h2 className="text-2xl font-headline font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                       <Info className="w-6 h-6" /> The Challenge
                    </h2>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-3xl">
                       {project.challenge}
                    </p>
                 </div>

                 {/* Solution */}
                 <div className="space-y-8">
                    <h2 className="text-2xl font-headline font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                       <Zap className="w-6 h-6" /> Molecular Solution
                    </h2>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-3xl">
                       {project.solution}
                    </p>
                 </div>

                 {/* Outcomes Grid */}
                 <div className="space-y-12">
                    <h2 className="text-2xl font-headline font-bold uppercase tracking-widest text-primary">Quantifiable Outcomes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       {project.outcomes.map((o: any) => (
                         <Card key={o.label} className="bg-white/5 border-white/10 p-8 space-y-2 group hover:border-primary/40 transition-all">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{o.label}</p>
                            <p className="text-3xl font-headline font-bold text-foreground group-hover:text-primary transition-colors">{o.val}</p>
                         </Card>
                       ))}
                    </div>
                 </div>

                 {/* Project Gallery */}
                 <div className="space-y-12">
                    <h2 className="text-2xl font-headline font-bold uppercase tracking-widest text-primary">Technical Documentation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {project.gallery.map((img: string, i: number) => (
                         <div key={i} className={cn(
                           "relative rounded-[40px] overflow-hidden border border-white/5 group shadow-2xl aspect-[4/3]",
                           i === 2 && "md:col-span-2 aspect-[16/9]"
                         )}>
                            <Image src={img} alt={`Process ${i}`} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Sidebar: Technical Specs */}
              <div className="lg:col-span-4 space-y-12">
                 <Card className="bg-white/5 border-white/10 p-10 rounded-[40px] space-y-10 shadow-2xl sticky top-32">
                    <div className="space-y-6">
                       <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Project Specs</h3>
                       <div className="space-y-6 pt-6 border-t border-white/5">
                          <div className="space-y-1">
                             <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Location Node</p>
                             <div className="flex items-center gap-2 text-sm font-bold uppercase">
                                <MapPin className="w-4 h-4 text-primary" /> {project.location}
                             </div>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Applied Technology</p>
                             <div className="flex items-center gap-2 text-sm font-bold uppercase">
                                <Layers className="w-4 h-4 text-primary" /> {project.product}
                             </div>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Execution Window</p>
                             <div className="flex items-center gap-2 text-sm font-bold uppercase">
                                <Activity className="w-4 h-4 text-primary" /> {project.duration}
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-6 pt-10 border-t border-white/5">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary">Registry Verification</h4>
                       <div className="flex items-center gap-4 p-4 bg-green-500/5 border border-green-500/20 rounded-2xl">
                          <ShieldCheck className="w-6 h-6 text-green-500" />
                          <div className="space-y-0.5">
                             <p className="text-[9px] font-bold text-green-500 uppercase tracking-widest">Digital Warranty Active</p>
                             <p className="text-[8px] text-muted-foreground uppercase font-bold">Authenticated by eWarrantyFy</p>
                          </div>
                       </div>
                    </div>

                    <Button asChild className="w-full h-14 btn-electric rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl group/btn">
                       <Link href="/locator">
                          Find Nearest Hub <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                       </Link>
                    </Button>
                 </Card>
              </div>

           </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-[#0A0A0A] border-y border-white/5 text-center">
           <div className="max-w-4xl mx-auto px-8 space-y-12">
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-none">
                 Achieve the same <br /><span className="text-primary italic">Result.</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium uppercase tracking-widest leading-relaxed">
                 Our technical engineering team is ready to spec your next protection project.
              </p>
              <div className="pt-8">
                 <Button asChild className="h-16 px-16 rounded-full btn-electric text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">
                    <Link href="/contact">Request Technical Briefing</Link>
                 </Button>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-background border-t border-white/5 py-20">
         <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">© 2026 AZTEK Ecosystem PVT LTD</p>
            <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest">
               <Link href="/solutions/automotive" className="text-muted-foreground hover:text-primary transition-colors">Automotive</Link>
               <Link href="/solutions/moto" className="text-muted-foreground hover:text-primary transition-colors">Motorcycle</Link>
               <Link href="/solutions/architectural" className="text-muted-foreground hover:text-primary transition-colors">Architectural</Link>
            </div>
         </div>
      </footer>
    </div>
  )
}
