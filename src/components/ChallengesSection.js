import React from 'react';

function ChallengesSection() {
  const challenges = [
    {
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=400&h=200&fit=crop',
      date: 'March 15, 2024',
      title: 'Spring Marathon 2024',
      description: 'Join us for the annual spring marathon through scenic city routes.',
      distance: '42.2 KM',
      participants: '2000+ Runners'
    },
    {
      image: 'https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=400&h=200&fit=crop',
      date: 'April 22, 2024',
      title: 'Trail Running Challenge',
      description: 'Experience the thrill of off-road running in beautiful mountain trails.',
      distance: '25 KM',
      participants: '500+ Runners'
    },
    {
      image: 'https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?w=400&h=200&fit=crop',
      date: 'May 10, 2024',
      title: 'Charity Fun Run',
      description: 'Run for a cause and make a difference in our community.',
      distance: '10 KM',
      participants: '1500+ Runners'
    }
  ];

  const sponsors = [
    { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
    { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
    { name: 'Puma', logo: 'https://upload.wikimedia.org/wikipedia/en/4/49/Puma_logo.svg' }
  ];

  return (
    <section className="challenges-section" id="events">
      <div className="container">
        <div className="section-title">
          <h2>UPCOMING EVENTS & CHALLENGES</h2>
          <div className="underline"></div>
        </div>
        
        <div className="challenges-grid">
          {challenges.map((challenge, index) => (
            <div key={index} className="challenge-card">
              <img src={challenge.image} alt={challenge.title} className="challenge-image" />
              <div className="challenge-content">
                <span className="challenge-date">{challenge.date}</span>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
                <div className="challenge-meta">
                  <span><i className="fas fa-route"></i> {challenge.distance}</span>
                  <span><i className="fas fa-users"></i> {challenge.participants}</span>
                </div>
                <a href="#register" className="btn btn-primary">
                  Register Now <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="sponsors">
          <h3>Our Proud Sponsors</h3>
          <div className="sponsor-logos">
            {sponsors.map((sponsor, index) => (
              <img key={index} src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengesSection;
