import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Homescrenn.css'

const HomeScreen = ({updateuserdata})=>{
    const [user , setuser]= useState([])
    const history = useNavigate();

    useEffect(()=>{
        let userdata = JSON.parse(localStorage.getItem("user"))
       setuser(userdata)
    },[])

    const logout =()=>{
        localStorage.removeItem("user_login")
        history('/')
    }

    const edituser =()=>{
        console.log("clicked");
        history("/edituser")
    }

    const showuserinfo = (item) =>{
        console.log(item);
        updateuserdata(item)
        // props.onSelect(item)
        history('/showuserinfo')
    }
    return (
        <>
         <div className='header'>
            <div className="left">
                <h3> USER MANAGEMENT SYSTEM </h3>
            </div>
            <div className="right">
                <button type="LOGOUT" className='logout_btn' onClick={logout}>Logout</button>
                <button type="LOGOUT" className='logout_btn edit_btn' onClick={edituser}>EDIT USER</button>
            </div>
            
        </div>
        <div className="users">
            {user.map((item ,index)=>{
                    return (
                        <>
                            <div className="user_data" key={index}>
                                <div className="user_info">
                                    <p>E-mail :</p><h6>{item.email}</h6>
                                </div>
                                <div>
                                    <button className="view_btn" onClick={()=>showuserinfo(item)}> VIEW </button>
                                </div>
                    
                            </div>
                        </>
                    )
            })}
        </div>

        </>
    )
}

export default HomeScreen