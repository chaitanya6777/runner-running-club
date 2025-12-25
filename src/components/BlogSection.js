import React from 'react';

function BlogSection() {
  const featuredPost = {
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=350&fit=crop',
    date: 'February 28, 2024',
    author: 'John Smith',
    title: '10 Essential Tips for Marathon Training',
    description: 'Preparing for a marathon requires dedication, proper planning, and the right mindset. Here are our top 10 tips to help you succeed in your marathon training journey.',
    category: 'Training'
  };

  const sidePosts = [
    {
      image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&h=150&fit=crop',
      date: 'February 25, 2024',
      author: 'Lisa Anderson',
      title: 'The Benefits of Group Running',
      description: 'Discover why running with a group can boost your motivation and performance.',
      category: 'Community'
    },
    {
      image: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=400&h=150&fit=crop',
      date: 'February 20, 2024',
      author: 'David Brown',
      title: 'Nutrition Tips for Runners',
      description: 'Learn what to eat before, during, and after your runs for optimal performance.',
      category: 'Nutrition'
    }
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="section-title">
          <h2>LATEST FROM OUR BLOG</h2>
          <div className="underline"></div>
        </div>
        
        <div className="blog-grid">
          <div className="blog-card-featured">
            <img src={featuredPost.image} alt={featuredPost.title} className="blog-image" />
            <div className="blog-content">
              <div className="blog-meta">
                <span><i className="fas fa-calendar"></i> {featuredPost.date}</span>
                <span><i className="fas fa-user"></i> {featuredPost.author}</span>
                <span><i className="fas fa-tag"></i> {featuredPost.category}</span>
              </div>
              <h3>{featuredPost.title}</h3>
              <p>{featuredPost.description}</p>
              <a href="#read-more" className="btn btn-primary">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          
          <div className="blog-sidebar">
            {sidePosts.map((post, index) => (
              <div key={index} className="blog-card-small">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="fas fa-calendar"></i> {post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <a href="#read-more" className="btn btn-primary">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
