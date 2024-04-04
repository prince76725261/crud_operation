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
    
            const contentType = res.headers['Content-Type'] || 'image/jpeg'||'video'||'gif';
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
                                        {/* {imageUrl && <img src={imageUrl} alt="Profile Picture" />} */}
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
