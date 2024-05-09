import Main from "../components/Main"
import Desc from "../components/Desc"
import Testimonals from "../components/Testimonals"
import GoToAction from "../components/GoToAction"
import Footer from "../components/Footer"

function Home() {
    const data = {
      head:'Are you ready to discover your new home today?',
      body:"Our dedicated team offers personalized assistance every step of the way. From tailored searches to expert guidance, we're here to make your real estate journey seamless. Explore available properties now!",
      btn:"Get In Touch",
      
    }

  return (
    <div className="home"> 
        <Main/>
        <Desc/>
        <Testimonals/>
        <GoToAction head={data.head} body={data.body} btn={data.btn} id='home'/>
        <Footer/>
    </div>
  )
}
export default Home

