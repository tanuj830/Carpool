import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
const SettingComponent = () => {

const [userData, setUserData] = React.useState([])
const [image, setImage] = React.useState({preview:" ", data : ""})

useEffect(() => {
  
  var userid = JSON.parse(window.localStorage.getItem("userid"))
  axios.get("http://localhost:8000/settings",{params:
{
  id: userid
}})
.then(res=>setUserData(res.data)).catch(err=>console.log(err))
}, [])


const handleSubmit = (e) =>{

e.preventDefault()
  
let formData = new FormData()
    formData.append('file', image.data)

    console.log(userData._id)
    axios.put(`http://localhost:8000/settings/${userData._id}`, formData)
}

  const handleChange = (e) =>{
    const img={
      preview: URL.createObjectURL(e.target.files[0]),
    data: e.target.files[0],
    }
    setImage(img)
  }
  return (
    <div className='mt-5 p-5 d-flex justify-content-between'>
      
      <div>
      <div className='my-3 d-flex align-items-center'>
        <img  style={{borderRadius:1000, width:60}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="" />
          <h3 className='mx-2'>{userData.name}</h3>     
      </div>
    <label>Choose new profile picture:</label>
    <div className='my-3'>

    </div>
<form method='#' onSubmit={handleSubmit} enctype="multipart/form-data">
<input name="img" onChange={handleChange} type="file" />
<div>
<button className='mt-2 btn btn-outline-primary'>upload</button>
</div> 
  </form>     
      </div>

      <div className=''>
      <div className='d-flex align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
         </svg>
        <p className='text-primary mt-3 mx-2'>{userData.email}</p>
      </div>
      <div className='d-flex align-items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
        </svg>
      <p className='text-mutted mt-3 mx-2'>{userData.phone}</p>
      </div>
      </div>
  </div>
  )
}

export default SettingComponent