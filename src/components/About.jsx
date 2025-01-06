
const About = () => {
  return (
    <div className="about-container">
      <div className="about-text-section">
        <h1>About</h1>
        <p className="about-text">
          We are a passionate team of innovators committed to creating
          groundbreaking solutions that make a real impact. With years of
          experience in our field, we prioritize delivering quality and
          excellence in everything we do. Our mission is to drive progress
          and inspire change in the world.
        </p>
        <p className="about-text">
          Our team thrives on collaboration, creativity, and a shared vision
          for the future. We are constantly evolving and adapting to meet the
          ever-changing needs of our customers.
        </p>
        <button className="about-read-more">Read More</button>
      </div>
      <div className="about-image-section">
      <img src="/src/images/about.jpg" alt="About" />

      </div>
    </div>
  );
};


export default About;


