"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileQuestion, 
  Settings, 
  Plus, 
  Search, 
  CheckCircle2, 
  AlertTriangle,
  MoreVertical,
  ArrowRight,
  Clock,
  BookOpen
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function AcademyAssessmentsPage() {
  const questionBanks = [
    { track: "Automotive PPF", questions: 142, lastUpdated: "2d ago", status: "Active" },
    { track: "Ceramic Coatings", questions: 98, lastUpdated: "1w ago", status: "Active" },
    { track: "Motorcycle Armor", questions: 76, lastUpdated: "3d ago", status: "Review" },
    { track: "Architectural Films", questions: 112, lastUpdated: "5d ago", status: "Active" },
    { track: "Connect Operations", questions: 45, lastUpdated: "1mo ago", status: "Active" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Filter by track or assessment ID..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-14 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5 border-white/10">
              <Settings className="w-4 h-4" /> Passing Rules
           </Button>
           <Button variant="gradient" className="h-14 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-2xl rounded-2xl">
              <Plus className="w-4 h-4" /> Create Assessment
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questionBanks.map((bank) => (
          <Card key={bank.track} className="bg-white/5 border-white/10 hover:border-primary/40 transition-all group shadow-2xl">
            <CardHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
               <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                     <FileQuestion className="w-6 h-6" />
                  </div>
                  <Badge className={cn(
                    "text-[8px] uppercase font-bold tracking-widest",
                    bank.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                  )}>{bank.status}</Badge>
               </div>
               <CardTitle className="text-lg uppercase tracking-widest text-foreground leading-none">{bank.track}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                     <p className="text-[9px] font-bold text-muted-foreground uppercase">Bank Size</p>
                     <p className="text-xl font-headline font-bold text-foreground">{bank.questions} <span className="text-[10px] font-medium text-muted-foreground">Items</span></p>
                  </div>
                  <div className="space-y-1 text-right">
                     <p className="text-[9px] font-bold text-muted-foreground uppercase">Last Sync</p>
                     <p className="text-sm font-bold text-foreground">{bank.lastUpdated}</p>
                  </div>
               </div>
               <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Button variant="ghost" className="p-0 h-auto text-primary text-[10px] font-bold uppercase gap-2 hover:bg-transparent hover:translate-x-2 transition-all">
                     Manage Question Bank <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-muted-foreground"><MoreVertical className="w-4 h-4" /></Button>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[40px] flex items-center justify-between shadow-2xl relative overflow-hidden">
         <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-[24px] bg-primary flex items-center justify-center text-white shadow-2xl">
               <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
               <h4 className="text-xl font-headline font-bold uppercase text-foreground">Global Proctoring Protocol Active</h4>
               <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Randomized randomization & strict anti-cheat logic enabled across all nodes.</p>
            </div>
         </div>
         <Button variant="outline" className="rounded-xl h-11 px-8 text-[9px] font-bold uppercase border-primary/20 relative z-10 hover:bg-primary hover:text-white transition-all">Audit Security Logs</Button>
         <BookOpen className="absolute -bottom-10 -right-10 w-48 h-48 text-primary opacity-5 -rotate-12" />
      </Card>
    </div>
  )
}
