
"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  MapPin, 
  Search, 
  Car, 
  Bike, 
  Building2, 
  Navigation, 
  Phone, 
  ArrowRight, 
  Filter,
  LayoutList,
  Map as MapIcon,
  Star,
  Medal,
  Award,
  Shield,
  ChevronRight
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/layout/site-header"
import { MapTerminal } from "@/components/maps/map-terminal"

// Public Partner Registry (Active & Certified Only)
const PARTNERS = [
  {
    id: "p1",
    name: "Elite Wraps Bangalore",
    tier: "Master Installer",
    address: "Indiranagar, Bangalore, KA 560038",
    city: "Bengaluru",
    phone: "+91 80 4444 8888",
    products: ["Automotive", "Motorcycle"],
    lat: 12.9716,
    lng: 77.5946,
    distance: "2.4 km",
    rating: 4.9
  },
  {
    id: "p2",
    name: "Moto Shield Pune",
    tier: "Gold Partner",
    address: "Koregaon Park, Pune, MH 411001",
    city: "Pune",
    phone: "+91 20 5555 7777",
    products: ["Motorcycle"],
    lat: 18.5204,
    lng: 73.8567,
    distance: "12.8 km",
    rating: 4.7
  },
  {
    id: "p3",
    name: "Skyline Architectural Lab",
    tier: "Certified Installer",
    address: "HSR Layout, Bengaluru, KA 560102",
    city: "Bengaluru",
    phone: "+91 80 2222 3333",
    products: ["Architectural"],
    lat: 12.9141,
    lng: 77.6411,
    distance: "5.1 km",
    rating: 4.5
  },
  {
    id: "p4",
    name: "Mumbai Detailing Hub",
    tier: "Gold Partner",
    address: "Andheri West, Mumbai, MH 400053",
    city: "Mumbai",
    phone: "+91 22 9999 1111",
    products: ["Automotive", "Ceramic"],
    lat: 19.1136,
    lng: 72.8697,
    distance: "18.5 km",
    rating: 4.8
  }
]

export default function PublicLocatorPage() {
  const [view, setView] = useState<"list" | "map">("list")
  const [searchQuery, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [isLocating, setIsLocating] = useState(false)

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    )
  }

  const filteredPartners = PARTNERS.filter(p => {
    const matchesSearch = p.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilters.length === 0 || 
                          activeFilters.some(f => p.products.includes(f))
    return matchesSearch && matchesFilter
  })

  const mapPoints = filteredPartners.map(p => ({
    lat: p.lat,
    lng: p.lng,
    title: p.name,
    subtitle: p.tier
  }))

  const handleUseMyLocation = () => {
    setIsLocating(true)
    setTimeout(() => {
      setIsLocating(false)
      setSearchTerm("Bengaluru")
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <main className="flex-1 flex flex-col">
        {/* Finder Header */}
        <section className="bg-primary/5 border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
            <div className="flex flex-col gap-2">
              <Badge variant="outline" className="w-fit px-4 py-1 border-primary/20 text-primary uppercase tracking-[0.3em] font-bold text-[10px]">
                Installer Network
              </Badge>
              <h1 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter">Find Your Certified <span className="text-primary italic">Installer</span></h1>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold max-w-2xl">
                Locate authorized AZTEK labs providing factory-finish protection for automotive, motorcycle, and architectural surfaces.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Enter City or Pincode..." 
                  className="pl-12 h-14 bg-background border-border rounded-2xl focus:ring-primary/40 text-sm font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="h-14 px-8 rounded-2xl border-border gap-2 text-[10px] uppercase font-bold tracking-widest hover:bg-white/5"
                  onClick={handleUseMyLocation}
                  disabled={isLocating}
                >
                  {isLocating ? <Navigation className="w-4 h-4 animate-pulse text-primary" /> : <Navigation className="w-4 h-4 text-primary" />}
                  Use My Location
                </Button>
                <div className="hidden lg:flex p-1 bg-white/5 border border-border rounded-2xl">
                  <button 
                    onClick={() => setView("list")}
                    className={cn("px-6 py-2 rounded-xl text-[10px] font-bold uppercase transition-all flex items-center gap-2", view === "list" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-foreground")}
                  >
                    <LayoutList className="w-4 h-4" /> List
                  </button>
                  <button 
                    onClick={() => setView("map")}
                    className={cn("px-6 py-2 rounded-xl text-[10px] font-bold uppercase transition-all flex items-center gap-2", view === "map" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-foreground")}
                  >
                    <MapIcon className="w-4 h-4" /> Map
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {["Automotive", "Motorcycle", "Architectural"].map((f) => (
                <button
                  key={f}
                  onClick={() => toggleFilter(f)}
                  className={cn(
                    "px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all whitespace-nowrap",
                    activeFilters.includes(f) 
                      ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                      : "bg-white/5 border-border text-muted-foreground hover:border-white/20"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Finder Content Area */}
        <section className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
          <div className="h-[calc(100vh-25rem)] flex flex-col lg:flex-row gap-12">
            {/* Results Column */}
            <div className={cn(
              "flex-1 overflow-y-auto pr-4 space-y-6 scrollbar-thin",
              view === "map" && "hidden lg:block"
            )}>
              {filteredPartners.length > 0 ? (
                filteredPartners.map((p) => (
                  <Card key={p.id} className="glass border-border hover:border-primary/40 transition-all cursor-pointer group shadow-xl">
                    <CardContent className="p-8 flex flex-col md:flex-row items-start md:items-center gap-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-all duration-500">
                        {p.tier === "Master Installer" ? <Award className="w-8 h-8 text-purple-500" /> : 
                         p.tier === "Gold Partner" ? <Medal className="w-8 h-8 text-amber-500" /> : 
                         <Star className="w-8 h-8 text-primary" />}
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <h4 className="font-bold text-xl uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">{p.name}</h4>
                            <Badge variant="outline" className={cn(
                              "text-[8px] uppercase font-bold tracking-widest px-2 py-0.5 border-border",
                              p.tier === "Master Installer" ? "text-purple-500 bg-purple-500/5" :
                              p.tier === "Gold Partner" ? "text-amber-500 bg-amber-500/5" :
                              "text-primary bg-primary/5"
                            )}>{p.tier}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground flex items-center gap-1.5 uppercase font-medium">
                            <MapPin className="w-4 h-4 text-primary" /> {p.address} • <span className="text-primary font-bold">{p.distance} away</span>
                          </p>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-3">
                            {p.products.includes("Automotive") && <Car className="w-4 h-4 text-muted-foreground" title="Automotive" />}
                            {p.products.includes("Motorcycle") && <Bike className="w-4 h-4 text-muted-foreground" title="Motorcycle" />}
                            {p.products.includes("Architectural") && <Building2 className="w-4 h-4 text-muted-foreground" title="Architectural" />}
                          </div>
                          <div className="h-4 w-px bg-border" />
                          <a href={`tel:${p.phone}`} className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5" /> {p.phone}
                          </a>
                        </div>
                      </div>

                      <Button asChild className="h-14 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] gap-2 shadow-xl group/btn shrink-0 w-full md:w-auto btn-electric text-white">
                        <Link href="/contact">
                          Get A Quote <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-20 text-center border-2 border-dashed border-border rounded-[40px] bg-white/[0.01] space-y-8">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-muted-foreground opacity-20" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-headline font-bold text-2xl uppercase">No Installers In Selection</h3>
                    <p className="text-sm text-muted-foreground max-sm mx-auto leading-relaxed">
                      We currently don't have certified partners matching these exact criteria in your immediate region.
                    </p>
                  </div>
                  <Button asChild variant="outline" className="rounded-full px-12 h-14 text-[10px] font-bold uppercase tracking-widest border-border">
                    <Link href="/contact">Contact National Support Hub</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Interactive Open Source Map */}
            <div className={cn(
              "flex-1 bg-card border border-border rounded-[40px] relative overflow-hidden shadow-2xl group min-h-[400px]",
              view === "list" && "hidden lg:block"
            )}>
              <MapTerminal points={mapPoints} zoom={searchQuery ? 12 : 5} />

              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end pointer-events-none">
                <div className="p-6 rounded-3xl glass border-border space-y-4 pointer-events-auto shadow-2xl relative z-[1000]">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#0066FF]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">Verified AZTEK Labs</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_15px_#F59E0B]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">Premium Supply Node</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-10 left-10 pointer-events-auto z-[1000]">
                <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-[9px] uppercase tracking-[0.2em] px-6 py-2 font-bold shadow-2xl">Satellite Link Active</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
