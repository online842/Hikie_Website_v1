'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada kayıt işlemleri yapılacak
    console.log('Register attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-[80vh] bg-[#000000] relative overflow-hidden">
      {/* Dekoratif arka plan ögeleri */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#84ff20]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff008C]/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#84ff20] mb-2">
              Hikie'ye Hoş Geldin
            </h2>
            <p className="text-white/80">
              Ücretsiz hesabını oluştur ve yolculuğuna başla
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#000000]/50 p-8 rounded-xl border border-[#ff008C]/20 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Ad Soyad
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-3 py-2 bg-[#000000]/50 border border-[#ff008C]/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#84ff20] focus:border-transparent"
                  placeholder="Ad Soyad"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2 bg-[#000000]/50 border border-[#ff008C]/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#84ff20] focus:border-transparent"
                  placeholder="ornek@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                  Şifre
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full px-3 py-2 bg-[#000000]/50 border border-[#ff008C]/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#84ff20] focus:border-transparent"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
                  Şifre Tekrar
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full px-3 py-2 bg-[#000000]/50 border border-[#ff008C]/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#84ff20] focus:border-transparent"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#84ff20] text-[#000000] rounded-lg hover:bg-[#ff008C] hover:text-white transition-colors font-medium"
              >
                <span>Hesap Oluştur</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="text-xs text-center text-white/60">
                Hesap oluşturarak{' '}
                <Link href="#" className="text-[#84ff20] hover:text-[#ff008C] transition-colors">
                  kullanım koşullarını
                </Link>{' '}
                ve{' '}
                <Link href="#" className="text-[#84ff20] hover:text-[#ff008C] transition-colors">
                  gizlilik politikasını
                </Link>{' '}
                kabul etmiş olursunuz.
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white">
                Zaten hesabın var mı?{' '}
                <Link
                  href="/login"
                  className="font-medium text-[#84ff20] hover:text-[#ff008C] transition-colors"
                >
                  Giriş yap
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 