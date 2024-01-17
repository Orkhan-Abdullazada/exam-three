import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import { Toaster } from 'react-hot-toast'

function Basket() {
    const {basket,decreaseBtn,increaseBtn,removeFromBasket}=useContext(Maincontext)
  return (
    <div>
         <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">+</th>
      <th scope="col">count</th>
      <th scope="col">-</th>
      <th scope="col">totalPrice</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>

    {
        basket.map((item,index)=>{
            return(
                <tr>
      <th scope="row" key={index}>{item.id}</th>
      <td>{item.product.name}</td>
      <td>{item.product.price}</td>
      <td><button className='btn btn-warning' onClick={()=>{
       increaseBtn(item)
      }}>+</button></td>
      <td>{item.count}</td>
      <td><button className='btn btn-danger' onClick={()=>{
    decreaseBtn(item)
      }}>-</button></td>
      <td>{item.totalPrice}</td>
      <td><button className='btn btn-success' onClick={()=>{
        removeFromBasket(item)
      }}>delete</button></td>
              </tr>
            )
        })
    }
    
    
  
    
  </tbody>
</table>
      <Toaster/>
    </div>
      
    </div>
  )
}

export default Basket
