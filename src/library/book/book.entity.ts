
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn, OneToMany } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';
import { SubjectEntity } from '../subject/subject.entity';

@Entity('libro')
export class BookEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @ManyToOne( Type => AutorEntity, autor => autor.libro)
    autor: AutorEntity;

    @OneToMany( type => SubjectEntity, subject => subject.libro)
    @JoinColumn()
    tipo: SubjectEntity[];
}
