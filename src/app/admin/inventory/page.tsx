"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Warehouse, 
  AlertTriangle, 
  Activity,
  Plus,
  Boxes,
  ClipboardList,
  TrendingUp,
  History,
  ShieldCheck,
  PackageCheck,
  Truck
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts"
import Link from "next/link"

export default function AdminInventoryDashboard() {
  const kpis = [
    { label: "Inventory Value", val: "₹2.42 Cr", sub: "National Network", icon: Warehouse, color: "text-blue-500" },
    { label: "Active SKUs", val: "158", sub: "Verified Master", icon: Boxes, color: "text-green-500" },
    { label: "Low Stock Alerts", val: "09", sub: "Action Required", icon: AlertTriangle, color: "text-amber-500" },
    { label: "Pending POs", val: "05", sub: "Awaiting Receipt", icon: ClipboardList, color: "text-purple-500" }
  ]

  const warehouseUtilization = [
    { name: "Bengaluru HQ", val: 85, color: "#0066FF" },
    { name: "Mumbai Hub", val: 62, color: "#22C55E" },
    { name: "Delhi Hub", val: 78, color: "#F59E0B" },
  ]

  const regionalStock = [
    { cat: "PPF", BLR: 420, MUM: 210, DEL: 305 },
    { cat: "Ceramic", BLR: 150, MUM: 85, DEL: 110 },
    { cat: "Tools", BLR: 95, MUM: 45, DEL: 60 },
  ]

  const flowData = [
    { month: "Jan", in: 120, out: 85 },
    { month: "Feb", in: 140, out: 110 },
    { month: "Mar", in: 110, out: 130 },
    { month: "Apr", in: 160, out: 145 },
    { month: "May", in: 190, out: 170 },
    { month: "Jun", in: 210, out: 185 },
  ]

  return (
    <div className="space-y-8 pb-20">
      <div className="flex justify-end gap-3">
        <Button variant="outline" asChild className="h-12 border-white/10 bg-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2">
           <Link href="/admin/inventory/tracking"><History className="w-4 h-4" /> Movement Ledger</Link>
        </Button>
        <Button variant="gradient" className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl rounded-2xl">
           <Plus className="w-4 h-4" /> Create Purchase Order
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {kpis.map((k) => (
           <Card key={k.label} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all group shadow-2xl">
              <CardContent className="p-6 space-y-4">
                 <div className="flex items-center justify-between">
                    <div className={cn("p-3 rounded-xl bg-white/5 border border-white/10", k.color)}>
                       <k.icon className="w-5 h-5" />
                    </div>
                    {k.label === "Low Stock Alerts" && (
                      <Badge className="bg-amber-500 text-white border-none animate-pulse">Critical</Badge>
                    )}
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{k.label}</p>
                    <p className="text-3xl font-headline font-bold text-foreground">{k.val}</p>
                    <p className="text-[10px] text-muted-foreground font-medium">{k.sub}</p>
                 </div>
              </CardContent>
           </Card>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl">
          <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
            <div className="space-y-1">
               <CardTitle className="text-sm uppercase tracking-widest">Network Flow Analytics</CardTitle>
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Inbound (Procurement) vs. Outbound (Allocations)</p>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-12">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={flowData}>
                  <defs>
                    <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0066FF" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22C55E" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="in" name="Inbound" stroke="#0066FF" fillOpacity={1} fill="url(#colorIn)" />
                  <Area type="monotone" dataKey="out" name="Outbound" stroke="#22C55E" fillOpacity={1} fill="url(#colorOut)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 shadow-2xl">
          <CardHeader className="p-8 border-b border-white/5">
             <CardTitle className="text-sm uppercase tracking-widest">Warehouse Status</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
             {warehouseUtilization.map((w) => (
               <div key={w.name} className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-foreground">{w.name}</span>
                     <span className="text-muted-foreground">{w.val}% Capacity</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full transition-all duration-1000" style={{ width: `${w.val}%`, backgroundColor: w.color }} />
                  </div>
               </div>
             ))}
             <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-4 text-primary mb-4">
                   <ShieldCheck className="w-5 h-5" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Security Scan Active</span>
                </div>
                <p className="text-[10px] text-muted-foreground uppercase leading-relaxed font-bold">
                   All 3 nodes reporting stable environmental conditions for film storage.
                </p>
             </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <Card className="bg-white/5 border-white/10 shadow-2xl">
           <CardHeader className="p-8 border-b border-white/5">
              <CardTitle className="text-sm uppercase tracking-widest">National Stock Matrix</CardTitle>
           </CardHeader>
           <CardContent className="p-8">
             <div className="h-[240px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={regionalStock} barGap={8}>
                   <XAxis dataKey="cat" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                   <YAxis hide />
                   <Tooltip 
                     cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                     contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                   />
                   <Bar name="BLR" dataKey="BLR" fill="#0066FF" radius={[4, 4, 0, 0]} />
                   <Bar name="MUM" dataKey="MUM" fill="#22C55E" radius={[4, 4, 0, 0]} />
                   <Bar name="DEL" dataKey="DEL" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                 </BarChart>
               </ResponsiveContainer>
             </div>
           </CardContent>
         </Card>

         <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl overflow-hidden">
            <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
               <div className="space-y-1">
                  <CardTitle className="text-sm uppercase tracking-widest">Critical Reorder Queue</CardTitle>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">SKUs below safety threshold at node level</p>
               </div>
               <Badge className="bg-red-500 text-white border-none animate-pulse">09 Critical</Badge>
            </CardHeader>
            <div className="p-0">
               <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/5">
                     <tr>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Product SKU</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Hub</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Available</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Threshold</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Action</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                     {[
                        { sku: "AZ-AUTO-PPF-ULTRA", hub: "DEL Hub", val: 12, min: 30, status: "Critical" },
                        { sku: "AZ-AUTO-CER-GOLD", hub: "MUM Hub", val: 15, min: 40, status: "Warning" },
                        { sku: "AZ-MOTO-KIT-FULL", hub: "BLR HQ", val: 8, min: 25, status: "Critical" },
                     ].map((item, i) => (
                       <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-6 font-mono text-xs font-bold text-primary">{item.sku}</td>
                          <td className="p-6 text-xs font-bold uppercase">{item.hub}</td>
                          <td className="p-6 text-center font-headline font-bold text-red-500">{item.val}</td>
                          <td className="p-6 text-center text-xs text-muted-foreground font-bold">{item.min}</td>
                          <td className="p-6 text-right">
                             <Button size="sm" variant="outline" className="h-8 text-[8px] uppercase font-bold border-white/10">Generate PO</Button>
                          </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </Card>
      </div>
    </div>
  )
}
