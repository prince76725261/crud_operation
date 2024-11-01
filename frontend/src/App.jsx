// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import ShowModal from './ShowModal'
import ShowModal2 from './ShowModal2'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './LoginForm/RegisterForm'

function App() {

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
          
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
