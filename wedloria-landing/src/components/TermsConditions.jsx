import React from 'react';
import '../index.css';
import Navbar from './Navbar';

const TermsConditions = () => {
  return (
    <div>
      <Navbar />
      <div className="privacy-policy">
        <div className="privacy-hero">
          <h1>Şartlar ve Koşullar</h1>
          <p className="privacy-subtitle">Wedloria hizmetlerini kullanmak için geçerli kullanım koşulları</p>
          <p className="privacy-date">Son güncelleme: 20 Ocak 2025</p>
        </div>

        <div className="privacy-container">
          <div className="privacy-intro">
            <div className="intro-icon">📋</div>
            <p>
              Lütfen hizmetimizi kullanmadan önce bu kullanım koşullarını dikkatlice okuyun. 
              Hizmetimizi kullanarak bu koşulları kabul etmiş sayılırsınız.
            </p>
          </div>

          <div className="privacy-sections">
            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">💬</div>
                <h2>1. Tanımlar</h2>
              </div>
              <div className="card-content">
                <p>Bu Kullanım Koşulları için aşağıdaki tanımlar geçerlidir:</p>
                <ul className="modern-list">
                  <li><strong>Wedloria:</strong> Bu hizmet sözleşmesinde "Şirket", "Biz", "Bize" veya "Bizim" olarak anılacaktır</li>
                  <li><strong>Hizmet:</strong> Wedloria QR kod tabanlı fotoğraf paylaşım platformu</li>
                  <li><strong>Kullanıcı:</strong> Hizmete erişen veya hizmeti kullanan kişi</li>
                  <li><strong>İçerik:</strong> Fotoğraf, video, anı notları ve diğer paylaşılan materyaller</li>
                  <li><strong>QR Kod:</strong> Fotoğraf albümlerine erişim sağlayan özel kodlar</li>
                  <li><strong>Etkinlik:</strong> Düğün, nişan ve benzeri özel günler</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">✅</div>
                <h2>2. Kabul ve Yükümlülükler</h2>
              </div>
              <div className="card-content">
                <p>Wedloria hizmetlerini kullanarak aşağıdaki koşulları kabul edersiniz:</p>
                <ul className="modern-list">
                  <li>18 yaşından büyük olduğunuzu beyan edersiniz</li>
                  <li>Hizmet kullanım koşullarına uyacağınızı taahhüt edersiniz</li>
                  <li>Misafirlerinizin de bu koşullara uymasını sağlayacaksınız</li>
                  <li>Gizlilik politikamızı okuduğunuzu ve kabul ettiğinizi onaylarsınız</li>
                  <li>Yasal olarak bağlayıcı sözleşmeler yapma yetkisine sahip olduğunuzu garanti edersiniz</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🚫</div>
                <h2>3. Yasak Davranışlar</h2>
              </div>
              <div className="card-content">
                <p>Aşağıdaki davranışlarda bulunmanız yasaktır:</p>
                <ul className="modern-list">
                  <li>Uygun olmayan, saldırgan, yasadışı veya pornografik içerik yüklemek</li>
                  <li>Üçüncü tarafların telif hakkını ihlal eden materyaller paylaşmak</li>
                  <li>Hizmeti tasarlandığı amaç dışında kullanmak</li>
                  <li>Sisteme zarar verebilecek virüs veya zararlı kodlar yüklemek</li>
                  <li>Diğer kullanıcıları taciz etmek veya rahatsız etmek</li>
                  <li>Sahte hesap oluşturmak veya başkası adına hesap açmak</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">📱</div>
                <h2>4. Hizmet Kullanımı</h2>
              </div>
              <div className="card-content">
                <p>Wedloria hizmetlerinin kullanımı ile ilgili önemli bilgiler:</p>
                <ul className="modern-list">
                  <li>QR kodları yalnızca satın alınan paket süresince geçerlidir</li>
                  <li>Fotoğraf ve video yüklemeleri internet hızınızla doğru orantılıdır</li>
                  <li>Video yüklemeleri maksimum 150MB ile sınırlanmıştır</li>
                  <li>İnternet sinyal kayıplarında yaşanan aksaklıklardan sorumlu değiliz</li>
                  <li>Hizmet 7/24 kullanılabilir olmakla birlikte bakım çalışmaları olabilir</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">💾</div>
                <h2>5. İçerik Yedekleme ve Saklama</h2>
              </div>
              <div className="card-content">
                <p>İçeriklerinizin saklanması ve yedeklenmesi hakkında:</p>
                <ul className="modern-list">
                  <li>Tüm içerikler Google Firebase altyapısında güvenle saklanır</li>
                  <li>Paket süresince içeriklerinize erişiminiz sürekli olarak sağlanır</li>
                  <li>Düzenli yedekleme yapılmasına rağmen veri kaybı garanti edilmez</li>
                  <li>Önemli içeriklerinizi kendi cihazlarınıza da kaydetmenizi tavsiye ederiz</li>
                  <li>Paket süresi bitiminde içerikler 30 gün daha saklanır</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">💰</div>
                <h2>6. Ödeme ve Fiyatlandırma</h2>
              </div>
              <div className="card-content">
                <p>Ödeme koşulları ve fiyat politikası:</p>
                <ul className="modern-list">
                  <li>Tüm fiyatlar Türk Lirası (TL) olarak KDV dahil belirtilmiştir</li>
                  <li>Ödemeler güvenli SSL şifreleme ile korunur</li>
                  <li>Fiyatlarda değişiklik yapma hakkımızı saklı tutarız</li>
                  <li>Ödeme onayından sonra hizmet 24 saat içinde aktive edilir</li>
                  <li>İade koşulları mesafeli satış sözleşmesi kapsamında geçerlidir</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🔒</div>
                <h2>7. Gizlilik ve Güvenlik</h2>
              </div>
              <div className="card-content">
                <p>Verilerinizin güvenliği ve gizliliği ile ilgili taahhütlerimiz:</p>
                <ul className="modern-list">
                  <li>Kişisel verileriniz KVKK kapsamında işlenir</li>
                  <li>Fotoğraf ve videolarınız sadece sizin ve davet ettikleriniz tarafından görülebilir</li>
                  <li>Verilerinizi üçüncü taraflarla paylaşmayız</li>
                  <li>Güvenlik açıkları durumunda derhal bilgilendirilirsiniz</li>
                  <li>İstediğiniz zaman hesabınızı ve verilerinizi silebilirsiniz</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">⚖️</div>
                <h2>8. Sorumluluk Sınırlamaları</h2>
              </div>
              <div className="card-content">
                <p>Wedloria'nın sorumluluk kapsamı:</p>
                <ul className="modern-list">
                  <li>Yüklenen içeriklerden kullanıcılar sorumludur</li>
                  <li>Misafirler tarafından yazılan anı notlarından sorumlu değiliz</li>
                  <li>Teknik arızalar nedeniyle yaşanan geçici kesintilerden sorumlu değiliz</li>
                  <li>Üçüncü taraf hizmetlerdeki sorunlardan sorumlu değiliz</li>
                  <li>Kullanıcı hatalarından doğan zararlardan sorumlu değiliz</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="card-header">
                <div className="card-icon">🔄</div>
                <h2>9. Değişiklikler ve Güncellemeler</h2>
              </div>
              <div className="card-content">
                <p>Bu koşulların değiştirilmesi hakkında:</p>
                <ul className="modern-list">
                  <li>Kullanım koşullarını gerekli gördüğümüzde güncelleyebiliriz</li>
                  <li>Önemli değişiklikler e-posta ile bildirilir</li>
                  <li>Güncellemeler web sitesinde yayınlanır</li>
                  <li>Değişiklikler yayınlandıktan sonra hizmeti kullanmaya devam ederseniz kabul etmiş sayılırsınız</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card contact-card">
              <div className="card-header">
                <div className="card-icon">📞</div>
                <h2>10. İletişim ve Destek</h2>
              </div>
              <div className="card-content">
                <p>Kullanım koşulları ile ilgili sorularınız için:</p>
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
                  Bu şartlar ve koşullar Türkiye Cumhuriyeti kanunlarına tabidir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions; 