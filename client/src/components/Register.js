import React from 'react'
import axios from "axios"


const Register = () => {

const [data, setData] = React.useState([])

const handleChange=(e)=>{
const value = e.target.value
const name = e.target.name

setData({...data,[name]:value})
}

const handleSubmit=(e)=>{
  e.preventDefault()

  axios.post("http://localhost:8000/signin/register", data).then(res=>console.log(res.data)).catch(err=>console.log(err))
}

  return (
    <div className="mt-5">
    <div className="d-flex justify-content-center">
      <div className="p-5 shadow" style={{ borderRadius: 10 }}>
        <div className="text-center">
          <h1>
            {" "}
            <b>Register</b>
          </h1>
          <hr />
        </div>
        <form
          className=" mt-4 d-flex-column text-center"
          action="post"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              name="name"
              className="mt-3 px-2 w-100"
              placeholder="Name"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              name="email"
              className="mt-3 px-2 w-100"
              placeholder="E-mail"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              name="phone"
              className="mt-3 px-2 w-100"
              placeholder="phone"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className="mt-3 d-flex flex-column">
            <div>
              {/* <label className="mx-2">Password</label> */}
              <input
                type="text"
                className="px-2 w-100"
                placeholder="Password"
                name="password"
                autoComplete="off"
                onChange={handleChange}
              />

            </div>
            <div></div>
            {/* {               
                        userExist ? 
              <h6 className="text-danger">Username not available</h6>
              
            : null
        } */}
     
         
            <button className=" mt-3 btn-outline-dark btn-primary btn text-light">
              Register
            </button>
          </div>

          
        </form>
      </div>
    </div>
  </div>

    )
}

export default Register