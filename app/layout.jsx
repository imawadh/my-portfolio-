import { Geist, Geist_Mono, Alex_Brush } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import BackgroundEffects from "./components/background-effects";

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
  title: "Awadh Kishor Singh | Full Stack Developer",
  description: "Portfolio of Awadh Kishor Singh, a Full Stack Developer specializing in modern web applications with Next.js, React, and MongoDB.",
  keywords: ["Awadh Kishor Singh", "Full Stack Developer", "Next.js Portfolio", "React Developer", "MongoDB", "Bengaluru Developer"],
  authors: [{ name: "Awadh Kishor Singh" }],
  metadataBase: new URL("https://awadh.tech"), // You should replace this with your actual domain
  openGraph: {
    title: "Awadh Kishor Singh | Portfolio",
    description: "Full Stack Developer specializing in building scalable web applications.",
    url: "https://awadh.tech", 
    siteName: "Awadh Kishor Singh Portfolio",
    images: [
      {
        url: "/awadh-about.jpg", // Using existing profile image as fallback if og-image.png is missing
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
    images: ["/awadh-about.jpg"],
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
             <BackgroundEffects />
          </div>
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
