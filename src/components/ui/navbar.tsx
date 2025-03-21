'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const solutions = [
  {
    name: 'Merch Business',
    description: 'Kendi merch koleksiyonunu oluştur ve yönet',
    href: '/solutions/merch'
  },
  {
    name: 'Kazanç Sağlamaya Başla',
    description: 'Yaratıcı içeriklerini gelire dönüştür',
    href: '/solutions/monetize'
  },
  {
    name: 'Pazaryeri Entegrasyonu',
    description: 'Ürünlerini daha geniş kitlelere ulaştır',
    href: '/solutions/marketplace'
  }
];

const navigation = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Pazaryeri', href: 'https://hikie.store' },
  { name: 'Manifesto', href: '/manifesto' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 bg-[#161616]/50 backdrop-blur-md"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-[#DBFF08] text-2xl font-bold">
            Hikie
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ana menüyü aç</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-[#DE2C00]"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-[#DE2C00]"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
            >
              Kolaylaştırdığımız İşler
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* Solutions panel */}
            {solutionsOpen && (
              <div className="absolute left-1/2 z-10 mt-4 w-screen max-w-md -translate-x-1/2 px-4">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-[#DE2C00] ring-opacity-5">
                  <div className="relative grid gap-6 bg-[#161616] p-6 sm:gap-8 sm:p-8">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start rounded-lg p-3 hover:bg-[#161616]/50 transition-colors"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-[#DBFF08]">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-white">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold leading-6 text-white hover:text-[#DE2C00]"
          >
            Giriş Yap
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-4 py-2 bg-[#DBFF08] text-[#161616] hover:bg-[#DE2C00] hover:text-white rounded-md text-sm font-semibold transition-colors"
          >
            Kayıt Ol
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full bg-[#161616] px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 text-[#DBFF08] text-2xl font-bold">
              HIKIE
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Menüyü kapat</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[#DE2C00]/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#DE2C00]/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile solutions */}
                <div className="space-y-2">
                  <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#DBFF08]">
                    Kolaylaştırdığımız İşler
                  </p>
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 pl-6 text-base text-white hover:bg-[#DE2C00]/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile CTA buttons */}
              <div className="py-6 space-y-3">
                <Link
                  href="/login"
                  className="block text-base font-semibold leading-7 text-white hover:text-[#DE2C00] text-center px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/register"
                  className="block bg-[#DBFF08] text-[#161616] hover:bg-[#DE2C00] hover:text-white px-4 py-2 rounded-md text-base font-semibold text-center transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kayıt Ol
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 