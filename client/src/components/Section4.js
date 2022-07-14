import React,{useEffect} from 'react'
import axios from 'axios'
const Section4 = () => {
  

    const [data, setData] = React.useState([])
    const [Result, setResult] = React.useState([])

useEffect(() => {
  
    axios.get("http://localhost:8000").then(res=>setResult(res.data)).catch(err=>console.log(err))
    
}, [])

const handleSubmit=(e)=>{
    e.preventDefault()

    axios.post("http://localhost:8000",data).then(res=>console.log(res)).catch(err=>console.log(err))
}

const handleChange=(e)=>{
    const name = e.target.name
    const value = e.target.value

    setData({...data,[name]:value})
}

  return (
    <div className='container-fluid' style={{marginTop:2}}>
    
        <div className='my-5'>
        <div className='row'>
<div className='text-center'>
<p className='text-muted'>WHAT PEOPLE SAY ABOUT US!</p>

</div>

<div className='row p-5'>
{
    Result.map((i)=>(
        <div className='col-md-4 col-sm-6 bg-light my-1' key ={i._id}>
    <p>{i.customerReview}</p>
        </div>
    ))
}
</div>
<div className='text-center'>
<form action="post" onSubmit={handleSubmit}>
<input type="text" name="customerReview" onChange={handleChange} placeholder='Write review' />
<button>add review</button>
</form>
</div>
        </div>
        </div>
        <hr/>
    </div>
  )
}

export default Section4