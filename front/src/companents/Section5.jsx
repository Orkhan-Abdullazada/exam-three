import React from 'react'
import "./Section5.scss"

function Section5() {
  return (
    <div className='section5__all'>
        <div>
            <p style={{color:"gray", fontSize:"15px", paddingTop:"40px"}}>Our Meni</p>
        </div>
        <div>
            <p style={{fontSize:"24px"}}>Discover Our Exclusive Menu</p>
        </div>
        <div className='All__xett'>
            <div className='xett' style={{backgroundColor:"#ffc107"}}> Main</div>
            <div className='xett'>Desert</div>
            <div className='xett'>Drink</div>
        </div>
      
    </div>
  )
}

export default Section5
