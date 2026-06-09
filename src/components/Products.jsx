function Products() {
  return (
    <section id="menu" className="products container">
      <span className="section-tag"><h2>Featured Collection</h2></span>
      <div className="product-grid">
        <div className="card">
          <img src="/images/Nike Air Max.png" alt="Nike Air Max" />
          <h3>Nike Air Max</h3>
          <p>₹7,999</p>
        </div>

        <div className="card">
          <img src="/images/Nike Revolution.png" alt="Nike Revolution" />
          <h3>Nike Revolution</h3>
          <p>₹5,499</p>
        </div>

        <div className="card">
          <img src="/images/Nike Zoom.png" alt="Nike Zoom" />
          <h3>Nike Zoom</h3>
          <p>₹8,999</p>
        </div>

        <div className="card">
          <img src="/images/Jordan Flight Court.png" alt="Jordan Flight Court" />
          <h3> Jordan Flight Court </h3>
          <p>₹9,499</p>
        </div>
        
      </div>
    </section>
  );
}

export default Products;