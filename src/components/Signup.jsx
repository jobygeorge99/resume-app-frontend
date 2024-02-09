import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Signup = () => {


    const [data,setData]=new useState(
        {
        
            "name":"",
            "emailId":"",
            "phone":"",
            "age":"",
            "password":""
            
        
        }
    )

    const inputHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValues =()=>{
        axios.post("http://localhost:3001/api/user/signup",data).then((response)=>{
            console.log(response)
            if (response.data.status=="success") {
                alert("Added")
                setData(
                {
                    "name":"",
                    "emailId":"",
                    "phone":"",
                    "age":"",
                    "password":""
                }
                )
                
            } else {
                alert("Error!")
            }
        })

    }

  return (
    <div>
        <NavBar/>

        <div className="container">
            <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name='emailId' value={data.emailId} onChange={inputHandler} />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Phone</label>
                    <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Age</label>
                    <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler} />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Password</label>
                    <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler} />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 xl-12 col-xxl-12">

                    <button className="btn btn-success" onClick={readValues}>Submit</button>

                </div>
            </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Signup