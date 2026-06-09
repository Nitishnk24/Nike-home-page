function Contact() {
return ( <section id="contact" className="contact container"> <div className="contact-header"> <span className="section-tag">CONTACT US</span> <h2>We're Here To Help</h2> <p className="contact-subtitle">
Have questions about Nike products, orders, or store locations?
Our support team is ready to assist you. </p> </div>

  <div className="contact-wrapper">
    <div className="contact-info">
      <h3>Customer Support</h3>

      <div className="info-card">
        <h4>📞 Phone</h4>
        <p>1-800-344-6453</p>
      </div>

      <div className="info-card">
        <h4>✉️ Email</h4>
        <p>support@nike.com</p>
      </div>

      <div className="info-card">
        <h4>🕒 Working Hours</h4>
        <p>Mon - Sat | 9:00 AM - 8:00 PM</p>
      </div>

      <div className="info-card">
        <h4>📍 Nike Headquarters</h4>
        <p>
          One Bowerman Drive<br />
          Beaverton, Oregon 97005<br />
          United States
        </p>
      </div>
    </div>

    <form className="contact-form">
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="text" placeholder="Subject" />

      <textarea
        rows="7"
        placeholder="Write your message..."
      ></textarea>

      <button type="submit">
        Send Message
      </button>
    </form>
  </div>
</section>

);
}

export default Contact;
