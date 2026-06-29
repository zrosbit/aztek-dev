
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Eye, 
  Layers, 
  Droplets, 
  Sun, 
  Maximize2, 
  RotateCcw,
  ShieldCheck,
  Zap
} from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function FilmPreviewerPage() {
  const [activeFilm, setActiveFilm] = useState("gloss")
  const [opacity, setOpacity] = useState([85])
  const [glossLevel, setGlossLevel] = useState([70])
  
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-bg") || PlaceHolderImages[0]

  const films = [
    { id: "gloss", name: "Aztek Clear Gloss", description: "Ultra-high clarity PPF with self-healing properties.", color: "bg-blue-400" },
    { id: "stealth", name: "Aztek Stealth Matte", description: "Transforms gloss paint into a smooth satin finish.", color: "bg-slate-400" },
    { id: "ceramic", name: "Ceramic Coated", description: "Extreme hydrophobicity and chemical resistance.", color: "bg-purple-400" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-headline font-bold tracking-tight">Live Film Previewer</h1>
        <p className="text-muted-foreground">Interactive visualization of protection layers and finish transformations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card border-white/5 overflow-hidden relative group">
            <div className="aspect-video relative bg-black">
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description}
                fill
                className="object-cover transition-all duration-700"
                style={{ 
                  filter: activeFilm === "stealth" ? "contrast(1.1) brightness(0.9) saturate(0.8)" : "none",
                  opacity: activeFilm === "gloss" ? 1 : 0.9
                }}
                data-ai-hint="luxury car"
              />
              
              {/* Overlay simulation */}
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-500"
                style={{ 
                  background: activeFilm === "ceramic" 
                    ? `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, ${opacity[0] / 400}), transparent)` 
                    : "transparent",
                  boxShadow: activeFilm === "gloss" 
                    ? `inset 0 0 ${glossLevel[0]}px rgba(255,255,255,0.1)` 
                    : "none"
                }} 
              />

              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-black/60 backdrop-blur-md border-white/10 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${films.find(f => f.id === activeFilm)?.color}`} />
                  {films.find(f => f.id === activeFilm)?.name}
                </Badge>
              </div>

              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button size="icon" variant="secondary" className="bg-black/40 backdrop-blur-md border-white/10 hover:bg-black/60">
                  <Maximize2 className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="secondary" className="bg-black/40 backdrop-blur-md border-white/10 hover:bg-black/60" onClick={() => {
                  setOpacity([85]);
                  setGlossLevel([70]);
                }}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-card border-white/5">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">UV Rejection</p>
                  <p className="text-lg font-bold">99.9%</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-white/5">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">Thickness</p>
                  <p className="text-lg font-bold">8.5 mil</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-white/5">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">Warranty</p>
                  <p className="text-lg font-bold">12 Years</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-card border-white/5 h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Configurator</CardTitle>
            <CardDescription>Adjust layer properties and film specs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Select Product</label>
              <div className="grid grid-cols-1 gap-2">
                {films.map((film) => (
                  <button
                    key={film.id}
                    onClick={() => setActiveFilm(film.id)}
                    className={cn(
                      "flex flex-col p-4 rounded-xl border text-left transition-all",
                      activeFilm === film.id 
                        ? "bg-primary/10 border-primary ring-1 ring-primary/20" 
                        : "bg-white/5 border-white/5 hover:border-white/10"
                    )}
                  >
                    <span className="font-bold text-sm">{film.name}</span>
                    <span className="text-xs text-muted-foreground mt-1 leading-tight">{film.description}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Gloss Index</label>
                  <span className="text-xs font-mono text-primary">{glossLevel[0]}%</span>
                </div>
                <Slider 
                  value={glossLevel} 
                  onValueChange={setGlossLevel} 
                  max={100} 
                  step={1}
                  className="py-2"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Layer Opacity</label>
                  <span className="text-xs font-mono text-primary">{opacity[0]}%</span>
                </div>
                <Slider 
                  value={opacity} 
                  onValueChange={setOpacity} 
                  max={100} 
                  step={1}
                  className="py-2"
                />
              </div>
            </div>

            <Button className="w-full h-12 text-xs uppercase font-bold tracking-widest">
              Generate Quote for Selection
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
