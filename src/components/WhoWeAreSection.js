import React from 'react';

function WhoWeAreSection() {
  const stats = [
    { icon: 'fas fa-users', number: '5000+', label: 'Active Members' },
    { icon: 'fas fa-trophy', number: '250+', label: 'Events Completed' },
    { icon: 'fas fa-medal', number: '1000+', label: 'Medals Awarded' },
    { icon: 'fas fa-globe', number: '50+', label: 'Countries' }
  ];

  return (
    <section className="who-we-are" id="about">
      <div className="container">
        <div className="section-title">
          <h2>WHO WE ARE</h2>
          <div className="underline"></div>
        </div>
        
        <div className="who-content">
          <div className="who-images">
            <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=250&fit=crop" alt="Running group" className="who-image" />
            <img src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=250&fit=crop" alt="Runner training" className="who-image" />
            <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&h=250&fit=crop" alt="Marathon event" className="who-image" />
            <img src="https://images.unsplash.com/photo-1486218119243-13883505764c?w=400&h=250&fit=crop" alt="Group celebration" className="who-image" />
          </div>
          
          <div className="who-text">
            <h3>Welcome to RUNER Running Club</h3>
            <p>
              Founded in 2015, RUNER Running Club has grown to become one of the most vibrant 
              and supportive running communities in the world. We believe that running is more 
              than just exercise—it's a lifestyle, a passion, and a journey of self-discovery.
            </p>
            <p>
              Our mission is to inspire, motivate, and support runners of all levels—from 
              beginners taking their first steps to seasoned marathoners chasing personal bests. 
              We organize regular training sessions, social runs, and competitive events that 
              bring our community together.
            </p>
            <p>
              Join us and become part of a family that celebrates every milestone, supports 
              every challenge, and shares the pure joy of running.
            </p>
            <a href="#join" className="btn btn-primary">
              Become a Member <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <i className={stat.icon}></i>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
