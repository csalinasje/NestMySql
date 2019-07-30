import { Controller, Get, Post, Param, Delete, Put, Body, UsePipes } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './book.dto';
import { BookEntity } from './book.entity';
import { ValidationPipe } from '../../shared/validation.pipe';

@Controller('book')
export class BookController {

    constructor(private bookService: BookService) {
    }

    @Get()
    showAll(): Promise<BookEntity[]> {
      return this.bookService.showAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string): Promise<BookEntity> {
       return this.bookService.read(id);
   }

   @Post()
   @UsePipes(new ValidationPipe())
   create( @Body() libroDTO: BookDTO): Promise<BookEntity[]> {
       return this.bookService.create(libroDTO);
   }

   @Delete(':id')
   delete(@Param( 'id') id: string): Promise<BookEntity> {
       return this.bookService.delete( id);
   }

   @Put(':id')
   @UsePipes(new ValidationPipe())
   update(@Body() updtaLibroDTO: Partial<BookDTO>, @Param('id') id: string): Promise<BookEntity> {
       return this.bookService.update( id, updtaLibroDTO);
   }

}
