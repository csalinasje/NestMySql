import { AutorEntity } from '../autor/autor.entity';
import { SubjectEntity } from '../subject/subject.entity';

export class BookDTO {
    title: string;
    autor: AutorEntity;
    tipo: SubjectEntity[];
}
