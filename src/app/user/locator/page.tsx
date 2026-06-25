
"use client"

import { useState, useEffect } from "react"
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
  CheckCircle2,
  ChevronRight,
  LayoutList,
  Map as MapIcon,
  Star,
  Medal,
  Award
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MapTerminal } from "@/components/maps/map-terminal"

// Mock Partner Data
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

export default function LocatorPage() {
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
    <div className="h-[calc(100vh-10rem)] flex flex-col gap-6">
      {/* Search & Filter Header */}
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">Find Certified <span className="text-primary italic">Installer</span></h1>
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Authorized AZTEK Protection Network</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Search by City, Studio Name or Pincode..." 
              className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl focus:ring-primary/40 text-sm font-medium"
              value={searchQuery}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="h-14 px-6 rounded-2xl border-white/10 gap-2 text-[10px] uppercase font-bold tracking-widest hover:bg-white/5"
              onClick={handleUseMyLocation}
              disabled={isLocating}
            >
              {isLocating ? <Navigation className="w-4 h-4 animate-pulse" /> : <Navigation className="w-4 h-4" />}
              Use My Location
            </Button>
            <div className="hidden lg:flex p-1 bg-white/5 border border-white/10 rounded-2xl">
              <button 
                onClick={() => setView("list")}
                className={cn("px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all flex items-center gap-2", view === "list" ? "bg-primary text-white shadow-lg" : "text-muted-foreground")}
              >
                <LayoutList className="w-3.5 h-3.5" /> List
              </button>
              <button 
                onClick={() => setView("map")}
                className={cn("px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all flex items-center gap-2", view === "map" ? "bg-primary text-white shadow-lg" : "text-muted-foreground")}
              >
                <MapIcon className="w-3.5 h-3.5" /> Map
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mr-2">
            <Filter className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Discipline</span>
          </div>
          {["Automotive", "Motorcycle", "Architectural"].map((f) => (
            <button
              key={f}
              onClick={() => toggleFilter(f)}
              className={cn(
                "px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all whitespace-nowrap",
                activeFilters.includes(f) 
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-white/5 border-white/5 text-muted-foreground hover:border-white/20"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Main Finder Area */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0 overflow-hidden">
        {/* Results List */}
        <div className={cn(
          "flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin",
          view === "map" && "hidden lg:block"
        )}>
          {filteredPartners.length > 0 ? (
            filteredPartners.map((p) => (
              <Card key={p.id} className="bg-white/5 border-white/10 hover:border-primary/40 transition-all cursor-pointer group shadow-xl">
                <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-all duration-500">
                    {p.tier === "Master Installer" ? <Award className="w-7 h-7 text-purple-500" /> : 
                     p.tier === "Gold Partner" ? <Medal className="w-7 h-7 text-amber-500" /> : 
                     <Star className="w-7 h-7 text-primary" />}
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <h4 className="font-bold text-lg uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">{p.name}</h4>
                          <Badge variant="outline" className={cn(
                            "text-[8px] uppercase font-bold tracking-widest px-2 py-0.5 border-white/10",
                            p.tier === "Master Installer" ? "text-purple-500 bg-purple-500/5" :
                            p.tier === "Gold Partner" ? "text-amber-500 bg-amber-500/5" :
                            "text-primary bg-primary/5"
                          )}>{p.tier}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1.5 uppercase font-medium">
                          <MapPin className="w-3 h-3" /> {p.address} • <span className="text-primary font-bold">{p.distance} away</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        {p.products.includes("Automotive") && <Car className="w-3.5 h-3.5 text-muted-foreground" title="Automotive" />}
                        {p.products.includes("Motorcycle") && <Bike className="w-3.5 h-3.5 text-muted-foreground" title="Motorcycle" />}
                        {p.products.includes("Architectural") && <Building2 className="w-3.5 h-3.5 text-muted-foreground" title="Architectural" />}
                      </div>
                      <div className="h-3 w-px bg-white/10" />
                      <a href={`tel:${p.phone}`} className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest flex items-center gap-2">
                        <Phone className="w-3 h-3" /> {p.phone}
                      </a>
                    </div>
                  </div>

                  <Button asChild variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-lg group/btn shrink-0 w-full md:w-auto">
                    <Link href="/contact">
                      Get A Quote <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-white/5 rounded-3xl bg-white/[0.02] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-muted-foreground opacity-20" />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline font-bold text-xl uppercase">No Installers Found</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                  We currently don't have certified partners in your immediate region. Contact our national hub for support.
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-full px-8 h-12 text-[10px] font-bold uppercase tracking-widest">
                <Link href="/contact">Contact National Hub</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Real Open Source Map Terminal */}
        <div className={cn(
          "flex-1 bg-white/5 border border-white/10 rounded-[40px] relative overflow-hidden shadow-2xl group",
          view === "list" && "hidden lg:block"
        )}>
          <MapTerminal points={mapPoints} />

          {/* Map Controls Overlay */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none">
            <div className="p-4 rounded-2xl glass border-white/10 space-y-3 pointer-events-auto relative z-[1000]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#0066FF]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-foreground">Active Hubs Verified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#F59E0B]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-foreground">High-Demand Region</span>
              </div>
            </div>
          </div>

          <div className="absolute top-8 right-8 pointer-events-auto z-[1000]">
            <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 font-bold">Satellite Terminal Active</Badge>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Bar */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-[1001] flex">
        <button 
          onClick={() => setView("list")}
          className={cn("px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2", view === "list" ? "bg-primary text-white shadow-lg" : "text-muted-foreground")}
        >
          <LayoutList className="w-4 h-4" /> List
        </button>
        <button 
          onClick={() => setView("map")}
          className={cn("px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2", view === "map" ? "bg-primary text-white shadow-lg" : "text-muted-foreground")}
        >
          <MapIcon className="w-4 h-4" /> Map
        </button>
      </div>
    </div>
  )
}
