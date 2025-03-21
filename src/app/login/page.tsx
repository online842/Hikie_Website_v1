export default function ManifestoPage() {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Yeni Nesil E-ticaretin Manifestosu
            </h1>
            <p className="text-xl text-gray-500">
              Dijital dünyanın yeni kahramanları için
            </p>
          </div>
  
          <div className="prose prose-lg prose-indigo mx-auto">
            <p className="lead">
              Biz Hikie olarak inanıyoruz ki, dijital dünyanın yeni kahramanları sizlersiniz - 
              içerik üretenler, girişimciler, topluluk kurucuları ve yaratıcı ruhlar.
            </p>
  
            <h2>Vizyonumuz</h2>
            <p>
              Her yaratıcının kendi dijital imparatorluğunu kurabildiği bir dünya hayal ediyoruz. 
              Öyle bir dünya ki:
            </p>
            <ul>
              <li>Bir içerik üreticisi, tutkusunu sürdürülebilir bir işe dönüştürebilsin</li>
              <li>Bir girişimci, teknik detaylarla boğuşmak yerine vizyonuna odaklanabilsin</li>
              <li>Bir topluluk lideri, topluluğunu güçlendirecek araçlara kolayca erişebilsin</li>
              <li>Bir sanatçı, eserlerini dünyaya sunmak için karmaşık sistemlerle uğraşmak zorunda kalmasın</li>
            </ul>
  
            <h2>Taahhüdümüz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Basitlik</h3>
                <p>Karmaşık e-ticaret süreçlerini basitleştiriyoruz</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Özgürlük</h3>
                <p>Size sadece ihtiyacınız olan araçları sunuyoruz</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Büyüme</h3>
                <p>Siz büyüdükçe sizinle birlikte evriliyoruz</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Topluluk</h3>
                <p>Yalnız değilsiniz, güçlü bir ekosistemin parçasısınız</p>
              </div>
            </div>
  
            <h2>Geleceğe Doğru</h2>
            <p>
              Her gün, her hafta, her ay... Durmadan gelişiyor, öğreniyor ve büyüyoruz. 
              Çünkü biliyoruz ki, sizin başarınız bizim başarımız.
            </p>
            <p>
              Hikie ile yeni nesil e-ticaretin öncülerinden biri olun.
            </p>
            <p className="text-xl font-semibold text-center my-12">
              Çünkü gelecek, yaratıcıların ellerinde şekillenecek.
            </p>
  
            <div className="text-center mt-16">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Yolculuğa Başla
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } 