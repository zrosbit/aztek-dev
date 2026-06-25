"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { 
  Plus, 
  Search, 
  Camera, 
  CheckCircle2, 
  Clock, 
  FileText,
  ChevronRight,
  ShieldCheck,
  MoreVertical,
  X,
  Upload,
  Info,
  ArrowRight,
  Loader2,
  Car,
  Tag
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectManagerPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [isAddingJob, setIsAddingJob] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const projects = [
    { 
      id: "AZ-JOB-BLR-00421", 
      customer: "Rahul Sharma", 
      vehicle: "Porsche 911 GT3", 
      status: "In Progress", 
      date: "Oct 24, 2024",
      progress: 65,
      checks: 2,
      vin: "WP0ZZZ99ZLS123456",
      products: ["PPF Full Body", "9H Ceramic Matrix"]
    },
    { 
      id: "AZ-JOB-BLR-00418", 
      customer: "Aditi Rao", 
      vehicle: "BMW i7 - Black Sapphire", 
      status: "Completed", 
      date: "Oct 22, 2024",
      progress: 100,
      checks: 7,
      vin: "WBY1234567890ABCD",
      products: ["PPF Impact Zone", "Interior Protection"]
    },
  ]

  const checklistItems = [
    "Surface decontamination completed",
    "Paint correction completed (if applicable)",
    "Film edges sealed — no lifting",
    "No visible contaminants under film",
    "Self-healing activation test passed",
    "Customer visual inspection done",
    "Customer digital sign-off obtained"
  ]

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsAddingJob(false)
      toast({
        title: "Job Card Created",
        description: "Project initialized in workspace. Batch verify materials to proceed.",
      })
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Project <span className="text-az-blue italic">Manager</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Job Cards & Quality Control Gateway</p>
         </div>
         <Button variant="gradient" className="h-12 px-6 font-bold text-xs uppercase tracking-widest gap-2 rounded-2xl shadow-xl" onClick={() => setIsAddingJob(true)}>
           <Plus className="w-4 h-4" /> New Job Card
         </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Active Jobs", val: "12", icon: Clock, color: "text-blue-500" },
          { label: "Completed MTD", val: "48", icon: CheckCircle2, color: "text-green-500" },
          { label: "Warranty Ready", val: "06", icon: ShieldCheck, color: "text-az-blue" },
          { label: "Avg Duration", val: "4.2h", icon: Clock, color: "text-amber-500" },
        ].map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 shadow-xl overflow-hidden group">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={cn("p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", s.color)}>
                <s.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{s.label}</p>
                <p className="text-2xl font-headline font-bold text-foreground">{s.val}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search Job ID, Customer or Vehicle..." className="pl-10 h-12 bg-white/5 border-white/5 rounded-2xl focus:ring-az-blue/50" />
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="bg-white/5 border-white/10 hover:border-az-blue/30 transition-all cursor-pointer group shadow-2xl overflow-hidden"
            onClick={() => setSelectedJob(project)}
          >
            <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-az-blue font-mono">{project.id}</span>
                    <Badge variant="outline" className={cn(
                      "text-[9px] uppercase font-bold tracking-widest",
                      project.status === "Completed" ? "border-green-500 text-green-500 bg-green-500/5" : "border-az-blue text-az-blue bg-az-blue/5"
                    )}>{project.status}</Badge>
                  </div>
                  <span className="text-[10px] text-muted-foreground uppercase font-bold">{project.date}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold group-hover:text-az-blue transition-colors text-foreground uppercase tracking-tight">{project.customer}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{project.vehicle}</p>
                  </div>
                  <div className="flex flex-col gap-2 justify-center">
                    <div className="flex justify-between text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
                       <span>Quality Score</span>
                       <span>{Math.round((project.checks / 7) * 100)}%</span>
                    </div>
                    <div className="flex gap-1.5">
                       {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                         <div key={i} className={cn(
                           "h-1.5 flex-1 rounded-full transition-colors",
                           i <= project.checks ? "bg-az-blue" : "bg-white/5"
                         )} />
                       ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 w-full lg:w-auto">
                <Button variant="outline" className="flex-1 lg:flex-none border-white/10 h-12 px-6 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5 hover:bg-white/10">
                   <Camera className="w-4 h-4" /> Photos
                </Button>
                <Button variant="gradient" className="flex-1 lg:flex-none h-12 px-6 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-lg">
                   Manage Card <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* New Job Card Dialog */}
      <Dialog open={isAddingJob} onOpenChange={(o) => { if(!isSubmitting) setIsAddingJob(o); }}>
        <DialogContent className="max-w-2xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={handleCreateJob}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Initialize Job Card</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Setup new protection project for installation</DialogDescription>
            </DialogHeader>

            <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-az-blue">Asset Intelligence</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Customer Name</label>
                    <Input required placeholder="e.g. Rahul M." className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Vehicle Reg / Property Ref</label>
                    <Input required placeholder="e.g. KA01-MX-1234" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">VIN / Serial Number</label>
                  <Input required placeholder="17-Digit Vehicle Identifier" className="bg-white/5 border-white/5 h-12 text-sm rounded-xl font-mono" />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-az-blue">Product Configuration</h3>
                <div className="space-y-4">
                  <Select required>
                    <SelectTrigger className="bg-white/5 border-white/5 h-12 rounded-xl text-sm">
                      <SelectValue placeholder="Primary Protection Track" />
                    </SelectTrigger>
                    <SelectContent className="bg-az-midnight border-white/10">
                      <SelectItem value="auto">Automotive PPF Full Body</SelectItem>
                      <SelectItem value="impact">Front Impact Zone PPF</SelectItem>
                      <SelectItem value="ceramic">9H Ceramic Matrix Armor</SelectItem>
                      <SelectItem value="arch">Architectural Solar Shield</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-bold uppercase text-foreground">Standard 10-Year Warranty Track</span>
                     </div>
                     <Badge variant="outline" className="text-[8px] border-primary/30 text-primary">Pre-Verified</Badge>
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
              <Button type="button" variant="ghost" onClick={() => setIsAddingJob(false)} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Cancel</Button>
              <Button type="submit" disabled={isSubmitting} className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl min-w-[200px]">
                {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Finalizing Registry...</> : <>Create Job Card <ArrowRight className="w-4 h-4 ml-2" /></>}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Job Card Modal */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-4xl bg-az-midnight border-white/10 p-0 overflow-hidden shadow-2xl">
          <div className="h-[85vh] flex flex-col">
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">{selectedJob?.id}</DialogTitle>
                  <Badge className="bg-az-blue/10 text-az-blue border-az-blue/20 text-[10px] uppercase font-bold">{selectedJob?.status}</Badge>
                </div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Project Workspace / Bangalore Hub</p>
              </div>
              <Button size="icon" variant="ghost" onClick={() => setSelectedJob(null)} className="rounded-full hover:bg-white/5"><X className="w-5 h-5" /></Button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-az-blue">Asset Intelligence</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">Customer & Vehicle</span>
                        <p className="text-lg font-bold uppercase tracking-tight">{selectedJob?.customer}</p>
                        <p className="text-xs text-az-blue font-bold uppercase">{selectedJob?.vehicle}</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">VIN / Serial Number</span>
                        <p className="text-sm font-mono font-bold tracking-widest">{selectedJob?.vin}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-az-blue">Product Configuration</h3>
                    <div className="space-y-2">
                      {selectedJob?.products?.map((p: string) => (
                        <div key={p} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                          <div className="flex items-center gap-3">
                             <Tag className="w-3.5 h-3.5 text-az-blue" />
                             <span className="text-xs font-bold uppercase">{p}</span>
                          </div>
                          <Badge variant="outline" className="text-[8px] border-white/10 uppercase">Batch Verified</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-az-blue">QC Protocol</h3>
                       <span className="text-[10px] font-bold text-az-blue">{selectedJob?.checks}/7 Passed</span>
                    </div>
                    <div className="space-y-3">
                      {checklistItems.map((item, idx) => (
                        <div key={item} className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl group hover:border-az-blue/20 transition-all">
                          <Checkbox id={`check-${idx}`} checked={idx < selectedJob?.checks} className="border-white/20 data-[state=checked]:bg-az-blue" />
                          <label htmlFor={`check-${idx}`} className="text-xs font-bold uppercase tracking-tight text-foreground/80 group-hover:text-foreground cursor-pointer transition-colors">{item}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/5">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-az-blue">Photo Documentation</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="aspect-square rounded-2xl border-2 border-dashed border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-2 group hover:border-az-blue/30 transition-all cursor-pointer">
                        <Camera className="w-6 h-6 text-muted-foreground group-hover:text-az-blue transition-colors" />
                        <span className="text-[9px] font-bold uppercase text-muted-foreground">Upload Slot 0{i}</span>
                     </div>
                   ))}
                   <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 p-2 relative group overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                        <Button size="icon" variant="ghost" className="text-white"><Plus /></Button>
                      </div>
                      <img src={`https://picsum.photos/seed/job${selectedJob?.id}/200/200`} className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all" alt="QC photo" />
                   </div>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase">
                     <Clock className="w-3.5 h-3.5" /> Est: 4.2h
                  </div>
                  <div className="w-px h-3 bg-white/10" />
                  <div className="flex items-center gap-2 text-[10px] font-bold text-az-blue uppercase">
                     <Info className="w-3.5 h-3.5" /> ID Verified
                  </div>
               </div>
               <div className="flex gap-3">
                  <Button variant="outline" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold border-white/10" onClick={() => setSelectedJob(null)}>Discard Changes</Button>
                  <Button 
                    variant="gradient" 
                    className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl disabled:opacity-50"
                    disabled={selectedJob?.checks < 7}
                    onClick={() => {
                      toast({ title: "Warranty Initialized", description: "Transmitting data to eWarrantyFy registry." });
                      setSelectedJob(null);
                    }}
                  >
                    Register Warranty <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
               </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
