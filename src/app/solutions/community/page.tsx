'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CommunitySolutions() {
  return (
    <div className="bg-black min-h-screen pt-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
            Community Business
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Topluluğunuzu oluşturun, yönetin ve büyütün. Abonelik sistemiyle düzenli gelir elde edin.
            Siz içerik üretin, gerisini biz halledelim!
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
                src="/illustrations/Social Media and Communication _ talk, conversation, infinite, forever, love, romance, romantic.svg"
                alt="Topluluk Yönetimi"
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <span className="relative z-10 rounded-full bg-[#ff008C]/10 px-3 py-1.5 font-medium text-[#ff008C]">
                  Topluluk Yönetimi
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-[#84ff20]">
                  Profesyonel Topluluk Araçları
                </h3>
                <p className="mt-5 text-sm leading-6 text-white">
                  Modern topluluk yönetim araçlarıyla üyelerinizle etkileşimde kalın. Özel içerikler, etkinlikler ve abonelik sistemleriyle topluluğunuzu güçlendirin.
                </p>
              </div>
            </div>
          </article>

          <article className="flex flex-col items-start">
            <div className="relative w-full h-[400px] bg-black/50 rounded-2xl overflow-hidden">
              <img
                src="/illustrations/Social Media and Communication  _ ratings, review, stars, feedback, comment, shape, shapes.svg"
                alt="Etkileşim ve Analiz"
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <span className="relative z-10 rounded-full bg-[#ff008C]/10 px-3 py-1.5 font-medium text-[#ff008C]">
                  Etkileşim ve Analiz
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-[#84ff20]">
                  Gelişmiş Analiz Araçları
                </h3>
                <p className="mt-5 text-sm leading-6 text-white">
                  Topluluk etkileşimlerini analiz edin, üye davranışlarını anlayın ve büyüme stratejilerinizi optimize edin. Detaylı raporlar ve özelleştirilebilir metriklerle topluluğunuzu daha iyi yönetin.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
              Topluluğunuzu büyütmeye başlayın
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Hikie ile topluluğunuzu profesyonel araçlarla yönetin
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