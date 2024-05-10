// Property.js
import '../assets/css/services.css'
import Testimonal from '../components/Testimonal'
import Search from '../components/Search'
import Card from '../components/Card'
import pic1 from '../assets/imgs/house-1.jpg';
import pic2 from '../assets/imgs/house-2.jpg';
import pic3 from '../assets/imgs/house-3.jpg';
import pic4 from '../assets/imgs/house-4.jpg';
import pic5 from '../assets/imgs/house-5.jpg';
import pic6 from '../assets/imgs/house-6.jpg';
import pic7 from '../assets/imgs/house-7.jpg';
import pic8 from '../assets/imgs/house-8.jpg';
import pic9 from '../assets/imgs/house-9.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

function Property() {
  const cardDatas = [
    {
      type: 'For Rent',
      location: 'Located at adihawsi \nprice 30,000 birr',
      src: pic1
    },
    {
      type: 'For sale',
      location: 'Located at adihawsi\nprice 30,000 birr',
      src: pic2
    },
    {
      type: 'For Rent',
      location: 'Located at adihawsi\n price 30,000 birr',
      src: pic3
    },
    {
      type: 'For Rent',
      location: 'Located at adihawsi \nprice 30,000 birr',
      src: pic4
    },
    {
      type: 'For sale',
      location: 'Located at adihawsi\nprice 30,000 birr',
      src: pic5
    },
    {
      type: 'For Rent',
      location: 'Located at adihawsi\n price 30,000 birr',
      src: pic6
    },
    {
      type: 'For Rent',
      location: 'Located at adihawsi \nprice 30,000 birr',
      src: pic7
    },
    {
      type: 'For sale',
      location: 'Located at adihawsi\nprice 30,000 birr',
      src: pic8
    },
    {
      type: 'For Rent',
      location: 'Located at adihawsi\n price 30,000 birr',
      src: pic9
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = cardDatas.length - 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 3));
  };

  return (
    <div className='property-container'>
      <div>
        <Search />
      </div>
      <div className="featured-homes">
        {cardDatas.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <Card
            type={item.type}
            key={index}
            location={item.location}
            src={item.src}
          />
        ))}
        {cardDatas.slice(currentIndex + 3, currentIndex + 6).map((item, index) => (
          <Card
            type={item.type}
            key={index}
            location={item.location}
            src={item.src}
          />
        ))}
        {cardDatas.slice(currentIndex + 6, currentIndex + 9).map((item, index) => (
          <Card
            type={item.type}
            key={index}
            location={item.location}
            src={item.src}
          />
        ))}
      </div>
      <div className="nav-buttons">
        <button className="prev" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Property;
