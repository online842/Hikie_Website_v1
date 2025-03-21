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
    <html lang="tr">
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