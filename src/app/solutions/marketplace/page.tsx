'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MarketplaceSolutions() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-8 pb-4 lg:pt-16 lg:pb-8">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 lg:flex lg:items-center lg:gap-x-8">
          <div className="max-w-2xl mb-8 lg:mb-0 lg:max-w-xl">
            <div>
              <span className="rounded-full bg-[#001400] px-3 py-1 text-sm font-semibold leading-6 text-[#84ff20] ring-1 ring-inset ring-[#84ff20]/20">
                Çok Yakında
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Marketplace Business
            </h1>
            <p className="mt-4 text-lg leading-7 text-white/90">
              Dijital ürünlerinizi satışa sunun, global pazarlara açılın. Modern e-ticaret araçlarıyla satış süreçlerinizi optimize edin.
            </p>
            <div className="mt-6 flex items-center gap-x-4">
              <Link
                href="/register"
                className="rounded-md bg-[#ff008C] px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#84ff20] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84ff20] transition-colors duration-300"
              >
                Hemen Başla
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
                İletişime Geç <ArrowRight className="inline-block ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:flex-1">
            <img
              src="/illustrations/Shopping and Retail _ shop, store, shopping, retail, business, commerce, market.svg"
              alt="Marketplace"
              className="max-h-[350px] w-auto mx-auto lg:max-h-[400px] rounded-md bg-white/5 shadow-lg ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>

      {/* Özellikler Bölümü */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* E-ticaret Araçları */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Satış Süreci
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Profesyonel E-ticaret Araçları
              </h3>
              <p className="text-white/80 text-center">
                Modern e-ticaret araçlarıyla satış süreçlerinizi optimize edin. Güvenli ödeme sistemleri, otomatik fatura oluşturma ve stok yönetimi ile işlerinizi kolaylaştırın.
              </p>
            </div>

            {/* Global Lojistik */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Lojistik ve Dağıtım
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Global Lojistik Ağı
              </h3>
              <p className="text-white/80 text-center">
                Global lojistik ağımızla ürünlerinizi dünyanın her yerine ulaştırın. Otomatik kargo takibi, teslimat optimizasyonu ve entegre lojistik çözümleriyle işinizi büyütün.
              </p>
            </div>

            {/* Dijital İçerik Yönetimi */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  İçerik Yönetimi
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Dijital İçerik Platformu
              </h3>
              <p className="text-white/80 text-center">
                Dijital ürünlerinizi güvenli bir şekilde depolayın ve dağıtın. Abonelik bazlı indirmeler, DRM koruması ve içerik dağıtımı için özel araçlarla içeriklerinizi yönetin.
              </p>
            </div>

            {/* Müşteri Deneyimi */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Müşteri Deneyimi
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Kişiselleştirilmiş Alışveriş
              </h3>
              <p className="text-white/80 text-center">
                Kullanıcı davranışlarına göre kişiselleştirilmiş alışveriş deneyimi sunun. Ürün önerileri, özel indirimler ve hedefli pazarlama kampanyalarıyla dönüşüm oranlarını artırın.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* E-ticaret Stratejileri */}
      <div className="py-12 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#84ff20] sm:text-3xl">
              E-ticaret Stratejileri
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Hikie ile dijital ürünlerinizi global pazarlara sunun ve satışlarınızı optimize edin
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Abonelik Modeli */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Abonelik Modeli</h3>
              <p className="text-white/70">Düzenli gelir akışı sağlayan abonelik bazlı dijital ürün ve hizmetler sunun.</p>
            </div>
            
            {/* Kitlesel Özelleştirme */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Kitlesel Özelleştirme</h3>
              <p className="text-white/70">Müşterilerinize kendi ihtiyaçlarına göre özelleştirebilecekleri ürünler sunun.</p>
            </div>

            {/* Çok Kanallı Satış */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Çok Kanallı Satış</h3>
              <p className="text-white/70">Birden fazla platform üzerinden ürünlerinizi satarak erişiminizi ve satışlarınızı artırın.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-[#84ff20] sm:text-3xl">
            E-ticaret yolculuğunuza başlayın
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Hikie ile global pazarlara açılın
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="rounded-md bg-[#ff008C] px-5 py-2.5 text-base font-semibold text-white shadow-md hover:bg-[#84ff20] hover:text-black transition-colors duration-300"
            >
              Hemen Başla
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-5 py-2.5 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-300"
            >
              Görüşme Planla <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 