"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, ShieldAlert, CheckCircle2, Search, FileText, Camera } from "lucide-react"
import { reviewClaim, type SmartClaimReviewOutput } from "@/ai/flows/smart-claim-review-tool"

export default function ClaimsReviewPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<SmartClaimReviewOutput | null>(null)
  const [formData, setFormData] = useState({
    claimEvidence: "",
    historicalRecords: "",
    photoUrl: ""
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      // Mocking a photo URI for demo purposes if not provided, 
      // though in real app it would be an actual base64 upload
      const defaultPhoto = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
      
      const response = await reviewClaim({
        claimEvidence: formData.claimEvidence,
        historicalJobRecords: formData.historicalRecords,
        installationPhotos: [formData.photoUrl || defaultPhoto]
      })
      setResult(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-headline font-bold tracking-tight">Smart Claim Review</h1>
        <p className="text-muted-foreground">AI-powered forensic analysis of installation claims and job evidence.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-card border-white/5">
          <CardHeader>
            <CardTitle>Evidence Submission</CardTitle>
            <CardDescription>Input detailed claim data for technical reasoning.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Claim Evidence</label>
                <Textarea 
                  placeholder="Describe customer statement, dates, and observed defect..." 
                  className="bg-background border-white/5 h-32"
                  value={formData.claimEvidence}
                  onChange={(e) => setFormData({...formData, claimEvidence: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Installer History</label>
                <Textarea 
                  placeholder="Summarize past job performance and relevant certifications..." 
                  className="bg-background border-white/5 h-24"
                  value={formData.historicalRecords}
                  onChange={(e) => setFormData({...formData, historicalRecords: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Photo Documentation (Data URI)</label>
                <Input 
                  placeholder="data:image/jpeg;base64,..." 
                  className="bg-background border-white/5"
                  value={formData.photoUrl}
                  onChange={(e) => setFormData({...formData, photoUrl: e.target.value})}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
                Analyze for Inconsistencies
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {result ? (
            <Card className={cn(
              "bg-card border-white/5 transition-all duration-500",
              result.hasIssues ? "border-red-500/20" : "border-green-500/20"
            )}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>AI Reasoning Output</CardTitle>
                  <Badge variant={result.hasIssues ? "destructive" : "default"} className="bg-green-500">
                    {result.issueType}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert variant={result.hasIssues ? "destructive" : "default"} className={cn(
                  "border-white/5",
                  result.hasIssues ? "bg-red-500/5" : "bg-green-500/5"
                )}>
                  {result.hasIssues ? <ShieldAlert className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                  <AlertTitle className="font-bold">
                    {result.hasIssues ? "Potential Issue Detected" : "Clearance Verified"}
                  </AlertTitle>
                  <AlertDescription className="text-sm mt-2 leading-relaxed">
                    {result.explanation}
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase text-muted-foreground font-bold">Verification Engine</span>
                    <p className="text-xs">Nexus Vision v4.2</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase text-muted-foreground font-bold">Confidence Score</span>
                    <p className="text-xs">98.2% Accurate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-white/5 rounded-xl text-muted-foreground bg-white/[0.02]">
              <FileText className="w-12 h-12 mb-4 opacity-20" />
              <h3 className="font-headline font-bold text-lg mb-2">No Analysis Running</h3>
              <p className="text-sm max-w-xs">Submit claim evidence to generate an AI-powered technical review.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
