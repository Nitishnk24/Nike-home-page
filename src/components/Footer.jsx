function Footer() {
return ( <footer className="footer"> <div className="container footer-grid">

    <div className="footer-brand">
      <h2>NIKE</h2>
      <p>
        Bringing inspiration and innovation to every athlete in the world.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>

      <a href="#menu">Products</a>
      <a href="#location">Stores</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-info-card">
        <h4>📍 Nike Headquarters</h4>
        <p>
          One Bowerman Drive<br />
          Beaverton, Oregon 97005<br />
          United States
        </p>
      </div>

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Nike Brand Landing Page |
    Designed & Developed by Nitish N Kotumuchagi
  </div>
</footer>

);
}

export default Footer;
