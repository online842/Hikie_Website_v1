import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ 
  subsets: ["latin"],
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: "Hikie - En Farklı Ticaret Altyapısı",
  description: "Topluluklar ve kreatörler için özel e-ticaret altyapısı. Kendi dijital alanını kur, topluluğunu büyüt, gelirini katla!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://hikie.store" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://hikie.store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="preload" href="https://hikie.store" as="document" />
      </head>
      <body className={`${inter.className} ${jost.variable} bg-black`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}