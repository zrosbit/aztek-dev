"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { 
  Package, 
  Search, 
  ShoppingCart, 
  Minus, 
  Plus, 
  MapPin, 
  Medal, 
  Filter,
  ArrowRight,
  Shield,
  Droplets,
  Wrench,
  Building2,
  CheckCircle2,
  Zap,
  Truck,
  History,
  AlertTriangle,
  Loader2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const products = [
  {
    id: "AZ-AUTO-PPF-ULTRA",
    name: "AZTEK Pro Ultra PPF (15m Roll)",
    specs: "Self-Healing • Hydrophobic • 10-Year Warranty",
    price: 45000,
    category: "Films",
    icon: Shield,
    stock: "In Stock",
    statusColor: "text-green-500"
  },
  {
    id: "AZ-AUTO-PPF-MATTE",
    name: "AZTEK Matte Finish PPF (15m Roll)",
    specs: "Premium Satin Finish • Self-Healing",
    price: 52000,
    category: "Films",
    icon: Shield,
    stock: "In Stock",
    statusColor: "text-green-500"
  },
  {
    id: "AZ-AUTO-CER-GOLD",
    name: "9H Nano-Ceramic Gold (30ml)",
    specs: "5-Year Durability • Ultra High Gloss",
    price: 6500,
    category: "Ceramics",
    icon: Droplets,
    stock: "Available",
    statusColor: "text-green-500"
  },
  {
    id: "AZ-MOTO-KIT-FULL",
    name: "Moto Shield Pro (Precision Kit)",
    specs: "Full Body Armor • Fitment Verified",
    price: 12500,
    category: "Motorcycle",
    icon: Zap,
    stock: "Ready to Ship",
    statusColor: "text-green-500"
  },
  {
    id: "AZ-TOOL-PRO-SET",
    name: "Pro-Grip Squeegee Set",
    specs: "Professional Installation Kit",
    price: 1200,
    category: "Tools",
    icon: Wrench,
    stock: "Available",
    statusColor: "text-green-500"
  }
]

export default function InventoryHubPage() {
  const [cart, setCart] = useState<Record<string, number>>({})
  const [activeCategory, setActiveCategory] = useState("All")
  const [isOrdering, setIsOrdering] = useState(false)

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }))
  }

  const subtotal = products.reduce((acc, p) => acc + (cart[p.id] || 0) * p.price, 0)
  const discount = subtotal * 0.1
  const total = subtotal - discount

  const categories = ["All", "Films", "Ceramics", "Motorcycle", "Tools"]

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const handlePlaceOrder = () => {
    setIsOrdering(true)
    setTimeout(() => {
      setIsOrdering(false)
      setCart({})
      toast({
        title: "Order Submitted",
        description: "Replenishment request transmitted to Bengaluru HQ. Tracking ID: ORD-9945.",
      })
    }, 2000)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Inventory <span className="text-primary italic">Hub</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Wholesale Material Replenishment & Fulfillment Terminal</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-bold uppercase text-primary tracking-widest">Fulfilment Hub: Bengaluru HQ (2 Days)</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="catalog" className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto">
          <TabsTrigger value="catalog" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            <Package className="w-4 h-4" /> Material Catalog
          </TabsTrigger>
          <TabsTrigger value="orders" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            <Truck className="w-4 h-4" /> Shipments
          </TabsTrigger>
          <TabsTrigger value="history" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">
            <History className="w-4 h-4" /> Order History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="catalog" className="animate-in fade-in duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search catalog by SKU or Description..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={activeCategory === cat ? "default" : "outline"}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "h-14 px-6 text-[10px] font-bold uppercase tracking-widest rounded-2xl",
                        activeCategory !== cat && "border-white/10 bg-white/5"
                      )}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all group overflow-hidden flex flex-col shadow-2xl">
                    <CardHeader className="p-8 pb-4">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                          <product.icon className="w-6 h-6" />
                        </div>
                        <Badge variant="outline" className="text-[8px] uppercase font-bold tracking-widest border-white/10">{product.category}</Badge>
                      </div>
                      <CardTitle className="text-sm font-bold uppercase tracking-widest leading-tight group-hover:text-primary transition-colors h-10 line-clamp-2">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-[10px] font-medium text-muted-foreground uppercase h-8 line-clamp-2 mt-2">
                        {product.specs}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 mt-auto space-y-8">
                      <div className="flex items-end justify-between border-t border-white/5 pt-6">
                        <div className="space-y-1">
                          <p className="text-[10px] text-muted-foreground uppercase font-bold">Wholesale Unit</p>
                          <p className="text-xl font-headline font-bold">₹{product.price.toLocaleString()}</p>
                        </div>
                        
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-1 shadow-inner">
                          <button 
                            onClick={() => updateQuantity(product.id, -1)}
                            className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{cart[product.id] || 0}</span>
                          <button 
                            onClick={() => updateQuantity(product.id, 1)}
                            className="w-9 h-9 rounded-lg bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-all shadow-lg"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={cn("w-1.5 h-1.5 rounded-full", product.statusColor.replace('text', 'bg'))} />
                          <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">{product.stock}</span>
                        </div>
                        <Badge variant="secondary" className="bg-white/5 text-[8px] uppercase tracking-widest font-mono">SKU: {product.id}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <Card className="bg-primary/5 border-primary/20 shadow-2xl sticky top-24">
                <CardHeader className="p-8 border-b border-primary/10">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                    <CardTitle className="text-sm uppercase tracking-widest">Order Summary</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  {subtotal === 0 ? (
                    <div className="py-12 text-center space-y-4">
                      <Package className="w-12 h-12 text-muted-foreground/20 mx-auto" />
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">Select materials to build your replenishment order.</p>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                      {products.map(p => cart[p.id] > 0 && (
                        <div key={p.id} className="flex justify-between items-start text-xs border-b border-white/5 pb-4 last:border-0">
                          <div className="flex-1 pr-4">
                            <p className="font-bold text-foreground uppercase tracking-tighter line-clamp-1">{p.name}</p>
                            <p className="text-[10px] text-muted-foreground mt-1">{cart[p.id]} x ₹{p.price.toLocaleString()}</p>
                          </div>
                          <span className="font-bold text-primary">₹{(cart[p.id] * p.price).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <span>Subtotal</span>
                      <span className="text-foreground">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-primary">
                      <span>Gold Tier Disc (10%)</span>
                      <span>- ₹{discount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-lg font-headline font-bold uppercase border-t border-white/10 pt-6">
                      <span>Total</span>
                      <span className="text-primary">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    disabled={subtotal === 0 || isOrdering} 
                    variant="gradient" 
                    className="w-full h-14 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl mt-4"
                    onClick={handlePlaceOrder}
                  >
                    {isOrdering ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Finalize Replenishment <ArrowRight className="w-4 h-4 ml-2" /></>}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 shadow-2xl p-8 space-y-6">
                 <div className="flex items-center gap-3 text-muted-foreground">
                    <AlertTriangle className="w-5 h-5" />
                    <h4 className="text-[10px] font-bold uppercase tracking-widest leading-none">Usage Policy</h4>
                 </div>
                 <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-medium">
                    Replenishment orders are automatically reconciled against your reported job consumption metrics in the Connect project workspace.
                 </p>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="orders" className="animate-in fade-in duration-500">
           <div className="max-w-4xl mx-auto space-y-6">
              {[
                { id: "ORD-9942", date: "16 Jun 2026", status: "In Transit", eta: "Jun 18", items: "12 Items", hub: "Bengaluru HQ" },
                { id: "ORD-9921", date: "10 Jun 2026", status: "Delivered", eta: "Jun 12", items: "5 Items", hub: "Bengaluru HQ" },
              ].map((order) => (
                <Card key={order.id} className="bg-white/5 border-white/10 p-8 shadow-xl hover:border-primary/30 transition-all group">
                   <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex items-center gap-6">
                         <div className={cn(
                            "w-14 h-14 rounded-2xl flex items-center justify-center border",
                            order.status === "In Transit" ? "bg-blue-500/10 border-blue-500/20 text-blue-500 animate-pulse" : "bg-green-500/10 border-green-500/20 text-green-500"
                         )}>
                            <Truck className="w-6 h-6" />
                         </div>
                         <div className="space-y-1">
                            <p className="font-mono text-xs font-bold text-primary">{order.id}</p>
                            <h4 className="text-xl font-bold uppercase tracking-tighter text-foreground">{order.items}</h4>
                            <p className="text-[10px] text-muted-foreground uppercase font-bold">Shipped from {order.hub}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-12 text-right">
                         <div className="space-y-1">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase">Estimated Arrival</p>
                            <p className="text-sm font-bold text-foreground">{order.eta}</p>
                         </div>
                         <Button variant="outline" className="h-12 px-8 rounded-xl border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-widest">Track Box</Button>
                      </div>
                   </div>
                </Card>
              ))}
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
