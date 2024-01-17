import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

function Header() {
  return (
    <div className='header__all'>
      <div className="header__left">
        <h3 style={{fontSize:"18px"}}>Tasty</h3>
      </div>
      
       <div className='header__right'>
       <Link to="/" style={{color:"orangered"}}>Home</Link>
        <Link to="/Add">Add</Link>
        <Link to="/Wishlist">Wishlist</Link>
        <Link to="/Basket">Basket</Link>
        <Link to="/:id">Detail</Link>

       </div>
      
    </div>
  )
}

export default Header
