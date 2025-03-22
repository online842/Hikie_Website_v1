import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-[#F5F5F5] text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#84ff20]">Hemen Başla!</h2>
        <p className="text-xl mb-12 text-white">
          Hikie ile dijital varlığını oluştur ve işini büyüt
        </p>
        <Link href="/register" className="bg-[#ff008c] text-[#000000] px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#000AFF] hover:text-white transition-colors">
          🚀 Şimdi Hemen Kur & İşini Başlat!
        </Link>
      </div>
    </section>
  );
} 