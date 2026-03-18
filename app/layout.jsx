import { Ovo, Outfit, Alex_Brush } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { SmoothScroll } from "./components/smooth-scroll";
import PwaRegister from "./components/pwa-register";
import MixpanelTracker from "./components/mix-panel";
import ScrollProgress from "./components/scroll-progress";

const ovo = Ovo({
  weight: "400",
  variable: "--font-ovo",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
  keywords: ["Awadh Kishor Singh", "imawadh", "im_awadh", "im_awadh_", "Full Stack Developer", "Next.js Portfolio", "React Developer", "MongoDB", "Bengaluru Developer"],
  authors: [{ name: "Awadh Kishor Singh", url: "https://awadh.tech" }],
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
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ovo.variable} ${outfit.variable} ${alexBrush.variable} font-sans antialiased relative bg-background text-foreground transition-colors duration-500`}
        suppressHydrationWarning
      >
        <ScrollProgress />
        <PwaRegister />
        <MixpanelTracker />
        <SmoothScroll>
          <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 z-0 pointer-events-none">
          </div>
          <main className="relative z-10">
            {children}
          </main>
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
