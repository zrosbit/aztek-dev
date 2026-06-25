
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Map as MapIcon, 
  Users, 
  ShieldCheck, 
  Zap,
  ArrowUpRight,
  Loader2,
  BrainCircuit,
  Info,
  ChevronRight,
  Trophy,
  Filter,
  Download,
  Calendar
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, Cell, PieChart, Pie, Legend } from "recharts"
import { generateExecutiveInsights, type BIInsightOutput } from "@/ai/flows/executive-bi-insights"

export default function ExecutiveBIDashboard() {
  const [loading, setLoading] = useState(false)
  const [insights, setInsights] = useState<BIInsightOutput | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const revenueData = [
    { month: "Jul '23", PPF: 42, Ceramic: 18, Window: 12, Moto: 8, Arch: 5 },
    { month: "Sep '23", PPF: 45, Ceramic: 22, Window: 14, Moto: 10, Arch: 7 },
    { month: "Nov '23", PPF: 52, Ceramic: 25, Window: 18, Moto: 12, Arch: 10 },
    { month: "Jan '24", PPF: 58, Ceramic: 28, Window: 22, Moto: 15, Arch: 14 },
    { month: "Mar '24", PPF: 65, Ceramic: 32, Window: 25, Moto: 18, Arch: 18 },
    { month: "May '24", PPF: 78, Ceramic: 38, Window: 30, Moto: 22, Arch: 25 },
  ]

  const partnerRankings = [
    { name: "Elite Wraps Bangalore", rev: "₹42.5L", conv: "72%", quality: 98.4, claims: "0.8%" },
    { name: "Mumbai Detailing Hub", rev: "₹38.2L", conv: "68%", quality: 96.2, claims: "1.2%" },
    { name: "Delhi Arch Shield", rev: "₹31.4L", conv: "54%", quality: 94.5, claims: "1.4%" },
    { name: "Pune Moto Pro", rev: "₹22.8L", conv: "48%", quality: 91.0, claims: "2.8%" },
  ]

  const regionalHeat = [
    { region: "South (KA/TN)", val: 142, density: "High", growth: "+18%" },
    { region: "West (MH/GJ)", val: 98, density: "Medium", growth: "+12%" },
    { region: "North (DL/HR)", val: 76, density: "Medium", growth: "+24%" },
    { region: "East (WB)", val: 22, density: "Low", growth: "+4%" },
  ]

  const mockBIInput = {
    partnerPerformance: [
      { partnerId: "p1", partnerName: "Elite Wraps Bangalore", revenueMTD: 4250000, claimRate: 0.8, leadConversionRate: 72, activeJobs: 14, lastActivityDays: 0 },
      { partnerId: "p2", partnerName: "Pune Moto Pro", revenueMTD: 1250000, claimRate: 8.2, leadConversionRate: 35, activeJobs: 3, lastActivityDays: 4 },
      { partnerId: "p3", partnerName: "Shield Detailing", revenueMTD: 850000, claimRate: 2.1, leadConversionRate: 22, activeJobs: 2, lastActivityDays: 14 },
    ],
    regionalData: [
      { region: "South", revenueGrowth: 18, topProduct: "PPF" },
      { region: "North", revenueGrowth: 24, topProduct: "Architectural" },
      { region: "East", revenueGrowth: 4, topProduct: "Ceramic" },
    ]
  }

  async function runAIInsights() {
    setLoading(true)
    try {
      const response = await generateExecutiveInsights(mockBIInput)
      setInsights(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">Executive <span className="text-primary italic">Intelligence</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Network BI Terminal — Phase 3 Operational Oversight</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
             <Download className="w-4 h-4" /> Export BI Report
          </Button>
          <Button onClick={runAIInsights} disabled={loading} variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl">
             {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <BrainCircuit className="w-4 h-4" />}
             Analyze Network Anomalies
          </Button>
        </div>
      </div>

      {mounted ? (
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto overflow-x-auto scrollbar-hide">
            <TabsTrigger value="overview" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Overview</TabsTrigger>
            <TabsTrigger value="revenue" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Revenue & Cohorts</TabsTrigger>
            <TabsTrigger value="partners" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Partner Rankings</TabsTrigger>
            <TabsTrigger value="regional" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Regional Heatmap</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
            {/* Insights Feed */}
            {insights && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2 bg-primary/5 border-primary/20 shadow-2xl relative overflow-hidden">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                              <BrainCircuit className="w-5 h-5" />
                          </div>
                          <CardTitle className="text-sm uppercase tracking-widest">AI Anomaly Feed</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {insights.anomalies.map((a, i) => (
                          <div key={i} className="flex items-start gap-4 p-5 bg-background/40 border border-white/5 rounded-2xl group hover:border-primary/30 transition-all">
                            <div className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border",
                              a.severity === 'Critical' ? "bg-red-500/10 border-red-500/20 text-red-500" : 
                              a.severity === 'Medium' ? "bg-amber-500/10 border-amber-500/20 text-amber-500" : "bg-blue-500/10 border-blue-500/20 text-blue-500"
                            )}>
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-3">
                                  <h4 className="text-sm font-bold uppercase tracking-tight text-foreground">{a.type}: {a.subject}</h4>
                                  <Badge variant="outline" className="text-[8px] uppercase">{a.severity}</Badge>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">{a.description}</p>
                                <div className="pt-2">
                                  <p className="text-[10px] text-primary font-bold uppercase flex items-center gap-2">
                                      Recommended: {a.recommendation} <ChevronRight className="w-3 h-3" />
                                  </p>
                                </div>
                            </div>
                          </div>
                        ))}
                    </CardContent>
                  </Card>
                  <div className="space-y-6">
                    <Card className="bg-white/5 border-white/10 p-8 rounded-3xl space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary">Predictive Summary</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed font-medium">{insights.summary}</p>
                    </Card>
                    {insights.predictions.map((p, i) => (
                      <Card key={i} className="bg-white/5 border-white/10 p-6 space-y-4 hover:border-primary/20 transition-all">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold uppercase text-muted-foreground">{p.type}</span>
                            <Badge className="bg-primary/10 text-primary border-none">{p.probability}% Prob</Badge>
                          </div>
                          <h5 className="font-bold text-sm uppercase">{p.subject}</h5>
                          <p className="text-[10px] text-muted-foreground uppercase leading-relaxed">{p.reasoning}</p>
                      </Card>
                    ))}
                  </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl">
                  <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-sm uppercase tracking-widest">Revenue Evolution Matrix</CardTitle>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Trailing 12-month product mix shift</p>
                      </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-12">
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                              <defs>
                                  <linearGradient id="colorPPF" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#0066FF" stopOpacity={0.3}/><stop offset="95%" stopColor="#0066FF" stopOpacity={0}/></linearGradient>
                                  <linearGradient id="colorCer" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/><stop offset="95%" stopColor="#22C55E" stopOpacity={0}/></linearGradient>
                              </defs>
                              <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                              <YAxis hide />
                              <Tooltip 
                                  contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                  itemStyle={{ textTransform: 'uppercase', fontSize: '10px', fontWeight: 'bold' }}
                              />
                              <Area type="monotone" dataKey="PPF" stackId="1" stroke="#0066FF" fillOpacity={1} fill="url(#colorPPF)" />
                              <Area type="monotone" dataKey="Ceramic" stackId="1" stroke="#22C55E" fillOpacity={1} fill="url(#colorCer)" />
                              <Area type="monotone" dataKey="Window" stackId="1" stroke="#8B5CF6" fillOpacity={0.1} />
                            </AreaChart>
                        </ResponsiveContainer>
                      </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 shadow-2xl">
                  <CardHeader className="p-8 border-b border-white/5">
                      <CardTitle className="text-sm uppercase tracking-widest">National Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                      {regionalHeat.map((r) => (
                        <div key={r.region} className="space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                              <span className="text-foreground">{r.region}</span>
                              <span className="text-primary">{r.growth} Growth</span>
                          </div>
                          <div className="flex items-center gap-4">
                              <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: `${(r.val / 150) * 100}%` }} />
                              </div>
                              <span className="text-[10px] font-bold text-muted-foreground w-8">{r.val}</span>
                          </div>
                        </div>
                      ))}
                      <div className="pt-8 border-t border-white/5 text-center">
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-4">Strategic Recommendation</p>
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-[9px] uppercase tracking-widest px-4 py-1.5">Focus Expansion: West Hub</Badge>
                      </div>
                  </CardContent>
                </Card>
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10 p-8 shadow-xl">
                  <CardHeader className="px-0 pt-0 border-b border-white/5 pb-6">
                      <CardTitle className="text-sm uppercase tracking-widest">Partner Cohort Performance</CardTitle>
                      <CardDescription className="text-[10px] font-bold uppercase tracking-widest">Average revenue per partner by join cohort</CardDescription>
                  </CardHeader>
                  <div className="h-[300px] w-full mt-10">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                            { cohort: "Q1 2023", val: 850000 },
                            { cohort: "Q2 2023", val: 620000 },
                            { cohort: "Q3 2023", val: 940000 },
                            { cohort: "Q4 2023", val: 780000 },
                        ]}>
                            <XAxis dataKey="cohort" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                            <YAxis hide />
                            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                            <Bar dataKey="val" fill="#0066FF" radius={[6, 6, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                  </div>
                </Card>
                
                <Card className="bg-primary/5 border-primary/20 p-10 rounded-[40px] flex flex-col justify-center space-y-8 relative overflow-hidden group">
                  <div className="space-y-4 relative z-10">
                      <h3 className="text-4xl font-headline font-bold uppercase tracking-tighter">Revenue <br /><span className="text-primary italic">Forecasting.</span></h3>
                      <p className="text-sm text-muted-foreground font-medium max-w-sm uppercase tracking-tight">Based on current pipeline and historical velocity, we project a network revenue range for Q4 2024.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                      <div className="p-6 bg-background/40 border border-white/5 rounded-3xl space-y-1">
                        <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Q4 Low Estimate</span>
                        <p className="text-3xl font-headline font-bold">₹1.42 Cr</p>
                      </div>
                      <div className="p-6 bg-primary border border-primary/20 rounded-3xl space-y-1 shadow-2xl">
                        <span className="text-[10px] font-bold uppercase text-white/60 tracking-widest">Q4 High Estimate</span>
                        <p className="text-3xl font-headline font-bold text-white">₹1.85 Cr</p>
                      </div>
                  </div>
                  <TrendingUp className="absolute -bottom-10 -right-10 w-64 h-64 text-primary opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                </Card>
            </div>
          </TabsContent>

          <TabsContent value="partners" className="animate-in fade-in duration-500">
            <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
                <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/5">
                      <tr>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Partner Detail</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Rev MTD</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Conv. Rate</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Quality Score</th>
                        <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Claim Rate</th>
                        <th className="p-6"></th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                      {partnerRankings.map((p, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="p-6">
                              <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{i+1}</div>
                                <span className="font-bold text-sm text-foreground uppercase tracking-widest">{p.name}</span>
                              </div>
                          </td>
                          <td className="p-6 font-headline font-bold text-foreground">{p.rev}</td>
                          <td className="p-6 text-center">
                              <Badge variant="outline" className="text-[9px] border-white/10 uppercase font-bold px-3">{p.conv}</Badge>
                          </td>
                          <td className="p-6 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-bold text-foreground">{p.quality}%</span>
                                <Trophy className={cn("w-3.5 h-3.5", i === 0 ? "text-amber-500" : "text-muted-foreground")} />
                              </div>
                          </td>
                          <td className="p-6 text-right">
                              <span className={cn("text-[10px] font-bold uppercase", parseFloat(p.claims) > 2 ? "text-red-500" : "text-green-500")}>{p.claims}</span>
                          </td>
                          <td className="p-6 text-right">
                              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><ArrowUpRight className="w-4 h-4" /></Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
            </div>
          </TabsContent>

          <TabsContent value="regional" className="p-12 border-2 border-dashed border-white/5 rounded-[40px] text-center space-y-6 bg-white/[0.01]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MapIcon className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
                <h3 className="text-xl font-headline font-bold uppercase tracking-tight">Geo-Spatial Intelligence Active</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto font-medium uppercase leading-relaxed tracking-tight">Interactive demand-density mapping is being pre-computed from lead ingress patterns.</p>
            </div>
            <Button variant="outline" className="h-12 px-8 rounded-2xl border-white/10 text-[10px] uppercase font-bold tracking-widest">Launch Satellite Visualization</Button>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="h-96 w-full bg-white/5 border border-white/10 rounded-3xl animate-pulse" />
      )}
    </div>
  )
}
