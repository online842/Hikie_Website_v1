'use client';

import { Check, Gift } from "lucide-react";

const freeFeatures = [
  
  "Güvenli Ticaret Altyapımızı kullan",
  "Sana özel sitende ürün listele ve ödeme al",
  "88 TL'ye ürünlerini kapıdan kapıya kargola",
  "HIKIE topluluğuna katıl ve yeni bağlantılar kur",
  "Topluluğunu yönet ve kullanıcılarına SMS & e-posta gönder",
  "Pazaryerlerimizde ürün listele",
];

const paidFeatures = [
  {
    name: "Özel Domain Adı",
    price: "400 TRY",
    period: "aylık"
  },
  {
    name: "Depolama, Kargolama ve Müşteri Hizmetleri Yönetimi",
    price: "İhtiyaca Göre",
    period: "değişken"
  },
  {
    name: "Abonelik Yönetimi",
    price: "Yakında",
    period: "",
  },
  {
    name: "Bağış Toplama",
    price: "Yakında",
    period: "",
  }
];

export default function Pricing() {
  return (
    <div className="w-full bg-[#000000]">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Ücretsiz Özellikler */}
          <div className="bg-gradient-to-br from-[#ff008C]/20 to-[#ff008C]/5 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Gift className="w-8 h-8 text-[#84ff20]" />
              <h2 className="text-2xl font-semibold text-[#84ff20]">
                Neler Bulacaksın?
              </h2>
              <span className="text-sm font-medium flex text-center bg-[#84ff20] px-3 py-2 rounded-full text-[#000000]">
                herkese ücretsiz
              </span>
            </div>
            
            <ul className="space-y-4">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-[#84ff20] shrink-0" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ff008C] text-[#ffffff] hover:bg-[#84ff20] hover:text-black rounded-md text-base font-medium transition-colors"
              >
                ✨ Hemen Ücretsiz Keşfet!
              </a>
            </div>
          </div>

          {/* Ücretli Özellikler */}
          <div className="bg-[#000000]/50 rounded-3xl p-8 lg:p-12 border border-[#ff008C]">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-semibold text-[#84ff20]">
                Neler Ücretli?
              </h2>
            </div>
            
            <p className="text-white mb-8 italic">
              İhtiyacın olan kadar öde, gereksiz harcama yok!
            </p>

            <div className="space-y-6">
              {paidFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 pb-6 border-b border-[#ff008C]/20 last:border-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-medium text-[#84ff20]">{feature.name}</h3>
                    <div className="text-right">
                      <div className="font-semibold text-[#ff008C]">{feature.price}</div>
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