"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ShoppingCart, 
  Clock, 
  Truck, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  ArrowUpRight,
  PackageCheck,
  Zap,
  BarChart3
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts"

export default function OrderDashboard() {
  const kpis = [
    { label: "Active Orders", val: "142", sub: "National Queue", icon: ShoppingCart, color: "text-blue-500" },
    { label: "Fulfillment SLA", val: "94.2%", sub: "48H Window", icon: CheckCircle2, color: "text-green-500" },
    { label: "Pending Shipments", val: "28", sub: "Ready for Dispatch", icon: Truck, color: "text-amber-500" },
    { label: "Blocked Orders", val: "05", sub: "Credit/Stock Flags", icon: AlertTriangle, color: "text-red-500" }
  ]

  const chartData = [
    { name: "Mon", orders: 12 },
    { name: "Tue", orders: 18 },
    { name: "Wed", orders: 15 },
    { name: "Thu", orders: 22 },
    { name: "Fri", orders: 30 },
    { name: "Sat", orders: 25 },
    { name: "Sun", orders: 10 },
  ]

  return (
    <div className="space-y-8 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <Card key={k.label} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all group shadow-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className={cn("p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", k.color)}>
                  <k.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[8px] border-white/10 uppercase font-bold tracking-widest">Real-time</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{k.label}</p>
                <p className="text-3xl font-headline font-bold text-foreground">{k.val}</p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase">{k.sub}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl">
          <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
            <div className="space-y-1">
               <CardTitle className="text-sm uppercase tracking-widest">Order Intake Velocity</CardTitle>
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Daily wholesale request volume (Trailing 7 Days)</p>
            </div>
            <TrendingUp className="w-5 h-5 text-primary opacity-20" />
          </CardHeader>
          <CardContent className="p-8 pt-12">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0066FF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="orders" stroke="#0066FF" strokeWidth={3} fillOpacity={1} fill="url(#colorOrders)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 shadow-2xl">
          <CardHeader className="p-8 border-b border-white/5">
            <CardTitle className="text-sm uppercase tracking-widest">Logistics Pulse</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {[
              { msg: "Delayed Shipment: ORD-9921", type: "Hub-MUM", icon: Clock, color: "text-amber-500" },
              { msg: "Bulk Allocation Done: Skyline Hub", type: "Inventory", icon: PackageCheck, color: "text-blue-500" },
              { msg: "New Credit Hold: Rapid Delhi", type: "Finance", icon: Zap, color: "text-red-500" },
            ].map((alert, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/10 transition-all cursor-pointer group">
                <alert.icon className={cn("w-5 h-5 shrink-0", alert.color)} />
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{alert.msg}</p>
                  <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-muted-foreground">{alert.type} • Active Now</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full h-12 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/5 gap-2 mt-4">
               Access Logistics Terminal <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
