import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import './Users.css'
// import { useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'
import MyModal  from "./ShowModal";
import MyModal2  from "./ShowModal2";
import ShowModal2 from "./Modal2";




const handleClick = (Roll) => {
    Swal.fire({
        icon: "error",
        title: "🥺",
        text: "Removed Successfully!",
        footer: '<a href="#">You Have been removed?</a>'
    });
}
const showpopup = (Roll) => {
    var swal = Swal;
    swal.fire({
        icon: "error",
        title: "😔",
        text: "Click Ok to Delete!",
        footer: '<a href="#">You Have been removed?</a>'
        // navigate('/')
    }
    );
    swal.getConfirmButton('td.warning input').addEventListener('click', function () {
        console.log('hii')

        window.location.reload();
    })
}


function Users() {
    

    const handleUpdate=(userid, roll, name, semester, branch)=>{
        setShowModal2(true);
        setUserIdUpdate(userid);
        setUserNameUpdate(name);
        setSemesterUpdate(semester);
        setUserBranchUpdate(branch);
        setUserRollUpdate(roll);
    };


    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5500')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5500/deleteUser/' + id)
            .then(res => {
                console.log(res)
                showpopup(id);
            })
            .catch(errr => console.log(errr));
    }


    const [ShowModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    
    const [ShowModal2, setShowModal2] = useState(false);
    const closeModal2 = () => setShowModal2(false);
    const [userIdUpdate, setUserIdUpdate] = useState("");
    const [userRoll, setUserRollUpdate] = useState("");
    const [userName, setUserNameUpdate] = useState("");
    const [usersemester, setSemesterUpdate] = useState("");
    const [userbranch, setUserBranchUpdate] = useState("");
    return (
        <div className='wrapped1'>
            <div className='wrapped-1'>

        {/* <Link to="/create" className='btn btn-success'>Add_User +</Link> */}

                <button className='btn btn-success' onClick={(e) => setShowModal(true)}>Add_User</button>{
                    ShowModal && <MyModal closeModal={closeModal} />
                }

              { ShowModal2 && < MyModal2 userIdUpdate={userIdUpdate} Roll={userRoll} Name={userName} semester={usersemester} Branch={userbranch} closeModal={closeModal2} />}

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Roll</th>
                            <th>Name</th>
                            <th>semester</th>
                            <th>Branch</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr key={user.Roll}>
                                    <td>{user.Roll}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.semester}</td>
                                    <td>{user.Branch}</td>
                                    <td>

                                    {/* <Link to={`/update/${user._id}`} onClick={() => setShowModal(true)} className='btn btn-success'>Update_User</Link> */}
                                      
                                    {/* <button className='btn btn-success' onClick={(e) => {setShowModal(true);{`/update/${user._id}`};}}>Update_User</button>{
                    ShowModal && <MyModal closeModal={closeModal} />
                } */}
                                        
                                        <button className='btn btn-success' onClick={(e) => {handleUpdate(user._id,user.Roll, user.Name, user.semester,user.Branch)}}>Update User</button>

                                        {/* <Link to={`/update/${user._id}`} className='btn btn-success'>Update User</Link> */}

                                        

{/* <button className='btn btn-success' onClick={handleClick}> Update User </button>
{ShowModal2 && <MyModal2 userId={user._id} closeModal={() => setShowModal(false)} />} */}

                                        <button className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Remove User</button>
                                        {/* <button className='btn btn-danger' onClick={()=>handleClick(Roll)}>Remove User</button> */}

                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>


            </div>
        </div>
    )
    
}
export default Users;