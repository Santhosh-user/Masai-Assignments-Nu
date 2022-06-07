import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {

  const [movie, setMovie] = useState([])
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [filtering, setfiltering] = useState("")

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
          <div>Movie Genre</div>
          <select onChange={(e)=>{setfiltering(e.target.value)}}>Movie Genre
            <option value="">All</option>
            <option value="horror">horror</option>
            <option value="action">action</option>
            <option value="romance">romance</option>
            <option value="comedy">comedy</option>
            <option value="drama">drama</option>
          </select>

          <div>Actor</div>
          <select>Actor
            <option value="">All</option>
            <option value="Will">Will</option>
            <option value="Smith">Smith</option>
            <option value="Logan">Logan</option>
            <option value="Fury">Fury</option>
            <option value="Paul">Paul</option>
          </select>

       



        {movie.filter((e=>{
          if(filtering==""){
            return true
          }
          else{
            if(e.payment==filtering){
              return true
            }
          }
        })).map((e)=>{
          return ( <div className='disp'>
              <div>Movie Name - {e.movie_name}</div>
              <div>Genre - {e.genre}</div>
              <div>Viewer Rating - {e.viewer_rating}</div>
              <div>Critic Rating - {e.critic_rating}</div>
              <div>Year - {e.year}</div>
              <div>Actor - {e.actor}</div>
            </div>
          )
        })
        }
     </div>






        <footer>
          <button disabled={page===1} onClick={handlePrevious}>Previous</button>
          <button disabled={page===page} onClick={handleNext}>Next</button>
        </footer>
    </div>
  );
}

export default App;
