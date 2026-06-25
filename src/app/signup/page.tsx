"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShieldCheck, Mail, Lock, ArrowRight, Loader2, User, Building2, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function SignupPage() {
  const router = useRouter()
  const [vertical, setVertical] = useState<"user" | "partner">("user")
  const [loading, setLoading] = useState(false)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Registration Success",
        description: "Your profile has been created in the AZTEK registry.",
      })
      router.push("/login")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="w-full max-w-lg z-10 space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(0,102,255,0.4)] group-hover:scale-110 transition-all duration-500">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
          </Link>
          <div className="space-y-1">
            <h1 className="text-3xl font-headline font-bold uppercase tracking-tight text-foreground">Initiate <span className="text-primary italic">Profile</span></h1>
            <p className="text-xs text-muted-foreground uppercase font-bold tracking-[0.2em]">Register your identity within the AZTEK network</p>
          </div>
        </div>

        <Card className="bg-white/5 border-white/10 shadow-2xl overflow-hidden backdrop-blur-2xl rounded-[32px]">
          <CardHeader className="p-8 pb-0">
            {/* Vertical Switcher */}
            <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl mb-6">
              {(["user", "partner"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setVertical(v)}
                  className={cn(
                    "flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all",
                    vertical === v ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {v === 'user' ? 'Customer Profile' : 'Partner Network'}
                </button>
              ))}
            </div>
            
            {vertical === 'partner' ? (
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl space-y-4 mb-4">
                <div className="flex items-center gap-3 text-primary">
                  <Building2 className="w-5 h-5" />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Network Application Required</h4>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
                  AZTEK Partners are vetted through our Universal Onboarding System (UPOS). Standard account creation is reserved for verified studio owners.
                </p>
                <Button asChild variant="outline" className="w-full h-10 border-primary/30 text-primary text-[9px] uppercase font-bold hover:bg-primary hover:text-white rounded-xl">
                  <Link href="/partners/apply">Launch UPOS Gateway <ArrowRight className="ml-2 w-3 h-3" /></Link>
                </Button>
              </div>
            ) : (
              <CardDescription className="text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Verify your protection records and track installation lifecycles.
              </CardDescription>
            )}
          </CardHeader>

          {vertical === 'user' && (
            <CardContent className="p-8 pt-0 space-y-6">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Legal Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input required placeholder="First Name" className="bg-white/5 border-white/5 h-12 pl-12 rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground opacity-0 ml-1">Last Name</label>
                    <Input required placeholder="Last Name" className="bg-white/5 border-white/5 h-12 rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Communication Endpoint</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input type="email" required placeholder="name@domain.com" className="bg-white/5 border-white/5 h-12 pl-12 rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Create Encryption Key</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input type="password" required placeholder="Minimum 8 characters" className="bg-white/5 border-white/5 h-12 pl-12 rounded-xl" />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-primary/30 transition-all">
                  <Checkbox required id="terms" className="mt-1 data-[state=checked]:bg-primary" />
                  <label htmlFor="terms" className="text-[10px] font-medium leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                    I consent to the AZTEK <Link href="/legal" className="text-primary hover:underline">Data Protection Protocol</Link> and registry handling standards.
                  </label>
                </div>

                <Button type="submit" disabled={loading} className="w-full h-12 rounded-xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Activate Profile <ArrowRight className="ml-2 w-4 h-4" /></>}
                </Button>
              </form>
            </CardContent>
          )}
        </Card>

        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Already verified?{" "}
          <Link href="/login" className="text-primary hover:underline">Access terminal</Link>
        </p>
      </div>
    </div>
  )
}
