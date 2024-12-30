
import PropTypes from 'prop-types'; 


function Card({ image, text }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={image} alt="Card" />
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired,  
};

export default Card;
