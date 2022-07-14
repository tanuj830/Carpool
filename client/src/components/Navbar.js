import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/navbar.css"
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const [user, setUser] = useState("")


  useEffect(() => {
  const userLogin = JSON.parse(window.localStorage.getItem("isLogin"))
    setUser(userLogin)  
    
  },[user])
  
  return (
    <nav className="  navbar navbar-light navbar-expand-sm object-fluid bg-light">
      <div className="container-fluid">
        <Link className="" to="/">
          <h4>
            <b className="text-dark">
              Carpool
            </b>
          </h4>
        </Link>

        <button
          className="ms-auto navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#id1"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse  d-flex justify-content-between"
          style={{ marginLeft: 200 }}
          id="id1"
        >
          <span>
            <ul className="navbar-nav text-center">
              <li className="navbar-item mx-2">
                <Link
                  to="/aboutus"
                  className="hov text-decoration-none text-dark"
                >
                  About Us
                </Link>
              </li>
              <li className="navbar-item mx-2">
                <Link to="/addvechile" className="hov text-decoration-none text-dark">
                  Add vechile
                </Link>
              </li>
              <li className="navbar-item mx-2">
                <Link
                  to="/search"
                  className="hov text-decoration-none text-dark"
                >
                  Search destinantion
                </Link>
              </li>

              
            </ul>
          </span>
          <span className="navbar-item d-flex">
              <ul className="navbar-nav text-center">
             {
              user === "true" ?  <li className="navbar-item mx-3 ">
              <Link
                to="/signin"
                className="hov text-decoration-none text-dark"
              >
                Sign-out
              </Link>
            </li>
            :
            <li className="navbar-item mx-3 ">
            <Link
              to="/signin"
              className="hov text-decoration-none text-dark"
            >
              Sign-in
            </Link>
          </li>
             }
           <li>
           <Link to="/settings" className="hov text-decoration-none">
              Settings
            </Link>
           </li>
              </ul>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
