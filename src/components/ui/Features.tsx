'use client';

import { ArrowRight } from "lucide-react";

const features = [
  {
    name: "Tek Platformda Tüm Satışlar",
    description: "Dijital ürünler, üyelikler, merch ve daha fazlası. Tüm gelir kaynaklarınızı tek platformda yönetin.",
  },
  {
    name: "Özelleştirilebilir Mağaza",
    description: "Markanıza özel tasarlanmış, mobil uyumlu mağaza sayfaları. Sürükle-bırak ile kolayca özelleştirin.",
  },
  {
    name: "Merch Üretim ve Lojistik",
    description: "Stok derdi yok. Siz tasarlayın, biz üretelim. Siparişten kargoya tüm süreci biz yönetelim.",
  },
  {
    name: "Gelişmiş Analitik",
    description: "Satış, gelir ve müşteri verilerinizi anlık takip edin. Veri odaklı kararlar alın, işinizi büyütün.",
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-[#000000] sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#ff008C]">
            Kreatör Ekonomisinin Yeni Nesil Platformu
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
            Her Şey Tek Platformda
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Dijital ürünlerden merch'e, üyelik sistemlerinden özel içeriklere. 
            Tüm gelir kaynaklarınızı tek platformda yönetin, topluluğunuzu güçlendirin.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col bg-[#000000]/50 p-8 rounded-2xl border border-[#ff008C]/20"
              >
                <dt className="text-xl font-semibold leading-7 text-[#84ff20]">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-[#ff008C] hover:text-[#ff008C]"
                    >
                      Daha fazla bilgi <ArrowRight className="inline-block w-4 h-4 ml-1" />
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 