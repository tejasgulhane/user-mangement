import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Auth.css'

const Signup = (props) => {
    const [signup,setsignup] = useState(false);
    const emailref = useRef()
    const dateref = useRef()
    const contactref = useRef()
    const passwordref = useRef()
    const addressref = useRef()

    const history = useNavigate()

    const gotosignin = ()=>{
        setsignup(true)
    }
   
    const Signuphandler = () => {
     
        console.log(
            emailref.current.value,
            dateref.current.value,
            contactref.current.value,
            passwordref.current.value,
            addressref.current.value
        )

        let formdata = JSON.parse(localStorage.getItem("user")) || []

        formdata.push({
            id:Math.random(),
            email:emailref.current.value,
            date:dateref.current.value,
            number:contactref.current.value,
            password:passwordref.current.value,
            address:addressref.current.value
        })

   
        if (addressref.current.value === "") {
            alert(' first name field is requred!')
        } else if (emailref.current.value === "") {
            alert(' E-Mail  field is requred!')
        } else if (!emailref.current.value.includes("@")) {
            alert(' Please enter valid Email address')
        } else if (passwordref.current.value === "") {
             alert("Password is required !")
        } else if (passwordref.current.value.length < 5) {
            alert("Password length must be greater than 5 ")
        } else {
            console.log("data added succesfully");
            // history("/login")
            setsignup(true)
            localStorage.setItem("user",JSON.stringify(formdata));

        }

    }


    const Signinhandler = () =>{
        let signindata = {
            email:emailref.current.value,
            password:passwordref.current.value
        }

        let userdata = JSON.parse(localStorage.getItem("user"))
        console.log(userdata);

        const userlogin = userdata.filter((el, k) => {
            return el.email === emailref.current.value && el.password === passwordref.current.value
        });

        if (userlogin.length === 0) {
            alert("invalid details")
        } else {
            console.log("user login succesfulyy");
            props.onselect();
            localStorage.setItem("user_login", JSON.stringify(userlogin))
            history('/details')
        }
    }

  return (
        <>
        {
            !signup ? <>
            <div className='authbox'>
                <div className='authbox_container'>
                <h1>Create Account</h1>
                <p>Already had an account ? <a onClick={gotosignin} className="signinlink"> Sign In</a></p>

                <input type="email" name="E-Mail"  ref={emailref} placeholder="Email"/>
                <input type="password" name="Password"  ref={passwordref} placeholder="Password"/>
                <input type="date" name="New Pssword"  ref={dateref} placeholder="DOB"/>
                <input type="number" name="Number"  ref={contactref} placeholder="CONTACT NUMBER"/>
                <input type="text" name="address"  ref={addressref} placeholder="address "/>
                <button onClick={Signuphandler}>Signup</button>
                </div>
            </div>
                </> 
                :
                <>
                <div className='authbox'>
                    <div className='authbox_container'>
                        
                    <h1>Welcome</h1>
        
                    <input type="email" name="E-Mail"  ref={emailref} placeholder="Email"/>
                    <input type="password" name="Password"  ref={passwordref} placeholder="Password"/>
                    
                    <button onClick={Signinhandler}>SigIn</button>
                    </div>
                
                </div>
                 </>
        }

    </>
  )
}

export default Signup;