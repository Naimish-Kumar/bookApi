/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookControllerController } from './book-controller/book-controller.controller';
import { BookService } from './book-service/book-service.service';
@Module({
  imports: [],
  controllers: [BookControllerController],
  providers: [BookService],
  exports: []
})
export class RootModule {
  constructor(){
    console.log("App Module");
  }
  
 }
