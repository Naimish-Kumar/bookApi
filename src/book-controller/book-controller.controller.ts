/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from 'src/book';
import { BookService } from 'src/book-service/book-service.service';

@Controller('books')
export class BookControllerController {


    constructor(private bookService:BookService){}

    @Post('/add')
     addBook(@Body()book:Book){
         return this.bookService.addBook(book);
     }

     @Put('/update')
     updateBook(@Body() book:Book):string{
         return this.bookService.updateBook(book);
     }

     @Delete('/delete/:id')
     deleteBook(@Param("id") bookId:string):string{
         return this.bookService.deleteBook(bookId);
     }

     @Get('/findAll')
     findAll(){
        return this.bookService.findAllBook();
     }
}
