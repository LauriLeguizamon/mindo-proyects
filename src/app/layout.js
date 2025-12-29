import localFont from "next/font/local";
import { Lora } from "next/font/google";
import "./globals.css";
import BlendModeCursor from "@/components/ui/animated-cursor";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";

const galanoGrotesque = localFont({
  src: [
    {
      path: "../../public/fonts/galano-grotesque/GalanoGrotesque-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/galano-grotesque/GalanoGrotesque-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/galano-grotesque/GalanoGrotesque-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/galano-grotesque/GalanoGrotesque-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/galano-grotesque/GalanoGrotesque-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/galano-grotesque/GalanoGrotesque-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-galano",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: "Mindo",
  description: "El equipo que entrega soluciones IA en producción",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${galanoGrotesque.variable} ${lora.variable} font-sans antialiased`}
      >
        <BlendModeCursor />
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
