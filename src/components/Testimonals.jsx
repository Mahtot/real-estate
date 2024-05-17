import Testimonal from "./Testimonal"
import person1 from '../assets/imgs/person3.jpg';
import person2 from '../assets/imgs/person2.jpg';
import person3 from '../assets/imgs/person1.jpg';

function Testimonals() {
    const data =[
        {
            name:'Meron',
            comment:'I was so busy to find house for a rent since i was pregnant and busy with work but this platform saved my life. ',
            src: person3
        },
        {
            name:'Dawit',
            comment:'Easy to use and such a time saver platform ',
            src: person2
        },
        {
            name:'Getachew',
            comment:'Can’t imagine how it would have been without using this service',
            src: person1
        }
    ]
  return (
    <div className="testimonals-cont">
        <h2>Testimonials</h2>
        <h1>See What Others Say</h1>
        <div className="test-cards">
            {
                data.map((person, index)=>(
                    <Testimonal name={person.name} 
                                src={person.src}
                                comment={person.comment}
                                key={index}
                                />
                ))
            }
        </div>
    </div>
  )
}
export default Testimonals