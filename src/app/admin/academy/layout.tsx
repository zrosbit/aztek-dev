"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname, useRouter } from "next/navigation"

export default function AcademyAdminLayout({
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
    { label: "Dashboard", value: "/admin/academy" },
    { label: "Partners", value: "/admin/academy/partners" },
    { label: "Curriculum", value: "/admin/academy/curriculum" },
    { label: "Assessments", value: "/admin/academy/assessments" },
    { label: "Practical Audits", value: "/admin/academy/audits" },
    { label: "Trainers", value: "/admin/academy/trainers" },
    { label: "Certifications", value: "/admin/academy/certifications" },
    { label: "Renewal Queue", value: "/admin/academy/renewals" },
  ]

  const activeValue = tabs.find(tab => tab.value === pathname)?.value || "/admin/academy"

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">Academy <span className="text-primary italic">Governance</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-relaxed max-w-2xl">Network-Wide Certification Tracking, Curriculum Engineering & Quality Standards</p>
        </div>

        {mounted ? (
          <Tabs value={activeValue} onValueChange={(v) => router.push(v)} className="w-full">
            <TabsList className="bg-white/5 border border-white/10 p-1 h-14 w-full justify-start overflow-x-auto scrollbar-hide">
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
