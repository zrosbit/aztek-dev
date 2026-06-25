"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowRight,
  MessageSquare,
  Users,
  Shield,
  LifeBuoy,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/layout/site-header"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [activeInquiry, setActiveInquiry] = useState("General")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const inquiryTypes = ["General", "Partner", "Dealer", "Architect", "Builder", "Enterprise"]

  const specificLeads = [
    { title: "Sales Inquiry", desc: "Product information and quotes", icon: MessageSquare },
    { title: "Partner Program", desc: "Join our partner network", icon: Users },
    { title: "Warranty Support", desc: "Warranty registration and claims", icon: ShieldCheck },
    { title: "Technical Support", desc: "Installation and product support", icon: LifeBuoy },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message Transmitted",
        description: "Your inquiry has been routed to the relevant technical department.",
      })
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-8 text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter text-foreground">
              Contact Us
            </h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team for inquiries, support, or partnership opportunities
            </p>
          </div>
        </section>

        {/* Contact Form & Info Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Info Column */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">Get In Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Address</p>
                      <p className="text-sm font-bold text-foreground leading-relaxed">Mumbai, Maharashtra<br />India</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone</p>
                      <p className="text-sm font-bold text-foreground">+91 98765 43210</p>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Mon-Sat: 9AM - 7PM</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                      <p className="text-sm font-bold text-foreground">info@aztek.com</p>
                      <p className="text-sm font-bold text-foreground">support@aztek.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-square rounded-[32px] bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center group grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />
                <MapPin className="w-12 h-12 text-primary opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8">
              <Card className="bg-card border-white/5 p-8 md:p-12 shadow-2xl rounded-[40px]">
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-headline font-bold uppercase text-foreground">Send Us a Message</h3>
                    
                    {/* Inquiry Type Tabs */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Inquiry Type</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setActiveInquiry(type)}
                            className={cn(
                              "h-11 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all",
                              activeInquiry === type 
                                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                                : "bg-white/5 border-white/5 text-muted-foreground hover:border-white/20"
                            )}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Name *</label>
                        <Input required placeholder="Your name" className="bg-background/50 border-white/10 h-14 rounded-2xl focus:ring-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email *</label>
                        <Input type="email" required placeholder="your@email.com" className="bg-background/50 border-white/10 h-14 rounded-2xl focus:ring-primary/50" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Phone *</label>
                        <Input required type="tel" placeholder="+91 98765 43210" className="bg-background/50 border-white/10 h-14 rounded-2xl focus:ring-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject *</label>
                        <Input required placeholder="How can we help?" className="bg-background/50 border-white/10 h-14 rounded-2xl focus:ring-primary/50" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                      <Textarea placeholder="Type your message here..." className="bg-background/50 border-white/10 min-h-[160px] rounded-2xl text-sm p-6 focus:ring-primary/50" />
                    </div>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full h-16 btn-electric rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Specific Inquiries Section */}
        <section className="py-40 bg-card/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-8 space-y-16">
            <h2 className="text-4xl font-headline font-bold uppercase tracking-tight text-center">
              Looking for <span className="text-primary italic">Something Specific?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specificLeads.map((item) => (
                <Card key={item.title} className="bg-white/5 border-white/5 p-8 flex flex-col items-center justify-center text-center space-y-6 group hover:border-primary/40 transition-all shadow-xl hover:bg-white/[0.08] cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-[10px] font-medium text-muted-foreground uppercase leading-relaxed tracking-tight">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final Branding / Footer */}
        <footer className="bg-[#0A0A0A] border-t border-white/5 py-24">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 space-y-8">
              <div className="flex flex-col items-start leading-none">
                <span className="font-headline font-bold text-2xl tracking-[0.18em] uppercase text-foreground">AZTEK</span>
                <span className="text-[8px] font-bold tracking-[0.3em] text-muted-foreground uppercase mt-0.5">PROTECTION TECHNOLOGY</span>
              </div>
              <p className="text-[11px] text-muted-foreground max-w-xs font-medium leading-relaxed uppercase tracking-tight">
                Protection Technology Ecosystem for vehicles, motorcycles, and architectural solutions. Delivering factory-finish defense since 2014.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="w-10 h-10 rounded-xl border-white/5 bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-10 h-10 rounded-xl border-white/5 bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-10 h-10 rounded-xl border-white/5 bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-10 h-10 rounded-xl border-white/5 bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Solutions</h5>
              <div className="flex flex-col gap-3 text-[10px] uppercase font-bold text-muted-foreground">
                <Link href="/solutions/automotive" className="hover:text-foreground">Automotive Protection</Link>
                <Link href="/solutions/moto" className="hover:text-foreground">Motorcycle Protection</Link>
                <Link href="/solutions/architectural" className="hover:text-foreground">Architectural Films</Link>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Company</h5>
              <div className="flex flex-col gap-3 text-[10px] uppercase font-bold text-muted-foreground">
                <Link href="/about" className="hover:text-foreground">About Us</Link>
                <Link href="/partners" className="hover:text-foreground">Partner Network</Link>
                <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link>
                <Link href="/resources" className="hover:text-foreground">Resources</Link>
                <Link href="/warranty" className="hover:text-foreground">Warranty Center</Link>
              </div>
            </div>

            <div className="md:col-span-4 space-y-6">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Contact</h5>
              <div className="flex flex-col gap-4 text-[11px] uppercase font-bold text-muted-foreground">
                <p className="flex items-center gap-3"><MapPin className="w-3.5 h-3.5 text-primary" /> Mumbai, Maharashtra, India</p>
                <p className="flex items-center gap-3"><Phone className="w-3.5 h-3.5 text-primary" /> +91 98765 43210</p>
                <p className="flex items-center gap-3"><Mail className="w-3.5 h-3.5 text-primary" /> info@aztek.com</p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-8 pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold uppercase text-muted-foreground tracking-[0.4em]">
            <p>© 2026 AZTEK Ecosystem PVT LTD. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
