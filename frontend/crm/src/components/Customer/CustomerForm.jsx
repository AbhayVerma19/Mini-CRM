import React, { useState } from "react";
import logo from "../../logo.jpg";
import './customer.css'
import axios from "axios";
const CustomerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id,setId]=useState("")

  const handleSubmit = async () => {
    try {
      const bodyjson={
        name:name,
        email:email
    }
    console.log(bodyjson)
      await axios.post("https://mini-crm-js0c.onrender.com/api/customer" , bodyjson).then((res)=>{
        console.log(res)
        setId(res.data)
        alert("Customer created successfully. Please note your Id");
      })
      setName("");
      setEmail("");
    } catch (error) {
      alert("Error creating customer. Please check for proper inputs")
      console.error("Error creating customer:", error);
    }
  };

  return (
    <>
    

      <div>
        <section className=" abcadmin w-full flex h-screen ">
          <div className="w-full max-w-xs m-auto bg-indigo-200 rounded p-5">
            <header>
              <img className=" imageinterarea mb-4 mx-auto " alt="" src={logo} />
            </header>
            <h2 className="text-xl w-full font-bold mb-6 text-center">Customer Registration</h2>

            <div>
              <label className=" abcadmin2 block mb-2 " htmlFor="name">
                Username
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                className="abcadmin2 w-full p-2 mb-6 border-b-2  outline-none focus:bg-gray-100"
              />
            </div>
            <div>
              <label className=" abcadmin2 block mb-2 " htmlFor="email">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" abcadmin2 w-full p-2 mb-6 border-b-2  outline-none focus:bg-gray-100"
                type="email"
                id="email"
                name="password"
              />
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className=" abcadmin1 w-full  font-bold py-2 px-4 mb-6 rounded"
              >
                Submit
              </button>
            </div>
              <div className="flex w-full bg-white justify-center  rounded-md">
              <div className= "  justify-center">
             {id}
              </div>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomerForm;
