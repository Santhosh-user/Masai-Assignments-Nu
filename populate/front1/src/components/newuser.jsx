import { useState } from "react"
import axios from "axios"

const NewUser = () =>{
    const [gen, setGen] = useState({
        first_name: "",
    })
    const [addre, setAddre]= useState({
        address1: "",
        address2: "",
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
        address: [ {address1: addre.address1,
                address2: addre.address2}
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
                  <label htmlFor="">address1</label>
                  <input onChange={createAddre} id={"address1"} type="text" />
                  <label htmlFor="">address2</label>
                  <input onChange={createAddre} id={"address2"} type="text" />
                  <button onClick={processData}>Create New USer</button>
              </form>
          </div>
      )


}

export default NewUser