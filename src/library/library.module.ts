import { Module } from '@nestjs/common';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book/book.entity';
import { AutorController } from './autor/autor.controller';
import { AutorService } from './autor/autor.service';
import { AutorEntity } from './autor/autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    BookEntity, AutorEntity,
  ])],
  providers: [BookService, AutorService],
  controllers: [BookController, AutorController],
})
export class LibraryModule {}
