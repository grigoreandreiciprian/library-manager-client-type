import React from 'react'

import Header from './Header'

import Table from './Table'

import { useNavigate } from 'react-router-dom'


const Main: React.FC = () => {

  const navigate= useNavigate()

  const toAdd = () =>{

    navigate("/Add")
  }

  return (
    <main>
        <Header />
        <Table />

        <div className="buttons">
        <button className="add btn" onClick={toAdd}>Add book</button>
    </div>

   </main>

  )
}

export default Main