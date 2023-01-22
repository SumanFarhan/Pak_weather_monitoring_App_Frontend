import React from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashobaord from './components/Dashobaord'
import io from 'socket.io-client'
const socket = io("http://localhost:3007/");
    console.log(socket)
    // socket.emit('weather-data', (data) => {
    // console.log(data)
    //   });

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}> </Route>
            <Route path="/dashboard" element={<Dashobaord  socket={socket}/>}> </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App