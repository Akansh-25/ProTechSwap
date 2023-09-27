import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Buyer from './components/Buyer'
import Seller from './components/Seller'
import Buy from './components/Buy'
import Home from './components/Home'
import Registration from './components/Registration/Registrationn'

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/buyer" element={<Buyer />}></Route>
          <Route path="/create" element={<Seller />}></Route>
          {/* <Route path="/buy" element={<Buy />}></Route> */}
          {/* <Route path="/register/:_id" element={<Registration />}></Route> */}
          <Route path="/buy/:id" element={<Buy />} />
          <Route path="/register" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
