import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from "axios"

function App() {

  // const [movie, setMovie] = useState({})

  axios.get("http://localhost:2345/movies")
  .then(function (response) {
    // handle success
    console.log(response);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  return (
    <div className="App">
      <header className="App-header">
     <div>
       <div>hello</div>
        
     </div>
      </header>
    </div>
  );
}

export default App;
