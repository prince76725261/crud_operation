// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import ShowModal from './ShowModal'
import UpdateUser from './UpdateUser'
import CreateUser from './CreateUser'
import ShowModal2 from './ShowModal2'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './LoginForm/RegisterForm'
// import CreateUser from './CreateUser'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
          <Route path='/LoginForm' element={<LoginForm />}></Route>
          <Route path='/login' element={<LoginForm />}></Route>
          <Route path='/RegisterForm' element={<RegisterForm />}></Route>
          <Route path='/Users' element={<Users />}></Route>
          <Route path='/create' element={<ShowModal />}></Route> 
          <Route path='/update/:id' element={<UpdateUser />}></Route>
          
      </Routes>
      {/* <CreateUser/> */}
      </BrowserRouter>
    </div>
  )
}

export default App
