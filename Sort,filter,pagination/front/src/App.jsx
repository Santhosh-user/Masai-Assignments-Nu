import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {

  const [movie, setMovie] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    getData()
  },[])

  
// console.log(useSearchParams(""))

  const getData = () =>{
    axios.get(`http://localhost:2345/movies?page=$(page)`)
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
     
     <div>
       <div>hello</div>
        {movie.map((e)=>{
          return ( <div>{e.movie_name}</div>

          )
        })
        }
     </div>
        <footer>
          <button></button>
        </footer>
    </div>
  );
}

export default App;
