import { Geist, Geist_Mono, Alex_Brush } from "next/font/google";
import "./globals.css";
 import { ThemeProvider } from "./components/theme-provider";
import { FloatingOrbs } from "./components/floating-orbs";
import { BackgroundBeams } from "./components/background-beams";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  weight: "400",
  variable: "--font-signature",
  subsets: ["latin"],
});

export const metadata = {
  title: "Awadh Kishor Singh | Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/myimage.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alexBrush.variable} antialiased relative bg-[#080808] text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="fixed inset-0 z-0 pointer-events-none">
             <BackgroundBeams />
             <FloatingOrbs />
          </div>
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
