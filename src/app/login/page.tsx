"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShieldCheck, Mail, Lock, ArrowRight, Loader2, Globe, Github, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const [vertical, setVertical] = useState<"user" | "partner" | "admin">("user")
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate vertical-aware routing
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Access Authorized",
        description: `Redirecting to ${vertical.toUpperCase()} terminal...`,
      })
      
      if (vertical === "admin") router.push("/admin")
      else if (vertical === "partner") router.push("/connect/dashboard")
      else router.push("/user/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="w-full max-w-md z-10 space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(0,102,255,0.4)] group-hover:scale-110 transition-all duration-500">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
          </Link>
          <div className="space-y-1">
            <h1 className="text-3xl font-headline font-bold uppercase tracking-tight text-foreground">Authorized <span className="text-primary italic">Access</span></h1>
            <p className="text-xs text-muted-foreground uppercase font-bold tracking-[0.2em]">Secure Entry to AZTEK Protection Ecosystem</p>
          </div>
        </div>

        <Card className="bg-white/5 border-white/10 shadow-2xl overflow-hidden backdrop-blur-2xl rounded-[32px]">
          <CardHeader className="p-8 pb-0">
            {/* Vertical Switcher */}
            <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl mb-6">
              {(["user", "partner", "admin"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setVertical(v)}
                  className={cn(
                    "flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all",
                    vertical === v ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
            <CardDescription className="text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {vertical === "user" ? "Manage your protected assets & records" : 
               vertical === "partner" ? "Connect OS: CRM, Academy & Inventory" : 
               "Corporate Infrastructure Control"}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8 pt-6 space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Identity Endpoint</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="email" 
                    required 
                    placeholder="name@nexus.com" 
                    className="bg-white/5 border-white/5 h-12 pl-12 rounded-xl focus:ring-primary/40"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Encryption Key</label>
                  <button type="button" className="text-[9px] font-bold uppercase text-primary hover:underline">Forgot?</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="password" 
                    required 
                    placeholder="••••••••" 
                    className="bg-white/5 border-white/5 h-12 pl-12 rounded-xl focus:ring-primary/40"
                  />
                </div>
              </div>
              <Button type="submit" disabled={loading} className="w-full h-12 rounded-xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl group">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Initialize Session <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
              <div className="relative flex justify-center text-[10px] font-bold uppercase"><span className="bg-background px-4 text-muted-foreground">External Auth</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 border-white/5 bg-white/5 hover:bg-white/10 rounded-xl gap-3">
                <Chrome className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase">Google</span>
              </Button>
              <Button variant="outline" className="h-12 border-white/5 bg-white/5 hover:bg-white/10 rounded-xl gap-3">
                <Github className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase">Github</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          New to the ecosystem?{" "}
          <Link href="/signup" className="text-primary hover:underline">Create authorized profile</Link>
        </p>
      </div>
    </div>
  )
}
