import '../assets/css/card.css';
import pic1 from '../assets/imgs/house-1.jpg';
import { useState, useEffect } from 'react';
import Modalfunc from './Modal';

function Card({ type, location, src, property }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {property !== 'N/A' ? (
        <div className="home-card">
          <div id='type'>{type}</div>
          <div id='card-img'>
            {src && <img src={src} alt="a picture of a house" onClick={handleOpenModal} />}
          </div>
          <div id='card-desc'>
            <p dangerouslySetInnerHTML={{ __html: location }}></p><br />
            <p>Property-type: {property}</p>
          </div>
          <div id='card-btm'>
            <div>
              <p onClick={handleOpenModal}>Details</p>
            </div>
          </div>
          <Modalfunc
            isOpen={isOpen}
            onClose={handleCloseModal}
            imageSrc={src}
            type={type}
            location={location}
          />
        </div>
      ) : (
        <div className="no-available-message">
          <p>😢 No available house found. Please try a different search.</p>
        </div>
      )}
    </>
  );
}

export default Card;
