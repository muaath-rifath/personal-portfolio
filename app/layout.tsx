import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider";
import Topbar from "@/components/Topbar";
import localFont from 'next/font/local';
const pyeongChangPeace = localFont({
  src: '../public/fonts/PyeongChangPeace-Bold.woff2',
  variable: '--font-pyeongchang'
})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Muaath Rifath',
  description: 'Engineering student bridging hardware and software through IoT innovation. Specialized in embedded systems, real-time applications, and modern web development.',
  openGraph: {
    description: 'Engineering student bridging hardware and software through IoT innovation. Specialized in embedded systems, real-time applications, and modern web development.'
  },
  twitter: {
    description: 'Engineering student bridging hardware and software through IoT innovation. Specialized in embedded systems, real-time applications, and modern web development.'
  }
};


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pyeongChangPeace.variable} suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Topbar />
          <main className="flex">
            <section className="flex w-full z-10">

              {children}

            </section>

          </main>
        </ThemeProvider>

      </body>
    </html>
  )
}
