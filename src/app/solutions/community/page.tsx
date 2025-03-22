'use client';

import { Users, MessageSquare, Heart, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    name: 'Topluluk Etkileşimi',
    description: 'Üyelerinizle etkili iletişim kurun, geri bildirimleri yönetin.',
    icon: Users,
  },
  {
    name: 'Sohbet ve Tartışma',
    description: 'Canlı sohbetler ve forum tartışmalarıyla topluluğunuzu aktif tutun.',
    icon: MessageSquare,
  },
  {
    name: 'Bağlılık Programları',
    description: 'Özel ödüller ve programlarla üye bağlılığını artırın.',
    icon: Heart,
  },
  {
    name: 'Hızlı Büyüme',
    description: 'Viral büyüme stratejileriyle topluluğunuzu genişletin.',
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
                Community
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Topluluğunuzu güçlendirin, etkileşimi artırın ve büyümeyi hızlandırın.
                Modern topluluk yönetim araçlarıyla fark yaratın.
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
            <img
              src="/illustrations/community.svg"
              alt="Community"
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </div>
        </div>

        {/* Özellikler */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
              Topluluk yönetiminde yeni nesil
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie ile topluluğunuzu yönetmek çok daha kolay.
              Modern araçlarla etkileşimi artırın, büyümeyi hızlandırın.
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
              Hikie ile topluluğunuzu büyütmek için hemen başlayın. 
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