
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  FileBadge, 
  Search, 
  Plus, 
  ExternalLink, 
  QrCode, 
  Calendar,
  CheckCircle2,
  AlertTriangle
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function WarrantyManagementPage() {
  const [activeTab, setActiveTab] = useState("active")

  const warranties = [
    { 
      id: "AZ-2024-KA-11242", 
      customer: "Rahul Sharma", 
      product: "AZTEK Automotive PPF (10yr)", 
      date: "Oct 24, 2024", 
      expiry: "Oct 24, 2034", 
      status: "Active" 
    },
    { 
      id: "AZ-2024-KA-11239", 
      customer: "Aditi Rao", 
      product: "Moto Shield Pro (7yr)", 
      date: "Oct 22, 2024", 
      expiry: "Oct 22, 2031", 
      status: "Active" 
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-headline font-bold tracking-tight">eWarrantyFy Portal</h1>
          <p className="text-muted-foreground">Digital warranty issuance and lifecycle management.</p>
        </div>
        <Button className="h-12 px-6 font-bold text-xs uppercase tracking-widest gap-2 bg-primary shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4" />
          Issue New Warranty
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-white/5">
          <CardContent className="p-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Total Issued</span>
              <span className="text-3xl font-headline font-bold">128</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-white/5">
          <CardContent className="p-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Active Policy</span>
              <span className="text-3xl font-headline font-bold text-green-500">124</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-white/5">
          <CardContent className="p-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Claims Open</span>
              <span className="text-3xl font-headline font-bold text-red-500">2</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-white/5">
          <CardContent className="p-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Verification Rate</span>
              <span className="text-3xl font-headline font-bold text-primary">98%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search by Warranty ID, Customer or Vehicle Reg..." className="pl-10 bg-card border-white/5 h-12" />
          </div>
        </div>

        <div className="space-y-3">
          {warranties.map((w) => (
            <Card key={w.id} className="bg-card border-white/5 hover:border-primary/20 transition-all group">
              <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                  <QrCode className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-primary">{w.id}</span>
                        <Badge className="bg-green-500/10 text-green-500 text-[10px] uppercase border-green-500/20">{w.status}</Badge>
                      </div>
                      <h4 className="font-bold text-lg">{w.customer}</h4>
                      <p className="text-xs text-muted-foreground">{w.product}</p>
                    </div>
                    <div className="flex md:flex-col gap-4 md:gap-1 items-start md:items-end text-right">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        Issued: {w.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-500">
                        <ShieldCheck className="w-3 h-3" />
                        Expires: {w.expiry}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex gap-2 w-full lg:w-auto">
                  <Button variant="outline" className="flex-1 lg:flex-none border-white/5 hover:bg-white/5 gap-2 text-xs font-bold uppercase tracking-widest">
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </Button>
                  <Button variant="outline" className="flex-1 lg:flex-none border-white/5 hover:bg-white/5 gap-2 text-xs font-bold uppercase tracking-widest">
                    <AlertTriangle className="w-3 h-3" />
                    Raise Claim
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
