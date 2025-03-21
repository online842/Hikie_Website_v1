'use client';

import { Check, Gift } from "lucide-react";

const freeFeatures = [
  "Sana özel websiten",
  "Pazaryerlerimizde ürün listeleme",
  "Güvenli ticaret altyapısı",
  "Blogging & içerik üretimi",
  "Anlaşmalı kargo avantajları",
  "HIKIE topluluğuna erişim",
  "Kullanıcılarına SMS & e-posta gönderme"
];

const paidFeatures = [
  {
    name: "Özel Domain Adı",
    price: "10 USD",
    period: "aylık"
  },
  {
    name: "Depolama, Kargolama ve Müşteri Hizmetleri Yönetimi",
    price: "İhtiyaca Göre",
    period: "değişken"
  },
  {
    name: "Abonelik Yönetimi",
    price: "10 USD + %3",
    period: "aylık + işlem komisyonu",
    description: "Ödeme altyapısı dahil"
  },
  {
    name: "Bağış Toplama",
    price: "3 USD + %3",
    period: "aylık + işlem komisyonu",
    description: "Ödeme altyapısı dahil"
  }
];

export default function Pricing() {
  return (
    <div className="w-full bg-[#161616]">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Ücretsiz Özellikler */}
          <div className="bg-gradient-to-br from-[#DE2C00]/20 to-[#DE2C00]/5 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Gift className="w-8 h-8 text-[#DBFF08]" />
              <h2 className="text-2xl font-semibold text-[#DBFF08]">
                Neler Bulacaksın?
              </h2>
              <span className="text-sm font-medium bg-[#DBFF08] px-3 py-1 rounded-full text-[#161616]">
                herkese ücretsiz
              </span>
            </div>
            
            <ul className="space-y-4">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-[#DBFF08] shrink-0" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#DBFF08] text-[#161616] hover:bg-[#DE2C00] hover:text-white rounded-md text-base font-medium transition-colors"
              >
                ✨ Hemen Ücretsiz Keşfet!
              </a>
            </div>
          </div>

          {/* Ücretli Özellikler */}
          <div className="bg-[#161616]/50 rounded-3xl p-8 lg:p-12 border border-[#DE2C00]">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-semibold text-[#DBFF08]">
                Neler Ücretli?
              </h2>
            </div>
            
            <p className="text-white mb-8 italic">
              İhtiyacın olan kadar öde, gereksiz harcamalara son!
            </p>

            <div className="space-y-6">
              {paidFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 pb-6 border-b border-[#DE2C00]/20 last:border-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-medium text-[#DBFF08]">{feature.name}</h3>
                    <div className="text-right">
                      <div className="font-semibold text-[#DE2C00]">{feature.price}</div>
                      <div className="text-sm text-white/70">{feature.period}</div>
                    </div>
                  </div>
                  {feature.description && (
                    <p className="text-sm text-white/70">{feature.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 