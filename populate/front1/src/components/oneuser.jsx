import { useState } from "react"



const OneUser = () =>{
    const [ppl, setPpl]=useState({})
    const [changedData, seChangedData] = useState()



    const mixData=(e)=>{
        const {id,value}=e.target
        
    }



    return (
        <div>
            <div>First Name: {ppl.first_name}</div>
            
            <form action="">
                <label htmlFor="">Name</label>
                <br />
                <input onChange={setPpl} id={"first_name"} type="text" />
                <br />
                <label htmlFor="">Address1</label>
                <br />
                <input onChange={setPpl} id={"address1"} type="text" />
                <br />
                <label htmlFor="">Address2</label>
                <br />
                <input onChange={setPpl} id={"address2"} type="text" />
                <br />
            </form>

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



            



        </div>
    )
}

export default OneUser