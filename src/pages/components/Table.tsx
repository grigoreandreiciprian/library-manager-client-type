import React, { useEffect, useState } from 'react'
import Data from '../../Api'
import Book from '../../models/BookModel'

import TableBody from './TableBody'

import { useNavigate } from 'react-router-dom'




const Table: React.FC =  () =>  {

    const [books,setBooks] = useState(Object)

    const navigate = useNavigate()

    const [book,setBook] = useState(Object)

   

    const Api= new Data()

    useEffect(()=>{
        getBooks()
       })

   const getBooks = async () =>{

    let books= await Api.getBooks()

     setBooks(books)
   }

   



   

  return (
    <div className="table">
    <h1>Here is our fine selection of books</h1>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Gendre</th>
                <th>Year</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
        {
                books.length>0?(
                    books.map((e:Book) =>{
                        return ( <TableBody  book={e} key={e.id}/>)
                    })
                )
                :
                <p>We dont have books</p>
            }
     
           
        </tbody>        
    </table>
</div>

  )
}

export default Table