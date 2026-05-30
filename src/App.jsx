import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './assets/Layout/Layout'
import Home from './assets/pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App