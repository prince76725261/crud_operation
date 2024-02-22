// import React, { useEffect, useState } from "react"
// import { Link } from "react-router-dom";
// import axios from "axios";
// import './Users.css'
// // import { useNavigate } from 'react-router-dom'

// import Swal from 'sweetalert2'
// import MyModal  from "./ShowModal";
// import MyModal2  from "./ShowModal2";
// import ShowModal2 from "./Modal2";




// const handleClick = (Roll) => {
//     Swal.fire({
//         icon: "error",
//         title: "🥺",
//         text: "Removed Successfully!",
//         footer: '<a href="#">You Have been removed?</a>'
//     });
// }
// const showpopup = (Roll) => {
//     var swal = Swal;
//     swal.fire({
//         icon: "error",
//         title: "😔",
//         text: "Click Ok to Delete!",
//         footer: '<a href="#">You Have been removed?</a>'
//         // navigate('/')
//     }
//     );
//     swal.getConfirmButton('td.warning input').addEventListener('click', function () {
//         console.log('hii')

//         window.location.reload();
//     })
// }


// function Users() {
    

//     const handleUpdate=(userid, roll, name, semester, branch)=>{
//         setShowModal2(true);
//         setUserIdUpdate(userid);
//         setUserNameUpdate(name);
//         setSemesterUpdate(semester);
//         setUserBranchUpdate(branch);
//         setUserRollUpdate(roll);
//     };


//     const [users, setUsers] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:5500')
//             .then(result => setUsers(result.data))
//             .catch(err => console.log(err))
//     }, [])

//     const handleDelete = (id) => {
//         axios.delete('http://localhost:5500/deleteUser/' + id)
//             .then(res => {
//                 console.log(res)
//                 showpopup(id);
//             })
//             .catch(errr => console.log(errr));
//     }


//     const [ShowModal, setShowModal] = useState(false);
//     const closeModal = () => setShowModal(false);

    
//     const [ShowModal2, setShowModal2] = useState(false);
//     const closeModal2 = () => setShowModal2(false);
//     const [userIdUpdate, setUserIdUpdate] = useState("");
//     const [userRoll, setUserRollUpdate] = useState("");
//     const [userName, setUserNameUpdate] = useState("");
//     const [usersemester, setSemesterUpdate] = useState("");
//     const [userbranch, setUserBranchUpdate] = useState("");
//     return (
//         <div className='wrapped1'>
//             <div className='wrapped-1'>

//         {/* <Link to="/create" className='btn btn-success'>Add_User +</Link> */}

//                 <button className='btn btn-success' onClick={(e) => setShowModal(true)}>Add_User</button>{
//                     ShowModal && <MyModal closeModal={closeModal} />
//                 }

//               { ShowModal2 && < MyModal2 userIdUpdate={userIdUpdate} Roll={userRoll} Name={userName} semester={usersemester} Branch={userbranch} closeModal={closeModal2} />}

//                 <table className='table'>
//                     <thead>
//                         <tr>
//                             <th>Roll</th>
//                             <th>Name</th>
//                             <th>semester</th>
//                             <th>Branch</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             users.map((user) => {
//                                 return <tr key={user.Roll}>
//                                     <td>{user.Roll}</td>
//                                     <td>{user.Name}</td>
//                                     <td>{user.semester}</td>
//                                     <td>{user.Branch}</td>
//                                     <td>

//                                     {/* <Link to={`/update/${user._id}`} onClick={() => setShowModal(true)} className='btn btn-success'>Update_User</Link> */}
                                      
//                                     {/* <button className='btn btn-success' onClick={(e) => {setShowModal(true);{`/update/${user._id}`};}}>Update_User</button>{
//                     ShowModal && <MyModal closeModal={closeModal} />
//                 } */}
                                        
//                                         <button className='btn btn-success' onClick={(e) => {handleUpdate(user._id,user.Roll, user.Name, user.semester,user.Branch)}}>Update User</button>

//                                         {/* <Link to={`/update/${user._id}`} className='btn btn-success'>Update User</Link> */}

                                        

// {/* <button className='btn btn-success' onClick={handleClick}> Update User </button>
// {ShowModal2 && <MyModal2 userId={user._id} closeModal={() => setShowModal(false)} />} */}

//                                         <button className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Remove User</button>
//                                         {/* <button className='btn btn-danger' onClick={()=>handleClick(Roll)}>Remove User</button> */}

//                                     </td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
//                 </table>


//             </div>
//         </div>
//     )
    
// }
// export default Users;




import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import './Users.css';
import MyModal from "./ShowModal";
import MyModal2 from "./ShowModal2";
import MyModal3 from "./ShowModal3";

import { v4 as uuidv4 } from 'uuid';
// import { countDocuments } from "../../backend/models/Users";



function Users() {
    const [users, setUsers] = useState([]);
    const [ShowModal, setShowModal] = useState(false);
    const [ShowModal2, setShowModal2] = useState(false);
    const [ShowModal3, setShowModal3] = useState(false);
    const [userIdUpdate, setUserIdUpdate] = useState("");
    const [userRoll, setUserRollUpdate] = useState("");
    const [userName, setUserNameUpdate] = useState("");
    const [usersemester, setSemesterUpdate] = useState("");
    const [userbranch, setUserBranchUpdate] = useState("");
    const [file, setFile] = useState("");
    const [fileUrl, setFileUrl] = useState('');


    useEffect(() => {
        axios.get('http://localhost:5500')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, []);


    useEffect(() => {
        axios.get('http://localhost:5500/api/users')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, []);


    const handleUpdate = (userid, roll, name, semester, branch) => {
        setShowModal2(true);
        setUserIdUpdate(userid);
        setUserNameUpdate(name);
        setSemesterUpdate(semester);
        setUserBranchUpdate(branch);
        setUserRollUpdate(roll);
    };

    const handleDelete = (id) => {
        axios.delete('http://localhost:5500/deleteUser/' + id)
            .then(res => {
                Swal.fire({
                    icon: "error",
                    title: "🥺",
                    text: "Removed Successfully!",
                    footer: '<a href="#">You Have been removed?</a>'
                }).then(() => window.location.reload());
            })
            .catch(errr => console.log(errr));
    }

    const closeModal = () => setShowModal(false);
    const closeModal2 = () => setShowModal2(false);
    const closeModal3 = () => setShowModal3(false);
 


    const handleImg = async (uuid) => {
        try {
            const res = await axios.get(`http://localhost:5500/api/image/${uuid}`, {
                responseType: 'arraybuffer'
            });
            console.log(res.data);
    
            const contentType = res.headers['Content-Type'] || 'image/jpeg';
            const blob = new Blob([res.data], { type: contentType });
    
            console.log(blob);
            const imageUrl = URL.createObjectURL(blob);
            console.log(imageUrl);
    
            window.open(imageUrl, '_blank');
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <div className='wrapped1'>
            <div className='wrapped-1'>
                <button className='btn btn-success' onClick={() => setShowModal(true)}>Add User</button>
                {ShowModal && <MyModal closeModal={closeModal} />}
                {ShowModal2 && <MyModal2 userIdUpdate={userIdUpdate} Roll={userRoll} Name={userName} semester={usersemester} Branch={userbranch} closeModal={closeModal2} />}
                <button style={{ position: 'fixed', top: '30px', right: '40px' }} className='btn btn-danger' onClick={() => window.location.href = '/login'}>Logout</button>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Roll</th>
                            <th>Name</th>
                            <th>Semester</th>
                            <th>Branch</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.Roll}>
                                    <td>{user.Roll}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.semester}</td>
                                    <td>{user.Branch}</td>
                                    
                                    <td>
                                        <button className='btn btn-success' onClick={() => handleUpdate(user._id, user.Roll, user.Name, user.semester, user.Branch)}>Update User</button>
                                        <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Remove User</button>          
                                        <button className='btn btn-info' onClick={() => handleImg(user.profilePic.uuid)}>profile_Picture</button>
                                        {/* <button className='btn btn-info' onClick={() => handleImg(user._id)}>View Profile Picture</button> */}
                                        {/* {ShowModal3 && <MyModal3 imageUrl={fileUrl} setShowModal3={setShowModal3} />} Pass setShowModal3 to the modal component */}

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
