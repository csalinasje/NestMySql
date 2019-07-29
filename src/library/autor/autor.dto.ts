import { BookEntity } from '../book/book.entity';
export class AutorDTO {
    name: string;
    libro: string[];
}

// tslint:disable-next-line: max-classes-per-file
export class AutorRO {
    name: string;
    libro: string[];
    created: Date;
    update: Date;
}
