import React, { useState } from "react";
import "../index.css";
import logo from "../assets/logo.png";

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

export default function LandingPage() {
  // Form state
  const [form, setForm] = useState({ name: "", surname: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSuccess(true);
      setForm({ name: "", surname: "", email: "", message: "" });
      setSending(false);
    }, 800);
  };

  return (
    <div className="landing-root">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-header-row">
          <img src={logo} alt="Wedloria Logo" className="wedloria-logo left" />
        </div>
        <h1>Wedloria</h1>
        <h2>Anılarınızı Her Yerden Paylaşın</h2>
        <p className="hero-desc">
          Wedloria, düğün gününüzün en özel anılarını güvenle saklamanızı ve sevdiklerinizle kolayca paylaşmanızı sağlayan modern bir fotoğraf uygulamasıdır.
        </p>
        <a href="#" className="cta-btn">Hemen Deneyin</a>
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

      {/* Why Wedloria Section */}
      <section className="why-wedloria">
        <h3>Neden Wedloria?</h3>
        <ul>
          <li>Geleneksel albümlere veda edin: Anılarınız kaybolmaz, yıpranmaz ve her zaman elinizin altında olur.</li>
          <li>Her anı, her yerde: Düğün gününüzün en güzel karelerine istediğiniz zaman, istediğiniz yerden ulaşın.</li>
          <li>Sevdiklerinizle paylaşmanın en kolay yolu: Tek tıkla fotoğraf ve anı paylaşımı.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <footer className="footer-cta">
        <h2>Anılarınızı ölümsüzleştirin!</h2>
        <a href="#" className="cta-btn">Hemen Başlayın</a>
      </footer>

      {/* Contact Form Section */}
      <section className="contact-form-section">
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
          {success === true && <div className="form-success">Form başarıyla gönderildi!</div>}
        </form>
      </section>
    </div>
  );
} 