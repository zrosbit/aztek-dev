
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Receipt, 
  Search, 
  Filter, 
  Download, 
  Printer, 
  CreditCard,
  History,
  MoreVertical,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Send,
  Plus
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function PartnerInvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const invoices = [
    { id: "INV-2026-KA-0042", customer: "Rahul Sharma", date: "Oct 24", due: "Nov 02", amount: "₹1,47,500", status: "ISSUED", gstin: "29AAACG1234F1Z5" },
    { id: "INV-2026-KA-0038", customer: "Aditi Rao", date: "Oct 22", due: "Oct 30", amount: "₹28,910", status: "PAID", gstin: "N/A" },
    { id: "INV-2026-KA-0035", customer: "Vikram Singh", date: "Oct 15", due: "Oct 25", amount: "₹4,95,600", status: "OVERDUE", gstin: "29BBBCG4321D2Z8" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Invoicing <span className="text-primary italic">Terminal</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">GST-Compliant Billing & Receivables Management</p>
         </div>
         <div className="flex gap-4">
            <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5" onClick={() => toast({ title: "Bulk Export", description: "Monthly GSTR-1 data is being prepared." })}>
              <Download className="w-4 h-4" /> GSTR-1 Export
            </Button>
            <Button variant="gradient" className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl rounded-2xl">
              <Plus className="w-4 h-4" /> Raise Manual Invoice
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Billed", val: "₹18.4L", sub: "Monthly MTD", icon: Receipt, color: "text-blue-500" },
          { label: "Amount Realized", val: "₹12.2L", sub: "Payments Settled", icon: CheckCircle2, color: "text-green-500" },
          { label: "Outstanding", val: "₹6.2L", sub: "Active Receivables", icon: CreditCard, color: "text-amber-500" },
          { label: "Overdue", val: "₹4.9L", sub: "SLA Breach", icon: AlertTriangle, color: "text-red-500" },
        ].map((s) => (
          <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", s.color)}>
                <s.icon className="w-5 h-5" />
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
              <p className="text-3xl font-headline font-bold text-foreground">{s.val}</p>
              <p className="text-[9px] text-muted-foreground uppercase font-bold">{s.sub}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input 
             placeholder="Search by Invoice #, Customer or GSTIN..." 
             className="pl-10 h-12 bg-white/5 border-white/5 rounded-2xl" 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
        </div>
        <div className="flex gap-2 shrink-0">
           <Button variant="outline" className="h-12 rounded-2xl border-white/5 px-6 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <Filter className="w-4 h-4" /> All Status
           </Button>
           <Button variant="outline" className="h-12 rounded-2xl border-white/5 px-6 text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <History className="w-4 h-4" /> Activity Log
           </Button>
        </div>
      </div>

      <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/5">
            <tr>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Invoice Detail</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Customer Entity</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Timeline</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Total (Incl Tax)</th>
              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {invoices.map((inv, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                <td className="p-6">
                   <div className="space-y-1">
                      <p className="font-mono text-xs font-bold text-primary">{inv.id}</p>
                      <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">GSTIN: {inv.gstin}</p>
                   </div>
                </td>
                <td className="p-6">
                   <span className="font-bold text-sm text-foreground uppercase tracking-tight">{inv.customer}</span>
                </td>
                <td className="p-6 text-center">
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold text-foreground">Issued: {inv.date}</p>
                      <p className="text-[9px] text-muted-foreground font-bold uppercase">Due: {inv.due}</p>
                   </div>
                </td>
                <td className="p-6 text-right">
                   <span className="text-sm font-headline font-bold text-foreground">{inv.amount}</span>
                </td>
                <td className="p-6 text-center">
                   <Badge className={cn(
                     "text-[9px] uppercase font-bold tracking-widest px-3 py-1",
                     inv.status === "PAID" ? "bg-green-500/10 text-green-500 border-green-500/20" :
                     inv.status === "OVERDUE" ? "bg-red-500/10 text-red-500 border-red-500/20" :
                     "bg-blue-500/10 text-blue-500 border-blue-500/20"
                   )}>{inv.status}</Badge>
                </td>
                <td className="p-6 text-right">
                   <div className="flex justify-end gap-2">
                      <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary" onClick={() => toast({ title: "Emailing Invoice", description: "Branded PDF dispatched to client email." })}><Send className="w-4 h-4" /></Button>
                      <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><Printer className="w-4 h-4" /></Button>
                      <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><MoreVertical className="w-4 h-4" /></Button>
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
