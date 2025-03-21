'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-sm">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Ücretsiz Hesap Oluştur
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Zaten hesabın var mı?{' '}
            <a href="/login" className="font-medium text-gray-900 hover:text-hikie-lime">
              Giriş yap
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Ad Soyad
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-hikie-lime focus:border-hikie-lime focus:z-10 sm:text-sm"
                placeholder="Ad Soyad"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                E-posta adresi
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-hikie-lime focus:border-hikie-lime focus:z-10 sm:text-sm"
                placeholder="E-posta adresi"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Şifre
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-hikie-lime focus:border-hikie-lime focus:z-10 sm:text-sm"
                placeholder="Şifre"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-hikie-lime hover:bg-hikie-lime-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hikie-lime"
            >
              Hesap Oluştur
            </button>
          </div>

          <div className="text-xs text-center text-gray-600">
            Hesap oluşturarak{' '}
            <a href="#" className="text-gray-900 hover:text-hikie-lime">
              kullanım koşullarını
            </a>{' '}
            ve{' '}
            <a href="#" className="text-gray-900 hover:text-hikie-lime">
              gizlilik politikasını
            </a>{' '}
            kabul etmiş olursunuz.
          </div>
        </form>
      </div>
    </div>
  );
} 