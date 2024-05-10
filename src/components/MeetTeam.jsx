import Team from "./Team"
import person1 from '../assets/imgs/person3.jpg';
import person2 from '../assets/imgs/person2.jpg';
import person3 from '../assets/imgs/person1.jpg';


function MeetTeam() {
        const data =[{
            name:"Olivia",
            src:person3,
            job:'Founder of HomeHive'
        },
        {
            name:"David",
            src:person2,
            job:'Manager'
        },
        {
            name:"Olivia",
            src:person1,
            job:'Customer Relation'
        }]


  return (
    <div className="teams-container">
        <h2>Meet Our Team</h2>
        <div className="team-content">
            {
                data.map((person, index)=>(
                    <Team src={person.src}
                          name={person.name}
                          job={person.job}
                          key={index}/>
                ))
            }   
        </div>
    </div>
  )
}
export default MeetTeam