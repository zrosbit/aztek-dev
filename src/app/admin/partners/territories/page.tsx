"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Plus, Compass } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { MapTerminal } from "@/components/maps/map-terminal"

export default function TerritoryManagementPage() {
  const areas = [
    {
      name: "Bengaluru Central",
      hub: "BLR HQ",
      partners: 14,
      leadFlow: "High",
      density: 85,
      lat: 12.9716,
      lng: 77.5946,
    },
    {
      name: "Mumbai West",
      hub: "MUM Hub",
      partners: 8,
      leadFlow: "Medium",
      density: 62,
      lat: 19.1136,
      lng: 72.8697,
    },
    {
      name: "Delhi NCR",
      hub: "DEL Hub",
      partners: 12,
      leadFlow: "Critical",
      density: 92,
      lat: 28.6139,
      lng: 77.209,
    },
    {
      name: "Pune Cluster",
      hub: "MUM Hub",
      partners: 5,
      leadFlow: "Low",
      density: 34,
      lat: 18.5204,
      lng: 73.8567,
    },
  ]

  const mapPoints = areas.map((area) => ({
    lat: area.lat,
    lng: area.lng,
    title: area.name,
    subtitle: `${area.partners} Partners Linked`,
  }))

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

          <Input
            placeholder="Search territory or region mapping..."
            className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl"
          />
        </div>

        <Button
          variant="gradient"
          className="h-14 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl"
        >
          <Plus className="w-4 h-4" />
          Define Territory
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white/5 border-white/10 rounded-[40px] relative overflow-hidden shadow-2xl group min-h-[500px]">
          <MapTerminal points={mapPoints} />

          <div className="absolute top-10 left-10 space-y-2 z-[1000]">
            <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 font-bold shadow-2xl">
              Geo-Spatial Link Active
            </Badge>

            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest ml-1">
              428 Active Service Nodes Tracked
            </p>
          </div>

          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end pointer-events-none">
            <div className="p-6 rounded-3xl glass border-white/10 space-y-4 pointer-events-auto shadow-2xl max-w-sm relative z-[1000]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#0066FF]" />

                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                  High Density Cluster (LEADS {" > "} 50/mo)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_15px_#F59E0B]" />

                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                  Strategic Expansion Zone
                </span>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground">
            Territory Health
          </h3>

          {areas.map((area) => (
            <Card
              key={area.name}
              className="bg-white/5 border-white/10 hover:border-primary/20 transition-all cursor-pointer group shadow-xl"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h4>

                  <Badge
                    className={cn(
                      "text-[8px] uppercase font-bold",
                      area.leadFlow === "Critical"
                        ? "bg-red-500/10 text-red-500"
                        : area.leadFlow === "High"
                        ? "bg-blue-500/10 text-blue-500"
                        : "bg-white/5"
                    )}
                  >
                    {area.leadFlow} Flow
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase">
                  <span>{area.partners} Partners Linked</span>
                  <span>Density: {area.density}%</span>
                </div>

                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${area.density}%` }}
                  />
                </div>

                <div className="flex items-center gap-2 pt-2 text-[9px] font-bold text-primary uppercase">
                  <Compass className="w-3.5 h-3.5" />
                  Attached Hub: {area.hub}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}