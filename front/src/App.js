import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ROUTES from './index.routes';
import Maincontext from './Context/context';
import axios from "axios"
import toast from 'react-hot-toast';
const router = createBrowserRouter(ROUTES)
function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState([])
  const [filter, setFilter] = useState([])
  const [basket, setBasket] = useState(localStorage.getItem("basketItem") ? JSON.parse(localStorage.getItem("basketItem")) : [])

  const [wishlist, setWishlist] = useState(localStorage.getItem("wishlistItem") ? JSON.parse(localStorage.getItem("wishlistItem")) : [])
  const addTowishlist = (product) => {
    const target = wishlist.find(item => item._id == product._id)
    if (target) {
      toast.error("data movcuddur")
    }
    else {
      setWishlist([...wishlist, product])
      localStorage.setItem("wishlistItem", JSON.stringify([...wishlist, product]))
      toast.success("added data to favorites")
    }
  }
  const removeFromWishlist = (items) => {
    const target = wishlist.find(item => item._id == items._id)
    wishlist.splice(wishlist.indexOf(target), 1)
    setWishlist([...wishlist])
    localStorage.setItem("wishlistItem", JSON.stringify([...wishlist]))
    toast.success("deleted data")


  }
  const handlesearch = (searchValue) => {
    if (searchValue.trim().toLowerCase() == "") {
      setData([...filter])
    }
    else {
      setData([...data.filter(item => item.name.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
    }

  }
  const handleFilter = () => {
    setData([...data.sort((a, b) => b.price - a.price)])
    toast.success("Coxdan aza siralandi")
  }
  const handAZ = () => {
    const sorting = data.sort((a, b) => a.name.localeCompare(b.name))
    setData([...sorting])
    toast.success("A-Z siralandi")
  }
  const addTobasket = (product) => {
    const target = basket.find(item => item.product._id == product._id)
    if (target) {
      target.count += 1
      target.totalPrice = target.product.price * target.count
      setBasket([...basket])
      localStorage.setItem("basketItem", JSON.stringify([...basket]))
      toast.success("added data to basket")

    }
    else {
      const BasketItem = {
        id: product._id,
        product: product,
        count: 1,
        totalPrice: product.price

      }
      setBasket([...basket, BasketItem])
      localStorage.setItem("basketItem", JSON.stringify([...basket, BasketItem]))
    }
  }
  const decreaseBtn = (product) => {
    const target = basket.find(item => item.id == product.id)
    if (target.count > 1) {
      target.count -= 1
      target.totalPrice = target.count * target.product.price
      setBasket([...basket])
      localStorage.setItem("basketItem", JSON.stringify([...basket]))
    }


  }
  const increaseBtn = (product) => {
    const target = basket.find(item => item.id == product.id)

    target.count += 1
    target.totalPrice = target.count * target.product.price
    setBasket([...basket])
    localStorage.setItem("basketItem", JSON.stringify([...basket]))
  }
  const removeFromBasket = (product) => {
    const target = basket.find(item => item.id == product.id)
    basket.splice(basket.indexOf(target), 1)
    setBasket([...basket])
    localStorage.setItem("basketItem", JSON.stringify([...basket]))
    toast.success("deleted data")
  }
  const deleteData=(item)=>{
    axios.delete(`http://localhost:3939/tasty/${item._id}`).then(res=>{
      const target=data.find(prod=>prod._id==item._id)
      data.splice(data.indexOf(target),1)
      setData([...data])
    })
  }







  useEffect(() => {
    axios.get("http://localhost:3939/tasty").then(res => {
      console.log(res.data)
      setData(res.data)
      setFilter(res.data)
    })
  }, [])
  const values = {
    data,
    addTowishlist,
    removeFromWishlist,
    addTobasket,
    wishlist,
    basket,
    decreaseBtn,
    increaseBtn,
    removeFromBasket,
    handlesearch,
    handleFilter,
    handAZ,
    setData,
    deleteData

  }
  return (

    <div>
      <Maincontext.Provider value={values}>
        <RouterProvider router={router} />
      </Maincontext.Provider>



    </div>
  )
}

export default App

