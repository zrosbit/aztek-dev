"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CreditCard, 
  TrendingUp, 
  Settings, 
  DollarSign, 
  Percent, 
  ShieldCheck, 
  AlertTriangle,
  History,
  Lock,
  Save
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export default function PartnerFinancialsPage() {
  const handleSave = () => {
    toast({ title: "Financials Updated", description: "Global margin rules and credit limits synchronized." })
  }

  const marginRules = [
    { tier: "Silver Partner", product: "Automotive PPF", base: "35%", current: "35%", status: "System Std" },
    { tier: "Gold Partner", product: "Automotive PPF", base: "35%", current: "42%", status: "Enhanced" },
    { tier: "Platinum Partner", product: "Automotive PPF", base: "35%", current: "48%", status: "Elite" },
  ]

  return (
    <div className="space-y-8 pb-20">
      <div className="flex justify-end">
         <Button variant="gradient" className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl gap-2" onClick={handleSave}>
            <Save className="w-4 h-4" /> Synchronize Rules
         </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white/5 border-white/10 shadow-2xl overflow-hidden">
               <CardHeader className="p-8 border-b border-white/5 bg-white/[0.01]">
                  <div className="flex items-center gap-4">
                     <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Percent className="w-5 h-5" />
                     </div>
                     <CardTitle className="text-sm uppercase tracking-widest">Global Margin Management</CardTitle>
                  </div>
               </CardHeader>
               <CardContent className="p-0">
                  <table className="w-full text-left">
                     <thead className="bg-white/5 border-b border-white/5">
                        <tr>
                           <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Network Tier</th>
                           <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Product Track</th>
                           <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Applied Margin</th>
                           <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Override Status</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5">
                        {marginRules.map((r, i) => (
                          <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                             <td className="p-6 font-bold text-xs uppercase tracking-widest text-foreground">{r.tier}</td>
                             <td className="p-6 text-[10px] font-bold text-muted-foreground uppercase">{r.product}</td>
                             <td className="p-6">
                                <div className="flex items-center justify-center gap-2">
                                   <Input defaultValue={r.current} className="w-16 h-8 text-center bg-black/20 border-white/5 text-[10px] font-bold" />
                                </div>
                             </td>
                             <td className="p-6 text-center">
                                <Badge variant="outline" className="text-[8px] uppercase border-white/10">{r.status}</Badge>
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 shadow-2xl p-8">
               <div className="flex items-center gap-4 mb-8">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                     <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm uppercase font-bold tracking-widest text-foreground">Credit Control Terminal</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Base Network Credit Limit (₹)</label>
                     <Input defaultValue="5,00,000" className="h-12 bg-black/20 border-white/10 rounded-xl font-mono text-primary font-bold" />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Late Payment Interest %</label>
                     <Input defaultValue="1.5%" className="h-12 bg-black/20 border-white/10 rounded-xl font-mono" />
                  </div>
               </div>
            </Card>
         </div>

         <div className="space-y-8">
            <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-6 shadow-xl">
               <div className="flex items-center gap-3 text-muted-foreground">
                  <AlertTriangle className="w-5 h-5" />
                  <h4 className="text-[10px] font-bold uppercase tracking-widest">Governance Notice</h4>
               </div>
               <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-medium">
                  Financial rule changes trigger an immediate push notification to all affected partner Connect terminals. Dual-factor authentication is required for final commit.
               </p>
            </Card>

            <div className="space-y-4">
               <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground">Recent Overrides</h3>
               {[
                  { user: "Sachin R.", action: "MARGIN_UP", partner: "Elite Wraps", time: "2h ago" },
                  { user: "Nadeem S.", action: "CREDIT_INCR", partner: "Mumbai Detailing", time: "1d ago" },
               ].map((a, i) => (
                  <div key={i} className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
                     <div className="space-y-1">
                        <p className="text-[10px] font-bold text-foreground uppercase">{a.partner}</p>
                        <p className="text-[8px] text-muted-foreground font-bold uppercase">{a.action} • {a.user}</p>
                     </div>
                     <span className="text-[9px] font-bold text-primary uppercase">{a.time}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  )
}
