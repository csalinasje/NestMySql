
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';

@Entity('libro')
export class BookEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @ManyToOne( Type => AutorEntity, autor => autor.libro)
    autor: AutorEntity;
}
