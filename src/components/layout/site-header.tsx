'use client';

import Link from "next/link";
import { ChevronDown, Menu, X, LayoutDashboard, User, Shield, MapPin, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutions = [
    { title: "Automotive", href: "/solutions/automotive" },
    { title: "Motorcycle", href: "/solutions/moto" },
    { title: "Architectural", href: "/solutions/architectural" },
  ];

  const navLinks = [
    { title: "Industries", href: "/industries" },
    { title: "Network", href: "/partners" },
    { title: "Find Installer", href: "/locator", icon: MapPin },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Resources", href: "/resources" },
    { title: "Warranty", href: "/warranty" },
  ];

  const portals = [
    { title: "Partner OS", href: "/login", icon: LayoutDashboard, desc: "Connect CRM & Academy" },
    { title: "Field Terminal", href: "/installer", icon: Smartphone, desc: "Active Job Execution" },
    { title: "Customer Terminal", href: "/login", icon: User, desc: "Warranty & Records" },
    { title: "Admin Control", href: "/login", icon: Shield, desc: "System Management" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 h-20 border-b border-border sticky top-0 z-40 bg-background/60 backdrop-blur-3xl transition-all">
      <div className="flex items-center gap-4 lg:gap-12">
        <Link href="/" className="flex flex-col items-start leading-none group shrink-0">
          <span className="font-headline font-bold text-2xl tracking-[0.18em] uppercase text-foreground">
            AZTEK <span className="text-primary italic">PRO</span>
          </span>
          <span className="text-[8px] font-bold tracking-[0.3em] text-muted-foreground uppercase mt-0.5">
            PROTECTION TECHNOLOGY
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(
              "flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all outline-none",
              pathname.startsWith('/solutions') ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}>
              Solutions <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border min-w-[200px] p-2 rounded-2xl">
              {solutions.map((s) => (
                <DropdownMenuItem key={s.href} asChild className="rounded-xl">
                  <Link href={s.href} className="w-full px-4 py-3 text-[10px] uppercase font-bold tracking-widest cursor-pointer">
                    {s.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={cn(
                "text-[11px] font-bold transition-all uppercase tracking-[0.2em] flex items-center gap-2",
                pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.icon && <link.icon className="w-3.5 h-3.5" />}
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-8">
        <div className="hidden lg:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground outline-none">
              Portal Access <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border min-w-[240px] p-2 rounded-2xl shadow-2xl">
              {portals.map((p) => (
                <DropdownMenuItem key={p.title} asChild className="rounded-xl p-0">
                  <Link href={p.href} className="flex items-start gap-4 p-4 w-full cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <p.icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-bold uppercase tracking-widest">{p.title}</p>
                      <p className="text-[10px] text-muted-foreground">{p.desc}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="btn-electric h-11 px-8 text-[10px] rounded-full">
            <Link href="/partners/apply">Become Partner</Link>
          </Button>
        </div>
        <ThemeToggle />
        
        <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-background z-50 p-8 flex flex-col gap-8 lg:hidden animate-in fade-in slide-in-from-top-4">
           <div className="space-y-4">
             <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Solutions</p>
             {solutions.map(s => (
               <Link key={s.href} href={s.href} className="block text-2xl font-headline font-bold" onClick={() => setMobileMenuOpen(false)}>{s.title}</Link>
             ))}
           </div>
           <div className="space-y-4 pt-4 border-t border-white/5">
             <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Ecosystem</p>
             {navLinks.map(s => (
               <Link key={s.href} href={s.href} className="block text-2xl font-headline font-bold flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                 {s.icon && <s.icon className="w-5 h-5 text-primary" />}
                 {s.title}
               </Link>
             ))}
           </div>
           <div className="mt-auto space-y-4">
             <Button asChild variant="outline" className="w-full h-16 text-xs rounded-full border-white/10 font-bold uppercase tracking-widest">
               <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
             </Button>
             <Button asChild className="btn-electric h-16 w-full text-xs rounded-full">
               <Link href="/partners/apply" onClick={() => setMobileMenuOpen(false)}>Join Partner Network</Link>
             </Button>
           </div>
        </div>
      )}
    </nav>
  );
}
