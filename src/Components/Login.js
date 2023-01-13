import React, { useEffect, useState } from 'react'
import { FaUserAlt,FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

import '../Styles/Register.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Login()  {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  const[username,setUsername]=useState("")
  const[uMessage,setUMessage]=useState("")
  const[message,setMessage]=useState("")
  const[password,setPassword]=useState("")
  const[ subscribeDetail,setSubscribeDetail] = useState({isSubscribe:false,plan:"",isLogin:false})
    
  

  useEffect(()=>{
    if(localStorage.getItem('registeredUser')){
    const data = JSON.parse(localStorage.getItem('registeredUser'))
            console.log(data)}},[])

        

const handleUsername = (event)=>{
    setUsername(event.target.value)
}
const usernameValidation=()=>{
    
    const reg=/^[A-Za-z][A-Za-z0-9_]{7,29}$/
    if(username===""){
        setUMessage("Enter Username")
    }
    else if(reg.test(username)){
        setUMessage("Valid Username")
    }
    else if(!reg.test(username)){
        setUMessage("Invalid Username")
    }
    else{
        setTimeout(function(){
            setUMessage(" ") } ,30000);
    }
}
const handlePassword=(event)=>{
  setPassword(event.target.value)

}
const passwordValidation=()=>{
    
  const regExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
  if(password===""){
      setMessage("Enter Password")
  }
  else if(regExp.test(password)){
      setMessage("Valid Password")
  }
  else if(!regExp.test(password)){
      setMessage("Invalid Password")
  }
  else{
    setTimeout(function(){
        setMessage(" ") } ,30000);

     
}
}

function LoggedIn(){
  const regExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
  const reg=/^[A-Za-z][A-Za-z0-9_]{7,29}$/
  

  if(regExp.test(password) && reg.test(username) ){
    alert("Congratulations!! You are Successfully Logged In , now lets go to home page and subscribe to get fit")
    setSubscribeDetail({isLogin:true ,isSubscribe:false,plan:"" })
    console.log(setSubscribeDetail)
    // setUsername("")
    // setPassword("")
  }
}



  return (
    <>
     <form>
    <Navbar/>
            <div className='Container2'>
                <div className='Fields'>
        <div className='input1'>
       <span className='icon1'> <FaUserAlt/> </span>
       
       <input className='i1'  type="text" placeholder='USERNAME' value={username} onChange={handleUsername} required/>
       </div>
       <p>{uMessage}</p>

       <div className='input2'>
        <span className='icon2'><FaLock/></span>
        <input className='I2' type="password" placeholder="PASSWORD" value={password} onChange={handlePassword} required/>
       </div>
       <p>{message}</p>
       <div className='Lower-Container' >
       
       <div className='Register-link'>
       <p>Dont have an account?</p>
       <Link to='/Register'>Register</Link>
      </div>
       <div className='Login-Btn'>
       <button className='Btn' onClick={(e)=>{
        e.preventDefault()
       usernameValidation();passwordValidation();LoggedIn();routeChange()

       }}>Login</button>
       </div>
       </div>
       </div>
       </div>
       <Footer/>
    </form>
    </>
  )
}

export default Login