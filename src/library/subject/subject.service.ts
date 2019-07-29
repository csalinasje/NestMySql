import { Injectable } from '@nestjs/common';
import { SubjectEntity } from './subject.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectDTO } from './subject.dto';

@Injectable()
export class SubjectService {

    constructor(
    @InjectRepository(SubjectEntity)
    private subjectRepository: Repository <SubjectEntity>,
    ) {}

    async showAll() {
        return  await this.subjectRepository.find();
    }

    async create( data) {
        const subject = await this.subjectRepository.create(data);
        await this.subjectRepository.save(subject);
        return subject;
    }

    async findOne( id: string ) {
        const subject = await this.subjectRepository.findOne({ where: {id}});
        return subject;
    }

    async delete( id: string) {
        return await this.subjectRepository.delete( id );
    }

    async update( id: string, updateSubject: Partial <SubjectDTO>) {
        return await this.subjectRepository.update({id}, updateSubject );
    }

}
