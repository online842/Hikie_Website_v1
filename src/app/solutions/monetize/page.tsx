'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MonetizeSolutions() {
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
              Monetize Business
            </h1>
            <p className="mt-4 text-lg leading-7 text-white/90">
              İçerik ve hizmetlerinizi monetize edin. Modern gelir yönetimi araçlarıyla kazancınızı optimize edin.
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
              src="/illustrations/Business and Finance _ lightbulb, idea, thought, innovation, innovative, project.svg"
              alt="Monetize"
              className="max-h-[350px] w-auto mx-auto lg:max-h-[400px] rounded-md bg-white/5 shadow-lg ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>

      {/* Özellikler Bölümü */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Gelir Stratejisi */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Gelir Stratejisi
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Profesyonel Gelir Yönetimi
              </h3>
              <p className="text-white/80 text-center">
                Modern gelir yönetimi araçlarıyla kazancınızı optimize edin. Abonelik sistemleri, dijital ürün satışları ve özel içerik monetizasyonu ile gelir kaynaklarınızı çeşitlendirin.
              </p>
            </div>

            {/* Güvenli Ödeme */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Güvenli Ödeme
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Güvenli Ödeme Sistemleri
              </h3>
              <p className="text-white/80 text-center">
                Global ödeme sistemleri entegrasyonu ile dünyanın her yerinden güvenli bir şekilde ödeme alın. Otomatik fatura oluşturma ve gelir raporlama araçlarıyla finansal süreçlerinizi yönetin.
              </p>
            </div>

            {/* İçerik Kontrolü */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  İçerik Kontrolü
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                İçerik Yönetim Sistemi
              </h3>
              <p className="text-white/80 text-center">
                İçeriklerinizi tam kontrol altında tutun. Özel erişim seviyeleri, zamanlı yayın ve içerik koruma sistemleriyle değerli içeriklerinizi yönetin.
              </p>
            </div>

            {/* Analiz ve Raporlama */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Analiz ve Raporlama
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Gelişmiş Analiz Araçları
              </h3>
              <p className="text-white/80 text-center">
                Detaylı gelir analizleri, müşteri davranışları ve abonelik metrikleri ile içerik stratejinizi optimize edin. Özelleştirilebilir raporlar ve gerçek zamanlı verilerle daha bilinçli kararlar alın.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Monetizasyon Stratejileri */}
      <div className="py-12 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#84ff20] sm:text-3xl">
              Monetizasyon Stratejileri
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Hikie ile içerik ve hizmetlerinizden değer yaratın ve farklı gelir akışları oluşturun
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Freemium Model */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Freemium Model</h3>
              <p className="text-white/70">Temel içeriği ücretsiz sunarak kullanıcı tabanınızı genişletin, premium özelliklere erişim için ücret alın.</p>
            </div>
            
            {/* Mikro-ödemeler */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Mikro-ödemeler</h3>
              <p className="text-white/70">Küçük miktarlarda ödeme alarak özel içerik, özellikler veya sanal öğeler sunun.</p>
            </div>

            {/* Çoklu Abonelik Seviyeleri */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Çoklu Abonelik Seviyeleri</h3>
              <p className="text-white/70">Farklı fiyat ve değer noktalarında çeşitli abonelik paketleri sunarak erişimi genişletin.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-[#84ff20] sm:text-3xl">
            Monetizasyon yolculuğunuza başlayın
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Hikie ile içeriklerinizi değere dönüştürün
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