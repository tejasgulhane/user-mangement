import React, { useRef } from 'react'
import "./Login.css"

const Login = () => {

    const nameref=useRef()
    const passwordref=useRef()
    const datedref=useRef()
    const contactref=useRef()
    const adressref=useRef()

    const loginhandler=() =>{
         let name=nameref.current.value
         let password=passwordref.current.value
         let dob=datedref.current.value
         let number=contactref.current.value
         let adress=adressref.current.value


         if(name.length >=6 && password.length >= 6)
         {
            
            alert("Login sucessfully");
         }
         else{
            if(!name.length) {
            alert("please add correct name")
            }
            else if (!password.length){
                alert("please add password with minimum length of 6")
            }
            else if(!adress.length){
               alert("please add adress ")
            }
            else{
               alert("please add contact number")
            }
         }
    }
  return (
    <>
    <div className='logincontainer'>
        <div className='container'>
         <div className='inputfeild'>
            <label for="">E-Mail</label>
            <input type="email"  ref={nameref} />
         </div>
         <div className='inputfeild'>
            <label for="">Password</label>
            <input type="password" ref={passwordref}/>
         </div>
         <div className='inputfeild'>
            <label for="">Dob</label>
            <input type="date" ref={datedref}/>
         </div>
         <div className='inputfeild'>
            <label for="">Address</label>
            <input type="text" ref={adressref}/>
         </div>
         <div className='inputfeild'>
            <label for="">Phone Number</label>
            <input type="number" ref={contactref}/>
         </div>
         <div className='btn'>
            <button onClick={loginhandler}> submit </button>
         </div>
         </div>
    </div>
    </>
  )
}

export default Login