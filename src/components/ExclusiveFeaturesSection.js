import React from 'react';

function ExclusiveFeaturesSection() {
  const galleryImages = [
    'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=200&fit=crop',
    'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=400&h=200&fit=crop',
    'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=400&h=200&fit=crop',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=200&fit=crop'
  ];

  const exclusiveFeatures = [
    'Access to premium running tracks and facilities',
    'Exclusive merchandise and gear discounts',
    'Priority registration for major marathons',
    'Monthly workshops with professional athletes',
    'Nutrition and diet consultation services',
    'Injury prevention and recovery programs'
  ];

  return (
    <section className="exclusive-features">
      <div className="container">
        <div className="exclusive-content">
          <div className="exclusive-text">
            <h2>EXCLUSIVE MEMBER BENEFITS</h2>
            <p>
              As a RUNER club member, you gain access to a world of exclusive benefits 
              designed to enhance your running experience and help you reach new heights.
            </p>
            <ul className="exclusive-list">
              {exclusiveFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href="#membership" className="btn btn-primary">
              View Membership Plans <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="exclusive-gallery">
            {galleryImages.map((image, index) => (
              <img key={index} src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExclusiveFeaturesSection;
