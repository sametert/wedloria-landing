import React from 'react';
import '../index.css';
import Navbar from './Navbar';

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="privacy-policy">
        <div className="privacy-hero">
          <h1>Gizlilik Politikası</h1>
          <p className="privacy-subtitle">Kişisel bilgilerinizin güvenliği bizim için çok önemlidir</p>
          <p className="privacy-date">Son güncelleme: 20 Ocak 2025</p>
        </div>

        <div className="privacy-container">
          <div className="privacy-intro">
            <div className="intro-icon">🔒</div>
            <p>
              Wedloria olarak, kişisel bilgilerinizin gizliliği konusunda endişelerinizi anlıyoruz. 
              Bu Gizlilik Politikası, Wedloria hizmetlerini kullanırken hangi bilgilerin toplandığını, 
              bu bilgilerin nasıl kullanıldığını ve korunduğunu açıklar.
            </p>
          </div>

          <div className="privacy-sections">
            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">📊</div>
                <h2>1. Topladığımız Bilgiler</h2>
              </div>
              <div className="card-content">
                <p>Wedloria hizmetlerini kullanırken aşağıdaki bilgi türlerini toplayabiliriz:</p>
                <div className="info-grid">
                  <div className="info-item">
                    <div className="info-icon">👤</div>
                    <div>
                      <strong>Kişisel Bilgiler</strong>
                      <p>İsim, soyisim, e-posta adresi gibi sizi tanımlayan bilgiler</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📸</div>
                    <div>
                      <strong>Fotoğraflar</strong>
                      <p>Wedloria platformuna yüklediğiniz fotoğraflar ve görüntüler</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📱</div>
                    <div>
                      <strong>Kullanım Bilgileri</strong>
                      <p>Uygulama kullanım şekliniz, erişim zamanları</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">💻</div>
                    <div>
                      <strong>Cihaz Bilgileri</strong>
                      <p>IP adresi, tarayıcı türü, işletim sistemi bilgileri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <h2>2. Bilgilerin Kullanımı</h2>
              </div>
              <div className="card-content">
                <p>Topladığımız bilgileri şu amaçlarla kullanırız:</p>
                <ul className="modern-list">
                  <li>Wedloria hizmetlerini sağlamak ve geliştirmek</li>
                  <li>Kullanıcı deneyimini kişiselleştirmek</li>
                  <li>Teknik destek sağlamak</li>
                  <li>Güvenlik ve dolandırıcılık önleme</li>
                  <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🤝</div>
                <h2>3. Bilgi Paylaşımı</h2>
              </div>
              <div className="card-content">
                <p>Kişisel bilgilerinizi üçüncü taraflarla paylaşmayız. Sadece şu durumlarda bilgi paylaşımı yapabiliriz:</p>
                <ul className="modern-list">
                  <li>Yasal bir zorunluluk olduğunda</li>
                  <li>Hizmet sağlayıcılarımızla (Google Firebase gibi) güvenli şekilde</li>
                  <li>Açık rızanızı aldığımızda</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🛡️</div>
                <h2>4. Veri Güvenliği</h2>
              </div>
              <div className="card-content">
                <p>Kişisel bilgilerinizi korumak için endüstri standardı güvenlik önlemleri kullanırız:</p>
                <ul className="modern-list">
                  <li>SSL şifrelemesi ile güvenli veri aktarımı</li>
                  <li>Google Firebase altyapısı ile güvenli veri depolama</li>
                  <li>Düzenli güvenlik güncellemeleri</li>
                  <li>Erişim kontrolü ve yetkilendirme</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">⏰</div>
                <h2>5. Veri Saklama Süresi</h2>
              </div>
              <div className="card-content">
                <p>Kişisel bilgilerinizi yalnızca gerekli olduğu süre boyunca saklarız:</p>
                <div className="time-grid">
                  <div className="time-item">
                    <div className="time-icon">👤</div>
                    <div>
                      <strong>Hesap bilgileri</strong>
                      <span>Hesap aktif olduğu süre boyunca</span>
                    </div>
                  </div>
                  <div className="time-item">
                    <div className="time-icon">📸</div>
                    <div>
                      <strong>Fotoğraflar</strong>
                      <span>Seçtiğiniz paket süresince</span>
                    </div>
                  </div>
                  <div className="time-item">
                    <div className="time-icon">💬</div>
                    <div>
                      <strong>İletişim kayıtları</strong>
                      <span>2 yıl süreyle</span>
                    </div>
                  </div>
                  <div className="time-item">
                    <div className="time-icon">📋</div>
                    <div>
                      <strong>Günlük kayıtları</strong>
                      <span>30 gün süreyle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🍪</div>
                <h2>6. Çerezler (Cookies)</h2>
              </div>
              <div className="card-content">
                <p>
                  Wedloria, kullanıcı deneyimini geliştirmek için çerezler kullanır. 
                  Çerezler hakkında ayrıntılı bilgi için tarayıcınızın ayarlarını kontrol edebilirsiniz.
                </p>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">👶</div>
                <h2>7. Çocukların Gizliliği</h2>
              </div>
              <div className="card-content">
                <p>
                  Wedloria, 13 yaşından küçük çocuklardan bilerek kişisel bilgi toplamaz. 
                  13 yaşından küçük bir çocuğun bilgilerini topladığımızı fark edersek, 
                  bu bilgileri derhal sileriz.
                </p>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">⚖️</div>
                <h2>8. Haklarınız</h2>
              </div>
              <div className="card-content">
                <p>Kişisel bilgileriniz konusunda aşağıdaki haklara sahipsiniz:</p>
                <ul className="modern-list">
                  <li>Bilgilerinize erişim hakkı</li>
                  <li>Bilgilerinizi düzeltme hakkı</li>
                  <li>Bilgilerinizi silme hakkı</li>
                  <li>Veri işlemeye itiraz etme hakkı</li>
                  <li>Veri taşınabilirliği hakkı</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🔄</div>
                <h2>9. Politika Değişiklikleri</h2>
              </div>
              <div className="card-content">
                <p>
                  Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. 
                  Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer. 
                  Önemli değişiklikler için e-posta ile bilgilendirme yapabiliriz.
                </p>
              </div>
            </div>

            <div className="privacy-card contact-card">
              <div className="card-header">
                <div className="card-icon">📞</div>
                <h2>10. İletişim</h2>
              </div>
              <div className="card-content">
                <p>Gizlilik Politikası ile ilgili sorularınız için bize ulaşabilirsiniz:</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div>
                      <strong>E-posta</strong>
                      <span>wedloria@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 