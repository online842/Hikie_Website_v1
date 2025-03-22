'use client';

import { Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const meetingTypes = [
  {
    title: 'Hızlı Tanışma',
    description: 'Hikie hakkında bilgi almak için 15 dakikalık görüşme',
    icon: Users,
    calendarUrl: 'https://calendar.app.google/xwvwh7qcBUKKrHPZA'
  }
];

export default function Contact() {
  const openCalendar = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-[80vh] bg-[#000000] relative overflow-hidden">
      {/* Dekoratif arka plan ögeleri */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#84ff20]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff008C]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="bg-[#84ff20] px-4 py-1 rounded-full text-sm font-medium text-[#000000] inline-block mb-4">
            Görüşme Planla
          </span>
          <h1 className="text-4xl font-bold text-[#84ff20] mb-4">
            Hikie Ekibiyle Tanış
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            İhtiyaçlarını anlamak ve sana en uygun çözümü sunmak için buradayız.
            Hemen bir görüşme planla!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
          {meetingTypes.map((meeting, index) => {
            const Icon = meeting.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                key={meeting.title}
                className="bg-[#000000]/50 p-8 rounded-xl border border-[#ff008C]/20 hover:border-[#ff008C] transition-all backdrop-blur-sm"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#84ff20]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                >
                  <Icon className="w-6 h-6 text-[#84ff20]" />
                </motion.div>
                <h3 className="text-xl font-semibold text-[#84ff20] mb-2">
                  {meeting.title}
                </h3>
                <p className="text-white mb-6">
                  {meeting.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openCalendar(meeting.calendarUrl)}
                  className="flex items-center justify-center w-full gap-2 py-3 px-4 bg-[#84ff20] text-[#000000] rounded-lg hover:bg-[#ff008C] hover:text-white transition-colors"
                >
                  <span>Görüşme Planla</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center relative"
        >
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-32 h-32 bg-[#84ff20]/5 rounded-full blur-2xl" />
          </div>
          <p className="text-white mb-4">
            Acil sorular için
          </p>
          <a
            href="mailto:hello@hikie.co"
            className="text-[#84ff20] font-medium hover:text-[#ff008C] transition-colors inline-flex items-center gap-2"
          >
            info@hikie.space
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </div>
  );
} 