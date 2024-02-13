import React, { useState, Component } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Users.css'

import Modal from 'react';




const handleClick = (Roll) => {
    Swal.fire({
        icon: "success",
        title: "🥰",
        text: "Added Successfully!",
        footer: '<a href="#">You Have been added?</a>'
    });
    Swal.getConfirmButton('td.warning input').addEventListener('click', function () {
        window.location.reload();

    })
}


// function handleClick(Roll) {
//     Swal.fire({
//         icon: "success",
//         title: "🥰",
//         text: "Added Successfully!",
//         footer: '<a href="#">You have been added?</a>',
//     }).then((result) => {
//         if (result.isConfirmed) {
//             closeModal();
//         }
//     });
// }






function ShowModal() {
    const [Roll, setRoll] = useState()
    const [Name, setName] = useState()
    const [semester, setSemester] = useState()
    const [Branch, setBranch] = useState()
    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5500/ShowModal/", { Roll, Name, semester, Branch })
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
    }
    return (

        <div className='wrapped2'>
            <div className='wrapped-2'>

                <form onSubmit={Submit}>

                    <h1>Add New User</h1>

                    <div className="form-group">
                        <label htmlFor="ROLL_NUMBER">Roll Number</label>
                        <input type="number" className="form-control" id="roll" aria-describedby="roll_number" placeholder="Enter Your Roll Number" autoComplete="off" onChange={(e) => setRoll(e.target.value)} />
                        <small id="roll" className="form-text text-muted"></small>
                    </div>

                    <br></br>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="string" className="form-control" id="name" aria-describedby="name" placeholder="Enter Your Full Name" autoComplete="off" onChange={(e) => setName(e.target.value)} />
                        <small id="name" className="form-text text-muted"></small>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="semester">Semester</label>
                        <input type="number" className="form-control" id="semester" aria-describedby="semester" placeholder="Enter Semester" autoComplete="off" onChange={(e) => setSemester(e.target.value)} />
                        <small id="semester" className="form-text text-muted"></small>
                    </div>

                    <br></br>

                    <div className="form-group">
                        <label htmlFor="branch">Branch</label>
                        <input type="string" className="form-control" id="branch" aria-describedby="branch" placeholder="Enter Your Branch" autoComplete="off" onChange={(e) => setBranch(e.target.value)} />
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

                    {/* <div className="form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label" htmlFor="exampleCheck1">Check details correctly</label>
</div> */}

                    <br></br>
                    <button type="submit" className="btn btn-primary" onClick={() => { handleClick(Roll); }}>Create</button>



                </form>
            </div>
        </div>
    )
}

export default ShowModal;