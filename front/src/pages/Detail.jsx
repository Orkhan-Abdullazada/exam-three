import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detail() {
    const [detail,setdetail]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3939/tasty/${id}`).then(res=>{
            setdetail(res.data)
        })
    })
  return (
    <div>
    <div><p> <b>Name:</b>{detail.name} <b>     Price:</b> {detail.price}</p></div>
     
   </div>
  )
}

export default Detail
