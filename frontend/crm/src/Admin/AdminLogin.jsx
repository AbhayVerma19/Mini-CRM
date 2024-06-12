import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./admin.css"
import logo from "../logo.png";
function AdminLogin() {
    const [username,setusername]=useState("")
    const [password,setPassword]=useState("")
const navigate=useNavigate()
    const LoginAdmin= async()=>{
if (username===""||password==="") {
    alert("fill the blanks")
}
else{
    const bodyjson={
        username:username,
        password:password
    }
    axios.post("http://localhost:5000/api/admin",bodyjson).then((res)=>{
        console.log(res,"data is send")
        alert("success")
        navigate("/adminpanel")
    }).catch((err)=>{
        console.log(err)
    })
}
    }
  return (
    <div>
      <section className=" abcadmin flex h-screen ">
        <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
          <header>
            <img className=" imageinterarea mb-5 mx-auto " src={logo} />
          </header>
          <h2 className="text-3xl font-bold mb-8 text-center">Admin Login</h2>
          
            <div>
              <label className=" abcadmin2 block mb-2 " htmlFor="name">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                id="name"
                name="name"
                className="abcadmin2 w-full p-2 mb-6 border-b-2  outline-none focus:bg-gray-100"
              />
            </div>
            <div>
              <label className=" abcadmin2 block mb-2 " htmlFor="pass">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" abcadmin2 w-full p-2 mb-6 border-b-2  outline-none focus:bg-gray-100"
                type="password"
                id="pass"
                name="password"
              />
            </div>
            <div>
              <button
                onClick={LoginAdmin}
                className=" abcadmin1 w-full  font-bold py-2 px-4 mb-6 rounded"

              >
                Login
              </button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AdminLogin