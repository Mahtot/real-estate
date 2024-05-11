
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Property from "./pages/Property"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useContext, createContext} from "react"
import { AuthProvider } from "./contexts/authContext"
export const ModalContext = createContext(null);
export const FilterContext = createContext(null)

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const [selectedValues, setSelectedValues] = useState({
    subCity : '',
    price: '',
    property: ''
  });

const handleChange = (name) => (value) => {
    setSelectedValues((prevValues) => ({
        ...prevValues,
        [name]: value
    }));
};

  return (
    <>
     
      <BrowserRouter>
      <AuthProvider>

      <ModalContext.Provider value={{ isLogin, setIsLogin, showModal, setShowModal, toggleModal }}>
        <FilterContext.Provider  value={{ selectedValues, setSelectedValues, handleChange }}>
            <Header />
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/property' element={<Property/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
          </FilterContext.Provider>
        </ModalContext.Provider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
