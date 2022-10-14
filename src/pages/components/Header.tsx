import React from 'react'

import { useState ,useEffect } from 'react'
import Data from '../../Api'

import Book from '../../models/BookModel'

const Header: React.FC = () => {

    const [books,setBooks] = useState(Object)

    const Api= new Data()

    useEffect(()=>{
        getBooks()
       },[])

   const getBooks = async () =>{

    let books= await Api.getBooks()

      setBooks(books)
   }


  return (
    <header>
    <nav>
        <div className="logo">
            <h1>Book Library</h1>
            <h2>Total books: {books.length}</h2>
        </div>
        <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Books</a>
            <a href="#">Contact</a>
        </div>
    </nav>
</header>
  )
}

export default Header