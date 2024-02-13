import React,{useState,Component} from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import Modal from 'react';

 

const handleClick = (Roll) => {
    Swal.fire({
  icon: "success",
  title: "🥰",
  text: "Added Successfully!",
  footer: '<a href="#">You Have been added?</a>'
});
// Swal.getConfirmButton('td.warning input').addEventListener('click', function () {
//     // console.log('hii')
//      navigate('/')
//   })
}



 


function CreateUser() {
    const [Roll, setRoll] = useState()
    const [Name, setName] = useState()
    const [semester, setSemester] = useState()
    const [Branch, setBranch] = useState()
    const navigate = useNavigate();
    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5500/CreateUser/", { Roll, Name, semester, Branch })
            .then(result => {
                console.log(result)
                // handleClick(Roll)
                // console.log("ab bol na ")
                 navigate('/')
    })
    .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
        
        <form onSubmit={Submit}>
    
    <h1>Add New User</h1>

   <div className="form-group">
    <label htmlFor="ROLL_NUMBER">Roll Number</label>
    <input type="number" className="form-control"  id="roll" aria-describedby="roll_number" placeholder="Enter Your Roll Number"  onChange={(e) => setRoll(e.target.value)} autoComplete="off"/>
    <small id="roll" className="form-text text-muted"></small>
    </div>

        <br></br>    

   <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="string" className="form-control"  id="name" aria-describedby="name" placeholder="Enter Your Full Name" onChange={(e) => setName(e.target.value)} autoComplete="off"/>
    <small id="name" className="form-text text-muted"></small>
    </div>
    <br></br>
    <div className="form-group">
    <label htmlFor="semester">Semester</label>
    <input type="number" className="form-control"  id="semester" aria-describedby="semester" placeholder="Enter Semester" autoComplete="off" onChange={(e) => setSemester(e.target.value)}/>
    <small id="semester" className="form-text text-muted"></small>
    </div>
    
            <br></br>
    
   <div className="form-group">
    <label htmlFor="branch">Branch</label>
    <input type="string" className="form-control" id="branch" aria-describedby="branch" placeholder="Enter Your Branch" autoComplete="off" onChange={(e) => setBranch(e.target.value)}/>
    <small id="branch" className="form-text text-muted"></small>
    </div>

{/* 
   <div className="form-group">
     <label htmlFor="exampleInputPassword1">Password</label>
     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
             */}

            <br>
            </br>

<div className="form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label" htmlFor="exampleCheck1">Check details correctly</label>
</div>

      <br></br>      
  <button type="submit" class="btn btn-primary" onClick={()=>handleClick(Roll)}>Create</button>
                </form>
            </div>
</div>            
    )
}

export default CreateUser;