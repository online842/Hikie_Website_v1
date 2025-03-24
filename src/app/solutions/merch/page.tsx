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
              <h1 className="text-4xl font-bold tracking-tight text-[#84ff20] sm:text-6xl">
                Merch Business
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Kendi merch koleksiyonunuzu oluşturun, üretimden satışa tüm operasyonu bize bırakın.
                Siz topluluğunuza odaklanın, gerisini biz halledelim!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#ff008C] text-white hover:bg-[#84ff20] hover:text-[#000000] rounded-md text-base font-medium transition-colors"
                >
                  Hemen Başla
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-white hover:text-[#ff008C]"
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
            <div className="relative w-full bg-black rounded-xl overflow-hidden p-12">
              {/* Roadmap Container */}
              <div className="space-y-24">
                {/* Tasarım Aşaması */}
                <div className="flex items-center gap-12">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Creative Design _ creativity, imagination, playful, abstract, digital art.svg"
                        alt="Tasarım Süreci"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#84ff20] text-3xl font-semibold">1. Tasarım ve Planlama</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Profesyonel tasarım ekibimiz, markanızın kimliğini yansıtan özel koleksiyonlar hazırlar.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Marka kimliğinize uygun tasarım konseptleri</li>
                        <li>Hedef kitlenize özel ürün seçenekleri</li>
                        <li>Sezonluk koleksiyon planlaması</li>
                        <li>Malzeme ve üretim yöntemi seçimi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Üretim Aşaması */}
                <div className="flex items-center gap-12 flex-row-reverse">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Achievement and Success _ construction, worker, progress, challenge, achievement.svg"
                        alt="Üretim Süreci"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#ff008C] text-3xl font-semibold">2. Üretim ve Kalite Kontrol</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Yüksek kalite standartlarında üretim ve detaylı kalite kontrol süreçleri.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Premium malzeme seçimi ve tedarik yönetimi</li>
                        <li>Sürdürülebilir üretim yöntemleri</li>
                        <li>Çok aşamalı kalite kontrol sistemi</li>
                        <li>Özel paketleme ve etiketleme çözümleri</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Lojistik Aşaması */}
                <div className="flex items-center gap-12">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Transportation and Logistics _ car, transportation, speed, power, energy, city, traffic.svg"
                        alt="Lojistik Süreci"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#84ff20] text-3xl font-semibold">3. Lojistik ve Depolama</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Tam entegre lojistik çözümleri ile stok ve sevkiyat yönetimi.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Akıllı depolama sistemleri ve stok takibi</li>
                        <li>Hızlı ve güvenli kargo hizmeti</li>
                        <li>Gerçek zamanlı sipariş takibi</li>
                        <li>Uluslararası lojistik ağı</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Satış Aşaması */}
                <div className="flex items-center gap-12 flex-row-reverse">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Social Media and Communication _ communication, expression, creativity, emotion, connection.svg"
                        alt="Satış Süreci"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#ff008C] text-3xl font-semibold">4. Satış ve Pazarlama</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Global pazarlarda etkili satış stratejileri ve pazarlama desteği.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>E-ticaret platformu entegrasyonu</li>
                        <li>Sosyal medya pazarlama desteği</li>
                        <li>Analitik raporlama ve performans takibi</li>
                        <li>Müşteri hizmetleri yönetimi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Özellikler */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
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
                  <div className="relative bg-[#000000]/50 p-8 rounded-2xl border border-[#ff008C]/20 group-hover:border-[#ff008C] transition-all">
                    <div className="w-12 h-12 rounded-lg bg-[#000000]/50 flex items-center justify-center mb-6 group-hover:bg-[#84ff20]/10 transition-all">
                      <feature.icon className="w-6 h-6 text-[#84ff20]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[#84ff20]">
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
            <h2 className="text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
              Merch yolculuğunuza başlayın
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie ile merch işinizi büyütmek için hemen başlayın. 
              Profesyonel ekibimiz size yardımcı olmak için hazır.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ff008C] text-white hover:bg-[#84ff20] hover:text-[#000000] rounded-md text-base font-medium transition-colors"
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