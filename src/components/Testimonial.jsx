import 'font-awesome/css/font-awesome.min.css';

import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TestimonialCard({ image, text, rating }) {
  return (
    <div className="col-md-4">
      <div className="new-card">
        <img src={image} alt="Card" className="card-img-top" />
        <div className="new-card-body">
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`fa fa-star ${i < rating ? 'checked' : ''}`}></span>
            ))}
          </div>
          <p className="new-card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Testimonial() {
  const testimonials = [
    { id: 1, image: 'src/images/review1.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.', rating: 5 },
    { id: 2, image: 'src/images/review2.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.', rating: 4 },
    { id: 3, image: 'src/images/review3.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.', rating: 3 },
    { id: 4, image: 'src/images/review4.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.', rating: 4 },
    { id: 5, image: 'src/images/review5.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.', rating: 5 },
    { id: 6, image: 'src/images/review6.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.', rating: 4 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 3) % testimonials.length); // Show 3 cards at a time
    }, 3000); 

    return () => clearInterval(interval); 
  }, [isHovered]);

  const handleCardHover = () => {
    setIsHovered(true);
  };

  const handleCardLeave = () => {
    setIsHovered(false);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length);
  };

  return (
    <div
      className="testimonial-container"
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
    >
      

      <div className="row">
        {testimonials.slice(activeIndex, activeIndex + 3).map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
      {/* First arrow at the first card */}
      <button className="arrow-btn prev" onClick={goToPrev} disabled={activeIndex === 0}>
        <i className="fa fa-arrow-left"></i>
      </button>

      {/* Last arrow at the last card */}
      <button className="arrow-btn next" onClick={goToNext} disabled={activeIndex + 3 >= testimonials.length}>
        <i className="fa fa-arrow-right"></i>
      </button>

      
    </div>
    

        

  );
}

export default Testimonial;
