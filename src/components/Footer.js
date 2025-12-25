import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail('');
  };

  const footerLinks = {
    quickLinks: [
      { name: 'About Us', href: '#about' },
      { name: 'Features', href: '#features' },
      { name: 'Events', href: '#events' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Training Plans', href: '#training' },
      { name: 'Running Routes', href: '#routes' },
      { name: 'Nutrition Guide', href: '#nutrition' },
      { name: 'FAQs', href: '#faq' },
      { name: 'Support', href: '#support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Refund Policy', href: '#refund' }
    ]
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>RUNER</h3>
            <p>
              Join the ultimate running community. Transform your passion into 
              performance with expert coaching, exclusive events, and a supportive 
              community of fellow runners.
            </p>
            <div className="social-links">
              <a href="#facebook" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#instagram" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#youtube" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Newsletter</h4>
            <p style={{color: '#ccc', marginBottom: '20px'}}>
              Subscribe to get updates on events and tips.
            </p>
            <form className="newsletter" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 RUNER Running Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
