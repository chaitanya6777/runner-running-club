import React from 'react';

function TestimonialsSection() {
  const testimonials = [
    {
      text: "Joining RUNER has been life-changing! The community support and professional coaching helped me complete my first marathon. I couldn't have done it without this amazing club.",
      author: 'Sarah Johnson',
      role: 'Marathon Runner',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5
    },
    {
      text: "The training programs are exceptional and the coaches really care about your progress. I've improved my running time by 20% in just 6 months. Highly recommend RUNER to everyone!",
      author: 'Michael Chen',
      role: 'Competitive Runner',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5
    },
    {
      text: "Best decision I ever made! The group runs are so motivating and the events are well-organized. I've made lifelong friends here and discovered a true passion for running.",
      author: 'Emma Williams',
      role: 'Recreational Runner',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-title">
          <h2>WHAT OUR MEMBERS SAY</h2>
          <div className="underline"></div>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <i className="fas fa-quote-right quote-icon"></i>
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <span className="role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
