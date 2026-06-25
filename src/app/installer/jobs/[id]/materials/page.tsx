
"use client"

import { use, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Package, Scan, Plus, Trash2, Save, Search } from "lucide-react"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function JobMaterialsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [logs, setLogs] = useState([
    { id: 1, sku: "AZ-AUTO-PPF-ULTRA", batch: "BATCH-2026-06", qty: "1.5m" }
  ])

  const handleAdd = () => {
    setLogs([...logs, { id: Date.now(), sku: "", batch: "", qty: "" }])
  }

  const handleSave = () => {
    toast({ title: "Materials Logged", description: "Inventory consumption recorded and queued." })
    router.push(`/installer/jobs/${id}`)
  }

  return (
    <div className="space-y-6">
      <div className="p-6 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
        <Button asChild variant="ghost" size="icon" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5">
          <Link href={`/installer/jobs/${id}`}><ArrowLeft className="w-5 h-5" /></Link>
        </Button>
        <h2 className="text-sm font-bold uppercase tracking-widest">Material Consumption</h2>
        <div className="w-10" />
      </div>

      <div className="px-6 space-y-6">
        <div className="p-6 bg-primary/10 border border-primary/20 rounded-3xl flex flex-col items-center justify-center gap-4 text-center group active:scale-95 transition-all">
           <Scan className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
           <div className="space-y-1">
              <p className="text-sm font-bold uppercase tracking-widest">Scan Batch Code</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold">Use camera to log roll serials</p>
           </div>
        </div>

        <div className="space-y-4">
           {logs.map((log, i) => (
             <Card key={log.id} className="bg-white/5 border-white/10 p-5 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                   <span className="text-[10px] font-bold uppercase text-primary tracking-widest">Item 0{i+1}</span>
                   <button onClick={() => setLogs(logs.filter(l => l.id !== log.id))} className="text-muted-foreground hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                   </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-1">
                      <label className="text-[8px] font-bold uppercase text-muted-foreground tracking-widest ml-1">SKU Code</label>
                      <Input placeholder="AZ-AUTO..." className="h-10 bg-white/5 border-white/10 text-[10px] font-mono" defaultValue={log.sku} />
                   </div>
                   <div className="space-y-1">
                      <label className="text-[8px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Batch #</label>
                      <Input placeholder="Lot Number" className="h-10 bg-white/5 border-white/10 text-[10px] font-mono" defaultValue={log.batch} />
                   </div>
                </div>
                <div className="space-y-1">
                   <label className="text-[8px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Consumption Qty</label>
                   <Input placeholder="e.g. 1.5m / 1 Unit" className="h-10 bg-white/5 border-white/10 text-xs font-bold" defaultValue={log.qty} />
                </div>
             </Card>
           ))}
        </div>

        <Button variant="outline" className="w-full h-12 rounded-2xl border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-widest gap-2" onClick={handleAdd}>
           <Plus className="w-4 h-4" /> Add Line Item
        </Button>
      </div>

      <div className="p-6 bg-black/80 backdrop-blur-xl border-t border-white/10 fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <Button 
          className="w-full h-14 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest gap-2 shadow-xl"
          onClick={handleSave}
        >
          <Save className="w-4 h-4" /> Record Consumption
        </Button>
      </div>
    </div>
  )
}
