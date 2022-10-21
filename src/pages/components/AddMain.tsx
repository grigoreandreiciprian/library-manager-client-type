import React, { useEffect, useState } from 'react'
import Data from '../../Api'

import AddForm from './AddForm'

import { useNavigate } from 'react-router-dom'

const AddMain = () => {

    const [title, setTitle] = useState(String)
    const [author,setAuthor] = useState(String)
    const [gendre,setGendre]= useState(String)
    const[year, setYear] = useState(Number)
    const [id,setId] = useState(Number)
    const Api= new Data()
    const navigate= useNavigate()

    const randomId = () =>{
          
        let id = Math.floor(Math.random()*999+1)

         setId(id)
    }

    useEffect(()=>{
      randomId()
    },[])



    const handleChanger = (title:string,author:string,gendre:string,year:number) =>{
      
        setTitle(title)
        setAuthor(author)
        setGendre(gendre)
        setYear(year)
    }

    const addBook = async () =>{
        
        const response = await Api.addBook({id,title,author,gendre,year})

        if(response.status == 200){
           navigate("/")
           alert("Book add succesful")
        }else{
          alert("completati toate campurile")
        }
    }

  return (
    <main>
      <AddForm  handleChanger={handleChanger} addBook={addBook}/>
    </main>
  )
}

export default AddMain