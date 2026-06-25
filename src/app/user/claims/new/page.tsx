"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  ShieldAlert, 
  ArrowLeft, 
  ArrowRight,
  Camera, 
  Upload, 
  CheckCircle2, 
  Loader2,
  Info,
  Shield,
  FileText,
  X,
  Plus
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Suspense } from "react"

function NewClaimForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const warrantyIdParam = searchParams.get('id') || ""

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [photos, setPhotos] = useState<string[]>([])
  
  const [formData, setFormData] = useState({
    warrantyId: warrantyIdParam,
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (photos.length === 0) {
      toast({ variant: "destructive", title: "Documentation Required", description: "At least one forensic photo is required for claim review." })
      return
    }
    
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({ title: "Claim Initialized", description: "Forensic ID CLM-9945 created. Reviewing via AI Core." })
      router.push("/user/claims")
    }, 2500)
  }

  const addDummyPhoto = () => {
    if (photos.length < 5) {
      const dummyPhoto = `https://picsum.photos/seed/claim${photos.length}/400/300`
      setPhotos([...photos, dummyPhoto])
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <Card className="bg-white/5 border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
        <CardHeader className="p-8 border-b border-white/5 bg-white/[0.01]">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield className="w-5 h-5" />
             </div>
             <div>
                <CardTitle className="text-sm uppercase tracking-widest">Policy Verification</CardTitle>
                <CardDescription className="text-[10px] font-bold uppercase tracking-widest">Contextual Identity Check</CardDescription>
             </div>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Verified Warranty ID</label>
                <Input 
                  required 
                  placeholder="AZ-YYYY-SS-NNNNN" 
                  className="h-12 bg-white/5 border-white/5 text-sm font-mono tracking-widest rounded-xl focus:ring-primary/40 uppercase"
                  value={formData.warrantyId}
                  onChange={(e) => setFormData({...formData, warrantyId: e.target.value})}
                />
             </div>
             <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-center gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <p className="text-[10px] font-bold text-primary leading-relaxed uppercase">Identity Pre-Matched to eWarrantyFy Registry</p>
             </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/5 border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
        <CardHeader className="p-8 border-b border-white/5 bg-white/[0.01]">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                 <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                 <CardTitle className="text-sm uppercase tracking-widest">Defect intelligence</CardTitle>
                 <CardDescription className="text-[10px] font-bold uppercase tracking-widest">Forensic Description & Documentation</CardDescription>
              </div>
           </div>
        </CardHeader>
        <CardContent className="p-8 space-y-10">
          <div className="space-y-4">
             <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Describe the Observed Issue *</label>
             <Textarea 
               required
               placeholder="Provide technical details about lifting, discoloration, or surface failure..." 
               className="min-h-[160px] bg-white/5 border-white/10 rounded-2xl p-6 text-sm focus:ring-primary/40"
               value={formData.description}
               onChange={(e) => setFormData({...formData, description: e.target.value})}
             />
          </div>

          <div className="space-y-6">
             <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest ml-1">Evidence Documentation *</label>
                <span className="text-[10px] font-bold text-muted-foreground uppercase">{photos.length} / 5 Captured</span>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {photos.map((photo, i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/10 p-1 relative group overflow-hidden">
                     <img src={photo} alt="Defect evidence" className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all" />
                     <button 
                       type="button"
                       onClick={() => setPhotos(photos.filter((_, idx) => idx !== i))}
                       className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                     >
                        <X className="w-3 h-3" />
                     </button>
                  </div>
                ))}
                
                {photos.length < 5 && (
                  <button 
                    type="button"
                    onClick={addDummyPhoto}
                    className="aspect-square rounded-2xl border-2 border-dashed border-white/10 bg-white/[0.01] hover:bg-white/[0.05] hover:border-primary/40 transition-all flex flex-col items-center justify-center gap-3 group"
                  >
                     <Camera className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                     <span className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest">Add Evidence</span>
                  </button>
                )}
             </div>

             <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl flex gap-3">
                <Info className="w-4 h-4 text-amber-500 shrink-0" />
                <p className="text-[9px] font-bold text-muted-foreground uppercase leading-relaxed">
                   High-resolution macro photos of the affected area are critical for rapid AI forensic review. Ensure the focus is clear and lighting is direct.
                </p>
             </div>
          </div>
        </CardContent>
        <CardFooter className="p-8 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
           <Button type="button" variant="ghost" asChild className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground hover:text-foreground">
              <Link href="/user/dashboard">Discard Draft</Link>
           </Button>
           <Button type="submit" disabled={isSubmitting} className="h-14 px-12 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl min-w-[240px]">
              {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Transmitting...</> : <>Initiate Forensic Review <ArrowRight className="w-4 h-4 ml-2" /></>}
           </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

export default function NewClaimPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <div className="flex items-center gap-6">
        <Button asChild variant="ghost" className="h-12 w-12 rounded-full border border-white/5 bg-white/5 p-0">
           <Link href="/user/dashboard"><ArrowLeft className="w-5 h-5" /></Link>
        </Button>
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-foreground">Raise Forensic <span className="text-primary italic">Claim</span></h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Protocol A5: Structured Support Request</p>
        </div>
      </div>

      <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>}>
        <NewClaimForm />
      </Suspense>
    </div>
  )
}
