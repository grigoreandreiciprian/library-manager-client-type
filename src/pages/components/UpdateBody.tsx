import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Book from '../../models/BookModel';

interface Functions {

    handleChanger: (title:string,author:string,gendre:string,year:number,) => void

    updateBook: () => void

    book:object


}

export const UpdateBody: React.FC <Functions>  = ({handleChanger, updateBook,book}:Functions) => {
    const originBook = book as Book
    const navigate= useNavigate()
    const [title,setTitle] = useState(originBook.title)
    const [author,setAuthor] = useState(originBook.author)
    const [gendre,setGendre] = useState(originBook.gendre)
    const [year,setYear] = useState(originBook.year)

    const cancel = () =>{
        navigate("/")
    }

 



    const onChange = (e: React.FormEvent<HTMLDivElement>)=>{
        let obj= e.target as HTMLInputElement;

        if(obj.classList.contains("title")){
            setTitle(obj.value);
        }else if(obj.classList.contains("author")){

            setAuthor(obj.value)
        }else if(obj.classList.contains("gendre")){

            setGendre(obj.value)
        }else if(obj.classList.contains("year")){

            setYear(Number(obj.value))
        }

        console.log(title,author,gendre,year)
    }


    useEffect(()=>{
        handleChanger(title,author,gendre,year)
    },[title,author,gendre,year])




    
  return (
    <div className="form"  onChange={onChange}>
    <h1>Update your book</h1>

    <div className="inputs">
        <label htmlFor="title">Title</label>
        <input type="text" className="title" defaultValue={originBook.title}></input>
        
        
    </div>

    <div className="inputs">
      <label htmlFor="author">Author</label>
      <input type="text" className="author" defaultValue={originBook.author}></input>
  </div>


  <div className="inputs">
      <label htmlFor="gendre">Gendre</label>
      <input type="text" className="gendre" defaultValue={originBook.gendre}></input>
  </div>

  <div className="inputs">
      <label htmlFor="year">Year</label>
      <input type="number" className="year" defaultValue={originBook.year}></input>
  </div>

  <div className="buttons2">
      <button className="add btn2" onClick={updateBook}>Update</button>
      <button className="cancel btn2" onClick={cancel}>Cancel</button>
  </div>
</div>
  )
}


export default UpdateBody