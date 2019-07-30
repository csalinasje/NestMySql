import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { Repository } from 'typeorm';
import { BookDTO } from './book.dto';
import { AutorEntity } from '../autor/autor.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private bookRepository: Repository <BookEntity>,
        @InjectRepository(AutorEntity)
        private autorRepository: Repository <AutorEntity>,
    ) {}

    async showAll() {
        return await  this.bookRepository.find();
    }

    async create(data: any) {
        const libro = await this.bookRepository.create(data);
        await this.bookRepository.save(libro);
        const autor = await this.autorRepository.findOne({where: {id: data.autor}});
        if ( Array.isArray(autor.libro)) {
            autor.libro.push(data);
        }
        return libro;
    }

    async update(id: string, data: Partial <BookDTO>) {
        const libro = await this.bookRepository.findOne( {where: {id}});
        await this.bookRepository.update(id, data);
        return libro;
    }

    async read(id: string) {
        return await this.bookRepository.findOne({ where: {id}});
    }

    async delete( id: string) {
        const libro = await this.bookRepository.findOne( {where: {id}});
        await this.bookRepository.delete(id);
        return libro;
    }
}
