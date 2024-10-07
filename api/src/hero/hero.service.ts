import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroService {
  create(createHeroDto: CreateHeroDto) {
    return createHeroDto;
  }

  findAll() {
    return `This action returns all hero`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hero`;
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return updateHeroDto;
  }

  remove(id: number) {
    return `This action removes a #${id} hero`;
  }
}
