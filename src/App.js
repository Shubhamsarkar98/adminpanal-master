import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Home from './pages/Home'
import Student from './pages/Student'
import Teacher from './pages/Teacher'
import Employer from './pages/Employer'
import PageNot from './pages/PageNot'
import AddUser from './pages/AddUser'
import Edit from './pages/Edit'


const App = () => {
  return (
    <>
    <BrowserRouter>
    
     <Routes>
      <Route path='/' exect element={<Home/>}></Route>
      <Route path='/student'  element={<Student/>}></Route>
      <Route path='/teacher'  element={<Teacher/>}></Route>
      <Route path='/Employer' element={<Employer/>}></Route>
      <Route path='/student/add' element={<AddUser/>}></Route>
      <Route path='/student/edit/:id' element={<Edit/>}></Route>
      <Route path='*' element={<PageNot/>}></Route>
     </Routes>
     <ToastContainer />
    </BrowserRouter>
    </>
  )
}

export default App