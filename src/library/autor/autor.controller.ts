import { Controller, Get, Param, Put, Body, Post, Delete } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorDTO } from './autor.dto';

@Controller('autor')
export class AutorController {
    constructor( private readonly autorService: AutorService) {}

    @Get()
    showAll() {
        return this.autorService.showAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.autorService.read(id);
    }

    @Put(':id')
    update(@Body() updateAutor: AutorDTO, @Param('id') id: string) {
        return this.autorService.update(id, updateAutor);
    }

    @Post()
    create(@Body() autorDTO: AutorDTO) {
        return this.autorService.create( autorDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.autorService.delete(id);
    }

}
