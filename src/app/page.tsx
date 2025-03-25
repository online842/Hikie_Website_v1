'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <span className="rounded-full bg-[#001400] px-3 py-1 text-sm font-semibold leading-6 text-[#84ff20] ring-1 ring-inset ring-[#84ff20]/20">
                Çok Yakında
              </span>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Topluluğunuzu Başlatın ve Abonelik Satın
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Topluluğunuzu oluşturun ve abonelik sistemiyle gelir elde edin
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/register"
                className="rounded-md bg-[#ff008C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#84ff20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84ff20] transition-colors duration-300"
              >
                Hemen Başla
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
                İletişime Geç <ArrowRight className="inline-block ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="/illustrations/Social Media and Communication _ talk, conversation, infinite, forever, love, romance, romantic.svg"
                alt="Community"
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#84ff20]">Çözümlerimiz</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Topluluğunuzu Güçlendirin
          </p>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Modern topluluk yönetimi araçlarıyla üyelerinizi etkin bir şekilde yönetin, etkileşimi artırın ve topluluğunuzu büyütün.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {/* Community */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <div className="h-5 w-5 flex-none text-[#84ff20]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.745 6.745 0 011.019-4.381z" clipRule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                </div>
                Community
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/90">
                <p className="flex-auto">Topluluğunuzu yönetin, üyelerinizle etkileşimde kalın ve sürdürülebilir bir topluluk oluşturun.</p>
                <p className="mt-6">
                  <Link href="/solutions/community" className="text-sm font-semibold leading-6 text-[#84ff20]">
                    Daha Fazla Bilgi <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>

            {/* Creator */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <div className="h-5 w-5 flex-none text-[#84ff20]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>
                </div>
                Creator
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/90">
                <p className="flex-auto">İçerik üretim sürecinizi yönetin, içeriklerinizi planlayın ve yayınlayın.</p>
                <p className="mt-6">
                  <Link href="/solutions/creator" className="text-sm font-semibold leading-6 text-[#84ff20]">
                    Daha Fazla Bilgi <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>

            {/* Marketplace */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <div className="h-5 w-5 flex-none text-[#84ff20]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </div>
                Marketplace
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/90">
                <p className="flex-auto">Dijital ürünlerinizi satışa sunun, satış sürecinizi optimize edin ve gelirlerinizi artırın.</p>
                <p className="mt-6">
                  <Link href="/solutions/marketplace" className="text-sm font-semibold leading-6 text-[#84ff20]">
                    Daha Fazla Bilgi <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>

            {/* Monetize */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <div className="h-5 w-5 flex-none text-[#84ff20]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                  </svg>
                </div>
                Monetize
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/90">
                <p className="flex-auto">İçeriklerinizi ve hizmetlerinizi monetize edin, gelir kaynaklarınızı çeşitlendirin.</p>
                <p className="mt-6">
                  <Link href="/solutions/monetize" className="text-sm font-semibold leading-6 text-[#84ff20]">
                    Daha Fazla Bilgi <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>

            {/* Merch */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <div className="h-5 w-5 flex-none text-[#84ff20]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                  </svg>
                </div>
                Merch
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/90">
                <p className="flex-auto">Topluluğunuza özel merch koleksiyonu oluşturun, üretimden satışa tüm süreci yönetin.</p>
                <p className="mt-6">
                  <Link href="/solutions/merch" className="text-sm font-semibold leading-6 text-[#84ff20]">
                    Daha Fazla Bilgi <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>

            {/* Website Infrastructure */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <div className="h-5 w-5 flex-none text-[#84ff20]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Website Infrastructure
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/90">
                <p className="flex-auto">Web sitenizi güvenli ve performanslı bir şekilde yönetin, teknik altyapınızı güçlendirin.</p>
                <p className="mt-6">
                  <Link href="/solutions/website-infrastructure" className="text-sm font-semibold leading-6 text-[#84ff20]">
                    Daha Fazla Bilgi <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#84ff20] to-[#ff008C]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Topluluğunuzu Hikie ile Büyütün
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Modern topluluk yönetimi araçlarıyla üyelerinizi etkin bir şekilde yönetin ve topluluğunuzu büyütün.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/register"
              className="rounded-md bg-[#ff008C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#84ff20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84ff20] transition-colors duration-300"
            >
              Hemen Başla
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
              İletişime Geç <ArrowRight className="inline-block ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#84ff20] to-[#ff008C] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}