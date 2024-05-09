import { Link } from "react-router-dom"
import lock from '../assets/imgs/key.jpg'
import { FaCheckCircle } from "react-icons/fa";
import Card from "./Card";
import pic1 from '../assets/imgs/house-1.jpg';
import pic2 from '../assets/imgs/house-2.jpg';
import pic3 from '../assets/imgs/house-3.jpg';

export default function Desc() {
  const data=['Save Your Time',
              'Energize Your Search',
              'Personalized Recommendations',
              'Expert Guidance'

  ]

  const cardDatas = [{
                        type:'For Rent',
                        location:'Located at adihawsi \nprice 30,000 birr',
                        src: pic1},
                        {
                        type:'For sale',
                        location:'Located at adihawsi\nprice 30,000 birr',
                        src:pic2
                         },
                         {
                            type:'For Rent',
                            location:'Located at adihawsi\n price 30,000 birr',
                            src: pic3
                         }
]
  return (
    <div className="sec-main">
        <div className="first">
            <div>
                <h1>Unlock Your Dream Home Today</h1>
                <p><Link to='/' id='p-link'>Sign up</Link> to get a personalized recommendations</p>
            </div>
            <div id='img-cont'>
                <img src={lock}
                     lt="picture of key to a house"/>
            </div>
        </div>

        <div className="second">
            <h2>Experience the Difference with  <span id='p-link'> Our Services</span></h2>
            <div className="list-cont">
                {
                 data.map((item, index)=>(
                    <div id='item' key={index}>
                       <FaCheckCircle id='icon'/> {item}
                    </div>
                 ))
                }
            </div>
        </div>

        <div className="third">
            <h2>Featured Homes: Your Next Move Starts Here</h2>
           <div className="featured-homes">
             {
                cardDatas.map((item, index)=>(
                    <Card type={item.type}
                          key={index}
                          location={item.location}
                          src={item.src}
                          />
                ))
            }
            </div>
        </div>
    </div>
  )
}