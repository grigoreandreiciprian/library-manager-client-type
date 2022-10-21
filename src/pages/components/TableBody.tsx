import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Data from '../../Api';
import Book from '../../models/BookModel';
import {useState,useEffect} from "react"




interface BooksList {

    book:{id:number;title:string,author:string,gendre:string,year:number}
}

const TableBody: React.FC<BooksList> = props => {

    const book = props.book

    const navigate= useNavigate()

    const id = Number(useParams().id);

    const Api = new Data()

    const [books,setBooks] = useState(Object)
   

    const toUpdate = () =>{

      navigate(`/Update/${book.id}`)
    }

    const deleteBook =  async () =>{
        
      const  response = await Api.getBooks();

      let books=response.data != undefined ?response.data:response;
  
       
      if(books as Book[]){
        books=books as Book[];
        for(let i=0;i<books.length;i++){
  
              
             if(books[i].id === book.id ){
               await Api.deleteBook(book)
                setBooks(books)
             }
      }   
   
    }}

    useEffect(()=>{
       console.log("ceva")
    },[books])

    
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
        <button className="cancel btn3" onClick={deleteBook}>Delete</button>
        </td>
    </tr>

   

    </>
  )
}

export default TableBody