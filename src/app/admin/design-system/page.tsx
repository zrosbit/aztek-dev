'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Palette, 
  Type, 
  Box, 
  Layout, 
  Move, 
  ShieldCheck, 
  Zap,
  CheckCircle2,
  Car,
  Bike,
  Building2,
  Plug,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DesignSystemPage() {
  const colors = [
    { name: "Obsidian Black", hex: "#0A0A0A", role: "Primary BG", class: "bg-[#0A0A0A]" },
    { name: "Graphite", hex: "#1A1A1A", role: "Surface / Nav", class: "bg-[#1A1A1A]" },
    { name: "Charcoal", hex: "#2A2A2A", role: "Cards / Hover", class: "bg-[#2A2A2A]" },
    { name: "Titanium", hex: "#6B7280", role: "Secondary Text", class: "bg-[#6B7280]" },
    { name: "Off-White", hex: "#F4F4F4", role: "Primary Text", class: "bg-[#F4F4F4]" },
    { name: "Pure White", hex: "#FFFFFF", role: "Emphasis", class: "bg-[#FFFFFF]" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-headline font-bold tracking-tight">Design System</h1>
        <p className="text-muted-foreground">AZTEK Brand Design Standards — Pro Edition v1.0</p>
      </div>

      <Tabs defaultValue="colors" className="space-y-6">
        <TabsList className="bg-card border border-border w-full justify-start h-12 p-1 gap-1 overflow-x-auto scrollbar-hide">
          <TabsTrigger value="colors" className="gap-2 text-xs uppercase tracking-widest px-4"><Palette className="w-3 h-3" /> Colors</TabsTrigger>
          <TabsTrigger value="typography" className="gap-2 text-xs uppercase tracking-widest px-4"><Type className="w-3 h-3" /> Typography</TabsTrigger>
          <TabsTrigger value="identity" className="gap-2 text-xs uppercase tracking-widest px-4"><ShieldCheck className="w-3 h-3" /> Identity</TabsTrigger>
          <TabsTrigger value="components" className="gap-2 text-xs uppercase tracking-widest px-4"><Box className="w-3 h-3" /> Components</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-headline font-bold">Obsidian First. Electric Blue Accent.</h3>
            <p className="text-sm text-muted-foreground max-w-2xl">AZTEK's color system is built on deep blacks and graphites, with Electric Blue as the single accent.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {colors.map((color) => (
              <Card key={color.name} className="overflow-hidden bg-card border-border">
                <div className={cn("h-24 w-full border-b border-border", color.class)} />
                <CardContent className="p-3 space-y-1">
                  <p className="font-bold text-xs">{color.name}</p>
                  <p className="text-[10px] font-mono text-muted-foreground">{color.hex}</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{color.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card border-primary/20 p-6 space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#2563EB]" />
              <h4 className="font-bold">Electric Blue</h4>
              <p className="text-xs text-muted-foreground">#2563EB · Technology, trust, innovation. Positions AZTEK as a software-forward protection platform.</p>
              <Badge variant="secondary" className="bg-primary/10 text-primary">Recommended Accent</Badge>
            </Card>
            <Card className="bg-card border-border p-6 space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#C6A56B]" />
              <h4 className="font-bold">Champagne Gold</h4>
              <p className="text-xs text-muted-foreground">#C6A56B · Luxury, prestige. Better for high-end automotive detailing positioning.</p>
              <Badge variant="outline">Alternative Accent</Badge>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="typography" className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-headline font-bold">Space Grotesk + Inter</h3>
            <p className="text-sm text-muted-foreground max-w-2xl">Space Grotesk for display moments. Inter for body and UI. Confidence meet utility.</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8 py-6 border-b border-border">
              <div className="col-span-1 space-y-1">
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Display</p>
                <p className="text-xs font-mono text-primary">38px / 700 / Space Grotesk</p>
              </div>
              <div className="col-span-3 text-4xl font-headline font-bold">Protection Technology.</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8 py-6 border-b border-border">
              <div className="col-span-1 space-y-1">
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Body Text</p>
                <p className="text-xs font-mono text-primary">14px / 400 / Inter</p>
              </div>
              <div className="col-span-3 text-sm text-muted-foreground leading-relaxed">
                Advanced molecular surface armor designed to preserve OEM finish integrity for the full service life of the vehicle. Engineered to protect, built to endure.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8 py-6">
              <div className="col-span-1 space-y-1">
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Labels</p>
                <p className="text-xs font-mono text-primary">12px / 500 / 0.2em ls</p>
              </div>
              <div className="col-span-3 text-xs uppercase font-bold tracking-[0.2em]">AUTOMOTIVE · MOTORCYCLE · ARCHITECTURAL</div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="identity" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "AZTEK Automotive", icon: Car, desc: "PPF, ceramic, window films for vehicles" },
              { title: "AZTEK Moto", icon: Bike, desc: "Precision kits for superbikes" },
              { title: "AZTEK Architectural", icon: Building2, desc: "Intelligent glazing & surface films" },
              { title: "AZTEK Connect", icon: Plug, desc: "Partner portal & management OS", color: "text-green-500" },
              { title: "AZTEK Academy", icon: Award, desc: "Installer training & certification", color: "text-amber-500" },
              { title: "AZTEK Warranty", icon: ShieldCheck, desc: "10-year performance guarantee" },
            ].map((sub) => (
              <Card key={sub.title} className="bg-card border-border hover:border-primary/20 transition-all p-6 text-center space-y-4">
                <div className={cn("w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto", sub.color || "text-primary")}>
                  <sub.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{sub.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{sub.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="components" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border p-8 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Button Variations</h4>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-electric">Become a Partner</Button>
                <Button variant="outline">Explore Solutions</Button>
                <Button variant="ghost" className="text-primary font-bold">View Hub →</Button>
              </div>
            </Card>
            <Card className="bg-card border-border p-8 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Badge Variations</h4>
              <div className="flex flex-wrap gap-4">
                <Badge>Automotive</Badge>
                <Badge variant="secondary" className="bg-green-500/10 text-green-500">Warranty Active</Badge>
                <Badge variant="outline" className="text-primary border-primary/20">Certified</Badge>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
