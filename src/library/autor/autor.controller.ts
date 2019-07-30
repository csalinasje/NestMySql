import { Controller, Get, Param, Put, Body, Post, Delete, UsePipes } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorDTO } from './autor.dto';
import { ValidationPipe } from '../../shared/validation.pipe';
import { AutorEntity } from './autor.entity';

@Controller('autor')
export class AutorController {
    constructor( private readonly autorService: AutorService) {}

    @Get()
    showAll(): Promise<AutorEntity[]> {
        return this.autorService.showAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<AutorEntity> {
        return this.autorService.read(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    update(@Body() updateAutor: Partial<AutorDTO>, @Param('id') id: string): Promise<AutorEntity> {
        return this.autorService.update(id, updateAutor);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() autorDTO: AutorDTO): Promise<AutorEntity> {
        return this.autorService.create( autorDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<AutorEntity> {
        return this.autorService.delete(id);
    }

}
