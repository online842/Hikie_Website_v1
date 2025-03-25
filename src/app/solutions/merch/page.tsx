'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MerchSolutions() {
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
              Merch Business
            </h1>
            <p className="mt-4 text-lg leading-7 text-white/90">
              Topluluğunuza özel merch koleksiyonu oluşturun ve operasyonlarınızı yönetin.
              Siz tasarlayın, gerisini biz halledelim!
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
              alt="Merch"
              className="max-h-[350px] w-auto mx-auto lg:max-h-[400px] rounded-md bg-white/5 shadow-lg ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>

      {/* Özellikler Bölümü */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Tasarım ve Üretim */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Tasarım ve Üretim
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Profesyonel Tasarım Desteği
              </h3>
              <p className="text-white/80 text-center">
                Özel tasarım araçlarımızla koleksiyonunuzu oluşturun. Kalite kontrol süreçleri ve üretim takibi ile ürünlerinizi güvenle üretin.
              </p>
            </div>

            {/* Lojistik ve Dağıtım */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Lojistik ve Dağıtım
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Global Dağıtım Ağı
              </h3>
              <p className="text-white/80 text-center">
                Global lojistik ağımızla ürünlerinizi dünyanın her yerine ulaştırın. Otomatik kargo takibi ve teslimat optimizasyonu ile müşteri memnuniyetini artırın.
              </p>
            </div>

            {/* Stok Yönetimi */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Stok Yönetimi
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Akıllı Envanter Sistemi
              </h3>
              <p className="text-white/80 text-center">
                Otomatik stok takibi ve yenileme sistemi ile envanter yönetimini kolaylaştırın. Talebe göre üretim ve tedarik zinciri optimizasyonu ile maliyetlerinizi düşürün.
              </p>
            </div>

            {/* Satış Analizi */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Satış Analizi
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Detaylı Analiz ve Raporlama
              </h3>
              <p className="text-white/80 text-center">
                Gerçek zamanlı satış verilerini analiz edin ve stratejilerinizi optimize edin. Ürün performansı, müşteri demografisi ve satış trendleri ile daha iyi kararlar alın.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Merch Stratejileri */}
      <div className="py-12 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#84ff20] sm:text-3xl">
              Merch Stratejileri
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Hikie ile topluluğunuza özel ürünler tasarlayın ve global pazarlara açılın
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Özel Koleksiyonlar */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Özel Koleksiyonlar</h3>
              <p className="text-white/70">Topluluğunuza özel tasarımlarla benzersiz ürün koleksiyonları oluşturun.</p>
            </div>
            
            {/* Mevsimsel Ürünler */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Mevsimsel Ürünler</h3>
              <p className="text-white/70">Yıl boyunca farklı sezon ve etkinliklere özel sınırlı sayıda ürünler sunun.</p>
            </div>

            {/* Sürdürülebilir Üretim */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sürdürülebilir Üretim</h3>
              <p className="text-white/70">Çevre dostu malzemeler ve sürdürülebilir üretim süreçleriyle marka değerinizi artırın.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-[#84ff20] sm:text-3xl">
            Merch yolculuğunuza başlayın
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Hikie ile global merch operasyonlarınızı yönetin
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