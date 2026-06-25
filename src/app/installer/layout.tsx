
"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { ShieldCheck, MapPin, ClipboardList, RefreshCw, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function InstallerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const nav = [
    { title: "Jobs", icon: MapPin, url: "/installer" },
    { title: "Sync", icon: RefreshCw, url: "/installer/sync" },
    { title: "Profile", icon: User, url: "/installer/profile" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#070B14] text-white overflow-hidden max-w-md mx-auto border-x border-white/5">
      {/* Mobile Header */}
      <header className="h-16 flex items-center px-6 border-b border-white/5 justify-between bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-headline font-bold text-lg tracking-widest uppercase">AZTEK <span className="text-primary italic">FIELD</span></span>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>

      {/* Native Bottom Nav */}
      <nav className="h-20 bg-black/80 backdrop-blur-2xl border-t border-white/10 fixed bottom-0 left-0 right-0 max-w-md mx-auto flex items-center justify-around px-6 z-50">
        {nav.map((item) => (
          <Link 
            key={item.url} 
            href={item.url}
            className={cn(
              "flex flex-col items-center gap-1 transition-all",
              pathname === item.url ? "text-primary scale-110" : "text-muted-foreground"
            )}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
