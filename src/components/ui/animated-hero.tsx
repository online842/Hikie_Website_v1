'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Alanını Oluştur",
      "Gelire Dönüştür",
      "Markalaş",
      "Satışa Başla",
      "Topluluğunu Başlat",
      "Eğitimler Ver",
      "Aboneliklerini Sat",
      "Dijital Ürün Sat",
      "Pazara Çık"
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2100);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-[80vh] relative isolate overflow-hidden bg-[#000000]">
      <div className="relative z-10 container mx-auto">
        <div className="flex gap-15 py-20 lg:py-20 items-center justify-center flex-col">
          <div
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#FFFFFFFF] bg-[#000AFF] hover:bg-[#ff008C] hover:text-white"
          >
            <Link href="/manifesto">
              Manifestomuzu Okuyun
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-5xl tracking-tighter text-center font-regular">
              <span className="text-[#84ff20] font-bold">Hikie </span>
              <span className="text-[#84ff20] font-regular">ile</span>
              <span className="relative flex w-full justify-center overflow-hidden h-24">
                {titles.map((title, index) => (
                  <span
                    key={index}
                    className={`absolute font-semibold text-[#84ff20] transition-all duration-500 ease-in-out ${
                      titleNumber === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                  >
                    {title}
                  </span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center">
              Ürünlerinizi satışa çıkarın, online kursunuzla yeni öğrencilere ulaşın, veya 
              topluluğunuza özel merch koleksiyonunuzu oluşturun - Hikie ile siz değerinizi üretmeye odaklanın, 
              geri kalan her şeyi biz halledelim.
            </p>
          </div>
          <div className="flex gap-8 py-20 lg:py-4 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#84ff2000] text-[#ff008C] rounded-md text-base font-medium transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Görüşme Planla
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ff008C] text-white hover:bg-[#84ff20] hover:text-[#000000] rounded-md text-base font-medium transition-colors"
              >
                Hemen Başla
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
