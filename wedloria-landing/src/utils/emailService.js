import emailjs from '@emailjs/browser';

// EmailJS konfigürasyonu
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ayxpiw8', // EmailJS service ID
  TEMPLATE_ID: 'template_qvb0j2o', // EmailJS template ID
  PUBLIC_KEY: 'VR-ymwneEsED8qGE3' // EmailJS public key
};

// EmailJS'i başlat
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

/**
 * İletişim formunu EmailJS ile gönder
 * @param {Object} formData - Form verileri
 * @param {string} formData.name - Kullanıcı adı
 * @param {string} formData.surname - Kullanıcı soyadı
 * @param {string} formData.email - Kullanıcı email
 * @param {string} formData.message - Kullanıcı mesajı
 * @returns {Promise} Email gönderim sonucu
 */
export const sendContactEmail = async (formData) => {
  try {
    // Email template parametreleri
    const templateParams = {
      from_name: `${formData.name} ${formData.surname}`,
      from_email: formData.email,
      to_name: 'Wedloria Team',
      message: formData.message,
      reply_to: formData.email,
    };

    // EmailJS ile email gönder
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('Email başarıyla gönderildi:', result);
    return { success: true, data: result };
    
  } catch (error) {
    console.error('Email gönderim hatası:', error);
    return { 
      success: false, 
      error: error.text || 'Email gönderilirken bir hata oluştu' 
    };
  }
};

// EmailJS konfigürasyon bilgilerini export et (setup için)
export { EMAILJS_CONFIG }; 
