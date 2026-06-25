import { SidebarNexus } from "@/components/layout/sidebar-nexus"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        <SidebarNexus />
        <SidebarInset className="flex flex-col flex-1 overflow-hidden">
          <header className="h-16 flex items-center px-8 border-b border-white/5 justify-between bg-background/50 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-muted-foreground hover:text-primary" />
              <div className="w-px h-4 bg-white/10 mx-2 hidden md:block" />
              <h2 className="text-sm font-medium text-muted-foreground">Terminal 01 / AZTEK OS</h2>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                Connect Active
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-8">
            <div className="max-w-7xl mx-auto space-y-8">
              {children}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
