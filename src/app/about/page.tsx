import Link from "next/link"
import { ShieldCheck, Target, Eye, History, Globe, Users, Trophy, Milestone, ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { SiteHeader } from "@/components/layout/site-header"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-bg") || PlaceHolderImages[0]

  const milestones = [
    { year: "2023", title: "Molecular Core", desc: "Initial lab breakthrough in self-healing urethane matrices." },
    { year: "2024", title: "Academy Alpha", desc: "Launch of the mandatory installer certification protocol." },
    { year: "2025", title: "eWarrantyFy", desc: "Digital warranty standards established for 10-year backing." },
    { year: "2026", title: "Nexus Expansion", desc: "Scaling the partner network to 480+ certified labs globally." }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* About Hero */}
        <section className="relative py-48 overflow-hidden bg-primary/5">
          <div className="max-w-7xl mx-auto px-8 relative z-10 space-y-10 text-center">
            <Badge variant="outline" className="px-6 py-2 border-primary/30 text-primary uppercase tracking-[0.4em] font-bold text-[10px] rounded-full">AZTEK Corporate Story</Badge>
            <h1 className="text-6xl md:text-[8rem] font-headline font-bold uppercase tracking-tighter leading-none text-gradient">
               Redefining <br /><span className="text-primary italic">Permanence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Building the future of surface protection through advanced molecular engineering and a world-class professional ecosystem.
            </p>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(37,99,235,0.1),transparent_70%)]" />
        </section>

        {/* Vision & Mission */}
        <section className="py-40">
           <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl group">
                <Image src={heroImage.imageUrl} alt="AZTEK Visionary Design" fill className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 p-8 glass rounded-3xl">
                   <h3 className="text-xl font-headline font-bold uppercase mb-2">The Golden Rule</h3>
                   <p className="text-sm text-muted-foreground font-medium leading-relaxed italic">"Every micron of every finish deserves the highest standard of defense."</p>
                </div>
             </div>
             <div className="space-y-20">
                <div className="space-y-8">
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Target className="w-7 h-7" />
                   </div>
                   <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter">Our Core Mission</h2>
                   <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                      To empower automotive and architectural professionals with the technology and operational infrastructure they need to deliver factory-finish protection that lasts a lifetime.
                   </p>
                </div>
                <div className="space-y-8">
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Eye className="w-7 h-7" />
                   </div>
                   <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter">Strategic Vision</h2>
                   <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                      Becoming the global benchmark for protection technology—where AZTEK certification is the mandatory credential for excellence in surface engineering.
                   </p>
                </div>
             </div>
           </div>
        </section>

        {/* Growth Roadmap Timeline */}
        <section className="py-40 bg-card border-y border-border">
           <div className="max-w-7xl mx-auto px-8 space-y-24">
              <div className="text-center space-y-4">
                 <Badge className="bg-primary/10 text-primary text-[10px] tracking-widest uppercase">The Roadmap</Badge>
                 <h2 className="text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-none">Global Growth <span className="text-primary italic">Milestones</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[32px] overflow-hidden shadow-2xl">
                 {milestones.map((m) => (
                   <div key={m.year} className="p-12 bg-card hover:bg-accent/40 transition-all group">
                      <span className="text-4xl font-headline font-bold text-primary/40 group-hover:text-primary transition-colors block mb-8">{m.year}</span>
                      <h4 className="text-lg font-headline font-bold uppercase mb-4">{m.title}</h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">{m.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Leadership & Value Section */}
        <section className="py-40">
          <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
             <Shield className="w-16 h-16 text-primary mx-auto opacity-50" />
             <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-none">
                Protection <br /><span className="text-primary italic">Without Limits.</span>
             </h2>
             <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                As we expand across continents, our commitment to quality control remains non-negotiable. 100% of the AZTEK network is trained through our Bengaluru-based Academy Center of Excellence.
             </p>
             <div className="pt-10 flex justify-center gap-6">
                <Button asChild className="btn-electric h-16 px-14 text-xs rounded-full">
                  <Link href="/partners">Partner With AZTEK</Link>
                </Button>
             </div>
          </div>
        </section>
      </main>
    </div>
  )
}