'use client';

import { Palette, Users, Lightbulb, BookOpen, Store, CreditCard, Users2, Building } from 'lucide-react';

const personas = [
  {
    title: "Kreatörler",
    description: "Dijital dünyada iz bırakanlar için",
    icon: Palette,
    features: [
      {
        icon: Users,
        text: "İçerik üreticiler ve influencerlar"
      },
      {
        icon: CreditCard,
        text: "Dijital ürün satışı yapanlar"
      },
      {
        icon: BookOpen,
        text: "Online eğitmenler ve koçlar"
      },
      {
        icon: Users2,
        text: "Topluluk yönetenler"
      }
    ]
  },
  {
    title: "Girişimciler",
    description: "İşini büyütmek isteyenler için",
    icon: Lightbulb,
    features: [
      {
        icon: Store,
        text: "E-ticaret işletmeleri"
      },
      {
        icon: Building,
        text: "Butik mağaza sahipleri"
      },
      {
        icon: CreditCard,
        text: "Abonelik bazlı iş modelleri"
      }
    ]
  }
];

export default function Personas() {
  return (
    <section className="py-24 bg-[#000000]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#84ff20]">
            Kimler İçin?
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Hikie, dijital dünyada başarılı olmak isteyen herkes için tasarlandı
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="relative overflow-hidden group"
            >
              <div className="relative bg-[#000000]/50 p-8 rounded-2xl border border-[#ff008C]/20 group-hover:border-[#ff008C] transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#000000]/50 flex items-center justify-center group-hover:bg-[#84ff20]/10 transition-all">
                    <persona.icon className="w-6 h-6 text-[#84ff20]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#84ff20]">
                      {persona.title}
                    </h3>
                    <p className="text-white/80">
                      {persona.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {persona.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 group-hover:translate-x-2 transition-transform"
                    >
                      <feature.icon className="w-5 h-5 text-[#ff008C]" />
                      <span className="text-white">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 