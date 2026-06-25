import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { GraduationCap, Trophy, Lock, PlayCircle, Star } from "lucide-react"

export default function AcademyPage() {
  const tracks = [
    { title: "Automotive PPF", level: "Expert", progress: 85, status: "Active", icon: Star },
    { title: "Architectural Solar", level: "Intermediate", progress: 40, status: "Active", icon: Trophy },
    { title: "Moto Precision Fit", level: "Beginner", progress: 0, status: "Locked", icon: Lock },
  ]

  const tiers = [
    { name: "Silver", color: "text-slate-400", benefits: "Standard Warranty Rights" },
    { name: "Gold", color: "text-amber-500", benefits: "Priority Support + Locator Placement" },
    { name: "Platinum", color: "text-blue-500", benefits: "Direct Factory Leads + Wholesale Discount" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-headline font-bold tracking-tight">Aztek Academy</h1>
        <p className="text-muted-foreground">Tiered certification and quality control gateway.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <Card key={tier.name} className="bg-card border-white/5 relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-1 h-full bg-current ${tier.color}`} />
            <CardHeader>
              <CardTitle className={tier.color}>{tier.name} Partner</CardTitle>
              <CardDescription className="text-xs uppercase font-bold tracking-widest">Aztek Certification</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{tier.benefits}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-headline font-bold">Your Discipline Tracks</h2>
      <div className="grid grid-cols-1 gap-4">
        {tracks.map((track) => (
          <Card key={track.title} className={cn(
            "bg-card border-white/5",
            track.status === "Locked" && "opacity-60 cursor-not-allowed"
          )}>
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                <track.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-headline font-bold text-lg">{track.title}</h3>
                  <Badge variant="outline" className="text-[10px] border-white/10 uppercase">{track.level}</Badge>
                </div>
                <div className="flex items-center gap-4">
                  <Progress value={track.progress} className="flex-1 h-2" />
                  <span className="text-xs font-bold w-12">{track.progress}%</span>
                </div>
              </div>
              <Button disabled={track.status === "Locked"} className="shrink-0">
                {track.status === "Locked" ? "Locked" : "Resume Module"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}