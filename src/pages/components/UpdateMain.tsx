import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import UpdateBody from './UpdateBody'
import Data from '../../Api'
import Book from '../../models/BookModel'
import { useNavigate } from 'react-router-dom'

export const UpdateMain: React.FC  = () => {

  const [title,setTtile] = useState(String)
  const [author,setAuthor] = useState(String)
  const [gendre,setGendre] = useState(String)
  const [year,setYear] = useState(Number)

  const [book,setBook]=useState({

  })
  const id= Number(useParams().id);
  const Api= new Data()
  const navigate= useNavigate()

  const getBook = async () =>{
      
    const  response = await Api.getBooks();

    let books=response.data != undefined ?response.data:response;

     
    if(books as Book[]){
      books=books as Book[];
      for(let i=0;i<books.length;i++){

            
           if(books[i].id === id ){
             setBook(books[i]);

           }
    }   
 
  }}

  const updateBook = async () =>{

     const response = await Api.updateBook({id,title,author,gendre,year})

     if(response.status == 200){
      navigate("/")
      alert("Book updated succesful")
     }else{
      alert("Book update failed")
     }
  }

  useEffect(()=>{
       
      getBook()
   
  },[])


const handleChanger = (title:string,author:string,gendre:string,year:number) =>{
     
  setTtile(title)
  setAuthor(author)
  setGendre(gendre)
  setYear(year)
}
  return (
    <main>
      <UpdateBody  handleChanger={handleChanger} updateBook={updateBook} book={book} />
    </main>
  )
}



export default UpdateMain
