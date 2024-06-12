import React from 'react'
import logo from './crm.jpg'
import './getStarted.css'
import { Link } from 'react-router-dom'

function GetStarted() {
  return (
    <div>
      <div className="flex justify-center   w-full  items-center ">
        <div className="w-full  bg-white p-16 rounded-lg custom-shadow grid grid-cols-2 gap-10" style={{height:600}}>
          <div>
            <h1 className="text-4xl font-bold mb-5 mt-10 -ml-96">CRM System</h1>
            <p className="mb-5 pl-10">Empower your business with our seamless CRM system, designed to streamline customer interactions and boost productivity. Transform every customer touchpoint into a growth opportunity!</p>
            <Link to={'/home'} className="px-5 ml-10 py-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600">Get Started</Link>
          </div>
          <div className="relative ">
            <img src={logo} alt="CRM System"
            className="absolute top-0 left-0 w-11/12 h-5/6 object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
