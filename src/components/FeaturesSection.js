import React from 'react';

function FeaturesSection() {
  const features = [
    {
      icon: 'fas fa-route',
      title: 'Guided Routes',
      description: 'Access to hundreds of carefully curated running routes for all skill levels.'
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Expert Coaching',
      description: 'Professional coaches to help you achieve your running goals and improve performance.'
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'Training Programs',
      description: 'Personalized training plans designed to match your fitness level and objectives.'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'Health Tracking',
      description: 'Monitor your progress with advanced health and performance tracking tools.'
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Events & Races',
      description: 'Participate in exclusive club events, marathons, and competitive races.'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-title">
          <h2>FEATURES & BENEFITS</h2>
          <div className="underline"></div>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#learn-more" className="btn btn-secondary">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
          
          <div className="feature-card feature-card-cta">
            <h3>Ready to Start?</h3>
            <p>Join thousands of runners who have transformed their lives with RUNER.</p>
            <a href="#signup" className="btn btn-secondary">
              Sign Up Today <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
