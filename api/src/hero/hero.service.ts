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

  update(id: string, updateHeroDto: UpdateHeroDto) {
    return updateHeroDto;
  }

  remove(id: string) {
    return `This action removes a #${id} hero`;
  }
}
