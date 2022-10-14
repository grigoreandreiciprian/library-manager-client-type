import React, { FormEvent } from 'react'
import Book from '../../models/BookModel';

import {useState, useEffect} from 'react'


interface Funtions {
  
  handleChanger: (title:string , author:string, gendre:string,year:number)=> void ;

  addBook: () => void;

}

const AddForm: React.FC <Funtions> = ({ handleChanger,addBook}:Funtions) => {

  const [title,setTitle] = useState("");
    
    const [author,setAuthor] = useState("")

    const [gendre,setGendre] = useState("")

    const [year,setYear]= useState(0)


 

    const onChange = (e: React.FormEvent<HTMLDivElement>) => {

        let obj=e.target as HTMLInputElement;

        if(obj.classList.contains("title")){
            setTitle(obj.value);
        }else if(obj.classList.contains("author")){

            setAuthor(obj.value)
        }else if(obj.classList.contains("gendre")){

            setGendre(obj.value)
        }else if(obj.classList.contains("year")){

            setYear(Number(obj.value))
        }

      
    }

    const onAddBook=(e: React.MouseEvent<HTMLButtonElement>)=>{
       addBook()
    }

    useEffect(()=>{

        handleChanger(title,author,gendre,year)

    },[title,author,gendre,year])

  return (
        <div className="form" onChange={onChange}>
        <h1>Add a new book</h1>

        <div className="inputs">
            <label htmlFor="title">Title</label>
            <input type="text" className="title"></input>
        </div>

        <div className="inputs">
          <label htmlFor="author">Author</label>
          <input type="text" className="author"></input>
      </div>


      <div className="inputs">
          <label htmlFor="gendre">Gendre</label>
          <input type="text" className="gendre"></input>
      </div>

      <div className="inputs">
          <label htmlFor="year">Year</label>
          <input type="number" className="year"></input>
      </div>

      <div className="buttons2">
          <button className="add btn2" onClick={onAddBook}>Add book</button>
          <button className="cancel btn2">Cancel</button>
      </div>
    </div>
  )
}

export default AddForm