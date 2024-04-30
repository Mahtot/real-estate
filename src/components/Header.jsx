import logo from '../assets/imgs/logoYellow.png';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import Button from './Button';
import { useState } from 'react';
import '../assets/css/style.css';
function Header() {

  const menuItem = [
    {
      path:'/about',
      name:'about'
    },
    {
      path:'/property',
      name:'property'
    },
    {
      path:'/services',
      name:'services'
    },
    {
      path:'/contact',
      name:'contact'
    }
  
  ]
 
  const [dropdown, setDropdown] = useState(false)
  
  return (
   <nav>
    <div id='logo'>
     <NavLink to='/'>
        <img src={logo}
              alt="logo of homehive company"/>
      </NavLink> 
    </div>


    <div className={`links ${dropdown? 'show':'hide'}`}>
      {
         menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} 
                  className={`link  ${item.name}`} 
                  activeClassName='active'
                  exact
                  >
               <div className="link-text">{item.name}</div>
          </NavLink>
     ))
     
     }
      
      <div className="btn-box">
        <Button id='login' name='login'/>
        <Button id='sign-up' name='sign up'/>
     </div>

    </div>

    <div className='menu-icon' onClick={()=>setDropdown(prevState=>!prevState)}>
     {dropdown?<IoMdClose size={'1.5rem'}/>:<CiMenuFries size={'1.5rem'} id="menu"/>}
    </div>
   </nav>
  )
}
export default Header