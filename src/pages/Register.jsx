import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { registerAPI } from '../services/allAPI'

function Register() {
    const navigate=useNavigate()
    const [userInput, setUserinput]= useState({
        name: "", password: "",email:""
      })
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(userInput.name&&userInput.password&&userInput.email){
            try{
                const result = await registerAPI(userInput)
                if(result.status==200){
                    console.log(result.data);
                    debugger
                    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
               sessionStorage.setItem("Name",JSON.stringify(result.data.name))
               sessionStorage.setItem("email",JSON.stringify(result.data.email))
               alert(`Welcome  ${result.data.name}...`)
              setUserinput({name:"",password:"",email:""})
              setTimeout(()=>{
                navigate('/movies')
              },2000);
                }else{
                    alert("Error!Plz try again...")
                }
            }catch(err){
                console.log(err)
                
            }
        }
    }
    const handlelogin=()=>{
        navigate('/')
    }
  return (
    <>
    <div className="fullscreen" style={{width:'100%',height:'100vh'}}>
    <div className="form">
        <div className="bg-light text-center p-5">
                <h4 style={{ color: 'darkblue' }}>Signup</h4>
                <FloatingLabel controlId="floatingUsername" label="Name" className=' inp'>
            <Form.Control type="text" placeholder="Emailid" onChange={e=>setUserinput({...userInput,name:e.target.value})}   style={{backgroundColor:'white',borderTop:'0px',borderBottom:'2px solid white',borderLeft:'0px',borderRight:'0px',textAlign:'center',borderRadius:'0px',color:'black'}}/>
          </FloatingLabel>
                <FloatingLabel controlId="floatingUsername" label="Email" className=' inp'>
            <Form.Control type="email" placeholder="Emailid" onChange={e=>setUserinput({...userInput,email:e.target.value})}   style={{backgroundColor:'white',borderTop:'0px',borderBottom:'2px solid white',borderLeft:'0px',borderRight:'0px',textAlign:'center',borderRadius:'0px',color:'black'}}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className='mb-2 inp'>
            <Form.Control type="password" placeholder="Password" onChange={e=>setUserinput({...userInput,password:e.target.value})}   style={{backgroundColor:'white',borderTop:'0px',borderBottom:'2px solid white',borderLeft:'0px',borderRight:'0px',textAlign:'center',borderRadius:'0px',color:'black'}}/>
          </FloatingLabel>
                
                <button className='btn btn-success w-100 mt-3 mb-3' onClick={handleSubmit}>Register</button>
                <p style={{ color: 'black', backgroundColor: 'white' }}>
                    Already registered? <u onClick={handlelogin} style={{ color: 'black', backgroundColor: 'white',cursor:'grab' }}>Login</u>
                </p></div>
            </div>
    </div>
    </>
  )
}

export default Register