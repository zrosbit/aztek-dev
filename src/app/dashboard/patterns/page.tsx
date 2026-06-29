"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Scissors, Filter, Bike, CheckCircle2 } from "lucide-react"

export default function PatternsLibraryPage() {
  const categories = ["Sportbike", "Cruiser", "Off-Road", "Touring", "Adventure", "Naked"]
  
  const models = [
    { brand: "Ducati", model: "Panigale V4", year: "2024", pieces: 14, category: "Sportbike" },
    { brand: "BMW", model: "R 1300 GS", year: "2024", pieces: 22, category: "Adventure" },
    { brand: "Yamaha", model: "MT-09", year: "2023", pieces: 12, category: "Naked" },
    { brand: "Honda", model: "Africa Twin", year: "2024", pieces: 18, category: "Off-Road" },
    { brand: "Kawasaki", model: "Ninja H2R", year: "2024", pieces: 16, category: "Sportbike" },
    { brand: "Harley-Davidson", model: "Pan America", year: "2023", pieces: 24, category: "Adventure" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-headline font-bold tracking-tight">Moto Precision-Cut</h1>
        <p className="text-muted-foreground">99.4% Fit accuracy database for global motorcycle OEM specifications.</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search bike brand or model..." className="pl-10 bg-card border-white/5" />
        </div>
        <Button variant="outline" className="border-white/5 bg-card">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <Badge key={cat} variant="outline" className="px-4 py-1 border-white/5 hover:bg-primary/10 hover:border-primary/20 cursor-pointer whitespace-nowrap">
            {cat}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((m, i) => (
          <Card key={i} className="bg-card border-white/5 hover:border-primary/20 transition-all group overflow-hidden">
            <div className="aspect-video bg-white/5 relative flex items-center justify-center border-b border-white/5">
              <Bike className="w-16 h-16 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500/20 text-green-500 border-green-500/30 text-[10px]">VERIFIED FIT</Badge>
              </div>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase text-primary tracking-widest">{m.brand}</span>
                <span className="text-xs text-muted-foreground">{m.year}</span>
              </div>
              <CardTitle className="text-xl">{m.model}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Scissors className="w-4 h-4" />
                  <span>{m.pieces} precision pieces</span>
                </div>
                <Badge variant="secondary" className="text-[10px] bg-white/5">
                  {m.category}
                </Badge>
              </div>
              <Button className="w-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all">
                Download Kit Pattern
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
