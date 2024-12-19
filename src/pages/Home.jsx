import React, { useState } from 'react'
import './Home.css'
import { FloatingLabel, Form } from 'react-bootstrap'
import { loginAPI } from '../services/allAPI'
import { Navigate, useNavigate } from 'react-router'

function Home() {
    const navigate=useNavigate()
    const [userInput, setUserinput]= useState({
        username: "", password: ""
      })
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(userInput.username&&userInput.password){
            try{
                const result = await loginAPI(userInput.username,userInput.password)
                if(result.status==200){
                    console.log(result.data);
                    debugger
                    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
               sessionStorage.setItem("Name",JSON.stringify(result.data.name))
               sessionStorage.setItem("email",JSON.stringify(result.data.email))
            //    sessionStorage.setItem("password",JSON.stringify(result.data.password))
            //    console.log(result.data.token);
            //    sessionStorage.setItem("token",result.data.token)
               alert(`Welcome Back  ${result.data.name}...`)
              setUserinput({username:"",password:""})
              setTimeout(()=>{
                navigate('/movies')
              },2000);
                }else{
                    alert("INVALID USERNAME/PASSWORD")
                }
            }catch(err){
                console.log(err)
                
            }
        }
    }
    const handleregistr=()=>{
      navigate('/register')
    }
    
  return (
    <>
    <div className="fullscreen" style={{width:'100%',height:'100vh'}}>
    <div className="form">
                <h4 style={{ color: 'darkblue', backgroundColor: 'white' }}>LOGIN</h4>
                <FloatingLabel controlId="floatingUsername" label="Username" className=' inp'>
            <Form.Control type="email" placeholder="Emailid" onChange={e=>setUserinput({...userInput,username:e.target.value})}   style={{backgroundColor:'white',borderTop:'0px',borderBottom:'2px solid white',borderLeft:'0px',borderRight:'0px',textAlign:'center',borderRadius:'0px',color:'black'}}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className='mb-2 inp'>
            <Form.Control type="password" placeholder="Password" onChange={e=>setUserinput({...userInput,password:e.target.value})}   style={{backgroundColor:'white',borderTop:'0px',borderBottom:'2px solid white',borderLeft:'0px',borderRight:'0px',textAlign:'center',borderRadius:'0px',color:'black'}}/>
          </FloatingLabel>
                
                <button onClick={handleSubmit}>LOGIN</button>
                <p style={{ color: 'black', backgroundColor: 'white' }}>
                    Don't have an account? <u onClick={handleregistr} style={{ color: 'black', backgroundColor: 'white' ,cursor:'grab'}}>Register</u>
                </p>
            </div>
    </div>
    </>
  )
}

export default Home