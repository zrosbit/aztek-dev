"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Edit, 
  History,
  Shield,
  Droplets,
  Zap,
  Wrench,
  Building2,
  Loader2,
  ArrowRight,
  Download,
  LayoutGrid,
  Table as TableIcon
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export default function ProductCatalogPage() {
  const [isAddingSKU, setIsAddingSKU] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [view, setView] = useState<"table" | "grid">("table")

  const [products, setProducts] = useState([
    { sku: "AZ-AUTO-PPF-ULTRA", name: "AZTEK Pro Ultra PPF", cat: "PPF", brand: "Automotive", uom: "15m Roll", cost: "₹32,000", wholesale: "₹45,000", status: "Active", icon: Shield },
    { sku: "AZ-AUTO-PPF-MATTE", name: "AZTEK Matte Finish PPF", cat: "PPF", brand: "Automotive", uom: "15m Roll", cost: "₹36,000", wholesale: "₹52,000", status: "Active", icon: Shield },
    { sku: "AZ-AUTO-CER-GOLD", name: "9H Nano-Ceramic Gold", cat: "Ceramic", brand: "Automotive", uom: "30ml Bottle", cost: "₹4,200", wholesale: "₹6,500", status: "Active", icon: Droplets },
    { sku: "AZ-MOTO-KIT-FULL", name: "Moto Shield Pro Full Kit", cat: "Kit", brand: "Motorcycle", uom: "Custom Kit", cost: "₹8,500", wholesale: "₹14,500", status: "Active", icon: Zap },
    { sku: "AZ-ARCH-SOL-V4", name: "Architectural Heat Shield", cat: "Window Film", brand: "Architectural", uom: "30m Roll", cost: "₹18,000", wholesale: "₹28,000", status: "Active", icon: Building2 },
    { sku: "AZ-TOOL-PRO-SET", name: "Master Installer Toolset", cat: "Tooling", brand: "Global", uom: "Set", cost: "₹1,200", wholesale: "₹2,400", status: "Active", icon: Wrench },
  ])

  const handleAddSKU = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsAddingSKU(false)
      toast({
        title: "SKU Created",
        description: "New product successfully registered in the Master Catalog.",
      })
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">National Product Catalog</h3>
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Master SKU & Pricing Registry</p>
         </div>
         <div className="flex gap-3">
            <Button variant="outline" className="h-12 border-white/5 bg-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2" onClick={() => toast({ title: "Export Started", description: "Catalog CSV being prepared." })}>
               <Download className="w-4 h-4" /> Export Master
            </Button>
            <Button variant="gradient" className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl rounded-2xl" onClick={() => setIsAddingSKU(true)}>
               <Plus className="w-4 h-4" /> Add New SKU
            </Button>
         </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input placeholder="Search catalog by Name, SKU, Category or Sub-Brand..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
        </div>
        <div className="flex gap-2 shrink-0">
           <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl">
              <button onClick={() => setView("table")} className={cn("px-4 py-2 text-[10px] font-bold uppercase rounded-xl transition-all", view === "table" ? "bg-primary text-white" : "text-muted-foreground")}>
                 <TableIcon className="w-4 h-4" />
              </button>
              <button onClick={() => setView("grid")} className={cn("px-4 py-2 text-[10px] font-bold uppercase rounded-xl transition-all", view === "grid" ? "bg-primary text-white" : "text-muted-foreground")}>
                 <LayoutGrid className="w-4 h-4" />
              </button>
           </div>
           <Button variant="outline" className="h-14 rounded-2xl border-white/5 px-6 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <Filter className="w-4 h-4" /> Filters
           </Button>
        </div>
      </div>

      {view === "table" ? (
        <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-white/5 border-b border-white/5">
              <tr>
                <th className="p-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground">Product Specification</th>
                <th className="p-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground">Classification</th>
                <th className="p-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground text-right">Wholesale Rate</th>
                <th className="p-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground text-center">UOM</th>
                <th className="p-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground text-center">Status</th>
                <th className="p-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {products.map((p, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                        <p.icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors text-sm uppercase tracking-widest">{p.name}</p>
                        <p className="text-[10px] font-mono text-muted-foreground font-bold">{p.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-col gap-1">
                      <Badge variant="outline" className="w-fit text-[8px] uppercase font-bold tracking-[0.2em] border-white/10 bg-white/5">
                        {p.cat}
                      </Badge>
                      <span className="text-[8px] text-muted-foreground uppercase font-bold tracking-tighter">{p.brand}</span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="space-y-1">
                      <p className="text-sm font-headline font-bold text-primary">{p.wholesale}</p>
                      <p className="text-[9px] text-muted-foreground uppercase font-bold">Base: {p.cost}</p>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                     <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">{p.uom}</span>
                  </td>
                  <td className="p-6 text-center">
                     <Badge className="bg-green-500/10 text-green-500 border-none text-[8px] uppercase font-bold tracking-widest">{p.status}</Badge>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><Edit className="w-4 h-4" /></Button>
                      <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><History className="w-4 h-4" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {products.map((p, i) => (
             <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all group overflow-hidden">
                <CardHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
                   <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                         <p.icon className="w-6 h-6" />
                      </div>
                      <Badge variant="outline" className="text-[8px] border-white/10 uppercase tracking-widest">{p.sku}</Badge>
                   </div>
                   <CardTitle className="text-lg uppercase tracking-widest leading-none">{p.name}</CardTitle>
                   <p className="text-[10px] text-muted-foreground font-bold uppercase mt-2">{p.cat} • {p.brand}</p>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                   <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-1">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Wholesale Rate</p>
                         <p className="text-xl font-headline font-bold text-primary">{p.wholesale}</p>
                      </div>
                      <div className="space-y-1 text-right">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Packaging</p>
                         <p className="text-sm font-bold text-foreground">{p.uom}</p>
                      </div>
                   </div>
                   <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10 group-hover:bg-white/5">Update Specifications</Button>
                </CardContent>
             </Card>
           ))}
        </div>
      )}

      {/* Add SKU Dialog */}
      <Dialog open={isAddingSKU} onOpenChange={(o) => { if(!isSubmitting) setIsAddingSKU(o); }}>
        <DialogContent className="max-w-3xl bg-background border-white/10 p-0 overflow-hidden shadow-2xl">
          <form onSubmit={handleAddSKU}>
            <DialogHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Register Master SKU</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Register new product in global AZTEK Master Registry</DialogDescription>
            </DialogHeader>

            <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">SKU Code (AZ-STD)</label>
                  <Input required placeholder="AZ-AUTO-PPF-XXXX" className="bg-white/5 border-white/5 h-12 rounded-xl font-mono uppercase" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Product Name</label>
                  <Input required placeholder="Full Technical Name" className="bg-white/5 border-white/5 h-12 rounded-xl" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Sub-Brand</label>
                  <Select required>
                    <SelectTrigger className="h-12 bg-white/5 border-white/5 rounded-xl"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent className="glass">
                      <SelectItem value="auto">Automotive</SelectItem>
                      <SelectItem value="moto">Motorcycle</SelectItem>
                      <SelectItem value="arch">Architectural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Category</label>
                  <Select required>
                    <SelectTrigger className="h-12 bg-white/5 border-white/5 rounded-xl"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent className="glass">
                      <SelectItem value="ppf">PPF</SelectItem>
                      <SelectItem value="ceramic">Ceramic</SelectItem>
                      <SelectItem value="tool">Tools</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Packaging (UOM)</label>
                  <Input required placeholder="e.g. 15m Roll" className="bg-white/5 border-white/5 h-12 rounded-xl" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Landing Cost (₹)</label>
                  <Input required type="number" placeholder="0.00" className="bg-white/5 border-white/5 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Wholesale Rate (₹)</label>
                  <Input required type="number" placeholder="0.00" className="bg-white/5 border-white/5 h-12 rounded-xl" />
                </div>
              </div>
            </div>

            <DialogFooter className="p-8 border-t border-white/5 bg-white/[0.02]">
              <Button type="button" variant="ghost" onClick={() => setIsAddingSKU(false)} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Cancel</Button>
              <Button type="submit" disabled={isSubmitting} className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl min-w-[200px]">
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : "Commit Master Record"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
