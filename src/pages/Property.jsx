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
import { useState, useContext, useMemo } from 'react';
import Footer from '../components/Footer';
import { FilterContext } from "../App";

function Property() {
  const { selectedValues, setSelectedValues, handleChange } = useContext(FilterContext);

  
  const cardDatas = [
    {
      type: 'For Rent',
      location: 'Sub-city: adihaki <br/> <br/>  price: 1000 birr',
      price:'1000-2000',
      src: pic1,
      locationHome:'adihaki',
      property:'Apartment'

    },
    {
      type: 'For sale',
      location: 'Sub-city: kedamayWeyane <br/> <br/> price: 2000 birr',
      src: pic2,
      price:'1000-2000',
      locationHome:'kedamayWeyane',
      property:'Apartment'

    },
    {
      type: 'For Rent',
      location: 'Sub-city: hadnet <br/> <br/> price: 5000 birr',
      src: pic3,
      price:'5000-20000',
      locationHome:'hadnet',
      property:'Villa'


    },
    {
      type: 'For Rent',
      location: 'Sub-city: quiha <br/> <br/> price: 10,000 birr',
      src: pic4,
      price:'5000-20000',
      locationHome:'quiha',
      property:'Villa'


    },
    {
      type: 'For sale',
      location: 'Sub-city: hawelti <br/> <br/> price: 1000 birr',
      src: pic5,
      price:'1000-2000',
      locationHome:'hawelti',
      property:'Villa'


    },
    {
      type: 'For Rent',
      location: 'Sub-city: quiha <br/> <br/> price: 20,000 birr',
      src: pic6,
      price:'5000-20000',
      locationHome:'quiha',
      property:'Office Space'


    },
    {
      type: 'For Rent',
      location: 'Sub-city: hawelti <br/> <br/> price: 2000 birr',
      src: pic7,
      price:'1000-2000',
      locationHome:'hawelti',
      property:'Office Space'

    },
    {
      type: 'For sale',
      location: 'Sub-city: at hadnet <br/> <br/> price: 31,000 birr',
      src: pic8,
      price:'above',
      locationHome:'hadnet',
      property:'Vacation Rental'

    },
    {
      type: 'For Rent',
      location: 'Sub-city: hawelti <br/> <br/> price: 40,000 birr',
      src: pic9,
      price:'above',
      locationHome:'hawelti',
      property:'Vacation Rental'


    }
  ];

  const filteredProperties = useMemo(() => {
    if (!selectedValues) return cardDatas;
    const filtered = cardDatas.filter((item) => {
      const priceMatches = selectedValues.price === 'all' || item.price.includes(selectedValues.price);
      const subCityMatches = selectedValues.subCity === 'all' || item.locationHome.includes(selectedValues.subCity);
      const propertyMatches = selectedValues.property === 'all' || item.property.includes(selectedValues.property);
  
      return priceMatches && subCityMatches && propertyMatches;
    });
  
    if (filtered.length === 0) {
      return [
        {
          type: 'No Matches Found',
          location: 'Please adjust your search criteria.',
          src: pic1, 
          property: 'N/A' 
        }
      ];
    }
  
    return filtered;
  }, [selectedValues, cardDatas]);
  

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
        {filteredProperties.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <Card
            type={item.type}
            key={index}
            location={item.location}
            src={item.src}
            property={item.property}
          />
        ))}
        {filteredProperties.slice(currentIndex + 3, currentIndex + 6).map((item, index) => (
          <Card
            type={item.type}
            key={index}
            location={item.location}
            src={item.src}
            property={item.property}

          />
        ))}
        {filteredProperties.slice(currentIndex + 6, currentIndex + 9).map((item, index) => (
          <Card
            type={item.type}
            key={index}
            location={item.location}
            src={item.src}
            property={item.property}

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

      <div>
          <Footer/>
      </div>
    </div>
  );
}

export default Property;
