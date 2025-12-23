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
  description: "Full Stack Developer specializing in modern web applications. Expert in Next.js, React, and MongoDB.",
  keywords: ["Awadh Kishor Singh", "Portfolio", "Full Stack Developer", "Next.js", "React", "Bangalore Developer"],
  authors: [{ name: "Awadh Kishor Singh" }],
  openGraph: {
    title: "Awadh Kishor Singh | Portfolio",
    description: "Full Stack Developer specializing in modern web applications.",
    url: "https://your-portfolio-url.com", // Replace with actual production URL
    siteName: "Awadh Kishor Singh Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awadh Kishor Singh | Portfolio",
    description: "Full Stack Developer specializing in modern web applications.",
    creator: "@im_awadh_",
    images: ["/og-image.png"],
  },
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
