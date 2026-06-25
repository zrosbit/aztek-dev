"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Layers, Filter } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects")

  const categories = ["All Projects", "Automotive", "Motorcycle", "Architectural", "Commercial"]

  const cases = [
    {
      id: "AZ-CASE-01",
      title: "Porsche 911 GT3 RS",
      category: "Automotive",
      location: "Bengaluru, KA",
      product: "AZTEK Stealth PPF",
      outcome: "Full factory finish preservation under track conditions.",
      image: "https://picsum.photos/seed/case1/800/600"
    },
    {
      id: "AZ-CASE-02",
      title: "Nexus Commercial HQ",
      category: "Architectural",
      location: "Austin, TX",
      product: "Solar Control 70%",
      outcome: "32% HVAC energy reduction achieved within 90 days.",
      image: "https://picsum.photos/seed/case2/800/600"
    },
    {
      id: "AZ-CASE-03",
      title: "Ducati Panigale V4",
      category: "Motorcycle",
      location: "Dubai, UAE",
      product: "Moto Shield Pro",
      outcome: "High-impact protection for carbon-fibre aero fairings.",
      image: "https://picsum.photos/seed/case3/800/600"
    },
    {
      id: "AZ-CASE-04",
      title: "Ferrari SF90 Stradale",
      category: "Automotive",
      location: "Mumbai, MH",
      product: "Self-Healing Clear PPF",
      outcome: "Invisible defense for triple-layer Giallo Montecarlo paint.",
      image: "https://picsum.photos/seed/case4/800/600"
    },
    {
      id: "AZ-CASE-05",
      title: "Technopark Glass Facade",
      category: "Commercial",
      location: "Hyderabad, TS",
      product: "Spectrally Selective 40",
      outcome: "Significant cooling load reduction while maintaining transparency.",
      image: "https://picsum.photos/seed/case5/800/600"
    },
    {
      id: "AZ-CASE-06",
      title: "BMW R 1250 GS",
      category: "Motorcycle",
      location: "Pune, MH",
      product: "ADV Rough Terrain Kit",
      outcome: "7-mil ultra-tough barrier for tank and side panniers.",
      image: "https://picsum.photos/seed/case6/800/600"
    },
    {
      id: "AZ-CASE-07",
      title: "Luxury Residential Villa",
      category: "Architectural",
      location: "Gurugram, HR",
      product: "Privacy & UV Mirror Shield",
      outcome: "99% UV rejection protecting expensive interior fabrics.",
      image: "https://picsum.photos/seed/case7/800/600"
    },
    {
      id: "AZ-CASE-08",
      title: "Tesla Model S Plaid",
      category: "Automotive",
      location: "California, US",
      product: "9H Ceramic Matrix Gold",
      outcome: "Extreme gloss levels and low-maintenance self-cleaning effect.",
      image: "https://picsum.photos/seed/case8/800/600"
    },
    {
      id: "AZ-CASE-09",
      title: "Corporate Logistics Hub",
      category: "Commercial",
      location: "Chennai, TN",
      product: "Enterprise Window Film",
      outcome: "Uniform branding and heat reduction across 12 node facility.",
      image: "https://picsum.photos/seed/case9/800/600"
    }
  ]

  const filteredCases = activeFilter === "All Projects" 
    ? cases 
    : cases.filter(c => c.category === activeFilter)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-32 bg-primary/5 border-b border-white/5">
           <div className="max-w-7xl mx-auto px-8 text-center space-y-8">
              <Badge variant="outline" className="border-primary/20 text-primary uppercase tracking-[0.4em] text-[10px] px-6 py-2 rounded-full font-bold">Proof of Performance</Badge>
              <h1 className="text-6xl md:text-[8rem] font-headline font-bold uppercase tracking-tighter leading-none text-gradient">Installation <br /><span className="text-primary italic">Excellence.</span></h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto uppercase tracking-tight">Documenting the real-world results of AZTEK technology across elite environments.</p>
           </div>
        </section>

        <section className="py-40">
           <div className="max-w-7xl mx-auto px-8">
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-24">
                 {categories.map((cat) => (
                   <Button 
                    key={cat} 
                    variant={activeFilter === cat ? "default" : "outline"} 
                    className={cn(
                      "h-12 px-8 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all",
                      activeFilter !== cat && "border-white/10 bg-white/5 hover:bg-white/10"
                    )}
                    onClick={() => setActiveFilter(cat)}
                  >
                     {cat}
                   </Button>
                 ))}
              </div>

              {/* Cases Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                 {filteredCases.map((c) => (
                   <Card key={c.id} className="bg-card border-white/5 hover:border-primary/40 transition-all duration-700 overflow-hidden group flex flex-col h-full shadow-2xl">
                      <div className="aspect-[16/10] relative overflow-hidden">
                         <Image 
                           src={c.image} 
                           alt={c.title} 
                           fill 
                           className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" 
                           data-ai-hint="luxury project"
                         />
                         <div className="absolute top-6 left-6">
                            <Badge className="bg-black/60 backdrop-blur-md text-white border-white/10 text-[9px] uppercase tracking-widest px-3 py-1">{c.category}</Badge>
                         </div>
                      </div>
                      <CardHeader className="p-10 pb-6">
                         <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-primary tracking-[0.2em] uppercase">
                               <MapPin className="w-3.5 h-3.5" /> {c.location}
                            </div>
                            <span className="text-[10px] font-mono text-muted-foreground font-bold">{c.id}</span>
                         </div>
                         <CardTitle className="text-2xl font-headline uppercase leading-tight mb-4 group-hover:text-primary transition-colors">{c.title}</CardTitle>
                         <CardDescription className="text-sm text-muted-foreground font-medium leading-relaxed uppercase tracking-tight h-12 line-clamp-2">
                            {c.outcome}
                         </CardDescription>
                      </CardHeader>
                      <CardContent className="p-10 pt-0 mt-auto space-y-8">
                         <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground pt-6 border-t border-white/5">
                            <Layers className="w-4 h-4 text-primary" />
                            <span className="opacity-60">Tech:</span> {c.product}
                         </div>
                         <Button asChild variant="outline" className="w-full h-14 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 bg-white/5 group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                            <Link href={`/case-studies/${c.id}`} className="flex items-center justify-center gap-2">
                              View Project Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                         </Button>
                      </CardContent>
                   </Card>
                 ))}
              </div>

              {filteredCases.length === 0 && (
                <div className="py-40 text-center space-y-6 animate-in fade-in duration-700">
                   <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto opacity-20">
                      <Filter className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-headline font-bold uppercase tracking-widest text-muted-foreground">No Case Studies in this segment</h3>
                   <Button variant="ghost" onClick={() => setActiveFilter("All Projects")} className="text-[10px] uppercase font-bold text-primary underline underline-offset-8">Clear Filter</Button>
                </div>
              )}
           </div>
        </section>

        {/* Global Stats Section */}
        <section className="py-32 bg-[#0A0A0A] border-y border-white/5">
           <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { l: "Global Projects", v: "50k+" },
                { l: "Cities Covered", v: "480+" },
                { l: "Material Verified", v: "100%" },
                { l: "Customer Rating", v: "4.9/5" }
              ].map(s => (
                <div key={s.l} className="space-y-2">
                   <p className="text-4xl font-headline font-bold text-primary">{s.v}</p>
                   <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.l}</p>
                </div>
              ))}
           </div>
        </section>
      </main>

      <footer className="bg-background border-t border-white/5 py-20">
         <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <div className="flex flex-col items-start leading-none">
              <span className="font-headline font-bold text-2xl tracking-[0.18em] uppercase text-foreground">AZTEK</span>
              <span className="text-[8px] font-bold tracking-[0.3em] text-muted-foreground uppercase mt-0.5">PROTECTION TECHNOLOGY</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">© 2026 AZTEK Ecosystem PVT LTD</p>
         </div>
      </footer>
    </div>
  )
}
