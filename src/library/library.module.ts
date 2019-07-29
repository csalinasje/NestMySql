import { Module } from '@nestjs/common';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book/book.entity';
import { AutorController } from './autor/autor.controller';
import { AutorService } from './autor/autor.service';
import { AutorEntity } from './autor/autor.entity';
import { SubjectController } from './subject/subject.controller';
import {  SubjectService } from './subject/subject.service';
import { SubjectEntity } from './subject/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    BookEntity, AutorEntity, SubjectEntity,
  ])],
  providers: [BookService, AutorService, SubjectService],
  controllers: [BookController, AutorController, SubjectController],
})
export class LibraryModule {}
