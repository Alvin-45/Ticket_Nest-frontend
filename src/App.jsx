import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Bookinng from './pages/Bookinng'
import Home from './pages/Home'
import Movies from './pages/Movies'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/booking' element={<Bookinng/>}></Route>
      <Route path='/movies' element={<Movies/>}></Route>
      </Routes>
        
    </>
  )
}

export default App
