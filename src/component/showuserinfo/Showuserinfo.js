import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import './userinfo.css'

const Showuserinfo = ({userdata}) =>{
    const [data , updatedata]= useState(userdata.password)

    const history = useNavigate();

    const passwordref = useRef();

    const edituser =()=>{
        console.log("clicked");
        history("/edituser")
    }

console.log(userdata)
        return(
            <>
                <div className="card">
                            <div className="card_container">
                                <div className="row_card">
                                    <p>E-MAIL :</p><h3>{userdata.email} </h3>
                                </div>
                                <div className="row_card">
                                    <p>DOB :</p><h3>{userdata.date} </h3>
                                </div> <div className="row_card">
                                    <p>NUMBER :</p><h3>{userdata.number} </h3>
                                </div> <div className="row_card">
                                    <p>ADDRESS :</p><h3>{userdata.address} </h3>
                                </div> <div className="row_card">
                                    <p>PASSWORD :</p><h3>{userdata.password} </h3>
                                </div>
                                    {/* <button type="LOGOUT" className='editbtn ' onClick={edituser}>EDIT USER</button> */}
                            </div>
                </div>
            </>
        )

}

export default Showuserinfo;