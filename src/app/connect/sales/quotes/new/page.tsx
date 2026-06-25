
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Calculator, 
  ArrowRight,
  Shield,
  Loader2,
  Calendar,
  User,
  Info
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewQuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [items, setItems] = useState([
    { id: 1, product: "", qty: 1, price: 0, tax: 18 }
  ])

  const calculateSubtotal = () => items.reduce((acc, item) => acc + (item.qty * item.price), 0)
  const calculateTax = () => items.reduce((acc, item) => acc + (item.qty * item.price * (item.tax / 100)), 0)
  const calculateTotal = () => calculateSubtotal() + calculateTax()

  const handleAddItem = () => {
    setItems([...items, { id: Date.now(), product: "", qty: 1, price: 0, tax: 18 }])
  }

  const handleRemoveItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Quotation Generated",
        description: "Quote AZ-QT-BLR-00425 stored and ready for distribution.",
      })
    }, 2000)
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <div className="flex items-center gap-6">
        <Button asChild variant="ghost" className="h-12 w-12 rounded-full border border-white/5 bg-white/5 p-0">
           <Link href="/connect/sales"><ArrowLeft className="w-5 h-5" /></Link>
        </Button>
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Quote <span className="text-primary italic">Builder</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">GST-Compliant Itemized Quotation Terminal</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <Card className="bg-white/5 border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
              <CardHeader className="p-8 border-b border-white/5 bg-white/[0.01]">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                       <User className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-sm uppercase tracking-widest">Customer Intelligence</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Customer Full Name</label>
                       <Input required placeholder="Enter client name" className="h-12 bg-white/5 border-white/5 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Phone / Communication</label>
                       <Input required placeholder="+91 ..." className="h-12 bg-white/5 border-white/5 rounded-xl" />
                    </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Quote Validity</label>
                       <Select defaultValue="15">
                          <SelectTrigger className="h-12 bg-white/5 border-white/10 rounded-xl">
                             <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="glass">
                             <SelectItem value="7">7 Days</SelectItem>
                             <SelectItem value="15">15 Days (Default)</SelectItem>
                             <SelectItem value="30">30 Days</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Billing State (GST Rule)</label>
                       <Select defaultValue="ka">
                          <SelectTrigger className="h-12 bg-white/5 border-white/10 rounded-xl">
                             <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="glass">
                             <SelectItem value="ka">Karnataka (Intra-state)</SelectItem>
                             <SelectItem value="mh">Maharashtra (Inter-state)</SelectItem>
                             <SelectItem value="dl">Delhi (Inter-state)</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                 </div>
              </CardContent>
           </Card>

           <Card className="bg-white/5 border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
              <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between bg-white/[0.01]">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                       <Calculator className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-sm uppercase tracking-widest">Line Itemization</CardTitle>
                 </div>
                 <Button type="button" variant="outline" size="sm" onClick={handleAddItem} className="h-9 px-4 rounded-xl text-[10px] uppercase font-bold border-white/10 bg-white/5 gap-2">
                    <Plus className="w-3 h-3" /> Add Product
                 </Button>
              </CardHeader>
              <CardContent className="p-0">
                 <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/5">
                       <tr>
                          <th className="p-4 text-[9px] uppercase font-bold tracking-widest text-muted-foreground pl-8">Product / SKU</th>
                          <th className="p-4 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Qty</th>
                          <th className="p-4 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Unit Price (₹)</th>
                          <th className="p-4 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Total</th>
                          <th className="p-4 w-12 pr-8"></th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {items.map((item, idx) => (
                         <tr key={item.id} className="group">
                            <td className="p-4 pl-8">
                               <Input 
                                 placeholder="e.g. AZ-AUTO-PPF-ULTRA" 
                                 className="h-10 bg-transparent border-white/5 text-xs font-mono uppercase"
                                 value={item.product}
                                 onChange={(e) => {
                                   const newItems = [...items]
                                   newItems[idx].product = e.target.value
                                   setItems(newItems)
                                 }}
                               />
                            </td>
                            <td className="p-4">
                               <Input 
                                 type="number" 
                                 className="h-10 w-16 mx-auto bg-transparent border-white/5 text-center text-xs"
                                 value={item.qty}
                                 onChange={(e) => {
                                   const newItems = [...items]
                                   newItems[idx].qty = parseInt(e.target.value) || 0
                                   setItems(newItems)
                                 }}
                               />
                            </td>
                            <td className="p-4">
                               <Input 
                                 type="number" 
                                 className="h-10 w-28 ml-auto bg-transparent border-white/5 text-right text-xs"
                                 value={item.price}
                                 onChange={(e) => {
                                   const newItems = [...items]
                                   newItems[idx].price = parseInt(e.target.value) || 0
                                   setItems(newItems)
                                 }}
                               />
                            </td>
                            <td className="p-4 text-right">
                               <span className="text-xs font-bold text-foreground">₹{(item.qty * item.price).toLocaleString()}</span>
                            </td>
                            <td className="p-4 pr-8 text-right">
                               <button type="button" onClick={() => handleRemoveItem(item.id)} className="text-muted-foreground hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                  <Trash2 className="w-4 h-4" />
                               </button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </CardContent>
           </Card>
        </div>

        <div className="space-y-8">
           <Card className="bg-primary/5 border-primary/20 shadow-2xl rounded-[32px] sticky top-24">
              <CardHeader className="p-8 border-b border-primary/10">
                 <CardTitle className="text-sm uppercase tracking-widest">Financial Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                 <div className="space-y-4">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                       <span>Subtotal</span>
                       <span className="text-foreground">₹{calculateSubtotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                       <span>Tax (GST 18%)</span>
                       <span className="text-foreground">₹{calculateTax().toLocaleString()}</span>
                    </div>
                    <div className="h-px bg-white/10 my-4" />
                    <div className="flex justify-between text-2xl font-headline font-bold uppercase text-primary">
                       <span>Total</span>
                       <span>₹{calculateTotal().toLocaleString()}</span>
                    </div>
                 </div>

                 <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                       <Shield className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Policy Verification</span>
                    </div>
                    <p className="text-[9px] font-medium leading-relaxed text-muted-foreground uppercase">Standardized pricing protocols applied for Master Partner tier.</p>
                 </div>

                 <Button type="submit" disabled={isSubmitting} className="w-full h-14 btn-electric rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <>Generate Quotation <ArrowRight className="w-4 h-4 ml-2" /></>}
                 </Button>
              </CardContent>
           </Card>

           <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-6 shadow-xl">
              <div className="flex items-center gap-3 text-amber-500">
                 <Info className="w-5 h-5" />
                 <h4 className="text-[10px] font-bold uppercase tracking-widest">Commercial Protocol</h4>
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-medium">
                 Quotations converted to orders will automatically reserve batch inventory in the regional hub for 48 hours.
              </p>
           </Card>
        </div>
      </form>
    </div>
  )
}
