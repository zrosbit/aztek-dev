"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  ShieldCheck, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2, 
  Loader2,
  Building2,
  User,
  MapPin,
  Clock,
  Briefcase,
  Layers,
  ChevronRight,
  Upload,
  Globe,
  Zap,
  Info,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { SiteHeader } from "@/components/layout/site-header"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function UniversalOnboardingPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const totalSteps = 10
  const progress = (step / totalSteps) * 100

  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps))
  const handleBack = () => setStep(s => Math.max(s - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Application Received",
        description: "Your UPOS profile has been transmitted to Global Network Ops.",
      })
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 flex flex-col items-center py-20 px-8 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl w-full space-y-12 relative z-10">
          {!isSubmitted && (
            <div className="space-y-6 text-center">
              <Badge variant="outline" className="px-4 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-[0.3em] font-bold text-[10px]">
                Universal Onboarding System (UPOS)
              </Badge>
              <h1 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-none">
                Entry into the <span className="text-primary italic">Ecosystem.</span>
              </h1>
              <div className="max-w-md mx-auto space-y-2">
                <div className="flex justify-between text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                  <span>Progress</span>
                  <span>Step {step} of {totalSteps}</span>
                </div>
                <Progress value={progress} className="h-1 bg-white/5" />
              </div>
            </div>
          )}

          <Card className="glass border-white/10 overflow-hidden shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-0">
                <div className="p-8 md:p-12 min-h-[500px]">
                  {/* Step 1: Basic Information */}
                  {step === 1 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-bold uppercase">Basic Information</h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Primary Contact & Identity</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Business Name *</label>
                          <Input required placeholder="e.g., Elite Wraps Studio" className="bg-background/50 border-white/10 h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Owner Name *</label>
                          <Input required placeholder="Full Name" className="bg-background/50 border-white/10 h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Mobile Number *</label>
                          <Input required type="tel" placeholder="+91 ..." className="bg-background/50 border-white/10 h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Email Address *</label>
                          <Input required type="email" placeholder="owner@business.com" className="bg-background/50 border-white/10 h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">City *</label>
                          <Input required placeholder="e.g., Bengaluru" className="bg-background/50 border-white/10 h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">State *</label>
                          <Input required placeholder="Karnataka" className="bg-background/50 border-white/10 h-12 rounded-xl" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Partner Persona */}
                  {step === 2 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-bold uppercase">Partner Persona</h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">What best describes your business?</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Automotive Detailing Studio",
                          "PPF Installer",
                          "Ceramic Coating Studio",
                          "Motorcycle Protection Specialist",
                          "Architectural Film Installer",
                          "Distributor",
                          "Retailer",
                          "Franchise Applicant",
                          "Enterprise / Fleet",
                          "Individual Installer"
                        ].map((persona) => (
                          <div key={persona} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-primary/40 transition-all group">
                            <Checkbox id={persona} className="data-[state=checked]:bg-primary" />
                            <label htmlFor={persona} className="text-xs font-bold uppercase tracking-tight cursor-pointer group-hover:text-primary transition-colors">{persona}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Business Information */}
                  {step === 3 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-bold uppercase">Business Intelligence</h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Market Experience & Scale</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Years in Business</label>
                          <Select>
                            <SelectTrigger className="bg-background/50 border-white/10 h-12 rounded-xl">
                              <SelectValue placeholder="Select period" />
                            </SelectTrigger>
                            <SelectContent className="glass">
                              <SelectItem value="<1">Less than 1 year</SelectItem>
                              <SelectItem value="1-3">1–3 years</SelectItem>
                              <SelectItem value="3-5">3–5 years</SelectItem>
                              <SelectItem value="5+">5+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Team Size</label>
                          <Select>
                            <SelectTrigger className="bg-background/50 border-white/10 h-12 rounded-xl">
                              <SelectValue placeholder="Select team size" />
                            </SelectTrigger>
                            <SelectContent className="glass">
                              <SelectItem value="1-2">1–2</SelectItem>
                              <SelectItem value="3-5">3–5</SelectItem>
                              <SelectItem value="6-10">6–10</SelectItem>
                              <SelectItem value="10+">10+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Monthly Install Volume</label>
                          <Select>
                            <SelectTrigger className="bg-background/50 border-white/10 h-12 rounded-xl">
                              <SelectValue placeholder="Select volume" />
                            </SelectTrigger>
                            <SelectContent className="glass">
                              <SelectItem value="<10">&lt;10</SelectItem>
                              <SelectItem value="10-25">10–25</SelectItem>
                              <SelectItem value="25-50">25–50</SelectItem>
                              <SelectItem value="50+">50+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Product Interest */}
                  {step === 4 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-bold uppercase">Product Interest</h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Select relevant categories for your studio</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                          <h4 className="text-[10px] font-bold uppercase text-primary tracking-widest">Automotive</h4>
                          <div className="space-y-3">
                            {["PPF", "Ceramic Coating", "Window Films"].map(item => (
                              <div key={item} className="flex items-center gap-3">
                                <Checkbox id={`auto-${item}`} />
                                <label htmlFor={`auto-${item}`} className="text-[11px] font-bold uppercase">{item}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                          <h4 className="text-[10px] font-bold uppercase text-primary tracking-widest">Motorcycle</h4>
                          <div className="space-y-3">
                            {["Moto PPF", "Optic Shield"].map(item => (
                              <div key={item} className="flex items-center gap-3">
                                <Checkbox id={`moto-${item}`} />
                                <label htmlFor={`moto-${item}`} className="text-[11px] font-bold uppercase">{item}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                          <h4 className="text-[10px] font-bold uppercase text-primary tracking-widest">Architectural</h4>
                          <div className="space-y-3">
                            {["Solar Films", "Safety Films", "Decorative Films", "Anti-Graffiti"].map(item => (
                              <div key={item} className="flex items-center gap-3">
                                <Checkbox id={`arch-${item}`} />
                                <label htmlFor={`arch-${item}`} className="text-[11px] font-bold uppercase">{item}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Facility Details */}
                  {step === 5 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-bold uppercase">Facility Details</h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Infrastructure Audit</p>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Studio Full Address</label>
                          <Textarea placeholder="Enter complete operational address..." className="bg-background/50 border-white/10 rounded-xl" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase text-muted-foreground">GST Number</label>
                            <Input placeholder="29AAACG..." className="bg-background/50 border-white/10 h-12 rounded-xl font-mono" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase text-muted-foreground">Number of Bays</label>
                            <Input type="number" placeholder="2" className="bg-background/50 border-white/10 h-12 rounded-xl" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                            <span className="text-xs font-bold uppercase">Indoor Facility?</span>
                            <Checkbox />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                            <span className="text-xs font-bold uppercase">Dedicated PPF Room?</span>
                            <Checkbox />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 6: Documents */}
                  {step === 6 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-bold uppercase">Upload Documents</h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Verify Business Authenticity</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          { label: "GST Certificate", icon: FileText },
                          { label: "Business Registration", icon: Briefcase },
                          { label: "Studio Photos (Interior)", icon: Building2 },
                          { label: "Team Photo", icon: User }
                        ].map((doc) => (
                          <div key={doc.label} className="p-8 border-2 border-dashed border-white/5 bg-white/[0.02] rounded-2xl flex flex-col items-center justify-center gap-4 group hover:border-primary/30 transition-all cursor-pointer">
                            <doc.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{doc.label}</span>
                            <Button variant="outline" size="sm" className="rounded-full text-[8px] h-8 px-4 border-white/10">Select File</Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 7: Service Area */}
                  {step === 7 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-bold uppercase">Service Area</h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Lead Routing Geography</p>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Cities Covered (Comma separated)</label>
                          <Input placeholder="e.g., Bengaluru, Mysore, Hubli" className="bg-background/50 border-white/10 h-12 rounded-xl" />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Operational Radius</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {["10 km", "25 km", "50 km", "100 km"].map(rad => (
                              <button key={rad} type="button" className="p-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold uppercase hover:border-primary transition-all">
                                {rad}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 8: Academy Track */}
                  {step === 8 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-bold uppercase">Academy Track</h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Education & Certification Path</p>
                      </div>
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase text-muted-foreground">Primary Discipline</label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {["Automotive", "Motorcycle", "Architectural"].map(track => (
                              <div key={track} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl">
                                <Checkbox id={`primary-${track}`} className="rounded-full" />
                                <label htmlFor={`primary-${track}`} className="text-xs font-bold uppercase">{track}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl flex items-start gap-4">
                          <Info className="w-5 h-5 text-primary shrink-0" />
                          <p className="text-[10px] text-muted-foreground leading-relaxed uppercase font-bold">This determines your initial certification modules and regional lead routing categories.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 9: Business Goals */}
                  {step === 9 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-bold uppercase">Business Goals</h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Why do you want to partner with AZTEK?</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Premium Products",
                          "Training & Certification",
                          "More Leads",
                          "Marketing Support",
                          "Better Margins",
                          "Distribution Opportunities",
                          "Brand Association"
                        ].map((goal) => (
                          <div key={goal} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-primary/40 transition-all group">
                            <Checkbox id={goal} className="data-[state=checked]:bg-primary" />
                            <label htmlFor={goal} className="text-xs font-bold uppercase tracking-tight cursor-pointer group-hover:text-primary transition-colors">{goal}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 10: Agreement */}
                  {step === 10 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-bold uppercase">Final Agreement</h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Legal & Platform Protocols</p>
                      </div>
                      <div className="space-y-6 pt-6">
                        {[
                          "I confirm the information provided is accurate.",
                          "I agree to AZTEK Partner Terms & Conditions.",
                          "I understand Connect access is unlocked only after certification."
                        ].map((clause, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-primary/20 transition-all">
                            <Checkbox required id={`agree-${idx}`} className="mt-1 data-[state=checked]:bg-primary" />
                            <label htmlFor={`agree-${idx}`} className="text-xs font-bold uppercase leading-relaxed cursor-pointer group-hover:text-foreground transition-colors">{clause}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="p-8 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={handleBack} 
                    disabled={step === 1}
                    className="text-[10px] font-bold uppercase tracking-widest gap-2 disabled:opacity-0"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>

                  {step < totalSteps ? (
                    <Button 
                      type="button" 
                      onClick={handleNext} 
                      className="h-12 px-10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl"
                    >
                      Next Phase <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="btn-electric h-12 px-12 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em]"
                    >
                      {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Transmitting...</> : <>Complete Application <ArrowRight className="w-4 h-4 ml-2" /></>}
                    </Button>
                  )}
                </div>
              </form>
            ) : (
              <div className="p-20 text-center space-y-10 animate-in fade-in zoom-in-95 duration-700">
                <div className="w-24 h-24 rounded-[40px] bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(34,197,94,0.1)]">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-headline font-bold uppercase tracking-tight">Transmission <span className="text-green-500 italic">Success.</span></h3>
                  <div className="max-w-sm mx-auto space-y-6 pt-4">
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                      Your application has been received by the Global Network Operations team. Our territory managers will review your facility details within 48 hours.
                    </p>
                    <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Application ID</p>
                      <p className="font-mono text-primary font-bold">AZ-PARTNER-2026-0142</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" asChild className="rounded-full px-10 h-14 text-[10px] uppercase font-bold tracking-widest border-white/10 hover:bg-white/5">
                      <Link href="/">Main Terminal</Link>
                    </Button>
                    <Button asChild className="rounded-full px-10 h-14 text-[10px] uppercase font-bold tracking-widest shadow-xl">
                      <Link href="/resources">Technical Resources</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
          
          {!isSubmitted && (
             <div className="flex justify-center items-center gap-12 pt-8 opacity-40 select-none grayscale group-hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center gap-2">
                   <ShieldCheck className="w-5 h-5 text-primary" />
                   <span className="text-[8px] font-bold uppercase tracking-widest">Encrypted</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <Globe className="w-5 h-5 text-primary" />
                   <span className="text-[8px] font-bold uppercase tracking-widest">Global Sync</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <Clock className="w-5 h-5 text-primary" />
                   <span className="text-[8px] font-bold uppercase tracking-widest">48H SLA</span>
                </div>
             </div>
          )}
        </div>
      </main>
    </div>
  )
}
