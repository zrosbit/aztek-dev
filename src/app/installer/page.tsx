
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ArrowRight, ChevronRight, Car, Bike, Building2 } from "lucide-react"
import Link from "next/link"

export default function InstallerAgendaPage() {
  const jobs = [
    { 
      id: "AZ-JOB-421", 
      customer: "Rahul Sharma", 
      address: "Indiranagar, 12th Main", 
      time: "10:30 AM", 
      distance: "1.2 km",
      product: "Full Body PPF",
      vehicle: "Porsche 911 GT3",
      type: "auto"
    },
    { 
      id: "AZ-JOB-425", 
      customer: "Aditi Rao", 
      address: "Whitefield, EPIP Zone", 
      time: "02:00 PM", 
      distance: "8.4 km",
      product: "Ceramic Gold",
      vehicle: "BMW i7",
      type: "auto"
    },
    { 
      id: "AZ-JOB-428", 
      customer: "Vikram Singh", 
      address: "Koramangala, 4th Block", 
      time: "04:30 PM", 
      distance: "5.1 km",
      product: "Moto Shield Pro",
      vehicle: "Ducati V4S",
      type: "moto"
    },
  ]

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-500">
      <div className="space-y-1">
        <h1 className="text-2xl font-headline font-bold uppercase tracking-tight">Today's Agenda</h1>
        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Master Installer Lab 042</p>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <Link key={job.id} href={`/installer/jobs/${job.id}`}>
            <Card className="bg-white/5 border-white/10 hover:border-primary/40 transition-all mb-4 overflow-hidden group active:scale-95 duration-200">
              <CardContent className="p-0">
                <div className="flex items-stretch h-32">
                  <div className="w-2 bg-primary group-hover:w-4 transition-all" />
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-bold text-primary font-mono">{job.id}</p>
                        <h3 className="text-sm font-bold uppercase tracking-tight text-foreground">{job.customer}</h3>
                      </div>
                      <Badge className="bg-white/5 text-[9px] uppercase font-bold tracking-widest">{job.time}</Badge>
                    </div>
                    
                    <div className="flex items-end justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold uppercase">
                          <MapPin className="w-3 h-3 text-primary" /> {job.address}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold uppercase">
                          {job.type === 'auto' ? <Car className="w-3 h-3" /> : <Bike className="w-3 h-3" />} {job.vehicle}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-bold text-primary uppercase tracking-widest">{job.distance}</p>
                        <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="p-6 bg-primary/5 border border-primary/20 rounded-3xl flex items-center justify-between shadow-xl">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Status</p>
          <p className="text-sm font-bold uppercase">All Systems Online</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </div>
  )
}
