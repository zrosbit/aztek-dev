
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Upload, 
  Image as ImageIcon, 
  Settings, 
  Megaphone,
  MoreVertical,
  Eye,
  Edit,
  Share2,
  BookOpen,
  Download,
  BarChart3,
  FileText,
  PlayCircle,
  Layout,
  TrendingUp,
  Target,
  Plus,
  Loader2,
  ArrowRight,
  Globe,
  Zap,
  Users,
  Search,
  Filter,
  ShieldCheck
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, Cell } from "recharts"
import { toast } from "@/hooks/use-toast"

export default function MarketingAdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isUploading, setIsUploading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const engagementData = [
    { name: "Mon", downloads: 142, views: 420 },
    { name: "Tue", downloads: 168, views: 380 },
    { name: "Wed", downloads: 135, views: 510 },
    { name: "Thu", downloads: 192, views: 480 },
    { name: "Fri", downloads: 210, views: 620 },
    { name: "Sat", downloads: 85, views: 240 },
    { name: "Sun", downloads: 95, views: 310 },
  ]

  const assets = [
    { title: "Brand Logo Pack", status: "Published", category: "Branding", type: "Vector", downloads: 428, updated: "2d ago" },
    { title: "Insta-Pack Jun 26", status: "Published", category: "Social", type: "Canva", downloads: 1124, updated: "1w ago" },
    { title: "PPF Product Guide", status: "Published", category: "Print", type: "PDF", downloads: 856, updated: "1mo ago" },
    { title: "9H Armor Intro", status: "Published", category: "Video", type: "MP4", downloads: 312, updated: "3d ago" },
    { title: "Monsoon Campaign V2", status: "Draft", category: "Campaign", type: "Mixed", downloads: 0, updated: "Active" },
    { title: "Studio Letterhead", status: "Published", category: "Templates", type: "Docs", downloads: 142, updated: "2mo ago" },
  ]

  const campaigns = [
    { name: "Monsoon Protection 2026", status: "ACTIVE", reach: "43 Studios", conversion: "18%", spend: "₹2.4L" },
    { name: "Master Tier Launch", status: "SCHEDULED", reach: "12 Hubs", conversion: "--", spend: "₹1.8L" },
    { name: "Summer Gloss Drive", status: "COMPLETED", reach: "38 Studios", conversion: "24%", spend: "₹3.2L" },
  ]

  const handleUpload = () => {
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
      toast({ title: "Asset Ingested", description: "Global CDN synchronization active." })
    }, 1500)
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Marketing <span className="text-primary italic">Command</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-tight">Global Brand Governance & Partner Asset Distribution Terminal</p>
         </div>
         <div className="flex gap-4">
            <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <Settings className="w-4 h-4" /> Global Rules
            </Button>
            <Button variant="gradient" className="h-12 px-8 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl" onClick={handleUpload} disabled={isUploading}>
              {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
              {activeTab === "campaigns" ? "Launch Campaign" : "Upload Global Asset"}
            </Button>
         </div>
      </div>

      {mounted ? (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full justify-start overflow-x-auto scrollbar-hide">
            <TabsTrigger value="dashboard" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Dashboard</TabsTrigger>
            <TabsTrigger value="library" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Asset Library</TabsTrigger>
            <TabsTrigger value="campaigns" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Campaigns Hub</TabsTrigger>
            <TabsTrigger value="branding" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Co-Branding</TabsTrigger>
            <TabsTrigger value="analytics" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Engagement BI</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: "Network Downloads", val: "14.2k", sub: "+22% this week", icon: Download, color: "text-blue-500" },
                  { label: "Active Campaigns", val: "03", sub: "Global Reach", icon: Megaphone, color: "text-green-500" },
                  { label: "Partner Engagement", val: "78%", sub: "43 Studios Active", icon: Users, color: "text-purple-500" },
                  { label: "New Assets (MTD)", val: "24", sub: "Across 4 Categories", icon: Zap, color: "text-amber-500" },
                ].map((s) => (
                  <Card key={s.label} className="bg-white/5 border-white/10 p-6 space-y-4 shadow-xl group hover:border-primary/30 transition-all">
                     <div className="flex items-center justify-between">
                        <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", s.color)}>
                           <s.icon className="w-5 h-5" />
                        </div>
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                        <p className="text-2xl font-headline font-bold text-foreground">{s.val}</p>
                        <p className="text-[9px] text-muted-foreground font-medium uppercase">{s.sub}</p>
                     </div>
                  </Card>
                ))}
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl overflow-hidden">
                   <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
                      <div className="space-y-1">
                         <CardTitle className="text-sm uppercase tracking-widest">Global Asset Utilization</CardTitle>
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Network-wide download & preview velocity</p>
                      </div>
                      <TrendingUp className="w-5 h-5 text-primary opacity-20" />
                   </CardHeader>
                   <CardContent className="p-8 pt-12">
                      <div className="h-[300px] w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={engagementData}>
                               <defs>
                                  <linearGradient id="colorDown" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2}/>
                                     <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                                  </linearGradient>
                               </defs>
                               <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                               <YAxis hide />
                               <Tooltip 
                                  contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                  itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
                               />
                               <Area type="monotone" dataKey="downloads" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorDown)" />
                            </AreaChart>
                         </ResponsiveContainer>
                      </div>
                   </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 shadow-2xl">
                   <CardHeader className="p-8 border-b border-white/5">
                      <CardTitle className="text-sm uppercase tracking-widest">Top Performing Assets</CardTitle>
                   </CardHeader>
                   <CardContent className="p-6 space-y-4">
                      {assets.slice(0, 4).map((asset, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
                           <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                 <ImageIcon className="w-4 h-4" />
                              </div>
                              <div className="space-y-0.5">
                                 <p className="text-xs font-bold text-foreground leading-tight">{asset.title}</p>
                                 <p className="text-[9px] uppercase font-bold text-muted-foreground">{asset.category} • {asset.downloads} DL</p>
                              </div>
                           </div>
                           <Button size="icon" variant="ghost" className="h-8 w-8"><ArrowRight className="w-3.5 h-3.5" /></Button>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full h-12 rounded-xl text-[10px] uppercase font-bold tracking-widest border-white/10 mt-4">View All Asset BI</Button>
                   </CardContent>
                </Card>
             </div>
          </TabsContent>

          <TabsContent value="library" className="space-y-6 animate-in fade-in duration-500">
             <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                   <Input placeholder="Search catalog by name, tag or vertical..." className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl" />
                </div>
                <div className="flex gap-2">
                   <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/5 text-[10px] uppercase font-bold tracking-widest gap-2">
                      <Filter className="w-4 h-4" /> Filter Category
                   </Button>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assets.map((asset) => (
                  <Card key={asset.title} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all group shadow-2xl overflow-hidden">
                    <CardHeader className="p-8 border-b border-white/5 flex flex-row items-start justify-between bg-white/[0.02]">
                        <div className="space-y-3">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                              {asset.category === "Social" ? <Megaphone className="w-6 h-6" /> : 
                               asset.category === "Video" ? <PlayCircle className="w-6 h-6" /> :
                               asset.category === "Templates" ? <Layout className="w-6 h-6" /> :
                               <FileText className="w-6 h-6" />}
                          </div>
                          <div className="space-y-1">
                              <CardTitle className="text-sm uppercase tracking-widest leading-none">{asset.title}</CardTitle>
                              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{asset.category} • {asset.type}</p>
                          </div>
                        </div>
                        <Button size="icon" variant="ghost" className="text-muted-foreground"><MoreVertical className="w-4 h-4" /></Button>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="flex items-center justify-between">
                          <Badge className={cn(
                            "text-[9px] uppercase font-bold tracking-widest",
                            asset.status === "Published" ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-white/5 text-muted-foreground"
                          )}>{asset.status}</Badge>
                          <span className="text-[10px] text-muted-foreground uppercase font-bold">Sync: {asset.updated}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 pt-6">
                          <Button variant="outline" className="h-10 text-[9px] uppercase font-bold rounded-xl border-white/5 bg-white/5 hover:bg-primary/10 transition-all">Edit Metadata</Button>
                          <Button variant="outline" className="h-10 text-[9px] uppercase font-bold rounded-xl border-white/5 bg-white/5 hover:bg-white/10 transition-all">Distribution</Button>
                        </div>
                    </CardContent>
                  </Card>
                ))}
             </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 gap-4">
                {campaigns.map((c) => (
                  <Card key={c.name} className="bg-white/5 border-white/10 hover:border-primary/20 transition-all shadow-xl group overflow-hidden">
                    <CardContent className="p-8 flex flex-col lg:flex-row items-center gap-12">
                       <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner shrink-0">
                          <Zap className="w-8 h-8" />
                       </div>
                       <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
                          <div className="space-y-1">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Campaign</p>
                             <h4 className="text-xl font-bold uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors">{c.name}</h4>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Network Reach</p>
                             <p className="text-sm font-bold text-foreground">{c.reach}</p>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Conv. Lift</p>
                             <p className="text-sm font-bold text-az-success">{c.conversion}</p>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Status</p>
                             <Badge variant="outline" className={cn(
                                "text-[9px] uppercase font-bold tracking-widest",
                                c.status === 'ACTIVE' ? "border-green-500 text-green-500 bg-green-500/5 animate-pulse" : "border-white/10"
                             )}>{c.status}</Badge>
                          </div>
                       </div>
                       <div className="flex gap-2 w-full lg:w-auto">
                          <Button variant="outline" className="flex-1 lg:flex-none h-12 px-6 rounded-xl border-white/10 bg-white/5 text-[9px] uppercase font-bold">Edit Setup</Button>
                          <Button variant="outline" className="flex-1 lg:flex-none h-12 px-6 rounded-xl border-white/10 bg-white/5 text-[9px] uppercase font-bold gap-2">
                             <BarChart3 className="w-3.5 h-3.5" /> BI Data
                          </Button>
                       </div>
                    </CardContent>
                  </Card>
                ))}
             </div>
          </TabsContent>

          <TabsContent value="branding" className="animate-in fade-in duration-500 space-y-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10 shadow-2xl p-10 space-y-8">
                   <div className="space-y-2">
                      <h3 className="text-2xl font-headline font-bold uppercase">Partner Co-Branding Console</h3>
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                         Configure standardized co-branding templates for the partner network. Auto-embeds partner studio identity endpoints.
                      </p>
                   </div>
                   <div className="space-y-6">
                      <div className="p-8 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-[32px] text-center space-y-4 group hover:border-primary/30 transition-all cursor-pointer">
                         <Layout className="w-12 h-12 mx-auto text-muted-foreground opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all" />
                         <div className="space-y-1">
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">Upload Master Template</p>
                            <p className="text-[8px] text-muted-foreground uppercase font-bold">Accepts PSD, AI, or high-res PDF layers</p>
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase">Auto-Watermark</span>
                            <div className="w-10 h-6 bg-primary rounded-full flex items-center justify-end px-1"><div className="w-4 h-4 bg-white rounded-full" /></div>
                         </div>
                         <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase">QR Identity Link</span>
                            <div className="w-10 h-6 bg-primary rounded-full flex items-center justify-end px-1"><div className="w-4 h-4 bg-white rounded-full" /></div>
                         </div>
                      </div>
                      <Button className="w-full h-14 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">Deploy to Network Repository</Button>
                   </div>
                </Card>

                <div className="space-y-8">
                   <Card className="bg-primary/5 border border-primary/20 p-8 rounded-[40px] space-y-6">
                      <div className="flex items-center gap-4 text-primary">
                         <ShieldCheck className="w-8 h-8" />
                         <h4 className="text-lg font-headline font-bold uppercase text-foreground">Brand Integrity Protocol</h4>
                      </div>
                      <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">
                         Partner studios are required to use official AZTEK co-branded templates for all public signage and social media. Automated quality scans flag unauthorized assets.
                      </p>
                      <div className="pt-4 border-t border-white/10">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase mb-4">Identity Compliance Rate</p>
                         <div className="flex items-center gap-4">
                            <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                               <div className="h-full bg-az-success shadow-[0_0_15px_#22C55E]" style={{ width: '92%' }} />
                            </div>
                            <span className="text-[10px] font-bold text-az-success uppercase">92% Pass</span>
                         </div>
                      </div>
                   </Card>
                </div>
             </div>
          </TabsContent>

          <TabsContent value="analytics" className="animate-in fade-in duration-500">
             <Card className="p-20 border-2 border-dashed border-white/10 rounded-[40px] text-center space-y-8 bg-white/[0.01]">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto border border-primary/20">
                   <Share2 className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-3">
                   <h3 className="text-2xl font-headline font-bold uppercase tracking-tight text-foreground">Marketing Engagement Intelligence</h3>
                   <p className="text-sm text-muted-foreground max-w-md mx-auto font-medium uppercase tracking-widest leading-relaxed">
                      Deep-dive engagement matrix is being pre-computed from global hub download telemetry and campaign conversion lift data.
                   </p>
                </div>
                <Button variant="outline" className="h-14 px-12 rounded-2xl border-white/10 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-primary hover:text-white transition-all">Generate Quarterly Impact Report</Button>
             </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="h-96 w-full bg-white/5 border border-white/10 rounded-3xl animate-pulse" />
      )}
    </div>
  )
}
