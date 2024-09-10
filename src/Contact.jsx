
const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="image-section">
        <h1 className="image-title">Get in Touch with MOVE FAST</h1>
        <p className="image-subtitle">We’re here to help you plan your perfect getaway!</p>
      </div>
      <form className="contact-form">
        <div className="input-wrapper">
          <i className="fas fa-user input-icon"></i>
          <input type="text" placeholder="Name" className="input-field" />
        </div>
        <div className="input-wrapper">
          <i className="fas fa-envelope input-iconn"></i>
          <input type="email" placeholder="Email" className="input-fieldd" />
        </div>
        <div className="input-wrapper">
          <i className="fas fa-tag input-icon"></i>
          <input type="text" placeholder="Subject" className="input-field" />
        </div>
        <div className="input-wrapper">
          <i className="fas fa-comment input-icon"></i>
          <textarea placeholder="Message" className="textarea-field" maxLength="500"></textarea>
          <small className="char-counter">500 characters max</small>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      <div className="contact-info">
        <div className="info-item"><i className="fas fa-phone"></i> +1 234 567 890</div>
        <div className="info-item"><i className="fas fa-envelope"></i> contact@movefast.com</div>
        <div className="info-item"><i className="fas fa-map-marker-alt"></i> Lagos, Nigeria</div>
      </div>
      <div className="map-section">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.760464472209!2d3.379205715393676!3d6.5243794952704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b36529c5f2d%3A0xc3a8c4574329e52b!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1693390733089!5m2!1sen!2sng"
          className="map-embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="social-media">
        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default ContactUs;
