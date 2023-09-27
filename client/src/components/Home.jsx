import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
     <Link to="/buyer">Buyer</Link>
     <Link to="/create">Seller</Link>
    </div>
  )
}

export default Home
