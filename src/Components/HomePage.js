import React from 'react'
//import img from '../Images/1.jpg'
import Navbar from './Navbar'
import '../Styles/HomePage.css'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import TrainerCard from './TrainerCard'
import Footer from './Footer'
import Pricing from './Pricing'
import {subscribeData }from './atom'
import { useRecoilState } from 'recoil'

function HomePage(){
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path
    if(handleCode()=="Join With Us"){
    path = `/Register`; 
  }
    else if (handleCode()=="Subscribe"){
       path =`/pricing`
    }
    else{
       path= `/activity`
    }
    navigate(path);
  }

 const[subscribeDetail,setSubscribeDetail]= useRecoilState(subscribeData)

 function handleCode(){
  
  if(subscribeDetail.isLogin===true && subscribeDetail.isSubscribe===false){
    return "Subscribe"
  }
  else if(subscribeDetail.isLogin===true && subscribeDetail.isSubscribe===true){
    return "Get Started"
  }
  else{
    return "Join With Us"
  }
 }

  return (
    <>
    
    <div className='main'>
    <Navbar/>
    
    <div className='Wrapper'>
       
        <div className='Container'>
        
        <h2 className='text'> <span style={{color:"rgb(111, 1, 1)", fontFamily: "fantasy",fontWeight:"bold"}}>Push</span> harder than yesterday if you want a different tomorrow</h2>
        
           <button className='btn2' onClick={()=>{routeChange();}} >{handleCode()}</button>
      </div>
    </div>
    </div>
    <Card/>
    <TrainerCard/>
    <Pricing/>
    <Footer/>
    </>
   
  )
  
}

export default HomePage
