"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Download, 
  Image as ImageIcon, 
  FileText, 
  Share2, 
  Megaphone,
  Layout,
  Search
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function MarketingModulePage() {
  const assets = [
    { title: "Brand Logo Pack", desc: "SVG/PNG formats (Black, White, Blue)", type: "Vector", category: "Branding" },
    { title: "Insta-Pack Jun 26", desc: "Monthly social media template pack", type: "Canva", category: "Social" },
    { title: "Product Brochure V4", desc: "Co-branded PDF for end-customers", type: "PDF", category: "Print" },
    { title: "9H Armor Campaign", desc: "High-res images and copy hooks", type: "Archive", category: "Campaign" },
    { title: "Technical Data Sheets", desc: "Updated performance specs for 2026", type: "PDF", category: "Resources" },
    { title: "Testimonial Templates", desc: "Formatted customer review assets", type: "Docs", category: "Marketing" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Marketing <span className="text-az-blue italic">Hub</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Co-Branded Assets & Strategic Campaign Materials</p>
         </div>
         <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2">
           <Layout className="w-4 h-4" /> Branding Guidelines
         </Button>
      </div>

      <Card className="bg-az-blue/5 border-az-blue/20 p-8 rounded-3xl overflow-hidden relative group">
         <div className="relative z-10 space-y-4">
            <Badge className="bg-az-blue text-white text-[8px] uppercase font-bold tracking-[0.3em] px-3 py-1">New Campaign Available</Badge>
            <h2 className="text-3xl font-headline font-bold uppercase tracking-tighter max-w-lg">Monsoon Protection 2026 — Ready For Deployment</h2>
            <p className="text-sm text-muted-foreground font-medium max-w-md">Download the full-suite of hydrophobic ceramic armor assets for your monsoon marketing push.</p>
            <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl">
               Download Campaign Suite <Download className="w-4 h-4" />
            </Button>
         </div>
         <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_70%)]" />
         <Megaphone className="absolute -bottom-10 -right-10 w-48 h-48 text-az-blue opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
      </Card>

      <div className="flex gap-4">
        <div className="relative flex-1">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input placeholder="Search assets, templates or documents..." className="pl-10 h-12 bg-white/5 border-white/5 rounded-2xl" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((asset) => (
          <Card key={asset.title} className="bg-white/5 border-white/10 hover:border-az-blue/30 transition-all cursor-pointer group shadow-2xl">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-az-blue group-hover:text-white transition-all duration-500 shadow-inner">
                   {asset.category === "Social" ? <Share2 className="w-5 h-5" /> : asset.category === "Print" ? <FileText className="w-5 h-5" /> : <ImageIcon className="w-5 h-5" />}
                </div>
                <Badge variant="outline" className="text-[8px] uppercase font-bold tracking-widest border-white/10">{asset.type}</Badge>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-az-blue transition-colors">{asset.title}</h4>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">{asset.desc}</p>
              </div>
              <Button variant="outline" className="w-full h-10 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/5 gap-2">
                 Download <Download className="w-3.5 h-3.5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
