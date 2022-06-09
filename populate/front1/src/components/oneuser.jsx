import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"



const OneUser = () =>{
    const [ppl, setPpl]=useState({})
    const {id} = useParams()
    const [changedData, seChangedData] = useState()



    // const mixData=(e)=>{
    //     const {id,value}=e.target
    // }

    useEffect(()=>{
        getDetails()
    },[])

    const getDetails = () =>{
        axios.get(`http://localhost:2345/users/${id}`)
        .then(function (response) {
            // handle success
            setPpl(response.data)
            console.log(response);
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
        <div>
            <div>First Name: {ppl.first_name}</div>
            {/* <div>Edit name</div>
            <form action="">
                <label htmlFor="">Name</label>
                <br />
                <input onChange={setPpl} id={"first_name"} type="text" />
                <br />
                <br />
            </form>
            <br />
            <br />

            <div>Edit address1</div>
            <form action="">
            <label htmlFor="">Name</label>
                <br />
                <input onChange={mixData} id={"first_name"} type="text" />
                <br />
                <label htmlFor="">Address1</label>
                <br />
                <input onChange={mixData} id={"address1"} type="text" />
                <br />
                <label htmlFor="">Address2</label>
                <br />
                <input onChange={mixData} id={"address2"} type="text" />
                <br />
            </form>

            <div>Edit address2</div>
            <form action="">
            <label htmlFor="">Name</label>
                <br />
                <input onChange={mixData} id={"first_name"} type="text" />
                <br />
                <label htmlFor="">Address1</label>
                <br />
                <input onChange={mixData} id={"address1"} type="text" />
                <br />
                <label htmlFor="">Address2</label>
                <br />
                <input onChange={mixData} id={"address2"} type="text" />
                <br />
            </form> */}


        </div>
    )
}

export default OneUser