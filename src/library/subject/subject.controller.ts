import { Controller, Get, Post, Body } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectDTO } from './subject.dto';

@Controller('subject')
export class SubjectController {
    constructor(
        private readonly subjectService: SubjectService,
    ) {}

    @Get()
    getAll() {
        return this.subjectService.showAll();
    }
    @Post()
    create(@Body() subjeDTO: SubjectDTO) {
        return this.subjectService.create( subjeDTO);
    }
}
