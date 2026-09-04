import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider className="h-svh">
      <TooltipProvider>
        <AppSidebar />
        <SidebarInset className="min-h-0 overflow-hidden border shadow-none!">
          {children}
        </SidebarInset>
      </TooltipProvider>
    </SidebarProvider>
  )
}
