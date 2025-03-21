'use client';

import { useEffect } from 'react';
import { CalendarDays, Users, Building2, ArrowRight } from 'lucide-react';

const meetingTypes = [
  {
    title: 'Hızlı Tanışma',
    description: 'Hikie hakkında bilgi almak için 15 dakikalık görüşme',
    icon: Users,
    calendlyUrl: 'https://calendly.com/hikie/15min'
  },
  {
    title: 'Ürün Demo',
    description: 'Hikie\'nin özelliklerini detaylı inceleyelim',
    icon: CalendarDays,
    calendlyUrl: 'https://calendly.com/hikie/demo'
  },
  {
    title: 'Kurumsal Görüşme',
    description: 'Özel çözümler için detaylı toplantı',
    icon: Building2,
    calendlyUrl: 'https://calendly.com/hikie/enterprise'
  }
];

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = (url: string) => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url });
    }
  };

  return (
    <div className="min-h-[80vh] bg-gray-50">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="bg-hikie-lime px-4 py-1 rounded-full text-sm font-medium text-gray-900 inline-block mb-4">
            Görüşme Planla
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hikie Ekibiyle Tanış
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İhtiyaçlarını anlamak ve sana en uygun çözümü sunmak için buradayız.
            Hemen bir görüşme planla!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {meetingTypes.map((meeting) => {
            const Icon = meeting.icon;
            return (
              <div
                key={meeting.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-hikie-lime/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {meeting.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {meeting.description}
                </p>
                <button
                  onClick={() => openCalendly(meeting.calendlyUrl)}
                  className="flex items-center justify-center w-full gap-2 py-3 px-4 bg-hikie-lime text-gray-900 rounded-lg hover:bg-hikie-lime-light transition-colors"
                >
                  <span>Görüşme Planla</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Acil sorular için
          </p>
          <a
            href="mailto:hello@hikie.co"
            className="text-gray-900 font-medium hover:text-hikie-lime transition-colors"
          >
            hello@hikie.co
          </a>
        </div>
      </div>
    </div>
  );
} 