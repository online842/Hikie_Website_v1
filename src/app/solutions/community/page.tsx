'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CommunitySolutions() {
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
              Topluluğunuzu Başlatın ve Abonelik Satın
            </h1>
            <p className="mt-4 text-lg leading-7 text-white/90">
              Topluluğunuzu oluşturun ve abonelik sistemiyle gelir elde edin
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
              src="/illustrations/Social Media and Communication _ talk, conversation, infinite, forever, love, romance, romantic.svg"
              alt="Community"
              className="max-h-[350px] w-auto mx-auto lg:max-h-[400px] rounded-md bg-white/5 shadow-lg ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>

      {/* Özellikler Bölümü */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Topluluk Yönetimi */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Topluluk Yönetimi
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Üyelerinize Özel Deneyimler
              </h3>
              <p className="text-white/80 text-center">
                Abonelerinize özel içerikler, bonus bölümler ve arşivler sunarak sadık bir topluluk oluşturun. Discord entegrasyonu, canlı yayınlar ve kişiselleştirilmiş teşekkür videoları ile etkileşimi artırın.
              </p>
            </div>

            {/* Analiz ve Etkileşim */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Etkileşim ve Analiz
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Gelişmiş Analiz Araçları
              </h3>
              <p className="text-white/80 text-center">
                Topluluk etkileşimlerini analiz edin, üye davranışlarını anlayın ve büyüme stratejilerinizi optimize edin. Öne çıkan yorumlar ve abonelik süreleri takibi ile topluluğunuzu daha iyi yönetin.
              </p>
            </div>

            {/* Entegrasyonlar */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Entegrasyonlar
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Sorunsuz Platform Entegrasyonları
              </h3>
              <p className="text-white/80 text-center">
                Twitch, Discord ve StreamElements gibi popüler platformlarla kesintisiz entegrasyonlar. Abonelerinize özel indirimler ve canlı yayınlarda üyelik hediyelerle topluluğunuza heyecan katın.
              </p>
            </div>

            {/* Marka Kontrolü */}
            <div className="bg-black/30 rounded-xl p-6 shadow-sm ring-1 ring-white/5">
              <div className="text-center mb-4">
                <span className="bg-[#ff008C]/10 text-[#ff008C] rounded-full px-3 py-1 text-xs font-medium">
                  Marka Kontrolü
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#84ff20] text-center mb-4">
                Tam Marka Kontrolü
              </h3>
              <p className="text-white/80 text-center">
                Özel alanlar ve kolay tasarım araçlarıyla üyelerinize sunduğunuz deneyim üzerinde tam kontrol. Ana sayfanız, mağazanız ve üyelik alanınızı tek bir yerde yönetin.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Abonelik Stratejileri */}
      <div className="py-12 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#84ff20] sm:text-3xl">
              Abonelik Stratejileri
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Hikie ile özel içeriklerden merch kulüplerine kadar hedeflerinize uygun abonelik stratejileri oluşturun
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Özel İçerik */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Özel İçerik ve Arşivler</h3>
              <p className="text-white/70">Premium içerikler, bonus bölümler ve arşivlerle abonelerinize değer sunun.</p>
            </div>
            
            {/* Merch Kulüpleri */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Merch Kulüpleri</h3>
              <p className="text-white/70">Özel ürünler ve indirimlerle abonelerinizi ödüllendirin ve marka sadakatini artırın.</p>
            </div>

            {/* VIP Muamelesi */}
            <div className="bg-black/50 p-6 rounded-lg ring-1 ring-white/10">
              <div className="bg-[#84ff20] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">VIP Muamelesi</h3>
              <p className="text-white/70">Kişiselleştirilmiş videolar ve özel Discord rolleriyle VIP deneyim sunun.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-[#84ff20] sm:text-3xl">
            Topluluğunuzu büyütmeye başlayın
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Hikie ile topluluğunuzu profesyonel araçlarla yönetin ve düzenli gelir elde edin
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