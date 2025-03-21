'use client';

import Link from 'next/link';
import { ShoppingBag, Truck, Palette, Globe, ArrowRight } from 'lucide-react';

const features = [
  {
    name: "Sıfır Risk, Maksimum Kazanç",
    description: "Ön yatırım yapmadan satışa başlayın. Koleksiyona özel üretim modelimiz sayesinde stok maliyetini düşünmeden kazanç sağlamaya odaklanın.",
    icon: ShoppingBag,
  },
  {
    name: "Tam Entegre Operasyon",
    description: "Sipariş yönetimi, paketleme, lojistik ve müşteri desteğini biz üstleniyoruz. Siz yalnızca topluluğunuzla etkileşimde kalın.",
    icon: Truck,
  },
  {
    name: "Özel Tasarım ve Markalama",
    description: "Kitlenize özel ve uygun tasarımlar sunuyoruz. Profesyonel tasarım ekibimiz, markanızı güçlendirecek koleksiyonlar oluşturmanıza yardımcı olur.",
    icon: Palette,
  },
  {
    name: "Küresel Erişim",
    description: "Gelişmiş e-ticaret altyapımız sayesinde sadece Türkiye'de değil, dünya çapında satış yapabilirsiniz. Güvenli ödeme sistemleri ve sosyal medya entegrasyonlarıyla satışlarınızı artırın.",
    icon: Globe,
  },
];

export default function MerchSolutions() {
  return (
    <div className="bg-[#000000] min-h-screen pt-24">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-[#DBFF08] sm:text-6xl">
                Merch Business
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Kendi merch koleksiyonunuzu oluşturun, üretimden satışa tüm operasyonu bize bırakın.
                Siz topluluğunuza odaklanın, gerisini biz halledelim!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#DBFF08] text-[#000000] hover:bg-[#DE2C00] hover:text-white rounded-md text-base font-medium transition-colors"
                >
                  Hemen Başla
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-white hover:text-[#DE2C00]"
                >
                  Görüşme Planla <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* İllüstrasyon */}
        <div className="mt-16 sm:mt-24 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src="/illustrations/merch.svg"
              alt="Merch Business"
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </div>
        </div>

        {/* Özellikler */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-[#DBFF08] sm:text-4xl">
              Merch işinizi büyütün
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie'nin gelişmiş merch çözümleriyle işinizi büyütün. Stok derdi olmadan,
              profesyonel destek ile global pazarlara açılın.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="relative overflow-hidden group">
                  <div className="relative bg-[#000000]/50 p-8 rounded-2xl border border-[#DE2C00]/20 group-hover:border-[#DE2C00] transition-all">
                    <div className="w-12 h-12 rounded-lg bg-[#000000]/50 flex items-center justify-center mb-6 group-hover:bg-[#DBFF08]/10 transition-all">
                      <feature.icon className="w-6 h-6 text-[#DBFF08]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[#DBFF08]">
                      {feature.name}
                    </h3>
                    <p className="text-white group-hover:text-white transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#DBFF08] sm:text-4xl">
              Merch yolculuğunuza başlayın
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie ile merch işinizi büyütmek için hemen başlayın. 
              Profesyonel ekibimiz size yardımcı olmak için hazır.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#DBFF08] text-[#000000] hover:bg-[#DE2C00] hover:text-white rounded-md text-base font-medium transition-colors"
              >
                Hemen Başla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 