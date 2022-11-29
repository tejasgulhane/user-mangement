import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edituser = ()=>{
     const [userdata ,updateuserdata] = useState()
    const passwordref = useRef()

    const history = useNavigate()
    useEffect(()=>{
        let userdatainfo = JSON.parse(localStorage.getItem("user_login"))

        let alluser = JSON.parse(localStorage.getItem("user"))

        const userlogin = alluser.filter((el, k) => {
            return el.email === userdatainfo[0].email && el.password === userdatainfo[0].password
        });

        console.log(userlogin[0]);
        updateuserdata(userlogin[0])

    },[])

    const editpassword =()=>{

        let updatedpassword = passwordref.current.value;
    
        let alluser = JSON.parse(localStorage.getItem("user"))

        let userdatainfo = JSON.parse(localStorage.getItem("user_login"))

        userdatainfo[0].password=updatedpassword;

        
        alluser.forEach((item)=>{
            if(item.email === userdatainfo[0].email){
                item.password=updatedpassword;
                localStorage.setItem("user", JSON.stringify(alluser));
                localStorage.setItem("user_login", JSON.stringify(userdatainfo));
                updateuserdata(userdatainfo[0])
                logout()
            }
        })
    
        
    }
    const logout =()=>{

            localStorage.removeItem("user_login");
            history("/")
            }
   
    return(
        <>
        <div className="card">
            <div className="card_container edit ">
            <input placeholder=" edit password" ref={passwordref} className="passwordedit"/>
            <button onClick={editpassword} className="submit">EDIT</button>
            </div>
        </div>

        </>
    )
}

export default Edituser;