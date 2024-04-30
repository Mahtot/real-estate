
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Property from "./pages/Property"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
     
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/property' element={<Property/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
