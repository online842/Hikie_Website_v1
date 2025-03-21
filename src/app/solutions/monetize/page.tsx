'use client';

import { DollarSign, BarChart, Target, Zap } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    name: 'Çoklu Gelir Modeli',
    description: 'Abonelik, tek seferlik satış, özel ürünler ve daha fazlası ile gelir elde edin.',
    icon: DollarSign,
  },
  {
    name: 'Performans Analizi',
    description: 'Detaylı raporlar ve analizlerle hangi içeriklerin daha çok kazandırdığını görün.',
    icon: BarChart,
  },
  {
    name: 'Hedef Kitle Analizi',
    description: 'Müşteri davranışlarını analiz edin, hedef kitlenizi daha iyi tanıyın.',
    icon: Target,
  },
  {
    name: 'Hızlı Başlangıç',
    description: 'Dakikalar içinde hesabınızı oluşturun ve kazanmaya başlayın.',
    icon: Zap,
  },
];

export default function MonetizeSolutions() {
  return (
    <div className="bg-white pt-24">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                İçeriklerinizi Gelire Dönüştürün
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Yaratıcı içeriklerinizi farklı gelir modellerine dönüştürün.
                Hikie ile içerik üretmeye odaklanın, gelir yönetimini bize bırakın.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/register"
                  className="bg-[#DBFF08] hover:bg-[#DBFF08]/90 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors"
                >
                  Hemen Başla
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Bize Ulaşın <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* İllüstrasyon */}
        <div className="mt-16 sm:mt-24 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src="/illustrations/monetize.svg"
              alt="Gelir Modelleri"
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </div>
        </div>

        {/* Özellikler */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Gelir modelinizi çeşitlendirin
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tek bir platformda birden fazla gelir modeli ile kazancınızı artırın.
              Hikie'nin gelişmiş araçlarıyla içeriklerinizi monetize edin.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#DBFF08]">
                      <feature.icon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 