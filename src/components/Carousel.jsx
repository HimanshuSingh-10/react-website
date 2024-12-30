import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Carousel() {
  
  return (
    
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="src/images/image1.jpg" className="d-block w-100" alt="First Slide" />
          <div className="carousel-caption d-none d-md-block">
        <h5>HTML & CSS</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adipisci ipsum.</p>
      </div>
        </div>
        <div className="carousel-item">
          <img src="src/images/image2.jpg" className="d-block w-100" alt="Second Slide" />
          <div className="carousel-caption d-none d-md-block">
        <h5>JAVA DEVELOPMENT</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adipisci ipsum.</p>
      </div>
        </div>
        <div className="carousel-item">
          <img src="src/images/image3.png" className="d-block w-100" alt="Third Slide" />
          <div className="carousel-caption d-none d-md-block">
        <h5>MACHINE LEARNING</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adipisci ipsum.</p>
      </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
