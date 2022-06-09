import logo from './logo.svg';
import './App.css';
import React from 'react';
import AllUser from './components/allUser';
import  NewUser  from './components/newuser';
import OneUser from './components/oneuser';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <div>
        <Link to = {"/"}>All Users</Link>
        <br />
        <br />
        <Link to = {"/newuser"}>New User</Link>
      </div>
      <br />
      <br />
      <br />
      
      <div>
        {/* <div>List of users</div>
        <br />
        <br />
        <AllUser></AllUser>
        <br />
        <br />
        <div>Create New user below</div>
        <br />
        <br />

       <NewUser></NewUser> */}
       <Routes>
         <Route path="/" element={<AllUser />}></Route>
         <Route path="/newuser" element={<NewUser />}></Route>
         <Route path="/oneuser/:id" element={< OneUser />} ></Route>
       </Routes>

    
      </div>
      

       
    </div>
  );
}


export default App;
