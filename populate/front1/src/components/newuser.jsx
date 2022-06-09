import { useState } from "react"
import axios from "axios"

const NewUser = () =>{
    const [gen, setGen] = useState({
        first_name: "",
    })
    const [addre, setAddre]= useState({
        street: "",
        area: "",
    })

    const createPerson = (e)=>{
        const {id,value}=e.target
        setGen({
            ...gen,[id]:value
        })
    }
    const createAddre = (e)=>{
        const {id,value}=e.target
        setAddre({
            ...addre,[id]:value
        })
    }

    const processData=(e)=>{
        e.preventDefault()

        axios.post("http://localhost:2345/users", {
        first_name: gen.first_name,
        address: [ {street: addre.street,
                area: addre.area}
        ]
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    

      return (
          <div>
              <form action="">
                  <label htmlFor="">First Name</label>
                  <input onChange={createPerson} id={"first_name"} type="text" />
              </form>
              <br />
              <br />
              <form action="">
                  <label htmlFor="">street</label>
                  <input onChange={createAddre} id={"street"} type="text" />
                  <label htmlFor="">area</label>
                  <input onChange={createAddre} id={"area"} type="text" />
                  <button onClick={processData}>Create New USer</button>
              </form>
          </div>
      )


}

export default NewUser