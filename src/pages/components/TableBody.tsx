import React from 'react'
import { useNavigate } from 'react-router-dom';
import Book from '../../models/BookModel';

interface BooksList {

    book:{id:number;title:string,author:string,gendre:string,year:number}
}

const TableBody: React.FC<BooksList> = props => {

    const book = props.book

    const navigate= useNavigate()

    const toUpdate = () =>{

      navigate(`/Update/${book.id}`)
    }

    
  return (
    <>
    
   
    <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.gendre}</td>
        <td>{book.year}</td>
        <td> 
            <button className="add btn3" onClick={toUpdate} >Update</button>
        </td>

        <td>
        <button className="cancel btn3">Delete</button>
        </td>
    </tr>

   

    </>
  )
}

export default TableBody