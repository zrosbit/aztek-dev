"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { 
  Settings, 
  ShieldCheck, 
  Mail, 
  Key, 
  Globe, 
  Terminal, 
  Save,
  Lock,
  Database
} from "lucide-react"

export default function SystemConfigPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1">
            <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">System <span className="text-primary italic">Control</span></h1>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Platform Infrastructure & Global Protocol Settings</p>
         </div>
         <Button variant="gradient" className="h-12 px-8 font-bold text-xs uppercase tracking-widest gap-2 shadow-2xl">
            <Save className="w-4 h-4" /> Save All Changes
         </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white/5 border-white/10 shadow-2xl">
               <CardHeader className="p-8 border-b border-white/5">
                  <div className="flex items-center gap-3">
                     <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Key className="w-5 h-5" />
                     </div>
                     <CardTitle className="text-sm uppercase tracking-widest">API Infrastructure</CardTitle>
                  </div>
               </CardHeader>
               <CardContent className="p-8 space-y-8">
                  <div className="space-y-4">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">eWarrantyFy API Endpoint</label>
                     <Input defaultValue="https://api.ewarrantyfy.com/v1" className="bg-black/20 border-white/5 h-12 rounded-xl font-mono text-xs" />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Internal Production Key</label>
                     <div className="relative">
                        <Input type="password" value="••••••••••••••••••••••••" className="bg-black/20 border-white/5 h-12 rounded-xl font-mono text-xs" readOnly />
                        <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 text-[9px] uppercase font-bold">Rotate Key</Button>
                     </div>
                  </div>
               </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 shadow-2xl">
               <CardHeader className="p-8 border-b border-white/5">
                  <div className="flex items-center gap-3">
                     <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                        <ShieldCheck className="w-5 h-5" />
                     </div>
                     <CardTitle className="text-sm uppercase tracking-widest">Warranty Protocols</CardTitle>
                  </div>
               </CardHeader>
               <CardContent className="p-8 space-y-8">
                  {[
                    { label: "Enable 10-Year Automotive Term", status: true },
                    { label: "Mandatory Installer Photo Upload", status: true },
                    { label: "Automatic Certificate Email to Customer", status: true },
                    { label: "Allow Manual Warranty Overrides", status: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                       <span className="text-xs font-bold uppercase tracking-widest text-foreground">{item.label}</span>
                       <Switch checked={item.status} className="data-[state=checked]:bg-primary" />
                    </div>
                  ))}
               </CardContent>
            </Card>
         </div>

         <div className="space-y-8">
            <Card className="bg-white/5 border-white/10 shadow-2xl">
               <CardHeader className="p-8 border-b border-white/5">
                  <CardTitle className="text-sm uppercase tracking-widest">Network Status</CardTitle>
               </CardHeader>
               <CardContent className="p-8 space-y-6">
                  <div className="space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <div className="space-y-0.5">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">Cloud Engine</p>
                           <p className="text-[10px] text-muted-foreground uppercase">Normal Performance</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div className="space-y-0.5">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">Database Core</p>
                           <p className="text-[10px] text-muted-foreground uppercase">Stable · 12ms Latency</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <div className="space-y-0.5">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">Auth Service</p>
                           <p className="text-[10px] text-muted-foreground uppercase">Multi-Region Active</p>
                        </div>
                     </div>
                  </div>
                  <Button variant="outline" className="w-full h-12 rounded-2xl text-[10px] uppercase font-bold tracking-widest border-white/10 gap-2 mt-4">
                     <Terminal className="w-4 h-4" /> System Terminal
                  </Button>
               </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20 p-8 rounded-3xl space-y-6">
               <div className="flex items-center gap-3 text-primary">
                  <Database className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-widest">Database Backup</h4>
               </div>
               <p className="text-xs text-muted-foreground leading-relaxed font-medium">Automatic snapshot scheduled for 02:00 UTC. Last backup successful 22h ago.</p>
               <Button className="w-full h-12 text-[10px] font-bold uppercase tracking-widest rounded-full">Run Manual Snapshot</Button>
            </Card>
         </div>
      </div>
    </div>
  )
}
