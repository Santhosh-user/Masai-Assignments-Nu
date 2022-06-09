import React from "react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// const { useNavigate } = require("react-router-dom")

const AllUser = () =>{
    
    
    const [details, setDetails] = useState([])

    const navi = useNavigate()

    useEffect(()=>{
        absorbDetails()
    },[])

    const absorbDetails=()=>{
            axios.get('http://localhost:2345/users')
            .then(function (response) {
                // handle success
                setDetails(response.data)
                console.log(response.data);
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
            <h2>List of users</h2>
            {details.map((e)=>{
                return( 
                <div onClick={()=>{
                    navi(`/oneuser/${e._id}`)
                }}>
                <div>{e.first_name}</div>
                 </div>
                )
            })}
        </div>
    )


}


export default AllUser