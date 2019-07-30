import { Injectable, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';
import { Repository } from 'typeorm';
import { AutorDTO } from './autor.dto';

@Injectable()
export class AutorService {
  constructor(
      @InjectRepository(AutorEntity)
      private autorRepository: Repository <AutorEntity>,
      ) {}

  async showAll() {
      return await this.autorRepository.find();
  }

  async create(data: Partial <AutorDTO>) { // Partial es cuando quieres mandar algunos datos, no todos
      const autor = await this.autorRepository.create(data);
      await this.autorRepository.save(autor);
      return autor;
  }

  async update(id: string, data: Partial <AutorDTO>) {
      await this.autorRepository.update({id}, data);
      const autor = await this.autorRepository.findOne({ where: {id}});
      return autor;
  }

  async read( id: string) {
      return await this.autorRepository.findOne({where: {id}});
  }

  async delete( id: string) {
      const autor = await this.autorRepository.findOne({where: {id}});
      await this.autorRepository.delete( id);
      return autor;
  }
}
