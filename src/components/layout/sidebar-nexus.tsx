"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  BarChart3,
  Settings,
  Megaphone,
  Package,
  History,
  ShoppingCart,
  Receipt,
  CreditCard,
  Gavel,
  BrainCircuit,
  LogOut,
  ShieldAlert,
  Calculator,
  MapPin,
  UserRound,
  FileStack,
  FileText,
  LifeBuoy,
  Smartphone,
  Wallet,
  Bell,
  Fingerprint,
  Shield
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

// Define icon aliases before they are used in navigation arrays
function WarehouseIcon(props: any) {
  return <Package {...props} />
}
const Warehouse = WarehouseIcon

const partnerNavigation = [
  {
    title: "AZTEK Pro Connect",
    items: [
      { title: "Dashboard", icon: LayoutDashboard, url: "/connect/dashboard" },
      { title: "Leads", icon: Users, url: "/connect/leads" },
      { title: "Sales & Orders", icon: ShoppingCart, url: "/connect/sales" },
      { title: "Invoices", icon: Receipt, url: "/connect/sales/invoices" },
      { title: "Projects", icon: Briefcase, url: "/connect/projects" },
      { title: "Warranty", icon: ShieldCheck, url: "/connect/warranty" },
      { title: "Inventory", icon: Package, url: "/connect/inventory" },
    ]
  },
  {
    title: "Intelligence & Growth",
    items: [
      { title: "Academy", icon: GraduationCap, url: "/connect/training" },
      { title: "Marketing Hub", icon: Megaphone, url: "/connect/marketing" },
      { title: "Analytics", icon: BarChart3, url: "/connect/analytics" },
    ]
  },
  {
    title: "Assistance",
    items: [
      { title: "Notifications", icon: Bell, url: "/connect/notifications" },
      { title: "Support Hub", icon: LifeBuoy, url: "/connect/support" },
    ]
  }
]

const adminNavigation = [
  {
    title: "Network Operations",
    items: [
      { title: "Dashboard", icon: LayoutDashboard, url: "/admin" },
      { title: "Partners Hub", icon: Users, url: "/admin/partners" },
      { title: "Customer 360", icon: UserRound, url: "/admin/customers" },
      { title: "Warranty Governance", icon: ShieldCheck, url: "/admin/warranties" },
      { title: "Global Projects", icon: Briefcase, url: "/admin/projects" },
    ]
  },
  {
    title: "Finance & Sales",
    items: [
      { title: "Sales Terminal", icon: FileStack, url: "/admin/sales" },
      { title: "Receivables", icon: CreditCard, url: "/admin/finance" },
      { title: "Inventory Command", icon: Warehouse, url: "/admin/inventory" },
      { title: "Order Command", icon: ShoppingCart, url: "/admin/orders" },
    ]
  },
  {
    title: "Governance & Quality",
    items: [
      { title: "Ecosystem Governance", icon: Gavel, url: "/admin/governance" },
      { title: "Academy Mastery", icon: GraduationCap, url: "/admin/academy" },
    ]
  },
  {
    title: "Intelligence Hub",
    items: [
      { title: "Executive BI", icon: BrainCircuit, url: "/admin/analytics" },
      { title: "Notifications", icon: Bell, url: "/admin/notifications" },
      { title: "Marketing", icon: Megaphone, url: "/admin/marketing" },
      { title: "Content Hub", icon: FileText, url: "/admin/content" },
    ]
  },
  {
    title: "Security & Ops",
    items: [
      { title: "User Management", icon: Fingerprint, url: "/admin/users" },
      { title: "Configuration", icon: Settings, url: "/admin/config" },
      { title: "Audit Log", icon: History, url: "/admin/audit" },
      { title: "Support Center", icon: LifeBuoy, url: "/admin/support" },
    ]
  }
]

const userNavigation = [
  {
    title: "Client Access",
    items: [
      { title: "Dashboard", icon: LayoutDashboard, url: "/user/dashboard" },
      { title: "Notifications", icon: Bell, url: "/user/notifications" },
      { title: "My Claims", icon: ShieldAlert, url: "/user/claims" },
    ]
  },
  {
    title: "Solutions Hub",
    items: [
      { title: "Smart Quote", icon: Calculator, url: "/user/quote" },
      { title: "Find Installer", icon: MapPin, url: "/user/locator" },
      { title: "Help Desk", icon: LifeBuoy, url: "/user/support" },
    ]
  }
]

export function SidebarNexus() {
  const pathname = usePathname()
  const router = useRouter()
  const isAdminPath = pathname.startsWith('/admin')
  const isUserPath = pathname.startsWith('/user')
  const isInstallerPath = pathname.startsWith('/installer')
  
  if (isInstallerPath) return null;

  const navigation = isAdminPath ? adminNavigation : isUserPath ? userNavigation : partnerNavigation

  const handleLogout = () => {
    toast({ title: "Session Terminated", description: "Redirecting to primary hub..." })
    router.push("/")
  }

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      <SidebarHeader className="h-24 flex items-center px-4 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center border-b border-sidebar-border overflow-hidden">
        <Link href="/" className="flex flex-col items-start leading-none group shrink-0">
          <span className="font-headline font-bold text-2xl tracking-[0.18em] uppercase text-foreground group-data-[collapsible=icon]:hidden">
            AZTEK <span className="text-primary italic">PRO</span>
          </span>
          <span className="text-[8px] font-bold tracking-[0.3em] text-primary uppercase mt-0.5 group-data-[collapsible=icon]:hidden">
            {isAdminPath ? "ADMIN CONTROL" : isUserPath ? "USER TERMINAL" : "PARTNER NEXUS"}
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-3">
        {navigation.map((group) => (
          <SidebarGroup key={group.title} className="mb-4">
            <SidebarGroupLabel className="px-3 mb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold group-data-[collapsible=icon]:hidden">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={pathname === item.url || (item.url !== '/admin' && pathname.startsWith(item.url))}
                      tooltip={item.title}
                      className={cn(
                        "h-11 rounded-xl transition-all duration-200 px-3",
                        (pathname === item.url || (item.url !== '/admin' && pathname.startsWith(item.url)))
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Link href={item.url}>
                        <item.icon className={cn("w-4 h-4 shrink-0", (pathname === item.url || (item.url !== '/admin' && pathname.startsWith(item.url))) ? "text-primary" : "text-muted-foreground")} />
                        <span className="font-medium text-[11px] uppercase tracking-widest group-data-[collapsible=icon]:hidden">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-3 border-t border-sidebar-border">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center bg-muted/50 p-3 rounded-2xl border border-border transition-all relative group/footer">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-inner">
            {isAdminPath ? "AD" : isUserPath ? "GU" : "SR"}
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden flex-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground truncate">
              {isAdminPath ? "Admin User" : isUserPath ? "Rahul Mehta" : "Sachin R."}
            </span>
            <span className="text-[10px] text-primary font-bold uppercase tracking-tighter truncate">
              {isAdminPath ? "System Control" : isUserPath ? "Verified Client" : "Master Partner"}
            </span>
          </div>
          <button 
            className="h-8 w-8 rounded-lg group-data-[collapsible=icon]:hidden hover:bg-red-500/10 hover:text-red-500 transition-colors flex items-center justify-center"
            onClick={handleLogout}
            title="Terminate Session"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
