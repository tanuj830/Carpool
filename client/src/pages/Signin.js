import React from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
const Signin = () => {


    const [userInfo, setUserInfo] = React.useState({})
    const [user, setUser] = React.useState(false)

    const [result, setResult] = React.useState({})
    const handleSubmit = (e) =>{ 
        e.preventDefault();
        axios.post("http://localhost:8000/signin",userInfo).then(res=> setResult(res.data)).catch(err=>(console.log(err)))
// console.log("tanuj")

}
const navigate = useNavigate()
useEffect(() => {
        console.log(result._id)
        window.localStorage.setItem("userid",JSON.stringify(result._id))

        // if user exist then do this, vice versa
        if(result._id)
        {
            const t = "true";
            window.localStorage.setItem("isLogin",JSON.stringify(t))
            navigate("/");
        }
        else{
            const f = "false"
            window.localStorage.setItem("isLogin",JSON.stringify(f))

        }
    }, [result])
    

    const handleChange = (e) =>{

        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({...userInfo,[name]:value})
    }

  return (
    <div>
        <form action="post" onSubmit={handleSubmit}>
            <div>
                <input type="text" name='email' onChange={handleChange} placeholder='E-mail' />
                <input type="text" name='password' onChange={handleChange} placeholder='Password' />
                <button> Submit </button>
            </div>
               <div>
               <Link to="/signin/register">create account </Link>
               </div>
        </form>
    </div>
  )
}

export default Signin