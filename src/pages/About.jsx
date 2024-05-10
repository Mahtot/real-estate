import Company from "../components/Company"
import ppl from '../assets/imgs/ppl.png';
import Story from "../components/Story";
import MeetTeam from "../components/MeetTeam";
import GoToAction from "../components/GoToAction";
import Footer from "../components/Footer";

function About() {

  const data = {
    head:'About',
    desc:`At our company we believe that finding the perfect home is more than just a transaction;
          it's about finding a place where memories are made and dreams are realized. With a passion for real 
          estate and a commitment to excellence, we're dedicated to helping you navigate the exciting journey of buying, 
          selling, or renting your next property.`,
    src:ppl,
    btn:'Contact agent'
  }

  const story = `Founded 5 years ago by Olivia, HomeHive was born out of a desire 
                to redefine the real estate experience. What started as a small team with 
                big dreams has grown into a trusted agency known for its integrity, professionalism,
                and personalized service`
  
  return (
    <div className="about-container">
      <div>
        <Company head={data.head}
                 desc={data.desc}
                 src={data.src}
                 btn={data.btn}/>
      </div>

     <div>
      <Story head='Our Story'
             story={story}/>
     </div>

     <div>
      <MeetTeam/>
     </div>
      
    <div >
      <GoToAction head="Get in Touch"
                  body="Ready to take the next step? Contact us today to learn more about how we can help you achieve your real estate goals. Whether you're buying, selling, or investing, we're here to make your real estate dreams a reality."
                  btn="contact"
                  id='about'/>
    </div>

    <div>
      <Footer/>
    </div>
    </div>
  )
}
export default About