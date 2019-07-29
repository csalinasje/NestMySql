import { Entity, Column, ManyToMany, PrimaryGeneratedColumn, JoinTable } from 'typeorm';
import { BookEntity } from '../book/book.entity';

@Entity('subject')
export class SubjectEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @ManyToMany( type => BookEntity)
    @JoinTable()
    libro: BookEntity[];
}
