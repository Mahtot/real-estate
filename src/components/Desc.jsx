import { Link } from "react-router-dom"
import lock from '../assets/imgs/key.jpg'
import { FaCheckCircle } from "react-icons/fa";
import Card from "./Card";
import pic1 from '../assets/imgs/house-1.jpg';
import pic2 from '../assets/imgs/house-2.jpg';
import pic3 from '../assets/imgs/house-3.jpg';
import Login from "./Login";
import { ModalContext } from "../App";
import { useContext } from "react";

export default function Desc() {
  const data = ['Save Your Time', 'Energize Your Search', 'Personalized Recommendations', 'Expert Guidance'];

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
    }
  ];
  const { setIsLogin, showModal, setShowModal ,toggleModal } = useContext(ModalContext);


  return (
    <div className="sec-main">
      <div className="first">
        <div>
          <h1>Unlock Your Dream Home Today</h1>
          <p><Link id='p-link' onClick={toggleModal}>Sign in</Link> to get a personalized recommendations</p>
        </div>
        <div id='img-cont'>
          <img src={lock} alt="picture of key to a house" />
        </div>
      </div>

      <div className="second">
        <h2>Experience the Difference with <span id='p-link'> Our Services</span></h2>
        <div className="list-cont">
          {data.map((item, index) => (
            <div id='item' key={index}>
              <FaCheckCircle id='icon' /> {item}
            </div>
          ))}
        </div>
      </div>

      <div className="third">
        <h2>Featured Homes: Your Next Move Starts Here</h2>
        <div className="featured-homes">
          {cardDatas.map((item, index) => (
                <Card
                type={item.type}
                key={index}
                location={item.location}
                src={item.src}
                property={item.property}

                />          ))}
        </div>
      </div>
    </div>
  );
}
