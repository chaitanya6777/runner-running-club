import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              RUN YOUR <span>PASSION</span><br />
              JOIN THE CLUB
            </h1>
            <p>
              Experience the thrill of running with a community that shares your passion. 
              Join RUNER Running Club and transform your running journey today.
            </p>
            <a href="#join" className="btn btn-primary">
              Join Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="upcoming-event">
            <h3>Upcoming Event</h3>
            <div className="event-detail">
              <i className="fas fa-calendar"></i>
              <span>March 15, 2024</span>
            </div>
            <div className="event-detail">
              <i className="fas fa-map-marker-alt"></i>
              <span>Central Park, New York</span>
            </div>
            <div className="event-detail">
              <i className="fas fa-running"></i>
              <span>Spring Marathon 2024</span>
            </div>
            <div className="event-detail">
              <i className="fas fa-clock"></i>
              <span>7:00 AM - 12:00 PM</span>
            </div>
            <a href="#register" className="btn btn-primary" style={{marginTop: '20px'}}>
              Register Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
