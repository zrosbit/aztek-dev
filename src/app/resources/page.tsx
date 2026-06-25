import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileText, PlayCircle, Download, ShieldAlert } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ResourcesPage() {
  const technicalDocs = [
    { title: "PPF Technical Data Sheet (TDS)", type: "PDF · 2.4MB", category: "Spec Sheets" },
    { title: "Ceramic Coating Application Matrix", type: "PDF · 1.8MB", category: "Installation" },
    { title: "Solar Performance Benchmarks", type: "XLSX · 1.2MB", category: "Architectural" },
    { title: "Digital Warranty Transfer Protocol", type: "PDF · 800KB", category: "Legal" },
    { title: "Batch Mix Ratio Chart", type: "PDF · 1.1MB", category: "Installation" },
    { title: "Surface Tension Lab Report", type: "PDF · 4.2MB", category: "Engineering" },
  ]

  const trainingVideos = [
    { title: "Edge Wrapping Excellence", duration: "14:20", level: "Intermediate" },
    { title: "Heat Gun Thermal Activation", duration: "08:45", level: "Beginner" },
    { title: "Complex Curve Management", duration: "22:10", level: "Advanced" },
    { title: "eWarrantyFy Walkthrough", duration: "12:30", level: "Mandatory" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-32 bg-primary/5">
           <div className="max-w-7xl mx-auto px-8 space-y-12">
              <div className="max-w-3xl space-y-8">
                 <Badge variant="outline" className="border-primary/20 text-primary text-[10px] uppercase tracking-[0.4em] px-6 py-2 rounded-full">Technical Core</Badge>
                 <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none text-gradient">Knowledge <br /><span className="text-primary italic">Repository.</span></h1>
                 <p className="text-xl text-muted-foreground font-medium leading-relaxed">The unified digital hub for technical specifications, installation protocols, and industry insights.</p>
              </div>
              <div className="relative max-w-xl">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                 <Input placeholder="Search specifications, guides, or video modules..." className="h-16 pl-12 bg-background border-white/10 rounded-full text-lg focus:ring-primary/40 shadow-2xl" />
              </div>
           </div>
        </section>

        <section className="py-40">
           <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Technical Docs */}
              <div className="lg:col-span-2 space-y-12">
                 <div className="flex items-center justify-between border-b border-white/5 pb-8">
                    <h3 className="text-2xl font-headline font-bold uppercase">Technical Documentation</h3>
                    <Badge variant="outline" className="border-border text-[9px] uppercase font-bold tracking-widest px-4">Public Access</Badge>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {technicalDocs.map((doc) => (
                      <Card key={doc.title} className="glass border-border hover:border-primary/30 transition-all cursor-pointer group">
                         <CardContent className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                               <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white transition-all">
                                  <FileText className="w-5 h-5" />
                               </div>
                               <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{doc.category}</span>
                            </div>
                            <div className="space-y-1">
                               <h4 className="font-bold text-sm uppercase tracking-widest group-hover:text-primary transition-colors">{doc.title}</h4>
                               <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{doc.type}</p>
                            </div>
                            <Button variant="ghost" className="w-full border-t border-white/5 pt-6 justify-between h-auto p-0 text-[10px] font-bold uppercase tracking-widest group-hover:text-primary transition-all">
                               Download Resource <Download className="w-4 h-4" />
                            </Button>
                         </CardContent>
                      </Card>
                    ))}
                 </div>
              </div>

              {/* Training Sidebar */}
              <div className="space-y-12">
                 <div className="p-8 rounded-[32px] bg-primary/5 border border-primary/20 space-y-8">
                    <div className="flex items-center gap-3">
                       <PlayCircle className="w-6 h-6 text-primary" />
                       <h3 className="text-xl font-headline font-bold uppercase tracking-tight">Academy Sneak-Peek</h3>
                    </div>
                    <div className="space-y-4">
                       {trainingVideos.map((v) => (
                         <div key={v.title} className="p-4 bg-background rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">{v.title}</h4>
                            <div className="flex items-center justify-between text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                               <span>{v.duration} MIN</span>
                               <Badge variant="outline" className="text-[8px] border-border">{v.level}</Badge>
                            </div>
                         </div>
                       ))}
                    </div>
                    <Button asChild className="w-full btn-electric h-14 rounded-full text-[10px] uppercase font-bold tracking-widest">
                       <Link href="/partners">Access Full Academy Hub</Link>
                    </Button>
                 </div>
                 
                 <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-6">
                    <div className="flex items-center gap-3 text-amber-500">
                       <ShieldAlert className="w-6 h-6" />
                       <h3 className="text-xl font-headline font-bold uppercase tracking-tight">Support Notice</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                       Access to specific engineering files and co-branded marketing assets requires a verified **AZTEK Connect** partner account.
                    </p>
                    <Button variant="outline" className="w-full h-12 rounded-full text-[10px] uppercase font-bold">Partner Login</Button>
                 </Card>
              </div>
           </div>
        </section>
      </main>
    </div>
  )
}
