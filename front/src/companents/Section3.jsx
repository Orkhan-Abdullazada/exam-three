import React, { useContext } from 'react'
import "./Section3.scss"
import Maincontext from '../Context/context'
import Card from './Card'
import { Toaster } from 'react-hot-toast'

function Section3() {
    const { data, handlesearch ,handleFilter,handAZ} = useContext(Maincontext)
    return (
        <div className='section3__all'>
            <div className='section3__top'><p>Discover Our Exclusive Menu</p></div>
            <div className='section3__2'>
                <div>Main</div>
                <div> Desset</div>
                <div>Drink</div>
            </div>
            <input type="text" placeholder='search' onChange={(e) => {
                handlesearch(e.target.value)
            }} />
           <div >
           <button style={{color:"white", border:"none", backgroundColor:"black",fontSize:"18px",marginRight:"20px"}} onClick={()=>{
                handleFilter(data)
            }}>filter by price</button>
            <button onClick={handAZ} style={{color:"white", border:"none", backgroundColor:"black",fontSize:"18px"}}>filter A-Z</button>
           </div>
            <div className='container'>
                <div className="row">
                    {
                        data.map((item, index) => {
                            return (
                                <Card item={item} key={index} />
                            )
                        })
                    }
                </div>

            </div>
<Toaster/>
        </div>
    )
}

export default Section3
