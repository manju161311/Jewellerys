import React, { useState } from 'react';
import './App.css';
import { Search, Heart, User, ShoppingBag, MapPin, Diamond, Instagram, Mic, Camera } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Category Logic: Easier to manage as an array
  const categories = [
    { id: 1, name: "EARRINGS", img: "https://via.placeholder.com/300x300?text=Earrings" },
    { id: 2, name: "FINGER RINGS", img: "https://via.placeholder.com/300x300?text=Rings" },
    { id: 3, name: "PENDANTS", img: "https://via.placeholder.com/300x300?text=Pendants" },
    { id: 4, name: "MANGALSUTRA", img: "https://via.placeholder.com/300x300?text=Mangalsutra" },
  ];

  return (
    <div className="App">
      {/* 1. TOP UTILITY BAR */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo-section">
            <h1 className="brand-logo">compny name </h1>
          </div>

          <div className="search-section">
            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search for Jewellery..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="search-utils">
                <Camera size={18} />
                <Mic size={18} />
              </div>
            </div>
          </div>

          <div className="icon-group">
            <div className="icon-item"><Diamond size={20} /><p>Gold Rate</p></div>
            <div className="icon-item"><MapPin size={20} /><p>Stores</p></div>
            <div className="icon-item"><User size={20} /><p>Account</p></div>
            <div className="icon-item cart"><ShoppingBag size={20} /><span>0</span><p>Cart</p></div>
          </div>
        </div>
      </header>

      {/* 2. CATEGORY NAV */}
      <nav className="category-nav">
        {["All Jewellery", "Gold", "Diamond", "Earrings", "Rings", "Daily Wear", "Wedding"].map((nav) => (
          <div key={nav} className="nav-item">{nav}</div>
        ))}
      </nav>

      {/* 3. HERO SLIDER */}
      <section className="hero-slider">
        <div className="hero-content">
          <h2>Wedding Gifts</h2>
          <p>Curated for Love's Finest Moments</p>
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
      </section>

      {/* 4. SHOP BY CATEGORY */}
      <section className="category-section">
        <div className="section-title">
          <h2>Find Your Perfect Match</h2>
          <p>Shop by Categories</p>
        </div>
        <div className="category-grid">
          {categories.map(cat => (
            <div key={cat.id} className="category-card">
              <div className="cat-img-box">
                <img src={cat.img} alt={cat.name} />
              </div>
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TANISHQ EXPERIENCE (The 3-Box Section) */}
      <section className="experience-section">
        <div className="exp-card">
          <img src="https://via.placeholder.com/400x250?text=Store" alt="Visit" />
          <p>VISIT OUR STORE</p>
        </div>
        <div className="exp-card">
          <img src="https://via.placeholder.com/400x250?text=Booking" alt="Appointment" />
          <p>BOOK AN APPOINTMENT</p>
        </div>
        <div className="exp-card">
          <img src="https://via.placeholder.com/400x250?text=Expert" alt="Talk" />
          <p>TALK TO AN EXPERT</p>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li>Delivery Information</li>
              <li>International Shipping</li>
              <li>Track Your Order</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>1800-266-0123</p>
            <p>Chat with us via WhatsApp</p>
          </div>
          <div className="footer-column qr-section">
            <p>Download App</p>
            <div className="qr-placeholder">QR CODE</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Titan Company Limited. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;