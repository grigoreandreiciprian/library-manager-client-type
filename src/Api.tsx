import Book from "./models/BookModel";
import BookResponse from "./models/BookResponse";

export default class Data {
    api<T,U>(path:string, method = "GET", body:U, token:string):Promise<BookResponse<T>>{
      const url = "http://localhost:3020/api/v1" + path;
      const options:RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authentification": `Bearer${token}`
        },

        body:body==null?null:JSON.stringify(body)
        
      }

      return fetch(url, options);
    }


     getBooks = async ():Promise<BookResponse<Book[]>>=>{

        const response = await this.api<Book[],null>("/books", 'GET', null,"");


        return response.json()
    }


    addBook = async (book:Book) => {
       
      const response = await this.api<Book[],Book>("/books", 'POST', book,"")

      return response
    }

    updateBook = async(book:Book) =>{

      const response = await this.api<Book[],Book>(`/books/${book.id}`, 'PUT', book, "")

      return response
    }
}