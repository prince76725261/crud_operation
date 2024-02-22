// import React, { useState } from 'react';
// import './LoginForm.css';
// import { FaUser } from 'react-icons/fa';
// import { RiLockPasswordFill } from 'react-icons/ri';
// import axios from 'axios';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5500/login', { username, password });
//       if (response.status === 200) {
//         window.location.href = '/Users';
//       } else {
//         console.log(error);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       // Handle errors like displaying error messages
//     }
//   };

//   return (
//     <div className="wrapper">
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <div className="input-box">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <FaUser className="icon" />
//         </div>
//         <div className="input-box">
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <RiLockPasswordFill className="icon" />
//         </div>
//         <button type="submit">Login</button>
//         <div className="register-link">
//           <p>
//             Don't Have An Account? <a href="./RegisterForm">Register</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


// import React, { useState } from 'react';
// import './LoginForm.css';
// import { FaUser } from 'react-icons/fa';
// import { RiLockPasswordFill } from 'react-icons/ri';
// import axios from 'axios';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5500/login', { username, password });
//       if (response.status === 200) {
//         window.location.href = '/Users';
//       } else {
//         setErrorMessage('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="wrapper">
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <div className="input-box">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <FaUser className="icon" />
//         </div>
//         <div className="input-box">
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <RiLockPasswordFill className="icon" />
//         </div>
//         <button type="submit">Login</button>
//         <div className="register-link">
//           <p>
//             Don't Have An Account? <a href="./RegisterForm">Register</a>
//           </p>
//         </div>
//         {errorMessage && (
//           <div className="popup">
//             <span className="popuptext">{errorMessage}</span>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginForm;



import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/login', { username, password});
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                window.location.href = '/Users';
            } else {
                setErrorMessage('Invalid username or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <RiLockPasswordFill className="icon" />
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>
                        Don't Have An Account? <a href="./RegisterForm">Register</a>
                    </p>
                </div>
                {errorMessage && (
                    <div className="popup">
                        <span className="popuptext">{errorMessage}</span>
                    </div>
                )}
            </form>
        </div>
    );
};

export default LoginForm;
