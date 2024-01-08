import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const revalidate = 3600; // revalidate at most every hour
const fira_code = Fira_Code({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={cn(
          "relative antialiased max-w-screen-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto",
          fira_code.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="flex-auto mx-[5%] min-w-0 relative flex flex-col min-h-screen md:mx-[10%]">
            <Navbar />
            <div className="flex-grow flex-1 mt-4">{children}</div>
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
