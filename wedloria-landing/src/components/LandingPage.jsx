import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";
import qrCard1 from "../assets/image1.jpeg";
import qrCard2 from "../assets/image2.jpeg";
import qrCard3 from "../assets/image06.png";
import qrCard4 from "../assets/image1907.png";
import { sendContactEmail } from "../utils/emailService";
import Navbar from "./Navbar";

const features = [
  {
    title: "Bulut Tabanlı Depolama",
    desc: "Tüm anılarınız ve fotoğraflarınız, Google Firebase altyapısı ile güvenli bir şekilde bulutta saklanır.",
    icon: "☁️",
  },
  {
    title: "Çoklu Cihaz Desteği",
    desc: "Bilgisayarınızdan veya telefonunuzdan giriş yapın; tüm fotoğraflarınıza anında ulaşın.",
    icon: "📱",
  },
  {
    title: "Kolay Fotoğraf Yükleme",
    desc: "Sürükle-bırak veya dosya seçme ile fotoğraflarınızı hızlıca yükleyin.",
    icon: "📤",
  },
  {
    title: "Anı Ekleme ve Düzenleme",
    desc: "Her fotoğrafın yanına kısa bir anı veya hikaye ekleyin, düzenleyin veya silin.",
    icon: "📝",
  },
  {
    title: "Güvenli Paylaşım",
    desc: "Davet edilen herkes fotoğrafları görüntüleyebilir, anılarınızı paylaşabilirsiniz.",
    icon: "🔒",
  },
  {
    title: "Kullanıcı Dostu Arayüz",
    desc: "Modern ve sade tasarımı sayesinde uygulamayı kullanmak çok kolay.",
    icon: "✨",
  },
];

const faqData = [
  {
    question: "Wedloria nasıl çalışır?",
    answer: "Wedloria, düğün fotoğraflarınızı bulutta saklayan ve misafirlerinizle paylaşmanızı sağlayan modern bir platformdur. Hesap oluşturduktan sonra fotoğraflarınızı yükleyebilir, anılarınızı ekleyebilir ve sevdiklerinizle paylaşabilirsiniz."
  },
  {
    question: "Fotoğraflarım güvenli mi?",
    answer: "Evet, tüm fotoğraflarınız Google Firebase altyapısı ile güvenli bir şekilde şifrelenerek saklanır. Sadece siz ve davet ettiğiniz kişiler fotoğraflarınızı görebilir."
  },
  {
    question: "Kaç fotoğraf yükleyebilirim?",
    answer: "Temel pakette 100 fotoğrafa kadar yükleme hakkınız bulunmaktadır. Premium ve Profesyonel paketlerde sınırsız fotoğraf yükleme imkanı sunuyoruz."
  },
  {
    question: "Mobil uygulama var mı?",
    answer: "Şu anda web platformu üzerinden hizmet vermekteyiz. Ancak mobil uygulamamız yakında kullanıma sunulacaktır."
  },
  {
    question: "Fotoğrafları nasıl paylaşırım?",
    answer: "Fotoğraflarınızı yükledikten sonra, özel bir link oluşturarak sevdiklerinizle paylaşabilirsiniz. Bu linki WhatsApp, email veya sosyal medya üzerinden gönderebilirsiniz."
  },
  {
    question: "Ödeme nasıl yapılır?",
    answer: "Kredi kartı, banka kartı veya havale yoluyla ödeme yapabilirsiniz. Tüm ödemeler güvenli SSL şifrelemesi ile korunmaktadır."
  }
];

export default function LandingPage() {
  // Form state
  const [form, setForm] = useState({ name: "", surname: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // FAQ state
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Hata mesajını temizle
    if (error) setError(null);
    if (success) setSuccess(null);
  };

  const validateForm = () => {
    const { name, surname, email, message } = form;
    
    if (!name.trim()) return "İsim alanı gereklidir.";
    if (!surname.trim()) return "Soyisim alanı gereklidir.";
    if (!email.trim()) return "Email alanı gereklidir.";
    if (!message.trim()) return "Mesaj alanı gereklidir.";
    
    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Geçerli bir email adresi giriniz.";
    
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSuccess(null);

    // Form validasyonu
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSending(false);
      return;
    }

    try {
      // EmailJS ile email gönder
      const result = await sendContactEmail(form);
      
      if (result.success) {
        setSuccess("Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.");
        setForm({ name: "", surname: "", email: "", message: "" });
      } else {
        setError(result.error || "Email gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (err) {
      setError("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
      console.error("Form gönderim hatası:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="landing-root">
        {/* Hero Section */}
        <header className="hero" id="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Wedloria</h1>
              <h2>Anılarınızı Her Yerden Paylaşın</h2>
              <p className="hero-desc">
                Wedloria, düğün gününüzün en özel anılarını güvenle saklamanızı ve sevdiklerinizle kolayca paylaşmanızı sağlayan modern bir fotoğraf uygulamasıdır.
              </p>
              <a href="#iletisim" className="cta-btn">Hemen Deneyin</a>
            </div>
            <div className="hero-image">
              <img src={qrCard2} alt="QR Kod Kartı Örneği" className="hero-qr-card" />
              <p className="hero-qr-description">
                QR kodu okutarak anılarınızı kolayca paylaşın
              </p>
            </div>
          </div>
          
          {/* Additional QR Examples */}
          <div className="qr-examples">
            <div className="qr-card-container">
              <img src={qrCard1} alt="QR Kod Kartı Örneği 1" className="qr-card" />
              <img src={qrCard4} alt="QR Kod Kartı Örneği 3" className="qr-card" />
              <img src={qrCard3} alt="QR Kod Kartı Örneği 2" className="qr-card" />

            </div>
            <p className="qr-description">
              Farklı tasarım seçenekleri ile kişiselleştirilmiş QR kod kartları
            </p>
          </div>
        </header>

        {/* Features Section */}
        <section className="features">
          <h3>Özellikler</h3>
          <div className="features-list">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <span className="feature-icon">{f.icon}</span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h3>Nasıl Çalışır?</h3>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>QR Kod Kartlarınızı Hazırlayın</h4>
                <p>Size özel QR kod kartları oluşturuyoruz. Misafirleriniz masalara koyabilir.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Misafirler QR Kodu Okutur</h4>
                <p>Telefonlarıyla QR kodu okutarak anılarınızı paylaşma sayfasına ulaşırlar.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Anıları Paylaşın</h4>
                <p>Çekilen fotoğraflar otomatik olarak albümünüzde toplanır.</p>
              </div>
            </div>
          </div>
          <div className="example-cards">
            <img src={qrCard1} alt="Örnek QR Kartı 1" className="example-card" />
            <img src={qrCard3} alt="Örnek QR Kartı 2" className="example-card" />
          </div>
        </section>

        {/* Why Wedloria Section */}
        <section className="why-wedloria" id="hakkimizda">
          <h3>Neden Wedloria?</h3>
          <ul>
            <li>Geleneksel albümlere veda edin: Anılarınız kaybolmaz, yıpranmaz ve her zaman elinizin altında olur.</li>
            <li>Her anı, her yerde: Düğün gününüzün en güzel karelerine istediğiniz zaman, istediğiniz yerden ulaşın.</li>
            <li>Sevdiklerinizle paylaşmanın en kolay yolu: Tek tıkla fotoğraf ve anı paylaşımı.</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" id="sss">
          <h3>Sıkça Sorulan Sorular</h3>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <h4>{faq.question}</h4>
                  <span className={`faq-toggle ${openFAQ === index ? 'active' : ''}`}>+</span>
                </div>
                {openFAQ === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <footer className="footer-cta">
          <h2>Anılarınızı ölümsüzleştirin!</h2>
          <p className="footer-cta-desc">Siz de fotoğraf albümü oluşturmak istiyorsanız hemen alttaki formu doldurun.</p>
          <a href="#iletisim" className="cta-btn">Hemen Başlayın</a>
        </footer>

        {/* Contact Form Section */}
        <section className="contact-form-section" id="iletisim">
          <h3>Bizimle Çalışmak veya Anılarınızı Paylaşmak İster misiniz?</h3>
          <p className="contact-form-desc">Aşağıdaki formu doldurun, en kısa sürede sizinle iletişime geçelim.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">İsim</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Soyisim</label>
                <input type="text" id="surname" name="surname" value={form.surname} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Açıklama</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="cta-btn" disabled={sending}>{sending ? "Gönderiliyor..." : "Gönder"}</button>
            {success && <div className="form-success">{success}</div>}
            {error && <div className="form-error">{error}</div>}
          </form>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-sections">
            <div className="footer-brand-section">
              <div className="footer-logo">
                <img src={logo} alt="Wedloria Logo" className="footer-logo-img" />
                <span className="footer-logo-text">Wedloria</span>
              </div>
              <p className="footer-description">
                Düğün gününüzün en özel anılarını güvenle saklayın ve sevdiklerinizle kolayca paylaşın. 
                Modern QR kod teknolojisi ile anılarınız her zaman elinizin altında.
              </p>
            </div>
            
            <div className="footer-social-section">
              <h4>Bizi Takip Edin</h4>
              <div className="social-links">
                <a href="https://instagram.com/wedloria" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@wedloria</span>
                </a>
                <a href="https://tiktok.com/@wedloria" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span>@wedloria</span>
                </a>
              </div>
            </div>

            <div className="footer-legal-section">
              <h4>Hukuki Belgeler</h4>
              <div className="legal-links">
                <Link to="/gizlilik-politikasi" className="legal-link">Gizlilik Politikası</Link>
                <Link to="/mesafeli-satis-sozlesmesi" className="legal-link">Mesafeli Satış Sözleşmesi</Link>
                <Link to="/sartlar-ve-kosullar" className="legal-link">Şartlar ve Koşullar</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Wedloria. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
} 
