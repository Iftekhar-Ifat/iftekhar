import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const revalidate = 86400; // revalidate all page after a day
export const fira_code = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira_code",
});

export const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fira_sans",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://iftekhar.vercel.app"),
  title: {
    default: "Iftekhar",
    template: "%s | Iftekhar",
  },
  description: "Iftekhar's Portfolio",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "./opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fira_code.variable} ${fira_sans.variable}`}>
      <body
        className={cn(
          "relative antialiased max-w-screen-2xl flex flex-col md:flex-row lg:mx-auto font-mono"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-auto min-w-0 relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1 mt-4 mx-[5%] md:mx-[10%]">
              {children}
            </div>
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
