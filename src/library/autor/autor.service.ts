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

  async showAll(): Promise<AutorEntity[]> {
      return await this.autorRepository.find();
  }

  async create(data: AutorDTO): Promise<AutorEntity> {
      const autor = await this.autorRepository.create(data);
      await this.autorRepository.save(autor);
      return autor;
  }

  async update(id: string, data: Partial <AutorDTO>): Promise<AutorEntity> {
      await this.autorRepository.update({id}, data);
      const autor = await this.autorRepository.findOne({ where: {id}});
      return autor;
  }

  async read( id: string): Promise<AutorEntity> {
      return await this.autorRepository.findOne({where: {id}});
  }

  async delete( id: string): Promise<AutorEntity> {
      const autor = await this.autorRepository.findOne({where: {id}});
      await this.autorRepository.delete( id);
      return autor;
  }
}
