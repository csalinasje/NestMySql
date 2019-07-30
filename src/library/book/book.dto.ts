import { AutorEntity } from '../autor/autor.entity';
import { IsString, IsNotEmpty } from 'class-validator';

export class BookDTO {
    @IsString() title: string;
    @IsNotEmpty() autor: AutorEntity;
}

// tslint:disable-next-line: max-classes-per-file
export class AutorRO {
    @IsString() title: string;
    @IsNotEmpty() autor: AutorEntity;
    created: Date;
    update: Date;
}
