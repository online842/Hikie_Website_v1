'use client';

import { Users, MessageSquare, Heart, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    name: 'Topluluk Etkileşimi',
    description: 'Üyelerinizle etkili iletişim kurun, geri bildirimleri yönetin.',
    icon: Users,
  },
  {
    name: 'Sohbet ve Tartışma',
    description: 'Canlı sohbetler ve forum tartışmalarıyla topluluğunuzu aktif tutun.',
    icon: MessageSquare,
  },
  {
    name: 'Bağlılık Programları',
    description: 'Özel ödüller ve programlarla üye bağlılığını artırın.',
    icon: Heart,
  },
  {
    name: 'Hızlı Büyüme',
    description: 'Viral büyüme stratejileriyle topluluğunuzu genişletin.',
    icon: Zap,
  },
];

export default function CommunitySolutions() {
  return (
    <div className="bg-white pt-24">
      <div className="relative isolate">
        {/* Hero Section with Background Image */}
        <div className="absolute inset-0 -z-10 h-[800px]">
          <Image
            src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2940&auto=format&fit=crop"
            alt="Abstract Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Community
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Topluluğunuzu güçlendirin, etkileşimi artırın ve büyümeyi hızlandırın.
                Modern topluluk yönetim araçlarıyla fark yaratın.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/register"
                  className="bg-[#DBFF08] hover:bg-[#DBFF08]/90 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors"
                >
                  Hemen Başla
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Bize Ulaşın <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Image Section */}
        <div className="mt-16 sm:mt-24 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop"
                alt="Community Engagement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Özellikler */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Topluluk yönetiminde yeni nesil
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hikie ile topluluğunuzu yönetmek çok daha kolay.
              Modern araçlarla etkileşimi artırın, büyümeyi hızlandırın.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#DBFF08]">
                      <feature.icon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 