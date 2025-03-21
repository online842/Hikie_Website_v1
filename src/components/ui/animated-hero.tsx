'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Alanını Oluştur",
      "Markalaş",
      "Satışa Başla",
      "Topluluğunu Yönet",
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
    }, 1900);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-[80vh] relative isolate overflow-hidden bg-[#161616]">
      <div className="relative z-10 container mx-auto">
        <div className="flex gap-10 py-20 lg:py-20 items-center justify-center flex-col">
          <div>
            <Link
              href="/manifesto"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#161616] bg-[#DBFF08] hover:bg-[#DE2C00] hover:text-white"
            >
              Manifestomuzu Okuyun
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-5xl tracking-tighter text-center font-regular">
              <span className="text-[#DBFF08]">Hikie ile</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-[#DE2C00]"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center">
      

               Ürünlerinizi satışa çıkarın, online kursunuzla binlerce öğrenciye ulaşın, veya 
topluluğunuza özel merch koleksiyonunuzu oluşturun - Hikie ile siz değerinizi üretmeye odaklanın, 
geri kalan her şeyi biz halledelim.
            </p>
          </div>
          <div className="flex gap-8 py-20 lg:py-4 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#DBFF08] text-[#161616] hover:bg-[#DE2C00] hover:text-white rounded-md text-base font-medium transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Görüşme Planla
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#DE2C00] text-white hover:bg-[#DBFF08] hover:text-[#161616] rounded-md text-base font-medium transition-colors"
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
