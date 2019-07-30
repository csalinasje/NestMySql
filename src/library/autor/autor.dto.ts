import { BookEntity } from '../book/book.entity';
import { IsString, IsArray } from 'class-validator';
export class AutorDTO {
    @IsString() name: string;
    @IsArray() libro: string[];
}

// tslint:disable-next-line: max-classes-per-file
export class AutorRO {
    @IsString() name: string;
    @IsArray() libro: string[];
    created: Date;
    update: Date;
}
