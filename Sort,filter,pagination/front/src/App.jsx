import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {

  const [movie, setMovie] = useState([])
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  useEffect(()=>{
    getData()
  },[])

  
// console.log(useSearchParams(""))

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

  function handlePrevious(){
    setPage((p)=>{
      if(p===1) return p

   return p-1 
  })
  }

  function handleNext(){
    setPage((p)=>{
      if(p===setPageCount) return p
      return p+1
    })
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
          <button disabled={page===1} onlClick={handlePrevious}>Previous</button>
          <button disabled={page===page} onClick={handleNext}>Next</button>
        </footer>
    </div>
  );
}

export default App;
