import { Controller, Get, Post, Param, Delete, Put, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './book.dto';
import { Autor } from '../autor/autor.decorator';

@Controller('book')
export class BookController {
    constructor(
        private bookService: BookService,
        ) {}
    @Get()
    showAll() {
      return  this.bookService.showAll();
   }

   @Get(':index')
   findOne(@Param('index') index) {
       return this.bookService.read(index);
   }

   @Post()
   create( @Body() libroDTO: BookDTO) {
       return this.bookService.create( libroDTO);
   }

   @Delete(':id')
   delete(@Param( 'id') id) {
       return this.bookService.delete( id);
   }

   @Put(':id')
   update(@Body() updtaLibroDTO: BookDTO, @Param('id') id) {
       return this.bookService.update( id, updtaLibroDTO);
   }

}
