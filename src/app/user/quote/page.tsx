
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Calculator, 
  Car, 
  Bike, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Zap,
  Droplets,
  TrendingUp,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { EnergySavingsCalculator } from "@/components/architectural/energy-calculator"

export default function SmartQuotePage() {
  const [step, setStep] = useState(1)
  const [selection, setSelection] = useState<string | null>(null)
  const [useCalculator, setUseCalculator] = useState(false)

  const verticals = [
    { id: "auto", name: "Automotive", icon: Car, desc: "Luxury & Fleet Vehicles" },
    { id: "moto", name: "Motorcycle", icon: Bike, desc: "Supersport & ADV" },
    { id: "arch", name: "Architectural", icon: Building2, desc: "Commercial & Residential" },
  ]

  const packages = [
    { id: "full", name: "Full Body Armor", price: "₹1,25,000+", icon: Shield },
    { id: "impact", name: "Front Impact Zone", price: "₹45,000+", icon: Zap },
    { id: "ceramic", name: "9H Ceramic Matrix", price: "₹25,000+", icon: Droplets },
  ]

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground uppercase">Smart <span className="text-primary italic">Quote</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Instant project estimation for AZTEK protection</p>
        </div>
        
        {selection === 'arch' && (
          <div className="flex gap-3">
             <Button 
                variant="outline" 
                className={cn(
                  "h-12 border-primary/20 rounded-2xl text-[10px] uppercase font-bold gap-2 transition-all",
                  useCalculator ? "bg-primary text-white border-primary" : "bg-primary/5 text-primary"
                )}
                onClick={() => setUseCalculator(!useCalculator)}
              >
                {useCalculator ? <X className="w-4 h-4" /> : <Calculator className="w-4 h-4" />}
                {useCalculator ? "Exit ROI Terminal" : "Advanced Energy ROI"}
              </Button>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto">
        {!useCalculator ? (
          <div className="max-w-4xl mx-auto space-y-12">
             {/* Progress Track */}
             <div className="flex items-center justify-between px-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 flex-1 last:flex-none">
                     <div className={cn(
                       "w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all duration-500",
                       step >= i ? "bg-primary border-primary text-white shadow-[0_0_15px_#0066FF]" : "border-white/10 text-muted-foreground"
                     )}>
                        {step > i ? <CheckCircle2 className="w-4 h-4" /> : `0${i}`}
                     </div>
                     {i < 3 && <div className={cn("h-0.5 flex-1 rounded-full", step > i ? "bg-primary" : "bg-white/10")} />}
                  </div>
                ))}
             </div>

             <Card className="bg-white/5 border-white/10 p-12 shadow-2xl relative overflow-hidden rounded-[32px]">
                <CardContent className="space-y-12 p-0 relative z-10">
                   {step === 1 && (
                     <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center space-y-3">
                           <h3 className="text-2xl font-headline font-bold uppercase text-foreground">Select Industry Vertical</h3>
                           <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Choose the environment for protection</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           {verticals.map((v) => (
                             <button
                               key={v.id}
                               onClick={() => { setSelection(v.id); setStep(2); }}
                               className={cn(
                                 "p-8 rounded-3xl border transition-all duration-500 group flex flex-col items-center gap-6 text-center",
                                 selection === v.id ? "bg-primary/20 border-primary shadow-[0_0_30px_rgba(0,102,255,0.2)]" : "bg-white/5 border-white/5 hover:border-primary/30"
                               )}
                             >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                   <v.icon className={cn("w-8 h-8 text-primary group-hover:text-white", selection === v.id && "text-white")} />
                                </div>
                                <div>
                                   <h4 className="font-bold text-sm uppercase tracking-widest text-foreground">{v.name}</h4>
                                   <p className="text-[10px] text-muted-foreground font-bold uppercase mt-1 leading-tight">{v.desc}</p>
                                </div>
                             </button>
                           ))}
                        </div>
                     </div>
                   )}

                   {step === 2 && (
                     <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center space-y-3">
                           <h3 className="text-2xl font-headline font-bold uppercase text-foreground">Package Configuration</h3>
                           <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Select protection coverage level</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                           {packages.map((p) => (
                             <button
                               key={p.id}
                               onClick={() => setStep(3)}
                               className="w-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all flex items-center justify-between group"
                             >
                                <div className="flex items-center gap-6">
                                   <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                      <p.icon className="w-5 h-5" />
                                   </div>
                                   <div className="text-left">
                                      <h4 className="font-bold text-sm uppercase tracking-widest text-foreground">{p.name}</h4>
                                      <p className="text-[10px] text-muted-foreground uppercase font-bold">Standard Professional Fit</p>
                                   </div>
                                </div>
                                <div className="text-right">
                                   <p className="text-lg font-headline font-bold text-primary">{p.price}</p>
                                   <p className="text-[9px] text-muted-foreground uppercase font-bold">Estimated Cost</p>
                                </div>
                             </button>
                           ))}
                        </div>
                        <Button variant="ghost" onClick={() => setStep(1)} className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground hover:text-foreground">
                           Back to verticals
                        </Button>
                     </div>
                   )}

                   {step === 3 && (
                     <div className="space-y-10 text-center animate-in fade-in zoom-in-95 duration-700">
                        <div className="w-20 h-20 rounded-[32px] bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                           <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                        <div className="space-y-3">
                           <h3 className="text-3xl font-headline font-bold uppercase text-foreground">Estimate Initialized</h3>
                           <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed font-medium uppercase tracking-tight">Your project parameters have been mapped. To finalize this quote and book an install slot, transmit this to your regional hub.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                           <Button variant="outline" className="h-14 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10" onClick={() => {setStep(1); setSelection(null); setUseCalculator(false);}}>Start Over</Button>
                           <Button variant="gradient" className="h-14 px-12 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">Contact Nearest Hub Hub <ArrowRight className="w-4 h-4 ml-2" /></Button>
                        </div>
                     </div>
                   )}
                </CardContent>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.05),transparent_70%)] pointer-events-none" />
             </Card>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="mb-12 text-center space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase font-bold tracking-[0.4em] px-6 py-2 rounded-full">ROI Analytics Hub</Badge>
                <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter leading-none">Building <span className="text-primary italic">Energy ROI</span></h2>
                <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.3em]">Detailed carbon reduction and payback analysis terminal</p>
             </div>
             <EnergySavingsCalculator />
          </div>
        )}
      </div>
    </div>
  )
}
