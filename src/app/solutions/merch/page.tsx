'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MerchSolutions() {
  return (
    <div className="bg-black min-h-screen pt-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
            Merch Business
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Topluluğunuza özel merch koleksiyonu oluşturun ve operasyonlarınızı yönetin.
            Siz tasarlayın, gerisini biz halledelim!
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/register"
              className="rounded-md bg-[#ff008C] px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-[#84ff20] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84ff20]"
            >
              Hemen Başla
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
              Görüşme Planla <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* İllüstrasyonlar ve Özellikler */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-2">
          <article className="flex flex-col items-start">
            <div className="relative w-full h-[400px] bg-black/50 rounded-2xl overflow-hidden">
              <img
                src="/illustrations/Business and Finance _ lightbulb, idea, thought, innovation, innovative, project.svg"
                alt="Tasarım ve Üretim"
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <span className="relative z-10 rounded-full bg-[#ff008C]/10 px-3 py-1.5 font-medium text-[#ff008C]">
                  Tasarım ve Üretim
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-[#84ff20]">
                  Profesyonel Tasarım Desteği
                </h3>
                <p className="mt-5 text-sm leading-6 text-white">
                  Özel tasarım araçlarımızla koleksiyonunuzu oluşturun. Kalite kontrol süreçleri ve üretim takibi ile ürünlerinizi güvenle üretin.
                </p>
              </div>
            </div>
          </article>

          <article className="flex flex-col items-start">
            <div className="relative w-full h-[400px] bg-black/50 rounded-2xl overflow-hidden">
              <img
                src="/illustrations/Transportation and Logistics _ traffic, city, gps, map, building, shape, shapes.svg"
                alt="Lojistik ve Dağıtım"
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <span className="relative z-10 rounded-full bg-[#ff008C]/10 px-3 py-1.5 font-medium text-[#ff008C]">
                  Lojistik ve Dağıtım
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-[#84ff20]">
                  Global Dağıtım Ağı
                </h3>
                <p className="mt-5 text-sm leading-6 text-white">
                  Global lojistik ağımızla ürünlerinizi dünyanın her yerine ulaştırın. Otomatik kargo takibi ve teslimat optimizasyonu ile müşteri memnuniyetini artırın.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
              Merch yolculuğunuza başlayın
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie ile global merch operasyonlarınızı yönetin
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/register"
                className="rounded-md bg-[#ff008C] px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-[#84ff20] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84ff20]"
              >
                Hemen Başla
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white"
              >
                Görüşme Planla <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 