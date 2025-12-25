import React from 'react';

function CTABannerSection() {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>READY TO TRANSFORM YOUR RUNNING JOURNEY?</h2>
        <p>
          Join RUNER Running Club today and become part of a community that will 
          inspire and support you every step of the way.
        </p>
        <a href="#signup" className="btn btn-secondary">
          Get Started Now <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default CTABannerSection;
