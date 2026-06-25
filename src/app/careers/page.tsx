import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Cpu, 
  Globe, 
  Users, 
  FlaskConical,
  Briefcase
} from "lucide-react"

export default function CareersPage() {
  const jobs = [
    { title: "Senior Surface Engineer", dept: "Materials Science", type: "Full-time", location: "Bengaluru HQ" },
    { title: "Network Operations Manager", dept: "Connect Ecosystem", type: "Full-time", location: "Austin / Remote" },
    { title: "Technical Trainer (PPF)", dept: "AZTEK Academy", type: "Full-time", location: "Bengaluru / Traveling" },
    { title: "Full Stack Engineer", dept: "Platform Tech", type: "Full-time", location: "Remote" },
    { title: "Supply Chain Lead", dept: "Global Logistics", type: "Full-time", location: "Mumbai Hub" },
  ]

  const values = [
    { title: "Molecular Precision", icon: FlaskConical, desc: "We are obsessed with the science of what happens at the micron level." },
    { title: "Ecosystem Thinking", icon: Globe, desc: "We don't just build products; we build the infrastructure for an entire industry." },
    { title: "Digital First", icon: Cpu, desc: "Our technology is hardware, but our soul is software and data." },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-32 bg-primary/5">
           <div className="max-w-7xl mx-auto px-8 space-y-12 text-center">
              <Badge variant="outline" className="border-primary/20 text-primary uppercase tracking-[0.4em] text-[10px] px-6 py-2 rounded-full font-bold">Join the Ecosystem</Badge>
              <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none text-gradient">Build the Future of <br /><span className="text-primary italic">Surface Defense.</span></h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">AZTEK is looking for high-performance talent to redefine the standards of global asset protection.</p>
           </div>
        </section>

        {/* Engineering Values */}
        <section className="py-40 border-y border-border bg-card">
           <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
              {values.map((v) => (
                <div key={v.title} className="space-y-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner border border-primary/20">
                      <v.icon className="w-7 h-7" />
                   </div>
                   <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">{v.title}</h3>
                   <p className="text-sm text-muted-foreground font-medium leading-relaxed">{v.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Job Listings */}
        <section className="py-40">
           <div className="max-w-7xl mx-auto px-8 space-y-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
                 <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter">Open Mission <span className="text-primary italic">Slots</span></h2>
                    <p className="text-muted-foreground font-medium">Join our cross-functional teams in chemistry, technology, and operations.</p>
                 </div>
                 <div className="flex gap-4">
                    <Badge variant="outline" className="bg-white/5 border-white/10 px-4 py-1 text-[10px] uppercase font-bold tracking-widest">5 Open Roles</Badge>
                 </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                 {jobs.map((job) => (
                   <Card key={job.title} className="glass border-border hover:border-primary/30 transition-all cursor-pointer group shadow-xl">
                      <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                         <div className="space-y-2 text-center md:text-left">
                            <h4 className="text-xl font-bold group-hover:text-primary transition-colors uppercase tracking-tight">{job.title}</h4>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                               <span>{job.dept}</span>
                               <span className="w-1 h-1 bg-white/20 rounded-full" />
                               <span>{job.location}</span>
                            </div>
                         </div>
                         <div className="flex items-center gap-6">
                            <Badge variant="secondary" className="bg-white/5 text-[9px] uppercase tracking-widest">{job.type}</Badge>
                            <Button variant="outline" className="rounded-full h-12 px-8 text-[10px] uppercase font-bold tracking-widest border-border group-hover:border-primary group-hover:text-primary transition-all">
                               Apply For Role <ArrowRight className="ml-3 w-4 h-4" />
                            </Button>
                         </div>
                      </CardContent>
                   </Card>
                 ))}
              </div>
           </div>
        </section>

        {/* Recruitment CTA */}
        <section className="py-40 bg-primary/5 text-center relative overflow-hidden">
           <div className="max-w-4xl mx-auto px-8 space-y-10 relative z-10">
              <Users className="w-16 h-16 text-primary mx-auto opacity-30" />
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-none">Don't see your <span className="text-primary italic">Expertise?</span></h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                 We are always looking for exceptional talent in surface science and technical operations. Submit a general application to our talent database.
              </p>
              <div className="pt-8">
                 <Button asChild className="btn-electric h-16 px-14 text-xs rounded-full">
                    <Link href="/contact">General Talent Submission</Link>
                 </Button>
              </div>
           </div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.05),transparent_70%)]" />
        </section>
      </main>

      <footer className="bg-card border-t border-border py-12">
         <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">© 2026 AZTEK Ecosystem PVT LTD</p>
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">Back to Main Hub</Link>
         </div>
      </footer>
    </div>
  )
}
