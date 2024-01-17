import React, { useContext } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import Maincontext from '../Context/context';
import toast, { Toaster } from 'react-hot-toast';

function Add() {
    const{setData,data,deleteData}=useContext(Maincontext)
    const formik = useFormik({
        initialValues: {
          name: '',
          desc: '',
          price: '',
          image: '',
        },
        onSubmit: (values,{resetForm}) => {
          if(!values.name||!values.desc||!values.price||!values.image){
            toast.error("empty input")
            return;
          }
         axios.post("http://localhost:3939/tasty",{...values}).then(res=>{
            setData([...res.data],values)
            resetForm()
           toast.success("created data")
         })
        },
      });
  return (
 <div>
     <div style={{marginTop:"30px"}}>
          <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name">name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
 
       <label htmlFor="desc">desc</label>
       <input
         id="desc"
         name="desc"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.desc}
       />
 
       <label htmlFor="price">price</label>
       <input
         id="price"
         name="price"
         type="Number"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <label htmlFor="image">image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.image}
       />
 
       <button type="submit">Submit</button>
     </form>
      
    </div>
   <div style={{marginTop:"30px"}}>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">desc</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
    {
      data.map((item,index)=>{
        return(
          <tbody>
          <tr>
            <th scope="row">{item.name}</th>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td><button onClick={()=>(
              deleteData(item)
            )}>delete</button></td>
          </tr>
         
        </tbody>
    

        )
      })
    }
      </table>
   </div>
<Toaster/>
 </div>
  )
}

export default Add
