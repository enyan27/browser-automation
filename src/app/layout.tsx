import { ClerkProvider } from "@clerk/nextjs"
import { shadcn } from "@clerk/ui/themes"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import "./globals.css"

const font = Nunito({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: { default: "Workflow Automation", template: "%s ♡" }
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "antialiased")}>
        <ClerkProvider
          appearance={{ theme: shadcn }}
          taskUrls={{ "choose-organization": "/choose-organization" }}
        >
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
