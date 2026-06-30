"use client"

import carP from "../../img/car-banner.jpg";
import whyChoose from "../../img/whyChoose.jpg";

import { SiteHeader } from "@/components/layout/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Droplets, 
  Sun, 
  Maximize2, 
  ArrowRight,
  Sparkles,
  Layers,
  Search,
  MapPin,
  Clock,
  Check
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

export default function AutomotiveSolutionPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === "solution-auto") || PlaceHolderImages[0]

  const techFeatures = [
    { title: "Self-Healing Technology", desc: "Advanced elastomeric polymers that eliminate surface swirls and fine scratches with heat.", icon: Shield },
    { title: "Hydrophobic Surface", desc: "Ultra-low surface energy creates a high-contact angle, repelling water and contaminants.", icon: Droplets },
    { title: "UV Protection", desc: "Integrated UV inhibitors prevent paint oxidation and film yellowing over long-term exposure.", icon: Sun },
    { title: "Diamond Clear", desc: "Unmatched optical clarity that enhances factory paint depth without any orange peel texture.", icon: Sparkles },
  ]

  const solutions = [
    {
      title: "Paint Protection Film",
      price: "Premium PPF",
      desc: "Absolute defense against stone chips, debris, and environmental fallout.",
      features: ["8.5 mil thickness", "Self-healing top coat", "10-Year digital warranty", "Precision-cut fitment"],
      icon: Shield,
      accent: "border-primary"
    },
    {
      title: "Ceramic Protection",
      price: "9H Matrix",
      desc: "Permanent molecular bonding for extreme gloss and chemical resistance.",
      features: ["9H Hardness certified", "Super-hydrophobic effect", "5-Year durability", "Interior & Exterior sets"],
      icon: Droplets,
      accent: "border-az-success"
    },
    {
      title: "Window Films",
      price: "Solar Shield",
      desc: "Advanced ceramic tinting for maximum heat rejection and cabin privacy.",
      features: ["99% UV Rejection", "Up to 80% IR Rejection", "Signal-friendly ceramic", "Shatter-proof safety"],
      icon: Sun,
      accent: "border-az-warning"
    }
  ]

  const steps = [
    { id: "01", title: "Consultation", desc: "Surface inspection and custom protection mapping." },
    { id: "02", title: "Preparation", desc: "Decontamination and paint correction to factory-plus standards." },
    { id: "03", title: "Installation", desc: "Dust-free application by AZTEK certified technicians." },
    { id: "04", title: "Quality Check", desc: "Forensic audit and digital warranty activation." },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0 z-0">
            <Image 
              src={carP} 
              alt="Automotive Protection" 
              fill 
              className="object-cover opacity-100 group-hover:grayscale-0 transition-all duration-1000"
              data-ai-hint="luxury car"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center space-y-10 animate-reveal-up">
            <Badge variant="outline" className="px-6 py-2 border-primary/30 text-primary bg-primary/5 uppercase tracking-[0.4em] font-bold text-[10px] rounded-full">
              National Protection Standard
            </Badge>
            <h1 className="text-6xl md:text-[8rem] font-headline font-extralight uppercase tracking-tight leading-none text-gradient">
              Automotive <br /><span className="text-primary italic">Protection</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Premium paint protection film and ceramic coatings for luxury vehicles. High-performance solutions that enhance and preserve your vehicle's look and value.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <Button asChild size="lg" className="btn-electric h-16 px-14 text-[11px] rounded-full text-white">
                 <Link href="/locator">Find Certified Hub <ArrowRight className="ml-2 w-4 h-4" /></Link>
               </Button>
               <Button size="lg" variant="outline" className="h-16 px-14 text-[11px] font-bold uppercase tracking-widest border-white/10 hover:bg-white/5 rounded-full">
                 Technical Specs
               </Button>
            </div>
          </div>
        </section>

        {/* Advanced Technology Section */}
        <section className="py-32 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-8 space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">Advanced Protection Technology</h2>
              <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.3em]">Built for the most demanding environmental conditions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techFeatures.map((f) => (
                <div key={f.title} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-3">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tight">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Protection Solutions Grid */}
        <section className="py-40 bg-primary/5">
           <div className="max-w-7xl mx-auto px-8 space-y-20">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-headline font-bold uppercase tracking-tight text-foreground">Protection Solutions</h2>
                <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.3em]">Configure the perfect shield for your daily drive</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 {solutions.map((s) => (
                   <Card key={s.title} className={cn("bg-card border shadow-2xl relative overflow-hidden group", s.accent)}>
                     <CardHeader className="p-10 space-y-6">
                        <div className="flex items-center justify-between">
                           <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                              <s.icon className="w-6 h-6" />
                           </div>
                           <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest border-white/10 px-3">{s.price}</Badge>
                        </div>
                        <div>
                           <CardTitle className="text-2xl uppercase tracking-widest">{s.title}</CardTitle>
                           <CardDescription className="text-xs text-muted-foreground font-medium uppercase mt-2">{s.desc}</CardDescription>
                        </div>
                     </CardHeader>
                     <CardContent className="px-10 pb-10 space-y-8">
                        <ul className="space-y-4 pt-6 border-t border-white/5">
                           {s.features.map(f => (
                             <li key={f} className="flex items-center gap-3 text-xs font-bold uppercase text-foreground/80">
                                <Check className="w-4 h-4 text-primary" /> {f}
                             </li>
                           ))}
                        </ul>
                        <Button className="w-full h-14 rounded-2xl btn-electric text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
                           Generate Quote
                        </Button>
                     </CardContent>
                   </Card>
                 ))}
              </div>
           </div>
        </section>

        {/* Why Choose AZTEK Section */}
        <section className="py-40 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="aspect-[4/3] relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                 <Image 
                   src= {whyChoose} 
                   alt="Technical detailing" 
                   fill 
                   className="object-cover grayscale"
                   data-ai-hint="car headlight"
                 />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
              <div className="space-y-12">
                 <div className="space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/20 text-[10px] font-bold uppercase tracking-widest px-4 py-1">Benchmark Quality</Badge>
                    <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">Why Choose <br /><span className="text-primary italic">AZTEK PPF?</span></h2>
                 </div>
                 <div className="space-y-6">
                    {[
                      "99.4% Fitment accuracy via precision digital patterns.",
                      "Self-healing elastomeric top coat removes surface damage.",
                      "High-tack residue-free adhesive for permanent bonding.",
                      "10-Year non-yellowing and bond integrity guarantee.",
                      "Verified installer network with tiered certifications.",
                      "Digital warranty tracking via eWarrantyFy registry."
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                         <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-primary" />
                         </div>
                         <p className="text-sm text-muted-foreground font-medium uppercase tracking-tight leading-relaxed">{item}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Installation Process */}
        <section className="py-40">
           <div className="max-w-7xl mx-auto px-8 space-y-24">
              <div className="text-center space-y-4">
                 <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">Installation Process</h2>
                 <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.3em]">The professional path to absolute protection</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl">
                 {steps.map((step) => (
                   <div key={step.id} className="p-12 bg-card hover:bg-white/[0.02] transition-all group">
                      <span className="text-5xl font-headline font-bold text-primary/40 group-hover:text-primary transition-colors block mb-8">{step.id}</span>
                      <h4 className="text-lg font-headline font-bold uppercase mb-4">{step.title}</h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed uppercase tracking-tight">{step.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="py-40 bg-card/20 border-y border-white/5">
          <div className="max-w-3xl mx-auto px-8 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold uppercase tracking-tight">Frequently Asked Questions</h2>
              <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Technical transparency for peace of mind</p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "How long does a full PPF installation take?", a: "A professional full-body installation typically requires 4-6 operational days, including surface decontamination, paint correction, precision application, and a 24-hour final setting audit." },
                { q: "Is the digital warranty transferable?", a: "Yes. All AZTEK warranties are linked to the VIN (Vehicle Identification Number) and remain valid upon asset sale, enhancing the residual value of your machine." },
                { q: "Can I apply ceramic coating over PPF?", a: "Absolutely. We recommend our specialized PPF ceramic matrix to enhance hydrophobicity and stain resistance without affecting the self-healing properties of the film." },
                { q: "How do I maintain the protection?", a: "Simple maintenance using pH-neutral chemicals and clean microfibers is all that's required. We provide a complete maintenance protocol via the eWarrantyFy portal upon handover." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border bg-white/5 rounded-2xl px-8 border-none overflow-hidden">
                  <AccordionTrigger className="text-xs font-bold uppercase tracking-[0.2em] text-left hover:text-primary transition-all py-8 no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-8 font-medium uppercase tracking-tight">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-40">
           <div className="max-w-4xl mx-auto px-8 space-y-16">
              <div className="text-center space-y-4">
                 <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight">Get Your Protection Quote</h2>
                 <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Connect with our technical team to initialize your project</p>
              </div>

              <Card className="bg-white/5 border-white/10 p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
                 <form className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Full Name</label>
                          <Input placeholder="John Doe" className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Email Address</label>
                          <Input type="email" placeholder="name@domain.com" className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Phone Number</label>
                          <Input type="tel" placeholder="+91 ..." className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Vehicle Model</label>
                          <Input placeholder="e.g., Porsche 911 GT3" className="bg-background/50 border-white/10 h-14 text-sm rounded-2xl focus:ring-primary/50" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Project Requirements</label>
                       <Textarea placeholder="Describe the protection layers you are interested in..." className="bg-background/50 border-white/10 min-h-[120px] rounded-2xl text-sm p-6" />
                    </div>
                    <Button className="w-full h-16 btn-electric rounded-2xl text-[10px] uppercase font-bold tracking-[0.3em]">
                       Transmit Request <ArrowRight className="ml-2 w-4 h-4" />
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
              <p className="text-[10px] text-muted-foreground max-w-xs font-medium leading-relaxed">Advanced molecular surface armor designed to preserve OEM finish integrity for the full service life of the vehicle.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Solutions</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="#" className="hover:text-foreground">Automotive</Link>
                     <Link href="#" className="hover:text-foreground">Motorcycle</Link>
                     <Link href="#" className="hover:text-foreground">Architectural</Link>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Company</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="#" className="hover:text-foreground">About</Link>
                     <Link href="#" className="hover:text-foreground">Careers</Link>
                     <Link href="#" className="hover:text-foreground">Partners</Link>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Legal</p>
                  <div className="flex flex-col gap-2 text-[10px] uppercase font-bold text-muted-foreground">
                     <Link href="#" className="hover:text-foreground">Privacy</Link>
                     <Link href="#" className="hover:text-foreground">Terms</Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    </div>
  )
}