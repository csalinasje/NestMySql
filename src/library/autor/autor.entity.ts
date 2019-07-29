
import { Entity, PrimaryGeneratedColumn, Column,  OneToMany, CreateDateColumn  } from 'typeorm';
import { BookEntity } from '../book/book.entity';

@Entity('autor')
export class AutorEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created: Date;

    @CreateDateColumn()
    updated: Date;

    @OneToMany( Type => BookEntity, book => book.autor )
    libro: string[];
}
