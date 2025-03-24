'use client';

import Link from 'next/link';
import { Users, MessageSquare, Heart, ArrowRight, Zap } from 'lucide-react';

const features = [
  {
    name: "Topluluk Yönetimi",
    description: "Topluluğunuzu tek platformdan profesyonel şekilde yönetin.",
    icon: Users,
  },
  {
    name: "İletişim Araçları",
    description: "Gelişmiş iletişim araçlarıyla üyelerinizle etkileşimi artırın.",
    icon: MessageSquare,
  },
  {
    name: "Üye Bağlılığı",
    description: "Özel programlar ve etkinliklerle üye bağlılığını güçlendirin.",
    icon: Heart,
  },
  {
    name: "Hızlı Büyüme",
    description: "Etkili büyüme stratejileriyle topluluğunuzu genişletin.",
    icon: Zap,
  },
];

export default function CommunitySolutions() {
  return (
    <div className="bg-[#000000] min-h-screen pt-24">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-[#84ff20] sm:text-6xl">
                Community Business
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Topluluğunuzu profesyonel şekilde yönetin ve büyütün.
                Modern topluluk yönetim araçlarıyla fark yaratın!
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
                {/* Topluluk Yönetimi */}
                <div className="flex items-center gap-12">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Creative Design _ creativity, imagination, playful, abstract, digital art.svg"
                        alt="Topluluk Yönetimi"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#84ff20] text-3xl font-semibold">1. Topluluk Yönetimi</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Topluluğunuzu profesyonel araçlarla yönetin ve geliştirin.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Üye yönetimi</li>
                        <li>İçerik moderasyonu</li>
                        <li>Rol ve izin yönetimi</li>
                        <li>Etkinlik organizasyonu</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Etkileşim ve İletişim */}
                <div className="flex items-center gap-12 flex-row-reverse">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Creative Design _ abstract, geometric, shapes, figures, colors, playful, whimsical.svg"
                        alt="Etkileşim ve İletişim"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#ff008C] text-3xl font-semibold">2. Etkileşim ve İletişim</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Üyelerinizle etkili iletişim kurun ve etkileşimi artırın.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Canlı sohbet</li>
                        <li>Forum yönetimi</li>
                        <li>Bildirim sistemi</li>
                        <li>Özel mesajlaşma</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Gamification */}
                <div className="flex items-center gap-12">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Social Media and Communication _ communication, expression, creativity, emotion, connection.svg"
                        alt="Gamification"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#84ff20] text-3xl font-semibold">3. Gamification</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Oyunlaştırma ile üye katılımını ve bağlılığını artırın.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Rozet sistemi</li>
                        <li>Seviye atlama</li>
                        <li>Ödül programları</li>
                        <li>Liderlik tablosu</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hedef Odaklı Büyüme */}
                <div className="flex items-center gap-12 flex-row-reverse">
                  <div className="w-1/3">
                    <div className="relative h-64">
                      <img
                        src="/illustrations/Figure Ecology Illustrations/SVG/Scenes/Achievement and Success _ construction, worker, progress, challenge, achievement.svg"
                        alt="Hedef Odaklı Büyüme"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-[#ff008C] text-3xl font-semibold">4. Hedef Odaklı Büyüme</h3>
                    <div className="space-y-4 text-white">
                      <p className="text-lg">Topluluğunuzu stratejik olarak büyütün ve hedeflerinize ulaşın.</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Büyüme stratejileri</li>
                        <li>Analitik takibi</li>
                        <li>A/B testleri</li>
                        <li>Performans ölçümü</li>
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
              Topluluğunuzu güçlendirin
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie'nin gelişmiş topluluk yönetim araçlarıyla etkileşimi artırın.
              Verimliliğinizi artırın ve topluluğunuzu büyütün.
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
              Topluluk yolculuğunuza başlayın
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie ile topluluk yönetim sürecinizi profesyonelleştirin. 
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