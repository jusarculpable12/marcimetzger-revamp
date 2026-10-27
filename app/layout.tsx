import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({ subsets: ["latin"], weight: "500", variable: "--font-display" });
const text = Jost({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-text" });

export const metadata: Metadata = {
  title: "Marci Metzger | Pahrump Real Estate",
  description:
    "Buy or sell with a Pahrump real estate team backed by nearly three decades of local expertise.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
