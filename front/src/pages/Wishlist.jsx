import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import "./WishList.scss"
import { Toaster } from 'react-hot-toast'

function Wishlist() {
    const {wishlist,removeFromWishlist}=useContext(Maincontext)
  return (
    
    <div className='wishlist'>
        {
            wishlist.map((item,index)=>{
                return(
                    <div class="card" style={{width: "18rem;"}}>
  <img class="card-img-top" src={item.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.desc}</p>
    <button onClick={()=>{
removeFromWishlist(item)
    }}>delete</button>
  </div>
</div>
                )
            })
        }
      <Toaster/>
    </div>
  )
}

export default Wishlist
