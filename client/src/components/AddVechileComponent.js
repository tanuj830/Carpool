import React from 'react'
import "../components/addvechilecomponent.css"
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddVechileComponent = () => {

  const [data, setData] = React.useState({})
  const [user, setUser] = React.useState()
let navigate = useNavigate()
  const handleSubmit = (e) =>{

    e.preventDefault()

axios.post("http://localhost:8000/addvechile",data).then(res=>console.log(res)).catch((err)=>console.log(err))
  }

  useEffect(() => {
    
    const userLogin = window.localStorage.getItem("isLogin")
    setUser(JSON.parse(userLogin))  
    
  },[])

  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value

    setData({...data,[name]:value});
  }

  return (
   <>
   {
    user === "true" ?  <div className='form container my-5'>
    <div className='row my-3'>
    <h3>Add your vechile</h3>
    </div>

     <form action="POST" onSubmit={e=>handleSubmit(e)}>
     <div className='row'>
      <label>Name</label>
       <input name='name' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Age</label>
       <input name='age' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>


      <div className='row my-3'>
      <label>Source</label>
       <input name='source' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>
      
      <div className='row my-3'>
      <label>Destination</label>
       <input name='des' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Charge</label>
       <input name='charge' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>


      <div className='row my-3'>
      <label>Gender</label>
       <input name='gender' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Discription</label>
       <input name='disp' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Distance from source to destination</label>
       <input name='dist_S_to_D' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Expected time</label>
       <input name='time' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Vechile category (mention vechile is 4 wheeler or two wheeler)</label>
       <input name='vechileCategory' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Vechile name</label>
       <input name='vechileName' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Aadhar number or driving license</label>
       <input name='id' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Seat left</label>
       <input name='seatLeft' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>total seat</label>
       <input name='totalSeat' onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Phone number</label>
       <input name="phone"  onChange={e=>handleChange(e)} className='input bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Address</label>
       <input name="add" onChange={e=>handleChange(e)} className='input bg-light' type="text" />

       <button className='btn btn-primary mt-5 p-2'>Submit</button>
      </div>
     </form>
</div>
: null
   }
   </>
  )
}

export default AddVechileComponent








// <div className='row'>
//             <div className='col-12 bg-success'>
//                 <h3>Add your vechile</h3>
//             </div>
//         </div>
//         <div className='row'>
//             <div className='col'>
//                 <label htmlFor="">Name</label>
                
//             </div>
//         </div>