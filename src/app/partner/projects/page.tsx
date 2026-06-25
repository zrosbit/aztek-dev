
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Search, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  FileText,
  ChevronRight,
  ShieldCheck
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function ProjectManagerPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const projects = [
    { 
      id: "AZ-JOB-BLR-00421", 
      customer: "Rahul Sharma", 
      vehicle: "Porsche 911 GT3", 
      status: "In Progress", 
      date: "Oct 24, 2024",
      progress: 65,
      checks: 2
    },
    { 
      id: "AZ-JOB-BLR-00418", 
      customer: "Aditi Rao", 
      vehicle: "BMW i7 - Black Sapphire", 
      status: "Completed", 
      date: "Oct 22, 2024",
      progress: 100,
      checks: 4
    },
    { 
      id: "AZ-JOB-BLR-00415", 
      customer: "Moto Enthusiasts Ltd", 
      vehicle: "Ducati Panigale V4 (3 units)", 
      status: "Booked", 
      date: "Oct 26, 2024",
      progress: 0,
      checks: 0
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-headline font-bold tracking-tight">Project Manager</h1>
          <p className="text-muted-foreground">Manage active installation job cards and quality control.</p>
        </div>
        <Button className="h-12 px-6 font-bold text-xs uppercase tracking-widest gap-2">
          <Plus className="w-4 h-4" />
          New Job Card
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-white/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-muted-foreground">Active Jobs</p>
              <p className="text-2xl font-headline font-bold">12</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-white/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-muted-foreground">Completed (MTD)</p>
              <p className="text-2xl font-headline font-bold">48</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-white/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-muted-foreground">Warranty Ready</p>
              <p className="text-2xl font-headline font-bold">6</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search by Job ID, Customer or Vehicle..." 
            className="pl-10 bg-card border-white/5 h-12"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id} className="bg-card border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-primary font-mono">{project.id}</span>
                    <Badge variant="secondary" className={cn(
                      "text-[10px] uppercase",
                      project.status === "Completed" ? "bg-green-500/10 text-green-500" :
                      project.status === "In Progress" ? "bg-blue-500/10 text-blue-500" :
                      "bg-white/5 text-muted-foreground"
                    )}>
                      {project.status}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">{project.date}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="font-bold text-lg">{project.customer}</p>
                    <p className="text-xs text-muted-foreground">{project.vehicle}</p>
                  </div>
                  <div className="flex items-end justify-between md:justify-end gap-8">
                    <div className="flex flex-col gap-1 items-end">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground">Quality Checks</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className={cn(
                            "w-4 h-1 rounded-full",
                            i <= project.checks ? "bg-primary" : "bg-white/10"
                          )} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="shrink-0 flex gap-2">
                <Button variant="outline" size="icon" className="border-white/5 hover:bg-white/5">
                  <FileText className="w-4 h-4" />
                </Button>
                <Button size="icon" className="shadow-lg shadow-primary/20">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
