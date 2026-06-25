
"use client"

import { use, useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ArrowLeft, 
  MapPin, 
  User, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Award, 
  Users, 
  Briefcase, 
  Mail, 
  Phone, 
  ExternalLink,
  Settings,
  AlertTriangle,
  History,
  MoreVertical,
  CheckCircle2,
  Trophy,
  Star,
  ChevronRight,
  ArrowRight,
  Zap,
  MessageSquare,
  Smartphone,
  Download,
  Building2,
  Globe,
  Layers,
  FileText,
  Camera,
  Check,
  Target,
  GraduationCap,
  Warehouse,
  X,
  CreditCard,
  Receipt,
  Wallet,
  ArrowUpRight
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"
import { toast } from "@/hooks/use-toast"

export default function PartnerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [mounted, setMounted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const partner = {
    id: id,
    name: "Elite Wraps Bangalore",
    owner: "Siddharth M.",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    website: "https://elitewraps.in",
    email: "sid@elitewraps.in",
    phone: "+91 99887 76655",
    tier: "MASTER",
    status: "ACTIVE",
    joinDate: "Jan 2024",
    
    // Step 2: Personas
    personas: ["Automotive Detailing Studio", "PPF Installer", "Ceramic Coating Studio"],
    
    // Step 3: Business Info
    yearsInBusiness: "5+ Years",
    teamSize: "6-10 Members",
    existingBrands: ["XPEL", "STEK", "3M"],
    monthlyVolume: "25-50 Installs",
    
    // Step 4: Product Interests
    interests: {
      auto: ["PPF", "Ceramic Coating", "Window Films"],
      moto: ["Moto PPF"],
      arch: ["Solar Films"]
    },
    
    // Step 5: Facility
    facility: {
      address: "12th Main Rd, Indiranagar, Bengaluru, KA 560038",
      gst: "29AAACG1234F1Z5",
      maps: "https://maps.google.com/?q=Elite+Wraps+Bangalore",
      bays: 4,
      isIndoor: true,
      hasPpfRoom: true
    },
    
    // Step 7: Service Area
    serviceArea: {
      cities: ["Bengaluru", "Mysore", "Hubli"],
      radius: "50 km"
    },
    
    // Step 8: Academy
    academy: {
      primary: "Automotive",
      secondary: ["Architectural"]
    },
    
    // Step 9: Goals
    goals: ["Premium Products", "More Leads", "Brand Association"],

    // Analytics Data
    revenueLife: "₹1.42 Cr",
    revenueMTD: "₹4.25L",
    qualityScore: 98.4,
    activeJobs: 14,
    radarStats: [
      { subject: "Revenue", A: 98, fullMark: 100 },
      { subject: "Quality", A: 95, fullMark: 100 },
      { subject: "Claims", A: 92, fullMark: 100 },
      { subject: "Velocity", A: 85, fullMark: 100 },
      { subject: "Conversion", A: 88, fullMark: 100 },
    ],

    // Financial History
    financials: {
      outstanding: "₹4.25L",
      creditLimit: "₹10.0L",
      creditUsed: "₹6.5L",
      aov: "₹48.2k",
      payVelocity: "12 Days",
      invoices: [
        { id: "INV-2026-0842", date: "Oct 24, 2026", amount: "₹1,25,000", status: "ISSUED", type: "Stock Order" },
        { id: "INV-2026-0712", date: "Sep 12, 2026", amount: "₹3,42,000", status: "PAID", type: "Stock Order" },
        { id: "INV-2026-0605", date: "Aug 05, 2026", amount: "₹12,500", status: "PAID", type: "Support" },
      ],
      payouts: [
        { period: "Sep 2026", rev: "₹12.5L", amount: "₹1,50,000", status: "PAID" },
        { period: "Aug 2026", rev: "₹10.8L", amount: "₹1,29,600", status: "PAID" },
      ]
    },

    team: [
      { name: "Karthik R.", role: "Lead Installer", cert: "MASTER", rework: "0.4%", score: 4.9 },
      { name: "Nadeem S.", role: "Technical Specialist", cert: "GOLD", rework: "1.2%", score: 4.7 },
      { name: "Rohan P.", role: "Junior Technician", cert: "CERTIFIED", rework: "3.5%", score: 4.2 },
    ],
    revenueHistory: [
      { month: "Jan", val: 850000 },
      { month: "Feb", val: 920000 },
      { month: "Mar", val: 1100000 },
      { month: "Apr", val: 1050000 },
      { month: "May", val: 1240000 },
      { month: "Jun", val: 1420000 },
    ]
  }

  const handleTierUpgrade = () => {
    toast({ title: "Tier Upgrade Triggered", description: "Request sent to Executive Board for final sign-off." })
  }

  return (
    <div className="space-y-12 pb-20">
      {/* 360 Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <Button asChild variant="ghost" className="h-12 w-12 rounded-full border border-white/5 bg-white/5 p-0">
             <Link href="/admin/partners/directory"><ArrowLeft className="w-5 h-5" /></Link>
          </Button>
          <div className="space-y-1">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">{partner.name}</h1>
              <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 text-[9px] uppercase font-bold tracking-widest px-3 py-1">{partner.tier} TIER</Badge>
            </div>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">{partner.id} • Verified Node since {partner.joinDate}</p>
          </div>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="h-12 border-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest gap-2 bg-white/5">
              <MessageSquare className="w-4 h-4 text-primary" /> Contact Owner
           </Button>
           <Button variant="gradient" className="h-12 px-8 text-[10px] uppercase font-bold tracking-widest gap-2 shadow-xl rounded-2xl" onClick={handleTierUpgrade}>
              <Trophy className="w-4 h-4" /> Tier Governance
           </Button>
        </div>
      </div>

      {mounted ? (
        <Tabs defaultValue="overview" className="space-y-10">
          <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-14 w-full md:w-auto overflow-x-auto scrollbar-hide">
            <TabsTrigger value="overview" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Overview</TabsTrigger>
            <TabsTrigger value="dossier" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Onboarding Dossier</TabsTrigger>
            <TabsTrigger value="performance" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Performance BI</TabsTrigger>
            <TabsTrigger value="financials" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Commercial Ledger</TabsTrigger>
            <TabsTrigger value="team" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Team Mastery</TabsTrigger>
            <TabsTrigger value="activity" className="h-12 px-8 rounded-xl text-[10px] uppercase font-bold tracking-widest gap-2 data-[state=active]:bg-primary">Activity Ledger</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-10 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-white/5 border-white/10 p-8 space-y-10">
                   <div className="space-y-6">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Operational Identity</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-4">
                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all">
                               <User className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                               <div>
                                  <p className="text-[9px] font-bold text-muted-foreground uppercase">Managing Director</p>
                                  <p className="text-sm font-bold">{partner.owner}</p>
                               </div>
                            </div>
                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all">
                               <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                               <span className="text-sm font-bold">{partner.phone}</span>
                            </div>
                         </div>
                         <div className="p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all">
                            <div className="flex items-start gap-4">
                               <MapPin className="w-5 h-5 text-muted-foreground group-hover:text-primary mt-1" />
                               <div>
                                  <p className="text-[9px] font-bold text-muted-foreground uppercase">Primary Facility</p>
                                  <p className="text-sm font-bold leading-relaxed">{partner.city}, {partner.state}</p>
                                  <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1">{partner.country}</p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/5">
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase">Lifetime Network Value</p>
                         <p className="text-3xl font-headline font-bold text-primary">{partner.revenueLife}</p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase">Active Job Load</p>
                         <p className="text-3xl font-headline font-bold text-foreground">{partner.activeJobs}</p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase">System Quality Score</p>
                         <p className="text-3xl font-headline font-bold text-az-success">{partner.qualityScore}%</p>
                      </div>
                   </div>
                </Card>

                <div className="space-y-8">
                   <Card className="bg-primary/5 border-primary/20 p-8 rounded-[32px] space-y-6 relative overflow-hidden group">
                      <div className="relative z-10 space-y-6">
                         <div className="flex items-center gap-3 text-primary">
                            <ShieldCheck className="w-6 h-6" />
                            <h4 className="text-sm font-bold uppercase tracking-widest">Master Disciplines</h4>
                         </div>
                         <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded-2xl">
                               <span className="text-[10px] font-bold text-foreground uppercase">Automotive PPF</span>
                               <Badge className="bg-purple-500 text-white text-[8px] uppercase">MASTERED</Badge>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded-2xl">
                               <span className="text-[10px] font-bold text-foreground uppercase">Ceramic Matrix</span>
                               <Badge variant="outline" className="text-[8px] border-amber-500/20 text-amber-500 uppercase">GOLD CERT</Badge>
                            </div>
                         </div>
                      </div>
                   </Card>

                   <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                         <Zap className="w-5 h-5" />
                         <h4 className="text-[10px] font-bold uppercase tracking-widest">Growth Path</h4>
                      </div>
                      <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">Partner is exceeding Master Tier benchmarks for PPF. Recommended for Architectural Territory exclusivity.</p>
                      <Button variant="outline" className="w-full h-11 rounded-xl text-[9px] uppercase font-bold tracking-widest border-white/10">Draft Territory Proposal</Button>
                   </Card>
                </div>
             </div>
          </TabsContent>

          <TabsContent value="dossier" className="space-y-8 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Section 1: Business Identity */}
                <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-8 shadow-2xl">
                   <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                         <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="text-sm font-bold uppercase tracking-widest">Identity & Persona</h3>
                         <p className="text-[10px] text-muted-foreground uppercase font-bold">Steps 1 & 2: Primary Onboarding Data</p>
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-1">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Legal Entity</p>
                         <p className="text-sm font-bold">{partner.name}</p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Identity Site</p>
                         <a href={partner.website} className="text-sm font-bold text-primary hover:underline flex items-center gap-2">
                            {partner.website.replace('https://', '')} <ExternalLink className="w-3 h-3" />
                         </a>
                      </div>
                   </div>

                   <div className="space-y-4 pt-4">
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Business Persona(s)</p>
                      <div className="flex flex-wrap gap-2">
                         {partner.personas.map(p => (
                           <Badge key={p} variant="outline" className="bg-white/5 border-white/10 text-[9px] uppercase py-1 px-3">
                              {p}
                           </Badge>
                         ))}
                      </div>
                   </div>
                </Card>

                {/* Section 2: Commercial Intelligence */}
                <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-8 shadow-2xl">
                   <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                         <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="text-sm font-bold uppercase tracking-widest">Commercial Intelligence</h3>
                         <p className="text-[10px] text-muted-foreground uppercase font-bold">Steps 3 & 9: Market Presence & Goals</p>
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-1">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Market Experience</p>
                         <p className="text-sm font-bold">{partner.yearsInBusiness}</p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Install Velocity</p>
                         <p className="text-sm font-bold">{partner.monthlyVolume}</p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Team scale</p>
                         <p className="text-sm font-bold">{partner.teamSize}</p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Competitive Brands</p>
                         <p className="text-sm font-bold truncate">{partner.existingBrands.join(", ")}</p>
                      </div>
                   </div>

                   <div className="space-y-4 pt-4 border-t border-white/5">
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Strategic Goals</p>
                      <div className="grid grid-cols-2 gap-3">
                         {partner.goals.map(g => (
                           <div key={g} className="flex items-center gap-2 text-[10px] font-bold text-foreground">
                              <CheckCircle2 className="w-3.5 h-3.5 text-az-success" /> {g}
                           </div>
                         ))}
                      </div>
                   </div>
                </Card>

                {/* Section 3: Product & Academy Mapping */}
                <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-8 shadow-2xl">
                   <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                         <Layers className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="text-sm font-bold uppercase tracking-widest">Product & Academy Mapping</h3>
                         <p className="text-[10px] text-muted-foreground uppercase font-bold">Steps 4 & 8: Technical Alignment</p>
                      </div>
                   </div>
                   
                   <div className="space-y-8">
                      <div className="space-y-4">
                         <div className="flex items-center justify-between">
                            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Product Interest Matrix</p>
                         </div>
                         <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                               <p className="text-[8px] font-bold text-primary uppercase">Automotive</p>
                               <div className="space-y-1">
                                  {partner.interests.auto.map(i => <p key={i} className="text-[10px] font-medium">• {i}</p>)}
                               </div>
                            </div>
                            <div className="space-y-2">
                               <p className="text-[8px] font-bold text-amber-500 uppercase">Motorcycle</p>
                               <div className="space-y-1">
                                  {partner.interests.moto.map(i => <p key={i} className="text-[10px] font-medium">• {i}</p>)}
                               </div>
                            </div>
                            <div className="space-y-2">
                               <p className="text-[8px] font-bold text-purple-500 uppercase">Architectural</p>
                               <div className="space-y-1">
                                  {partner.interests.arch.map(i => <p key={i} className="text-[10px] font-medium">• {i}</p>)}
                               </div>
                            </div>
                         </div>
                      </div>

                      <div className="p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl space-y-3">
                         <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">Assigned Learning Path</p>
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                               <GraduationCap className="w-5 h-5 text-blue-500" />
                               <span className="text-sm font-bold uppercase tracking-tight">{partner.academy.primary} Track</span>
                            </div>
                            <Badge className="bg-blue-500 text-white text-[8px] uppercase">Active</Badge>
                         </div>
                      </div>
                   </div>
                </Card>

                {/* Section 4: Facility Details */}
                <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-8 shadow-2xl">
                   <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                      <div className="w-10 h-10 rounded-xl bg-az-success/10 flex items-center justify-center text-az-success">
                         <Warehouse className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="text-sm font-bold uppercase tracking-widest">Infrastructure & Facility</h3>
                         <p className="text-[10px] text-muted-foreground uppercase font-bold">Step 5: Physical Audit Data</p>
                      </div>
                   </div>
                   
                   <div className="space-y-6">
                      <div className="space-y-1">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Address Terminal</p>
                         <p className="text-sm font-medium leading-relaxed">{partner.facility.address}</p>
                         <a href={partner.facility.maps} className="text-[10px] font-bold text-primary hover:underline flex items-center gap-2 mt-2">
                            <MapPin className="w-3 h-3" /> View Google Maps Entry
                         </a>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">Tax Identity</p>
                            <p className="text-xs font-mono font-bold">{partner.facility.gst}</p>
                         </div>
                         <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">Install Capacity</p>
                            <p className="text-xs font-bold">{partner.facility.bays} Dedicated Bays</p>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                         <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                            <span className="text-[10px] font-bold uppercase">Indoor Facility</span>
                            {partner.facility.isIndoor ? <Check className="w-4 h-4 text-az-success" /> : <X className="w-4 h-4 text-red-500" />}
                         </div>
                         <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                            <span className="text-[10px] font-bold uppercase">PPF Dust-Free Room</span>
                            {partner.facility.hasPpfRoom ? <Check className="w-4 h-4 text-az-success" /> : <X className="w-4 h-4 text-red-500" />}
                         </div>
                      </div>
                   </div>
                </Card>

                {/* Section 5: Documents & Media */}
                <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-8 shadow-2xl">
                   <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                         <Camera className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="text-sm font-bold uppercase tracking-widest">Documents & Media</h3>
                         <p className="text-[10px] text-muted-foreground uppercase font-bold">Step 6: Forensic Verification</p>
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Button variant="outline" className="h-16 justify-start px-6 rounded-2xl border-white/5 bg-white/5 gap-4 group">
                         <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <FileText className="w-5 h-5" />
                         </div>
                         <div className="text-left">
                            <p className="text-[10px] font-bold uppercase">GST_CERTIFICATE.PDF</p>
                            <p className="text-[8px] text-muted-foreground uppercase">Verified by System</p>
                         </div>
                      </Button>
                      <Button variant="outline" className="h-16 justify-start px-6 rounded-2xl border-white/5 bg-white/5 gap-4 group">
                         <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <Briefcase className="w-5 h-5" />
                         </div>
                         <div className="text-left">
                            <p className="text-[10px] font-bold uppercase">BIZ_REGISTRATION.PDF</p>
                            <p className="text-[8px] text-muted-foreground uppercase">Audit Passed</p>
                         </div>
                      </Button>
                   </div>

                   <div className="space-y-4">
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Onboarding Studio Photography</p>
                      <div className="grid grid-cols-4 gap-3">
                         {[1, 2, 3, 4].map(i => (
                           <div key={i} className="aspect-square rounded-xl bg-black/40 border border-white/5 overflow-hidden group cursor-pointer">
                              <img src={`https://picsum.photos/seed/studio${i}/200/200`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Studio" />
                           </div>
                         ))}
                      </div>
                   </div>
                </Card>

                {/* Section 6: Territory & Reach */}
                <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-8 shadow-2xl">
                   <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                      <div className="w-10 h-10 rounded-xl bg-az-warning/10 flex items-center justify-center text-az-warning">
                         <Globe className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="text-sm font-bold uppercase tracking-widest">Territory & Reach</h3>
                         <p className="text-[10px] text-muted-foreground uppercase font-bold">Step 7: Regional Distribution Grid</p>
                      </div>
                   </div>
                   
                   <div className="space-y-6">
                      <div className="space-y-2">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase">Service Coverage</p>
                         <div className="flex flex-wrap gap-2">
                            {partner.serviceArea.cities.map(city => (
                              <Badge key={city} className="bg-az-blue/10 text-az-blue border-az-blue/20 text-[9px] uppercase font-bold px-3 py-1">
                                 {city}
                              </Badge>
                            ))}
                         </div>
                      </div>

                      <div className="p-6 bg-black/20 rounded-[32px] border border-white/5 flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <Target className="w-8 h-8 text-primary opacity-30" />
                            <div className="space-y-0.5">
                               <p className="text-[9px] font-bold text-muted-foreground uppercase">Lead Routing Radius</p>
                               <p className="text-xl font-headline font-bold text-foreground">{partner.serviceArea.radius}</p>
                            </div>
                         </div>
                         <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl border-white/10 text-[9px] font-bold uppercase">Adjust Grid</Button>
                      </div>
                   </div>
                </Card>
             </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-10 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl p-8">
                   <CardHeader className="px-0 pt-0 border-b border-white/5 pb-6 flex flex-row items-center justify-between">
                      <div className="space-y-1">
                         <CardTitle className="text-sm uppercase tracking-widest">Revenue Velocity Matrix</CardTitle>
                         <p className="text-[10px] font-bold text-muted-foreground uppercase">Monthly wholesale consumption tracking</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-[9px] uppercase font-bold border-white/10"><Download className="w-3.5 h-3.5 mr-2" /> Export BI</Button>
                   </CardHeader>
                   <div className="h-[300px] w-full pt-10">
                      <ResponsiveContainer width="100%" height="100%">
                         <AreaChart data={partner.revenueHistory}>
                            <defs>
                               <linearGradient id="colorRevPart" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#0066FF" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                               </linearGradient>
                            </defs>
                            <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                            <YAxis hide />
                            <Tooltip 
                               contentStyle={{ backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                               itemStyle={{ color: '#0066FF', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}
                            />
                            <Area type="monotone" dataKey="val" stroke="#0066FF" strokeWidth={3} fillOpacity={1} fill="url(#colorRevPart)" />
                         </AreaChart>
                      </ResponsiveContainer>
                   </div>
                </Card>

                <Card className="bg-white/5 border-white/10 shadow-2xl p-8 flex flex-col items-center justify-center">
                   <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Composite Quality Index</h4>
                   <div className="h-[280px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                         <RadarChart cx="50%" cy="50%" outerRadius="80%" data={partner.radarStats}>
                            <PolarGrid stroke="rgba(255,255,255,0.05)" />
                            <PolarAngleAxis dataKey="subject" stroke="#64748b" fontSize={8} />
                            <Radar
                               name={partner.name}
                               dataKey="A"
                               stroke="#0066FF"
                               fill="#0066FF"
                               fillOpacity={0.3}
                            />
                         </RadarChart>
                      </ResponsiveContainer>
                   </div>
                   <div className="text-center mt-6 space-y-1">
                      <p className="text-3xl font-headline font-bold text-foreground">{partner.qualityScore}%</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Normalised Score</p>
                   </div>
                </Card>
             </div>
          </TabsContent>

          <TabsContent value="financials" className="space-y-10 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: "Lifetime Spend", val: partner.financials.totalLifetimeSpend || partner.revenueLife, icon: CreditCard, color: "text-blue-500" },
                  { label: "Outstanding", val: partner.financials.outstanding, icon: Receipt, color: "text-amber-500" },
                  { label: "Avg. Order Value", val: partner.financials.aov, icon: Target, color: "text-purple-500" },
                  { label: "Payment Velocity", val: partner.financials.payVelocity, icon: Clock, color: "text-green-500" },
                ].map((s, i) => (
                  <Card key={i} className="bg-white/5 border-white/10 p-6 space-y-4 shadow-xl">
                     <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10 w-fit", s.color)}>
                        <s.icon className="w-5 h-5" />
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                        <p className="text-2xl font-headline font-bold text-foreground">{s.val}</p>
                     </div>
                  </Card>
                ))}
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-white/5 border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
                   <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
                      <CardTitle className="text-sm uppercase tracking-widest">Invoice Registry</CardTitle>
                      <Button variant="outline" size="sm" className="h-8 text-[9px] uppercase font-bold border-white/10">Full Ledger</Button>
                   </CardHeader>
                   <CardContent className="p-0">
                      <table className="w-full text-left">
                        <thead className="bg-white/5 border-b border-white/5">
                           <tr>
                              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Invoice ID</th>
                              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Classification</th>
                              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Amount</th>
                              <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Status</th>
                              <th className="p-6"></th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           {partner.financials.invoices.map((inv) => (
                             <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors group">
                                <td className="p-6">
                                   <div className="space-y-1">
                                      <p className="font-mono text-xs font-bold text-primary">{inv.id}</p>
                                      <p className="text-[9px] text-muted-foreground font-bold uppercase">{inv.date}</p>
                                   </div>
                                </td>
                                <td className="p-6">
                                   <Badge variant="outline" className="text-[8px] uppercase font-bold border-white/10">{inv.type}</Badge>
                                </td>
                                <td className="p-6 text-right font-headline font-bold text-foreground">{inv.amount}</td>
                                <td className="p-6 text-center">
                                   <Badge className={cn(
                                     "text-[9px] uppercase font-bold px-3 py-1",
                                     inv.status === 'PAID' ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500"
                                   )}>{inv.status}</Badge>
                                </td>
                                <td className="p-6 text-right">
                                   <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><Download className="w-4 h-4" /></Button>
                                </td>
                             </tr>
                           ))}
                        </tbody>
                      </table>
                   </CardContent>
                </Card>

                <div className="space-y-8">
                   <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] space-y-6 shadow-xl">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3 text-primary">
                            <Warehouse className="w-5 h-5" />
                            <h4 className="text-sm font-bold uppercase tracking-widest">Credit Status</h4>
                         </div>
                         <Badge variant="outline" className="text-[8px] border-primary/30 text-primary uppercase">Sync Active</Badge>
                      </div>
                      
                      <div className="space-y-4">
                         <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                            <span className="text-muted-foreground">Utilization</span>
                            <span className="text-foreground">{partner.financials.creditUsed} / {partner.financials.creditLimit}</span>
                         </div>
                         <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <div className="h-full bg-primary shadow-[0_0_15px_#0066FF]" style={{ width: '65%' }} />
                         </div>
                      </div>

                      <div className="pt-6 border-t border-white/5 space-y-4">
                         <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary">Technical Incentives</h5>
                         {partner.financials.payouts.map((p, i) => (
                           <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                              <div className="space-y-0.5">
                                 <p className="text-[10px] font-bold text-foreground uppercase">{p.period}</p>
                                 <p className="text-[8px] text-muted-foreground uppercase font-bold">Basis: {p.rev} Rev</p>
                              </div>
                              <div className="text-right">
                                 <p className="text-xs font-bold text-az-success">{p.amount}</p>
                                 <p className="text-[8px] text-muted-foreground font-bold uppercase">{p.status}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </Card>

                   <Card className="bg-az-blue/5 border border-az-blue/20 p-8 rounded-[32px] space-y-4">
                      <div className="flex items-center gap-3 text-az-blue">
                         <Wallet className="w-5 h-5" />
                         <h4 className="text-[10px] font-bold uppercase tracking-widest">Payout Protocol</h4>
                      </div>
                      <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-medium">
                         Commission calculations are finalized on the 1st of every month. Payments are disbursed via automated technical transfer by the 5th.
                      </p>
                   </Card>
                </div>
             </div>
          </TabsContent>

          <TabsContent value="team" className="animate-in fade-in duration-500">
             <div className="border border-white/5 rounded-3xl overflow-hidden bg-card shadow-2xl">
                <table className="w-full text-left">
                   <thead className="bg-white/5 border-b border-white/5">
                      <tr>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Certified Technician</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Competency Tier</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-center">Quality Score</th>
                         <th className="p-6 text-[9px] uppercase font-bold tracking-widest text-muted-foreground text-right">Rework %</th>
                         <th className="p-6"></th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                      {partner.team.map((m, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                           <td className="p-6">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold shadow-inner">
                                    {m.name.split(' ').map(n => n[0]).join('')}
                                 </div>
                                 <div className="space-y-0.5">
                                    <p className="font-bold text-sm uppercase text-foreground">{m.name}</p>
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold">{m.role}</p>
                                 </div>
                              </div>
                           </td>
                           <td className="p-6">
                              <Badge variant="outline" className={cn(
                                 "text-[9px] uppercase font-bold tracking-widest",
                                 m.cert === "MASTER" ? "text-purple-500 border-purple-500/20" : "border-white/10"
                              )}>{m.cert}</Badge>
                           </td>
                           <td className="p-6 text-center">
                              <div className="flex items-center justify-center gap-2">
                                 <span className="text-sm font-bold text-foreground">{m.score}</span>
                                 <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                              </div>
                           </td>
                           <td className="p-6 text-right font-headline font-bold text-foreground">
                              {m.rework}
                           </td>
                           <td className="p-6 text-right">
                              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary"><ArrowRight className="w-4 h-4" /></Button>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
                <div className="p-6 bg-white/[0.01] border-t border-white/5 flex justify-center">
                   <Button variant="outline" className="h-10 rounded-xl border-white/10 text-[9px] uppercase font-bold gap-2">
                      <History className="w-4 h-4" /> Global Certification History
                   </Button>
                </div>
             </div>
          </TabsContent>

          <TabsContent value="activity" className="animate-in fade-in duration-500">
             <div className="max-w-4xl mx-auto space-y-8">
                {serviceHistory.map((h, i) => (
                  <div key={i} className="flex gap-8 items-start group">
                     <div className="flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                           {h.type === 'claim' ? <AlertTriangle className="w-4 h-4" /> : <History className="w-4 h-4" />}
                        </div>
                        {i !== serviceHistory.length - 1 && <div className="w-px h-16 bg-white/5" />}
                     </div>
                     <div className="flex-1 pt-1 pb-4">
                        <div className="flex items-center justify-between mb-2">
                           <h4 className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{h.action}</h4>
                           <span className="text-[10px] font-bold text-muted-foreground uppercase">{h.date}</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                           <div className="space-y-1">
                              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Reference Object</p>
                              <p className="text-xs font-mono font-bold text-primary">{h.ref}</p>
                           </div>
                           <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary"><ExternalLink className="w-3.5 h-3.5" /></Button>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="h-96 w-full bg-white/5 border border-white/10 rounded-3xl animate-pulse" />
      )}
    </div>
  )
}

const serviceHistory = [
  { date: "Oct 24, 2026", action: "Lead Won", ref: "L-9942 (Rahul M.)", hub: "Bangalore HQ", type: "job" },
  { date: "Oct 22, 2026", action: "Bulk Inventory Order", ref: "ORD-9942", hub: "Stock Terminal", type: "system" },
  { date: "Oct 15, 2026", action: "Academy Certification Issued", ref: "TRA-AUTO-PPF", hub: "Academy mastery", type: "system" },
  { date: "Sep 28, 2026", action: "Claim Resolved", ref: "CLM-8821", hub: "Warranty Vault", type: "claim" },
]
