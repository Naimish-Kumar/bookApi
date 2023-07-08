/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable} from '@nestjs/common';
import { Book } from 'src/book';

@Injectable()
export class BookService {
    public books:Book[] = [];
    
    addBook(book:Book):string{
        this.books.push(book);
        return 'Book has been successfully added.';
    }

   
    updateBook(book:Book):string{
        let index = this.books.findIndex((currentBook)=>{
            return currentBook.id==book.id;
        });
        this.books[index] = book;
        return 'Book is updated';
    }
   
    findAllBook():Book[]{
        return this.books;
    }

    
    deleteBook(bookId:string):string{
        this.books = this.books.filter((curr)=>{
            return curr.id != bookId;
        });
        
        return 'Book is deleted';
    }



    
}
