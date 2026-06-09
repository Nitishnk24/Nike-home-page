const Herosection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-name">
            <img src="/images/amazon.png" alt="Amazon" onClick={() => window.open('https://amzn.in/d/6apccgG','_blank')} />
            <img src="/images/flipkart.png" alt="Flipkart" onClick={() => window.open('https://www.flipkart.com/nike-running-shoes-men/p/itm38fc28ebe534f','_blank')} />
          </div>
        </div>
      </div>
      <div className="hero-img"><img src="/images/hero-image.png" alt="Hero" /></div>
    </main>
  );
};
export default Herosection;
