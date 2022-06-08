import logo from './logo.svg';
import './App.css';
import React from 'react';
import AllUser from './components/allUser';
import  NewUser  from './components/newuser';
import OneUser from './components/oneuser';

function App() {
  return (
    <div className="App">
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

       <OneUser></OneUser>
      </div>
      

       
    </div>
  );
}


export default App;
