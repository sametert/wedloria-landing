import React from 'react';
import '../index.css';
import Navbar from './Navbar';

const TermsOfSale = () => {
  return (
    <div>
      <Navbar />
      <div className="privacy-policy">
        <div className="privacy-hero">
          <h1>Mesafeli Satış Sözleşmesi</h1>
          <p className="privacy-subtitle">Wedloria hizmet alımınız için geçerli şartlar ve koşullar</p>
          <p className="privacy-date">Son güncelleme: 20 Ocak 2025</p>
        </div>

        <div className="privacy-container">
          <div className="privacy-intro">
            <div className="intro-icon">📄</div>
            <p>
              Bu mesafeli satış sözleşmesi, Wedloria hizmetlerini satın alırken haklarınızı ve 
              yükümlülüklerinizi düzenler. Hizmet satın almadan önce lütfen dikkatle okuyunuz.
            </p>
          </div>

          <div className="privacy-sections">
            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🏢</div>
                <h2>1. Satıcı Bilgileri</h2>
              </div>
              <div className="card-content">
                <div className="info-grid">
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div>
                      <strong>E-posta</strong>
                      <p>wedloria@gmail.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">🌐</div>
                    <div>
                      <strong>Web Sitesi</strong>
                      <p>www.wedloria.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">💼</div>
                    <div>
                      <strong>Faaliyet Konusu</strong>
                      <p>Dijital fotoğraf paylaşım hizmetleri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">📦</div>
                <h2>2. Hizmet Bilgileri</h2>
              </div>
              <div className="card-content">
                <p>Wedloria aşağıdaki dijital hizmetleri sunmaktadır:</p>
                <ul className="modern-list">
                  <li>QR kod ile fotoğraf paylaşım sistemi</li>
                  <li>Bulut tabanlı fotoğraf depolama</li>
                  <li>Özel albüm oluşturma</li>
                  <li>Misafir fotoğraf yükleme imkanı</li>
                  <li>Sosyal medya entegrasyonu</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">💳</div>
                <h2>3. Ödeme ve Fiyatlandırma</h2>
              </div>
              <div className="card-content">
                <p>Ödeme koşulları ve fiyat bilgileri:</p>
                <ul className="modern-list">
                  <li>Tüm fiyatlar Türk Lirası (TL) olarak belirtilmiştir</li>
                  <li>KDV dahil fiyatlandırma uygulanır</li>
                  <li>Ödeme kredi kartı veya banka kartı ile yapılabilir</li>
                  <li>Güvenli ödeme altyapısı kullanılmaktadır</li>
                  <li>Ödeme onayından sonra hizmet aktif edilir</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">📅</div>
                <h2>4. Hizmet Süresi ve Teslimat</h2>
              </div>
              <div className="card-content">
                <div className="time-grid">
                  <div className="time-item">
                    <div className="time-icon">⚡</div>
                    <div>
                      <strong>Aktivasyon</strong>
                      <span>Ödeme onayından sonra 24 saat içinde</span>
                    </div>
                  </div>
                  <div className="time-item">
                    <div className="time-icon">📱</div>
                    <div>
                      <strong>QR Kod Teslimatı</strong>
                      <span>E-posta ile dijital olarak</span>
                    </div>
                  </div>
                  <div className="time-item">
                    <div className="time-icon">⏱️</div>
                    <div>
                      <strong>Hizmet Süresi</strong>
                      <span>Seçilen pakete göre değişir</span>
                    </div>
                  </div>
                  <div className="time-item">
                    <div className="time-icon">🔄</div>
                    <div>
                      <strong>Yenileme</strong>
                      <span>Süre sonunda otomatik bildiriler</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🔄</div>
                <h2>5. Cayma Hakkı</h2>
              </div>
              <div className="card-content">
                <p>
                  Mesafeli satış sözleşmesi kapsamında 14 gün içinde cayma hakkınız bulunmaktadır. 
                  Ancak dijital içerik ve hizmetlerin kullanılmaya başlanması durumunda 
                  cayma hakkı ortadan kalkar.
                </p>
                <ul className="modern-list">
                  <li>Cayma hakkı 14 gün içinde kullanılabilir</li>
                  <li>QR kod kullanımına başlandıysa cayma hakkı düşer</li>
                  <li>Fotoğraf yükleme işlemi başladıysa cayma hakkı düşer</li>
                  <li>Cayma bildirimi e-posta ile yapılabilir</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🛡️</div>
                <h2>6. Garanti ve Sorumluluk</h2>
              </div>
              <div className="card-content">
                <ul className="modern-list">
                  <li>%99.9 uptime garantisi sunuyoruz</li>
                  <li>Veri güvenliği için SSL şifrelemesi kullanıyoruz</li>
                  <li>24/7 teknik destek sağlıyoruz</li>
                  <li>Google Firebase altyapısı ile güvenilir hizmet</li>
                  <li>Kullanıcı hatalarından doğan zararlardan sorumlu değiliz</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">⚖️</div>
                <h2>7. Uygulanacak Hukuk</h2>
              </div>
              <div className="card-content">
                <p>
                  Bu sözleşme Türkiye Cumhuriyeti kanunlarına tabidir. 
                  Uyuşmazlıklarda Türkiye mahkemeleri yetkilidir.
                </p>
                <ul className="modern-list">
                  <li>Türk Ticaret Kanunu hükümleri geçerlidir</li>
                  <li>Tüketici Kanunu kapsamında haklar saklıdır</li>
                  <li>6563 sayılı Elektronik Ticaret Kanunu uygulanır</li>
                  <li>KVKK kapsamında veri işleme kuralları geçerlidir</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">❌</div>
                <h2>8. İptal ve Fesih</h2>
              </div>
              <div className="card-content">
                <p>Aşağıdaki durumlarda hizmet iptal edilebilir:</p>
                <ul className="modern-list">
                  <li>Ödeme yapılmaması durumunda</li>
                  <li>Hizmet koşullarına aykırı kullanım</li>
                  <li>Yasadışı içerik paylaşımı</li>
                  <li>Üçüncü şahıslara zarar verici davranışlar</li>
                  <li>Sistem güvenliğini tehdit edici eylemler</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card contact-card">
              <div className="card-header">
                <div className="card-icon">📞</div>
                <h2>9. İletişim ve Destek</h2>
              </div>
              <div className="card-content">
                <p>Mesafeli satış sözleşmesi ile ilgili sorularınız için:</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div>
                      <strong>E-posta</strong>
                      <span>wedloria@gmail.com</span>
                    </div>
                  </div>
                </div>
                <p style={{marginTop: '20px', fontSize: '0.95rem', opacity: '0.9'}}>
                  Bu sözleşme elektronik ortamda kabul edilmiş sayılır ve yasal hüküm ifade eder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfSale; 