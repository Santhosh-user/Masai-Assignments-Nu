import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {

  const [movie, setMovie] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = () =>{
    axios.get("http://localhost:2345/movies")
    .then(function (response) {
      // handle success
      console.log(response.data.movies);
      setMovie(response.data.movies)
  
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  

  return (
    <div className="App">
      <header className="App-header">
     <div>
       <div>hello</div>
        {/* {movie.map((e)=>{
          return ( <div>{e.movie_name}</div>

          )
        })
        } */}
     </div>
      </header>
    </div>
  );
}

export default App;
