"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ShieldCheck, User, LayoutDashboard, Shield, ChevronUp, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function PrototypeSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const roles = [
    { label: "Public Website", icon: Globe, url: "/", color: "text-blue-400" },
    { label: "Partner OS", icon: LayoutDashboard, url: "/connect/dashboard", color: "text-blue-500" },
    { label: "Admin Control", icon: Shield, url: "/admin", color: "text-purple-500" },
    { label: "Client Access", icon: User, url: "/user/dashboard", color: "text-green-500" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-card border border-white/10 p-3 rounded-2xl shadow-2xl flex flex-col gap-1 min-w-[200px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest px-3 py-1 mb-1">Prototype Role Switcher</p>
          {roles.map((role) => (
            <button
              key={role.label}
              onClick={() => {
                router.push(role.url)
                setIsOpen(false)
              }}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all hover:bg-white/5",
                pathname.startsWith(role.url) && role.url !== "/" || (role.url === "/" && pathname === "/") 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <role.icon className={cn("w-4 h-4", role.color)} />
              <span className="text-[11px] font-bold uppercase tracking-widest">{role.label}</span>
            </button>
          ))}
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-2xl bg-primary shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center justify-center border border-white/10 group"
      >
        <ChevronUp className={cn("w-6 h-6 transition-transform duration-500", isOpen ? "rotate-180" : "rotate-0")} />
      </Button>
    </div>
  )
}