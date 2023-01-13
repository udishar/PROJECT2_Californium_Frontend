import React, { useRef, useState } from 'react';
import {FaBars , FaTimes, FaHouseUser,FaInfoCircle,FaMeetup, FaMoneyCheckAlt} from 'react-icons/fa';
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {GiGymBag} from 'react-icons/gi'
import { MdModelTraining } from 'react-icons/md';

function Navbar() {

  const[fix,setFix]=useState(false)

  function HandleStick(){
    if(window.scrollY >= 392){
      setFix(true)
    }
    else{
      setFix(false)
    }
  }

  window.addEventListener("scroll" ,  HandleStick)

    const navRef=useRef();
      
    const ShowNavBar=() => {
        navRef.current.classList.toggle('responsive_nav')
    }

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Register`; 
    navigate(path);
  }

 return (
    <>
    <header>
      {/* <div className='main-class'> */}
      
    <Link to ='/' className='logo'>GYM</Link>
    
   <nav ref={navRef} className="Nav">
   

        <Link to='/'><FaHouseUser/> Home</Link>
        <Link to='/AboutUs'><FaInfoCircle/> About Us</Link>
        <a href='#Training'> <MdModelTraining/> Training Program</a>
        <a href='#Meet'><FaMeetup/> Meet Our Trainers</a>
        <a href='#Price'><FaMoneyCheckAlt/> Pricing</a>
        <button className='btn9' onClick={routeChange}> Join Us </button>
       <button className='nav-btn nav-close-btn' onClick={ShowNavBar}>
            <FaTimes/>
        </button>
    </nav>
    <button className='nav-btn' onClick={ShowNavBar}>
        <FaBars/>
    </button>
    {/* </div> */}
    </header>
    
    </>
  )
}

export default Navbar;
