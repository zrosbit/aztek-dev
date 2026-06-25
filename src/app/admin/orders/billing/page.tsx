"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Receipt, 
  CreditCard, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowUpRight, 
  Search,
  Filter,
  Download,
  MoreVertical,
  Printer,
  Mail,
  RefreshCw,
  Wallet
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function OrderBilling() {
  const [activeTab, setActiveTab] = useState("invoices")

  const invoices = [
    { id: "INV-2026-0042", order: "ORD-9942", partner: "Elite Wraps", amount: "₹2,42,000", status: "ISSUED", date: "Oct 24", due: "Nov 02" },
    { id: "INV-2026-0038", order: "ORD-9938", partner: "Moto Shield", amount: "₹85,000", status: "PAID", date: "Oct 22", due: "Oct 22" },
    { id: "INV-2026-0035", order: "ORD-9932", partner: "Skyline Arch", amount: "₹4,20,000", status: "OVERDUE", date: "Oct 15", due: "Oct 25" },
  ]

  const credits = [
    { id: "CN-9912", ref: "INV-0035", partner: "Skyline Arch", amount: "₹12,400", reason: "Material Return", status: "APPLIED" }
  ]

  return (
    <div className="space-y-8 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {[
           { label: "Accounts Receivable", val: "₹1.84 Cr", sub: "National Network", icon: Wallet, color: "text-blue-500" },
           { label: "Payment Velocity", val: "12 Days", sub: "Avg Settlement", icon: CheckCircle2, color: "text-green-500" },
           { label: "Critical Aging", val: "₹12.5L", sub: "60d+ Past Due", icon: AlertTriangle, color: "text-red-500" },
           { label: "Credit Memo Total", val: "₹2.4L", sub: "Active Notes", icon: CreditCard, color: "text-purple-500" },
         ].map((s) => (
           <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-4">
              <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10 w-fit", s.color)}>
                 <s.icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                 <p className="text-2xl font-headline font-bold text-foreground">{s.val}</p>
                 <p className="text-[9px] text-muted-foreground uppercase font-bold">{s.sub}</p>
              </div>
           </Card>
         ))}
      </div>

      <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
         <div className="p-6 border-b border-white/5 bg-white/[0.02] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Commercial Ledger</h3>
            <div className="flex gap-2">
               <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl border-white/10 text-[9px] uppercase font-bold gap-2"><Download className="w-3.5 h-3.5" /> GSTR-1 Pack</Button>
               <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl border-white/10 text-[9px] uppercase font-bold gap-2"><RefreshCw className="w-3.5 h-3.5" /> Sync Tally</Button>
            </div>
         </div>
         <table className="w-full text-left">
            <thead className="bg-white/5 border-b border-white/5">
               <tr>
                  <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Document Identity</th>
                  <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Partner Context</th>
                  <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Due Date</th>
                  <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Amount (Gross)</th>
                  <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
                  <th className="p-6"></th>
               </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
               {invoices.map((inv) => (
                 <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-6">
                       <div className="space-y-1">
                          <p className="font-mono text-xs font-bold text-primary uppercase">{inv.id}</p>
                          <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Order: {inv.order}</p>
                       </div>
                    </td>
                    <td className="p-6 font-bold text-sm uppercase text-foreground">{inv.partner}</td>
                    <td className="p-6 text-center text-xs font-bold text-muted-foreground uppercase">{inv.due}</td>
                    <td className="p-6 text-right font-headline font-bold text-foreground">{inv.amount}</td>
                    <td className="p-6 text-center">
                       <Badge className={cn(
                          "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                          inv.status === 'PAID' ? "bg-green-500/10 text-green-500" : 
                          inv.status === 'OVERDUE' ? "bg-red-500/10 text-red-500 animate-pulse" : "bg-blue-500/10 text-blue-500"
                       )}>{inv.status}</Badge>
                    </td>
                    <td className="p-6 text-right">
                       <div className="flex justify-end gap-2">
                          <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><Printer className="w-4 h-4" /></Button>
                          <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><Mail className="w-4 h-4" /></Button>
                       </div>
                    </td>
                 </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  )
}
