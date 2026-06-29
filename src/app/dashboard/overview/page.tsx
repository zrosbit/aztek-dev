import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  ShieldCheck, 
  BarChart3, 
  TrendingUp, 
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const stats = [
    { label: "Active Partners", value: "1,248", change: "+12%", icon: Users, color: "text-blue-500" },
    { label: "Total Warranties", value: "48.2k", change: "+8.4%", icon: ShieldCheck, color: "text-green-500" },
    { label: "Revenue Forecast", value: "$1.2M", change: "+5.2%", icon: BarChart3, color: "text-amber-500" },
    { label: "Quality Score", value: "99.4%", change: "Stable", icon: TrendingUp, color: "text-purple-500" },
  ]

  const recentClaims = [
    { id: "CLM-9921", customer: "A. Smith", type: "Automotive PPF", status: "Reviewing", time: "2h ago" },
    { id: "CLM-9918", customer: "Moto Pro Inc.", type: "Moto Kit Fitment", status: "Approved", time: "5h ago" },
    { id: "CLM-9915", customer: "Skyline Arch", type: "Architectural Film", status: "Flagged", time: "1d ago" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-headline font-bold tracking-tight">System Overview</h1>
        <p className="text-muted-foreground">Operational intelligence for Aztek protection professionals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-card border-white/5 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-background border border-white/5 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <Badge variant="secondary" className="bg-white/5 text-[10px]">
                  {stat.change}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</p>
                <p className="text-3xl font-headline font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-card border-white/5">
          <CardHeader>
            <CardTitle className="text-lg">Project Lifecycle Tracking</CardTitle>
            <CardDescription>Consolidated CRM activity from Aztek Connect.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full flex items-end justify-between gap-2">
              {[60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                <div key={i} className="flex-1 group relative">
                  <div 
                    className="w-full bg-primary/20 hover:bg-primary/40 transition-all duration-300 rounded-t-md" 
                    style={{ height: `${h}%` }}
                  />
                  <div className="mt-2 text-[10px] text-center text-muted-foreground">M{i+1}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-white/5">
          <CardHeader>
            <CardTitle className="text-lg">Pending Intelligence</CardTitle>
            <CardDescription>Items requiring partner attention.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentClaims.map((claim) => (
              <div key={claim.id} className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-primary">{claim.id}</span>
                  <span className="text-sm font-medium">{claim.customer}</span>
                  <span className="text-[10px] text-muted-foreground">{claim.type}</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Badge variant="outline" className={cn(
                    "text-[10px] uppercase",
                    claim.status === "Approved" ? "border-green-500/50 text-green-500" :
                    claim.status === "Flagged" ? "border-red-500/50 text-red-500" :
                    "border-amber-500/50 text-amber-500"
                  )}>
                    {claim.status}
                  </Badge>
                  <span className="text-[10px] text-muted-foreground">{claim.time}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
