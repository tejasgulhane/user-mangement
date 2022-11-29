import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Login from './Component/Auth/Login';
import Signup from './component/Auth/Signup';
import Edituser from './component/Edituser/Edituser';
import Homescreen from './component/Homescreen/Homescrenn';
import Showuserinfo from './component/showuserinfo/Showuserinfo';
// import Expenses from "./components/Expenses/Expenses";
// import NewExpense from './components/NewExpense/NewExpense';
import './index.css'


const App = () => {
 const [signup , updatesignup] = useState(false)
 const [checklogin , updatechecklogin] = useState(false)
 const [userdata , updateuserdata] = useState()

 const signupstate =()=>{
  updatesignup(true);
 }
 useEffect(()=>{
    if(localStorage.getItem('user_login'))
    {
    updatechecklogin(true)
    }
    else{
    updatechecklogin(false)
    }
 },[checklogin])
 

  return (
    <>
        <Routes>
          <Route exact path='/details' element={ checklogin && <Homescreen  updateuserdata={updateuserdata}/>}/>
          <Route exact path='/edituser' element={ checklogin && <Edituser />}/>
          <Route exact path='/showuserinfo' element={ checklogin && <Showuserinfo userdata={userdata}/>}/>
          <Route exact path='/' element={ <Signup onselect = {signupstate}/>}/>
        </Routes>
    </>
  );
}

export default App;