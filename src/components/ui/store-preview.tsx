'use client';

import { useState } from 'react';

export default function StorePreview() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full bg-[#000000]">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#84ff20] sm:text-4xl">
            Hikie Pazaryeri
          </h2>
          <p className="mt-4 text-lg leading-8 text-white">
            Kreatörlerin ve girişimcilerin özel ürünlerini keşfedin. 
            Dijital ürünlerden eğitimlere, topluluk üyeliklerinden özel içeriklere...
          </p>
        </div>
        
        <div className="relative w-full aspect-[9/16] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#000000]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#84ff20]"></div>
            </div>
          )}
          <iframe
            src="https://hikie.store"
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            allow="clipboard-write"
            width="100%"
            height="100%"
            loading="lazy"
            title="Hikie Store Preview"
          />
        </div>
      </div>
    </div>
  );
} 