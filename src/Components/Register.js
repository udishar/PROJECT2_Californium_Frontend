import React from 'react'
import {MdMail} from 'react-icons/md'
import {FaUserAlt,FaLock} from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Register.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import {subscribeData} from './atom'



function Register() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }

    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage]=useState("")
    const [eMessage , setEMessage] = useState("")
    const [username,setUsername]=useState("")
    const [uMessage,setUMessage]=useState("")
    const[ subscribeDetail,setSubscribeDetail] = useRecoilState(subscribeData)
 console.log("subscribe detail" , subscribeDetail);



    const  handleEmail=(event)=> {
        setEmail(event.target.value) 
    }

    const emailValidation=()=>{
        let regEx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,3})+$/
        
        if(email===""){
            setEMessage("Enter Email")
        }
       else if(regEx.test(email)){
            setEMessage("Valid email")
        }
        else if(!regEx.test(email) ){
            setEMessage("Invalid email")
        }
       else{
            setEMessage("")
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
            setMessage("")

        }
    }

    const handleUsername = (event)=>{
        setUsername(event.target.value)
    }
    const usernameValidation=()=>{
        const reg =/^[A-Za-z][A-Za-z0-9_]{7,29}$/
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
            setUMessage("")
        }
    }
    
    const userList=JSON.parse(localStorage.getItem("registeredUser"))||[];

   function ListOfRagisterdUsers(){
    const reg =/^[A-Za-z][A-Za-z0-9_]{7,29}$/
    const regExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
    let regEx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,3})+$/

    userList.push({email:email,username:username,password:password , isSubscribed:subscribeDetail.isSubscribe , plan:subscribeDetail.plan, isLogIn:subscribeDetail.isLogin });
   
    if(email===""||username===""||password===""){
   }

   else if(regEx.test(email)&&regExp.test(password)&&reg.test(username)){
    localStorage.setItem("registeredUser" , JSON.stringify(userList))
    alert("You are successfully Registered, Go to Home page and subscribe to get fit")
    setSubscribeDetail({...subscribeDetail,isLogin:true})
    console.log("after registration",subscribeDetail);
   
    
}
}
console.log(subscribeDetail,"normal")






    

    return (

    
      <form>
        <Navbar/>
        
            <div className='Container2'>
              <div className='Fields'>
                <div className='input3'>
                    <span className='icon3'> <MdMail/> </span>
                    <input  className="I3" type="email" placeholder='EMAIL' value={email} onChange={handleEmail} required/>
                </div>
                <p>{eMessage}</p>
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
       <div className='log-link'>
        
       <div className='register-btn'>
       <p>Already have account?</p>
        <Link to ='/Login'>Login</Link>
        </div>
        <div>
        <button className='btn2' onClick={(e)=>{
            e.preventDefault();
           
        emailValidation(); passwordValidation() ; usernameValidation() ; ListOfRagisterdUsers() ; routeChange()  }} >Register</button>
        
        
        </div>
        
        </div>
        </div>
        </div>
      <Footer/>
       </form>
  
  )
}

export default Register;