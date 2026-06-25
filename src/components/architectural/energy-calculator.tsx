
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Thermometer, Leaf, Clock, ArrowRight, Info, Zap, Building2, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

const CITIES = [
  { name: "New Delhi", factor: 1.4, rate: 8.5 },
  { name: "Mumbai", factor: 1.2, rate: 10.2 },
  { name: "Bengaluru", factor: 1.0, rate: 7.8 },
  { name: "Chennai", factor: 1.3, rate: 8.1 },
  { name: "Hyderabad", factor: 1.2, rate: 7.5 },
  { name: "Ahmedabad", factor: 1.4, rate: 7.2 },
  { name: "Pune", factor: 1.1, rate: 9.5 },
  { name: "Kolkata", factor: 1.2, rate: 8.4 },
]

export function EnergySavingsCalculator() {
  const [inputs, setInputs] = useState({
    buildingType: "",
    area: "",
    unit: "sqft",
    status: "",
    city: "",
    acCost: ""
  })
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate lead generation and calculation latency
    setTimeout(() => {
      const cityData = CITIES.find(c => c.name === inputs.city) || CITIES[2]
      const glassArea = parseFloat(inputs.area) * (inputs.unit === "sqm" ? 10.764 : 1)
      
      // Multiplier based on current film status
      const statusMultiplier = inputs.status === "old" ? 0.6 : 1.0 // If old film, improvement is lower
      
      // Constants based on PRD A4
      const solarCostRatio = 0.35 // 35% of HVAC attributable to solar gain
      const filmIRR = 0.8 // 80% reduction in solar gain per AZTEK spec
      const co2Factor = 0.85 // kg CO2 per kWh
      const installedCostPerSqft = 165 // Base SKU price
      
      let annualSaving = 0
      
      if (inputs.acCost) {
        // Calculation based on reported AC costs
        const monthlyCost = parseFloat(inputs.acCost)
        annualSaving = (monthlyCost * 12) * solarCostRatio * filmIRR * statusMultiplier
      } else {
        // Calculation based on area and climate factors
        const baseKwhSavingPerSqft = 1.8 // Avg baseline
        const totalKwhSaved = glassArea * baseKwhSavingPerSqft * cityData.factor * statusMultiplier
        annualSaving = totalKwhSaved * cityData.rate
      }

      const totalInvestment = glassArea * installedCostPerSqft
      const monthlySaving = annualSaving / 12
      const paybackMonths = (totalInvestment / monthlySaving).toFixed(0)
      const co2Saved = (annualSaving / cityData.rate) * co2Factor

      setResult({
        minSaving: (annualSaving * 0.9).toLocaleString('en-IN', { maximumFractionDigits: 0 }),
        maxSaving: (annualSaving * 1.1).toLocaleString('en-IN', { maximumFractionDigits: 0 }),
        payback: paybackMonths,
        co2: co2Saved.toLocaleString('en-IN', { maximumFractionDigits: 0 }),
        monthlyBefore: inputs.acCost ? parseFloat(inputs.acCost) : (annualSaving / 12) / (solarCostRatio * filmIRR),
        monthlyAfter: inputs.acCost ? (parseFloat(inputs.acCost) - (annualSaving / 12)) : ((annualSaving / 12) / (solarCostRatio * filmIRR)) - (annualSaving / 12)
      })

      setLoading(false)
      toast({
        title: "ROI Analysis Complete",
        description: "Your technical savings matrix has been generated.",
      })
    }, 1200)
  }

  return (
    <div className="max-w-6xl mx-auto px-6">
      <Card className="bg-white/5 border-white/10 shadow-2xl rounded-[40px] overflow-hidden border">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Inputs Section */}
          <div className="lg:col-span-2 p-10 border-b lg:border-b-0 lg:border-r border-white/10 bg-white/[0.02]">
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.2em] text-[9px] font-bold">A4 Module Terminal</Badge>
                <h3 className="text-3xl font-headline font-bold uppercase tracking-tight">Savings <br /><span className="text-primary italic">Calculator</span></h3>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest leading-relaxed">Quantify the financial case for AZTEK technology.</p>
              </div>

              <form onSubmit={handleCalculate} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Building Vertical</label>
                  <Select required onValueChange={(v) => setInputs({...inputs, buildingType: v})}>
                    <SelectTrigger className="h-12 bg-background/50 border-white/10 rounded-xl">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent className="glass">
                      <SelectItem value="commercial">Commercial Office</SelectItem>
                      <SelectItem value="residential">Premium Residential</SelectItem>
                      <SelectItem value="retail">Retail / Showroom</SelectItem>
                      <SelectItem value="institutional">Institutional</SelectItem>
                      <SelectItem value="industrial">Industrial Facility</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Total Glass Area</label>
                    <div className="relative">
                      <Input 
                        required 
                        type="number" 
                        placeholder="e.g. 5000" 
                        className="h-12 bg-background/50 border-white/10 rounded-xl pr-16"
                        value={inputs.area}
                        onChange={(e) => setInputs({...inputs, area: e.target.value})}
                      />
                      <button 
                        type="button"
                        onClick={() => setInputs({...inputs, unit: inputs.unit === "sqft" ? "sqm" : "sqft"})}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-bold uppercase bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        {inputs.unit}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Location / City</label>
                    <Select required onValueChange={(v) => setInputs({...inputs, city: v})}>
                      <SelectTrigger className="h-12 bg-background/50 border-white/10 rounded-xl">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent className="glass">
                        {CITIES.map(c => <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Current Film Status</label>
                  <Select required onValueChange={(v) => setInputs({...inputs, status: v})}>
                    <SelectTrigger className="h-12 bg-background/50 border-white/10 rounded-xl">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent className="glass">
                      <SelectItem value="none">No Film (Baseline)</SelectItem>
                      <SelectItem value="old">Old or Degraded Film</SelectItem>
                      <SelectItem value="unknown">Don't Know</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Avg. Monthly HVAC Cost (₹) <span className="opacity-40 font-normal italic">— Optional</span></label>
                  <Input 
                    type="number" 
                    placeholder="e.g. 45000" 
                    className="h-12 bg-background/50 border-white/10 rounded-xl"
                    value={inputs.acCost}
                    onChange={(e) => setInputs({...inputs, acCost: e.target.value})}
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full h-14 btn-electric rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl mt-4">
                  {loading ? "Analyzing Environmental Matrix..." : <>Calculate My Savings <ArrowRight className="ml-2 w-4 h-4" /></>}
                </Button>
              </form>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3 p-10 flex flex-col justify-center bg-background/40 relative">
            {result ? (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[10px] font-bold uppercase text-primary tracking-[0.3em]">Estimated Annual Savings</h4>
                    <Info className="w-3 h-3 text-muted-foreground opacity-50" />
                  </div>
                  <div className="flex flex-col md:flex-row items-baseline gap-4">
                    <span className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter text-foreground">
                      ₹{result.minSaving}
                    </span>
                    <span className="text-xl md:text-2xl text-muted-foreground font-medium uppercase tracking-tighter">
                      to ₹{result.maxSaving}*
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-3xl glass border-white/5 space-y-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Simple Payback</span>
                    </div>
                    <p className="text-2xl font-headline font-bold uppercase">{result.payback} <span className="text-xs text-muted-foreground">Months</span></p>
                  </div>
                  <div className="p-6 rounded-3xl glass border-white/5 space-y-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-green-500/10 text-green-500">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Sustainability Impact</span>
                    </div>
                    <p className="text-2xl font-headline font-bold uppercase text-green-500">{result.co2} <span className="text-xs opacity-60">kg CO2 / yr</span></p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Monthly Cooling Expenditure</h4>
                    <Badge variant="outline" className="text-[8px] uppercase border-white/10 opacity-50">Comparative Matrix</Badge>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest">
                        <span>Without AZTEK Defense</span>
                        <span>₹{Math.round(result.monthlyBefore).toLocaleString()}</span>
                      </div>
                      <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div className="h-full bg-white/20 w-full" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-primary">
                        <span>With AZTEK Intelligent Shield</span>
                        <span>₹{Math.round(result.monthlyAfter).toLocaleString()}</span>
                      </div>
                      <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div className="h-full bg-primary w-[65%] shadow-[0_0_20px_rgba(0,102,255,0.4)]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-1">
                    <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">*Disclaimer</p>
                    <p className="text-[10px] font-medium text-muted-foreground leading-relaxed uppercase">Estimate based on industry climate data. Request a technical site assessment for binding ROI figures.</p>
                  </div>
                  <Button className="h-14 px-12 rounded-full btn-electric text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl group/btn shrink-0">
                    Get An Exact Quote <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 p-12 border-2 border-dashed border-white/5 rounded-[40px] bg-white/[0.01]">
                <div className="w-20 h-20 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                  <Calculator className="w-10 h-10 text-muted-foreground opacity-20" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-headline font-bold uppercase text-foreground">Awaiting Parameters</h4>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest max-w-xs mx-auto leading-relaxed">
                    Input your facility specifications to initialize the technical ROI analysis terminal.
                  </p>
                </div>
              </div>
            )}
            
            {/* Background Branding Overlay */}
            <Building2 className="absolute -bottom-20 -right-20 w-80 h-80 text-primary opacity-5 -rotate-12 pointer-events-none" />
          </div>
        </div>
      </Card>
    </div>
  )
}
