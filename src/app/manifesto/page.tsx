'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const commitments = [
  {
    title: "Özgürlük",
    description: "Kreatörlere ve girişimcilere tam kontrol. Kendi kurallarınızı siz belirleyin.",
  },
  {
    title: "Kolaylık",
    description: "Karmaşık süreçleri basitleştiriyoruz. Siz işinize odaklanın.",
  },
  {
    title: "Büyüme",
    description: "Veriye dayalı kararlar ve otomatik sistemlerle hızlı büyüme.",
  },
  {
    title: "Topluluk",
    description: "Güçlü bir ekosistemin parçası olun. Birlikte daha güçlüyüz.",
  }
];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium bg-[#ff008C] text-white px-4 py-2 rounded-full mb-4"
          >
            Manifestomuz
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-[#84ff20] mb-4"
          >
            Kreatör Ekonomisinin Geleceği Burada
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white"
          >
            Dijital dünyanın yeni kreatörleri için tasarlandı.
            Her şey tek platformda, sınırsız potansiyel.
          </motion.p>
        </div>

        <div className="prose prose-lg mx-auto text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[#84ff20] mb-4">Vizyonumuz</h2>
            <p className="text-white mb-8">
              Her kreatörün ve girişimcinin kendi dijital alanını kurabildiği bir dünya inşa ediyoruz.
              Tek bir platform üzerinden tüm dijital varlıklarınızı yönetin:
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-[#ff008C] mr-2">•</span>
                <span>Dijital ürünler, abonelikler ve özel içerikler</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff008C] mr-2">•</span>
                <span>Print-on-demand merch ve fiziksel ürünler</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff008C] mr-2">•</span>
                <span>Topluluk yönetimi ve üyelik sistemleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff008C] mr-2">•</span>
                <span>Gelişmiş analitik ve otomatizasyon araçları</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-[#84ff20] mb-6">Taahhütlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-[#000000]/50 p-6 rounded-xl border border-[#ff008C]/20"
                >
                  <h3 className="text-xl font-semibold text-[#84ff20] mb-2">
                    {commitment.title}
                  </h3>
                  <p className="text-white">
                    {commitment.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-xl font-semibold text-[#84ff20] mb-8">
              Dijital geleceğinize başlayın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ff008C] text-white hover:bg-[#84ff20] hover:text-[#000000] rounded-md text-base font-medium transition-colors"
              >
                Hemen Başla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#ff008C] text-[#ff008C] hover:bg-[#84ff20] hover:text-[#000000] hover:border-[#84ff20] rounded-md text-base font-medium transition-colors"
              >
                Görüşme Planla
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 