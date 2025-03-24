'use client';

import Link from 'next/link';
import { DollarSign, Wallet, BarChart3, ArrowRight, Zap } from 'lucide-react';

const features = [
  {
    name: "Gelir Yönetimi",
    description: "Tüm gelir kaynaklarınızı tek platformdan yönetin ve optimize edin.",
    icon: DollarSign,
  },
  {
    name: "Ödeme Sistemleri",
    description: "Güvenli ve hızlı ödeme sistemleriyle ödemelerinizi kolayca alın.",
    icon: Wallet,
  },
  {
    name: "Performans Takibi",
    description: "Gelir performansınızı detaylı metriklerle analiz edin ve geliştirin.",
    icon: BarChart3,
  },
  {
    name: "Otomatik Ödemeler",
    description: "Abonelik ve tekrarlayan ödemeleri otomatik olarak yönetin.",
    icon: Zap,
  },
];

export default function MonetizeSolutions() {
  return (
    <div className="bg-[#000000] min-h-screen pt-24">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-[#84ff20] sm:text-6xl">
                Monetize Business
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                İçeriklerinizi ve hizmetlerinizi monetize edin.
                Modern gelir yönetim araçlarıyla kazançlarınızı artırın!
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
                {/* Gelir Stratejisi */}
                <div className="flex items-center gap-12">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Creative Design _ creativity, imagination, playful, abstract, digital art.svg"
                        alt="Gelir Stratejisi"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#84ff20] text-3xl font-semibold">1. Gelir Stratejisi</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Etkili bir gelir stratejisi oluşturun ve hedeflerinize ulaşın.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Gelir modeli seçimi</li>
                        <li>Fiyatlandırma stratejileri</li>
                        <li>Pazar analizi</li>
                        <li>Hedef belirleme</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Ödeme Sistemleri */}
                <div className="flex items-center gap-12 flex-row-reverse">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Creative Design _ abstract, geometric, shapes, figures, colors, playful, whimsical.svg"
                        alt="Ödeme Sistemleri"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#ff008C] text-3xl font-semibold">2. Ödeme Sistemleri</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Güvenli ve esnek ödeme çözümleriyle gelirlerinizi yönetin.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Çoklu ödeme seçenekleri</li>
                        <li>Abonelik yönetimi</li>
                        <li>Otomatik faturalama</li>
                        <li>Vergi yönetimi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Gelir Optimizasyonu */}
                <div className="flex items-center gap-12">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Social Media and Communication _ communication, expression, creativity, emotion, connection.svg"
                        alt="Gelir Optimizasyonu"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#84ff20] text-3xl font-semibold">3. Gelir Optimizasyonu</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Gelirlerinizi optimize edin ve büyüme fırsatlarını değerlendirin.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Gelir analizi</li>
                        <li>Dönüşüm optimizasyonu</li>
                        <li>Müşteri segmentasyonu</li>
                        <li>Fiyat optimizasyonu</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Finansal Raporlama */}
                <div className="flex items-center gap-12 flex-row-reverse">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Achievement and Success _ construction, worker, progress, challenge, achievement.svg"
                        alt="Finansal Raporlama"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#ff008C] text-3xl font-semibold">4. Finansal Raporlama</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Detaylı finansal raporlarla işinizi yakından takip edin.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Gelir raporları</li>
                        <li>Nakit akışı takibi</li>
                        <li>Trend analizi</li>
                        <li>Tahminleme</li>
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
              Gelirlerinizi güçlendirin
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie'nin gelişmiş monetizasyon araçlarıyla gelir sürecinizi optimize edin.
              Verimliliğinizi artırın ve finansal hedeflerinize ulaşın.
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
              Monetizasyon yolculuğunuza başlayın
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie ile gelir sürecinizi profesyonelleştirin. 
              Uzman ekibimiz size yardımcı olmak için hazır.
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