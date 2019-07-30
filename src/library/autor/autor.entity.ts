
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BookEntity } from '../book/book.entity';

@Entity('autor')
export class AutorEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @OneToMany( Type => BookEntity, book => book.autor )
    libro: string[];
}
