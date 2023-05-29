import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Contact from './pages/contact/Contact';
import './App.css';
import AddContact from './pages/addContact/AddContact';
import EditContact from './pages/editContact/EditContact';
import { useDispatch } from 'react-redux';
import { gettingContact } from './Redux/action';

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(gettingContact())
  },[dispatch])
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Sidebar />}>
          <Route path='' element={<Contact />} />
          <Route path='contact' element={<Contact />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='addContact' element={<AddContact />} />
          <Route path='editContact/:id' element={<EditContact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App