'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#ff008C]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-jost text-3xl font-semibold text-[#84ff20]">
              Hikie
            </Link>
            <p className="mt-4 text-sm leading-6 text-white max-w-md">
              Dijital varlığınızı yönetmenin en kolay yolu. Tek platform, sınırsız
              olasılık.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com/hikieco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84ff20] hover:text-[#ff008C]"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/hikieco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84ff20] hover:text-[#ff008C]"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/hikieco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84ff20] hover:text-[#ff008C]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Ürün */}
          <div>
            <h3 className="font-semibold text-[#ff008C] mb-4">Ürün</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-[#84ff20] hover:text-[#ff008C]">
                  Özellikler
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[#84ff20] hover:text-[#ff008C]">
                  Fiyatlandırma
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-[#84ff20] hover:text-[#ff008C]">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link href="https://hikie.store" className="text-[#84ff20] hover:text-[#ff008C]">
                  Pazaryeri
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="font-semibold text-[#ff008C] mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-[#84ff20] hover:text-[#ff008C]">
                  Görüşme Planla
                </Link>
              </li>
              <li>
                <a href="mailto:hello@hikie.co" className="text-[#84ff20] hover:text-[#ff008C]">
                  hello@hikie.co
                </a>
              </li>
              <li>
                <Link href="/register" className="text-[#84ff20] hover:text-[#ff008C]">
                  Ücretsiz Başla
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-[#ff008C]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white">
            © {new Date().getFullYear()} Hikie. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-sm text-white">
              İstanbul, Türkiye 🇹🇷
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 