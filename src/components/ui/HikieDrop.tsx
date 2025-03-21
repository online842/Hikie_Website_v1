'use client';

import { ShoppingBag, Truck, Palette, Globe } from 'lucide-react';
import Link from 'next/link';

interface DropFeature {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const dropFeatures: DropFeature[] = [
  {
    title: "Sifir Risk, Maksimum Kazanc",
    description: "HIKIE DROP ile on yatirim yapmadan satisa baslayabilirsiniz. Koleksiyona ozel uretim modeli sayesinde stok maliyetini dusunmeden kazanc saglamaya odaklanabilirsiniz!",
    icon: ShoppingBag,
    gradient: "from-[#DE2C00] to-[#DE2C00]/60",
  },
  {
    title: "Tam Entegre Operasyon Destegi",
    description: "Urunlerinizi sadece uretmekle kalmiyor, siparis yonetimi, paketleme, lojistik ve musteri destegini de ustleniyoruz. Siz yalnizca toplulugunuzla etkilesimde kalin, operasyonel surecleri HIKIE DROP yonetsin.",
    icon: Truck,
    gradient: "from-[#DBFF08] to-[#DBFF08]/60",
  },
  {
    title: "Ozel Tasarim ve Markalasma",
    description: "Standart urunler yerine, kitlenize ozel ve uygun tasarimlar sunuyoruz. Ister kisisel markanizi guclendirmek, ister ozel koleksiyonlar olusturmak isteyin, profesyonel tasarim ekibimiz her asamada yaninizda.",
    icon: Palette,
    gradient: "from-[#DE2C00] to-[#DE2C00]/60",
  },
  {
    title: "Kuresel Erisim, Kolay Satis",
    description: "HIKIE DROP platformu ile gelismis e-ticaret altyapisi sayesinde sadece Turkiyede degil, dunya capinda satis yapabilirsiniz. Guvenli odeme sistemleri, mobil uyumluluk ve sosyal medya entegrasyonlariyla kitleniz nerede olursa olsun satis yapabilirsiniz.",
    icon: Globe,
    gradient: "from-[#DBFF08] to-[#DBFF08]/60",
  },
];

export default function HikieDrop() {
  return (
    <section className="py-24 bg-[#161616] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-[#DBFF08] px-4 py-1 rounded-full text-sm font-medium text-[#161616] inline-block mb-4">
            HIKIE DROP
          </span>
          <h2 className="text-4xl font-bold mb-4 text-[#DBFF08]">
            Merch satisinda sifir risk, maksimum ozgurluk!
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Kendi merch koleksiyonunuzu olusturun, uretimden satisa tum operasyonu bize birakin.
            Siz toplulugunuza odaklanin, gerisini biz halledelim!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {dropFeatures.map((feature) => (
            <div
              key={feature.title}
              className="relative overflow-hidden group"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundImage: `linear-gradient(to right, ${feature.gradient})` }}
              />
              <div className="relative bg-[#161616]/50 p-8 rounded-2xl border border-[#DE2C00]/20 group-hover:border-transparent transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#161616]/50 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all">
                  <feature.icon className="w-6 h-6 text-[#DBFF08]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#DBFF08]">
                  {feature.title}
                </h3>
                <p className="text-white group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-[#DBFF08] hover:bg-[#DE2C00] text-[#161616] hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Hemen Basvur
          </Link>
        </div>
      </div>
    </section>
  );
} 