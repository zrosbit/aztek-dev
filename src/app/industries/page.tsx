import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Building2, Bike, Box, Layers, Globe, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react"

export default function IndustriesPage() {
  const industries = [
    {
      title: "Vehicle Owners",
      icon: Car,
      challenge: "Protecting luxury assets from daily road debris and environmental fallout.",
      solution: "Full-body PPF and 9H Ceramic Armor integration.",
      benefit: "Preserved OEM finish integrity and residual value maximization.",
      cta: "Locate Installer"
    },
    {
      title: "Motorcycle Enthusiasts",
      icon: Bike,
      challenge: "Vulnerable high-impact zones on superbike fairings and tanks.",
      solution: "AZTEK Moto Shield Pro precision-cut panel kits.",
      benefit: "Invisible protection with zero fitment compromise.",
      cta: "Explore Moto Kits"
    },
    {
      title: "Architects & Designers",
      icon: Building2,
      challenge: "Meeting LEED standards while maintaining facade transparency.",
      solution: "Advanced solar control and spectrally-selective films.",
      benefit: "Up to 80% heat load reduction without tint distortion.",
      cta: "Request Specs"
    },
    {
      title: "Commercial Facilities",
      icon: Layers,
      challenge: "Extremely high HVAC expenditure and guest privacy concerns.",
      solution: "Thermal management films and intelligent glazing solutions.",
      benefit: "Rapid ROI via 30%+ reduction in cooling energy loads.",
      cta: "Schedule Site Survey"
    },
    {
      title: "Fleet Operators",
      icon: Globe,
      challenge: "High refurbishment costs on lease return and asset downtime.",
      solution: "AZTEK Enterprise Bulk PPF and Window Film programmes.",
      benefit: "Standardized protection across multi-region logistics.",
      cta: "Enterprise Program"
    },
    {
      title: "Detailing Professionals",
      icon: Box,
      challenge: "Scaling a protection business without operational infrastructure.",
      solution: "AZTEK Connect OS + Academy Tiered Certification.",
      benefit: "Qualified B2B leads and backend business management.",
      cta: "Apply For Network"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="py-32 bg-primary/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 text-center space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] font-bold uppercase tracking-[0.4em] px-6 py-2 rounded-full">Sector Mapping</Badge>
            <h1 className="text-6xl md:text-[8rem] font-headline font-bold uppercase tracking-tighter leading-none text-gradient">
              Vertical <br /><span className="text-primary italic">Solutions.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              Mapping advanced molecular protection technology to the unique challenges of global industry.
            </p>
          </div>
        </section>


        {/* Industry Grid */}
        <section className="py-40">
           <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                 {industries.map((ind) => (
                   <Card key={ind.title} className="glass border-border hover:border-primary/30 transition-all duration-700 group flex flex-col h-full">
                     <CardHeader className="p-12 pb-8">
                        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white transition-all duration-500 mb-10">
                           <ind.icon className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-3xl font-headline uppercase leading-tight mb-8 group-hover:text-primary transition-colors">{ind.title}</CardTitle>
                        
                        <div className="space-y-6">
                           <div className="space-y-2">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Challenge</p>
                              <p className="text-sm text-muted-foreground font-medium leading-relaxed">{ind.challenge}</p>
                           </div>
                           <div className="space-y-2">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">Solution</p>
                              <p className="text-sm text-foreground font-bold uppercase">{ind.solution}</p>
                           </div>
                        </div>
                     </CardHeader>
                     <CardContent className="p-12 pt-0 mt-auto">
                        <div className="pt-8 border-t border-white/5 space-y-8">
                           <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                              <p className="text-xs font-medium text-muted-foreground leading-relaxed">{ind.benefit}</p>
                           </div>
                           <Button className="w-full btn-electric h-14 rounded-full text-[10px] uppercase font-bold tracking-widest gap-2">
                              {ind.cta} <ArrowRight className="w-4 h-4" />
                           </Button>
                        </div>
                     </CardContent>
                   </Card>
                 ))}
              </div>
           </div>
        </section>

        {/* Strategy Section */}
        <section className="py-40 bg-card border-y border-border text-center">
           <div className="max-w-4xl mx-auto px-8 space-y-12">
              <Shield className="w-16 h-16 text-primary mx-auto opacity-50" />
              <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter leading-none">Custom Enterprise <span className="text-primary italic">Specifications</span></h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                 Need a bespoke protection programme for a commercial fleet or high-value real estate development? Our engineering team provides direct B2B consultation for institutional projects.
              </p>
              <div className="pt-8">
                 <Button asChild className="h-16 px-16 btn-electric text-xs rounded-full">
                    <Link href="/contact">Request Institutional Consultation</Link>
                 </Button>
              </div>
           </div>
        </section>
      </main>
    </div>
  )
}
