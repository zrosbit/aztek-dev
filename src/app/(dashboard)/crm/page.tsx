import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Mail, Phone, Calendar, ArrowUpRight } from "lucide-react"

export default function CRMHubPage() {
  const leads = [
    { name: "John Wick", project: "Moto PPF Full Kit", value: "$1,200", status: "Hot", date: "Oct 24" },
    { name: "Sarah Connor", project: "Architectural Heat Reject", value: "$4,500", status: "Qualified", date: "Oct 23" },
    { name: "Bruce Wayne", project: "Full Stealth PPF", value: "$6,800", status: "Consultation", date: "Oct 22" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-headline font-bold tracking-tight">Aztek Connect CRM</h1>
          <p className="text-muted-foreground">Unified Partner OS for lead management and project lifecycles.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-xs uppercase tracking-widest">New Lead</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-card border-white/5">
          <CardHeader>
            <CardTitle>Active Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leads.map((lead, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold">{lead.name}</h4>
                      <p className="text-xs text-muted-foreground">{lead.project}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="font-headline font-bold">{lead.value}</p>
                      <p className="text-[10px] text-muted-foreground uppercase">{lead.date}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-white/5">
          <CardHeader>
            <CardTitle>Partner Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { label: "Co-Branded Assets", icon: Mail },
              { label: "Contract Builder", icon: Calendar },
              { label: "Support Ticket", icon: Phone },
            ].map((tool) => (
              <button key={tool.label} className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all text-sm font-medium">
                <tool.icon className="w-4 h-4 text-primary" />
                {tool.label}
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
