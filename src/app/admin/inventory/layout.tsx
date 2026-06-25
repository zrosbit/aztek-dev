"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export default function InventoryAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const tabs = [
    { label: "Dashboard", value: "/admin/inventory" },
    { label: "Product Catalog", value: "/admin/inventory/products" },
    { label: "Procurement & Allocations", value: "/admin/inventory/supply-chain" },
    { label: "Movements & Audit", value: "/admin/inventory/tracking" },
  ]

  const activeValue = tabs.find(tab => tab.value === pathname)?.value || "/admin/inventory"

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">Inventory <span className="text-primary italic">Command</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest text-[10px] font-bold">National Supply Chain & 3-Node Warehouse Oversight</p>
        </div>

        {mounted ? (
          <Tabs value={activeValue} onValueChange={(v) => router.push(v)} className="w-full">
            <TabsList className="bg-white/5 border border-white/10 p-1 h-14 w-full md:w-auto justify-start overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value}
                  className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all whitespace-nowrap"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        ) : (
          <div className="h-14 w-full bg-white/5 border border-white/10 rounded-2xl animate-pulse" />
        )}
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {children}
      </div>
    </div>
  )
}
