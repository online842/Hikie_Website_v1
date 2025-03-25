'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MarketplaceSolutions() {
  return (
    <div className="bg-black min-h-screen pt-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
            Marketplace Business
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Dijital ürünlerinizi satışa sunun, global pazarlara açılın. Modern e-ticaret araçlarıyla satış süreçlerinizi optimize edin.
            Siz ürünlerinize odaklanın, gerisini biz halledelim!
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
                src="/illustrations/Shopping and Retail _ shop, store, shopping, retail, business, commerce, market.svg"
                alt="Satış Süreci"
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <span className="relative z-10 rounded-full bg-[#ff008C]/10 px-3 py-1.5 font-medium text-[#ff008C]">
                  Satış Süreci
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-[#84ff20]">
                  Profesyonel E-ticaret Araçları
                </h3>
                <p className="mt-5 text-sm leading-6 text-white">
                  Modern e-ticaret araçlarıyla satış süreçlerinizi optimize edin. Güvenli ödeme sistemleri, otomatik fatura oluşturma ve stok yönetimi ile işlerinizi kolaylaştırın.
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
                  Global Lojistik Ağı
                </h3>
                <p className="mt-5 text-sm leading-6 text-white">
                  Global lojistik ağımızla ürünlerinizi dünyanın her yerine ulaştırın. Otomatik kargo takibi, teslimat optimizasyonu ve entegre lojistik çözümleriyle işinizi büyütün.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
              E-ticaret yolculuğunuza başlayın
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie ile global pazarlara açılın
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