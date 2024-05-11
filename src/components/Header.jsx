import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/imgs/logoYellow.png';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import Button from './Button';
import Login from './Login';
import '../assets/css/style.css';
import { ModalContext } from '../App';
import { useContext } from "react";
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase/auth';

function Header() {
  const { currentUser } = useAuth();
  const [dropdown, setDropdown] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  const menuItem = [
    {
      path: '/about',
      name: 'about'
    },
    {
      path: '/property',
      name: 'property'
    },
    {
      path: '/services',
      name: 'services'
    },
    {
      path: '/contact',
      name: 'contact'
    }
  ];

  const { showModal, toggleModal, setIsLogin } = useContext(ModalContext);

  const handleOutsideClick = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      !event.target.classList.contains("sign-out-icon") 
    ) {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdown, showPopover]);

  const handleSignOut = async () => {
    try {
      await doSignOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  function toggleBodyFixed(isFixed) {
    if (isFixed) {
      document.body.classList.add('body-fixed'); // Apply the fixed position class
    } else {
      document.body.classList.remove('body-fixed'); // Remove the fixed position class
    }
  }
  
  // Toggle body fixed state when dropdown is shown or hidden
  function toggleDropdown(isDropdownVisible) {
    if (isDropdownVisible) {
      toggleBodyFixed(true); // Apply fixed position to body
    } else {
      toggleBodyFixed(false); // Remove fixed position from body
    }
  }
  

  return (
    <nav>
      <div id='logo'>
        <NavLink to='/'>
          <img src={logo} alt="logo of homehive company" />
        </NavLink>
      </div>

      <div className={`links ${dropdown ? 'show' : 'hide'}`}>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={`link ${item.name}`}
            activeClassName='active'
            exact
            onClick={() => setDropdown(false)}
          >
            <div className="link-text">{item.name}</div>
          </NavLink>
        ))}

        <div className="btn-box">
          {currentUser ? (
            <div className="user-initials" onClick={() => setShowPopover(!showPopover)}>
              {currentUser.displayName
                ? currentUser.displayName.charAt(0).toUpperCase()
                : currentUser.email.charAt(0).toUpperCase()}
              {showPopover && (
                <div className="popover" ref={popoverRef}>
                  <button className="sign-out-btn" onClick={handleSignOut}>
                    <FaSignOutAlt className="sign-out-icon" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button id='login' name='login' onClick={toggleModal} />
              <Button id='sign-up' name='sign up' onClick={() => { setIsLogin(false); toggleModal(); }} />
            </>
          )}
        </div>
      </div>

      <div className='menu-icon' onClick={() => {setDropdown((prevState) => !prevState); toggleDropdown(!dropdown)}}>
        {dropdown ? <IoMdClose size={'1.5rem'} /> : <CiMenuFries size={'1.5rem'} id="menu" />}
      </div>

      {/* Render the Modal component */}
      {showModal && <Login onClose={toggleModal} />}
    </nav>
  );
}

export default Header;
