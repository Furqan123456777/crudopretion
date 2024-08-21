import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Createuser from './Createuser'
import EditUser from './EditUser'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="createuser" element={<Createuser />} />
      <Route path="EditUser/:id" element={<EditUser />} />
    </Routes>
  )
}

export default App