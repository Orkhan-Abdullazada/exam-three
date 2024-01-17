import React, { useContext } from 'react'
import "./Section3.scss"
import Maincontext from '../Context/context'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
function Card({item}) {
const {addTowishlist,addTobasket,handlesearch}=useContext(Maincontext)
  return (
    <>
    <div className='clo-lg-3 col-md-6 mb-5 mr-1 salam'>
        <div class="cardd" style={{width: "18rem;"}}>
 <div className='section33__img'> <img class="card-img-top" src={item.image} alt="Card image cap"/></div>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <div>
    <p class="card-text" style={{color:"gray"}}>{item.desc}</p>
    </div>
   
  </div>
   <div> <p  style={{display:"flex"}}>{item.price}$$</p></div>
   <div style={{ display:"flex",gap:"2px" }}><button style={{backgroundColor:"skyblue", color:"gray"}} onClick={()=>{
addTowishlist(item)
   }}><i class="fa-solid fa-heart"></i></button>
   <button  style={{backgroundColor:"lightgreen", color:"gray"}} onClick={()=>{
    addTobasket(item)
   }}><i class="fa-solid fa-basket-shopping"></i></button>
   <Link to={`/${item._id}`}> <button  style={{backgroundColor:"gray", color:"white"}}>#</button></Link></div>
   
</div>
<Toaster/>
      
    </div>
    </>
  )
}

export default Card
